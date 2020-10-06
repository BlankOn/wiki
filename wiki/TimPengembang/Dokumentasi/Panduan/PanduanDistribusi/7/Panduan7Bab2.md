# Bab 2 Memasang BlankOn
**Panduan BlankOn Linux 7**

Bab ini akan membahas bagaimana cara memasang BlankOn pada komputer. Pemasangan
BlankOn akan sangat mudah dilakukan apabila anda sudah memahami persiapan dan
langkah-langkah apa saja yang perlu dilakukan.
### Kebutuhan Sistem
Sebelum melakukan pemasangan, terlebih dahulu komputer anda harus memenuhi
syarat spesifikasi minimal agar BlankOn bisa berjalan dengan lancar. Berikut
ini adalah spesifikasi minimal untuk BlankOn 7.0:
   1. Prosesor setara pentium IV atau celeron dengan kecepatan minimal 500 Mhz
   1. Memori RAM 256 MB
   1. kartu video atau VGA minimal memiliki memori 64 MB untuk efek desktop,
      dan
   1. harddisk dengan ukuran 6 GB
### Cara Mendapatkan BlankOn
Untuk mendapatkan CD BlankOn, anda bisa mengunduh image atau cetakan cd-nya
dari situs resmi BlankOn ​http://cdimage.blankonlinux.or.id/. Berkas cetakan
tersebut selanjutnya dibakar ke CD kosong menggunakan aplikasi pembakar CD
seperti Brasero, K3b, Nero, Roxio, dsb.
*Tip: jika mengunduh terasa lambat, anda bisa memanfaatkan situs cermin
(mirror) sebagai sumber mengunduh berikut ini:
   1. ​http://kambing.ui.ac.id/iso/blankon
   1. ​http://mirror.unej.ac.id/blankon-cd
   1. ​ftp://dl2.foss-id.web.id/iso/blankon
   1. ​http://buaya.klas.or.id/pub/blankon
   1. ​http://pandawa.ipb.ac.id/iso/blankon/
   1. ​http://repo.ugm.ac.id/iso/blankon
   1. ​http://jaran.undip.ac.id/public/ISO/
   1. ​http://mugos.ums.ac.id/iso/Blankon
