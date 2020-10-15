# Spesifikasi BlankOn 5 Nanggar

  + [Spesifikasi AddOnCD](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/AddOnCD)
  + [Spesifikasi BlankOnTweak](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/BlankOnTweak)
  + [Spesifikasi Cakram-pengaya](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Cakram-pengaya)
  + [Spesifikasi Cakram-pengaya Bisnis](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Cakram-pengaya/Bisnis)
  + [Spesifikasi Cakram-pengaya Keluarga](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Cakram-pengaya/Keluarga)
  + [Spesifikasi Cakram-pengaya Pendidikan](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Cakram-pengaya/Pendidikan)
  + [Spesifikasi Cakram-pengaya Pengembang](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Cakram-pengaya/Pengembang)
  + [Spesifikasi Cakram-pengaya request](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Cakram-pengaya/request)
  + [Spesifikasi Control Panel](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/ControlPanel)
  + [Spesifikasi Ekiga](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Ekiga)
  + [Spesifikasi Karya Seni](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/KaryaSeni)
  + [Spesifikasi LXDE](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/LXDE)
  + [Spesifikasi Rotasi Latar](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/RotasiLatar)
  + [Spesifikasi Tema-Berdasarkan-Konteks](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/Tema-Berdasarkan-Konteks)
  + [Spesifikasi VirtualBox](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/VirtualBox)
  + [Spesifikasi WUBI](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/WUBI)
  + [Spesifikasi ecofont](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/ecofont)
  + [Spesifikasi gnome-minimalist](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/gnome-minimalist)
  + [Spesifikasi kamus_offline](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/kamus_offline)
  + [Spesifikasi nfs](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/nfs)
  + [Spesifikasi openssh-server](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/openssh-server)
  + [Spesifikasi sshfs](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/sshfs)
  + [Spesifikasi usbstartup](http://dev.blankonlinux.or.id/wiki/5/Spesifikasi/usbstartup)


## Spesifikasi AddOnCD
AddOnCD adalah cd repositori yang bersifat tematis. Contohnya akan ada AddOnCD Koperasi, AddOnCD Game, AddOnCD Studio dan sebagainya. Yang berisi berbagai paket yang memenuhi kebutuhan sesuai tema yang disandang oleh cd tersebut.

**Latar Belakang**

Untuk menginstall berbagai aplikasi pada blankon menggunakan apt-get yang mengharuskan pengguna terhubung kerepositori yang kebanyakan harus terhubung keinternet. Karena penetrasi internet di indonesia kurang luas maka cd ini dapat digunakan untuk menginstall beberapa program yang mungkin dibutuhkan oleh pengguna. Pengguna yang menjadi sasaran adalah pendidikan, warnet dan koperasi.

AddOnCd? ini akan tersedia dalam beberapa cd sesuai dengan temanya dan tersedia DVD yang didalamnya terdapat semua paket aplikasi yang ada pada berbagai AddOnCd? tersebut. AddOnCD tentunya menjadi nilai tambah bagi distribusi blankon ke pengguna windows. Mereka suka menginstall program-program secara offline. Nanti juga membuka peluang membuat tren di masyarakat tentang addoncd ataupun bisa juga updatecd yang dibuat oleh komunitas. Dengan tren ini pengguna blankon tinggal membeli cd software pack (addoncd) untuk memperluas perbendaharaan softwarenya.
Rencana Implementasi

Tim akan melakukan riset untuk menentukan paket apa saja akan disertakan dalam berbagai addoncd. Daftar ini akan diserahkan ke tim pemaket untuk ditindak lanjuti. Hasil akhirnya adalah sebuah iso cd ataupun dvd. AddOnCd? dapat disamakan dengan iso edubuntu yang disediakan canonical. Didalam cd tersebut selain ada paket-paket applikasi juga ada beberapa file pertolongan (help) khas tergantung dari tema tersebut.

Untuk pendistribusian AddOnCd? ini akan mengikuti distribusi dari iso blankon. Dan rilispun diusahakan tidak terlalu jauh atau bersamaan dengan rilis blankon.

**Target awal**

Untuk target awal adalah membuat AddOnCd? untuk memenuhi kebutuhan warnet dan koperasi

**Keuntungan**
  + menambah fungsionalitas blankon dengan mudah
  + Menambah materi pemasaran bagi tim pemasaran
  + memperluas alasan menggunakan blankon 

**Kekurangan (masalah)**
  + Tugas tim pemaket bertambah
  + Kebingungan pengguna karena banyaknya AddOnCD yang seharusnya menjadi nilai tambah 
  
## Spesifikasi BlankOnTweak
    Tiket spesifikasi: belum ada
    Penanggung jawab: Mahyuddin Susanto (udienz) 

**Ringkasan**

BlankOn Tweak adalah turunan dari Ubuntu - Tweak yang di sesuaikan dengan BlankOn

**Latar Belakang**

Penggunaan ubuntu tweak sangat membantu pengguna dalam memodifikasi sistemnya, sehingga sistem tersebut easy to use untuk dirinya sendiri

**Studi Kasus**

Pengguna belum banyak yang tahu bagaimana men-*tweak* sistem mereka 

**Rancangan & Implementasi**

Mengubah parameter-parameter di sourcecode yang mengacu ke pada ubuntu agar di belokkan ke blankon. sehingga fitur yang sebelumnya di hilangkan karena di anggap bukan dari distro ubuntu di tampilkan lagi 

**Permasalahan**

  + SVG untuk program ini belum ada 
  + Secara default BlankOn Tweak akan mendisable sourceeditor apabila isi dari /etc/issue bukan bernilai Ubuntu (Solved) 

**Berkas Contoh**

+ http://dolanan.udienz.net/paket/blankon-tweak/ 

## Cakram Pengaya Pengembang
Racikan ini ditujukan untuk pengguna rumahan untuk kebutuhan perkantoran sederhana sampai home entertainment.

Daftar aplikasi cakram pengaya keluarga menurut kategori aplikasinya:

**Alat**
  + bicyclerepair
  + gij
  + intel2gas
  + javahelper
  + mmake
  + tijmp
  + visualvm

**Alat VCS**
  + bzr
  + bzr-builddeb
  + bzr-dbus
  + bzr-email
  + bzr-gtk
  + bzr-cvsps-import
  + bzr-search
  + bzr-stats
  + bzr-svn
  + bzr-upload
  + bzr-xmloutput
  + bzrtools

**Compiler**
  + ant
  + ant-gcj
  + bin86
  + doxygen
  + doxygen-gui
  + gcj
  + nasm
  + yasm

**Dokumen**
  + ant-doc

**Ide/text editor**
  + eclipse
  + eclipse-cdt
  + eclipse-efj
  + eclipse-gcj
  + eclipse-jdt
  + eclipse-jdt-gcj
  + eclipse-pde
  + eclipse-pde-gcj
  + eclipse-pydev
  + eclipse-pydev-gcj
  + boa-constructor
  + drpython
  + netbeans
  + pida

**Pustaka**
  + lightning

**SDK sun-java6-jdk**
  + openjdk-6-jdk
  + default-jdk-builddep

**Shell**
  + bsh


---
 



