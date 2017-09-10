# Alur Kerja Proyek BlankOn

## Pengantar
Halaman ini menjelaskan alur kerja proyek BlankOn 2
## Para pemeran
### Steering
Dipimpin oleh Panglima, Steering mengendalikan proyek BlankOn 2. Arah dan
tujuan, arsitektur, dan isi BlankOn ditentukan oleh tim ini.
### Pengembang
Skup pengembang di sini dipersempit menjadi tim pemaket dan tim kesenian. Tim
ini menghasilkan produk akhir berupa paket yang siap diinstal.
Lihat juga: Pemaket dan Artwork
### Infrastruktur
Tim ini menyediakan infrastruktur proyek. Mulai dari gudang kode, repositori,
pabrik paket, pabrik CD, dan aplikasi pendukung lainnya. Kebanyakan
infrastruktur sudah disediakan oleh Canonical dalam bentuk Launchpad.net.
Lihat juga: Infrastruktur
### Tester
Tim ini mengetes semua komponen BlankOn, mulai dari instalasi paket-paket
melalui apt-get maupun instalasi sistem secara penuh dalam berbagai sistem dan
konfigurasi komputer.
Lihat juga: [link ke tester]
### Bugmaster
Tim ini mengatur lalulintas bug supaya sampai ke tangan yang seharusnya,
prinsipnya, bug harus ditangani oleh pihak yang memang seharusnya memperbaiki
bug tersebut, dan memastikan perbaikannya dilakukan dengan baik dan benar.
Lihat juga: [link ke bug]
## Alur kerja
[/raw-attachment/wiki/AlurKerja/alur-kerja-blankon-2.0705.jpg]
Pertama kali, tim infrastruktur menyediakan segala fasilitas yang dibutuhkan.
Dalam saat yang sama tim pemaket menentukan isi paket yang akan tersedia untuk
BlankOn, dengan arahan dari Steering. Daftar jadi paket dibuat dalam bentuk
paket meta yang kemudian disimpan dalam gudang kode.
Tim kesenian bertugas membuat dan mengumpulkan materi-materi yang akan menjadi
ciri khas BlankOn. Materi-materi tersebut dikirim ke tim pemaket melalui gudang
kode untuk kemudian dibuatkan paket-paketnya.
Setiap ada perubahan paket, tim pemaket memberitahukan pabrik paket tentang
perubahan itu dengan menyunting halaman wiki tertentu (alamat menyusul).
Perubahan disimpan dalam gudang kode.
Pabrik paket akan secara otomatis mengambil paket yang ada dalam gudang kode
dan merubahnya menjadi paket Debian. Paket Debian tersebut dikirim ke
repositori setelahnya.
Tester mencoba instalasi paket melalui apt-get.
Pabrik CD akan mengumpulkan semua paket khas BlankOn dan Gutsy dan membuat
cetakan CD.
Cetakan CD kemudian dites oleh tester.
Cetakan CD dinikmati masyarakat.
Tester dan masyarakat melaporkan adanya bug ke launchpad.
Bugmaster menganalisis laporan tersebut dan menyerahkannya ke yang
berkepentingan. Pengembang yang bertanggung jawab harus memperbaiki (atau tidak
memperbaiki tergantung situasi) dan meletakkan perbaikan di gudang kode dan
membuat paket yang baru.

KategoriBlankOn

Last modified on 06/15/2008 02:18:30 PM
#### Attachments (1)
    * alur-kerja-blankon-2.0705.jpg​ (43.9 KB) - added by anonymous 9 years
      ago.

