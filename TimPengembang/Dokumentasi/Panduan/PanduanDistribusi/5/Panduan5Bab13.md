# BAB XIII : Pengaturan Piranti Keras

**Panduan BlankOn 5**

Pengaturan piranti keras yang terpasang di komputer menggunakan BlankOn Linux
sangat mudah sekali. Anda hampir tidak perlu melakukan pemasangan driver
piranti keras, karena BlankOn Linux sudah menyediakan hampir semua driver
piranti keras esensial yang ada saat ini. Sehingga, setelah pemasangan BlankOn
Linux, hampir semua piranti keras esensial seperti kartu video, kartu suara,
dsb bisa berjalan dengan baik.
Namun untuk memantapkan piranti keras tersebut, Anda perlu mengetahui bagaimana
melakukan pengaturan piranti keras yang ada. Semua hal menyangkut piranti keras
dibahas dalam bab ini.
INFO: Walaupun hampir semua piranti keras esensial mampu digunakan di Linux
(termasuk BlankOn Linux didalamnya) dapat digunakan dengan baik dan out-of-the-
box (tanpa perlu pengaturan mendetail), sampai saat ini masalah driver piranti
keras masih merupakan masalah dominan dan menganggu dunia Linux. Tidak semua
produsen piranti keras merilis driver-nya untuk platform Linux. Walaupun ada
beberapa, itupun tidak Open Source dan masih dikembangan secara tertutup.
Hampir semua driver yang saat ini ada di Linux merupakan hasil jerih payah para
komunitas tanpa bantuan dari produsen piranti keras. Namun, hal ini akan
menjadi masalah waktu saja. Beberapa produsen piranti keras mulai maju untuk
mengembangkan driver-nya untuk Linux mengingat Linux semakin populer saat ini
sebagai sistem operasi untuk Desktop.
### Konfigurasi Kartu Video (VGA Card)
Hampir semua kartu video yang ada saat ini sudah didukung oleh BlankOn Linux.
Bahkan, jika kartu grafis Anda memiliki dukungan akselerasi 3D, Anda bisa
membuat penampilan desktop menjadi indah dengan mengaktifkan fitur efek visual
yang ada di BlankOn.
Namun untuk pengguna kartu video merk ATI dan NVIDIA, Akselerasi 3D tidak
diaktifkan secara default karena driver untuk akselerasi 3D adalah tidak Open
Source dan tidak diperbolehkan untuk diaktifkan langsung karena masalah
lisensi. Untuk mengaktifkannya, Anda bisa mengikuti langkah berikut ini :
   1. Klik menu System > Administrasi > Hardware Drivers.
   2. Tunggu sebentar, fitur Hardware Drivers akan mencari piranti keras yang
      menggunakan driver non-Open Source, setelah pencarian selesai, maka akan
      muncul beberapa pilihan driver.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/jockey-gtk.png]
   1. Klik pada driver yang bertuliskan “Recommend”, kemudian klik tombol
      “Active” untuk mengaktifkan driver tersebut, kemudian fitur ini akan
      menginstalkan driver tersebut untuk Anda melalui APT.
   2. Setelah instalasi driver selesai, Restart komputer.
