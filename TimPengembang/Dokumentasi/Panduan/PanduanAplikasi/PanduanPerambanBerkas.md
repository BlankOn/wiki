## Panduan  Menggunakan Peramban Berkas
Untuk melakukan manajemen berkas pada komputer, Anda dapat menggunakan aplikasi
peramban berkas yang bernama Nautilus. Bab ini menjelaskan mengenai cara
menggunakan Nautilus untuk keperluan manajemen berkas sekaligus mengenalkan
konsep manajemen berkas yang ada di BlankOn.

     TIP: Bagi Anda yang familiar dengan produk Microsoft Windows,
     Nautilus ini memiliki fungsi yang sama dengan Windows Explorer.

### Menggunakan Nautilus
Untuk melakukan pengelolaan berkas menggunakan Nautilus sangatlah mudah. Bagi
Anda yang sudah biasa menggunakan Microsoft Windows tidak akan mengalami
kesulitan karena yang berbeda hanyalah penampakannya saja (menu dan bahasa saja
yang berbeda). Cara menyalin dan menempel berkas dan atau direktori, menyeleksi
direktori atau berkas tidak berbeda antara BlankOn dan Windows. Demikian pula
membuat direktori, mengganti nama direktori atau berkas, menghapus direktori
atau berkas juga sama dengan Windows. Membuka berkas atau direktori yang ada di
Nautilus pun sama dengan Windows yaitu dengan klik ganda. Misalkan kita hendak
menghapus direktori atau berkas, kalau menggunakan tombol Delete berkas atau
direktori akan dipindah ke direktori tempat Sampah (Recycle Bin kalau di
Windows) tetapi jika menggunakan menggunakan tombol Shift+Delete berkas atau
direktori akan benar – benar dihapus.
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/lokasi.png]

Anda bisa mengklik direktori yang ingin Anda buka melalui menu Lokasi. Berikut
adalah direktori yang bisa Anda buka melalui menu tersebut:
  * [Beranda] merupakan direktori yang berisikan berkas-berkas milik
      pengguna.
  * [Desktop] merupakan direktori di dalam direktori beranda yang berisikan
      berkas yang bisa Anda lihat di Desktop.
  * [Dokumen] merupakan direktori di dalam direktori beranda yang
      diperuntukkan untuk menyimpan dokumen.
  * [Musik] merupakan direktori di dalam direktori beranda yang diperuntukkan
      untuk menyimpan musik.
  * [Gambar] merupakan direktori di dalam direktori beranda yang
      diperuntukkan untuk menyimpan gambar atau foto.
  * [Video] merupakan direktori di dalam direktori beranda yang diperuntukkan
      untuk menaruh video.
  * [Unduhan] merupakan direktori di dalam direktori beranda yang
      diperuntukkan untuk menaruh berkas unduhan.

Direktori-direktori tersebut tidaklah mutlak. Direktori tersebut sudah
disediakan demi kenyamanan Anda. Pada kenyataannya Anda (sebagai pengguna
biasa) dapat membuat direktori sebanyak yang Anda inginkan dan di mana saja
asal di dalam direktori beranda.

### Hirarki Partisi
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/nautilusroot.png]

Di BlankOn, Anda tidak akan mengenal istilah drive seperti pada Microsoft
Windows. Direktori paling atas yang ada di sistem adalah direktori/atau root
yang merupakan isi partisi sistem.

