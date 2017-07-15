# Loka Karya Pemaketan Kernel Linux

* Hari / Tanggal : Kamis 12 Januari 2012
* Narasumber : Mohammad Dhani Anwari (mdamt) 

## Pendahuluan

Dari [Wikipedia](https://id.wikipedia.org/wiki/Kernel_(ilmu_komputer)) : Kernel adalah suatu perangkat lunak yang menjadi bagian utama dari sebuah sistem operasi. Tugasnya melayani bermacam program aplikasi untuk mengakses perangkat keras komputer secara aman.

Di [BlankOn](http://dev.blankonlinux.or.id/wiki/BlankOn), berkas-berkas kernel terpasang pada :
```
/boot/vmlinuz-<versi>-<varian>

dan :

/lib/modules/<versi>-<varian>/*
```

Model pembuatan kernel ada dua, masuk ke dalam berkas vmlinuz atau menjadi berkas-berkas modul kernel (ekstensinya .ko). Hal ini ditentukan saat kita melakukan konfigurasi kernel sebelum membangun. Manfaat menjadikan modul kernel adalah :

 * Hemat tempat, ga semua masuk ke vmlinuz
 * Hemat memori
 * Lebih cepet 

Kernel merupakan salah satu dari sedikit paket-paket yg harus dikompilasi secara spesifik untuk perangkat keras tertentu, karena sifatnya sulit untuk dikonfigurasi saat sudah berjalan, jadi saat dibangun harus sudah dikonfigurasikan terlebih dahulu. Contoh : kernel untuk arsitektur i386 paketnya berbeda dengan amd64, kernel i386 generic berbeda dengan i386 PAE. Strategi paket kernel Di BlankOn, untuk 1 arsitektur, terdapat beragam varian paket kernel, misalnya untuk arsitektur i386 terdapat i386 biasa, PAE, dan untuk mesin virtual.

Tatalaksana pemaketan kernel memiliki metode yang berbeda dengan metode pemaketan aplikasi yang lain. Kernel vanilla tidak berisi pustaka yang sering kita gunakan setiap hari. Contoh untuk membuat LiveCD membutuhkan dukungan AUFS dan tidak terdapat di Kernel vanilla, selain itu banyak penggerak perangkat-penggerak keras yg juga tidak ada di Kernel Linus. Sehingga perlu mengumpulkan semua yang ingin kita gunakan terlebih dahulu.

[BlankOn](http://dev.blankonlinux.or.id/wiki/BlankOn) menggunakan 3 cabang Kernel

!(Blankon)[http://dev.blankonlinux.or.id/graphviz/7a98a6e5ec6bdb3f390cebc1640e75c11b714ed3.dot.png]

* Gitnya linus : ​git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git
* Gitnya aufs : ​git://aufs.git.sourceforge.net/gitroot/aufs/aufs3-linux.git
* Gitnya paket : ​https://bitbucket.org/mdamt/linux-blankon-packaging 

Dan hasil dari gabungan tiga cabang di atas : ​https://bitbucket.org/mdamt/linux-blankon

Selama punya 1 lumbung linux, kita tidak perlu unduh seluruh data, untuk ambil lumbung linus dan aufs cukup:
```
$ git clone --reference linux-blankon git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git linux-linus
$ git clone --reference linux-blankon git://aufs.git.sourceforge.net/gitroot/aufs/aufs3-linux.git linux-aufs
```
Jadi supaya bisa bikin varian-varian tadi, di paket ubuntu disediakan skrip dan templat-templat,
```
https://bitbucket.org/mdamt/linux-blankon-packaging/src
```
Berisi debian dan debian.master, debian berisi basis pemaketan debian, debian.master berisi templat dan konfigurasi, Saat paket dibuat, isi debian.master dipilah-pilah sesuai dengan arsitektur dan varian pilihan, dan disalin ke dalam debian, Caranya dengan menggunakan skrip yg dipanggil dari debian/rules. Untuk mengubah konfigurasi dan debian.master menggunakan perintah-perintah tertentu.

Halaman manual : ​KernelMaintenance
