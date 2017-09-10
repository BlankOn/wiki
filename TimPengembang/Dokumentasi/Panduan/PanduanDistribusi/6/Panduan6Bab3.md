# Bab 3 Pasang, Hapus dan Perawatan Perangkat Lunak
**Panduan BlankOn 6**

BlankOn Linux sudah menyertakan berbagai perangkat lunak untuk keperluan dasar
seperti aplikasi perkantoran, multimedia, internet, grafis, dll. Namun, jika
Anda merasa kurang dengan perangkat lunak yang sudah terpasang, Anda bisa
melakukan pemasangan perangkat lunak yang Anda inginkan sesuai dengan
keperluan.
     INGAT! Pemasangan dan penghapusan perangkat lunak membutuhkan hak
     administratif karena dapat merubah sistem. Untuk itu, yang hanya bisa
     melakukan hal tersebut hanyalah pengguna yang memiliki kewenangan
     administratif.
### Pengaturan Perangkat Lunak pada BlankOn Linux
Cara pemasangan dan penghapusan perangkat lunak pada BlankOn Linux sangat
berbeda dengan cara yang ada di sistem operasi Microsoft Windows. Jika
pemasangan perangkat lunak di Windows menggunakan sebuah installer atau program
pemasang dari masing-masing perangkat lunak, maka pada BlankOn Linux pemasangan
perangkat lunak dilakukan menggunakan sistem manajemen paket perangkat lunak
seperti pada Distro Linux lainnya. Manajemen paket yang ada di BlankOn Linux
bernama APT.
Di BlankOn, hampir semua perangkat lunak berasal dari suatu tempat yang bernama
lumbung paket (package repository). APT adalah program yang berfungsi untuk
mengunduh (download) paket yang Anda pilih dari lumbung dan memasangnya di
komputer.
Dengan kata lain, Anda tidak perlu mengunduh sendiri paket perangkat lunak yang
ingin Anda pasang. Anda hanya perlu menentukan sumber paket atau lumbung paket
perangkat lunak tersebut melalui APT, dan meminta perangkat lunak yang ingin
dipasang atau dihapus. Maka APT akan melakukan apa yang Anda inginkan termasuk
mengunduh paket, memasang, pemasangan konfigurasi, melakukan konfigurasi
sistem, pemutakhiran (update) serta penghapusan.
Lumbung paket bisa berada dari empat sumber, yaitu:
  * Server Web
  * Jaringan Lokal, misalnya dari server NFS,
  * CD/DVD-ROM,
  * Folder lokal.
Komunitas BlankOn memiliki lumbung paket resmi yang berada di situs ​http://
arsip.blankonlinux.or.id/blankon. Lumbung paket BlankOn sudah berisikan
berbagai koleksi perangkat lunak yang lengkap dan siap untuk digunakan.
Selain lumbung paket resmi, juga terdapat lumbung paket-lumbung paket lainnya
yang isinya sama, namun hanya berbeda letak servernya. Kebanyakan dari lumbung
paket yang ada disediakan oleh penyedia jasa cermin (mirror) dan beberapa
perguruan tinggi di Indonesia. Berikut adalah beberapa alamat lumbung paket
yang ada di Indonesia:
  * ​http://dl2.foss-id.web.id/blankon (FOSS-ID, Telkom Indonesia)
  * ​http://kambing.ui.ac.id/blankon/ (Universitas Indonesia)
  * ​http://mirror.unej.ac.id/blankon (Universitas Negeri Jember)
  * ​http://repo.undip.ac.id/blankon (Universitas Diponegoro)
