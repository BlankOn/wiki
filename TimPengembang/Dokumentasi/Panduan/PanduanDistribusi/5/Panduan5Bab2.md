# BAB II : Memasang BlankOn Linux

**Panduan BlankOn 5**

Bab ini membahas cara memasang BlankOn Linux di komputer. Pemasangan BlankOn
Linux sangat mudah dilakukan jika Anda sudah memahami persiapan dan langkah-
langkah apa saja yang perlu dilakukan. Pada bab ini, dibahas mengenai persiapan
dan langkah-langkah melakukan pemasangan BlankOn Linux.

### Kebutuhan sistem
Sebelum melakukan pemasangan, terlebih dahulu komputer Anda harus memenuhi
syarat spesifikasi minimal agar BlankOn Linux bisa berjalan dengan lancar.
Berikut adalah syarat spesifikasi minimal untuk BlankOn Linux 5.0 edisi Reguler:
  * Prosesor setara Pentium IV atau Celeron,
  * Memori RAM 512 MB,
  * Kartu Video atau VGA minimal memiliki memori 64 MB untuk efek desktop,
      dan
  * Harddisk dengan ukuran 6 GB.

Jika tidak memenuhi syarat diatas, Anda bisa menggunakan BlankOn Linux edisi
Minimalis yang lebih ringan daripada BlankOn Linux edisi Reguler.

### Cara Mendapatkan CD BlankOn
Untuk mendapatkan CD BlankOn Linux, Anda bisa mengunduh image atau cetakan CD-
nya dari situs ​http://cdimage.blankonlinux.or.id. Berkas cetakan tersebut
selanjutnya dibakar ke CD kosong menggunakan aplikasi pembakar CD seperti
Brasero, K3b, Nero, Roxio, dsb.

Di setiap edisinya, terdapat dua jenis CD yang bisa Anda unduh, yaitu :
  * Live CD, berisi sistem operasi BlankOn Linux yang bisa dijalankan dari CD
      tanpa perlu pemasangan di komputer. Jikalau Anda ingin memasangnya, Anda
      juga bisa menggunakan CD ini untuk memasang BlankOn. CD ini cocok untuk
      keperluan mencoba BlankOn Linux sebelum melakukan pemasangan.
  * Alternate CD, berisi aplikasi pemasang BlankOn dalam bentuk grafis teks
      yang sangat ringan.

TIP: Jika mengunduh terasa lambat, Anda bisa memanfaatkan situs cermin (mirror)
sebagai sumber mengunduh berikut ini :
  * ​http://kambing.ui.ac.id/iso/blankon
  * ​http://mirror.unej.ac.id/blankon-cd
  * ​ftp://dl2.foss-id.web.id/iso/blankon
  * ​http://repo.ugm.ac.id/iso/blankon
  * ​http://jaran.undip.ac.id/iso/blankon
  * ​http://mugos.ums.ac.id/iso/Blankon

