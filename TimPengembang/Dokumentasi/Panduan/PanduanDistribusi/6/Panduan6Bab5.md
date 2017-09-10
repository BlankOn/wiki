# Bab 5 Menggunakan Peramban Berkas

**Panduan BlankOn 6**

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
yang berbeda). Cara menyalin dan menempel berkas dan atau folder, menyeleksi
folder atau berkas tidak berbeda antara BlankOn dan Windows. Demikian pula
membuat folder, mengganti nama folder dan atau berkas, menghapus folder atau
berkas juga sama dengan Windows. Membuka file atau folder yang ada di Nautilus
pun sama dengan Windows yaitu dengan klik ganda. Misalkan kita hendak menghapus
folder atau berkas, kalau menggunakan tombol Del berkas atau folder akan
dipindah ke folder tempat Sampah (Recycle Bin kalau di Windows) tetapi jika
menggunakan menggunakan tombol Shift+Del berkas atau folder akan benar – benar
dihapus.
[membuka_folder_beranda_dengan_menu_>_Lokasi]
Membuka peramban berkas melalui menu Lokasi
Anda bisa mengklik folder yang ingin Anda buka melalui menu Lokasi. Berikut
adalah folder yang bisa Anda buka melalui menu tersebut:
  * [Beranda]
      merupakan folder yang berisikan berkas-berkas milik pengguna.
  * [Desktop]
      merupakan folder di dalam folder beranda yang berisikan berkas yang bisa
      Anda lihat di Desktop.
  * [Dokumen]
      merupakan folder di dalam folder beranda yang diperuntukkan untuk
      menyimpan dokumen.
  * [Musik]
      merupakan folder di dalam folder beranda yang diperuntukkan untuk
      menyimpan musik.
  * [Gambar]
      merupakan folder di dalam folder beranda yang diperuntukkan untuk
      menyimpan gambar atau foto.
  * [Video]
      merupakan folder di dalam folder beranda yang diperuntukkan untuk menaruh
      video.
  * [Unduhan]
      merupakan folder di dalam folder beranda yang diperuntukkan untuk menaruh
      berkas unduhan.
Folder-folder tersebut tidaklah mutlak. Folder tersebut sudah disediakan demi
kenyamanan Anda. Pada kenyataannya Anda (sebagai pengguna biasa) dapat membuat
folder sebanyak yang Anda inginkan dan di mana saja asal di dalam folder
beranda.
### Hierarki Partisi
[isi_folder_root]
Isi folder root (/)
Di BlankOn, Anda tidak akan mengenal istilah drive seperti pada Microsoft
Windows. Folder paling atas yang ada di sistem adalah folder / atau root yang
merupakan isi partisi sistem.
Melalui destop BlankOn, Anda bisa membuka folder ini melalui menu Lokasi >
Komputer > Sistem Berkas. Di dalam folder / terdapat berbagai subfolder yang
memiliki fungsi masing-masing, yaitu:
  * [/bin]
      menyimpan binari atau program yang sangat penting untuk sistem.
  * [/boot]
      menyimpan data-data yang diperlukan untuk melakukan booting system.
  * [/cdrom]
      merupakan titik kait/mount point jika Anda memasukkan CD/DVD-ROM.
  * [/dev]
      menyimpan informasi yang bertautan dengan piranti keras yang terpasang ke
      sistem. Biasanya diperlukan untuk merujuk suatu lokasi piranti keras yang
      ada di sistem.
  * [/etc]
      menyimpan konfigurasi sistem berbentuk file teks.
  * [/home]
      menyimpan data-data yang dimiliki oleh pengguna non-administratif.
  * [/lib]
      menyimpan pustaka sistem yang sangat penting.
  * [/media]
      tempat untuk mengaitkan perangkat penyimpanan eksternal
  * [/opt]
      tempat untuk menyimpan berkas-berkas piranti lunak pihak ketiga misal
      xampp, adobe reader.
  * [/sbin]
      menyimpan binari atau program yang penting untuk melakukan administrasi
      sistem.
  * [/tmp]
      menyimpan berkas-berkas yang bersifat sementara. Bila Anda sedang melihat
      www.youtube.com, berkas film yang dilihat tersimpan disini. Jadi jika
      film yang Anda lihat sudah selesai, tinggal salin berkas ke folder
      pilihan Anda. Ini merupakan keuntungan menggunakan BlankOn melihat
      youtube sekaligus mengunduhnya tanpa bantuan piranti lunak lain.
  * [/usr]
      menyimpan berkas-berkas pendukung piranti lunak yang terpasang di sistem.
      Wallpaper, ikon, atau berkas suara yang digunakan sistem tersimpan
      disini.
  * [/var]
      menyimpan berkas-berkas yang selalu berubah atau variabel, seperti
      catatan sistem, surel pengguna, dsb.