Melalui desktop BlankOn, Anda bisa membuka direktori ini melalui menu Lokasi >
Komputer > Sistem Berkas. Di dalam direktori/terdapat berbagai subdirektori
yang memiliki fungsi masing-masing, yaitu:

  * [/bin] menyimpan binari atau program yang sangat penting untuk sistem.
  * [/boot] menyimpan data-data yang diperlukan untuk melakukan booting
      sistem
  * [/cdrom] merupakan titik kait/mount point jika Anda memasukkan CD/DVD-
      ROM.
  * [/dev] menyimpan informasi yang bertautan dengan piranti keras yang
      terpasang ke sistem. Biasanya diperlukan untuk merujuk suatu lokasi
      piranti keras yang ada di sistem.
  * [/etc] menyimpan konfigurasi sistem berbentuk berkas teks.
  * [/home] menyimpan data-data yang dimiliki oleh pengguna non-
      administratif.
  * [/lib] menyimpan pustaka sistem yang sangat penting.
  * [/media] tempat untuk mengaitkan perangkat penyimpanan eksternal.
  * [/opt] tempat untuk menyimpan berkas-berkas piranti lunak pihak ketiga
      misal xampp, adobe reader.
  * [/sbin] menyimpan binari atau program yang penting untuk melakukan
      administrasi sistem.
  * [/tmp] menyimpan berkas-berkas yang bersifat sementara. Bila Anda sedang
      memutar video streaming (youtube, dan lain-lain), berkas video yang
      dilihat tersimpan disini. Jadi jika film yang Anda lihat sudah selesai,
      tinggal salin berkas ke direktori pilihan Anda. Ini merupakan keuntungan
      menggunakan BlankOn melihat youtube sekaligus mengunduhnya tanpa bantuan
      piranti lunak lain.
  * [/usr] menyimpan berkas-berkas pendukung piranti lunak yang terpasang di
      sistem. Gambar latar (Wallpaper), ikon, atau berkas suara yang digunakan
      sistem tersimpan disini.
  * [/var] menyimpan berkas-berkas yang selalu berubah atau variabel, seperti
      catatan sistem, surel pengguna, dan sebagainya.

### Hak Akses Berkas dan atau direktori
Setiap berkas dan direktori memiliki pemilik serta izin masing-masing. Tidak
semua direktori bisa diakses dan diubah oleh semua pengguna. Hal ini untuk
menjaga kestabilan sistem dan menghindari pengguna yang ceroboh atau sengaja
untuk merusak sistem. Pengguna biasa hanya bisa mengelola berkas di dalam
direktori /home/akunpengguna yang memang dimiliki oleh pengguna bersangkutan.
Anda bisa membukanya melalui menu Lokasi > direktori beranda pada destop
BlankOn.

Selain direktori tersebut, pengguna harus mempunyai izin khusus dari
administrator sistem. Penamaan berkas di BlankOn juga sangat berbeda dengan
Windows. Di BlankOn, penamaan berkas memperhatikan huruf besar dan huruf kecil
(case sensitive). Jadi, Anda bisa membuat berbagai berkas dengan nama yang
sama, tetapi dengan derajat huruf yang berbeda. Contohnya, Anda bisa membuat
berkas “Berkasku”, “berkasKU”, “berkasku”, “berKASku”, dan sebagainya dalam
satu direktori tanpa ada konflik.

Untuk membuka isi partisi selain partisi sistem atau suatu media penyimpanan,
partisi yang ingin Anda buka harus dikaitkan (mounting) ke suatu direktori
(umumnya di bawah direktori /media) sehingga isi dari partisi atau media
penyimpanan tersebut bisa dilihat dan dikelola hanya dengan membuka direktori
tersebut. Jika sedang menggunakan desktop, Anda tidak perlu melakukan pengaitan
secara manual setiap ingin membuka isi media peyimpanan karena BlankOn sudah
melakukannya untuk Anda. Anda bisa melihat isi media penyimpanan melalui menu
Lokasi > Komputer pada desktop BlankOn. Hal unik lainnya pada manajemen berkas
di BlankOn adalah pengaturan hak aksesnya yang sangat detail dan ketat. Setiap
berkas atau direktori yang ada di partisi BlankOn memiliki beberapa parameter
mengenai hak akses, yaitu:

  * [Pengguna pemilik berkas/direktori] berisi identitas pengguna dari
      pemilik suatu berkas/direktori.
  * [Kelompok pemilik berkas/direktori] berisi identitas kelompok yang
      memiliki suatu berkas/direktori.
  * [Hak akses untuk pemilik] berisikan hak apa saja yang boleh dilakukan
      oleh pengguna pemilik berkas/direktori terhadap suatu berkas/direktori.
  * [Hak akses untuk kelompok] berisikan hak apa saja yang boleh dilakukan
      oleh kelompok pemilik berkas/direktori terhadap suatu berkas/direktori.
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/hakakses.png]