### Konfigurasi Monitor
Konfigurasi monitor di BlankOn Linux sudah diatur sedemikian rupa, sehingga
resolusi layar monitor sesuai dengan kemampuan monitor yang Anda miliki. Namun
jika Anda ingin mengatur resolusi monitor agar lebih optimal, atau memanfaatkan
beberapa monitor yang terpasang di komputer, Anda bisa melakukannya dengan
fitur pengaturan Monitor dengan langkah sebagai berikut.
#### Pada BlankOn reguler
   1. Klik menu System > Preferensi > Tampilan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/screen-resolution-gnome.png]
   1. Tentukan resolusi layar pada pilihan “Resolusi” serta laju refresh-nya
      pada pilihan “Laju Refesh”.
   2. Tentukan monitor yang akan dihidupkan dengan memilih opsi “On” pada
      masing-masing jenis monitor yang muncul. Jika monitor yang terpasang
      belum muncul, silahkan klik tombol “Deteksi Monitor” untuk melakukan
      pendeteksian ulang monitor.
   3. Jika ingin menyamakan semua tampilan monitor, Anda bisa memberi centang
      pada “Layar bayangan”. Sedangkan, jika ingin mengaktifkan mode multi
      monitor, Anda bisa hilangkan centang tersebut dan mengatur layar sesuai
      dengan yang Anda inginkan pada bagian “Tarik-tarik monitor itu untuk
      diatur pada tempatnya” serta resolusi masing-masing.
   4. Setelah semua pengaturan selesai, klik tombol “Terapkan”. Mungkin saja,
      Anda akan diminta untuk me-restart mode grafis agar konfigurasi bisa
      diterapkan.
TIP: Jika terdapat kegagalan dalam pengaturan layar bayangan, Anda bisa restart
BlankOn Linux dalam keadaan kabel VGA output masih terpasang. Setelah kembali
ke desktop, maka layar bayangan akan langsung diterapkan dengan resolusi layar
yang sudah disesuaikan.
#### Pada BlankOn minimalis
   1. Klik pada menu BlankOn > Settings > Monitor Settings
   2. Beri tanda centang pada “Hidupkan” di masing-masing monitor yang ingin
      Anda aktifkan, kemudian Anda bisa mengatur resolusi layar serta laju
      refresh dari masing-masing layar.
   3. Klik tombol OK untuk menerapkan pengaturan Anda.
### Konfigurasi Mesin Pencetak
Manajemen mesin pencetak atau printer yang ada di BlankOn Linux diatur oleh
sebuah piranti lunak server bernama CUPS (Common Unix Printing System). CUPS
bertanggung jawab untuk menerima permintaan pencetakan baik dari lokal maupun
dari jaringan, melakukan job pencetakan dan mengirim informasi ke printer untuk
melakukan pencetakan.
Secara default, driver mesin pencetak akan langsung terpasang di BlankOn Linux
jika mesin pencetak tersebut sudah tersedia di sistem pada saat printer pertama
kalinya dipasang ke komputer. Anda akan melihat pesan notifikasi bahwa printer
baru telah ditambahkan. Namun, jika mesin pencetak Anda tidak terdeteksi sama
sekali atau printer terbagi di jaringan, Anda bisa membuka tool konfigurasi
mesin pencetak yang Anda bisa buka melalui menu System > Administrasi >
Mencetak. Berikut adalah langkah – langkah penambahan mesin pencetak melalui
tool konfigurasi printer :
   1. Klik ikon “Baru” pada toolbar. Tunggu sebentar, CUPS akan melakukan
      pengecekan terhadap mesin pencetak yang terpasang di port komputer maupun
      yang ada di jaringan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/cups-select-printer-to-
add.png]
   1. Setelah proses pengecekan selesai, pilih koneksi/sambungan printer pada
      bagian “Select device”.
   2. Tunggu sebentar, CUPS sedang mencari driver yang tepat untuk mesin
      pencetak Anda. Kemudian, tentukan sumber driver dari mesin pencetak
      tersebut. Terdapat tiga pilihan opsi, antara lain :
          o “Select printer from database”, pilih opsi ini jika Anda ingin
            menggunakan driver mesin pencetak yang sudah tersedia di sistem.
            Jika memilih opsi ini, pilih merk dari mesin pencetak Anda
            (biasanya sudah dipilihkan secara otomatis).
          o “Provide PPD file”, pilih opsi ini jika ingin memasang driver dari
            file PPD yang kadang tersedia di CD Driver mesin pencetak Anda.
          o “Search for printer driver to download”, pilih opsi ini jika Anda
            tidak memiliki driver yang cocok untuk printer Anda. Ketik nama dan
            model mesin pencetak dan CUPS akan mengunduh driver-nya untuk Anda.
