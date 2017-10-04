# Bab 12 Pengaturan Perangkat Keras
**Panduan BlankOn 8**


Pengaturan perangkat keras yang terpasang di komputer menggunakan BlankOn
sangat mudah sekali. Anda hampir tidak perlu melakukan pemasangan driver
perangkat keras, karena BlankOn sudah menyediakan hampir semua driver perangkat
keras esensial yang ada saat ini. Sehingga, setelah pemasangan BlankOn, hampir
semua perangkat keras esensial seperti kartu video, kartu suara, dsb bisa
berjalan dengan baik.
Namun untuk memantapkan perangkat keras tersebut, Anda perlu mengetahui
bagaimana melakukan pengaturan perangkat keras yang ada. Semua hal menyangkut
perangkat keras dibahas dalam bab ini.
Walaupun hampir semua perangkat keras esensial mampu digunakan di BlankOn
dengan baik dan out-of-the-box (tanpa perlu pengaturan mendetail), sampai saat
ini masalah driver perangkat keras masih merupakan masalah dominan dan
mengganggu dunia Linux. Tidak semua produsen perangkat keras merilis driver-nya
untuk platform Linux. Walaupun ada beberapa, itupun tidak Open Source dan masih
dikembangkan secara tertutup. Hampir semua driver yang saat ini ada di Linux
merupakan hasil jerih payah para komunitas tanpa bantuan dari produsen
perangkat keras. Namun, hal ini akan menjadi masalah waktu saja. Beberapa
produsen perangkat keras mulai maju untuk mengembangkan driver-nya untuk Linux
mengingat Linux semakin populer saat ini sebagai sistem operasi untuk Desktop.
### Konfigurasi Monitor
Konfigurasi monitor di BlankOn sudah diatur sedemikian rupa, sehingga resolusi
layar monitor sesuai dengan kemampuan monitor yang Anda miliki.
Namun jika Anda ingin mengatur resolusi monitor agar lebih optimal, atau
memanfaatkan beberapa monitor yang terpasang di komputer, Anda bisa
melakukannya dengan fitur pengaturan Monitor dengan langkah sebagai berikut.
  * Klik menu Settings > Hardware > Display
  * Tentukan resolusi layar pada pilihan [>Resolusi<] serta laju penyegaran-
      nya pada pilihan [>Laju Refesh<].
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab12/Bab12_Display.png]
Pengaturan Monitor
  * Tentukan monitor yang akan dihidupkan dengan memilih opsi [>On<] pada
      masing-masing jenis monitor yang muncul. Jika monitor yang terpasang
      belum muncul, silahkan klik tombol [>Deteksi Monitor<] untuk melakukan
      pendeteksian ulang monitor.
  * Jika ingin menyamakan semua tampilan monitor, Anda bisa memberi centang
      pada [>Citra yang sama di semua monitor<].
  * Jika ingin preferensi monitor tampil di panel, silakan centang [>Show
      monitors in panel<]
  * Setelah semua pengaturan selesai, klik tombol [>Terapkan<]. Mungkin saja,
      Anda akan diminta untuk me-restart mode grafis agar konfigurasi bisa
      diterapkan.
### Konfigurasi Mesin Pencetak
Manajemen mesin pencetak atau printer yang ada di BlankOn diatur oleh sebuah
perangkat lunak server bernama CUPS (Common Unix Printing System). CUPS
bertanggung jawab untuk menerima permintaan pencetakan baik dari lokal maupun
dari jaringan, melakukan job pencetakan dan mengirim informasi ke printer untuk
melakukan pencetakan.
Secara default, driver mesin pencetak akan langsung terpasang di BlankOn jika
mesin pencetak tersebut sudah tersedia di sistem pada saat printer pertama
kalinya dipasang ke komputer. Anda akan melihat pesan notifikasi bahwa printer
baru telah ditambahkan.
Namun, jika mesin pencetak Anda tidak terdeteksi sama sekali atau printer
terbagi di jaringan, Anda bisa membuka alat konfigurasi mesin pencetak yang
Anda bisa buka melalui menu utama BlankOn > Settings > Perangkat Keras >
Pencetak. Berikut adalah langkah – langkah penambahan mesin pencetak melalui
tool konfigurasi printer :
  * Klik menu Server > Setting, pada jendela pengaturan centang pada [>Show
      printers shared by other systems<]
  * Klik tombol refresh
  * Akan muncul printer yang dibagi oleh sistem lain
