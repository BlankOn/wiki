## Panduan Paket Impor #  openoffice.org
~+DRAFT+~

Petunjuk BlankOnisasi openoffice.org
   1. Source code dan diff.gz ada di ​https://code.launchpad.net/ubuntu/
      +source/openoffice.org
   2. Berkas yang harus dimodifikasi:
         1. debian/rules
         2. ooo-build/configure
         3. ooo-build/configure.in
         4. ooo-build/patches/src680/apply
         5. ooo-build/distro-configs/Makefile.in
         6. ubuntu/openabout_ubuntu.bmp.uu
         7. ubuntu/openintro_ubuntu.bmp.uu
   3. Berkas khas BlankOn:
         1. ubuntu/BlankOn.otp.uu
         2. ooo-build/distro-configs/BlankOnLontara.conf.in
         3. ooo-build/distro-configs/BlankOnLontara64.conf.in
### Modifikasi berkas
#### debian/rules
Pada openoffice.org ada sebuah variabel bernama DIST isinya diambil dari
lsb_release distro yang bersangkutan. Nilai DIST ini adalah nilai distribution
ID pada lsb_release.
Contoh:
$ lsb_release --id
BlankOn
Nilai dari DIST pada contoh di atas adalah BlankOn.
Karena BlankOn adalah turunan Ubuntu, maka pada seluruh penggunaan nilai Ubuntu
harus dimasukkan juga nilai BlankOn. Contoh isi debian/rules:
ifeq "$(DIST)" "Ubuntu"
maka harus diubah menjadi
ifneq (,$(findstring $(DIST), Ubuntu BlankOn))
(silakan baca konfigurasi Makefile untuk keterangan lebih lanjut)
*** Perubahan berkaitan dengan aotcompile.py ***
openoffice.org membutuhkan berkas aotcompile.py yang disediakan dalam paket
java-gcj-compat-dev. Pada rilis Gutsy, java-gcj-compat-dev memiliki versi
1.0.76-4ubuntu1 sedangkan pada rilis Hardy, versinya adalah 1.0.77-2ubuntu2.
Dalam kedua versi yang berbeda ini, berkas aotcompile.py juga diletakkan pada
direktori yang berbeda. Namun, penggunaan aotcompile.py masih menunjuk ke
lokasi yang lama. Oleh karena itu, perlu diubah secara menual agar menunjuk ke
lokasi yang baru.
Berikut ini adalah penggunaan aotcompile.py pada berkas debian/rules yang asli.
        cp /usr/share/pycentral/java-gcj-compat-dev/site-packages/aotcompile.py
\
Berikut ini adalah hasil modifikasinya.
        cp /usr/share/pyshared/aotcompile.py \
Silakan cek direktori file pada
    * ​Gutsy_Gibbon
    * ​Hardy_Heron
#### ooo-build/configure
Sama seperti kasus sebelumnya, seluruh penggunaan nilai Ubuntu harus diikuti
juga dengan penggunaan nilai BlankOn
Contoh:
        Debian*|Ubuntu*) VENDORNAME="Debian" ;;
harus diubah menjadi
        Debian*|Ubuntu*|BlankOn*) VENDORNAME="Debian" ;;
Nilai VENDORNAME ini akan dipakai juga di tempat lain dan harus bernilai
Debian. Kesalahan pengaturan ini akan menyebabkan paket tidak dapat
dikompilasi.
Pada berkas ini juga terdapat petunjuk mengenai konfigurasi spesifik suatu
distribusi. Konfigurasi ini diletakkan di dalam berkas di bawah direktori ooo-
build/distro-configs/. Berkas yang digunakan memiliki teknik penamaan khusus
yang nilainya juga diambil dari lsb_release.
Nilai tersebut merupakan gabungan dari distribution ID dan codename dari
lsb_release. Contoh:
$ lsb_release --id
BlankOn
$ lsb_release --codename
lontara
Maka nama berkas konfigurasi untuk distro tersebut adalah BlankOnLontara. Huruf
pertama dari codename dibuat menjadi huruf besar dan kedua kata tersebut
digabung.
Pada distro Ubuntu, nilai nama konfigurasi ini antara lain adalah UbuntuHardy.
Oleh karena itu, setiap penggunaan nilai UbuntuHardy juga harus diikuti dengan
BlankOnLontara
#### ooo-build/configure.in
Perubahan yang dilakukan pada berkas ini mirip dengan perubahan yang dilakukan
pada ooo-build/configure
#### ooo-build/patches/src680/apply
Penambahan BlankOnLontara setelah UbuntuHardy
#### ooo-build/distro-configs/Makefile.in
Penambahan BlankOnLontara setelah UbuntuHardy
#### ubuntu/openabout_ubuntu.bmp.uu
Artwork window "about" pada OpenOffice.org. Silakan hubungi tim kesenian untuk
pembuatan artwork ini. Berkas ditulis dalam format BMP dan dikodekan dengan
Uuencode.
#### ubuntu/openintro_ubuntu.bmp.uu
Sama seperti ubuntu/openabout_ubuntu.bmp.uu
### Berkas khas
#### ubuntu/BlankOn.otp.uu
Contoh dokumen khas BlankOn
#### ooo-build/distro-configs/BlankOnLontara.conf.in
Berkas konfigurasi spesifik distro. Berkas ini disalin dari UbuntuHardy.conf.in
dengan perubahan nilai --with-vendor menjadi BlankOn
#### ooo-build/distro-configs/BlankOnLontara64.conf.in
Sama seperti oo-build/distro-configs/BlankOnLontara.conf.in. Berkas asli adalah
UbuntuHardy64.conf.in
KategoriPemaket
Last modified on 06/28/2008 12:57:09 AM
#### 
    
 
 
 
 
 
---
 
