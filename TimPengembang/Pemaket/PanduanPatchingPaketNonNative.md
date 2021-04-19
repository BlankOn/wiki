# Panduan patching paket non-native (quilt)

Panduan ini dapat digunakan untuk menambal [paket native yang difork menjadi paket non-native](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#2-paket-native-dengan-modifikasi) atau [paket non-native](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#3-paket-non-native) 

Dalam contoh ini, kita akan menggunakan studi kasus dari paket `calamares-settings-blankon`

## Dengan dpkg-source

### Menyiapkan tarball orig

- Kloning berkas source ke `source`, 
```
git clone git@github.com:BlankOn/calamares-settings-blankon.git source
```
- Buat tarbal orig dengan pola nama berkas, `namapaket_nomorversi.orig.tar.gz`. Di kasus ini nama paket adalah `calamares-settings-blankon`, versi paket adalah `11.0.4`, maka nama berkas adalah `calamares-settings-blankon_11.0.4.orig.tar.gz`
```
tar -zcvf calamares-settings-blankon_11.0.4.orig.tar.gz source
```

### Membuat patch

- Kloning berkas spesifikasi Debian untuk paket ini,
```
  git clone git@github.com:blankon-packages/calamares-settings-blankon.git package
```
- Masuk ke `package`, lakukan perubahan/branding yang diperlukan
- Buat patch dengan perintah `dpkg-source --commit`
- Masukkan nama patch, misalnya `BlankOn branding`
```
Enter the desired patch name: BlankOn branding
```
- Anda akan dibawa ke aplikasi penyunting teks untuk menyunting deskripsi patch. Tuliskan deskripsi sesuai patch yang dilakukan. Untuk metadata, cukup sesuaikan nilai untuk `Origin` (alamat lumbung source) dan `Bug` (dapat diisi pranala tiket). Contoh,
```
Origin: other, git@github.com:BlankOn/calamares-settings-blankon.git
Bug: https://github.com/BlankOn/Verbeek/issues/168
```
- Patch akan dibuat di `.pc` dan `debian/patches`
- Perbarui informasi `Uploaders` di debian/control dan revisi di debian/changelog bila diperlukan.
- Commit semua perubahan yang ada ke git.


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
