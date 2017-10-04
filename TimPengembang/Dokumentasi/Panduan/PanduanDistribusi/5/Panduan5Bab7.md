# BAB VII Aplikasi Internet
**Panduan BlankOn 5**

Internet saat ini tidaklah lagi termasuk ke dalam kebutuhan tersier atau mewah.
Kini, Internet menjadi kebutuhan yang sangat penting bagi setiap orang untuk
mengakses informasi atau berkomunikasi dengan orang lain di seluruh penjuru
dunia. Biaya untuk jaringan Internet sudah tidak semahal seperti pada saat
pertama kali diperkenalkan. Bahkan, beberapa tempat umum menyediakan jaringan
hotspot yang kebanyakan bersifat gratis agar Anda bisa mengakses Internet
melalui notebook atau perangkat lain yang memiliki fitur Wifi.
Untuk memanfaatkan jaringan Internet, BlankOn Linux menyediakan berbagai
aplikasi yang siap dipakai untuk keperluan Anda internet seperti peramban atau
peramban web, klien e-mail atau surat elektronik dan pesan instan.
### Koneksi ke Jaringan Internet
Sebelum berselancar di dunia maya menggunakan BlankOn, tentunya Anda harus
menyambungkan komputer ke jaringan Internet melalui LAN, Wireless LAN (Wifi),
Modem 3G/HSDPA, atau Modem ADSL.
#### Melalui kabel LAN
Pada umumnya, tempat-tempat kerja menyediakan jaringan Internet melalui
jaringan kabel atau wired. Untuk melakukan koneksi internet melalui kabel,
cukup sambungkan kabel RJ-45 dari jaringan LAN Anda ke LAN Card atau NIC yang
ada di komputer Anda.
Jika muncul pesan bahwa sambungan sudah terjalin pada area notifikasi, berarti
komputer telah sukses bergabung dengan jaringan tanpa masalah. Jika koneksi
ternyata gagal, berarti tempat kerja Anda menerapkan pengaturan jaringan secara
manual. Untuk itu, Anda perlu men-set pengaturan jaringan pada komputer Anda
terlebih dahulu. Untuk melakukan hal ini, klik kanan pada ikon dua buah
komputer pada area notifikasi, kemudian klik menu “Rubah Sambungan”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/nm-lan-manager.png]
Pada tab “Kabel”, klik tombol “Add” untuk menambahkan pengaturan jaringan baru.
Maka akan muncul jendela baru untuk membuat pengaturan jaringan baru. Pada
kotak teks “Sambungan nama:”, ketik nama pengaturan jaringan Anda. Misalnya,
jika jaringan adalah jaringan kantor, Anda bisa memberi nama “Kantor”.
Anda bisa memberi centang pada “Sambungan otomatis” agar pengaturan jaringan
tersebut langsung diterapkan jika Anda bergabung dengan jaringan kabel.
Kemudian buka tab “Pengaturan IPv4”. Pada tab ini, pilih opsi “Manual” pada
method, kemudian klik tombol “Tambah” untuk menambah setting IP jaringan.
Isilah “Address”, “Netmask”, dan “Gateway” sesuai dengan pengaturan jaringan di
kantor Anda. Kemudian, isi kotak teks “DNS Servers” dengan nomor IP dari DNS
Server di Internet. Anda bisa menanyakan bagaimana pengaturan jaringan di
kantor kepada administrator jaringan di kantor Anda. Setelah semua pengaturan
selesai, klik tombol “Apply”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/nm-lan-ipv4.png]
Untuk melakukan koneksi dengan jaringan kabel dengan pengaturan jaringan yang
baru dibuat, klik pada ikon dua komputer pada area notifikasi. Pada bagian
“Wired Networks”, pilih nama pengaturan jaringan Anda. Maka tidak lama kemudian
akan muncul pesan bahwa jaringan telah berhasil terjalin.
#### Melalui hotspot atau Wireless LAN
Saat ini, banyak sekali terdapat tempat-tempat umum atau perkantoran yang
menerapkan jaringan melalui teknologi wireless LAN atau yang sering dikenal
dengan istilah hotspot. Dengan jaringan seperti ini, tidak perlu lagi
direpotkan dengan penggunaan kabel karena jaringan ini menggunakan gelombang
microwave seperti jaringan GSM Handphone.
Untuk melakukan koneksi Internet melalui hotspot, sangat mudah sekali. Jika
kartu jaringan tanpa kabel sudah terdeteksi dengan baik oleh BlankOn, cukup
klik pada ikon dua komputer pada area notifikasi, kemudian pada bagian
“Jaringan Nirkabel”, pilih nama jaringan hotspot yang akan dikoneksikan. Tidak
beberapa lama kemudian, koneksi akan langsung terjalin.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/nm-hotspot-selector.png]
Jika ternyata koneksi tidak terjalin, mungkin Anda perlu melakukan penyetelan
konfigurasi jaringan secara manual. Untuk melakukan hal ini, klik kanan pada
ikon dua buah komputer pada area notifikasi, lalu klik menu “Rubah sambungan”.
Buka tab “Nirkabel”. Pada tab ini, klik pada nama jaringan yang ingin Anda atur
yang diawali dengan teks “Auto”, lalu klik pada tombol “Ubah”. Lalu buka tab
“Pengaturan IPv4”. Pada tab ini, pilih opsi “Manual” pada bagian method.
Kemudian, klik tombol “Tambah” dan isikan “Address”, “Netmask”, dan “Gateway”
sesuai dengan pengaturan jaringan hotspot tersebut. Setelah semua pengaturan
selesai, klik tombol “Apply”.
Sekarang, Anda bisa mengulangi melakukan koneksi ke jaringan hotspot yang sudah
Anda atur. Maka tidak akan lama, koneksi akan terjalin.
TIP : Jika kartu jaringan wireless tidak terdeteksi dengan baik, Anda bisa
menuju ke Bab 13 pada subbab tentang konfigurasi kartu WLAN.
#### Melalui modem ADSL
Saat ini, modem ADSL banyak digunakan untuk keperluan Internet melalui jaringan
telepon PSTN. Penggunaan modem ADSL tidak serepot menggunakan ISP berbasis
radio yang menjamur saat ini, karena tidak perlu membangun tower yang tinggi.
Cukup mengandalkan jaringan telpon PSTN yang sudah terpasang.
Biasanya, modem ADSL yang ada saat ini sekaligus berfungsi sebagai router untuk
jaringan. Anda cukup menyambungkan kabel LAN RJ-45 dari modem ADSL ke LAN Card
pada komputer, maka komputer akan langsung melakukan koneksi terhadap modem
tersebut. Tidak akan lama, koneksi akan terjalin dan Anda bisa mulai ber-
internet ria.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/nm-lan-connect.png]
#### Melalui modem 3G/HSDPA
Saat ini, banyak operator telekomunikasi berbasis 3G/HSDPA di Indonesia yang
menawarkan koneksi Internet yang cepat dan murah serta menjangkau banyak
tempat.
Nah, jika Anda ingin berkeinginan untuk melakukan koneksi internet melalui
jaringan tersebut, Anda dapat menggunakan alat bernama Modem 3G/HSDPA. Modem
ini biasanya dipaketkan bersamaan dengan paket perdana dari produk Internet 3G/
HSDPA yang diberikan oleh operator.
Untuk menggunakan modem 3G/HSDPA pada BlankOn Linux, bukanlah perkara yang
sangat sulit karena, BlankOn sudah memiliki peralatan yang mendukung banyak
modem 3G/HSDPA. Berikut adalah langkah-langkahnya :
   1. Pertama-tama, klik kanan ikon dua buah komputer pada area notifikasi,
      kemudian pilih “Rubah Koneksi”. Kemudian, klik pada tab “Broadband alat
      bergerak”.
   2. Klik tambah untuk menambahkan operator baru. Pada jendela “New Mobile
      Broadband”, klik pada tombol “Maju” untuk maju ke langkah selanjutnya.
   3. Pada pemilihan provider, pilih operator/provider dari layanan 3G/HSDPA
      yang Anda gunakan. Kemudian, klik tombol “Maju”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/nm-select-provider.png]
   1. Kemudian, tentukan dari nama operator yang diinginkan. Lalu klik tombol
      “Terapkan”.
   2. Jika ingin melakukan pengaturan lebih lanjut, Anda bisa klik pada
      operator yang baru dibuat, lalu klik tombol “Ubah”. Kemudian, sesuaikan
      pengaturan sesuai dengan pengaturan dari operator Anda.
   3. Sekarang, colokkan modem 3G/HSDPA melalui port USB. Kemudian, klik pada
      ikon dua buah komputer pada notifikasi area. Lalu pada bagian Mobile
      Broadband, klik pada nama operator yang sudah dibuat sebelumnya. Jika
      koneksi berhasil dilakukan, maka akan muncul pesan notifikasi bahawa
      sambungan berhasil terjalin.