Hak akses untuk yang lainnya, berisikan hak apa saja yang boleh dilakukan oleh
pengguna selain pemilik dan kelompok selain kelompok pemilik terhadap suatu
berkas/direktori. Setiap objek hak akses yang ada di atas memiliki tugas hak,
yaitu: Baca (Read), Tulis (Write), dan Eksekusi (eXecution). Setiap objek hak
akses juga bisa memiliki perpaduan hak yang berbeda, ada yang bisa dibaca saja,
ada yang bisa dibaca dan dieksekusi saja, dan ada juga yang memiliki hak mutlak
(baca, tulis dan eksekusi).

Untuk mengatur hak akses dari berkas/direktori, klik kanan pada berkas/
direktori yang ingin diubah hak aksesnya, lalu klik pada menu Properties. Pada
jendela Properti, klik pada tab Hak Akses.

Berikut adalah penjelasan dari masing-masing pengaturan:
  * [Mengatur pemilik dari berkas/direktori] Yang hanya bisa mengatur pemilik
      dari suatu berkas/direktori adalah administrator.
  * [Mengatur kelompok yang memiliki berkas/direktori] Yang bisa mengatur
      bagian ini adalah pemilik berkas/direktori tersebut.
  * Mengatur hak apa saja yang bisa dilakukan oleh pemilik berkas.
  * Mengatur hak apa saja yang bisa dilakukan oleh pengguna/kelompok pemilik
      berkas.
  * Mengatur hak apa saja yang bisa dilakukan oleh pengguna selain pemilik
      atau anggota kelompok.

Jika Anda mengatur hak akses pada direktori beserta berkas yang terdapat di
dalam direktori tersebut, Anda dapat mengklik [>Terapkan Hak ke Berkas yang
Disertakan<]. Bila sudah selesai, klik tombol [>Tutup<].

### Mengakses Media Penyimpanan Lain
Bila Anda memasang flashdisk atau harddisk eksternal, isi flashdisk/harddisk
eksternal akan langsung terbuka. Demikian pula bila Anda memasukkan CD atau DVD
yang berisi berkas non-multimedia, isi CD atau DVD akan langsung terbuka.
Tetapi jika tidak, Anda dapat membuka media penyimpanan (flashdisk, CD atau DVD
atau eksternal harddisk) dengan mengklik menu Lokasi lalu pilih media
penyimpanan yang ingin Anda buka isinya. Selain itu, Anda juga bisa memilih
menu Lokasi > Komputer dan klik ganda pada media penyimpanan.
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/computer.png]
Jika Anda sudah selesai menggunakan suatu media penyimpanan, Anda dapat
melepasnya dengan mengklik ikon di sebelah kanan nama media penyimpanan pada
bagian kiri peramban berkas. Alternatifnya, Anda bisa klik menu Lokasi >
Komputer, lalu klik kanan pada media penyimpanan yang ingin dilepas dan klik
menu [>Keluarkan Media<].

### Memampatkan Berkas/direktori
Berkas termampatkan berfungsi untuk mengelompokkan bebeberapa berkas/direktori
menjadi sebuah berkas untuk memudahkan proses backup. Tidak hanya
dikelompokkan, data juga akan diperkecil ukurannya sehingga sangat cocok untuk
pertukaran data. Untuk melakukan arsip pada Nautilus, klik pada beberapa berkas
yang ingin dimampatkan, lalu klik kanan dan pilih menu [>Mampatkan<].
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/mampatkan.png]
Kemudian, tentukan nama berkas hasil pemampatan, lokasi serta format
pemampatan. Format pemampatan yang didukung antara lain: 7z, RAR, ZIP, TAR,
TAR.GZ, dan lain-lain. Untuk melakukan pengaturan tambahan seperti untuk
menambahkan kata sandi, Anda bisa klik pada [>Opsi lain<]. Setelah semua
pengaturan selesai, klik pada tombol [>Buat<].

### Mencari berkas/direktori
Untuk mencari berkas/direktori yang tidak Anda ketahui tempatnya, Anda bisa
menggunakan fitur pencarian yang sudah terintegrasi dengan peramban berkas
Nautilus. Untuk melakukan pencarian, Anda bisa klik tombol cari pada bagian
toolbar Nautilus. Kemudian, ketik nama berkas yang ingin dicari pada kotak yang
disediakan, lalu tekan tombol Enter.
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/cari.png]

