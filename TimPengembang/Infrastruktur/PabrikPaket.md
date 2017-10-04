# Pabrik Paket

Silakan kunjungi halaman Launchpad di bawah ini untuk melihat status dokumen
ini. Silakan bergabung dalam tim ​blankon-infrastruktur bila ingin menyunting
halaman ini.
    * Papan Informasi di Launchpad: ​Pabrik_Paket_BlankOn
## Ringkasan
Mesin pabrik paket (dahulu disebut mesin kompilasi otomatis) adalah mesin yang
membuat paket-paket buatan Pemaket BlankOn dan memasangnya dalam repositori
BlankOn. Mesin ini seyogyanya dapat terhubung ke Internet 24 jam agar dapat
segera membuatkan paket tanpa membuat pemaket menunggu lama.
## Latar Belakang
Tidak semua pemaket memiliki komputer yang dapat digunakan sebagai pembuat
paket. Lingkungan pembangunan yang seragam dibutuhkan untuk membuat paket-paket
yang dapat diinstal tanpa ada masalah ketergantungan paket, toolchain yang
tidak dipasang dengan benar, dan masalah-masalah lain.
## Studi Kasus
Rudi adalah pemaket Konde. Beliau bertanggung jawab pada paket-paket tema
Konde. Setelah membuat dan mencoba paket buatannya pada komputer pribadinya,
Rudi menerbitkan paket buatannya itu ke dalam gudang kode BlankOn di launchpad
menggunakan bazaar. Sesaat kemudian, mesin kompilasi mengendus adanya paket
baru buatan Rudi. Mesin kompilasi langsung mengunduh paket tersebut, mencoba
membuat paketnya, dan bila berhasil paket tersebut akan segera tersedia di
Mesin repositori paket BlankOn?.
## Cakupan
Dokumen ini membahas tentang pabrik paket BlankOn, cara kerja dan kebutuhan
minimalnya.
## Rancangan
Pabrik paket dapat terdiri dari satu hingga n mesin. (n > 0).
Pabrik paket perlu terhubung ke Internet agar dapat segera bekerja bila ada
paket baru yang perlu dibuat.
Perlu ada situs khusus yang menampilkan daftar antrian paket yang belum dibuat,
daftar pabrik paket yang sedang bekerja, dan status masing-masing proses
pembuatan paket (bila ada kegagalan juga dicantumkan di situs ini). Situs ini
dapat dibuat dengan skrip sederhana.
Pabrik paket merupakan program sederhana yang dijalankan secara periodik (5
menit sekali?). Saat dijalankan, ia akan mengunduh berkas teks yang ada di
Internet. Isinya adalah daftar paket yang hendak dibuat. Daftar ini
dimodifikasi oleh pembuat paket. Bila ada paket baru yang didaftarkan oleh
pembuat paket, ia akan melakukan hal-hal berikut secara berurutan:
    * pengunduhan paket
    * pemeriksaan ketergantungan paket dan mengunduh semua paket yang
      dibutuhkan paket ini untuk dikompilasi (build-dependencies)
    * melakukan kompilasi
    * mengunggah hasil paket ke mesin repositori
skema menyusul
## Implementasi
Sebagian masih dalam proses penulisan di halaman Implementasi_Pabrik_Paket
## Masalah
    * Pabrik paket menggunakan mesin sementara.
    * Pembuat skrip pembangun otomatis belum ada.
## Agenda Wacana dan Diskusi
    * Bila pabrik tidak tersedia, proyk masih dapat dilanjutkan dengan resiko
      paket yang tidak konsisten, gagal instal di komputer lain, dsb.
    * Saya mungkin dapat menggunakan komputer di rumah sebagai mesin kompilasi
      untuk i386 dan amd64 tapi tidak reliabel (reboot, beban tinggi, dsb). -
      - mdamt
    * Saya juga mungkin dapat membuatkan skrip pembangun otomatis namun belum
      dapat menjamin karena keterbatasan waktu. Ada yang dapat meluangkan
      waktu? Paling tidak mencari proyek serupa di launchpad? -- mdamt
    * bagaimana dengan mesin sumbangan dari DepKomInfo????? -- [:udienz:
      UdienzMahyuddin]
KategoriBlankOn KategoriInfra
Last modified on 06/17/2008 12:28:03 AM
#### 
    
 
 
 
 
 
---
 