Bagi Anda yang memiliki koneksi internet terbatas atau bahkan tidak memiliki
koneksi internet sama sekali, jangan khawatir. Anda bisa membeli CD BlankOn
Linux melalui toko penjual CD/DVD Linux atau meminjamnya dari teman yang telah
memilikinya. Berikut adalah beberapa Toko penjual CD/DVD Linux yang ada di
Indonesia :
  * Juragan Kambing (​http://juragan.kambing.ui.ac.id)
  * Toko Baliwae (​http://toko.baliwae.com)
  * Gudanglinux (​http://gudanglinux.com)
  * dll.

### Persiapan menjelang pemasangan
Sebelum melakukan pemasangan BlankOn Linux, lakukan beberapa persiapan seperti
berikut :
   1. Persiapkan CD dari BlankOn Linux sebagai bekal untuk proses pemasangan,
      baca kembali subbab sebelumnya untuk mengetahui cara mendapatkan CD
    Linux, pastikan CD dalam keadaan baik agar proses pemasangan
      lancar.
   1. Backup atau buat cadangan dari data penting Anda ke media penyimpanan
      cadangan (seperti Flash Disk, Harddisk lain, CD/DVD) agar data Anda aman
      dan terhindar dari resiko kehilangan data.
   1. Tentukan skema partisi harddisk yang Anda inginkan. Partisi merupakan
      bagian ruang-ruang data yang terdapat di harddisk. Jika Anda ingin
      melakukan dual-boot (terdapat dua sistem operasi dalam satu komputer),
      Anda harus membuat partisi baru pada harddisk komputer yang nantinya akan
      digunakan sebagai tempat pemasangan BlankOn Linux. Pembahasan lebih
      lanjut dijelaskan pada subbab tentang langkah pemasangan.
   1. Pastikan untuk menjaga kestabilan tegangan listrik. Hal ini untuk
      menghindari listrik yang tiba – tiba padam saat pemasangan dan
      menyebabkan terjadinya kerusakan fisik pada komputer (terutama harddisk).
   1. Lakukan penyetelan BIOS agar komputer membaca CD terlebih dahulu untuk
      proses booting. Silahkan merujuk ke manual komputer atau motherboard Anda
      mengenai cara melakukan penyetelan ini.

Selain melakukan persiapan seperti yang dijelaskan di atas, Anda perlu
menentukan metode pemasangan BlankOn Linux yang ingin Anda gunakan. Ada tiga
metode untuk melakukan instalasi BlankOn Linux, antara lain :
  * Melalui Pemasang didalam Live CD.
  * Melalui Alternate CD.

Untuk pemula, Anda bisa mencoba menggunakan Pemasang yang ada didalam Live CD.
Karena Anda bisa mencoba terlebih dahulu BlankOn Linux 5.0 sebelum digunakan.

### Memasang BlankOn Linux melalui Live CD
Untuk pemasangan melalui Live CD, Anda harus mempersiapkan Live CD dari BlankOn
Linux 5.0. Masukkan CD tersebut ke dalam CD/DVD-ROM drive pada komputer Anda.
Restart komputer Anda dan Anda akan melihat menu awal dari Live CD BlankOn 5.0,
tekan tombol Enter untuk masuk ke modus Live CD, maka sistem operasi BlankOn
Linux 5.0 akan mulai dijalankan melalui CD. Tunggu sebentar sampai desktop
BlankOn Linux 5.0 muncul. Proses booting memakan waktu sekitar 1 menit lamanya.
[](/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/livecd-booting.png)

TIP: Jika terdapat masalah pada saat menampilkan antarmuka grafis, Anda bisa
restart komputer dan memilih menu “BlankOn Live Failsafe” pada menu awal Live
CD BlankOn.

Setelah proses booting selesai, maka Anda akan melihat desktop BlankOn Linux
5.0 yang sangat cantik. Anda bisa mencobanya terlebih dahulu sebelum
memasangnya ke harddisk.

Sebelum memulai pemasangan, terlebih dahulu persiapkan partisi kosong untuk
yang akan digunakan sebagai tempat pemasangan BlankOn Linux. Jika semua bagian
harddisk sudah terpartisi, Anda bisa memotong partisi harddisk terakhir dengan
langkah berikut ini :

PERINGATAN! Jika partisi tersebut merupakan partisi Windows, lakukan terlebih
dahulu Defragmenting melalui tools “Disk Defragmenter” yang terdapat di sistem
operasi Microsoft Windows. Hal ini untuk menghindari partisi yang rusak pada
saat melakukan pemotongan partisi.
   1. Buka aplikasi Editor Partisi melalui menu System > Administrasi > Editor
      Partisi pada BlankOn reguler, atau menu BlankOn > Peralatan Sistem >
      Editor Partisi pada BlankOn minimalis.
   1. Pada baris partisi yang ditampilkan, klik kanan pada partisi terakhir
      (yang paling kanan), lalu pilih menu “Ubah Ukuran/Pindahkan?”.
   1. Tentukan ukuran baru dari partisi yang Anda potong pada opsi “Ukuran Baru
      (MiB)”. Kemudian, klik tombol “Ubah Ukuran/Pindahkan?”.
   1. Terakhir, klik tombol “Terapkan” pada toolbar untuk menerapkan perubahan
      yang dilakukan.

Sekarang, Anda sudah memiliki partisi kosong yang bisa Anda manfaatkan untuk
pemasangan BlankOn Linux. Untuk melakukan pemasangan BlankOn Linux, klik ganda
ikon “Pasang” pada Desktop. Maka akan muncul wizard yang membantu Anda dalam
pemasangan BlankOn Linux. Berikut uraian setiap langkahnya :
   1. Selamat Datang
      Pada langkah ini, pilih bahasa pengantar yang ingin Anda gunakan dalam
      proses pemasangan. Setelah itu, klik tombol “Maju”.
   1. Memilih Lokasi Anda
      Pilih lokasi tempat tinggal Anda pada peta yang disediakan. Kemudian,
      klik tombol “Maju”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/ubiquity-area.png]
   1. Susunan Papan Ketik
      Pilih jenis papan ketik (keyboard) yang Anda gunakan. Jenis papan ketik
      yang umum digunakan di Indonesia adalah jenis Amerika Serikat (USA).
      Kemudian, klik tombol “Maju”.
   1. Mempersiapkan ruang (partisi) Harddisk
      Disini, Anda akan memilih skema tata ruang partisi harddisk yang Anda
      inginkan. Jika Anda ingin menghapus semua isi data dan partisi yang ada
      di harddisk, pilih mode “Terpandu – gunakan seluruh Harddisk”. Sedangkan,
      jika Anda ingin menggunakan ruang kosong/partisi kosong pada harddisk
      tanpa perlu mengganggu partisi lainnya, pilih mode “Gunakan Area Kosong
      yang Besar dan Menyatu”. Setelah itu, klik tombol “Maju”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/ubiquity-partitioning.png]
   1. Isi data diri
      Isi nama lengkap anda, nama akun pengguna, dan sandi sesuai dengan yang
      Anda inginkan. Nama akun pengguna dan sandi akan Anda gunakan pada saat
      masuk ke sistem (login). Nama akun pengguna dan sandi ini juga akan
      memiliki hak administratif untuk melakukan pengaturan sistem secara
      mendalam. Jika Anda ingin masuk otomatis ke sistem tanpa perlu memasukkan
      id pengguna dan password, klik pada opsi “Masuk secara otomatis”.
      Selanjutnya, klik tombol “Maju”.
   1. Migrasi data dan dokumen
      Jika Anda ingin memigrasikan data Anda dari sistem operasi lain yang
      sudah terinstal ke sistem operasi BlankOn yang akan di-instal, beri tanda
      centang pada nama sistem operasi yang ingin Anda migrasikan datanya,
      kemudian klik tombol “Maju”.
   1. Proses pemasangan
      Jika Anda siap untuk melakukan pemasangan, klik tombol “Maju”. Maka
    Linux akan dipasang ke partisi harddisk yang telah Anda tentukan.
      Proses pemasangan memakan waktu sekitar 5 sampai 30 menit, tergantung
      dari kecepatan komputer Anda. Sembari menunggu pemasangan, Anda bisa
      membuka berbagai permainan kecil yang ada di menu BlankOn > Permainan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/ubiquity-installation.png]
   1. Pemasangan berhasil
      Selamat! Proses pemasangan telah berhasil dilakukan. Jika Anda ingin
      tetap lanjut menggunakan Live CD, klik tombol “Lanjut Pengecekan”. Jika
      tidak, klik tombol “Restart sekarang” untuk menghidupkan ulang komputer.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/ubiquity-finish.png]
