












   BlankOn
 About_Trac
    * About_Trac
    * Preferences
    * Login
    * Help/Guide
    * Wiki
    * Roadmap
    * Browse_Repository
    * View_Reports
[q                 ]
    * BlankOn  /
    * Wiki  /
    * Dokumentasi  /
    * Draft  /
    * InstallProgramTarBz2

#### Memasang paket dari berkas Tar.bz2
Di BlankOn anda dapat menambah paket dari sebuah/beberapa berkas yang mempunyai
format tar.bz2 (Tarball).
*** Studi Kasus ***
Apabila kita ingin mengingankan memasang paket ​wine maka caranya adalah:
*** Unduh paket ***
Unduh paket dari server
$ wget -c http://easynews.dl.sourceforge.net/sourceforge/wine/wine-
0.9.54.tar.bz2
*** Ekstrak berkas ***
Ekstrak berkas instalasi supaya dapat di kompile
$ tar -xjvf wine-0.9.54.tar.bz2
*** Pasang Berkas ***
Pasang berkas wine dalam sistem anda, di anjurkan untuk memasang paket build-
essential terlebih dahulu
$ cd wine
$ sudo apt-get install build-essential
$ sudo ./configure
$ sudo make
$ sudo make install
dalam beberapa kasus, berkas installer tarball telah di kompile dan tidak
memerlukan proses ./configure. untuk itu silakan lihat Panduan Installlasi nya
yang biasanya bernamaREADMEatauINSTALL
Last modified on 09/23/2008 08:17:29 PM
#### 
    







---
[**Daftar Isi Wiki BlankOn**](/DaftarIsi/README.md)
 
[**Indeks Wiki BlankOn**](/Indeks.md)



