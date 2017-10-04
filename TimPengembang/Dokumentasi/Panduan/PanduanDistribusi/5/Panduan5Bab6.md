## BAB VI Menggunakan Peramban Berkas

**Panduan BlankOn 5**

Untuk melakukan manajemen berkas pada komputer, Anda dapat menggunakan
aplikasi peramban berkas yang bernama Nautilus pada BlankOn Linux edisi
Reguler, dan PCMan pada BlankOn Linux edisi Minimalis. Bab ini menjelaskan
mengenai cara menggunakan Nautilus dan PCMan untuk keperluan manajemen berkas.
Tidak ketinggalan juga, pada bab ini akan dibahas mengenai konsep manajemen
berkas yang ada di sistem operasi berbasis Linux.
### Konsep manajemen berkas pada Linux
Pada sistem operasi berbasis Linux, Anda tidak akan mengenal istilah drive
seperti pada Microsoft Windows. Folder paling atas yang ada di sistem adalah
folder “/” atau root yang merupakan isi dari partisi sistem. Melalui desktop
GNOME, Anda bisa membuka folder ini melalui menu Komponen > Komputer >
Filesystem. Didalam folder “/” terdapat berbagai subfolder yang memiliki fungsi
masing-masing, yaitu :
    * /bin, menyimpan binari atau program yang sangat penting untuk sistem.
    * /boot, menyimpan data-data yang diperlukan untuk melakukan booting
      system.
    * /cdrom, merupakan titik kait/mount point jika Anda memasukkan CD/DVD-ROM.
    * /dev, menyimpan informasi yang bertautan dengan piranti keras yang
      terpasang ke sistem. Biasanya diperlukan untuk merujuk suatu lokasi
      piranti keras yang ada di sistem.
    * /etc, menyimpan konfigurasi sistem berbentuk file teks.
    * /home, menyimpan data-data yang dimiliki oleh pengguna non-administratif.
    * /lib, menyimpan pustaka sistem yang sangat penting.
    * /media, tempat untuk melakukan mounting suatu penyimpan data.
    * /opt, tempat untuk menyimpan berkas-berkas bebas.
    * /sbin, menyimpan binary atau program yang penting untuk melakukan
      administrasi sistem.
    * /tmp, menyimpan berkas-berkas yang bersifat sementara.
    * /usr, menyimpan berkas-berkas piranti lunak yang terpasang di sistem.
    * /var, menyimpan berkas-berkas yang selalu berubah atau variabel, seperti
      catatan sistem, e-mail pengguna, dsb.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-filesystem.png]
Setiap berkas dan folder memiliki pemilik serta izin masing-masing. Tidak semua
folder bisa diakses dan diubah oleh semua pengguna. Hal ini untuk menjaga
kestabilan sistem dan menghindari pengguna yang ceroboh atau sengaja untuk
merusak sistem. Pengguna biasa hanya bisa mengelola berkas di dalam folder /
home/akunpengguna yang memang dimiliki oleh pengguna bersangkutan. Anda bisa
membukanya melalui menu Komponen > Folder Rumah pada desktop GNOME, atau klik
ganda pada ikon My Documents pada desktop LXDE. Selain folder tersebut,
pengguna harus mempunyai izin khusus dari administrator sistem.
Penamaan berkas di Linux juga sangat berbeda dengan Windows. Di Linux, penamaan
berkas bersifat Case Sensitive. Jadi, Anda bisa membuat berbagai berkas dengan
nama yang sama, tetapi dengan case (Besar kecilnya huruf) yang berbeda.
Contohnya, Anda bisa membuat berkas “Fileku”, “fIleKU”, “fileku”, “fILEKU”,
“FILEku”, dsb dalam satu folder tanpa ada konflik.
Untuk membuka isi partisi selain partisi sistem atau suatu media penyimpanan,
partisi yang ingin Anda buka harus di-mounting ke suatu folder (umumnya di
bawah folder /media) sehingga isi dari partisi atau media penyimpanan tersebut
bisa dilihat dan dikelola hanya dengan membuka folder tersebut. Jika sedang
menggunakan desktop, Anda tidak perlu melakukan mounting secara manual setiap
ingin membuka isi media peyimpanan karena baik desktop GNOME dan LXDE sudah
melakukannya untuk Anda. Anda bisa melihat isi media penyimpanan melalui menu
Komponen > Komputer pada desktop GNOME, atau melihat bagian kiri jendela PCMan
pada desktop LXDE.
Hal unik lainnya pada manajemen berkas di Linux adalah pengaturan hak aksesnya
yang sangat detail dan ketat. Setiap berkas/folder yang ada di partisi Linux
memiliki beberapa parameter mengenai hak akses, yaitu :
    * Pengguna pemilik berkas/folder, berisi id pengguna dari pemilik suatu
      berkas/folder.
    * Grup pemilik berkas/folder, berisi id grup yang memiliki suatu berkas/
      folder.
    * Hak akses untuk pemilik, berisikan hak apa saja yang boleh dilakukan oleh
      pengguna pemilik berkas/folder terhadap suatu berkas/folder.
    * Hak akses untuk grup, berisikan hak apa saja yang boleh dilakukan oleh
      grup pemilik berkas/folder terhadap suatu berkas/folder.
    * Hak akses untuk yang lainnya, berisikan hak apa saja yang boleh dilakukan
      oleh pengguna selain pemilik dan grup selain grup pemilik terhadap suatu
      berkas/folder.