Pada saat pertama kali menghidupkan komputer, Anda akan melihat menu sistem
operasi yang bisa Anda jalankan. Jika Anda ingin menggunakan BlankOn Linux,
Anda bisa memilih pilihan paling atas menggunakan tombol arah panah, dan tekan
tombol Enter. Jika Anda tidak memilih sistem operasi apapun, 5 detik kemudian
otomatis komputer melakukan booting ke sistem operasi BlankOn Linux 5.0.
Setelah proses booting, Anda akan melihat layar login BlankOn Linux. Ketik nama
akun pengguna Anda lalu tekan enter, lalu ketik sandi Anda dan tekan tombol
enter lagi. Maka Anda akan masuk ke desktop BlankOn Linux.
### Pemasangan dari Alternate CD
Selain instalasi dari Live CD, Anda juga bisa memasang BlankOn Linux dari
Installer CD atau yang lebih dikenal dengan Alternate CD. Perbedaan yang paling
menonjol jika Anda menggunakan Alternate CD dibandingkan dengan menggunakan
Live CD adalah perbedaan jenis antarmuka. Jika pada Live CD menggunakan
antarmuka grafis, maka pada Alternate CD hanya menggunakan antarmuka berbasis
teks. Kelebihan dari penggunaan Alternate CD adalah penggunaan sumberdaya
komputer yang lebih ringan pada saat pemasangan jika dibandingkan dengan Live
CD.
Untuk dapat melakukan pemasangan dengan menggunakan Alternate CD, siapkan
Alternate CD dari BlankOn Linux 5.0. Kemudian masukkan CD tersebut dan lakukan
booting melalui BIOS. Pada saat menu awal pemasangan muncul, tekan tombol Enter
untuk memulai pemasangan. Setelah beberapa saat, maka akan muncul layar
pemasangan yang berbasis teks. Anda hanya mengendalikan antarmuka dengan tombol
arah untuk memilih, Tab untuk berpindah dan Enter untuk mengeksekusi tanpa
menggunakan mouse sama sekali. Berikut adalah langkah-langkah instalasi :
   1. Pemilihan jenis papan ketik
      Pada langkah pertama, Anda bisa memilih “Tidak” dengan menekan tombol
      Enter untuk memilih jenis papan ketik secara manual, kemudian pilih jenis
      papan ketik yang Anda gunakan, dan tekan tombol Enter. Jenis papan ketik
      yang umum digunakan di Indonesia adalah jenis Amerika Serikat (USA).
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/keyboard-selector-
alternate.png]
   1. Memindai CD-ROM dan memuat modul pemasangan
      Tunggu sebentar, program pemasang BlankOn Linux sedang memindai isi CD-
      ROM dan memuat modul-modul untuk melakukan pemasangan.
   1. Konfigurasi jaringan
      Pada langkah ini, instaler akan mencari DHCP server yang ada di jaringan
      anda, jika tidak ada DHCP server sama sekali, maka Anda akan dituntun
      untuk menyetel jaringan secara manual. Untuk saat ini, Anda bisa memilih
      “Jangan mengonfigurasi jaringan saat ini” karena konfigurasi jaringan
      akan dilakukan setelah instalasi selesai dilakukan melalui desktop.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/network-configuration-
