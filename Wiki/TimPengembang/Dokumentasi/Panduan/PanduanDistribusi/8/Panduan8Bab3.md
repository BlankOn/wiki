# Bab 3 Pasang, Hapus dan Perawatan Perangkat Lunak
**Panduan BlankOn 8**


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
  * ​http://pandawa.ipb.ac.id/blankon (Institut Pertanian Bogor)
### Pengaturan Lumbung Paket
Untuk melakukan pengaturan lumbung paket APT, Anda bisa klik Menu utama BlankOn
> Sistem > Administrator > Manajer Paket Synaptic. Setelah Manajer Paket
Synaptic terbuka, anda bisa klik Pengaturan > Lumbung Paket. Berikut adalah
cara-cara pengaturan lumbung paket dari setiap jenis sumber.
### Lumbung Paket Resmi BlankOn (Internet)
Jika Anda ingin melakukan pengaturan sumber perangkat lunak dari mirror resmi
BlankOn linux, Anda bisa melihat pada tab [>Perangkat Lunak BlankOn<]. Pilih
semua cabang perangkat lunak yang tersedia pada bagian [>Paket dari Internet<].
Kemudian tentukan cermin yang akan Anda gunakan pada bagian [>Unduh dari<].
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab3/softwaresources.png]
### Lumbung Paket Jaringan Lokal (Intranet)
Beberapa institusi pendidikan dan kantor menyediakan lumbung paket secara lokal
yang bisa Anda manfaatkan untuk menekan biaya penggunaan bandwidth internet.
Untuk memanfaatkannya, silahkan tanya kepada administrator jaringan Anda
tentang baris APT dari lumbung paket termasuk lumbung paket untuk pemutakhiran
(jika ada). Lalu tambahkan baris APT baru sesuai dengan cara yang dijelaskan
diatas.
Setelah semua pengaturan lumbung paket selesai dilakukan, klik tombol Tutup.
Kemudian APT akan meminta Anda untuk mengunduh informasi paket dari setiap
lumbung paket, klik pada tombol [>Muat Ulang<]. Sekarang, Anda siap melakukan
penambahan perangkat lunak untuk BlankOn Linux.
## Memasang dan Menghapus Perangkat Lunak
Terdapat dua cara untuk melakukan pemasangan dan penghapusan perangkat lunak.
Yaitu melalui fitur manajer paket Synaptic dan melalui antarmuka teks dengan
perintah apt-get.
### Manajer Paket Synaptic
Jika Anda ingin memasang atau menghapus perangkat lunak secara detail, Anda
bisa menggunakan aplikasi Synaptic yang bisa Anda buka melalui Menu utama
BlankOn > Sistem > Administrasi > Manajer paket Synaptic.
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab3/synaptic.png]
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
Untuk menerapkannya, Anda bisa klik tombol [>Terapkan<] pada toolbar dan klik
tombol [>Terapkan<] pada jendela konfirmasi. Maka APT akan memasang/menghapus
perangkat lunak yang Anda minta.
### Melalui Perintah apt-get
Menggunakan perintah apt-get sangat sederhana sekali. Anda cukup ketikkan nama
paket perangkat lunak yang ingin dipasang/dihapus, maka APT akan melakukan hal
yang Anda inginkan.
Untuk menggunakan fitur ini, bukalah antarmuka teks misalnya melalui Terminal
dengan menu Aplikas > Aksesoris > Terminal.
Pada terminal ketikkan perintah berikut, lalu tekan tombol Enter untuk memasang
paket perangkat lunak (Ubah “namapaket” sesuai dengan nama paket perangkat
lunak yang hendak Anda pasang).
blankon@blankon:~$ sudo apt-get install namapaket ↵
Sedangkan untuk menghapus suatu perangkat lunak, ketik perintah berikut dan
tekan tombol Enter (Ingat! Ubah “namapaket” sesuai dengan perangkat lunak yang
ingin Anda hapus”).
blankon@blankon:~$ sudo apt-get remove namapaket ↵
Jika APT meminta pemasangan/penghapusan perangkat lunak yang dibutuhkan oleh
perangkat lunak yang Anda akan pasang/hapus, Anda harus menyetujuinya dengan
menekan tombol Y, lalu tekan tombol Enter.
     TIP: Untuk memasang/menghapus lebih dari satu paket perangkat lunak,
     Anda bisa sebutkan lebih dari satu nama paket pada perintah APT yang
     masing-masing nama paket dipisahkan dengan spasi. Contohnya, jika
     ingin memasang perangkat lunak aplikasi Kino dan Audacity sekaligus,
     Anda bisa ketik perintah berikut.
blankon@blankon:~$ sudo apt-get install kino audacity ↵
### Pemasangan melalui Berkas DEB
Selain melalui lumbung paket, Anda juga bisa memasang suatu perangkat lunak
yang didistribusikan dalam format berkas DEB. Untuk melakukan instalasi dari
berkas paket DEB, Anda bisa klik ganda pada berkas DEB tersebut melalui
peramban berkas, maka akan muncul jendela yang akan menuntun Anda dalam
melakukan pemasangan.
Pada jendela tersebut, Anda bisa klik tombol [>Instal paket<]. Maka paket
tersebut akan diinstal ke komputer bersamaan dengan paket ketergantungannya.
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
Untuk melakukan pemutakhiran sistem, pastikan Anda sudah mengaktifkan informasi
pemutakhiran dari lumbung paket pada APT seperti yang sudah dijelaskan
sebelumnya. Kemudian, klik Menu utama BlankOn > Sistem > Administrasi > Manajer
Pemutakhiran untuk melakukan pemutakhiran sistem.
[/raw-attachment/wiki/Dokumentasi/Panduan/8/Bab3/updatemanager.png]
Klik tombol [>Periksa<] untuk memeriksa ketersediaan pemutakhiran. Jika
terdapat paket-paket perangkat lunak dengan versi baru, Anda bisa memberi
centang paket perangkat lunak yang hendak Anda perbarui. Untuk mengunduh dan
memasang update, klik tombol [>Instal Update<]. Maka APT akan melakukan
pemutakhiran pada paket perangkat lunak yang Anda pilih.
Selain cara yang dibahas di atas, Anda bisa melakukan pemutakhiran sistem
melalui terminal. Untuk melakukan hal ini, buka terminal melalui menu BlankOn >
Aksesoris > Terminal. Lakukan pemeriksaan ketersediaan pemutakhiran dengan
mengetik perintah seperti berikut, lalu tekan Enter:
blankon@blankon:~$ sudo apt-get update ↵
Kemudian, ketik perintah seperti berikut untuk melakukan pemutakhiran paket
perangkat lunak, lalu tekan tombol Enter:
blankon@blankon:~$ sudo apt-get upgrade ↵
     INGAT! Pastikan Anda terhubung dengan lumbung paket update agar
     proses pemutakhiran bisa berjalan dengan lancar.
Last modified on 10/03/2011 08:28:52 PM
#### Attachments (3)
  * softwaresources.png​ (51.0 KB) - added by guspur 5 years ago.
  * synaptic.png​ (88.9 KB) - added by guspur 5 years ago.
  * updatemanager.png​ (105.7 KB) - added by guspur 5 years ago.
#### 
    
 
 
 
 
 
---
 
