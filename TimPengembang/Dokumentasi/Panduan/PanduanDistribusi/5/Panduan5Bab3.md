# BAB III : Pasang dan Hapus piranti lunak
**Panduan BlankOn 5**

Bawaan dari BlankOn Linux sudah menyertakan berbagai piranti lunak untuk
keperluan dasar seperti aplikasi perkantoran, multimedia, internet, grafis,
dll. Namun, jika Anda merasa kurang dengan piranti lunak, Anda bisa melakukan
pemasangan piranti lunak yang Anda inginkan sesuai dengan keperluan.
INGAT! Pemasangan dan penghapusan piranti lunak membutuhkan hak administratif
karena dapat merubah sistem. Untuk itu, yang hanya bisa melakukan hal tersebut
hanyalah pengguna yang memiliki kewenangan administratif.
### Pengaturan piranti lunak pada BlankOn Linux
Cara pemasangan dan penghapusan piranti lunak pada BlankOn Linux sangat berbeda
dengan cara yang ada di sistem operasi Microsoft Windows. Jika pemasangan
piranti lunak di Windows menggunakan sebuah installer atau program pemasang
dari masing-masing piranti lunak, maka pada BlankOn Linux pemasangan piranti
lunak dilakukan menggunakan sistem manajemen paket piranti lunak seperti pada
Distro Linux lainnya. Manajemen paket yang ada di BlankOn Linux bernama APT
yang juga digunakan pada Distro Linux berbasis Debian.
Dengan APT, Anda tidak perlu mengunduh sendiri paket piranti lunak yang ingin
Anda pasang. Anda hanya perlu menentukan sumber paket atau repository piranti
lunak tersebut melalui APT, dan meminta piranti lunak yang ingin dipasang atau
dihapus. Maka APT akan melakukan apa yang Anda inginkan termasuk mengunduh
paket, memasang, pemasangan konfigurasi, melakukan konfigurasi sistem,
pemutakhiran (update) serta penghapusan. Sumber paket atau repository bisa
berada dari empat sumber, yaitu :
    * Server Web
    * Jaringan Lokal, misalnya dari server NFS,
    * CD/DVD-ROM,
    * Folder lokal.
Komunitas BlankOn Linux memiliki repository resmi yang berada di situs ​http://
arsip.blankonlinux.or.id/blankon. Untuk memasang lebih banyak piranti lunak
lagi, Anda dapat menggunakan repository dari Ubuntu karena BlankOn Linux
merupakan distribusi Linux turunan dari Ubuntu. Repository resmi Ubuntu
Indonesia berada di situs ​http://id.archive.ubuntu.com/ubuntu.
Selain repository resmi, juga terdapat repository-repository lainnya yang
isinya sama, namun hanya berbeda letak servernya. Kebanyakan dari repository
yang ada disediakan oleh penyedia jasa cermin (mirror) dan beberapa perguruan
tinggi di Indonesia. Berikut adalah beberapa alamat repository yang ada di
Indonesia :
Mirror BlankOn :
    * ​http://dl2.foss-id.web.id/blankon (FOSS-ID, Telkom Indonesia)
    * ​http://kambing.ui.ac.id/blankon (Universitas Indonesia)
    * ​http://kebo.vlsm.org/blankon (vLSM.org)
    * ​http://mirror.unej.ac.id/blankon (Universitas Negeri Jember)
    * ​http://repo.undip.ac.id/blankon (Universitas Diponegoro)
Mirror Ubuntu :
    * ​http://dl2.foss-id.web.id/ubuntu (FOSS-ID, Telkom Indonesia)
    * ​http://kambing.ui.ac.id/ubuntu (Universitas Indonesia)
    * ​http://kebo.vlsm.org/ubuntu (vLSM.org)
    * ​http://mirror.unej.ac.id/ubuntu (Universitas Negeri Jember)
    * ​http://repo.undip.ac.id/ubuntu (Universitas Diponegoro)