TIP. Jika modem 3G/HSDPA tidak terdeteksi, Anda bisa berdiskusi melalui Mailing
List atau Forum BlankOn Linux untuk menemukan pemecahannya.
### Peramban web Mozilla Firefox
Kebanyakan orang memanfaatkan jaringan internet dengan melakukan browsing atau
merambah halaman web untuk keperluan mencari suatu informasi atau keperluan
lainnya. Untuk melakukan browsing pada BlankOn Linux, Anda bisa memanfaatkan
aplikasi bernama Mozilla Firefox. Untuk membuka aplikasi ini, klik menu BlankOn
> Internet > Firefox web peramban.
INFO: Mozilla Firefox hanya tersedia pada BlankOn edisi Reguler. Untuk edisi
Minimalis, Anda bisa menggunakan aplikasi serupa bernama Epiphany yang bisa
diakses melalui menu BlankOn > Network > Epiphany Web peramban. Penampilan dari
Epiphany tidak jauh berbeda dengan Firefox, bahkan mesin atau engine yang
digunakanpun sama.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/firefox-main-window.png]
Jika Anda sudah pernah menggunakan Mozilla Firefox di sistem operasi Microsoft
Windows, Anda tidak akan asing dengan Firefox di BlankOn karena tampilannya
sangat mirip. Berikut adalah bagian-bagian dari jendela aplikasi Firefox :
    * Menu bar, berisikan semua perintah-perintah berbentuk menu yang bisa Anda
      jalankan.
    * Toolbar navigasi, berisikan ikon-ikon perintah yang berfungsi untuk
      melakukan navigasi seperti “Back” untuk kembali ke halaman sebelumnya,
      “Forward” untuk balik ke halaman semula, “Reload” untuk membuka kembali
      isi halaman web dari Internet.
    * Bar alamat, disinilah Anda mengisi alamat situs yang ingin Anda buka.
    * Pencarian, merupakan fitur yang ada di Firefox untuk melakukan pencarian
      di Internet menggunakan mesin pencari atau search engine. Secara default,
      Firefox memanfaatkan Google sebagai mesin pencari. Untuk menggunakan
      mesin pencari lainnya, klik pada ikon mesin pencari dan pilih mesin
      pencari yang Anda inginkan.
    * Halaman web, disinilah halaman web ditampilkan.
    * Status, menampilkan status dari pembukaan suatu halaman web.
