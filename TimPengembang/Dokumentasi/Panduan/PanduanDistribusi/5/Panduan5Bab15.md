# BAB XV : Berbagai Tip dan Trik

**Panduan BlankOn 5**

Pada bab ini, dijelaskan mengenai beberapa tip dan trik untuk distribusi
BlankOn Linux meliputi tip dan trik untuk booting, sistem, hardware, desktop,
aplikasi dan tip dan trik lainnya.

### Proses Booting
Mengembalikan GRUB yang hilang GRUB (GNU GRUB) merupakan boot loader yang
digunakan untuk melakukan booting berbagai distro Linux, termasuk BlankOn.
Program GRUB terpasang di bagian MBR (Master Boot Record) dari harddisk. GRUB
sangat penting agar BlankOn bisa dibuka. Pada saat komputer pertama kali
dihidupkan, GRUB akan menampilkan menu sistem operasi yang akan dijalankan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab15/grub-menu.png]

Kadangkala, GRUB bisa saja ditimpa oleh boot loader dari sistem operasi lain
setelah memasang sistem operasi tersebut (seperti Microsoft Windows). Jadi,
Anda tidak bisa menjalankan BlankOn Linux. Untuk mengembalikan GRUB, Anda bisa
mengikuti langkah berikut ini :
   1. Masukkan Live CD BlankOn 5.0 (Nanggar), kemudian atur BIOS agar melakukan
      booting pada CD tersebut.
   2. Tekan tombol Enter untuk menjalankan sistem operasi pada Live CD BlankOn
      Linux.
   3. Setelah sistem operasi BlankOn dijalankan, buka terminal dan lakukan
      pengikatan/mounting partisi sistem operasi BlankOn atau partisi /boot
      dengan perintah berikut (Misalkan partisi sistem berada pada /dev/sda5 ):
      blankon@blankon:~$ sudo mount /dev/sda5 /mnt↵