Setiap objek hak akses yang ada di atas memiliki tugas hak, yaitu : Baca
(Read), Tulis (Write), dan Eksekusi (eXecution). Setiap objek hak akses juga
bisa memiliki perpaduan hak yang berbeda, ada yang bisa baca saja, ada yang
bisa baca dan eksekusi saja, dan ada juga yang memiliki hak mutlak (baca, tulis
dan eksekusi).
### Membuka peramban berkas Nautilus
Untuk melakukan pengelolaan berkas menggunakan Nautilus, Anda bisa mengklik
folder yang ingin Anda buka melalui menu Komponen. Berikut adalah folder yang
bisa Anda buka melalui menu tersebut :
    * Folder Rumah atau Home Folder merupakan folder yang berisikan berkas-
      berkas milik pengguna.
    * Desktop, merupakan folder didalam folder rumah yang berisikan berkas yang
      bisa Anda lihat di Desktop.
    * Dokumen, merupakan folder didalam folder rumah yang diperuntukkan untuk
      menyimpan dokumen.
    * Musik, merupakan folder didalam folder rumah yang diperuntukkan untuk
      menyimpan musik.
    * Gambar, merupakan folder didalam folder rumah yang diperuntukkan untuk
      menyimpan Gambar atau Foto.
    * Video, merupakan folder didalam folder rumah yang diperuntukkan untuk
      menaruh video.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/blankon-place-menu.png]