### Hak Akses Berkas dan atau Folder
Setiap berkas dan folder memiliki pemilik serta izin masing-masing. Tidak semua
folder bisa diakses dan diubah oleh semua pengguna. Hal ini untuk menjaga
kestabilan sistem dan menghindari pengguna yang ceroboh atau sengaja untuk
merusak sistem. Pengguna biasa hanya bisa mengelola berkas di dalam folder/
home/akunpengguna yang memang dimiliki oleh pengguna bersangkutan. Anda bisa
membukanya melalui menu Lokasi > Folder beranda pada destop BlankOn.
Selain folder tersebut, pengguna harus mempunyai izin khusus dari administrator
sistem. Penamaan berkas di BlankOn juga sangat berbeda dengan Windows. Di
BlankOn, penamaan berkas membedakan huruf besar dan huruf kecil (case
sensitive). Jadi, Anda bisa membuat berbagai berkas dengan nama yang sama,
tetapi dengan derajat huruf yang berbeda. Contohnya, Anda bisa membuat berkas
“Berkasku”, “berkasKU”, “berkasku”, “berKASku”, dsb dalam satu folder tanpa ada
konflik.
Untuk membuka isi partisi selain partisi sistem atau suatu media penyimpanan,
partisi yang ingin Anda buka harus dikaitkan (mounting) ke suatu folder
(umumnya di bawah folder /media) sehingga isi dari partisi atau media
penyimpanan tersebut bisa dilihat dan dikelola hanya dengan membuka folder
tersebut. Jika sedang menggunakan destop, Anda tidak perlu melakukan pengaitan
secara manual setiap ingin membuka isi media peyimpanan karena BlankOn sudah
melakukannya untuk Anda. Anda bisa melihat isi media penyimpanan melalui menu
Lokasi > Komputer pada destop BlankOn. Hal unik lainnya pada manajemen berkas
di BlankOn adalah pengaturan hak aksesnya yang sangat detail dan ketat. Setiap
berkas atau folder yang ada di partisi BlankOn memiliki beberapa parameter
mengenai hak akses, yaitu:
  * [Pengguna pemilik berkas/folder]
      berisi id pengguna dari pemilik suatu berkas/folder.
  * [Kelompok pemilik berkas/folder]
      berisi id kelompok yang memiliki suatu berkas/folder.
  * [Hak akses untuk pemilik]
      berisikan hak apa saja yang boleh dilakukan oleh pengguna pemilik berkas/
      folder terhadap suatu berkas/folder.
  * [Hak akses untuk kelompok]
      berisikan hak apa saja yang boleh dilakukan oleh kelompok pemilik berkas/
      folder terhadap suatu berkas/folder.
[properti_buku_panduan.pdf]
Pengaturan hak akses pada berkas buku-panduan.pdf
Hak akses untuk yang lainnya, berisikan hak apa saja yang boleh dilakukan oleh
pengguna selain pemilik dan kelompok selain kelompok pemilik terhadap suatu
berkas/folder. Setiap objek hak akses yang ada di atas memiliki tugas hak,
yaitu: Baca (Read), Tulis (Write), dan Eksekusi (eXecution). Setiap objek hak
akses juga bisa memiliki perpaduan hak yang berbeda, ada yang bisa dibaca saja,
ada yang bisa dibaca dan dieksekusi saja, dan ada juga yang memiliki hak mutlak
(baca, tulis dan eksekusi).
Untuk mengatur hak akses dari berkas/folder, klik kanan pada berkas/folder yang
ingin diubah hak aksesnya, lalu klik pada menu Properties. Pada jendela
Properti, klik pada tab Hak Akses.
[properti_folder_dokumen]
Pengaturan hak akses pada folder Dokumen
Berikut adalah penjelasan dari masing-masing pengaturan:
  * [Mengatur pemilik dari berkas/folder]
      Yang hanya bisa mengatur pemilik dari suatu berkas/folder adalah
      administrator.
  * [Mengatur kelompok yang memiliki berkas/folder]
      Yang bisa mengatur bagian ini adalah pemilik berkas/folder tersebut.
  * Mengatur hak apa saja yang bisa dilakukan oleh pemilik berkas.
  * Mengatur hak apa saja yang bisa dilakukan oleh pengguna/kelompok pemilik
      berkas.
  * Mengatur hak apa saja yang bisa dilakukan oleh pengguna selain pemilik
      atau anggota kelompok.
