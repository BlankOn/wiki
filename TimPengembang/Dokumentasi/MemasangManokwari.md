# Memasang Manokwari
### Pengenalan
Github : ​http://github.com/BlankOn/manokwari
Webpage: ​http://manokwari.blankonlinux.or.id/

Manokwari merupakan desktop shel untuk GNOME 3, dikembangkan oleh pengembang
​
BlankOn_Linux. Dan merupakan desktop bawaan distro BlankOn Linux.

### Memasang Manokwari
#### Ubuntu
Panduan ini membutuhkan koneksi internet.
##### Memasang dari Sumber
via konsole
Menu > Aksesoris > Terminal
   1. Pasang pustaka dan paket ketergantungan yang dibutuhkan pada sistem Ubuntu,

```
sudo apt-get install git automake build-essential libgee-dev libwebkitgtk-3.0-
dev gnome-common
libunique-dev libunique-3.0-dev libwnck-3-dev libgnome-menu-dev valac-0.16
checkinstall
```
   1. Ambil source code dari blankon-panel (manokwari)
`git clone https://github.com/BlankOn/manokwari manokwari-0.2.1`
   1. Jalankan proses kompilasi dan pemasangan pada sistem

```
cd manokwari-0.2.1
./autogen.sh
make
sudo checkinstall
```
Penggunaan checkinstall akan membangun paket debian (.deb) dari source blankon-
panel (manokwari) yang telah dikompilasi, sehingga proses pemasangan dan
penghapusan dapat dilakukan dengan mudah menggunakan dpkg.

##### Menghapus Manokwari
Untuk proses penghapusan dapat menggunakan perintah
```
sudo apt-get remove manokwari
sudo dpkg -r manokwari
```

Sesuaikan nama jika ada perubahan pada proses checkinstall

##### Memasang via PPA
Ubuntu 12.04 & 12.10
Lakukan penambahan PPA (Personal Package Archives) melalui konsole (terminal)
Menu > Aksesoris > Terminal

```
sudo add-apt-repository ppa:wagungs/linukweb.id
sudo apt-get update
sudo apt-get install blankon-session
```

Jika sudah selesai, kemudian restart dan login dengan Session BlankOn
Lokasi PPA : ​https://launchpad.net/~wagungs/+archive/linukweb.id

##### Pengaturan Lanjutan
Agar tampilan manokwari menjadi lebih baik lakukan sedikit konfigurasi
menggunakan gnome-tweak-tool, atau dapat juga menggunakan perintah berikut:

Jalankan pada terminal sebagai pengguna biasa ($)
   1. Menonaktifkan fungsi file manager pada desktop (klik kanan, icons, dan
      manajemen file)
gsettings set org.gnome.desktop.background show-desktop-icons false
   1. Menerapkan tema GTK+ Krawu
gsettings set org.gnome.desktop.interface gtk-theme 'Krawu'
   1. Menerapkan icons Komodo-Biru
gsettings set org.gnome.desktop.interface icon-theme 'Komodo-Biru'
   1. Menerapkan tema window manager Krawu
gsettings set org.gnome.desktop.wm.preferences theme 'Krawu'
   1. Memindahkan windows buttons kepojok kanan
gsettings set org.gnome.desktop.wm.preferences button-layout ':
minimize,maximize,close'

Setelah melakukan settingan, restart manokwari dengan perintah
killall manokwari

Atau logout kemudian login kembali. Untuk diketahui bahwa Manokwari tidak
mendukung aksi pada desktop semisal klik kanan.
   1. Untuk mengembalikan tema dan pengaturan standar Ubuntu, jalankan perintah
      berikut pada terminal,
```
gsettings set org.gnome.desktop.background show-desktop-icons true
gsettings set org.gnome.desktop.wm.preferences theme 'Ambiance'
gsettings set org.gnome.desktop.interface gtk-theme 'Ambiance'
gsettings set org.gnome.desktop.interface icon-theme 'ubuntu-mono-dark'
gsettings set org.gnome.desktop.wm.preferences button-layout
'minimize,maximize,close:'
```

   1. Untuk menggantikan fungsi run command (Alt+F2) pada manokwari gunakan
      Synapse. Jika memasang melalui ppa synapse akan terpasang pada saat
      memasang blankon-session sebagai paket ketergantungan. Lakukan pengaturan
      synapse agar dijalanakan ketika masuk(Startup on login).