Jika menginginkan pencarian yang lebih mendetail, Anda bisa menggunakan fitur
cari berkas melalui menu Lokasi > Cari Berkas pada destop. Kemudian, ketik nama
berkas yang ingin dicari pada kotak [>Nama berisi<], dan lokasi pencarian pada
[>Cari dalam direktori<]. Untuk lebih detail lagi, Anda bisa menambahkan opsi
pencarian dengan memilih [>Berkas pilihan lainnya<] dan isi opsi yang
disediakan. Setelah semua selesai, klik tombol [>Cari<] untuk melakukan
pencarian.

### Berbagi direktori melalui Jaringan
Sebelum berbagi suatu direktori ke jaringan, Anda harus memasang paket Samba
terlebih dahulu. Samba merupakan server berbagi berkas yang bisa digunakan
antar platform antara lain: Windows, BlankOn, Mac OS X, Solaris, dan
sebagainya. Cara memasang samba tergolong mudah. Buka Nautilus lalu pilih
direktori yang hendak dibagi. Klik kanan direktori tersebut pilih menu Pilihan
Berbagi.
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/share.png]

Beri centang pada [>Share this direktori<] untuk mengaktifkan fitur berbagi
direktori dan beri nama sharing direktori yang akan dimunculkan pada saat
mengakses direktori pada kotak teks yang tersedia. Agar pengakses bisa menulis
isi direktori yang terbagi, beri centang pada [>Allow other people to write in
this folder<] dan beri centang [>Guest Access<] agar direktori bisa diakses
tanpa perlu autentifikasi identitas pengguna dan kata sandi. Setelah semua
selesai, klik tombol [>Buat Share<]. Pilih [>Add the permissions
automatically<]. Akan muncul emblem tangan di direktori yang kita bagi pakai.
Sekarang, komputer lain di jaringan sudah bisa mengakses direktori yang Anda
bagi.

### Peramban Jaringan
Selain untuk mengelola berkas secara lokal, Nautilus juga bisa dimanfaatkan
untuk mengelola berkas yang ada di jaringan dengan menggunakan protokol SMB
(Protokol berbagi direktori antar sistem operasi), SSH, FTP, dan WebDAV. Untuk
melihat jaringan di sekitar seperti melalui protokol SMB, Anda bisa klik menu
Lokasi > Jaringan. Kemudian, Anda bisa melihat nama komputer yang ada di
sekitar jaringan Anda.
[/raw-attachment/wiki/Dokumentasi/Panduan/PerambanBerkas/rambanjaringan.png]
Sedangkan, untuk mengelola berkas yang ada di jaringan selain SMB, Anda bisa
klik menu Lokasi > Masuk ke Server. Lalu, tentukan jenis layanan beserta
parameternya. Setelah semua selesai, klik pada tombol [>Sambung<]. Nautilus
akan melakukan sambungan terhadap protokol tersebut dan membukakan jendela
peramban untuk mengelola berkas pada sambungan tersebut. Selain itu, Nautilus
juga akan membuat item baru pada menu Lokasi, Desktop dan pada sidebar di
bagian kiri jendela peramban berkas yang berfungsi untuk merujuk ke sambungan
jaringan yang baru dibuat.
Last modified on 03/22/2014 03:37:13 PM

#### Attachments (8)
  * cari.png​ (109.3 KB) - added by guspur 3 years ago.
  * share.png​ (19.9 KB) - added by guspur 3 years ago.
  * rambanjaringan.png​ (27.4 KB) - added by guspur 3 years ago.
  * lokasi.png​ (14.3 KB) - added by guspur 3 years ago.
  * mampatkan.png​ (7.2 KB) - added by guspur 3 years ago.
  * hakakses.png​ (16.2 KB) - added by guspur 3 years ago.
  * computer.png​ (36.6 KB) - added by guspur 3 years ago.
  * nautilusroot.png​ (44.8 KB) - added by guspur 3 years ago.
 
---
 
