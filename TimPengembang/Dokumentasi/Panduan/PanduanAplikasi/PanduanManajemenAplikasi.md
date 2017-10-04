# Panduan Manajemen Aplikasi
## Pasang, Hapus dan Perawatan Perangkat Lunak

BlankOn Linux sudah menyertakan berbagai perangkat lunak untuk keperluan dasar
seperti aplikasi perkantoran, multimedia, internet, grafis, dll. Namun, jika
Anda merasa kurang dengan perangkat lunak yang sudah terpasang, Anda bisa
melakukan pemasangan perangkat lunak yang Anda inginkan sesuai dengan
keperluan.

     INGAT! Pemasangan dan penghapusan perangkat lunak membutuhkan hak
     administratif karena dapat mengubah sistem. Untuk itu, yang bisa
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
Lumbung paket bisa berada dari beberapa sumber, yaitu:
  * Server Web
  * Jaringan Lokal, misalnya dari server NFS,
  * Folder lokal.

Komunitas BlankOn memiliki lumbung paket resmi yang berada di situs ​http://
arsip.blankonlinux.or.id/blankon. Lumbung paket BlankOn sudah berisikan
berbagai koleksi perangkat lunak yang lengkap dan siap untuk digunakan.
Selain lumbung paket resmi, juga terdapat lumbung paket-lumbung paket lainnya
yang isinya sama, namun hanya berbeda letak servernya. Kebanyakan dari lumbung
paket yang ada disediakan oleh penyedia jasa cermin (mirror) dan beberapa
perguruan tinggi di Indonesia. Berikut adalah beberapa alamat lumbung paket
yang ada di Indonesia:
  * ​http://kambing.ui.ac.id/blankon/ (Universitas Indonesia)
  * ​http://repo.ugm.ac.id/blankon/ (Universitas Gajah Mada)

### Pengaturan Lumbung Paket
Untuk melakukan pengaturan lumbung paket APT, klik Menu utama BlankOn > Lainnya
> Software dan Update. Setelah aplikasi terbuka anda bisa mengubah sesui
kebutuhan.

[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/00Software-
Updates.png] [/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/01GantiRepo.png]

## Memasang dan Menghapus Perangkat Lunak
Terdapat dua cara untuk melakukan pemasangan dan penghapusan perangkat lunak.
Yaitu melalui fitur Warung Aplikasi dan melalui antarmuka teks(konsole/
terminal) dengan perintah apt-get.

### Warung Aplikasi
Jika Anda ingin memasang atau menghapus perangkat lunak secara detail, Anda
bisa menggunakan Warung Aplikasi yang bisa Anda buka melalui Menu utama BlankOn
> Lainnya > WarSi?.

[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/02Warsi.png]

Ketikkan nama aplikasi pada kotak pencarian cepat. Aplikasi ini menampilkan
daftar paket perangkat lunak secara detail. Selain Anda bisa menambah dan
menghapus aplikasi, Anda juga bisa melakukan hal yang sama untuk pustaka sistem
yang tersedia.

Pilih Aplikasi yang ingin dipasang dengan mengcentang pilihan "Install
Package", kemudian lakukan "Apply Changes" atau "Clear" untuk membatalkan.
[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/03Memasang-
Aplikasi.png]
Jika ingin menghapus tinggal pilih "Remove Package".
[/raw-attachment/wiki/Dokumentasi/Panduan/ManajemenAplikasi/04Menghapus-
Aplikasi.png]

### Melalui Perintah apt-get
Menggunakan perintah apt-get sangat sederhana sekali. Anda cukup ketikkan nama
paket perangkat lunak yang ingin dipasang/dihapus, maka APT akan melakukan hal
yang Anda inginkan.

Untuk menggunakan fitur ini, bukalah antarmuka teks misalnya melalui Terminal
dengan menu Aplikas > Aksesoris > Terminal.

Pada terminal ketikkan perintah berikut, lalu tekan tombol Enter untuk memasang
paket perangkat lunak (Ubah “namapaket” sesuai dengan nama paket perangkatlunak yang akan Anda pasang).
`blankon@blankon:~$ sudo apt-get install namapaket`

Sedangkan untuk menghapus suatu perangkat lunak, ketik perintah berikut dan
tekan tombol Enter (Catatan, “namapaket” sesuai dengan perangkat lunak yang
ingin Anda hapus”).
`blankon@blankon:~$ sudo apt-get remove namapaket`

Jika APT meminta pemasangan/penghapusan perangkat lunak yang dibutuhkan oleh
perangkat lunak yang akan Anda pasang/hapus, Anda harus menyetujuinya dengan
menekan tombol Y, lalu tekan Enter.
     TIP: Untuk memasang/menghapus lebih dari satu paket perangkat lunak,
     Anda bisa sebutkan lebih dari satu nama paket pada perintah APT yang
     masing-masing nama paket dipisahkan dengan spasi. Contohnya, jika
     ingin memasang perangkat lunak aplikasi Kino dan Audacity sekaligus,
     Anda bisa ketik perintah berikut.
`blankon@blankon:~$ sudo apt-get install kino audacity`	

### Pemasangan melalui Berkas DEB
Selain melalui lumbung paket, Anda juga bisa memasang suatu perangkat lunak
yang didistribusikan dalam format berkas DEB. Untuk melakukan instalasi dari
berkas paket DEB, Anda bisa klik ganda pada berkas DEB tersebut melalui
peramban berkas, maka akan muncul jendela yang akan menuntun Anda dalam
melakukan pemasangan.

Pada jendela tersebut, Anda bisa klik tombol [>Instal paket<]. Maka paket
tersebut akan diinstal ke komputer bersamaan dengan paket ketergantungannya
menggunakan GDebi Paket Installer.

## Merawat Sistem
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
Selain cara yang dibahas di atas, Anda bisa melakukan pemutakhiran sistem
melalui terminal. Untuk melakukan hal ini, buka terminal melalui menu BlankOn >
Utilities > Terminal. Lakukan pemeriksaan ketersediaan pemutakhiran dengan
mengetik perintah seperti berikut, lalu tekan Enter:
`blankon@blankon:~$ sudo apt-get update`

Kemudian, ketik perintah seperti berikut untuk melakukan pemutakhiran paket
perangkat lunak, lalu tekan tombol Enter:
`blankon@blankon:~$ sudo apt-get upgrade`

Jika Anda ingin memuktakhirkan paket termasuk paket ketergantungan yang ada
di sistem sila menjalakan perintah berikut:
`blankon@blankon:~$ sudo apt-get dist-upgrade`

     INGAT! Pastikan Anda terhubung dengan lumbung paket update agar
     proses pemutakhiran bisa berjalan dengan lancar.

Last modified on 02/12/2014 04:37:41 PM

#### Attachments (5)
  * 00Software-Updates.png​ (44.5 KB) - added by tuanpembual 3 years ago.
  * 01GantiRepo.png​ (33.1 KB) - added by tuanpembual 3 years ago.
  * 02Warsi.png​ (62.7 KB) - added by tuanpembual 3 years ago.
  * 03Memasang-Aplikasi.png​ (146.4 KB) - added by tuanpembual 3 years ago.
  * 04Menghapus-Aplikasi.png​ (144.7 KB) - added by tuanpembual 3 years ago.
    
---
 