alternate.png]
   1. Pengaturan Nama Host
      Pada pengaturan nama host, ketik nama komputer yang Anda inginkan,
      kemudian tekan tombol Enter. Nama ini akan terlihat jika Anda sedang
      bergabung dengan jaringan.
   1. Pengaturan Zona Waktu
      Pilih kota yang sama zona waktunya dengan Anda. Contohnya, jika Anda
      berada di zona waktu GMT +8 atau WIB, Anda bisa memilih kota Jakarta.
   1. Memindai Harddisk
      Tunggu sebentar, installer sedang memindai harddisk yang terpasang di
      komputer untuk selanjutnya dilakukan partisi atau pembagian isi harddisk
      untuk pemasangan BlankOn Linux.
   1. Partisi Harddisk
      Pada bagian ini, pilih skema partisi yang Anda pilih. Jika Anda ingin
      melibas semua isi harddisk, Anda bisa pilih menu “Terpandu – gunakan
      seluruh Harddisk”. Sedangkan jika Anda ingin mengatur partisi secara
      manual, pilih “Manual”. Di dalam panduan ini, akan dibahas mengenai cara
      mempartisi dari harddisk yang sudah memiliki partisi.
      Pada menu daftar partisi, pilih partisi kosong yang ingin Anda pasang
    Linux. Partisi kosong ditandai dengan tulisan “RUANG KOSONG”.
      Jika tidak terdapat partisi kosong sama sekali, Anda bisa memotong
      partisi harddisk yang ada dengan memilih partisi yang ingin dipotong,
      lalu menekan tombol Enter. Kemudian pada menu partisi, pilih menu “Ubah
      Ukuran Partisi”, lalu tekan tombol Enter. Tentukan ukuran baru dari
      partisi yang Anda buat, Anda bisa gunakan ukuran GB atau menggunakan
      persentase (%). Setelah menentukan, tekan lagi tombol Enter. Maka akan
      terdapat ruang kosong baru pada pemilihan partisi, sekarang Anda bisa
      memilih ruang kosong tersebut.
      Pada menu pembuatan partisi baru, Anda bisa memilih menu “Buat partisi
      kosong secara otomatis” agar instaler menentukan sendiri partisi kosong
      yang dibuat. Secara default, instaler akan membuat dua partisi, yaitu
      partisi system (root) dan partisi swap.
      Setelah partisi selesai diatur, pilih menu “Selesai mempartisi dan tulis
      perubahan-perubahannya di harddisk”. Kemudian, pilih “Ya” untuk setuju
      melakukan perubahan terhadap partisi.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/partitioning-alternate-