Jika Anda ingin membuka isi suatu media penyimpanan, Anda bisa klik menu
Komponen lalu pilih media penyimpanan yang ingin Anda buka isinya. Selain itu,
Anda juga bisa memilih menu Komponen > Komputer dan klik ganda pada media
penyimpanan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-computer.png]
Jika Anda sudah selesai menggunakan suatu media penyimpanan, Anda dapat
melepasnya dengan mengklik ikon “Eject” di sebelah kanan nama media penyimpanan
pada bagian kiri peramban berkas. Alternatifnya, Anda bisa klik menu Komponen >
Komputer, lalu klik kanan pada media penyimpanan yang ingin dilepas dan klik
menu “Lepaskan Volume”.
### Menggunakan peramban berkas Nautilus
Pada bagian ini, dijelaskan mengenai cara melakukan tugas manajemen berkas dan
folder seperti membuka berkas, menyalin berkas, memindahkan, membuat folder
baru, dsb pada aplikasi peramban berkas Nautilus yang terdapat di dalam BlankOn
Linux edisi Reguler.
#### Memilih berkas
Sebelum melakukan suatu tugas, Anda tentunya harus memilih berkas yang ingin
Anda lakukan tugas. Jika Anda hanya memilih sebuah berkas, cukup klik berkas
yang ingin Anda pilih. Namun, jika Anda memilih beberapa berkas, Anda bisa klik
berkas yang ingin dipilih sambil menekan tombol Ctrl.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-select-file.png]
#### Membuka berkas
Untuk membuka suatu berkas, Anda cukup klik dua kali pada berkas yang ingin
Anda buka. Maka berkas akan dibuka dengan aplikasi default yang sudah
ditentukan untuk membuka berkas tersebut.
Jika Anda ingin membuka suatu berkas menggunakan aplikasi selain yang sudah
ditentukan, Anda bisa klik kanan pada berkas yang ingin dibuka, lalu memilih
menu “Buka dengan Aplikasi Lain...”. Lalu pilih aplikasi yang ingin digunakan,
dan klik tombol “Buka”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-open-with.png]
#### Mengubah nama berkas/folder
Untuk mengubah nama berkas, pilih berkas yang ingin Anda ubah namanya, lalu
klik menu Sunting > Ganti Nama. Kemudian, ketik nama baru yang Anda inginkan.
Anda juga bisa tekan tombol F2 pada keyboard untuk mengubah nama berkas/folder.
#### Menyalin berkas/folder
Yang dimaksud dengan menyalin berkas/folder adalah membuat duplikat dari
berkas/folder yang sudah ada. Untuk melakukan hal ini, pilih berkas yang ingin
Anda salin lalu pilih menu Sunting > Salin. Atau Anda bisa tekan tombol Ctrl+C
Sekarang, buka folder tujuan penyalinan berkas, lalu klik menu Sunting >
Pasang. Atau Anda bisa tekan tombol Ctrl+V.
#### Memindahkan berkas/folder
Untuk memindahkan tempat berkas/folder dari suatu folder ke folder lainnya,
pilih berkas/folder yang ingin dipindahkan, lalu klik menu Sunting > Potong.
Atau tekan tombol Ctrl+X.
Kemudian, buka folder tujuan dan klik menu Sunting > Pasang atau tekan tombol
Ctrl+V.
#### Menghapus berkas/folder
Ada dua macam penghapusan berkas, yaitu penghapusan hanya dipindahkan ke tong
sampah yang masih bisa dikembalikan dan penghapusan permanen yang tidak bisa
Anda kembalikan lagi.
Untuk melakukan penghapusan ke tong sampah, Anda bisa memilih berkas yang ingin
dihapusa dan memilih menu Sunting > Pindahkan ke tong sampah atau Anda bisa
menekan tombol Delete pada keyboard. Pada saat ditanya, klik tombol “Hapus”.
Jika Anda ingin mengembalikan berkas yang dipindahkan ke tong sampah, Anda bisa
membuka isi tong sampah dengan klik menu Ke > Tong Sampah. Kemudian, pilih
berkas yang ingin Anda kembalikan lalu klik menu Sunting > Pulihkan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-trash.png]
Sedangkan untuk penghapusan permanen, pilih berkas yang ingin Anda hanguskan
lalu tekan tombol Shift+Delete. Pada saat muncul pertanyaan, klik tombol
“Hapus”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-delete-file.png]
#### Membuat folder baru
Untuk membuat folder baru, klik menu Berkas > Buat Folder. Lalu ketik nama
folder baru yang ingin Anda buat.
#### Mengatur hak akses pada berkas/folder
Untuk mengatur hak akses suatu berkas/folder pada peramban berkas Nautilus,
pilih berkas/folder yang ingin diatur lalu klik menu Berkas > Properti.
Kemudian, buka tab “Hak Akses”. Berikut adalah penjelasan dari masing-masing
pengaturan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-chmod-
configuration.png]
                                        Mengatur siapa pemilik dari suatu
[/raw-attachment/wiki/Dokumentasi/      berkas. Sebagai pengguna biasa, Anda
Panduan/5/Bab6/nautilus-chown-user.png] tidak bisa mengatur siapa pemiliknya.
                                        Yang hanya bisa mengaturnya adalah
                                        pengguna adalah administrator sistem.
                                        Mengatur hak akses apa saja yang boleh
                                        dilakukan oleh pengguna pemilik. Jika
                                        Anda mengatur hak akses folder, Anda
[/raw-attachment/wiki/Dokumentasi/      akan melihat dua opsi, yaitu hak akses
Panduan/5/Bab6/nautilus-chmod-user.png] folder untuk mengatur hak akses suatu
                                        folder dan hak akses berkas untuk
                                        mengatur hak akses berkas yang ada di
                                        dalam folder bersangkutan.
[/raw-attachment/wiki/Dokumentasi/
Panduan/5/Bab6/nautilus-chown-          Mengatur grup pemilik dari suatu berkas
group.png]
                                        Mengatur hak akses apa saja yang boleh
                                        dilakukan oleh grup pemilik.Jika Anda