Jika tidak berhasil Anda bisa mencoba cara berikut:
  * Klik tombol [>Baru<] pada baris alat. Tunggu sebentar, CUPS akan
      melakukan pengecekan terhadap mesin pencetak yang terpasang di port
      komputer maupun yang ada di jaringan.
  * Bila mesin pencetak terhubung langsung dengan komputer, nama perangkat
      akan muncul di paling atas. Klik nama perangkat yang ditemukan. Jika
      mesin pencetak berada di jaringan, Klik [>Windows Printer via SAMBA<]
      pada bagian kiri bawah. Klik [>Telusuri …<] untuk mencari mesin pencetak.
  * Setelah memilih mesin pencetak, klik tombol [>Maju<].
  * Pilih Driver:
     [>Pilih pencetak dari basis data<], pilih opsi ini jika Anda ingin
     menggunakan driver mesin pencetak yang sudah tersedia di sistem. Jika
     memilih opsi ini, pilih merk dari mesin pencetak Anda (biasanya sudah
     dipilihkan secara otomatis).
     [>Sediakan berkas PPD<], pilih opsi ini jika ingin memasang driver
     dari file PPD yang kadang tersedia di CD Driver mesin pencetak Anda.
     [>Cari driver pencetak untuk diunduh<], pilih opsi ini jika Anda
     tidak memiliki driver yang cocok untuk mesin pencetak Anda. Ketik
     nama dan model mesin pencetak dan CUPS akan mengunduh driver-nya
     untuk Anda.
     Pilih salah satu opsi, kemudian lakukan pengaturan sesuai opsi
     tersebut dan klik tombol [>Maju<].
     Umumnya opsi pertama sudah cukup.
  * Jika Anda memilih opsi kesatu pada langkah sebelumnya, pilih tipe mesin
      pencetak yang Anda gunakan, kemudian klik tombol [>Maju<].
  * Masukkan Nama mesin pencetak, deskripsi (opsional) dan lokasi nyata
      (opsional) dari mesin pencetak yang akan ditambahkan. Langkah terakhir,
      klik tombol [>Terapkan<].
  * Untuk melakukan percobaan pada mesin pencetak, klik tombol Cetak Halaman
      Uji, sedangkan untuk melihat proses pencetakan klik Tampilkan
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab12/Bab12_Pencetak.png]
Printer HP Deskjet
### Pengaturan Mesin Cetak
Untuk melakukan pengaturan mesin cetak agar hasilnya sesuai dengan keinginan
Anda, klik Menu Utama BlankOn > Administrasi, klik kanan mesin cetak yang
terpasang pilih Properti, maka akan segera muncul beberapa menu untuk melakukan
pengaturan pada mesin cetak yang terpasang. Lakukan pengaturan sesuai keinginan
Anda, sebagai contoh untuk melakukan pengaturan kualitas warna klik Printer
Options > Print Quality, pilih sesuai hasil warna dan kualitas hasil pencetak
yang di kehendaki setelah sesuai dengan keinginan Anda klik Apply [>Terapkan<]
> Oke, baru lakukan pencetakan.
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab12/
Bab12_Pengaturan_mesincetak.png]
### Konfigurasi Pemindai
Manajemen pemindai di BlankOn menggunakan perangkat lunak bernama Simple Scan.
Untuk melakukan pemindaian, Anda bisa buka aplikasi Simple Scan melalui menu
Aplikasi > Grafis > Simple Scan.
Sebelum melakukan pemindaian, Simple Scan melakukan pendeteksian terhadap mesin
pemindai terpasang di komputer. Setelah pemindai ditemukan, maka Anda akan
melihat tampilan utama Simple Scan.
     [/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab12/
# Bab 12_Pindai_sederhana.png]
     Pemindai Simple Scan
Tampilan utama Simple Scan cukup sederhana. Hanya ada baris menu, berapa ikon
yang mudah dimengerti dan jendela utama hasil pemindaian. Sebelum melakukan
pemindaian, Anda dapat melakukan pengaturan pemindaian seperti penggunaan
warna, resolusi, ukuran halaman, dan sisi yang hendak dipindai pada jendela
utama melalui menu Dokumen > Preferensi. Setelah pengaturan selesai, Anda dapat
melakukan pemindaian dengan klik pada tombol [>Scan<] pada jendela utama.
     [/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab12/
# Bab 12_HP_Officejet_4500.png]
     Pengaturan Pemindai HP Deskjet
### Pengaturan Kartu Wireless LAN
Berbeda dengan sistem operasi yang lain, dalam Linux khususnya BlankOn, Anda
tidak perlu lagi dipusingkan dengan masalah kartu wireless LAN (WLAN), karena
BlankOn sudah memasang driver-nya secara otomatis, hampir sebagian besar dari
jenis-jenis kartu WLAN yang ada saat ini sudah di dukung oleh BlankOn.
Namun, memang tidak dapat dipungkiri bahwa sampai saat ini masih saja ada
beberapa jenis kartu WLAN yang belum di dukung sepenuhnya oleh BlankOn, seperti
chipset Broadcom dan Atheros.
Untuk dapat mengetahui apakah kartu WLAN yang kita miliki bekerja dengan baik,
kita dapat memeriksannya dengan mengetikkan perintah [>sudo iwconfig<] ini pada
antarmuka teks. Dengan mengetikkan perintah tersebut, akan keluar output
seperti berikut ini :
blankon@blankon:~$ sudo iwconfig↵
[sudo] sandi for blankon:
lo        no wireless extensions.
eth0      no wireless extensions.
wmaster0  no wireless extensions.
wlan0     IEEE 802.11bgn  ESSID:""
          Mode:Managed  Frequency:2.412 GHz  Access Point: Not-Associated
          Tx-Power=27 dBm
          Retry min limit:7   RTS thr:off   Fragment thr=2352 B
          Encryption key:off
          Power Management:off
          Link Quality:0  Signal level:0  Noise level:0
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:0   Missed beacon:0
pan0      no wireless extensions.
Perintah tersebut akan menampilkan semua perangkat jaringan yang terpasang di
komputer. Jika perangkat bukan merupakan WLAN, maka pada bagian kanan nama
perangkat tersebut akan muncul teks [>no wireless extensions<]. Jika perangkat
tersebut merupakan WLAN, maka akan muncul beberapa detail pada bagian perangkat
tersebut seperti pada bagian wlan0.
Teks pada bagian wlan0 menandakan bahwa driver WLAN sudah terpasang dan siap
digunakan. Namun, jika sebaliknya, berarti driver WLAN Anda belum terpasang
Lalu, bagaimana caranya menyelesaikan persoalan tersebut?. Banyak jalan menuju
roma, dan begitu juga dengan permasalahan yang satu ini, BlankOn sudah
menyediakan alternatif bagi penggunya yang tidak dapat menggunakan kartu WLAN-
nya karena masalah dukungan perangkat keras yang masih kurang.
Dalam menyelesaikan permasalahan ini, memang ada beberapa hal yang harus kita
persiapkan terlebih dahulu, dan disini kita akan membahasnya secara rinci.
Untuk dapat menggunakan kartu wireless yang tidak dapat berfungsi secara
otomatis, pertama yang harus dilakukan adalah memasang satu perangkat lunak
yang bernama ndiswrapper. Dengan menggunakan perangkat lunak ini, memungkinkan
kita untuk menggunakan driver WLAN yang digunakan pada sistem operasi Microsoft
Windows pada BlankOn.
Untuk memasang Ndiswrapper, instal paket [>ndisgtk<] melalui APT dengan
perintah [>sudo apt-get install ndiswrapper<] seperti berikut ini :
blankon@blankon:~$ sudo apt-get install ndisgtk↵
Setelah Ndiswrapper terpasang, tahapan selanjutnya adalah mencari driver WLAN
untuk Windows 2000/XP. Anda dapat menemukannya pads CD driver yang disertakan
pada WLAN atau mencarinya di Internet. Setelah mendapatkannya, klik menu Sistem
> Administrasi > Driver Nirkabel Windows.
Klik pada tombol [>Install Driver baru<], kemudian klik pada berkas *.inf dari
driver WLAN versi Windows 2000/XP. Kemudian driver tersebut akan diinstal.
Setelah instalasi berhasil, Anda bisa merestart komputer untuk mengaktifkan
driver tersebut.
Pada saat kembali ke Desktop, buka Terminal lalu ketik kembali perintah [>sudo
iwconfig<]. Jika perangkat WLAN terdeteksi, berarti driver dari kartu WLAN
tersebut berhasil dipasang dan siap digunakan.
### Konfigurasi Bluetooth
Bluetooth saat ini menjadi sarana komunikasi antarperangkat mobile yang sangat
banyak digunakan saat ini. Dengan menggunakan Bluetooth, tidak perlu lagi
memasang kabel LAN, mengatur ESSID, Alamat IP, Gateway dan segala tetek bengek
lainnya untuk melakukan komunikasi antar perangkat. Cukup tentukan tujuan
pengiriman data, maka data akan terkirim.
Untuk menggunakan Bluetooth pada komputer, Anda dapat menggunakan alat yang
bernama Bluetooth Adapter atau Bluetooth Dongle. Bahkan, alat ini sudah
tertanam secara built-in pada notebook-notebook terbaru.
Menggunakan Bluetooth adapter pada BlankOn tidaklah sulit. Sebagian besar
Bluetooth adapter yang ada saat ini sudah dapat digunakan di BlankOn tanpa
perlu memasang driver-nya lagi. Jika Bluetooth adapter sudah terpasang dan
sudah aktif, maka akan muncul ikon berlambang Bluetooth pada area notikasi/
tray.
Untuk melakukan sambungan terhadap suatu perangkat, berikut adalah langkah-
langkahnya :
  * Klik pada ikon bluetooth pada notifikasi area, lalu pilih menu
      [>Persiapkan perangkat baru<].
  * Pilih perangkat bluetooth yang ingin Anda sambungan dan tentukan nomor
      PIN yang Anda inginkan untuk proses berpasangan, kemudian klik tombol
      [>Maju<].
  * Jika Bluetooth yang terpasang belum dikenali secara langsung, klik Menu
      Utama BlankOn > Setting > Perangkat Keras > Bluetooth, klik logo +
      [>Tambah<] yang berada di pojok kiri sebelah bawah, pada Device type
      pilih All types maka komputer secara otomatis akan melakukan pencarian
      Driver yang sesuai, setelah ketemu klik Continue [>lanjutkan<].
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab12/bluetooth.png]
Menyambungkan Perangkat Blutooth
  * Kemudian, BlankOn akan melakukan koneksi ke perangkat yang Anda pilih.
      Pada tahapan ini, Anda juga diberitahukan informasi kode PIN yang harus
      Anda masukkan di perangkat agar bisa melakukan koneksi dengan baik.
      Setelah sambungan terjalin, klik tombol [>Maju<].
  * Pada konfigurasi terakhir, klik tombol [>Tutup<].
Untuk melakukan transfer berkas ke perangkat, klik kanan pada ikon bluetooth
pada area notifikasi, lalu klik menu [>Kirim berkas ke perangkat..<]. Kemudian,
pilih berkas yang ingin Anda kirim.
### Penganalisa Penggunaan Disk
Untuk menganalisa penggunaan disk dalam komputer, Anda bisa menggunakan bantuan
aplikasi Penganalisa Penggunaan Disk. Aplikasi ini berbasis grafis untuk
menganalisa penggunaan disk pada lingkungan GNOME, aplikasi ini akan dengan
mudah memindai semua struktur pohon filesistem, atau direktori khusus sesuai
dengan pilihan Anda. Aplikasi ini bisa diakses melalui menu Aplikasi > Perkakas
Sistem > Disk Usage Analyzer
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab12/Bab12_Penganalisa_disk.png]
Last modified on 08/09/2012 02:01:03 PM
#### Attachments (7)
# Bab 12_Display.png​ (29.9 KB) - added by imgos 5 years ago.
# Bab 12_Pencetak.png​ (41.6 KB) - added by imgos 5 years ago.
  * bluetooth.png​ (76.2 KB) - added by imgos 5 years ago.
# Bab 12_HP_Officejet_4500.png​ (39.4 KB) - added by imgos 5 years ago.
# Bab 12_Pindai_sederhana.png​ (46.2 KB) - added by imgos 5 years ago.
# Bab 12_Pengaturan_mesincetak.png​ (83.8 KB) - added by imgos 5 years ago.
# Bab 12_Penganalisa_disk.png​ (92.9 KB) - added by aries 5 years ago.
#### 
    
 
 
 
 
 
---
 