### Pengaturan Repository
Untuk melakukan pengaturan repository APT, Anda bisa klik menu System >
Administrasi > Sumber Perangkat Lunak pada BlankOn Linux edisi Reguler, atau
menu BlankOn > Peralatan Sistem > Sumber Perangkat Lunak pada BlankOn Linux
edisi Minimalis. Berikut adalah cara – cara pengaturan repository dari setiap
jenis sumber.
#### Repository Resmi BlankOn Linux (Internet)
Jika Anda ingin melakukan pengaturan sumber perangkat lunak dari mirror resmi
BlankOn Linux, Anda bisa lihat pada tab “Perangkat Lunak BlankOn”. Pilih semua
cabang piranti lunak yang tersedia pada bagian “Dapat diunduh dari Internet”.
Kemudian, tentukan cermin yang akan Anda gunakan pada bagian “mengunduh dari”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/apt-official-repository.png]
Sebelum melakukan pemutakhiran atau update sistem, terlebih dahulu Anda harus
mengaktifkan repository update dari repository resmi BlankOn Linux yang Anda
pilih. Untuk melakukan hal ini, klik tab “Pemutakhiran”, dan pilih repository
update yang ingin Anda aktifkan dan memberi centang pada semua jenis
pemutakhiran pada bagian “BlankOn pembaharuan”.
#### Repository pihak ketiga (Internet)
Repository resmi BlankOn Linux hanya menyediakan paket-paket piranti lunak
dalam jumlah yang terbatas. Jika Anda ingin memasang lebih banyak piranti lunak
lagi, Anda bisa menggunakan repository tambahan dari Ubuntu dengan membuka tab
“Perangkat Lunak Piranti Ketiga”.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/apt-3rdparty-repository.png]
Secara bawaan, BlankOn Linux sudah disetel untuk menggunakan repository Ubuntu
dari mirror ​http://dl2.foss-id.web.id. Jika Anda ingin mengubah servernya,
Anda bisa klik pada salah satu cabang repository, lalu klik tombol “Ubah...”.
Kemudian, atur alamat server pada bagian “URI”. Lalu klik tombol “OK”. Terdapat
tiga cabang repository Ubuntu yang bisa Anda aktifkan, yaitu :
   1. Resmi disokong (Main) dan Driver tak bebas (Restricted) berisi paket
      piranti lunak umum yang sudah didukung oleh Ubuntu secara resmi dan juga
      berisi paket piranti lunak pengendali piranti lunak yang tidak bebas.
   2. Dikelola oleh komunitas (Universe) berisi paket piranti lunak yang umum
      namun tidak didukung secara resmi oleh Ubuntu.
   3. Perangkat Lunak Terbatas (Multiverse) berisi paket piranti lunak tertutup
      dan tidak didukung secara resmi oleh Ubuntu.
