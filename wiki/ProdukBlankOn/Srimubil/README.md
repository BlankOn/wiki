# Srimubil


Srimubil adalah racikan BlankOn untuk digunakan pada komputer-komputer jinjing yang berukuran kecil (sering dikenal dengan istilah *Netbook*) dari beragam arsitektur prosesor.

**Arsitektur**

Arsitektur dasar mengadopsi Debian dan Ubuntu

**Paket tambahan**

 * Desktop mobile
 * Meego UX

**Adaptasi**
 * Kernel
 * initramfs
 * Setting xorg.conf
 * Setting tombol2 tertentu (tombol email, dst)
 * Setting pengaturan daya

**Proses kerja**
 1. Membuat daftar paket-paket yang akan dibawa oleh Srimubil
 1. Membuat paket-paket dari daftar yang belum tersedia di Lumbung Paket BlankOn
 1. Persiapan paket adaptasi
 1. Persiapan paket tambahan
 1. Pembuatan profil di pabrik CD
 1. Penyediaan cetakan ISO/IMG yang siap rekam untuk masing-masing perangkat keras. Bisa juga hanya disediakan cetakan generik, dan saat instalasi pengguna bisa memilih tipe komputernya dan kemudian dilanjutkan dengan instalasi paket-paket adaptasi.

**Target awal**
Berikut adalah target eksperimen Srimubil dan pengelolanya:
  + Intel Atom
   * [/wiki/Srimubil/HP2140 HP Mini 2140] (mdamt)
   * Acer Aspire One (mdamt, waktu peminjaman terbatas, jadi jika ada sukarelawan lain silakan diganti)
   * Acer Aspire One (princeofgiri)
   * HP Mininote 2140 (milisdad)
   * Toshiba NB200 (ruckuus)
   * Vanbook P1N-45125 - Intel Pinetrail N450 (ruckuus)
   * Axioo DJH A615 (faqihjakha)

  + AMD Geode
   * OLPC XO-1 (mdamt)
   * Quantel T8 (Rabitya)

  + ARMv7
   * Nokia N810 (mdamt)
   * Nokia N800 (mdamt)
   * Nokia N810 (fadly kasim)

**Daftar Tugas**
 * Daftar Paket Hulu
   Daftar paket asli dari meego [wiki:Srimubil/DaftarPaketHulu Tautan](http://dev.blankonlinux.or.id/wiki/Srimubil/DaftarPaketHulu)

 * Daftar Paket Lumbung
   Daftar paket yang tersedia di lumbung BlankOn [wiki:Srimubil/DaftarPaketLumbung Tautan]([http://dev.blankonlinux.or.id/wiki:Srimubil/DaftarPaketLumbung Tautan)

 * Daftar Paket Tugas
   Daftar paket yang belum tersedia di lumbung BlankOn dan harus dipaketkan lalu dikirim ke lumbung BlankOn. [Srimubil/DaftarPaketTugas – BlankOn](http://dev.blankonlinux.or.id/wiki/Srimubil/DaftarPaketTugas)

**Tautan Penting**

 * [Gudang Kode Meego](http://meego.gitorious.org)
 * [Contekan untuk membuat bibit paket](http://meego.gitorious.org/meego-netbook-ux/meego-jhbuild-netbook/)




---
 