selectdisk.png]
   1. Pemasangan sistem dasar
      Tunggu sebentar, program pemasang sedang memasang sistem operasi dasar ke
      dalam harddisk yang baru dipartisi. Proses ini memakan waktu sekitar 5
      sampai 10 menit.
   1. Pengaturan akun pengguna
      Pada langkah ini, Anda akan dituntun untuk membuat sebuah akun pengguna
      yang akan digunakan untuk bekerja sekaligus memiliki hak administratif.
      Gunakan sandi yang baik (Perpaduan antara huruf besar dan kecil, serta
      menggunakan tanda baca) agar sistem lebih aman.
   1. Enkripsi direktori Rumah/Home?
      Jika Anda ingin mengenkripsi folder rumah dari akun Anda yang berisikan
      data-data pribadi, Anda bisa pilih “Ya” lalu tekan tombol Enter. Enkripsi
      artinya proses pengacakan data sehingga tidak mudah untuk disadap atau
      disalin oleh pihak yang tidak berhak.
   1. Pemasangan Desktop
      Pada langkah ini, program pemasang sedang melakukan pemasangan aplikasi
      desktop BlankOn Linux pada partisi yang baru dibuat. Proses ini memakan
      waktu yang sangat lama, sekitar 30 - 90 menit. Lebih lama jika
      dibandingkan dengan pemasangan melalui Live CD.
   1. Jam sistem
      Jika jam pada komputer di set pada jam UTC atau GMT +0, Anda bisa pilih
      “Ya” lalu tekan tombol Enter, maka BlankOn akan menyesuaikan jam yang
      muncul agar sesuai dengan zona waktu yang Anda pilih.
   1. Pemasangan selesai
      Selamat, instalasi BlankOn Linux melalui Alternate CD telah selesai
      dilakukan, silahkan tekan tombol Enter untuk me-restart komputer Anda.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab2/finisih-laternate.png]
Setelah komputer di-restart, maka akan muncul menu pemilihan sistem operasi
yang ingin dijalankan. Jika tidak memilih sistem operasi apapun dalam 5 detik,
maka secara otomatis komputer akan melakukan booting ke dalam sistem operasi
BlankOn Linux. Selamat! Sistem operasi BlankOn Linux Anda telah siap untuk
digunakan.

### Melakukan upgrade dari versi BlankOn sebelumnya
Jika komputer Anda sudah terpasang BlankOn versi sebelumnya, Anda bisa
memutakhirkan (upgrade) BlankOn Linux tersebut ke versi terbaru (5.0). Proses
pemutakhiran ini memerlukan koneksi internet langsung untuk mengunduh paket-
paket BlankOn. Berikut adalah langkah-langkahnya :
   1. Buka terminal melalui menu BlankOn > Aksesoris > Terminal.
   1. Edit berkas “/etc/apt/sources.list” dengan hak administrator dengan
      perintah berikut :
`blankon@blankon:~$ sudo gedit /etc/apt/sources.list↵`
   1. Pada akhir dari isi berkas tersebut, ketik dua baris berikut :
      deb http://arsip.blankonlinux.or.id/blankon nanggar main restricted
      deb http://id.archive.ubuntu.com/ubuntu jaunty main restricted universe
      multiverse

Kemudian simpan berkas tersebut dan keluar dari aplikasi Gedit.
   1. Kembali ke terminal, ketik perintah berikut untuk memutakhirkan database
      paket pada APT.
      blankon@blankon:~$ sudo apt-get update↵
   1. Dan terakhir, ketik perintah berikut untuk melakukan proses pemutakhiran.
      blankon@blankon:~$ sudo apt-get dist-upgrade↵

Proses pemutakhiran akan berjalan. Lamanya waktu pemutakhiran sangat bergantung
pada kondisi jaringan internet. Semakin lambat jaringan internet, maka semakin
lambat pula proses pengunduhan paket-paket.
Setelah proses pemutakhiran selesai, Anda bisa melakukan restart pada komputer.

