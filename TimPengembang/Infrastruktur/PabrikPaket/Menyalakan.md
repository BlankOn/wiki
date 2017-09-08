# Menyalakan Pekerja V2
Kategori: Infrastruktur/PabrikPaket/PekerjaV2/Menyalakan

Persiapan Sesi Screen
$ screen -S pabrik32
^A: multiuser on
^A: acladd root

Persiapan Chroot
$ cd /home/pabrik-paket/i386
$ sudo mount -t proc proc chroot/proc
$ sudo mount -t sysfs sysfs chroot/sys
$ sudo mount -o bind /dev chroot/dev

irgsh-node
$ cd /home/pabrik-paket/i386
$ sudo chroot chroot
(chroot)root# chmod 777 /dev/shm
(chroot)root# su - pabrik
(chroot)pabrik$ cd pabrik/irgsh-node
(chroot)pabrik$ ./bin/irgsh-node -l DEBUG

irgsh-uploader
$ cd /home/pabrik-paket/i386
$ sudo chroot chroot
(chroot)root# su - pabrik
(chroot)pabrik$ cd pabrik/irgsh-node
(chroot)pabrik$ ./bin/irgsh-uploader

Catatan :
^A" : Ganti Windows
~Ac : buat screen baru

Masuk ke screen :
$ sudo screen -x iang/pabrik32

Last modified on 04/20/2011 06:04:41 PM

---
 