Untuk membuka suatu situs, ketik alamat situs yang Anda buka pada bar alamat.
Misalnya, untuk membuka situs resmi BlankOn Linux, ketik
www.blankonlinux.or.id. Setelah alamat diketik, tekan tombol Enter untuk
memulai membukanya. Tunggu sebentar sampai halaman situs dibuka. Firefox juga
bisa Anda gunakan untuk membuka berbagai macam situs dalam satu waktu. Untuk
melakukan hal ini, Anda bisa menambahkan tab baru pada Firefox melalui menu
Berkas > Tab Baru. Semakin banyak tab yang Anda buka maka akan semakin banyak
memori RAM komputer yang akan dibuka. Jika komputer terasa agak lambat,
sebaiknya mengurangi tab yang sudah Anda buka.
TIP. Anda juga bisa menyingkat nama situs yang Anda buka. Misalnya, situs
​http://www.google.com bisa Anda buka hanya dengan mengetik google.com. Jika
Anda ingin memanfaatkan fitur mesin pencari Google, Anda tinggal ketik apa yang
ingin Anda cari pada kotak teks di pojok kanan atas jendela aplikasi, kemudian
tekan tombol Enter. Kemudian, Anda akan melihat hasil pencarian yang diinginkan
pada bagian halaman. Selain Google, Anda juga bisa menggunakan mesin pencari
lainnya dengan cara mengklik ikon mesin pencari pada kotak teks pencarian.
Terdapat berbagai pilihan mesin pencari, antara lain Yahoo, Amazon, Answers,
Wikipedia, Ask, Ebay, dsb.
Untuk mencatat situs favorit, Anda bisa memanfaatkan fitur Bookmark. Untuk
menambahkan situs yang Anda buka ke dalam bookmark, klik menu Bookmark > Buat
Bookmark halaman ini atau Anda bisa tekan tombol Ctrl+D pada keyboard.
Kemudian, ketik nama situs, deskripsi serta letak folder pada bookmark dan klik
tombol “Selesai”. Pengelolaan folder bookmark dapat dilakukan melalui fitur
pengelolaan bookmark yang dapat dibuka melalui meni Bookmark > Kelola bookmark.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/firefox-bookmarks-manager.png]
Mozilla Firefox juga mendukung penggunaan Add-Ons atau pengaya untuk menambah
fitur-fitur yang ada di Mozilla Firefox. Anda bisa mengunjungi situs ​http://
addons.mozilla.com untuk mencari dan menambah pengaya untuk Mozilla Firefox.
TIP. Untuk menggunakan fitur Flash dan Java pada Mozilla Firefox, Anda bisa
memasang paket “flashplugin-nonfree” serta “sun-java6-plugin” melalui APT.
### Klien E-Mail Evolution
E-Mail merupakan sarana bersurat melalui Internet yang saat ini banyak
digunakan oleh pengguna layanan Internet untuk melakukan komunikasi melalui
surat. E-Mail bisa dibuka melalui dua jalur, yang pertama adalah melalui jalur
Webmail yaitu E-Mail dibuka, dilihat dan dikelola melalui halaman web
menggunakan aplikasi peramban web. Yang kedua adalah E-Mail dibuka melalui
jalur POP3 atau IMAP menggunakan aplikasi klien e-mail. Kelebihan dari jalur
kedua adalah e-mail bisa diunduh terlebih dahulu ke komputer dan kemudian bisa
dibaca secara offline. Lain halnya dengan Webmail yang mengharuskan internet
tetap tersambung.
BlankOn menyediakan aplikasi klien E-Mail bernama Evolution yang merupakan
paket aplikasi pengelolaan tugas yang sangat lengkap dan setara dengan aplikasi
Microsoft Outlook di Microsoft Windows.
Untuk membuka Evolution, klik menu BlankOn > Internet > E-Mail Evolution. Pada
saat pertama kali dibuka, Evolution akan menampilkan program bantu/wizard
pengaturan awal. Ikuti langkah-langkahnya sebagai berikut :
   1. Langkah pertama, klik tombol “Maju”.
   2. Jika memiliki backup data tugas, klik pada centang “Restore Evolution
      from Backup file” dan tentukan berkas backupnya. Kemudian, klik tombol
      “Maju”.
   3. Isikan identitas lengkap anda, kemudian klik tombol “Maju”.
   4. Tentukan jenis server penerimaan E-Mail serta atur parameter server E-
      Mail sesuai dengan petunjuk yang diberikan oleh layanan E-Mail. Kemudian,
      klik tombol “Maju”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/evolution-pop-setting-