Secara default Synapse dapat dipanggil menggunakan pintasan Ctrl+Spasi,
Sumber :
[0] ​http://www.linuk.info/2012/11/blankon-session-manokwari-ubuntu.html
[1] ​http://www.linuk.info/2012/05/testing-blankon-panelmanokwari-di.html

#### Fedora
Panduan untuk distribusi Linux Fedora versi 18 kebawah atau distribusi berbasis .rpm

##### Memasang dari Sumber
Cara yang dilakukan adalah mengkompilasi secara manual dari source .rpm
(.src.rpms) manokwari dan pendukungnya.
   1. Sebelumnya pasang paket perangkat lunak dasar berikut pada sistem fedora
`sudo yum -y install yum-utils rpmdevtools make automake gcc gcc-c++ intltoolgit`

   1. Buat sebuah folder untuk menampung source rpm yang akan diunduh,
`git clone https://github.com/wagung/SRPMS01.git`

   1. Setelah selesai, install paket-paket perangkat lunak dan pustaka yang
      dibutuhkan oleh source rpm secara berurutan, yang pertama kali harus
      dipasang adalah gnome-menus,
`sudo yum-builddep gnome-menus2-2.30.5-1.fc18.src.rpm`

   1. Pasang seluruh dependecy yang dibutuhkan, lanjutkan dengan membuild
      package gnome-menus,

`rpmbuild --rebuild gnome-menus2-2.30.5-1.fc18.src.rpm`

binary package (.rpm) yang dihasilkan akan berada didrektori /home/$user/
rpmbuild/RPMS/ Package yang dihasilkan bergantung pada arsitektur yang

digunakan proses building i386/i486/i586/i686 untuk 32bit dan x86_64 untuk
64bit
   1. Pasang .rpm package yang dihasilkan *sesuaikan dengan rpm package yang
      dihasilkan
`sudo yum localinstall --nogpgcheck gnome-menus2-2.30.5-1.fc18.i686.rpm gnome-menus2-devel-2.30.5-1.fc18.i686.rpm`

   1. Bangun dan pasang paket manokwari,
```
sudo yum-builddep manokwari-0.2.1.10-1.fc18.src.rpm
rpmbuild --rebuild  manokwari-0.2.1.10-1.fc18.src.rpm
sudo yum localinstall --nogpgcheck manokwari-0.2.1.10-1.fc18.i686.rpm
```

   1. Lanjutkan dengan membuild dan memasang paket komodo-icon-theme
```
sudo yum-builddep komodo-icon-theme-0.2.21-1.fc18.src.rpm
rpmbuild --rebuild komodo-icon-theme-0.2.21-1.fc18.src.rpm
sudo yum localinstall --nogpgcheck komodo-icon-theme-0.2.21-1.fc18.noarch.rpm
```

   1. Bangun dan pasang paket paket krawu-theme
```
sudo yum-builddep krawu-theme-0.2.16-1.fc18.src.rpm
rpmbuild --rebuild krawu-theme-0.2.16-1.fc18.src.rpm
sudo yum localinstall --nogpgcheck krawu-theme-0.2.16-1.fc18.noarch.rpm
```
   1. build dan pasang blankon-session

```
sudo yum-builddep blankon-session-0.0.10-1.fc18.src.rpm
rpmbuild --rebuild blankon-session-0.0.10-1.fc18.src.rpm
sudo yum localinstall --nogpgcheck blankon-session-0.0.10-1.fc18.noarch.rpm
```

Setelah selesai logout dan pada display manager pilih sesi Blankon,

##### Cara Lain
Paket hasil build juga tersedia baik arsitektur 32bit(i386) atau 64bit(x86_64)
   1. Unduh paket:
