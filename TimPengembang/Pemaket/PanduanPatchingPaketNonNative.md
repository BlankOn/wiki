# Panduan patching paket non-native (quilt)

Panduan ini dapat digunakan untuk menambal [paket native yang difork menjadi paket non-native](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#2-paket-native-dengan-modifikasi) atau [paket non-native](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#3-paket-non-native) 

Dalam contoh ini, kita akan menggunakan studi kasus dari paket `calamares-settings-blankon`

## Dengan perkakas Quilt

### Menyiapkan tarball orig

- Kloning berkas source ke `source`, 
```
git clone git@github.com:BlankOn/calamares-settings-blankon.git source
```
- Buat tarbal orig dengan pola nama berkas, `namapaket_nomorversi.orig.tar.gz`. Di kasus ini nama paket adalah `calamares-settings-blankon`, versi paket adalah `11.0.4`, maka nama berkas adalah `calamares-settings-blankon_11.0.4.orig.tar.gz`
```
tar -zcvf calamares-settings-blankon_11.0.4.orig.tar.gz source
```

### Membuat tambalan

- Kloning berkas spesifikasi Debian untuk paket ini,
```
  git clone git@github.com:blankon-packages/calamares-settings-blankon.git package
```
- Letakkan berkas tarball `calamares-settings-blankon_11.0.4.orig.tar.gz` tadi sejajar dengan direktori `package`
- Jika versi spesifikasi debian ini belum sama dengan tarball orig-nya, naikkan versinya dengan `dch -i` lalu commit perubahannya.
- Masuk ke `package`, jalankan `quilt refresh ` untuk memasitkan perubahan terakhir disesuaikan dengan tarball orig `calamares-settings-blankon_11.0.4.orig.tar.gz`.
- Jika ada perubahan dari `quilt refresh`, lakukan commit git terlebih dahulu.
- Buat patch baru dengan `quilt new namaTambalan.diff`. Quilt akan menyiapkan berkas tambalannya:
```
        modified:   .pc/applied-patches
        modified:   debian/patches/series
```
- Lakukan penambalan:
  - Tandai berkas yang mau disunting atau ditambahkan, `quilt add scripts/bootloader-config`
  - Lakukan perubahan/branding yang diperlukan, baik dengan menyunting maupun menambahkan berkas.
  - Simpan tambalan dengan `quilt refresh`
- Langkah di atas dapat dilakukan berulang kali untuk lebih dari 1 berkas.
- Jika sudah cukup, lakukan commit git atas semua perubahan yang ada.

## Dengan diff

- `apt-get source gdm3`
- `cp gdm3 gdm3.orig`
- Masuk ke `gmd3` dan lakukan perubahan
- Keluar dari `gdm3`
- Lakukan `diff` antara 2 direktori tersebut
- Hasil `diff` dimasukkan ke `debian/patches`

## Dengan debian/rules

Untuk berkas yang sifatnya binari (bukan teks) seperti berkas PNG atau *executable binary*, *patching* dilakukan lewat `debian/rules` dengan menambahkan baris yang akan menyalin berkas tersebut ke `path` yang diinginkan, contoh:

```
cp debian/BlankonLogoBlank.png panels/info/BlankonLogoBlank.png
```

Contoh lengkap pada paket `gnome-control-center`
```
$cat debian/rules
#!/usr/bin/make -f

include /usr/share/gnome-pkg-tools/1/rules/gnome-get-source.mk

export DEB_LDFLAGS_MAINT_APPEND = -Wl,-z,defs -Wl,-O1 -Wl,--as-needed
export DEB_CPPFLAGS_MAINT_APPEND = -DSSHD_SERVICE=\"ssh.service\"

%:
        dh $@ --with gnome

override_dh_autoreconf:
        dh_autoreconf --as-needed

override_dh_auto_configure:
        dh_auto_configure -- \
                --libexecdir=\$${prefix}/lib/gnome-control-center \
                --with-gnome-session-libexecdir=\$${prefix}/lib/gnome-session \
                --disable-update-mimedb

override_dh_auto_build:
        cp debian/BlankonLogoBlank.png panels/info/BlankonLogoBlank.png
        dh_auto_build

override_dh_missing:
        dh_missing --fail-missing
```
