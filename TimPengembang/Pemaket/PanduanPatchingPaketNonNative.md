# Panduan patching paket non-native (quilt)

Panduan ini dapat digunakan untuk menambal [paket native yang difork menjadi paket non-native](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#2-paket-native-dengan-modifikasi) atau [paket non-native](https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#3-paket-non-native) 

Dalam contoh ini, kita akan menggunakan studi kasus dari paket `calamares-settings-blankon`

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
- Patch akan dibuat di `.pc` dan `debian/patches`
- Perbarui informasi `Uploaders` di debian/control dan revisi di debian/changelog bila diperlukan.
- Commit semua perubahan yang ada ke git.