### Melakukan migrasi dari Ubuntu
Bagi para pengguna Ubuntu Linux, Anda bisa langsung mengubah atau memigrasikan
sistem Anda ke BlankOn Linux dengan mudah. Hal ini disebabkan karena BlankOn
Linux merupakan distribusi Linux berbasis Ubuntu. Ingat, untuk melakukan proses
migrasi, Anda harus menggunakan Ubuntu yang versinya setara dengan versi
BlankOn Linux, jika tidak Anda harus mutakhirkan Ubuntu Anda terlebih dahulu.
Versi Ubuntu Linux yang setara dengan BlankOn Linux 5.0 adalah 9.04 (Jaunty
Jackalope).

Sama dengan proses pemutakhiran, proses migrasi juga membutuhkan koneksi
Internet langsung untuk mengunduh paket-paket dari BlankOn Linux. Berikut
langkah-langkah untuk melakukan migrasi :
   1. Masuk ke terminal melalui menu BlankOn > Accessories > Terminal.
   1. Unduh kunci untuk membuka repository BlankOn Linux dan pasang kunci
      tersebut dengan perintah berikut ini :
      blankon@blankon:~$ sudo wget http://cdimage.blankonlinux.or.id/blankon-
      archive-keyring.gpg -O - | sudo apt-key add -↵
   1. Kemudian, edit berkas “/etc/apt/sources.list” dengan perintah berikut :
      blankon@blankon:~$ sudo gedit /etc/apt/sources.list↵
   1. Pada akhir berkas tersebut, tambahkan baris “deb ​http://arsip.blankonlinux.or.id/blankon nanggar main restricted”. Setelah itu,
      simpan berkas tersebut dan keluar dari aplikasi Gedit.
   1. Kemudian, lakukan update pada database APT.
      `blankon@blankon:~$ sudo apt-get update↵`
   1. Jika Ubuntu Anda adalah versi sebelum 9.04 maka ketik ini dulu namun bila
      tidak lewati tahap ini dan teruskan ke nomor 7 di bawah
      `blankon@blankon:~$ sudo apt-get dist-upgrade↵`
   1. Setelah langkah di atas selesai, Anda bisa ketik perintah berikut untuk
      memasang BlankOn 5.0 Regular
`      blankon@blankon:~$ sudo apt-get install blankon-desktop↵`

Atau jika ingin menginstal BlankOn 5.0 Minimalis, ketik perintah berikut :
`blankon@blankon:~$ sudo apt-get install blankon-desktop-minimalist↵`
Setelah mengetik salah satu perintah yang ada diatas, maka paket-paket dari
BlankOn Linux 5.0 kemudian diunduh. Setelah diunduh, kemudian paket-paket
tersebut diinstal. Jika proses pemasangan telah selesai, maka Anda bisa me-
restart komputer dan melihat sistem operasi Ubuntu Anda telah berubah menjadi
BlankOn Linux 5.0.

Last modified on 05/31/2009 06:07:07 AM

#### Attachments (11)
  * livecd-start.png​ (27.8 KB) - added by wirama 8 years ago.
  * livecd-booting.png​ (4.8 KB) - added by wirama 8 years ago.
  * blankon-live-desktop.png​ (246.6 KB) - added by wirama 8 years ago.
  * ubiquity-area.png​ (103.0 KB) - added by wirama 8 years ago.
  * ubiquity-partitioning.png​ (62.9 KB) - added by wirama 8 years ago.
  * ubiquity-installation.png​ (9.9 KB) - added by wirama 8 years ago.
  * ubiquity-finish.png​ (17.4 KB) - added by wirama 8 years ago.
  * keyboard-selector-alternate.png​ (8.0 KB) - added by wirama 8 years ago.
  * network-configuration-alternate.png​ (10.8 KB) - added by wirama 8 years
      ago.
  * partitioning-alternate-selectdisk.png​ (10.6 KB) - added by wirama 8
      years ago.
  * finisih-laternate.png​ (6.6 KB) - added by wirama 8 years ago.

---
[Daftar Isi Panduan BlankOn 5 Nanggar](/wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/5/README.md)
[Panduan BlankOn Versi Yang Lain](/wiki/TimPengembang/Dokumentasi/Panduan/PanduanDistribusi/README.md)
[Daftar Panduan BlankOn](/wiki/TimPengembang/Dokumentasi/Panduan/README.md)