[/raw-attachment/wiki/Dokumentasi/      mengatur hak akses folder, Anda akan
Panduan/5/Bab6/nautilus-chmod-          melihat dua opsi, yaitu hak akses
group.png]                              folder untuk mengatur hak akses suatu
                                        folder dan hak akses berkas untuk
                                        mengatur hak akses berkas yang ada di
                                        dalam folder bersangkutan.
                                        Mengatur hak akses apa saja yang boleh
                                        dilakukan selain oleh pengguna dan grup
                                        pemilik berkas/folder. Jika Anda
[/raw-attachment/wiki/Dokumentasi/      mengatur hak akses folder, Anda akan
Panduan/5/Bab6/nautilus-chmod-          melihat dua opsi, yaitu hak akses
other.png]                              folder untuk mengatur hak akses suatu
                                        folder dan hak akses berkas untuk
                                        mengatur hak akses berkas yang ada di
                                        dalam folder bersangkutan.
[/raw-attachment/wiki/Dokumentasi/      Perbolehkan suatu berkas untuk
Panduan/5/Bab6/nautilus-chmod-          dieksekusi. Terutama untuk script
execution.png]                          program.
[/raw-attachment/wiki/Dokumentasi/      Klik tombol ini jika Anda ingin
Panduan/5/Bab6/nautilus-chmod-          mengaplikasikan hak akses pada seluruh
applyrecursive.png]                     berkas/folder dibawah folder yang Anda
                                        atur hak aksesnya