Jika ingin mengaktifkan pemutakhiran pada piranti lunak yang berasal dari
repository Ubuntu, Anda bisa beri tanda centang pada “Pembaharuan yang
disarankan” dan “Pemutakhiran keamanan yang penting” pada setiap cabang
repository yang tertera pada daftar. Jika Anda ingin menambahkan repository
lainnya, Anda bisa klik pada tombol “Tambah” lalu mengetik baris APT sesuai
dengan repository yang diinginkan. Informasi dari baris APT bisa dilihat pada
situs repository bersangkutan.
INFO: Repository Ubuntu berisikan sekitar 27000+ paket piranti lunak untuk
Linux yang siap untuk dipasang. Jika masih merasa kurang, ada repository
tambahan yang bernama Medibuntu yang berisikan berbagai piranti lunak non open
source untuk Ubuntu. Informasinya, silahkan buka situs ​http://
www.medibuntu.org.
#### Repository jaringan Lokal (Intranet)
Beberapa institusi pendidikan dan kantor menyediakan repository secara lokal
yang bisa Anda manfaatkan untuk menekan biaya penggunaan bandwidth internet.
Untuk memanfaatkannya, silahkan tanyakan kepada administrator jaringan Anda
tentang baris APT dari repository termasuk repository untuk pemutakhiran (jika
ada). Lalu tambahkan baris APT baru sesuai dengan cara yang dijelaskan di atas.
#### Menggunakan Cakram Pengaya atau DVD Repository Ubuntu
Tidak memiliki koneksi internet langsung? Anda bisa menggunakan media CD/DVD
sebagai repository. Komunitas BlankOn Linux menyediakan Cakram Pengaya dalam
bentuk CD/DVD yang bisa Anda unduh melalui situs ​http://www.blankonlinux.or.id
atau membelinya di toko linux terdekat.
Selain itu, jika ingin menggunakan repository Ubuntu tanpa perlu jaringan
Internet, Anda juga bisa mendapatkan DVD Repository Ubuntu yang versinya setara
dengan versi BlankOn Linux yang digunakan (BlankOn 5.0 setara dengan Ubuntu
9.04). Silahkan merujuk ke situs ​http://ubuntu-id.org untuk cara
mendapatkannya. Jika sudah mendapatkannya, masukkan CD/DVD tersebut dan klik
tombol “Tambahkan CD-ROM” pada tab “Perangkat Lunak Pihak Ketiga”. Ulangi
langkah ini untuk setiap CD/DVD repository.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/apt-add-cdrom.png]
Setelah semua pengaturan repository selesai dilakukan, klik tombol Tutup.
Kemudian APT akan meminta Anda untuk mengunduh informasi paket dari setiap
repository, klik pada tombol Muat Ulang. Sekarang, Anda siap melakukan
penambahan piranti lunak untuk BlankOn Linux.
### Memasang dan menghapus piranti lunak
Terdapat tiga cara untuk melakukan pemasangan dan penghapusan piranti lunak.
Yaitu melalui fitur Tambah/Hapus?, menggunakan manajer paket Synaptic dan
melalui antarmuka teks dengan perintah APT-GET.
#### Melalui fitur Tambah/Hapus?
Untuk pemasangan piranti lunak melalui fitur Tambah/Hapus?, klik menu BlankOn
lalu pilih menu Tambah/Hapus? pada BlankOn reguler, atau klik menu BlankOn >
Peralatan Sistem > Tambah/Hapus? pada BlankOn minimalis.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/gnome-app-install.png]
Agar semua piranti lunak ditampilkan, pilih item “Semua aplikasi tersedia” pada
bagian tunjukkan. Sekarang, Anda bisa memberi centang pada paket piranti lunak
yang ingin dipasang dan menghilangkan centang pada paket piranti lunak yang
ingin dihapus. Untuk memudahkan pencarian, Anda bisa klik jenis paket piranti
lunak yang ingin Anda cari pada daftar yang ada di bagian kiri jendela. Selain
itu, Anda juga bisa mencari paket piranti lunak secara spesifik melalui fitur
pencarian yang ada di pojok kanan atas jendela.
Untuk menerapkan perubahan, Anda bisa klik tombol “Terapkan Perubahan”, dan
klik tombol “Terapkan” kembali pada jendela dialog konfirmasi. Maka fitur
Tambah/Hapus? akan memasang piranti lunak yang ingin Anda pasang dan menghapus
piranti lunak yang ingin Anda hapus. Setelah selesai melakukan penerapan, Anda
bisa klik tombol “Tambah/Hapus? piranti lunak” jika Anda ingin memasang atau
menghapus piranti lunak. Atau klik tombol “Tutup” jika Anda ingin keluar dari
aplikasi ini.
#### Manajer Paket Synaptic
Jika Anda ingin memasang atau menghapus piranti lunak secara detail, Anda bisa
menggunakan aplikasi Synaptic yang bisa Anda buka melalui menu System >
Administrasi > Manajer paket Synaptic pada BlankOn Linux edisi Reguler, atau
melalui menu BlankOn > Peralatan Sistem > Manajer paket Synaptic pada BlankOn
Linux edisi Minimalis.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/synaptic-package-manager.png]
Cara penggunaan aplikasi ini sangat mirip dengan cara menggunakan fitur Tambah/
Hapus?. Namun, aplikasi ini menampilkan daftar paket piranti lunak secara
detail. Selain Anda bisa menambah dan menghapus aplikasi, Anda juga bisa
melakukan hal yang sama untuk pustaka sistem yang tersedia. Untuk menandai
paket piranti lunak yang ingin dipasang, klik pada tanda kotak yang ada di
sebelah kiri nama paket, lalu pilih menu “Tandai untuk instalasi”. Sedangkan
jika ingin menghapus paket piranti lunak, klik pada kotak yang sama lalu pilih
menu “Tandai untuk dibuang”. Kadangkala, suatu paket piranti lunak akan meminta
satu atau beberapa paket piranti lunak untuk dipasang (ketergantungan). Jika
muncul jendela yang menanyakan hal tersebut, Anda harus setuju untuk menandai
paket piranti lunak yang dibutuhkan agar Anda bisa memasang paket piranti lunak
yang Anda inginkan.
Untuk menerapkannya, Anda bisa klik ikon “Terapkan” pada toolbar dan klik
tombol “Terapkan” pada jendela konfirmasi. Maka APT akan memasang/menghapus
piranti lunak yang Anda minta.
### Melalui perintah APT-GET
Menggunakan perintah apt-get sangat sederhana sekali. Anda cukup ketikkan nama
paket piranti lunak yang ingin dipasang/dihapus, maka APT akan melakukan hal
yang Anda inginkan.
Untuk menggunakan fitur ini, bukalah antarmuka teks misalnya melalui Terminal
dengan menu BlankOn > Aksesoris > Terminal. Pada terminal, ketik perintah
berikut, lalu tekan tombol Enter untuk memasang paket piranti lunak (Ubah
“namapaket” sesuai dengan nama paket piranti lunak yang hendak Anda pasang) :
blankon@blankon:~$ sudo apt-get install namapaket↵
Sedangkan untuk menghapus suatu piranti lunak, ketik perintah berikut dan tekan
tombol Enter (Ingat! Ubah “namapaket” sesuai dengan piranti lunak yang ingin
Anda hapus”) :
blankon@blankon:~$ sudo apt-get remove namapaket↵
Jika APT meminta pemasangan/penghapusan piranti lunak ketergantungan, Anda
harus menyetujuinya dengan menekan tombol Y, lalu tekan tombol Enter.
TIP: Untuk memasang/menghapus lebih dari satu paket piranti lunak, Anda bisa
sebutkan lebih dari satu nama paket pada perintah APT yang dipisah dengan
spasi. Contohnya, jika ingin memasang piranti lunak aplikasi Abiword dan
Gnumeric sekaligus, Anda bisa ketik perintah berikut
blankon@blankon:~$ sudo apt-get install abiword gnumeric↵
#### Pemasangan melalui berkas DEB
Selain melalui repository, Anda juga bisa memasang suatu piranti lunak yang
didistribusikan dalam format berkas DEB seperti aplikasi RealPlayer?,
VirtualBox, Skype, dll. Untuk melakukan instalasi dari paket DEB, Anda bisa
klik ganda pada berkas DEB tersebut melalui peramban berkas, maka akan muncul
jendela yang akan menuntun Anda dalam melakukan pemasangan.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/gdebi.png]
Pada jendela tersebut, Anda bisa klik tombol “Instal paket”. Maka paket
tersebut akan di-instal ke komputer bersamaan dengan paket ketergantungannya.
### Instalasi dukungan Bahasa
Bahasa yang terinstall secara otomatis dalam BlankOn Linux adalah Bahasa
Indonesia. Jika Anda ingin memasang bahasa lainnya, Anda bisa membuka fitur
dukungan bahasa melalui menu System > Administrasi > Dukungan Bahasa pada
BlankOn Linux edisi Reguler, atau melalui menu BlankOn > Peralatan Sistem >
Dukungan Bahasa pada BlankOn Linux edisi Minimalis.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/language-support-config.png]
Pada jendela pengaturan Bahasa, klik pada tombol “Install/Remove? Languages...”
untuk memasang atau menghapus suatu paket bahasa.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/language-support-
installer.png]
Kemudian, pada daftar bahasa yang diberikan, Anda bisa memberi centang pada
bahasa yang ingin Anda instal. Anda juga bisa memilih fitur pendukung bahasa
seperti pengecek ejaan, metoda input, fonta, dll. yang ingin Anda pasang. Untuk
menerapkan pengaturan, klik pada tombol Apply Changes. Kembali pada jendela
pengaturan bahasa, Anda bisa memilih bahasa default yang ingin digunakan, Anda
bisa memilihnya pada opsi “For everyone” jika ingin menerapkan default bahasa
untuk semua pengguna, atau melalui opsi “For my menus and windows” untuk
menerapkan bahasa default hanya pada desktop Anda.
TIP: Jika ingin mengaktifkan fitur metoda input (IME) pada BlankOn, Anda bisa
memberi tanda centang pada “use input method engine (IME) to enter complex
character”. Secara bawaan, BlankOn sudah menyertakan metoda input untuk aksara
Lontara (Bugis) dan Batak Toba.
### Melakukan pemutakhiran sistem
Untuk melakukan pemutakhiran sistem, pastikan Anda sudah menambahkan repository
update pada APT seperti yang sudah dijelaskan sebelumnya. Kemudian, klik menu
System > Administrasi > Manajer Pemutakhiran pada BlankOn Linux edisi Reguler,
atau menu BlankOn > Peralatan Sistem > Manajer Pemutakhiran pada BlankOn Linux
edisi Minimalis untuk melakukan pemutakhiran sistem.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/update-manager.png]
Klik tombol “Periksa” untuk memerika update yang sudah ada. Jika terdapat
update paket piranti lunak, Anda bisa memberi centang paket update piranti
lunak yang hendak Anda pasang. Untuk mengunduh dan memasang update, klik tombol
“Instal Update”. Maka APT akan melakukan pemutakhiran pada paket piranti lunak
yang Anda pilih.
Selain cara yang dibahas di atas, Anda bisa melakukan pemutakhiran sistem
melalui terminal. Untuk melakukan hal ini, buka terminal melalui menu BlankOn >
Aksesoris > Terminal. Lakukan pemeriksaan update dengan mengetik perintah “sudo
apt-get update” seperti berikut, lalu tekan Enter :
blankon@blankon:~$ sudo apt-get update↵
Kemudian, ketik perintah “sudo apt-get upgrade” seperti berikut untuk melakukan
update paket piranti lunak, lalu tekan tombol enter :
blankon@blankon:~$ sudo apt-get upgrade↵
INGAT! Pastikan Anda terhubung dengan repository update agar proses
pemutakhiran bisa berjalan dengan lancar.
### Memasang aplikasi Windows
Sebenarnya, Anda juga bisa memasang aplikasi-aplikasi berbasis Microsoft
Windows favorit Anda ke dalam BlankOn Linux. Caranya adalah dengan menggunakan
piranti lunak emulator yang bernama WINE (Windows Emulator). Sebelum melakukan
pemasangan aplikasi Windows, terlebih dahulu Anda harus memasang paket “wine”
melalui APT. Setelah paket WINE terpasang, Anda bisa memasang aplikasi Windows
Anda dengan melakukan klik ganda pada berkas installer dari aplikasi tersebut
melalui peramban berkas, seperti cara melakukan pemasangan aplikasi pada
Windows.
[/raw-attachment/wiki/Dokumentasi/Panduan/5/Bab3/wine-install-software.png]
Perlu diingat, tidak semua aplikasi didukung oleh WINE. Beberapa aplikasi
mungkin tidak bisa berjalan dengan maksimal atau bahkan tidak bisa berjalan
sama sekali. Untuk informasi lebih lanjut mengenai WINE, Anda bisa membuka
situs resminya yaitu ​http://www.winehq.com.
Last modified on 06/01/2009 03:40:10 PM
#### Attachments (10)
    * apt-3rdparty-repository.png​ (63.2 KB) - added by wirama 8 years ago.
    * apt-add-cdrom.png​ (9.5 KB) - added by wirama 8 years ago.
    * apt-official-repository.png​ (43.8 KB) - added by wirama 8 years ago.
    * gdebi.png​ (41.9 KB) - added by wirama 8 years ago.
    * gnome-app-install.png​ (84.2 KB) - added by wirama 8 years ago.
    * language-support-config.png​ (23.5 KB) - added by wirama 8 years ago.
    * language-support-installer.png​ (27.8 KB) - added by wirama 8 years ago.
    * synaptic-package-manager.png​ (82.6 KB) - added by wirama 8 years ago.
    * update-manager.png​ (60.0 KB) - added by wirama 8 years ago.
    * wine-install-software.png​ (10.3 KB) - added by wirama 8 years ago.
#### 
    
 
 
 
 
 


 

