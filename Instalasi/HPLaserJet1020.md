# Instalasi Printer
## HP Laser Jet 1020
Printer ini secara umum bisa di-detect otomatis oleh Ubuntu/BlankOn?. Akan
tetapi setelah kita jalankan, tidak akan muncul apa-apa alias diam seribu
halaman.

Untuk mengatasi masalah ini, menurut pembuat driver di http://foo2zjs.rkkda.com/ 
kita harus menginstal sendiri driver printer tersebut.
Silahkan mendownload driver sekitar 1.5 MB pada situs tersebut, kemudian
lakukan instalasi sesuai dengan langkah-langkah berikut (terpaksa harus
menggunakan command-line) :
Langkah-langkahnya sebagai berikut :

```
 $ sudo apt-get install build-essential
 $ wget -c http://foo2zjs.rkkda.com/foo2zjs.tar.gz
```

extract paketnya :

```
 $ tar zxf foo2zjs.tar.gz
 $ cd foo2zjs
```

lakukan perintah berikut :

`$ make`

download file ekstra dari web, seperti .ICM profiles untuk color correction,
dan firmware.

`$ ./getweb 1020 # Get HP LaserJet 1020 firmware file`

Install driver, foomatic XML files, and extra files:

`$ sudo make install`

konfigurasi hotplug :

`$ sudo make install-hotplug`

restart cups :

`$ sudo make cups`

Setelah semua selesai, coba colokkan kabel USB Printer Anda, biarkan Ubuntu
memproses dengan wajar dan lakukan test print untuk melihat hasilnya. Selamat
Mencoba.

Last modified on 12/13/2008 11:41:42 AM
 
 
---
 

