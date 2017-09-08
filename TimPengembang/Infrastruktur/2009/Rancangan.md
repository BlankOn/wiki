# Rancangan Infrastruktur 2009

### Rancangan
Diskusi rancangan dilakukan di wiki:Infrastruktur/2009/Rancangan/Diskusi

## Infrastruktur BlankOn 2009: Terdistribusi
Komponen utama
  * Pabrik Paket
  * Pabrik CD

### Pabrik Paket
Entitas yang terlibat dalam infrastruktur pabrik paket:
   * submitter: pengirim tugas
   * manager: penjadwal tugas
   * worker: pelaksana tugas

Alur kerja pabrik paket:
   1. Pemaket membuat sebuah deskripsi tugas yang berisi informasi mengenai
      paket yang akan dibuat.
   1. Pemaket, yang berperan sebagai submitter, mengirimkan deskripsi tugas ke
      manager.
   1. Tugas yang berada dalam antrian akan didistribusikan oleh manager ke
      worker dengan dua cara:
         1. tugas dikirim ke worker (mekanisme push), dan
         2. tugas diminta oleh worker (mekanisme pull)
   1. Mesin worker yang sudah menerima tugas segera menjalankan tugas tersebut.
   1. Ketika tugas telah selesai dijalankan, hasil akan dikirim kembali ke
      manager
   1. Mesin manager menerima hasil dari worker dan memperbaharui repositori.

Informasi tugas dan hasil tugas harus dapat dikirim secara aman dan dapat
dipercaya, misalnya setiap pengiriman harus dilengkapi dengan tanda-tangan
digital.

Mesin worker yang menggunakan mekanisme push harus dapat dipantau statusnya
oleh manager. Sehingga manager dapat mengirim tugas dalam antrian ke mesin
tersebut jika mesin sedang dalam keadaan menganggur. Mesin worker seperti ini
disebut dengan mesin pasif.

Mesin worker yang hanya mendukung mekanisme pull bekerja dengan cara
sebaliknya. Tugas baru diterima ketika mesin worker meminta tugas kepada
manager. Mesin worker seperti ini disebut dengan mesin aktif.
Pekerjaan yang dikirim oleh manager sebaiknya bisa diatur sesuai dengan
kriteria kecocokan tertentu, misalnya:
   1. hanya menerima tugas kecil (perlu ada statistik tugas), atau
   2. tugas dipilih secara manual oleh orang yang ada di balik mesin worker
      tersebut, atau
   3. tugas apa saja yang berada pada posisi terdepan dalam antrian.

#### Deskripsi Tugas
Pada dasarnya, sebuah paket sudah dapat dibuat andai kode sumber aplikasi
beserta deskripsi paket Debian sudah tersedia (kedua hal ini kemudian akan
disebut dengan istilah kode sumber paket). Oleh karena itu, deskripsi paket
harus mengandung informasi mengenai kode sumber paket ini.

Deskripsi tugas tidak akan berisi kode sumber paket, namun hanya akan berisi
URL dimana kode sumber paket tersebut dapat diperoleh.
Kode sumber paket dapat disusun menjadi dua cara:
   1. Sebuah arsip komplit yang berisi kode sumber aplikasi dan deskripsi paket
      Debian.
   1. Arsip kode sumber aplikasi dan arsip kode deskripsi paket Debian (dikenal
      juga dengan berkas diff).

Arsip dapat diletakkan dalam sebuah berkas arsip terkompresi (dengan tar/gz
atau tar/bz2) maupun dalam sebuah repositori bzr. Jika repositori bzr
digunakan, maka perlu juga disebutkan lokasi repositori tersebut dan revisi
yang ingin diambil.

Selain berisi informasi mengenai kode sumber paket, deskripsi tugas juga berisi
repositori tujuan paket (misalnya lontara, lontara-security, dan meuligoe).
Contoh deskripsi tugas:

```
dist meuligoe
orig http://cecunguk.blankonlinux.or.id/~iang/orig/daluang/daluang-
0.3.orig.tar.gz
diff-bzr-url http://dev.blankonlinux.or.id/bzr/meuligoe/daluang/
diff-bzr-tag 0.3.0-0blankon1
dist meuligoe
orig-bzr-url http://dev.blankonlinux.or.id/bzr/meuligoe/ubiquity/
orig-bzr-tag 1.10.10-0blankon1
```

#### Format deskripsi tugas ***
Deskripsi tugas ditulis dalam bentuk teks dimana setiap barisnya akan berisi
dua hal, yaitu key dan value.