Jika Anda belum mengetahui letak partisi sistem, ketik perintah “sudo fdisk -l”
(Apa yang muncul di layar bisa saja berbeda dengan keluaran seperti di bawah
ini).
blankon@blankon:~$ sudo fdisk -l↵
Disk /dev/sda: 160.0 GB, 160041885696 bytes
255 heads, 63 sectors/track, 19457 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
Disk identifier: 0x86f686f6
Perangkat Boot      Awal          Akhir    Blocks   Id  System
/dev/sda1   *           1        2550    20482843+   7  HPFS/NTFS
/dev/sda2            2551        5099    20474842+   7  HPFS/NTFS
/dev/sda3            5100       19457   115330635    5  Extended
/dev/sda5            5100        6374    10241406    7  HPFS/NTFS
/dev/sda6            6375       10198    30716248+  83  Linux
/dev/sda7           10199       13385    25599546   83  Linux
/dev/sda8           13386       16572    25599546   83  Linux
/dev/sda9           16573       18465    15205491   83  Linux
/dev/sda10          18466       19457     7968208+  82  Linux swap/Solaris
   1. Setelah partisi sistem diikat pada folder “/mnt”, ketik perintah berikut
      untuk memasang GRUB (Ganti angka yang dicetak tebal dengan harddisk yang
      ingin digunakan, jika hanya ada satu harddisk, gunakan angka 0)
      blankon@blankon:/$ sudo grub-install --root-directory=/mnt hd0↵
      Installing GRUB to hd0 as (hd0)...
      Installation finished. No error reported.
      This is the contents of the device map /mnt/boot/grub/device.map.
      Check if this is correct or not. If any of the lines is incorrect,
      fix it and re-run the script `grub-install'.
      (hd0)	/dev/sda
Jika muncul pesan seperti diatas, berarti GRUB berhasil diinstal. Anda bisa
merestart komputer dan melihat hasilnya.

#### Menampilkan proses pada saat booting
Pada saat proses booting, distro BlankOn Linux menampilkan splash screen yang
sangat cantik dengan progress bar yang menunjukkan seberapa perjalanan proses
booting telah berjalan.
Namun, tahukah Anda apa saja yang dikerjakan oleh BlankOn Linux pada saat
proses booting? Untuk menampilkan detail proses booting pada BlankOn Linux,
Anda bisa mengikuti trik berikut ini :
    * Buka terminal melalui menu BlankOn > Aksesoris > Terminal.
    * Pada terminal, ketik perintah “sudo gedit /boot/grub/menu.lst”.
      blankon@blankon:~$ sudo gedit /boot/grub/menu.lst↵
    * Pada berkas “menu.lst” yang baru dibuka, carilah baris seperti berikut
      ## ## End Default Options ##
      title		BlankOn Meuligoe, kernel 2.6.27-7-generic
      uuid		db129b52-2327-4b0d-8d8e-72b1d741049a
      kernel		/boot/vmlinuz-2.6.27-7-generic
      root=UUID=db129b52-2327-4b0d-8d8e-72b1d741049a ro quiet splash
      initrd		/boot/initrd.img-2.6.27-7-generic
      quiet
    * Hilangkan teks "quiet", kemudian simpan file tersebut.
Setelah itu, Anda bisa restart komputer dan melakukan booting pada BlankOn
Linux, maka seluruh proses booting yang terjadi akan ditampilkan dalam bentuk
teks. Ternyata pada proses booting, banyak sekali proses yang dilakukan. Untuk
mengembalikannya ke keadaan semula, Anda bisa isi kembali teks yang sebelumnya
dihapus pada berkas /boot/grub/menu.lst.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab15/blankon-booting-verbose.png]
#### Mempercepat booting
Jika komputer Anda memiliki prosesor berinti dua atau lebih, Anda bisa mengatur
agar beberapa proses booting dijalankan secara sekaligus. Untuk melakukan hal
ini, Anda bisa mengikuti hal berikut :
   1. Buka terminal melalui menu BlankOn > Aksesoris > Terminal.
   2. Edit berkas /etc/init.d/rc dengan perintah berikut
      blankon@blankon:~$ sudo gedit /etc/init.d/rc
   3. Carilah baris berikut menggunakan fitur Cari pada toolbar aplikasi
      pengolah teks :
      CONCURRENCY=none
   4. Ubah kata “none” menjadi “shell” sehingga baris tersebut menjadi :
      CONCURRENCY=shell
   5. Terakhir, simpan berkas tersebut.
Sekarang, Anda bisa melakukan restart pada komputer dan merasakan perubahannya.

#### Mengganti tema login
Merasa bosan dengan tema pada saat memasukkan nama pengguna dan sandi pada saat
login? Anda bisa mengubahnya dengan cara berikut :
   1. Klik menu System > Administrasi > Jendela Login pada BlankOn reguler,
      atau menu BlankOn > Preferensi > Jendela Login pada BlankOn minimalis.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab15/gdmsetup.png]
   1. Masukkan sandi anda, karena hal ini membutuhkan hak administratif.
   2. Pada jendela “Pengaturan Jendela Login”, klik pada tab “Lokal”.
   3. Sekarang, pilih tema login yang ingin Anda gunakan. Jika Anda ingin tema
      login secara acak, Anda bisa pilih opsi “Acak dari terpilih” pada bagian
      “Tema”.
Setelah pengaturan selesai, Anda bisa keluar dari desktop dan melihat
perubahannya. Jika tema terasa kurang, Anda bisa mengunduh tema-tema melalui
situs GNOME Looks, GNOME Art atau Devian Art.
### Piranti Keras
#### Memperlambat “touchpad scrolling”
Pada beberapa notebook tertentu, utamanya yang baru saja dimigrasikan dari
windows ke linux, memiliki sedikit masalah, misalnya saja scrolling touchpad
yang terlalu cepat, ini jelas akan membuat para pengguna agak sedikit merasa
tidak nyaman. Sebenarnya cara untuk mengatasi masalah ini sangatlah mudah,
yaitu hanya dengan menambahkan beberapa baris konfigurasi pada file konfigurasi
xorg.conf, yaitu sebagai berikut:
   1. Pertama, yang harus dilakukan ialah membuka file konfigurasi xorg.conf di
      dalam gedit, hal ini dapat dilakukan dengan mengetikkan perintah berikut
      ini di dalam terminal.
      blankon@blankon:~$ sudo gedit /etc/X11/xorg.conf↵
   2. Setelah file tersebut terbuka, langkah selanjutnya ialah mencari bagian
      “Input device” pada file tersebut.
   3. Bila file tersebut sudah terbuka langkah selanjutnya ialah mencari kata
      berikut ini pada file tersebut:
      Section "InputDevice"
      Driver "synaptics"
   4. Lalu, bila sudah ditemukan. Di bawah semua tulisan yang berawal dengan
      option tersebut, tuliskanlah baris perintah berikut ini:
      Option "VertScrollDelta" "50"
   5. Langkah terakhir yang harus dilakukan ialah, logout dan log in kembali.
      Hal ini dilakukan agar perubahan yang dibuat tadi dapat dirasakan.
#### Partisi Windows kadang tidak dapat dibaca
Bagi Anda yang memiliki komputer dengan dual boot, antara BlankOn Linux dengan
Microsoft Windows, ada kemungkinan akan mendapatkan pesan seperti “Cannot mount
volume” ketika hendak membuka partisi Windows pada BlankOn Linux. Pesan ini
menunjukkan bahwa partisi Windows yang dimiliki tidak bisa di akses, hal ini
bisa saja terjadi pada BlankOn Linux karena disebabkan oleh beberapa faktor.
Salah satu faktor yang paling besar pengaruhnya adalah karena Windows itu
sendiri.
Hal ini akan terjadi jika pada saat Windows dimatikan secara tidak normal
ataupun karena media penyimpanan yang sudah sangat kotor. Jika Windows
dimatikan (shutdown) secara tidak normal (mati secara tiba-tiba) hal ini akan
membuat BlankOn Linux tidak bisa untuk mengakses partisi tersebut. Bahkan pada
beberapa kasus, sering ditemukan Windows yang sudah dimatikan dengan normal
tetap juga tidak bisa diakses partisinya. Hal ini bisa saja disebabkan oleh
karena partisi Windows yang sudah sangat kotor.
Untuk mengatasi masalah ini, hal yang harus dilakukan ialah menjalankan program
chkdisk pada Windows, untuk memeriksa partisi yang bermasalah tadi. Hal ini
juga bisa dilakukan dengan menggunakan program-program third party di Windows,
semisal wise disk cleaner. Program ini bertujuan untuk membersihkan partisi
tersebut dari sampah-sampah dan juga untuk melakukan defragment pada partisi
tersebut.
Jika tidak terdapat sistem operasi Microsoft Windows, Anda bisa menginstal
paket “ntfsprogs”. Setelah paket ini terinstal, Anda bisa menjalankan utility
bernama “ntfsfix”. Untuk menjalankan utility ini, ketik perintah :
blankon@blankon:~$ sudo ntfsfix /dev/sda1↵
Ubah “/dev/sda1” dengan partisi Windows yang ingin diperbaiki. Untuk melihat
semua partisi harddisk, Anda bisa ketik perintah berikut :
blankon@blankon:~$ sudo fdisk -l↵
#### Overburn data pada CD
Mungkin Anda pernah mengalami kejadian dimana data yang dimiliki lebih besar
dari kapasitas CD-R yang dipunya. Namun hal ini dapat diatasi dengan
menggunakan fasilitas overburn yang disediakan oleh blankon. Overburn merupakan
sebuah proses dimana kita memasukkan data yang lebih banyak dari yang
direkomendasikan oleh si pembuat CD-R tersebut, misalnya saja CD-R yang
memiliki kapasitas 700 Mb dapat di overburn sampai pada kapasitas 734 Mb,
lumayan bukan?
Namun, satu hal yang harus diketahui bahwa tidak semua komputer dapat membaca
disk yang sudah di overburn, untuk dapat menggunakan fasilitas overburn ini,
hal perlu dilakukan cukup mudah, yaitu dengan membuka aplikasi gconf-editor,
dan masukkalah ke bagian /apps/nautilus-cd-burner, lalu centang pada bagian
overburn yang terdapat pada sisi kanan aplikasi tersebut.
Sekarang, Anda bisa melakukan overburn pada saat membakar CD menggunakan
peramban berkas Nautilus.
#### Tweaking Harddisk
Jika harddisk terasa lambat, Anda bisa melakukan tweaking terhadap partisi
harddisk yang terpasang pada BlankOn Linux untuk meningkatkan performa
harddisk. Berikut adalah langkah-langkahnya :
   1. Buka berkas /etc/fstab melalui terminal dengan perintah berikut :
      blankon@blankon:~$ sudo gedit /etc/fstab↵
   2. Di dalam berkas tersebut, terdapat daftar partisi harddisk yang diikat/
      di-mount ke dalam sistem. Carilah baris partisi dengan mount point “/”
      seperti berikut :
      UUID=db129b52-2327-4b0d-8d8e-72b1d741049a/ ext3 relatime,errors=remount-
      ro
   3. Kemudian, ganti teks relatime diatas dengan “noatime” (tanpa tanda petik)
      untuk mempercepat kecepatan akses harddisk.
      UUID=db129b52-2327-4b0d-8d8e-72b1d741049a/ ext3 noatime,errors=remount-ro
   4. Terakhir, simpan berkas tersebut dan restart komputer Anda untuk
      merasakan perubahannya.
#### Mengatur kecepatan prosesor
Jika prosesor Anda memiliki fitur untuk mengubah kecepatan prosesor, Anda bisa
mengatur kecepatan prosesor melalui BlankOn Linux dengan menambahkan aplet
bernama “Pemantau Skala Frekuensi CPU”. Untuk menambahkan aplet ini pada panel,
klik kanan pada panel, lalu pilih menu “Masukkan ke Panel”, kemudian cari aplet
bernama “Pemantau Skala Frekuensi CPU”, dan klik tombol “Tambah”.
Sekarang, Anda bisa klik pada aplet baru tersebut untuk mengatur kecepatan
prosesor sesuai dengan kebutuhan. Khusus untuk pengguna prosesor Intel Celeron
terbaru atau Intel Pentium 4, Anda harus mengaktifkan terlebih dahulu modul
untuk mengatur kecepatan prosesor. Untuk melakukan hal tersebut, ikuti langkah-
langkah berikut :
   1. Ketik perintah berikut untuk membuka berkas /etc/modules
      blankon@blankon:~$ sudo gedit /etc/modules↵
   2. Tambahkan baris “p4_clockmod” (tanpa tanda petik), lalu simpan file
      tersebut.
   3. Restart komputer Anda.
Setelah komputer di-restart, maka Anda bisa memanfaatkan aplet tersebut untuk
mengatur kecepatan prosesor Intel Anda.
### Piranti Lunak
#### Mematikan paksa aplikasi yang hang
Terkadang, para pengguna komputer akan mengalami sebuah keadaan yang sangat
tidak mengenakkan, yaitu pada saat komputer mereka tidak dapat digunakan dengan
baik. Hal tersebut bukan disebabkan karena komputer yang rusak, melainkan
karena komputer tidak dapat digunakan sebagaimana biasanya karena terlalu sibuk
dengan proses yang sedang dijalankan.
Keadaan ini akan membuat komputer yang sedang digunakan terasa sedikit lambat,
atau bahkan sama sekali tidak bekerja. Sebagai contoh, bila Anda menggunakan
komputer yang berspesifikasi standar, kemudian secara bersamaan menjalankan
banyak aplikasi yang membutuhkan sumber daya memori yang cukup besar, hal ini
dapat mengakibatkan lambatnya komputer yang sedang digunakan atau dengan kata
lain komputer tersebut mengalami hang. Untungnya di dalam BlankOn Linux, sudah
terdapat sebuah komponen desktop yang sudah siap digunakan untuk dapat
mengatasi masalah ini. Xkill merupakan sebuah aplikasi yang dapat digunakan
untuk mengakhiri sebuah proses ataupun sebuah aplikasi secara paksa. Dengan
menggunakan aplikasi ini, pengguna dapat memilih program yang hang dan
mengakhirinya secara paksa.
Program ini dapat dijalankan melalui menu “Jalankan aplikasi” yang dapat
diaktifkan dengan cara menekan tombol kombinasi Alt + F2 pada desktop.
Pada jendela “Jalankan aplikasi”, ketikperintah xkill dan akhiri dengan menekan
Enter atau mengklik icon “jalankan” yang terdapat di sebelah kanan bawah
jendela “Jalankan aplikasi”. Kemudian sekarang kursor yang Anda miliki akan
berubah menjadi sebuah lambang seperti lambang bajak laut.
Dengan menggunakan lambang bajak laut tersebut, kliklah pada aplikasi yang
hendak dihentikan secara paksa, maka secara otomatis proses tersebut akan
dihentikan secara paksa oleh sistem.
#### Menghilangkan splash screen dari OpenOffice?.org
Seperti biasa di awal saat kita membuka aplikasi OpenOffice?.org, hal pertama
yang kita lihat adalah splash screen dari aplikasi tersebut. Splash screen ini
biasanya akan berada diatas dari semua program, masalahnya ialah bila loading
OpenOffice?.org tersebut lambat akan membuat splash screen tersebut juga lama
berada di atas semua window lainnya.
Cara untuk menghilangkan splash screen tersebut setiap aplikasi tersebut dibuka
adalah dengan membuka file konfigurasi dari OpenOffice?.org itu sendiri. Karena
didalam file konfigurasi tersebut terdapat pengaturan sistem kerja dari
OpenOffice?.org, untuk membuka file ini pertama yang dilakukan ialah membuka
terminal, lalu ketikkan perintah berikut ini :
blankon@blankon:~$ sudo gedit /etc/openoffice/sofficerc↵
Lalu, setelah file tersebut terbuka di dalam aplikasi gedit, carilah bacaan
Logo=1 ( biasanya terdapat pada baris ke-3 ). Bila sudah ditemukan gantilah
angka 1 yang terdapat di depan tanda sama dengan tersebut dengan angka 0. Bila
hal yang dilakukan sudah benar, coba sekarang di buka aplikasi OpenOffice?.org,
Splash screen pun tidak akan tampil lagi.
Bila ingin mengembalikan ke keadaan sebelumnya, tinggal membuka lagi file
tersebut, dan ubah angkanya lagi menjadi 1.
#### Cek e-mail baru pada Gmail menggunakan Gmailchecker
Kebanyakan orang sekarang ini sudah tidak dapat dipisahkan lagi dengan yang
namanya email atau surat elektronik. Disamping karena mudah dalam penggunaan,
juga karena cepat dalam proses pengirimannya. Salah satu penyedia layanan surat
elektronik yang paling digemari dan lumayan bagus adalah Gmail. Yang lebih
penting lagi adalah layanan ini bersifat gratis, sehingga siapapun dapat
membuat account pada layanan ini.
Sekarang bagaimana bila Anda adalah orang yang sangat sibuk, dan tidak
mempunyai waktu yang cukup untuk membuka layanannya langsung yang terdapat di
alamat www.gmail.com. Namun, masalah ini mudah di atasi di BlankOn Linux,
karena di BlankOn Linux sudah ada program yang mengingatkan penggunanya bila
terdapat email yang masuk, nama programnya ialah checkgmail.
Aplikasi ini dapat diinstall melalui APT dengan nama paket “checkgmail”,
setelah di install dengan baik aplikasi ini dapat ditemukan di BlankOn >
Internet > CheckGmail?. Namun sebelum melakukan konfigurasi account, sebaiknya
program ini ditambahkan dulu pada sesi di blankon agar nantinya dapat di load
(di panggil) ketika komputer di hidupkan. Setelah program ditambahkan pada
sesi, sekarang tinggal melakukan konfigurasi account gmail Anda pada program
ini. Bila semua sudah selesai, sekarang aplikasi ini sudah siap digunakan untuk
menerima dan mengirim email.
#### Pasang Skype di BlankOn Linux
Skype merupakan sebuah software yang banyak digunakan belakangan ini, software
ini dapat digunakan baik untuk phone maupun video calls. Baik antara sesama
komputer maupun dengan telepon yang sesungguhnya. Walapun software ini masih
dalam bentuk software proprietary, namun software in bersifat gratis sehingga
dapat di gunakan oleh siapa saja.
Jalah terbaik yang dapat digunakan untuk dapat menginstall aplikasi ini di
BlankOn Linux adalah dengan menambahkan repositorynya, sehingga dapat diinstall
dengan mudah melalui APT. Cara untuk menambahkan repositorynya adalah sebagai
berikut. Pertama bukalah menu System > Administrasi > Sumber Perangkat Lunak.
Kemudian, buka tab “Perangkat Lunak Pihak Ketiga” lalu klik tombol “Tambah..”
dan isikan APT line seperti berikut : deb ​http://download.skype.com/linux/
repos/debian/ stable non-free
Setelah mengetik APT line tersebut, klik tombol “Add Source”. Tutup jendela
pengaturan sumber perangkat lunak. Pada saat diminta untuk memuat ulang, klik
tombol “Memuat Ulang”.
Sekarang, Anda bisa menginstal paket “skype” melalui APT lalu menjalankan Skype
melalui menu BlankOn > Internet > Skype.
#### Mempercepat performa Firefox
Dalam penggunaannya sehari-hari memang tidak dapat kita pungkiri bahwa untuk
dapat menikmati dan menggunakan internet secara maksimal, dibutuhkan sebuah
peramban yang memiliki kinerja dan kecepatan yang bagus. Sekarang ini ada
banyak sekali pilihan software peramban yang dapat kita pilih, mulai dari
Firefox, IE, Opera, Operator dan Google Chrome. Dari sekian banyak pilihan yang
dapat kita gunakan, pasti masing-masing dari software tersebut memiliki
kekurangan dan kelebihannya masing-masing.
Untuk saat ini penggunaan peramban yang mendominasi masih dipegang oleh Mozilla
Firefox, ini terjadi karena memang peramban ini memiliki tampilan yang user
friendly dan dapat berjalan di multiplatform, dna tentunya peramban ini
memiliki kecepatan yang dapat kita handalkan. Namun bagi Anda yang belum puas
dengan kecepatan yang dimiliki oleh peramban ini secara bawaan. Disini akan
dibahas salah satu tip yang dapat Anda gunakan untuk mempercepat Firefox yang
Anda miliki.
Tips ini berlaku bagi Anda yang menggunakan sistem atau pun koneksi internet
yang tidak memungkinkan untuk menggunakan protokol IPv6, sekedar untuk
diketahui dengan menggunakan protokol ini, biasanya peramban kita akan berjalan
lebih cepat dari biasanya.
Hal pertama yang harus dilakukan adalah membuka peramban Firefox, kemudian pada
address bar-nya ketikkan lah perintah alamat about:config, kemudian pada text
field yang baru tuliskan perintah berikut: network.dns.disable.IPv6 kalau sudah
sekarang tinggal di klik aja dua kali, untuk mengaktifkan perintah tersebut.
Kemudian restart peramban-nya, dan kalau semua berjalan lancar, maka peramban
Anda kan berjalan dengan kecepatan yang tentunya lebih cepat dari biasanya.
#### Pasang fonta Windows
Fonta merupakan sebuah hal yang sangat penting di dunia komputer, kita tidak
akan dapat melakukan pekerjaan kita di komputer tanpa adanya font. Apalagi bagi
Anda yang bekerja dibidang Design atau semacamnya, pasti akan memerlukan banyak
macam dan tipe font tertentu.
Sebenarnya ada banyak sekali cara yang dapat kita gunakan untuk dapat
menginstall font pada BlankOn Linux. Untuk para pengguna BlankOn dapat
mengetikkan, Anda bisa memasang paket fonta dari Windows yang bernama
“msttcorefonts” melalui APT.
$ sudo apt-get install msttcorefonts
Setelah paket tersebut terpasang, maka dengan sendirinya sistem akan memasang
fonta bawaan yang tedapat di Windows ke sistem Anda. Untuk memasang beberapa
font tambahan, ada beberepa hal yang harus dilakukan.
Pertama, siapkanlah font-font yang hendak Anda install dalam sebuah folder.
Setelah terkumpul semua font, sekarang gandakan folder tersebut pada folder
rumah Anda, kemudian ubahlah nama folder tersebut menjadi .fonts (perhatikan
tanda titik yang terdapat pada kata fonts). Kemudian, restart desktop dan font
sudah siap digunakan.
#### Mengetik aksara tradisional Indonesia
BlankOn Linux memiliki fitur khusus yang memungkinkan Anda untuk mengetik dalam
huruf tradisional Indonesia. BlankOn 5.0 menyediakan fitur untuk mengetik
aksara Lontara' yang merupakan huruf khas suku Bugis Sulawesi Selatan dan
aksara Batak dari Sumatra utara. Untuk mengaktifkan fitur metoda input aksara
tradisional ini, anda bisa membuka fitur Dukungan Bahasa melalui menu System >
Administrasi > Dukungan Bahasa, kemudian beri tanda centang pada “Use input
method engine (IME) to enter the complex character”. Kemudian, tutup jendela
pengaturan dan lakukan restart pada desktop.
Setelah kembali ke desktop, anda akan melihat ikon baru berlambang keyboard
pada area notifikasi. Untuk memulai pengetikan aksara tradisional, buka salah
satu aplikasi yang memungkinkan pengetikan, kemudian klik pada ikon keyboard
pada area notifikasi dan pilih menu Indonesian > Buginese untuk aksara Lontara
atau Indonesian > Batak Toba untuk aksara toba.
Sekarang, Anda bisa mengetik dalam aksara Bugis atau Batak sesuai dengan
keinginan Anda. Misal, jika Anda ingin mengetik huruf lontara kaganga (ᨀᨁᨂ),
Anda bisa ketik “kgng” pada keyboard. Selamat menulis aksara tradisional!
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab15/gedit-lontara-text.png]
### Desktop
#### Setting wallpaper dengan hanya satu klik
Bila di Windows setting wallpaper dapat dilakukan dengan hanya klik kanan pada
gambar yang diinginkan, lalu pilih set as wallpaper. Namun, di blankon secara
default fasilitas ini belum dapat dinikmati.
Tapi dengan sedikit usaha, hal yang sama juga dapat kita nikmati di blankon.
Untuk dapat melakukan hal ini sebenarnya yang harus dilakukan sangatlah
sederhana. Pertama, instal paket nautilus-wallpaper melalui APT. Kemudian,
setelah paket tersebut terpasang, maka fasilitas ini pun sudah dapat digunakan.
Sekarang, cobalah klik kanan semabarang gambar, jika semua hal berjalan baik,
maka akan didapatkan sebuah pilihan menu “Set as wallpaper”.
#### Kustomisasi efek desktop
Jika efek desktop yang diberikan kurang menarik, Anda bisa memasang paket
bernama “simple-ccsm” melalui APT yang akan memberikan Anda fitur kustomisasi
efek visual desktop. Setelah paket ini terinstal, Anda bisa klik menu System >
Preferensi > Simple CompizConfig? Manager.
Jika ingin pengaturan yang lebih detail lagi, Anda bisa klik menu System >
Preferensi > CompizConfig? Manager. Selamat mengeksplorasi efek-efek desktop
yang ada di BlankOn Linux.
#### Menampilkan ikon Komputer, Rumah, Server Jaringan, dan Tong Sampah pada
desktop
Secara default, BlankOn Linux akan menampilkan ikon-ikon media penyimpanan yang
bisa dibuka pada desktop. Jika Anda ingin menambahkan ikon Komputer, Rumah,
Server Jaringan dan Tong Sampah ala di Microsoft Windows, Anda bisa mengikuti
langkah-langkah berikut :
   1. Tekan tombol Alt+F2 pada keyboard, lalu ketikkan “gconf-editor” dan tekan
      tombol Enter.
   2. Pada bagian kiri jendela “Editor Konfigurasi”, klik apps > Nautilus >
      Desktop.
   3. Kemudian pada bagian kanan, beri tanda centang pada
      “computer_icon_visible”, “home_icon_visible”, “network_icon_visible”, dan
      “trash_icon_visible”.
4.Tidak lama kemudian, keempat ikon yang Anda inginkan akan muncul di desktop.
Last modified on 07/23/2009 02:55:03 PM
#### Attachments (4)
    * blankon-booting-verbose.png​ (16.3 KB) - added by wirama 8 years ago.
    * gdmsetup.png​ (84.7 KB) - added by wirama 8 years ago.
    * gedit-lontara-text.png​ (24.9 KB) - added by wirama 8 years ago.
    * grub-menu.png​ (4.8 KB) - added by wirama 8 years ago.

