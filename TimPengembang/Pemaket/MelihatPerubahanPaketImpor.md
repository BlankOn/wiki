# MelihatPerubahanPaketImpor
Berikut ini adalah cara mudah untuk melihat perubahan yang telah dilakukan oleh
pemelihara paket sebelumnya.
Keterangan: paket gnome-control-center digunakan sebagai contoh. Silakan
terapkan pada paket yang Anda pelihara.
   1. Buat cabang lokal dari cabang terakhir.
$ bzr branch http://dev.blankonlinux.or.id/bzr/lontara/gnome-control-center
     Akan terbentuk direktori gnome-control-center yang berisi cabang saat
     ini.
   1. Cari tahu versi yang digunakan saat itu.
$ head -n1 gnome-control-center/debian/changelog.ubuntu
gnome-control-center (1:2.21.4-0ubuntu1) hardy; urgency=low
     Versi yang digunakan adalah 1:2.21.4-0ubuntu1
   1. Download file diff asli milik Ubuntu untuk versi tersebut.
     Lokasi: ​https://code.launchpad.net/ubuntu/+source/<paket>/<versi>
     Contoh: ​https://code.launchpad.net/ubuntu/+source/gnome-control-
     center/1:2.21.4-0ubuntu1
     File yang di download (link terdapat pada halaman tersebut): ​https:/
     /code.launchpad.net/ubuntu/hardy/+source/gnome-control-center/1:
     2.21.4-0ubuntu1/+files/gnome-control-center_2.21.4-0ubuntu1.diff.gz
   1. Ekstrak dan terapkan patch
zcat gnome-control-center_2.21.4-0ubuntu1.diff.gz | patch -p0
     Akan terbentuk direktori gnome-control-center-2.21.4 yang berisi
     berkas asli dari Ubuntu.
   1. Ubah debian/changelog agar tidak terlalu mengotori berkas diff
$ mv gnome-control-center-2.21.4/debian/changelog gnome-control-center-2.21.4/
debian/changelog.ubuntu
   1. Buat diff
$ diff -urN -x .bzr gnome-control-center-2.21.4 gnome-control-center >
blankon.diff
Selamat mempelajari berkas blankon.diff
KategoriPemaket
Last modified on 06/18/2008 02:19:35 AM
#### 
    
 
 
 
 
 
---
 
