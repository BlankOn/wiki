# Memasang paket dari berkas Tar.Gz

Di BlankOn Anda dapat menambah paket dari sebuah/beberapa berkas yang mempunyai format tar.gz (Tarball).

## Studi Kasus
Apabila kita ingin mengingankan memasang paket ​wine maka caranya adalah:

### Unduh paket
Unduh paket dari server

`$ wget -c http://easynews.dl.sourceforge.net/sourceforge/wine/wine-0.9.54.tar.gz`

### Ekstrak berkas
Ekstrak berkas instalasi supaya dapat di kompile

`$ tar -xzvf wine-0.9.54.tar.gz`

### Pasang Berkas
Pasang berkas wine dalam sistem anda, di anjurkan untuk memasang paket build-essential terlebih dahulu

```
$ cd wine
$ sudo apt-get install build-essential
$ sudo ./configure
$ sudo make
$ sudo make install
```

dalam beberapa kasus, berkas installer tarball telah di-kompile dan tidak memerlukan proses `./configure` untuk itu silakan lihat Panduan Installlasi nya yang biasanya bernama
README atau INSTALL

Last modified on 09/23/2008 08:15:55 PM

---
 