Daftar key yang dapat diterima:
   * dist: repositori tujuan
   * orig: URL menuju arsip berkas kode sumber aplikasi
   * orig-bzr-url: URL menuju repositori bzr yan berisi kode sumber aplikasi
   * orig-bzr-rev: Nomor revisi pada cabang bzr orig-bzr-url
   * orig-bzr-tag: Tag revisi pada cabang bzr orig-bzr-url
   * diff: URL menuju arsip berkas deskripsi paket Debian
   * diff-bzr-url: URL menuju repositori bzr yan berisi deskripsi paket Debian
   * diff-bzr-rev: Nomor revisi pada cabang bzr orig-bzr-url
   * diff-bzr-tag: Tag revisi pada cabang bzr orig-bzr-url

Penggunaan orig-bzr-url harus disertakan dengan orig-bzr-rev atau orig-bzr-tag.
Jika sudah ada orig, maka orig-bzr-url akan diabaikan. Begitu pula penggunaan
diff dan diff-bzr-url.

#### Pengiriman Tugas Dari submitter ke manager
Deskripsi tugas akan dikirim ke manager dengan menyertakan informasi tambahan
berikut ini.
   1. Identitas pengirim tugas (email)
Deskripsi tugas yang sudah ditambahi informasi tambahan ini selanjutnya akan
disebut dengan TUGAS (FIXME!)
Berkas TUGAS dikirim ke manager melalui beberapa cara, antara lain:
   1. dibuat dan dikirim secara online (ada halaman web untuk membuat TUGAS)
   2. dibuat lokal lalu dikirim melalui protokol tertentu

#### Penjadwalan Tugas
Mesin manager bertugas untuk menjadwalkan tugas yang masuk untuk kemudian
dikirim ke mesin worker.
Implementasi sederhana sistem penjadwalan ini adalah dengan membuat sistem
antrian. Tugas yang masuk akan dimasukkan ke dalam sistem antrian dan akan
dikirimkan secara berurutan kepada setiap permintaan tugas dari worker yang
masuk.

Tugas yang ada memiliki status sebagai berikut.
   1. NEW yang berarti tugas baru masuk ke dalam antrian.
   2. BUILDING yang berarti tugas sudah dikirimkan ke worker.
   3. DONE yang berarti tugas sudah selesai dikerjakan dan paket hasil sudah
      diterima oleh manager. Tugas dengan status ini dikeluarkan dari antrian.
   4. ERROR yang berarti worker mengalami masalah dalam menyelesaikan tugas
      ini.

Tugas yang memiliki status ERROR dapat dikeluarkan dari antrian jika masalah
disebabkan oleh kode sumber aplikasi dan deskripsi paket Debian yang
bermasalah. Jika masalah disebabkan oleh hal lain (misalnya repositori belum
sinkron), tugas ini dapat dijadwalkan ulang sehingga bisa dikirim ulang ke
worker.

TODO: bagaimana cara mendeteksinya?

Tugas yang memiliki status BUILDING tidak akan dikirim ke worker.

#### Pengiriman Tugas Dari manager ke worker
Mesin worker pasif akan menunggu kiriman tugas dari manager yang dapat dikirim
dengan beberapa cara, antara lain:
   1. Mesin worker menjalankan sebuah service yang menunggu koneksi dari
      manager. Koneksi yang masuk akan membawa deskripsi tugas dan memicu
      proses pabrik paket.

Mesin worker aktif akan secara aktif meminta tugas dari manager. Tugas
diberikan oleh manager sesuai dengan kriteria kecocokan seperti yang telah
dicontohkan sebelumnya dalam dokumen ini. Setelah menerima tugas, mesin worker
memulai proses pabrik paket.

Setiap tugas yang dikirim akan diberi status BUILDING.

#### Pengiriman Hasil Tugas ke manager

TODO

Bahan diskusi:
   * Pengiriman paket bisa ditunda sampai mesin online.
   * Paket dikirim pakai jalur apa?

### Pabrik CD
TODO

### Infrastruktur Keamanan
Seluruh pengiriman pesan dari setiap entitas yang terkait harus terjamin
keamanannya, setidaknya dalam aspek-aspek berikut.
   1. Penerima dan pengirim pesan harus dijamin benar
   2. Integritas pesan harus dijamin
   3. ...

Diskusi mengenai infrastruktur keamanan dapat ditemui di wiki:Infrastruktur/2009/Rancangan/Diskusi/Keamanan?
Last modified on 11/14/2008 02:47:16 AM

#### Attachments (1)
   * pabrik-paket.svg​ (50.2 KB) - added by mdamt 8 years ago. 0.1.1
 
---
 