#### Membuat berkas arsip
Berkas arsip berfungsi untuk mengelompokkan bebeberapa berkas/folder menjadi
sebuah berkas untuk memudahkan proses backup. Tidak hanya dikelompokkan, data
juga akan diperkecil ukurannya/dikompres sehingga sehingga sangat cocok untuk
pertukaran data.
Untuk melakukan arsip pada Nautilus, klik pada beberapa berkas yang ingin
diarsip, lalu klik kanan dan pilih menu “Buat Arsip”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-add-archive.png]
Kemudian, tentukan nama berkas hasil pengarsipan, lokasi serta format
pengarsipan. Format pengarsipan yang didukung antara lain : 7z, RAR, ZIP, TAR,
TAR.GZ, dll. Untuk melakukan pengaturan tambahan seperti untuk menambahkan
password, Anda bisa klik pada “Pilihan lain”. Setelah semua pengaturan selesai,
klik pada tombol “Buat”.
#### Mencari berkas/folder
Untuk mencari berkas/folder yang tidak Anda ketahui tempatnya, Anda bisa
menggunakan fitur pencarian yang sudah terintregasi dengan peramban berkas
Nautilus.
Untuk melakukan pencarian, Anda bisa klik tombol “Search” pada bagian toolbar
Nautilus. Kemudian, ketik nama berkas yang ingin dicari pada kotak yang
disediakan, lalu tekan tombol Enter.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-search-tool.png]
Jika menginginkan pencarian yang lebih mendetail, Anda bisa menggunakan fitur
cari berkas melalui menu Komponen > Cari Berkas pada desktop. Kemudian, ketik
nama berkas yang ingin dicari pada kotak “Nama berisi” dan lokasi pencarian
pada “Cari dalam folder”. Untuk lebih detail lagi, Anda bisa menambahkan opsi
pencarian dengan memilih “Berkas pilihan lainnya” dan isi opsi yang disediakan.
Setelah semua selesai, klik tombol “Cari” untuk melakukan pencarian.
#### Membakar data CD/DVD
Selain sebagai peramban berkas, Nautilus juga bisa digunakan untuk membakar CD/
DVD untuk menyimpan data. Untuk membuka fitur ini, klik menu Aksesoris > CD/DVD
Creator pada Desktop GNOME.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-cd-burning.png]
Silahkan salin berkas atau folder yang ingin Anda rekam ke CD/DVD dengan cara
yang sudah dijelaskan diatas. Kemudian, klik tombol “Rekam ke Disk” jika sudah
selesai menyalin berkas/folder yang ingin direkam ke CD/DVD.
Sebelum memulai pembakaran/perekaman, Anda menentukan cakram CD/DVD yang akan
digunakan untuk pembakaran pada bagian “Cakram yang ditulisi”, kemudian
menentukan label atau nama dari CD/DVD pada bagian “Nama Cakram”. Kemudian,
klik tombol “Bakar” untuk memulai pembakaran.
TIP: Untuk pengaturan pembakaran lebih lanjut seperti pengaturan kecepatan
pembakaran dan opsi pembakaran, Anda bisa klik tombol “Properti” sebelum
melakukan pembakaran.
#### Berbagi folder melalui Jaringan
Sebelum berbagi suatu folder ke jaringan, Anda harus memasang paket Samba
terlebih dahulu. Samba merupakan server berbagi berkas yang bisa digunakan
antar platform antara lain : Windows, Linux, Mac OS X, Solaris, dsb. Untuk
memasang paket samba, buka terminal dan ketik perintah berikut :
blankon@blankon:~$ sudo apt-get install samba↵
Setelah Samba dipasang, pilih folder yang ingin dibagi lalu klik menu Sunting >
Pilihan berbagi.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-file-sharing.png]
Beri centang pada “Share this folder” untuk mengaktifkan fitur berbagi folder
dan beri nama sharing folder yang akan dimunculkan pada saat mengakses folder
pada kotak teks yang tersedia. Agar pengakses bisa menulis isi folder yang
terbagi, beri centang pada “Allow other people to write in this folder” dan
beri centang “Guest Access” agar folder bisa diakses tanpa perlu autentifikasi
id pengguna dan password.
Setelah semua selesai, klik tombol “Buat Share”. Sekarang, komputer lain di
jaringan sudah bisa mengakses folder yang Anda bagi.
#### Peramban Jaringan
Selain untuk mengelola berkas secara lokal, Nautilus juga bisa dimanfaatkan
untuk mengelola berkas yang ada di jaringan dengan menggunakan protokol SMB
(Protokol berbagi folder antar sistem operasi), SSH, FTP, dan WebDAV. Untuk
melihat jaringan di sekitar seperti melalui protokol SMB, Anda bisa klik menu
Komponen > Jaringan. Kemudian, Anda bisa melihat nama komputer yang ada di
sekitar jaringan Anda.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/nautilus-network-browsing.png]
Sedangkan, untuk mengelola berkas yang ada di jaringan selain SMB, Anda bisa
klik menu Komponen > Menghubungi Server. Lalu, tentukan jenis layanan beserta
parameternya. Setelah semua selesai, klik pada tombol “Sambung”. Maka Nautilus
akan melakukan sambungan terhadap protokol tersebut dan membukakan jendela
peramban untuk mengelola berkas pada sambungan tersebut. Selain itu, Nautilus
juga akan membuat item baru pada menu Komponen, Desktop dan pada sidebar di
bagian kiri jendela peramban berkas yang berfungsi untuk merujuk ke sambungan
jaringan yang baru dibuat.
### Membuka peramban berkas PCMan
Untuk membuka peramban berkas PCMan pada BlankOn Linux edisi Minimalis, Anda
bisa klik ganda ikon “My Documents” pada area kerja LXDE, atau Anda juga bisa
klik menu BlankOn > Peralatan Sistem > PCMan File Manager. Maka PCMan akan
dibuka pada folder rumah pengguna.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-home.png]
Untuk membuka isi suatu media penyimpanan, cukup klik pada media penyimpanan
yang ingin dibuka pada bagian kiri jendela PCMan. Sementara untuk melepasnya,
Anda bisa klik kanan pada media penyimpnan yang ingin dilepas, lalu pilih menu
“Unmount this Volume”.
### Menggunakan peramban berkas PCMan
Pada bagian ini, dijelaskan mengenai cara melakukan tugas manajemen berkas dan
folder seperti membuka berkas, menyalin berkas, memindahkan, membuat folder
baru, dsb pada aplikasi peramban berkas PCMan yang terdapat di dalam BlankOn
Linux edisi Minimalis.
#### Memilih berkas
Untuk memilih sebuah berkas, cukup klik berkas yang ingin Anda pilih. Namun,
jika Anda memilih beberapa berkas, Anda bisa klik berkas yang ingin dipilih
sambil menekan tombol Ctrl. Pemilihan berkas diperlukan untuk selanjutnya
dilakukan manipulasi pada berkas yang dipilih tersebut.
TIP: Untuk memilih semua berkas dan folder yang ada di dalam satu folder, Anda
bisa tekan tombol Ctrl+A
#### Membuka berkas
Untuk membuka suatu berkas, Anda cukup klik dua kali pada berkas yang ingin
Anda buka. Maka berkas akan dibuka dengan aplikasi default yang sudah
ditentukan untuk membuka berkas tersebut.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-openwith.png]
Jika ingin membuka berkas dengan aplikasi yang Anda inginkan, klik kanan berkas
yang ingin dibuka, lalu arahkan ke menu “Open With”, kemudian klik aplikasi
yang ingin digunakan. Jika tidak terdapat pada daftar aplikasi, Anda bisa pilih
menu “Open with another application”.
#### Merubah nama berkas/folder
Untuk merubah nama berkas, pilih berkas yang ingin Anda ubah namanya, lalu klik
menu Edit > Rename. Kemudian, ketik nama baru yang Anda inginkan. Anda juga
bisa tekan tombol F2 pada keyboard untuk mengubah nama berkas/folder.
#### Menyalin berkas/folder
Yang dimaksud dengan menyalin berkas/folder adalah membuat duplikat dari
berkas/folder yang sudah ada. Untuk melakukan hal ini, pilih berkas yang ingin
Anda salin lalu pilih menu Edit > Copy. Atau Anda bisa tekan tombol Ctrl+C
Sekarang, buka folder tujuan penyalinan berkas, lalu klik menu Edit > Paste.
Atau Anda bisa tekan tombol Ctrl+V.
#### Memindahkan berkas/folder
Untuk memindahkan tempat berkas/folder dari suatu folder ke folder lainnya,
pilih berkas/folder yang ingin dipindahkan, lalu klik menu Edit > Cut. Atau
tekan tombol Ctrl+X.
Kemudian, buka folder tujuan dan klik menu Edit > Paste atau tekan tombol
Ctrl+V.
#### Menghapus berkas/folder
Untuk menghapus berkas/folder secara permanen, Anda bisa memilih berkas/folder
yang ingin dihapus, lalu memilih menu Sunting > Hapus, atau Anda bisa tekan
tombol Delete.
PERINGATAN''' Data yang sudah dihapus tidak bisa dikembalikan. Hati-hati dalam
melakukan penghapusan suatu berkas/folder.
#### Membuat folder baru
Untuk membuat folder baru, klik menu File > Create New > Folder. Lalu ketik
nama folder baru yang ingin Anda buat.
#### Mengatur hak akses pada berkas/folder
Untuk mengatur hak akses dari berkas/folder pada PCMan, klik kanan pada berkas/
folder yang ingin diubah hak aksesnya, lalu klik pada menu Properties. Pada
jendela Properties, klik pada tab Permissions.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-chmod-
configuration.png]
Berikut adalah penjelasan dari masing-masing pengaturan :
                                        Mengatur pemilik dari berkas/folder.
[/raw-attachment/wiki/Dokumentasi/      Ingat, yang hanya bisa mengatur pemilik
Panduan/5/Bab6/pcmanfm-chown-owner.png] dari suatu berkas/folder adalah
                                        administrator.
                                        Mengatur grup yang memiliki berkas/
[/raw-attachment/wiki/Dokumentasi/      folder. Yang hanya bisa mengatur bagian
Panduan/5/Bab6/pcmanfm-chown-group.png] ini adalah pemilik berkas/folder
                                        tersebut.
[/raw-attachment/wiki/Dokumentasi/      Mengatur hak apa saja yang bisa
Panduan/5/Bab6/pcmanfm-chmod-user.png]  dilakukan oleh pemilik berkas.
[/raw-attachment/wiki/Dokumentasi/      Mengatur hak apa saja yang bisa
Panduan/5/Bab6/pcmanfm-chmod-group.png] dilakukan oleh kelompok/grup pemilik
                                        berkas.
[/raw-attachment/wiki/Dokumentasi/      Mengatur hak apa saja yang bisa
Panduan/5/Bab6/pcmanfm-chmod-other.png] dilakukan oleh pengguna selain pemilik
                                        atau anggota grup.
Untuk menerapkan pengaturan, Anda bisa klik pada tombol OK. Jika Anda mengatur
hak akses pada folder, Anda akan ditanya apakah pengaturan akan diberlakukan
pada seluruh berkas didalam folder tersebut secara rekursif.
#### Membuat berkas arsip
Untuk membuat berkas arsip pada PCMan, klik pada beberapa berkas yang ingin
diarsip, lalu klik kanan dan pilih menu “Compress”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-add-archive.png]
Kemudian, tentukan nama berkas hasil pengarsipan, lokasi penyimpanan serta
serta format pengarsipan. Format pengarsipan yang didukung antara lain :
TAR.BZ2, TAR.GZ dan ZIP. Terakhir, klik tombol “Save” untuk membuat berkas
arsip.
#### Mencari berkas/folder
Untuk melakukan pencarian suatu berkas/folder pada PCMan, klik pada menu
BlankOn > Aksesoris > Search for Files and Folder.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab6/pcmanfm-search-tool.png]
Kemudian, tentukan nama berkas yang ingin dicari pada bagian “File Name
Contains” dan tambahkan juga folder tempat pencarian dengan mengklik tombol
“Add”. Jika Anda ingin mencari isi berkas, Anda bisa klik tab “Content” dan
mengetik isi dokumen yang ingin dicari. Untuk melakukan pencarian, klik pada
tombol “Find”. Maka hasil pencarian akan langsung ditampilkan pada jendela
pencarian.
Last modified on 07/06/2009 02:50:33 PM
#### Attachments (31)
    * blankon-place-menu.png​ (35.0 KB) - added by wirama 8 years ago.
    * nautilus-add-archive.png​ (26.3 KB) - added by wirama 8 years ago.
    * nautilus-cd-burning.png​ (80.0 KB) - added by wirama 8 years ago.
    * nautilus-chmod-applyrecursive.png​ (4.7 KB) - added by wirama 8 years
      ago.
    * nautilus-chmod-configuration.png​ (38.0 KB) - added by wirama 8 years
      ago.
    * nautilus-chmod-execution.png​ (2.2 KB) - added by wirama 8 years ago.
    * nautilus-chmod-group.png​ (6.9 KB) - added by wirama 8 years ago.
    * nautilus-chmod-other.png​ (4.7 KB) - added by wirama 8 years ago.
    * nautilus-chmod-user.png​ (8.3 KB) - added by wirama 8 years ago.
    * nautilus-chown-group.png​ (3.3 KB) - added by wirama 8 years ago.
    * nautilus-chown-user.png​ (2.5 KB) - added by wirama 8 years ago.
    * nautilus-computer.png​ (64.2 KB) - added by wirama 8 years ago.
    * nautilus-delete-file.png​ (14.1 KB) - added by wirama 8 years ago.
    * nautilus-file-sharing.png​ (23.2 KB) - added by wirama 8 years ago.
    * nautilus-filesystem.png​ (64.8 KB) - added by wirama 8 years ago.
    * nautilus-network-browsing.png​ (54.5 KB) - added by wirama 8 years ago.
    * nautilus-open-with.png​ (48.2 KB) - added by wirama 8 years ago.
    * nautilus-search-tool.png​ (60.2 KB) - added by wirama 8 years ago.
    * nautilus-select-file.png​ (90.7 KB) - added by wirama 8 years ago.
    * nautilus-trash.png​ (43.1 KB) - added by wirama 8 years ago.
    * nautilus-trash.2.png​ (43.1 KB) - added by wirama 8 years ago.
    * pcmanfm-add-archive.png​ (15.0 KB) - added by wirama 8 years ago.
    * pcmanfm-chmod-configuration.png​ (19.2 KB) - added by wirama 8 years ago.
    * pcmanfm-chmod-group.png​ (2.1 KB) - added by wirama 8 years ago.
    * pcmanfm-chmod-other.png​ (2.2 KB) - added by wirama 8 years ago.
    * pcmanfm-chmod-user.png​ (2.2 KB) - added by wirama 8 years ago.
    * pcmanfm-chown-group.png​ (1.3 KB) - added by wirama 8 years ago.
    * pcmanfm-chown-owner.png​ (1.4 KB) - added by wirama 8 years ago.
    * pcmanfm-home.png​ (29.2 KB) - added by wirama 8 years ago.
    * pcmanfm-openwith.png​ (54.9 KB) - added by wirama 8 years ago.
    * pcmanfm-search-tool.png​ (18.1 KB) - added by wirama 8 years ago.
#### 
    
 
 
 
 
 


 

