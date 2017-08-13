   BlankOn
 About_Trac
    * About_Trac
    * Preferences
    * Login
    * Help/Guide
    * Wiki
    * Roadmap
    * Browse_Repository
    * View_Reports
[q                 ]
    * BlankOn  /
    * Wiki  /
    * Infrastruktur  /
    * MenyalakanPabrikPaketV2
Menyalakan Pabrik Paket V2
   1. Masuk ke mesin alynne atau mesin yang dipasang di pabrik paket.
1.Langkah Selanjutnya
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
Screen : A : ganti windows
     ~AC : bikin windows screen baru
{{$ sudo screen -x iang/pabrik32}}
Last modified on 01/28/2012 07:33:52 PM
#### 
    
 
 
 
 
 
---
[**Daftar Isi Wiki BlankOn**](/DaftarIsi/README.md)
 
[**Indeks Wiki BlankOn**](/Indeks.md)