### Pengaturan Lumbung paket
Untuk melakukan pengaturan lumbung paket APT, Anda bisa klik menu Sistem >
Administrasi > Lumbung Paket. Berikut adalah cara – cara pengaturan lumbung
paket dari setiap jenis sumber.
#### Lumbung paket resmi BlankOn (Internet)
Jika Anda ingin melakukan pengaturan sumber perangkat lunak dari mirror resmi
BlankOn Linux, Anda bisa lihat pada tab [>Perangkat Lunak BlankOn<]. Pilih
semua cabang perangkat lunak yang tersedia pada bagian [>Paket dari Internet<].
Kemudian, tentukan cermin yang akan Anda gunakan pada bagian [>Unduh dari:<].
[repositori_resmin_blankon]
Sebelum melakukan pemutakhiran atau update sistem, terlebih dahulu Anda harus
mengaktifkan metoda pemutakhiran lumbung paket resmi BlankOn Linux yang Anda
pilih. Untuk melakukan hal ini, klik tab [>Pemutakhiran Sistem<], dan pilih
lumbung metoda yang ingin Anda aktifkan dan memberi centang pada semua jenis
pemutakhiran pada bagian [>Informasi paket baru untuk BlankOn<].
#### Lumbung paket jaringan Lokal (Intranet)
Beberapa institusi pendidikan dan kantor menyediakan lumbung paket secara lokal
yang bisa Anda manfaatkan untuk menekan biaya penggunaan bandwidth internet.
Untuk memanfaatkannya, silahkan tanyakan kepada administrator jaringan Anda
tentang baris APT dari lumbung paket termasuk lumbung paket untuk pemutakhiran
(jika ada). Lalu tambahkan baris APT baru sesuai dengan cara yang dijelaskan di
atas.
Setelah semua pengaturan lumbung paket selesai dilakukan, klik tombol Tutup.
Kemudian APT akan meminta Anda untuk mengunduh informasi paket dari setiap
lumbung paket, klik pada tombol [>Muat ulang<]. Sekarang, Anda siap melakukan
penambahan perangkat lunak untuk BlankOn Linux.
### Memasang dan menghapus perangkat lunak
Terdapat dua cara untuk melakukan pemasangan dan penghapusan perangkat lunak.
Yaitu melalui fitur menggunakan manajer paket Synaptic dan melalui antarmuka
teks dengan perintah APT-GET.
#### Manajer Paket Synaptic
Jika Anda ingin memasang atau menghapus perangkat lunak secara detail, Anda
bisa menggunakan aplikasi Synaptic yang bisa Anda buka melalui menu Sistem >
Administrasi > Manajer paket Synaptic.
[No_image_"Gambar-Layar-Manajer-Paket-Synaptic.png"_attached_to_Dokumentasi/
Panduan/6/Bab3]
Ketikkan nama aplikasi pada kotak pencarian cepat. Aplikasi ini menampilkan
daftar paket perangkat lunak secara detail. Selain Anda bisa menambah dan
menghapus aplikasi, Anda juga bisa melakukan hal yang sama untuk pustaka sistem
yang tersedia. Untuk menandai paket perangkat lunak yang ingin dipasang, klik
kanan pada aplikasi yang hendak dipasang lalu pilih menu [>Tandai untuk
Pemasangan<]. Sedangkan jika ingin menghapus paket perangkat lunak, klik kanan
pada aplikasi lalu pilih menu [>Tandai untuk dibuang<]. Kadangkala, suatu paket
perangkat lunak akan meminta satu atau beberapa paket perangkat lunak untuk
dipasang (ketergantungan). Jika muncul jendela yang menanyakan hal tersebut,
Anda harus setuju untuk menandai paket perangkat lunak yang dibutuhkan agar
Anda bisa memasang paket perangkat lunak yang Anda inginkan.
Untuk menerapkannya, Anda bisa klik ikon [>Terapkan<] pada toolbar dan klik
tombol [>Terapkan<] pada jendela konfirmasi. Maka APT akan memasang/menghapus
perangkat lunak yang Anda minta.
### Melalui perintah APT-GET
Menggunakan perintah apt-get sangat sederhana sekali. Anda cukup ketikkan nama
paket perangkat lunak yang ingin dipasang/dihapus, maka APT akan melakukan hal
yang Anda inginkan.
Untuk menggunakan fitur ini, bukalah antarmuka teks misalnya melalui Terminal
dengan menu Aplikas > Aksesoris > Terminal.
Pada terminal, ketik perintah berikut, lalu tekan tombol Enter untuk memasang
paket perangkat lunak (Ubah “namapaket” sesuai dengan nama paket perangkat
lunak yang hendak Anda pasang):
blankon@blankon:~$ sudo apt-get install namapaket↵
Sedangkan untuk menghapus suatu perangkat lunak, ketik perintah berikut dan
tekan tombol Enter (Ingat! Ubah “namapaket” sesuai dengan perangkat lunak yang
ingin Anda hapus”):
blankon@blankon:~$ sudo apt-get remove namapaket↵
Jika APT meminta pemasangan/penghapusan perangkat lunak yang dibutuhkan oleh
perangkat lunak yang Anda akan pasang/hapus, Anda harus menyetujuinya dengan
menekan tombol Y, lalu tekan tombol Enter.
     TIP: Untuk memasang/menghapus lebih dari satu paket perangkat lunak,
     Anda bisa sebutkan lebih dari satu nama paket pada perintah APT yang
     dipisah dengan spasi. Contohnya, jika ingin memasang perangkat lunak
     aplikasi Abiword dan Gnumeric sekaligus, Anda bisa ketik perintah
     berikut