`wget -c https://github.com/wagung/RPMS01/archive/master.zip`

   1. Memasang, jangan lupa sesuaikan dengan arsitektur sistem anda. Untuk
      proses pemasangan gunakan perintah yum agar dependency paket juga ikut
      terpasang,
`sudo yum localinstall --nogpgcheck *.rpm`

Setelah selesai logout dan pilih sesi Blankon pada display manager.

##### Know Issue
Untuk saat ini masalah yang timbul pada manokwari pada fedora 18 adalah tidak
berfungsinya fungsi lock gnome-screensaver-command -l

Sumber :
[0] ​http://www.linuk.info/2013/01/how-to-install-manokwari-blankon-shell.html
[1] ​http://www.linuk.info/2013/01/download-rpm-package-manokwari-blankon.html

#### OpenSUSE 12.2
##### Install Manokwari di OpenSUSE 12.2
Panduan ini merupakan hasil ekperimen salah satu kontributor BlankOn. OpenSUSE
12.2 secara default tidak mendungkung untuk dipasang Manokwari. Setiap langkah
hendaknya selalu dicermati.

##### Prasyarat
   * Kenali arsitektur yang digunakan pada sistem operasi, ​32_bit_atau_64
     bit.
   * Versi ​GNOME_3.4.2_desktop.
   * Konfigurasi repositori lokal menggunakan ​Installer_YaST.
   * Buatlah pengguna baru "Test User", dan matikan login otomatis. Desktop
     Manokwari nantinya akan dicoba di profil "Test User". Panduan manajemen
     user pada OpenSUSE bisa anda temukan ​di_sini.

##### Download Paket RPM
Unduh beberapa paket yang dibutuhkan,
  * ​redhat-menus
  * ​gtk-unico-engine
  * ​gtk-murrine-engine
  * ​wagung/RPMS01

Setelah memverifikasi arsitektur OS yang kita gunakan, dilanjutkan dengan
mengunduh paket RPM yang cocok, dan membuat repositori rpm lokal, kemudian
menempatkan semua paket rpm. Sebagai contoh untuk arsitektur 64 bit RPM yang
diperlukan adalah sebagai berikut :

blankon-session-0.0.10-1.fc18.noarch.rpm
gnome-menus2-2.30.5-1.fc18.x86_64.rpm
gtk-murrine-engine-0.98.2-2.fc18.x86_64.rpm
gtk-unico-engine-1.0.2-2.20120808bzr139.fc18.x86_64.rpm
komodo-icon-theme-0.2.21-1.fc18.noarch.rpm
krawu-theme-0.2.16-1.fc18.noarch.rpm
manokwari-0.2.1.10-1.fc18.x86_64.rpm
redhat-menus-12.0.2-5.fc18.noarch.rpm

##### Install Paket RPM
###### Install using zypper (CLI)
Asumsi repositori local sudah dibuat menggunakan YaST. Dilanjutkan untuk
menginstal desktop menggunakan manajer paket zypper. Pertama membuka peluncur
perintah (Alt + F2) dan kemudian ketik perintah "gnome-terminal" untuk membuka
sesi terminal.
`sudo zypper in -f -r rpms blankon-session gnome-menus2 gtk-murrine-engine gtk-unico-engine komodo-icon-theme krawu-theme manokwari redhat-menus`

Notes:
  * sudo - Run command as super user
  * zypper - Package manager in openSUSE
  * in - Instructs zypper to install
  * -f - This force reinstalls packages(optional)
  * -r - Asks zypper to install the packages from repo named "rpms".(Local
      repo name created through YaST)

###### Install using YaST (GUI) **
   1. Buka aplikasi YaST
   2. Pilih Repositori manokwari yang sudah dibaut tadi, kemudian pilih paket-
      paketnya dan dipasang.
   3. Lakukan logout, kemudian login kembali sebagai "Test User". Pilih BlankOn
      sebagai desktop default.

Sumber :
[0] ​http://vazhavandan.blogspot.com/2013/01/manokwari-desktop-on-opensuse-
122.html ​Melbourne_SEO_Services | ​melbourne_web_design | ​Airless_Spray |
​Oxone

Last modified on 10/16/2014 02:00:13 PM

---
 