Jika Anda mengatur hak akses pada folder beserta berkas yang terdapat di dalam
folder tersebut, Anda dapat mengklik [>Terapkan Hak ke Berkas yang
Disertakan<]. Bila sudah selesai, klik tombol [>Tutup<].
### Mengakses Media Penyimpanan Lain
Bila Anda memasang flashdisk atau harddisk eksternal, isi flashdisk/harddisk
eksternal akan langsung terbuka. Demikian pula bila Anda memasukkan CD atau DVD
yang berisi berkas nonmultimedia, isi CD atau DVD akan langsung terbuka. Tetapi
jika tidak, Anda dapat membuka media penyimpanan (flashdisk, CD atau DVD atau
eksternal harddisk) dengan mengklik menu Lokasi lalu pilih media penyimpanan
yang ingin Anda buka isinya. Selain itu, Anda juga bisa memilih menu Lokasi >
Komputer dan klik ganda pada media penyimpanan.
[peramban_berkas]
Melihat semua media penyimpanan yang terpasang Jika Anda sudah selesai
menggunakan suatu media penyimpanan, Anda dapat melepasnya dengan mengklik ikon
di sebelah kanan nama media penyimpanan pada bagian kiri peramban berkas.
Alternatifnya, Anda bisa klik menu Lokasi > Komputer, lalu klik kanan pada
media penyimpanan yang ingin dilepas dan klik menu [>Keluarkan Media<].
Memampatkan Berkas/Folder? Berkas termampatkan berfungsi untuk mengelompokkan
bebeberapa berkas/folder menjadi sebuah berkas untuk memudahkan proses backup.
Tidak hanya dikelompokkan, data juga akan diperkecil ukurannya sehingga sangat
cocok untuk pertukaran data. Untuk melakukan arsip pada Nautilus, klik pada
beberapa berkas yang ingin dimampatkan, lalu klik kanan dan pilih menu
[>Mampatkan<].
[membuat_file_terkompres]
Memampatkan Berkas/Folder?
Kemudian, tentukan nama berkas hasil pemampatan, lokasi serta format
pemampatan. Format pemampatan yang didukung antara lain: 7z, RAR, ZIP, TAR,
TAR.GZ, dll. Untuk melakukan pengaturan tambahan seperti untuk menambahkan kata
sandi, Anda bisa klik pada [>Opsi lain<]. Setelah semua pengaturan selesai,
klik pada tombol [>Buat<].
### Mencari berkas/folder
Untuk mencari berkas/folder yang tidak Anda ketahui tempatnya, Anda bisa
menggunakan fitur pencarian yang sudah terintegrasi dengan peramban berkas
Nautilus. Untuk melakukan pencarian, Anda bisa klik tombol cari pada bagian
toolbar Nautilus. Kemudian, ketik nama berkas yang ingin dicari pada kotak yang
disediakan, lalu tekan tombol Enter.
[mencari_file]
Mencari berkas pada Nautilus
Jika menginginkan pencarian yang lebih mendetail, Anda bisa menggunakan fitur
cari berkas melalui menu Lokasi > Cari Berkas pada destop. Kemudian, ketik nama
berkas yang ingin dicari pada kotak [>Nama berisi<]dan lokasi pencarian pada
[>Cari dalam folder<]. Untuk lebih detail lagi, Anda bisa menambahkan opsi
pencarian dengan memilih [>Berkas pilihan lainnya<] dan isi opsi yang
disediakan. Setelah semua selesai, klik tombol [>Cari<] untuk melakukan
pencarian.
### Membakar data CD/DVD
Selain sebagai peramban berkas, Nautilus juga bisa digunakan untuk membakar CD/
DVD guna menyimpan data. Untuk membuka fitur ini, klik menu Aksesoris > CD/DVD
Creator pada Desktop BlankOn.
[cd_dvd_creator]
Pembakar CD/DVD built-in pada Nautilus
Silahkan salin berkas atau folder yang ingin Anda rekam ke CD/DVD dengan cara
yang sudah dijelaskan di atas. Kemudian, klik tombol [>Rekam ke Cakram<] jika
sudah selesai menyalin berkas/folder yang ingin direkam ke CD/DVD. Sebelum
memulai pembakaran/perekaman, Anda menentukan cakram CD/DVD yang akan digunakan
untuk pembakaran pada bagian [>Cakram yang ditulisi<], kemudian menentukan
label atau nama dari CD/DVD pada bagian [>Nama Cakram<]. Kemudian, klik tombol
[>Bakar<] untuk memulai pembakaran.
### Berbagi folder melalui Jaringan
Sebelum berbagi suatu folder ke jaringan, Anda harus memasang paket Samba
terlebih dahulu. Samba merupakan server berbagi berkas yang bisa digunakan
antarplatform antara lain: Windows, BlankOn, Mac OS X, Solaris, dsb. Cara
memasang samba tergolong mudah. Buka Nautilus lalu pilih folder yang hendak
dibagi. Klik kanan folder tersebut pilih menu Pilihan Berbagi.
[berbagi_folder]
Berbagi suatu folder
Beri centang pada [>Share this folder<] untuk mengaktifkan fitur berbagi folder
dan beri nama sharing folder yang akan dimunculkan pada saat mengakses folder
pada kotak teks yang tersedia. Agar pengakses bisa menulis isi folder yang
terbagi, beri centang pada [>Allow other people to write in this folder<] dan
beri centang [>Guest Access<] agar folder bisa diakses tanpa perlu
autentifikasi id pengguna dan password. Setelah semua selesai, klik tombol
[>Buat Share<]. Pilih [>Add the permissions automatically<]. Akan muncul emblem
tangan di folder yang kita bagi pakai. Sekarang, komputer lain di jaringan
sudah bisa mengakses folder yang Anda bagi.
### Peramban Jaringan
Selain untuk mengelola berkas secara lokal, Nautilus juga bisa dimanfaatkan
untuk mengelola berkas yang ada di jaringan dengan menggunakan protokol SMB
(Protokol berbagi folder antarsistem operasi), SSH, FTP, dan WebDAV. Untuk
melihat jaringan di sekitar seperti melalui protokol SMB, Anda bisa klik menu
Lokasi > Jaringan. Kemudian, Anda bisa melihat nama komputer yang ada di
sekitar jaringan Anda.
[meramban_jaringan]
Peramban Jaringan pada Nautilus
Sedangkan, untuk mengelola berkas yang ada di jaringan selain SMB, Anda bisa
klik menu Lokasi > Masuk ke Server. Lalu, tentukan jenis layanan beserta
parameternya. Setelah semua selesai, klik pada tombol [>Sambung<]. Nautilus
akan melakukan sambungan terhadap protokol tersebut dan membukakan jendela
peramban untuk mengelola berkas pada sambungan tersebut. Selain itu, Nautilus
juga akan membuat item baru pada menu Lokasi, Desktop dan pada sidebar di
bagian kiri jendela peramban berkas yang berfungsi untuk merujuk ke sambungan
jaringan yang baru dibuat.
Last modified on 06/26/2010 04:49:41 PM
#### Attachments (13)
  * panduan_ombilin_bab_v.2.odt​ (578.8 KB) - added by hanafi 7 years ago.
      bab 5 format odt
  * 5.1.jpeg​ (129.5 KB) - added by hanafi 7 years ago. isi folder root
  * 5.2.jpeg​ (63.1 KB) - added by hanafi 7 years ago. properti buku
      panduan.pdf
  * 5.3.jpeg​ (79.1 KB) - added by hanafi 7 years ago. properti folder
      dokumen
  * 5.5.jpeg​ (99.4 KB) - added by hanafi 7 years ago. peramban berkas
  * 5.7a.jpeg​ (43.2 KB) - added by hanafi 7 years ago. membuat file
      terkompres
  * cari.png​ (90.6 KB) - added by hanafi 7 years ago. mencari file
  * cari.jpeg​ (233.0 KB) - added by hanafi 7 years ago. mencari file
  * cd_creator.jpeg​ (135.9 KB) - added by hanafi 7 years ago. cd dvd creator
  * shared_folder.jpeg​ (41.7 KB) - added by hanafi 7 years ago. berbagi
      folder
  * meramban_jaringan.jpeg​ (230.4 KB) - added by hanafi 7 years ago.
      meramban jaringan
  * 5.4.jpeg​ (61.3 KB) - added by hanafi 7 years ago. membuka folder beranda
      dengan menu > Lokasi
  * panduan_ombilin_bab_v.odt​ (585.4 KB) - added by hanafi 7 years ago. bab
      5 format odt
#### 
    
 
 
 
 
 
---
 
