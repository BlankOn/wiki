# Jigdo
## Pengantar
​Jigdo adalah alat bantu Debian untuk mengunduh berkas cetakan CD (.iso). Jigdo
sangat berguna pada kondisi Internet yang pas-pasan, karena Jigdo tidak
mengunduh keseluruhan CD, melainkan membangun ulang cetakan CD berdasarkan
perubahan-perubahan yang telah dilakukan dari rilis ke rilis. Walaupun Anda
belum memiliki cetakan CD pada awalnya, jigdo masih tetap digunakan, karena
jigdo akan membuat cetakan tersebut berdasarkan informasi yang ada di dalam
berkas metadata jigdonya.
## Persiapan
Instal paket jigdo-file
$ sudo apt-get install jigdo-file
## Tahap pertama
Langkah-langkah berikut dilakukan pada kali pertama.
   1. Buat direktori kerja
      Versi Meuligoe:
      $ mkdir -p ~/blankon/daily/20080922
      $ cd ~/blankon/daily/20080922
      Versi Nanggar:
      $ mkdir -p ~/blankon/daily/20090129
      $ cd ~/blankon/daily/20090129
   2. Unduh berkas .jigdo dan .template
      Versi Meuligoe:
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20080922/meuligoe-
      alternate-i386.jigdo
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20080922/meuligoe-
      alternate-i386.template
      Versi Nanggar:
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20090129/nanggar-
      alternate-i386.jigdo
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20090129/nanggar-
      alternate-i386.template
   3. Jalankan jigdo-lite
Versi Meuligoe:
$ jigdo-lite meuligoe-alternate-i386.jigdo
Versi Nanggar:
$ jigdo-lite nanggar-alternate-i386.jigdo
   1. Saat ditanya "Files to scan:" tekan Enter untuk mengabaikan
   2. Saat ditanya "Debian mirror ​http://ftp.debian.org/:" masukkan base URL
      dari mirror ubuntu terdekat, misalnya http://kambing.ui.edu/ubuntu/
      ...
      country code such as `de', or a country name like `United
      States', or a server name like `sunsite'.
      Debian mirror [http://debian.newdream.net]: http://kambing.ui.edu/ubuntu/
   3. Tekan enter untuk memulai proses, bila berhasil di direktori aktif akan
      dibuat berkas meuligoe-alternate-i386.iso atau nanggar-alternate-
      i386.iso.
## Bila ada rilis baru
Di sini kita dapat secara jelas melihat keuntungan menggunakan Jigdo. Bila ada
rilis baru, kita tidak perlu mengunduh berkas .iso-nya, tapi cukup mengulangi
langkah pertama di atas. Jigdo akan mengunduh paket-paket yang baru muncul pada
rilis saat ini, mirip dengan apt-get upgrade.
Untuk melakukannya kita lakukan pada direktori yang berbeda sebab kita masih
membutuhkan berkas .iso pada rilis sebelumnya karena nama berkas .iso-nya
menggunakan nama yang sama dengan rilis sebelumnya yaitu meuligoe-alternate-
i386.iso atau nanggar-alternate-i386.iso
   1. Kaitkan berkas .iso sebelumnya
      Versi Meuligoe:
      $ sudo mount -o loop ~/blankon/daily/20080922/meuligoe-alternate-i386.iso
      /mnt
      Versi Nanggar:
      $ sudo mount -o loop ~/blankon/daily/20090129/nanggar-alternate-i386.iso
      /mnt
   2. Buat direktori kerja baru
      Versi Meuligoe:
      $ mkdir -p ~/blankon/daily/20080923
      $ cd ~/blankon/daily/20080923
      Versi Nanggar:
      $ mkdir -p ~/blankon/daily/20090129.1
      $ cd ~/blankon/daily/20090129.1
   3. Unduh berkas .jigdo dan .template
      Versi Meuligoe:
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20080923/meuligoe-
      alternate-i386.jigdo
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20080923/meuligoe-
      alternate-i386.template
      Versi Nanggar:
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20090129.1/
      nanggar-alternate-i386.jigdo
      $ wget http://cdimage.blankonlinux.or.id/blankon/daily/20090129.1/
      nanggar-alternate-i386.template
   4. Jalankan jigdo-lite
      Versi Konde:
      Versi Meuligoe:
      $ jigdo-lite meuligoe-alternate-i386.jigdo
      Versi Nanggar:
      $ jigdo-lite nanggar-alternate-i386.jigdo
   5. Saat ditanya "Files to scan:" isi dengan "/mnt" atau lokasi lain tempat
      kita mengaitkan .iso rilis sebelumnya
   6. Saat ditanya "Debian mirror ​http://ftp.debian.org/:" masukkan base URL
      dari mirror ubuntu terdekat, misalnya http://kambing.ui.edu/ubuntu/
      ...
      country code such as `de', or a country name like `United
      States', or a server name like `sunsite'.
      Debian mirror [http://debian.newdream.net]: http://kambing.ui.edu/ubuntu/
   7. Tekan enter untuk memulai proses, bila berhasil di direktori aktif akan
      dibuat berkas meuligoe-alternate-i386.iso atau nanggar-alternate-
      i386.iso.
   8. Lepaskan kaitan .iso rilis sebelumnya dan hapus bila perlu.
      $ sudo umount /mnt
KategoriInfra
Last modified on 01/29/2009 01:07:10 PM
#### 
    
 
 
 
 
 
---
 
