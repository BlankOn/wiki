# Implementasi Mesin Kompilasi
## Persiapan
### Mesin kompilasi pribadi
Mesin kompilasi dapat dibuat dengan metoda chroot pada komputer yang sudah
terpasang Ubuntu di dalamnya. Dalam dokumen ini lingkungan pembangunan akan
dilakukan pada direktori /konde-builder (Silakan ubah direktori ini sesuai
dengan selera Anda). Gunakan nama lain bila suka. Gunakan Ubuntu versi terakhir
(Feisty Fawn), dan lakukan:
sudo apt-get install dchroot debootstrap
sudo mkdir /konde-builder
sudo debootstrap --variant=buildd --arch i386 feisty /konde-builder http://
archive.ubuntu.com/ubuntu
debootstrap akan mengunduh semua paket minimal dari Feisty dan menginstalnya
pada direktori /konde-builder.
Setelah selesai salin berkas /etc/resolv.conf ke dalam direktori /konde-builder
 sudo cp /etc/resolv.conf /konde-builder/etc/resolv.conf
Kemudian sunting berkas /etc/apt/sources.list di dalam /konde-builder
sudo vi /konde-builder/etc/apt/sources.list
lalu isi dengan:
deb http://archive.ubuntu.com/ubuntu gutsy main restricted universe multiverse
deb http://security.ubuntu.com/ubuntu gutsy-security main restricted universe
multiverse
Setelah itu kita boleh masuk ke /konde-builder
sudo chroot /konde-builder
dpkg-reconfigure locales
Install beberapa paket awal yang diperlukan pada mesin kompilasi
apt-get update
apt-get install wget debconf devscripts gnupg nano
Ingat, lakukan dalam /konde-builder, jika tidak maka yang akan diganti adalah
konfigurasi mesin utama Anda!
Kemudian perbarui semua paket dalam /konde-builder:
apt-get update
apt-get dist-upgrade
Persiapan selesai, saat ini Anda punya dua distro aktif, Feisty (di komputer
utama) dan Gutsy (di dalam /konde-builder). Mesin kompilasi siap digunakan.
Sinkronkan basis data paket dengan Gutsy secara teratur (apt-get update && apt-
get upgrade).
Mesin kompilasi pribadi ini nanti yang Anda gunakan untuk membuat, mengetes,
dan menginstal paket yang Anda pelihara.
### Mesin kompilasi otomatis
Bila Anda juga ingin memasang mesin kompilasi otomatis maka instal dan
konfigurasikan komponen pembangun, yaitu pbuilder:
sudo apt-get install pbuilder
pbuilder create
Mesin kompilasi otomatis ini adalah mesin yang digunakan oleh proyek Konde
untuk membuat kompilasi semua paket yang akan disertakan dalam Konde.
## Program pembangun otomatis
...akan diisi nanti...
## Referensi
    * ​https://wiki.ubuntu.com/DebootstrapChroot
## Komentar
    * Ini ada script yang dipakai untuk membuat CD Ubuntu secara otomatis,
      silakan untuk yg ingin lihat langsung download di ​https://
      code.launchpad.net/~kamion/ubuntu-cdimage/mainline dan untuk tutorial
      penggunaannya bisa dibaca melalui ​http://thaiopensource.org/development/
      suriyan/wiki/MakeACD
      -- AndyApdhani (2007-05-19 06:07:06)
    * Karena ini mesin kompilasi, mestinya wajib punya sources.list yang
      mengacu ke paket-paket source kan?
      deb-src http://archive.ubuntu.com/ubuntu gutsy main restricted universe
      multiverse
      deb-src http://security.ubuntu.com/ubuntu gutsy-security main restricted
      universe multiverse
      -- AndikaTriwidada (2007-05-26 13:42:37)
    * Andika: Tidak perlu pak, sebab paket kode sumber diambil langsung
      menggunakan bazaar. Dia hanya perlu paket2 -dev saja -- mdamt
KategoriInfra
Last modified on 06/17/2008 12:20:55 AM
#### 
    
 
 
 
 
 
---
 