wizard.png]
   1. Tentukan opsi penerimaan e-mail yang diinginkan, kemudian klik tombol
      “Maju”.
   2. Tentukan jenis server pengiriman E-Mail serta atur parameter server
      pengiriman sesuai dengan petunjuk yang diberikan oleh penyedia layanan E-
      Mail. Selanjutnya, klik tombol “Maju”.
   3. Berikan nama dari akun E-Mail Anda. Lalu klik tombol “Maju”.
   4. Tentukan lokasi Anda pada peta yang disediakan, lalu klik tombol “Maju”.
   5. Evolution selesai diatur, sekarang klik tombol “Terapkan” untuk
      menerapkan pengaturan Anda.
Sekarang, Anda akan melihat aplikasi jendela utama dari fitur E-Mail pada
aplikasi Evolution. Untuk menerima surat dari server, klik ikon “Kirim/Terima?”
pada toolbar. Kemudian, Evolution akan mengunduh surat dari server dan
membawanya ke folder. Setelah pengunduhan selesai, Anda siap membaca surat baru
Anda.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/evolution-mail.png]
Selain fitur klien E-Mail, Evolution sebagai aplikasi pengelola tugas juga
memiliki fungsi untuk mengelola kontak dan alamat, memo, kalender dan tugas.
Untuk menggunakan fitur tersebut, klik pada salah satu pilihan tombol yang
tersedia di pojok kiri bawah jendela aplikasi Evolution. Untuk pembahasan
mengenai fitur-fitur tersebut, Anda bisa membaca bab selanjutnya mengenai
aplikasi perkantoran.
### Perpesanan Instan (IM) dengan Pidgin
Untuk keperluan komunikasi berbasis teks secara langsung atau chatting
menggunakan fitur perpesanan instan (Instant Messanging), BlankOn Linux
menyediakan aplikasi bernama Pidgin. Aplikasi ini mendukung IM dari berbagai
protokol, antara lain Yahoo! Messenger, AIM, Gtalk, ICQ, IRC, MSN, MySpace? dan
berbagai protokol lainnya. Untuk membuka aplikasi ini, klik menu BlankOn >
Internet > Pesan Instan Pidgin. Maka jendela aplikais Pidgin akan muncul
beserta sebuah ikon tray yang berada di area notifikasi.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/pidgin-welcome.png]
Untuk login menggunakan Pidgin, Anda harus terlebih dahulu mendaftarkan
identitas akun IM Anda pada Pidgin. Untuk melakukan hal ini, klik menu “Add”
pada jendela akun, lalu pilih jenis layanan IM serta informasi akun anda, lalu
klik menu “Add”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/pidgin-add-account.png]
Anda bisa mendaftarkan banyak akun IM pada Pidgin serta melakukan login pada
beberapa/semua akun tersebut secara bersamaan. Untuk login pada suatu akun,
beri tanda centang pada akun IM yang ingin Anda login. Kemudian, daftar nama
teman akan muncul pada jendela Daftar Teman. Sekarang, Anda bisa klik ganda
pada teman yang ingin Anda chat dan lakukanlah chatting terhadap teman Anda.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab7/pidgin-buddy-list.png]
TIP. Secara default, Pidgin hanya menampilkan teman yang Online saja. Untuk
menampilkan nama teman yang Offline, klik menu Teman > Tampilkan > Teman-teman
Online.
Untuk mengatur status akun IM, Anda bisa memanfaatkan pilihan yang terletak di
bagian bawah jendela Daftar Teman. Status ini akan muncul pada daftar teman
dari teman Anda.
TIP. Jika Anda tidak menggunakan Pidgin selama 5 menit, maka Pidgin akan secara
otomatis untuk mengubah status Anda menjadi “Saya tidak ada disini sekarang”.
Untuk menambahkan teman, klik menu Teman > Tambah Teman. Lalu atur akun yang
ingin ditambahkan sebuah teman (jika login lebih dari satu akun) dan berikan
nama id akun Anda beserta deskripsinya. Kemudian, klik tombol “Tambah Teman.”.
Anda juga bisa melakukan chatting tanpa perlu menambahkannya ke daftar teman
dengan klik menu Teman > Kirim Pesan Baru, lalu ketik nama id akun teman yang
ingin diajak chat.
Anda dapat menyembunyikan jendela daftar teman tanpa perlu melakukan logout
dengan cara menutupnya. Daftar teman pada Pidgin bisa Anda buka kembali dengan
klik ikon Pidgin pada area notifikasi. Untuk benar-benar keluar dari Pidgin
serta melogout semua akun, klik menu Teman > Keluar pada jendela “Daftar Teman”
atau tekan tombol Ctrl+Q pada keyboard.
Last modified on 07/06/2009 03:28:39 PM
#### Attachments (12)
    * evolution-mail.png​ (106.0 KB) - added by wirama 8 years ago.
    * evolution-pop-setting-wizard.png​ (44.2 KB) - added by wirama 8 years
      ago.
    * firefox-bookmarks-manager.png​ (28.2 KB) - added by wirama 8 years ago.
    * firefox-main-window.png​ (68.4 KB) - added by wirama 8 years ago.
    * nm-hotspot-selector.png​ (18.4 KB) - added by wirama 8 years ago.
    * nm-lan-connect.png​ (8.8 KB) - added by wirama 8 years ago.
    * nm-lan-manager.png​ (21.0 KB) - added by wirama 8 years ago.
    * nm-select-provider.png​ (30.6 KB) - added by wirama 8 years ago.
    * pidgin-add-account.png​ (33.2 KB) - added by wirama 8 years ago.
    * pidgin-buddy-list.png​ (14.6 KB) - added by wirama 8 years ago.
    * pidgin-welcome.png​ (28.0 KB) - added by wirama 8 years ago.
    * nm-lan-ipv4.png​ (44.3 KB) - added by wirama 8 years ago.
#### 
    
 
 
 
 
 


 