Bagi anda yang memiliki koneksi terbatas atau bahkan tidak memiliki internet
sama sekali, jangan khawatir. Anda bisa membeli CD BlankOn melalui toko penjual
CD/DVD atau meminjamnya dari teman yang telah memilikinya. Berikut adalah
beberapa toko penjual CD/DVD Linux yang ada di Indonesia:
   1. Juragan Kambing (​http://juragan.kambing.ui.ac.id/)
   1. Toko Baliwae (​http://toko.baliwae.com/)
   1. Gudang Linux (​http://gudanglinux.com/)
   1. dan lain-lain
### Persiapan Menjelang Pemasangan
Sebelum melakukan pemasangan BlankOn, lakukan beberapa persiapan seperti
berikut:
   1. Persiapkan CD BlankOn sebagai bekal proses pemasangan, baca kembali sub
      bab sebelumnya untuk mengetahui cara mendapatkan CD BlankOn, pastikan CD
      dalam keadaan baik agar proses pemasangan lancar.
   1. Backup atau buat cadangan dari data penting anda ke media penyimpanan
      cadangan (seperti Flashdisk, Harddisk, CD/DVD) agar data anda aman dan
      terhindar dari resiko kehilangan.
   1. Tentukan skema partisi harddisk yang anda inginkan. Partisi merupakan
      bagian ruang-ruang data yang terdapat pada harddisk. Jika anda ingin
      melakukan dual-boot (terdapat dua sistem operasi dalam satu komputer),
      anda harus membuat partisi baru pada harddisk komputer yang nantinya akan
      digunakan sebagai tempat pemasangan BlankOn. Pembahasan lebih lanjut akan
      dijelaskan pada sub bab pemasangan.
   1. Pastikan untuk menjaga kestabilan tegangan listrik. Hal ini untuk
      menghindari listrik yang tiba-tiba padam pada saat pemasangan dan
      menyebabkan terjadinya kerusakan fisik pada komputer (terutama harddisk).
   1. Lakukan penyetelan BIOS agar komputer membaca CD terlebih dahulu untuk
      proses booting. Silahkan merujuk ke manual komputer atau motherboard anda
      mengenai cara melakukan penyetelan ini.
### Persiapan Partisi
Sebelum mulai pemasangan, terlebih dahulu persiapkan partisi kosong untuk yang
akan digunakan sebagai tempat pemasangan BlankOn, misal di Windows, anda
mempunyai drive C, dan D. salin data yang ada di drive D ke media lain
(flashdisk, external harddisk, atau harddisk lain). Drive D akan kita gunakan
sebagai tempat instalasi BlankOn. Jika anda mempunyai drive C, D, dan E, anda
bisa memindahkan data di drive E ke drive D, lalu drive E yang akan kita
gunakan untuk instalasi BlankOn. Jika semua bagian harddisk sudah terpartisi,
anda bisa memotong partisi harddisk terakhir dengan langkah berikut ini:
*Peringatan! Jika partisi tersebut merupakan partisi windows, lakukan terlebih
dahulu defragmenting melalui tools “Disk Defragmenter” yang terdapat di sistem
operasi Microsoft Windows. Hal ini untuk menghindari partisi yang rusak pada
saat melakukan pemotongan partisi.
   1. Buka aplikasi editor partisi melalui Menu utama BlankOn > Sistem >
      Administrasi > Gparted (Editor Partisi).
   1. Pada baris partisi yang ditampilkan, klik kanan pada partisi terakhir
      (yang paling kanan), lalu pilih menu [>Ubah Ukuran/Pindahkan??<].
   1. Tentukan ukuran baru dari partisi yang anda potong pada opsi [>Ukuran
      Baru (MiB)<]. Kemudian klik tombol [>Ubah Ukuran/Pindahkan??<].
   1. Terakhir, klik tombol [>Terapkan<] pada toolbar untuk menerapkan
      perubahan yang dilakukan.
Sekarang anda telah memiliki partisi kosong yang bisa anda manfaatkan untuk
pemasangan BlankOn.
### Memasang BlankOn melalui Live CD
Untuk pemasangan melalui Live CD, anda harus mempersiapkan Live CD dari BlankOn
7.0 Pattimura. Masukkan CD tersebut ke dalam CD/DVD-ROM drive pada komputer
anda. Restart komputer anda, dan anda akan melihat menu awal dari Live CD
BlankOn 7.0 Pattimura, tekan tombol Enter untuk masuk ke modus Live CD, maka
sistem operasi BlankOn 7.0 Pattimura akan mulai dijalankan melalui CD. Tunggu
sebentar sampai desktop BlankOn 7.0 Pattimura muncul.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/menu_awal.2.png]
*Tip: jika terdapat masalah dengan pada saat menampilkan antar muka grafis,
Anda bisa restart komputer dan memilih menu [>Coba BlankOn 7.0 (darurat)<] pada
awal Live CD BlankOn.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/live-booting.2.png]
Setelah proses booting selesai, maka anda akan melihat desktop BlankOn 7.0
Pattimura. Anda bisa mencobanya terlebih dahulu sebelum memasangnya ke
harddisk. Untuk melakukan pemasangan BlankOn, klik ganda ikon [>Pasang<] pada
desktop. Maka akan muncul sebuah wahana pandu yang membantu anda dalam
pemasangan BlankOn. Berikut uraian setiap langkahnya:
  * [Selamat Datang]
Pada langkah ini, pilih bahasa pengantar yang ingin anda gunakan dalam
pemasangan. Setelah itu klik tombol [>Maju<]
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/welcome.png]
  * [Bersiap Memasang BlankOn]
Pada langkah ini, anda akan diberikan informasi, untuk hasil terbaik dalam
pemasangan BlankOn, pastikan bahwa komputer anda:
   1. harus memiliki kurang lebih 4,2 GB ruang kosong pada harddisk
   1. terhubung dengan sumber listrik (notebook)
   1. terhubung pada internet (opsional)
Tanda hijau tersebut menandakan bahwa komputer yang akan anda pasang telah
memenuhi kriteria ketiga opsi diatas. Pada bagian bawah, anda diberikan dua
opsi jika anda mencentang opsi [>Unduh pemutakhiran saat instalasi<], pada saat
proses pemasangan BlankOn nanti sekaligus anda akan melakukan pemutakhiran
terhadap sistem anda. Apabila anda mencentang opsi [>Pasang perangkat lunak
pihak ketiga ini<] maka pada saat proses pemasangan BlankOn anda akan sekaligus
melakukan pemasangan perangkat lunak pihak ketiga berupa pustaka multimedia
(Codec) untuk berkas mp3, dan lain-lain. Namun kedua opsi tersebut hanya dapat
anda lakukan apabila saat melakukan pemasangan BlankOn anda juga terkoneksi
dengan koneksi internet.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/Screenshot.png]
  * [Mengalokasikan Ruang Harddisk]
