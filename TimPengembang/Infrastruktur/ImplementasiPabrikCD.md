# Implementasi Pabrik CD
## Pabrik CD
    * Versi 0.1-20110926
### Alur umum
[GraphViz image]
#### Jahit
[GraphViz image]
### Moda Buat Baru
#### Jahit
*** Rootstrap ***
Rootstrap adalah proses menyiapkan struktur direktori sistem yang di dalamnya
dipasang paket-paket yang diinginkan. Rootstrap dilakukan menggunakan dalam
beberapa tahap.
** debootstrap **
Sistem dibuat dari 0 menggunakan debootstrap. Hasilnya adalah sebuah direktori
berisi sistem dasar, diberi nama $ROOTFS. Sistem ini harus dapat dimasuki
dengan melakukan chroot.
** Instalasi paket-paket berdasarkan profil **
sources.list dibuat dalam direktori $ROOTFS dengan menunjuk ke lumbung sesuai
profil. Sistem dasar hasil debootstrap kemudian diaktifkan menggunakan chroot.
Semua perintah $CHROOT di dokumen ini merupakan singkatan dari perintah
sudo chroot $ROOTFS
Di dalam chroot, perbarui semua paket yang telah dibuat menggunakan debootstrap
$CHROOT apt-get update
$CHROOT apt-get --purge --dist-upgrade
Setelah itu, instal paket bibit utama yang telah didefinisikan dalam $PACKAGES
$CHROOT apt-get install $PACKAGES
** Pasang kernel **
Yang diperlukan di sini sebenarnya bukan kernelnya, tapi modul-modul kernelnya.
Kernel dan initrd yang nantinya dipakai untuk boot dipasang terpisah dalam
bootloader.
$CHROOT apt-get install $KERNEL_PACKAGES
** Hapus paket daftar hitam **
Selanjutnya, hapus paket-paket yang masuk ke dalam daftar hitam. Ini berguna
untuk menghapus paket-paket yang tidak diinginkan namun terbawa karena
"recommends" oleh paket yang terpasang.
$CHROOT apt-get remove --force-yes --yes $BLACKLISTED_PACKAGES
** Pembersihan sistem **
Semua berkas-berkas sementara hasil pekerjaan di atas harus dibersihkan agar
tidak memakan tempat di struktur direktori yang dihasilkan.
$CHROOT apt-get --force-yes --yes clean
$CHROOT apt-get --force-yes --yes autoremove
$CHROOT rm -f /var/lib/dpkg/*-old
$CHROOT rm -f /var/cache/debconf/*-old
Setelah tahap ini, struktur direktori siap dicetak dalam sebuah RootFS.
*** RootFS ***
RootFS adalah berkas berisi cetakan struktur direktori yang sudah dibuat pada
proses rootstrap. RootFS dibuat menggunakan squashfs yang merupakan sistem
pemberkasan terkompresi.
$CHROOT mksquashfs / filesystem.squashfs -b 1048576 -processors $NUMPROC -no-
progress -e /filesystem.squashfs /unmounted
Hasil perintah di atas adalah berkas $ROOTFS/filesystem.squashfs.
### Moda Kembangkan
#### Jahit
*** Rootstrap ***
Last modified on 09/28/2011 12:03:26 PM
#### 
    
 
 
 
 
 
---
 
