# Install Program Apt

### APT (Advanced Packaging Tool)
Apt merupakan tool yang digunakan untuk pengaturan perangkat lunak di lingkungan GNU/Linux. Apt menangani pengambilan, konfigurasi serta instalasi 
paket baik yang binari maupun yang berupa source code. Apt merupakan front-end dari dpkg yang bekerja untuk paket debian berekstensi .deb. Tetapi 
kemudian diadopsi ke distribusi linux yang lain.

#### Menggunakan apt-get
apt-get berhubungan dengan pengambilan, konfigurasi serta instalasi paket. apt- get akan mengunduh paket dari repository yang terdapat pada file 
/etc/apt/ source.list

##### apt-get update
Berfungsi untuk mensinkronkan dan mengunduh daftar indeks paket dari repository. Daftar paket yang ada di /var/lib/apt/list 
akan diperbarui tiap kali perintah ini dijalankan. Sehingga perintah ini harus selalu dijalankan sebelum apt-get upgrade maupun apt-get dist-upgrade. 

`$sudo apt-get update`

##### apt-get upgrade
Berfungsi untuk menginstall semua versi terbaru dari paket yang terinstal di sistem.

`$sudo apt-get upgrade`

##### apt-get install
Berfungsi untuk menginstall paket-paket yang kita inginkan. Instalasi satu buah paket:

`$sudo apt-get install mc`

Instalasi banyak paket:

`$sudo apt-get install mplayer vlc banshee`

##### apt-get remove

Berfungsi untuk menghapus paket.

`$sudo apt-get remove mc`

Apabila anda benar-benar ingin menghapus paket beserta file konfigurasinya

`$sudo apt-get remove --purge mc`

##### apt-get autoremove

Berfungsi untuk menghapus paket yang terinstall otomatis untuk memenuhi dependencies beberapa paket yang tidak lagi diinginkan.

##### apt-get dist-upgrade

Digunakan untuk menambah kemampuan pembaruan paket, dimana terdapat fitur canggih yang menangani perubahan dependencies dari versi paket terbaru. 
Biasanya gunakan saat pergantian paket besar-besaran seperti upgrade versi ubuntu ke versi lainnya yang lebih baru.

` $sudo apt-get dist-upgrade`

##### apt-get clean
Tiap kali apt-get install dijalankan dia akan mengunduh paket yang akan di install ke direktori /var/cache/apt/archives dan atau 
/var/cache/apt/archives/ partial. Sehingga membentuk repositori lokal yang lama kelamaan semakin besar ukurannya dan menghabiskan space hardisk. 
apt-get clean menghapus semua kecuali file lock di direktori tersebut, sehingga Anda mendapatkan kembali space hardisk Anda.

`$sudo apt-get clean`

##### apt-get autoclean

Memiliki fungsi yang mirip dengan apt-get clean.

`$sudo apt-get autoclean`

##### apt-get source

Berfungsi untuk mengunduh file source dari paket. Perintah ini akan mengunduh beberapa file yaitu:

  * file source asli yang berekstensi .orig.tar.gz
  * file patch yang berekstensi .diff.gz
  * file meta yang berekstensi .dsc

Lalu apt-get source akan mengekstrak file source asli lalu menerapkan patch padanya.

```
$ apt-get source ed
Reading package lists... Done
Building dependency tree
Reading state information... Done
Need to get 82.5kB of source archives.
Get:1 http://kambing.ui.edu gutsy/main ed 0.7-1build1 (dsc) [531B]
Get:2 http://kambing.ui.edu gutsy/main ed 0.7-1build1 (tar) [74.8kB]
Get:3 http://kambing.ui.edu gutsy/main ed 0.7-1build1 (diff) [7240B]
Fetched 82.5kB in 0s (145kB/s)
gpg: Signature made Mon 13 Aug 2007 06:19:05 PM WIT using DSA key ID 0F932C9C
gpg: Can't check signature: public key not found
dpkg-source: extracting ed in ed-0.7
dpkg-source: unpacking ed_0.7.orig.tar.gz
dpkg-source: applying ./ed_0.7-1build1.diff.gz
$ ls
ed-0.7  ed_0.7-1build1.diff.gz  ed_0.7-1build1.dsc  ed_0.7.orig.tar.gz
```

Berbeda dengan perintah apt-get lainnya apt-get source disarankan untuk tidak menggunakan sudo.

#### Menggunakan apt-cache
apt-cache berhubungan dengan pencarian paket serta informasi yang berhubungan dengan paket.

##### apt-cache search
Berfungsi untuk mencari paket-paket yang berhubungan dengan keyword yang dimasukkan.

```
$ apt-cache search netbeans
netbeans5.5 - NetBeans IDE for development of applications in Java
netbeans5.5-doc - NetBeans IDE documentation bundle
netbeans5.5-ja - NetBeans IDE (Japanese Localization)
netbeans5.5-platform - NetBeans Platform for building rich desktop applications
in Java
netbeans5.5-platform-ja - NetBeans Platform (Japanese Localization)
netbeans5.5-platform-pt - NetBeans Platform (Portuguese Localization)
netbeans5.5-platform-zh - NetBeans Platform (Chinese Localization)
netbeans5.5-pt - NetBeans IDE (Portuguese Localization)
netbeans5.5-zh - NetBeans IDE (Chinese Localization)
```

##### apt-cache showpkg
Berfungsi menampilkan informasi tentang paket yang dicari. Informasi tersebut berupa nama paket, versi yang tersedia, forward dan reverse 
dependencies, dan lain-lain.

```
$ apt-cache showpkg libitl0
Package: libitl0
Versions:
0.6.4-1 (/var/lib/apt/lists/kambing.ui.edu_ubuntu_dists_gutsy_universe_binary-
amd64_Packages) (/var/lib/dpkg/status)
 Description Language:
                 File: /var/lib/apt/lists/
kambing.ui.edu_ubuntu_dists_gutsy_universe_binary-amd64_Packages
                  MD5: 170e90d0ad9840eacfccf13a494ab6f0


Reverse Depends:
  minbar,libitl0
  libitl-dev,libitl0 0.6.4-1
  itools,libitl0
Dependencies:
0.6.4-1 - libc6 (2 2.3.4-1)
Provides:
0.6.4-1 -
Reverse Provides:
```

Last modified on 10/30/2008 12:11:27 AM

---
 