Disini anda akan mempersiapkan alokasi ruang harddisk anda, pada tahap ini anda
diberikan dua opsi:
   1. Hapus harddisk dan pasang BlankOn, opsi ini adalah menghapus seluruh
      harddisk dan gunakan seluruh alokasi harddisk untuk pemasangan BlankOn.
   1. Sesuatu yang lain, opsi ini digunakan untuk menentukan alokasi ruang
      harddisk yang akan digunakan untuk pemasangan BlankOn secara manual.
Karena harddisk kita masih kosong, kita akan membuat partisi secara manual.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/Screenshot-1.png]
   1. [Titik kait root (/)]
Pilih ruang atau partisi kosong, lalu klik tombol Tambah, isi parameter seperti
gambar. Ukuran partisi bisa disesuaikan dengan kapasitas harddisk yang anda
miliki. Jangan lupa memilih titik kait /. Titik kait / merupakan sistem.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/titikkait.png]
   1. [Swap]
Pilih ruang atau partisi kosong, lalu klik tombol Tambah, isi parameter seperti
gambar. Ukuran partisi swap ini disesuaikan dengan ukuran memori komputer anda.
Biasanya 2 kali ukuran memori. Misalnya, anda mempunyai memori 512 MB, maka
ukuran swap 1024 MB.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/swap.png]
  * [Memilih Lokasi Anda]
Pilih lokasi tempat tinggal anda pada peta yang disediakan, kemudian klik
tombol [>Maju<]
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/lokasi.png]
  * [Susunan Papan Ketik]
Pilih susunan papan ketik (keyboard) yang anda gunakan, jenis papan ketik yang
umum digunakan di Indonesia adalah jenis Amerika Serikat (USA). Kemudian klik
tombol [>Maju<]
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/papanketik.png]
  * [Isi Data Diri]
Isi nama lengkap, nama akun pengguna anda, dan sandi sesuai dengan keinginan
anda. Nama akun pengguna dan sandi akan anda gunakan pada saat masuk ke sistem
(login). Nama akun pengguna dan sandi juga akan memiliki hak administratif
untuk melakukan pengaturan sistem secara mendalam. Jika anda ingin masuk
otomatis ke sistem tanpa perlu memasukan id pengguna dan sandi, klik pada opsi
[>Masuk secara otomatis<]. Selanjutnya klik tombol [>Maju<] untuk melanjutkan
ke proses pemasangan BlankOn.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab2/siapakahanda.png]
  * [Pemasangan Berhasil]
Selamat! Proses pemasangan telah berhasil dilakukan. Jika Anda ingin tetap
lanjut menggunakan Live CD, klik tombol [>Lanjut Pengecekan<]. Jika tidak, klik
tombol [>Restart sekarang<] untuk menghidupkan ulang komputer.
Last modified on 08/15/2011 05:52:49 AM
#### Attachments (13)
  * menu_awal.png​ (174.1 KB) - added by sakrasemangat 6 years ago.
  * live-booting.png​ (121.8 KB) - added by sakrasemangat 6 years ago.
  * welcome.png​ (27.4 KB) - added by sakrasemangat 6 years ago.
  * Screenshot.png​ (50.9 KB) - added by sakrasemangat 6 years ago.
  * Screenshot-1.png​ (48.8 KB) - added by sakrasemangat 6 years ago.
  * titik_kait.png​ (24.5 KB) - added by sakrasemangat 6 years ago.
  * swap.png​ (23.6 KB) - added by sakrasemangat 6 years ago.
  * titikkait.png​ (24.5 KB) - added by sakrasemangat 6 years ago.
  * lokasi.png​ (142.8 KB) - added by sakrasemangat 6 years ago.
  * papanketik.png​ (50.8 KB) - added by sakrasemangat 6 years ago.
  * siapakahanda.png​ (40.6 KB) - added by sakrasemangat 6 years ago.
  * menu_awal.2.png​ (60.9 KB) - added by guspur 6 years ago.
  * live-booting.2.png​ (15.2 KB) - added by guspur 6 years ago.
#### 
    
 
 
 
 
 
---
 