blankon@blankon:~$ sudo apt-get install abiword gnumeric↵
#### Pemasangan melalui berkas DEB
Selain melalui lumbung paket, Anda juga bisa memasang suatu perangkat lunak
yang didistribusikan dalam format berkas DEB seperti aplikasi RealPlayer?,
VirtualBox, Skype, dll. Untuk melakukan instalasi dari paket DEB, Anda bisa
klik ganda pada berkas DEB tersebut melalui peramban berkas, maka akan muncul
jendela yang akan menuntun Anda dalam melakukan pemasangan.
[gdebi]
Pada jendela tersebut, Anda bisa klik tombol [>Instal paket<]. Maka paket
tersebut akan diinstal ke komputer bersamaan dengan paket ketergantungannya.
### Merawat Sistem
Secara berkala Tim Pengembang BlankOn dan komunitas menerbitkan paket-paket
perangkat lunak dengan versi yang lebih baru ke dalam lumbung. Jika komputer
Anda terhubung ke Internet, maka keberadaan paket-paket baru tersebut akan
diinformasikan kepada Anda. Jika Anda mau menerima paket-paket baru tersebut,
maka sistem akan dimutakhirkan oleh APT dengan mengunduh dan memasang paket-
paket itu.
Dengan melakukan pemutakhiran berkala menjadikan sistem Anda terawat karena
pada versi baru, biasanya telah dilakukan pemeriksaan dan perbaikan cacat yang
telah diketahui sebelumnya. Kadangkala versi baru diterbitkan untuk menutup
celah-celah keamanan yang ditemui pada suatu paket.
Untuk melakukan pemutakhiran sistem, pastikan Anda sudah mengaktifkan informasi
pemutakhiran dari lumbung paket pada APT seperti yang sudah dijelaskan
sebelumnya. Kemudian, klik
menu Sistem > Administrasi > Manajer Pemutakhiran untuk melakukan pemutakhiran
sistem.
[manajer_pemutakhiran]
Klik tombol [>Periksa<] untuk memeriksa ketersediaan pemutakhiran. Jika
terdapat paket-paket perangkat lunak dengan versi baru, Anda bisa memberi
centang paket perangkat lunak yang hendak Anda perbarui. Untuk mengunduh dan
memasang update, klik tombol [>Instal Update<]. Maka APT akan melakukan
pemutakhiran pada paket perangkat lunak yang Anda pilih.
Selain cara yang dibahas di atas, Anda bisa melakukan pemutakhiran sistem
melalui terminal. Untuk melakukan hal ini, buka terminal melalui menu BlankOn >
Aksesoris > Terminal. Lakukan pemeriksaan ketersediaan pemutakhiran dengan
mengetik perintah seperti berikut, lalu tekan Enter:
blankon@blankon:~$ sudo apt-get update↵
Kemudian, ketik perintah eperti berikut untuk melakukan pemutakhiran paket
perangkat lunak, lalu tekan tombol enter:
blankon@blankon:~$ sudo apt-get upgrade↵
     INGAT! Pastikan Anda terhubung dengan lumbung paket update agar
     proses pemutakhiran bisa berjalan dengan lancar.
Last modified on 06/26/2010 04:48:07 PM
#### Attachments (6)
  * apt-official-repositori.png​ (42.5 KB) - added by hanafi 7 years ago.
      repositori resmin blankon
  * apt-3rdparty-repositori.png​ (34.3 KB) - added by hanafi 7 years ago.
      piranti lunak pihak ketiga
  * Gambar-Layar-Manajer-Paket-Synaptic_.png​ (78.2 KB) - added by hanafi 7
      years ago. manager synaptic
  * Gambar-Layar-Manajer-Pemutakhiran.png​ (58.3 KB) - added by hanafi 7
      years ago. manajer pemutakhiran
  * gdebi.png​ (31.6 KB) - added by hanafi 7 years ago. gdebi
  * aimp2.png​ (271.2 KB) - added by hanafi 7 years ago. menjalankan aplikasi
      windows dengan wine
#### 
    
 
 
 
 
 
---
 