Pilih salah satu opsi, kemudian lakukan pengaturan sesuai opsi tersebut dan
klik tombol “Maju”.
   1. Jika Anda memilih opsi kesatu pada langkah sebelumnya, pilih tipe mesin
      pencetak yang Anda gunakan, kemudian klik tombol “Maju”.
   2. Masukkan Nama mesin pencetak, deskripsi (opsional) dan lokasi nyata
      (opsional) dari mesin pencetak yang akan ditambahkan. Langkah terakhir,
      klik tombol “Terapkan”.
   3. Untuk melakukan percobaan pada printer, Anda bisa klik tombol “Ya” pada
      saat muncul pesan pertanyaan apakah Anda ingin melakukan tes pencetakkan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/cups-printer-manager.png]
INFO: Tidak semua driver (pengendali) mesin pencetak tersedia di BlankOn Linux
secara default. Beberapa mesin pencetak seri terbaru mungkin saja belum
tersedia driver-nya di BlankOn. Untuk informasi dukungan driver mesin pencetak
di BlankOn Linux, silahkan buka situs ​http://openprinting.org. Disana juga
akan terdapat dokumentasi cara pemasangan mesin pencetak jenis-jenis tertentu
yang tidak bisa Anda pasang driver-nya melalui langkah di atas.
### Konfigurasi Scanner
Manajemen scanner di BlankOn Linux menggunakan piranti lunak bernama SANE
(www.sane-project.org). Untuk melakukan scanning, Anda bisa buka aplikasi XSANE
melalui menu BlankOn > Grafis > Xsane Image Scanner.
Sebelum melakukan scanning, XSANE akan melakukan pendeteksian terhadap mesin
scanner yang terpasang di komputer. Setelah scanner ditemukan, maka Anda akan
melihat tampilan utama XSANE.
Tampilan utama XSANE terdiri dari tiga bagian, yaitu jendela penampil, jendela
utama dan histogram. Sebelum melakukan scanning, Anda dapat melakukan
pengaturan scanning seperti penggunaan warna, resolusi, tempat penyimpanan pada
jendela utama. Setelah pengaturan selesai, Anda dapat melakukan scanning dengan
klik pada tombol “Scan” pada jendela utama.
Jika Anda ingin melakukan OCR untuk mengambil teks dari suatu berkas yang di-
scan, Anda bisa memasang paket “gocr” dengan perintah berikut melalui terminal
:
blankon@blankon:~$ sudo apt-get install gocr↵
Kemudian, untuk melakukan OCR, klik menu File > OCR – Save as text.
INFO: Untuk melihat daftar lengkap scanner yang didukung oleh SANE, silahkan
buka halaman ​http://www.sane-project.org/sane-mfgs.html.
### Pengaturan Kartu Wireless LAN
Berbeda dengan sistem operasi yang lain, dalam Linux khususnya BlankOn Linux,
Anda tidak perlu lagi dipusingkan dengan masalah kartu wireless LAN (WLAN),
karena BlankOn Linux sudah memasang driver-nya secara otomatis, hampir sebagian
besar dari jenis-jenis kartu WLAN yang ada saat ini sudah di dukung oleh
BlankOn Linux.
Namun, memang tidak dapat dipungkiri bahwa sampai saat ini masih saja ada
beberapa jenis kartu WLAN yang belum di dukung sepenuhnya oleh BlankOn, seperti
chipset Broadcom dan Atheros.
Untuk dapat mengetahui apakah kartu WLAN yang kita miliki bekerja dengan baik,
kita dapat memeriksannya dengan mengetikkan perintah “sudo iwconfig” ini pada
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
perangkat tersebut akan muncul teks “no wireless extensions”. Jika perangkat
tersebut merupakan WLAN, maka akan muncul beberapa detail pada bagian perangkat
tersebut seperti pada bagian wlan0.
Teks pada bagian wlan0 menandakan bahwa driver WLAN sudah terpasang dan siap
digunakan. Namun, jika sebaliknya, berarti driver WLAN Anda belum terpasang
Lalu, bagaimana caranya menyelesaikan persoalan tersebut?. Banyak jalan menuju
roma, dan begitu juga dengan permasalahan yang satu ini, BlankOn Linux sudah
menyediakan alternatif bagi penggunya yang tidak dapat menggunakan kartu WLAN-
nya karena masalah dukungan hardware yang masih kurang.
Dalam menyelesaikan permasalahan ini, memang ada beberapa hal yang harus kita
persiapkan terlebih dahulu, dan disini kita akan membahasnya secara rinci.
Untuk dapat menggunakan kartu wireless yang tidak dapat berfungsi secara
otomatis, pertama yang harus dilakukan adalah memasang satu piranti lunak yang
bernama ndiswrapper. Dengan menggunakan piranti lunak ini, memungkinkan kita
untuk menggunakan driver WLAN yang digunakan pada sistem operasi Microsoft
Windows pada BlankOn.
Untuk memasang Ndiswrapper, instal paket “ndisgtk” melalui APT dengan perintah
“sudo apt-get install ndiswrapper” seperti berikut ini :
blankon@blankon:~$ sudo apt-get install ndisgtk↵
Setelah Ndiswrapper terpasang, tahapan selanjutnya adalah mencari driver WLAN
untuk Windows 2000/XP. Anda dapat menemukannya pads CD driver yang disertakan
pada WLAN atau mencarinya di Internet. Setelah mendapatakannya, klik menu
System > Administrasi > Driver Nirkabel Windows. Klik pada tombol “Install
Driver Baru”, kemudian klik pada berkas *.inf dari driver WLAN versi Windows
2000/XP. Kemudian driver tersebut akan diinstal. Setelah instalasi berhasil,
Anda bisa merestart komputer untuk mengaktifkan driver tersebut.
Pada saat kembali ke Desktop, buka Terminal lalu ketik kembali perintah “sudo
iwconfig”. Jika perangkat WLAN terdeteksi, berarti driver dari kartu WLAN
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
   1. Klik kanan pada ikon bluetooth pada notifikasi area, lalu pilih menu
      “Setup new Device...”.
   2. Pilih perangkat bluetooth yang ingin Anda sambungan dan tentukan nomor
      PIN yang Anda inginkan untuk proses pairing, kemudian klik tombol “Maju”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab13/bluez-find-devices.png]
   1. Kemudian, BlankOn akan melakukan koneksi ke perangkat yang Anda pilih.
      Pada tahapan ini, Anda juga diberitahukan informasi kode PIN yang harus
      Anda masukkan di perangkat agar bisa melakukan koneksi dengan baik.
      Setelah sambungan terjalin, klik tombol “Maju”.
   2. Pada konfigurasi terakhir, klik tombol “Tutup”.
Untuk melakukan transfer berkas ke perangkat, klik kanan pada ikon bluetooth
pada area notifikasi, lalu klik menu “Kirim berkas ke perangkat..”. Kemudian,
pilih berkas yang ingin Anda transfer.
Last modified on 07/20/2009 12:02:57 PM
#### Attachments (5)
    * bluez-find-devices.png​ (31.1 KB) - added by wirama 8 years ago.
    * cups-printer-manager.png​ (18.1 KB) - added by wirama 8 years ago.
    * cups-select-printer-to-add.png​ (20.3 KB) - added by wirama 8 years ago.
    * jockey-gtk.png​ (14.9 KB) - added by wirama 8 years ago.
    * screen-resolution-gnome.png​ (29.8 KB) - added by wirama 8 years ago.
#### 
    
 
 
 
 
 


 

