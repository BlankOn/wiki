
# Penyiapan Sistem Dasar

Untuk membuat LiveCD dibutuhkan sistem dasar yang berisi paket-paket yang harus ada dalam sebuah LiveCD. Debian mempunyai debootstrap yaitu alat untuk membuat sistem dasar debian tanpa harus tersedianya apt atau dpkg. debootstrap hanya mengunduh file .deb dari repository lalu mengekstraknya dalam suatu direktori yang selanjutnya dapat di chroot.

chroot adalah program untuk memindahkan pengguna yang sedang menjalankannya dari lingkungan sekarang ke lingkungan yang baru. chroot itu tidak ada hubungannya dengan pengguna bernama root, tapi berhubungan dengan direktori root (/) di sistem.

## Sebuah Analogi

Ibaratnya kita punya rumah yang sangat besar sekali. Didalamnya terdapat kamar-kamar, ruang tamu, ruang makan, dapur dsb lengkap dengan segala perabotannya. Di salah satu kamar kita bikin rumah baru lagi, lengkap dengan perabotan dan kamar-kamar lagi.

Nah dengan menjalankan chroot kita artinya masuk ke rumah dalam kamar tadi dan menutup pintu. Semua yang kita lakukan di situ, nyanyi-nyanyi, lompat-lompat, guling-guling, tiduran, corat coret tembok, boleh. Seolah-olah dunia baru... Tapi hanya berpengaruh pada rumah dalam kamar itu saja. Ini tidak bisa disebut mesin virtual. Sebab rumah baru itu bukan virtual. Tapi beneran. Perabotannya beneran. Kamarnya beneran. Foto yang ada di ruang tamu beneran. Penggorengan di dapur semuanya beneran.

## Instalasi debootstrap
```
$ sudo apt-get install debootstrap dchroot
```
Buatlah direktori kerja kita. misal livecd. lalu jalankan debootstrap didalamnya.
```
$ mkdir livecd
$ cd livecd
~/livecd$ sudo debootstrap intrepid chroot http://kambing.ui.edu/ubuntu
```
Catatan:

* intrepid: rilis yang digunakan 

* chroot: direktori yang akan dipakai (ubahlah sesuai selera anda) 

* ​http://kambing.ui.edu/ubuntu: mirror yang digunakan 

Ini akan memakan waktu cukup lama tergantung koneksi anda. Jika berhasil akan terlihat seperti log-debootstrap (attachment). debootstrap akan membuat struktur direktori root baru
```
~/livecd/chroot$ ll -d */ | awk '{print $8}' | xargs sudo du -h --max-depth=0
```

##### Keluaran:
```
4.8M    bin/
4.0K    boot/
12K     dev/
2.3M    etc/
4.0K    home/
8.0M    lib/
247M    lib64/
4.0K    media/
4.0K    mnt/
4.0K    opt/
4.0K    proc/
12K     root/
4.2M    sbin/
4.0K    srv/
4.0K    sys/
4.0K    tmp/
105M    usr/
57M     var/
```
Last modified 9 years ago Last modified on 10/31/2008 08:30:09 PM
Attachments (1)

[log-debootstrap](http://dev.blankonlinux.or.id/attachment/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PenyiapanSistemDasar/log-debootstrap) (17.5 KB) - added by kholis 9 years ago. "log-debootstrap"

Download all attachments as: [.zip](dev.blankonlinux.or.id/zip-attachment/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/PenyiapanSistemDasar/)
