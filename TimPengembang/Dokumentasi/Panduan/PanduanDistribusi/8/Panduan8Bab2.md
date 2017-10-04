# Bab 2 Memasang BlankOn
**Panduan BlankOn 8**

Bab ini akan membahas bagaimana cara memasang BlankOn pada komputer. Pemasangan
BlankOn akan sangat mudah dilakukan apabila anda sudah memahami persiapan dan
langkah-langkah apa saja yang perlu dilakukan.
### Kebutuhan Sistem
Sebelum melakukan pemasangan, terlebih dahulu komputer anda harus memenuhi
syarat spesifikasi minimal agar BlankOn bisa berjalan dengan lancar. Berikut
ini adalah spesifikasi minimal untuk BlankOn 8.0 Rote:
   1. Prosesor setara pentium IV atau celeron dengan kecepatan minimal 500 Mhz
   1. Memori RAM 256 MB
   1. kartu video atau VGA minimal memiliki memori 64 MB untuk efek desktop.
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
   1. ​http://pinguin.ittelkom.ac.id/mirror/iso/blankon/
   1. ​ftp://ftp.paudni.kemdiknas.go.id/blankon/
   1. ​ftp://singo.ub.ac.id/linux/blankon/
Bagi anda yang memiliki koneksi terbatas atau bahkan tidak memiliki internet
sama sekali, jangan khawatir. Anda bisa membeli CD BlankOn melalui toko penjual
CD/DVD atau meminjamnya dari teman yang telah memilikinya. Berikut adalah
beberapa toko penjual CD/DVD Linux yang ada di Indonesia:
   1. Juragan Kambing (​http://juragan.kambing.ui.ac.id/)
   1. Toko Baliwae (​http://toko.baliwae.com/)
   1. Gudang Linux (​http://gudanglinux.com/)
   1. Lapak Linux dan FOSS (​http://www.lapak-linux-dan-foss.com/)
### Persiapan Menjelang Pemasangan
Sebelum melakukan pemasangan BlankOn, lakukan beberapa persiapan seperti
berikut:
   1. Persiapkan CD BlankOn sebagai bekal proses pemasangan, baca kembali sub
      bab sebelumnya untuk mengetahui cara mendapatkan CD BlankOn, pastikan CD
      dalam keadaan baik agar proses pemasangan lancar.
   1. Backup atau buat cadangan dari data penting anda ke media penyimpanan
      cadangan (seperti Flashdisk, Harddisk, CD/DVD) agar data anda aman dan
      terhindar dari resiko kehilangan data.
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
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab2/Bios.png]
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
### Catatan Mengenai Partisi
Partisi Primary /Primer
Jenis partisi ini merupakan jenis partisi utama diharddisk untuk system operasi
pada umumnya. Partisi primer hanya bisa dibuat maksimal 4 partisi, hal ini
sangat berbeda dengan sistem DOS yang hanya mengijinkan satu jenis partisi
primer untuk sistem. Jika kita memakai sistem operasi Linux jenis partisi ini
akan terbaca sebagai partisi 1, 2, 3 dan 4. Misalnya terbaca sebagai sda1,
sda2, sda3 dan sda4, sedangkan jika kita menggunakan Sistem Operasi Windows
akan terbaca sebagai partisi C,D,E dan F.
Partisi Extended /Perluasan Merupakan partisi perluasan untuk mengatasi
kekurangan partisi primer dimana hanya dimungkinkan adanya 4 partisi. Jika
ingin memiliki partisi lebih dari 4 maka partisi extended /perluasan dibutuhkan
yaitu dengan cara mengorbankan satu jenis partisi primer kemudian digunakan
sebagai partisi extended /perluasan.Didalam partisi perluasaan ini nantinya
dibuat partisi logical untuk mendapatkan partisi yang lebih banyak. Partisi
extended tidak dapat digunakan menyimpan data. Partisi jenis ini selalu
menempati nomor partisi +1 dari partisi primer. Misalnya ada 2 jenis partisi
primer di harddisk sda1 dan sda2, maka posisi partisi extended adalah sda3.
Partisi Logical Jenis partisi logical selalu dibuat didalam partisi extended /
perluasan. Jika kita lihat sepintas maka nomor partisi akan akan lompat 1
nomor. Misalnya kita membuat 5 jenis partisi logical di sda3 maka masing-masing
akan terbaca sebagai sda4, sda5 dan sda7, sda8 dan seterusnya.
### Memasang BlankOn melalui Live CD
Untuk pemasangan melalui Live CD, anda harus mempersiapkan Live CD dari BlankOn
8.0 Rote. Masukkan CD tersebut ke dalam CD/DVD-ROM drive pada komputer anda.
Restart komputer anda, dan anda akan melihat menu awal dari Live CD BlankOn 8.0
Rote, tekan tombol Enter untuk masuk ke modus Live CD, maka sistem operasi
BlankOn 8.0 Rote akan mulai dijalankan melalui CD. Tunggu sebentar sampai
desktop BlankOn 8.0 Rote muncul.
[Menu_awal_saat_booting]
[Desktop_BlankOn]
Setelah proses booting selesai, maka anda akan melihat desktop BlankOn 8.0
Rote. Anda bisa mencobanya terlebih dahulu sebelum memasangnya ke harddisk.
Untuk melakukan pemasangan BlankOn, klik ganda ikon logo Blankon pada pojok
kiri atas desktop. Atau klik menu utama BlankOn > System Tools > Install
Blankon. Dan kemudian sebuah wahana pandu akan membantu Anda dalam pemasangan
BlankOn.
[Menu_untuk_install_dari_live_BlankOn]
Wahana pandu dalam Blankon 8.0 Rote memiliki 6 bagian yang akan membantu Anda
dalam proses instalasi yang sangat sederhana serta cepat. Dalam wahana pandu
yang pertama yaitu ucapan selamat datang di instalasi Blankon dengan disertai
isian Bahasa, Wilayah serta jenis papan ketik. Setelah anda mengisikan nilai
isian lalu klik tombol "Install BlankOn".
[Selamat_datang_di_instalasi_Blankon_8_Rote]
Selanjutnya wahana pandu kedua akan memerlukan interaksi Anda untuk memilih
target instalasi. Pilihlah partisi yang masih kosong atau yang tidak digunakan
oleh sistem operasi lain dalam komputer anda jika sebelumnya sudah terdapat
partisi data atau sistem operasi lain. Jika isian sudah selesai maka klik
"Next" untuk melanjutkan ke wahana panduan berikutnya.
[Lokasi_target_instalasi]
Dalam wahana pandu ketiga anda diminta untuk memasukkan informasi pribadi
tentang nama komputer, nama pengguna serta password pengguna. Jika isian sudah
selesai maka klik "Next" untuk melanjutkan ke wahana panduan berikutnya.
[Informasi_pribadi_pengguna_blankon]
Setelah semua informasi yang dibutuhkan untuk instalasi sudah lengkap maka tiba
saatnya pengguna untuk memeriksa ringkasan rencana instalasi. Dalam ringkasan
tersebut terdapat informasi sebagai berikut:
   1. Harddisk dan partisi target instalasi
   2. Nama komputer
   3. Nama pengguna
[Ringkasan_data_instalasi]
Jika dirasa sudah benar maka klik "Next" untuk melanjutkan ke wahana panduan
berikutnya.
Kemudian akan muncul tampilan proses instalasi yang sedang berlangsung.
[Proses_instalasi]
Jika instalasi sudah selesai selanjutnya anda dapat melakukan boot ulang (klik
Reboot) atau melanjutkan penggunaan live CD.
[Akhir_instalasi]
Last modified on 07/25/2012 12:38:37 PM
#### Attachments (11)
  * 1-selamatDatang.png​ (52.7 KB) - added by guspur 5 years ago.
  * 1-menuAwal.png​ (16.7 KB) - added by sigid 5 years ago. Menu awal saat
      booting
  * 2-desktopBlankon.png​ (7.2 KB) - added by sigid 5 years ago. Desktop
   
  * 3-menuInstall.png​ (37.9 KB) - added by sigid 5 years ago. Menu untuk
      install dari live BlankOn
  * 5-targetInstalasi.png​ (32.8 KB) - added by sigid 5 years ago. Lokasi
      target instalasi
  * 8-prosesInstalasi.png​ (16.8 KB) - added by sigid 5 years ago. Proses
      instalasi
  * 9-akhirInstalasi.png​ (16.6 KB) - added by sigid 5 years ago. Akhir
      instalasi
  * 7-ringkasanInstalasi.png​ (35.1 KB) - added by sigid 5 years ago.
      Ringkasan data instalasi
  * Bios.png​ (96.8 KB) - added by imgos 5 years ago.
  * 6-infoPribadi.png​ (38.8 KB) - added by sigid 5 years ago. Informasi
      pribadi pengguna blankon
  * 4-selamatDatang.png​ (47.3 KB) - added by sigid 5 years ago. Selamat
      datang di instalasi Blankon 8 Rote
#### 
    
 
 
 
 
 
---
 
