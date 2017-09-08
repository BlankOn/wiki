# Mesin Kompilasi
Silakan kunjungi halaman Launchpad di bawah ini untuk melihat status dokumen
ini. Silakan bergabung dalam tim ​konde-infrastruktur bila ingin menyunting
halaman ini.
    * Papan Informasi di Launchpad: ​Mesin_Kompilasi_Konde
## Ringkasan
Mesin kompilasi otomatis adalah mesin yang membuat paket-paket buatan Pemaket
Konde dan memasangnya dalam repositori Konde. Mesin ini seyogyanya dapat
terhubung ke Internet 24 jam agar dapat segera membuatkan paket tanpa membuat
pemaket menunggu lama.
## Latar Belakang
Tidak semua pemaket memiliki komputer yang dapat digunakan sebagai pembuat
paket. Lingkungan pembangunan yang seragam dibutuhkan untuk membuat paket-paket
yang dapat diinstal tanpa ada masalah ketergantungan paket, toolchain yang
tidak dipasang dengan benar, dan masalah-masalah lain.
## Studi Kasus
Rudi adalah pemaket Konde. Beliau bertanggung jawab pada paket-paket tema
Konde. Setelah membuat dan mencoba paket buatannya pada komputer pribadinya,
Rudi menerbitkan paket buatannya itu ke dalam gudang kode Konde di launchpad
menggunakan bazaar. Sesaat kemudian, mesin kompilasi mengendus adanya paket
baru buatan Rudi. Mesin kompilasi langsung mengunduh paket tersebut, mencoba
membuat paketnya, dan bila berhasil paket tersebut akan segera tersedia di
repositori paket Konde.
## Cakupan
Dokumen ini membahas tentang mesin kompilasi Konde, cara kerja dan kebutuhan
minimalnya.
## Rancangan
Mesin kompilasi dapat terdiri dari satu hingga n mesin. (n > 0).
Mesin kompilasi perlu terhubung ke Internet agar dapat segera bekerja bila ada
paket baru yang perlu dibuat.
Perlu ada situs khusus yang menampilkan daftar antrian paket yang belum dibuat,
daftar mesin kompilasi yang sedang bekerja, dan status masing-masing proses
pembuatan paket (bila ada kegagalan juga dicantumkan di situs ini). Situs ini
dapat dibuat dengan skrip sederhana.
skema menyusul
## Implementasi
Sebagian masih dalam proses penulisan di halaman ImplementasiMesinKompilasi
## Masalah
    * Donatur mesin kompilasi belum ada.
    * Pembuat skrip pembangun otomatis belum ada.
## Agenda Wacana dan Diskusi
    * Bila mesin kompilasi tidak tersedia, proyk masih dapat dilanjutkan dengan
      resiko paket yang tidak konsisten, gagal instal di komputer lain, dsb.
    * Saya mungkin dapat menggunakan komputer di rumah sebagai mesin kompilasi
      untuk i386 dan amd64 tapi tidak reliabel (reboot, beban tinggi, dsb). -
      - mdamt
    * Saya juga mungkin dapat membuatkan skrip pembangun otomatis namun belum
      dapat menjamin karena keterbatasan waktu. Ada yang dapat meluangkan
      waktu? Paling tidak mencari proyek serupa di launchpad? -- mdamt
KategoriInfra
Last modified on 04/03/2009 05:27:36 PM
#### 
    
 
 
 
 
 
---
 
