# PANDUAN PAKET FONTS
========================================================
LOKAL
   1. Unduh Fonta yang mau dipaketkan (cth : ​https://www.google.com/get/noto/
      #sans-java)
   2. Buat Direktori Paket/ di home dan masuk ke direktori Paket/ dan buat
      direktori nama fonta (fonts-sans-java) .
$mkdir Paket/
$cd Paket/
$mkdir Fonts-nama-font-0.1
   1. Masukkan berkas .ttf ke direktori fonts-nama-font-0.1
   2. Compress direktori fonts-nama-font-0.1 menjadi fonts-nama-font-0.1.tar.gz
   3. Masuk ke direktori fonts-nama-font-0.1 dan lakukan debianisasi. Ketik
      $dh_make -e isiemailanda -f ../fonts-nama-font-0.1.tag.gz
      Pilih single atau ketik s lalu tekan enter.
   1. Masuk ke direktori debian yang sudah ada di direktori fonts-nama-font dan
      lalukan pembersihan berkas yang tidak dibutuhkan. Ketik
      $rm *.ex *.EX docs info README.*
      $ls
   1. Ketikkan
      $dch -e
untuk melakukan penyesuaian versi dan log perubahan.
   1. Lakukan penyesuaian pada berkas control (bisa melihat paket yang sudah
      ada), begitu pula dengan berkas copyright.
   2. Lalu pindah ke direktori sebelumnya ketik
      $cd ..
   3. Ketik
      $debuild -S
      $cd ..
      $sudo pbuilder build nama-paket.dsc
   4. Lihat hasil build di direktori /var/cache/pbuilder/result/
=======================================================
IRSGH
   1. Unduh Fonta yang mau dipaketkan (cth : ​https://www.google.com/get/noto/
      #sans-java)
   2. Buat Direktori Paket/ di home dan masuk ke direktori Paket/ dan buat
      direktori nama fonta (fonts-sans-java) .
$mkdir Paket/
$cd Paket/
$mkdir Fonts-nama-font-0.1
   1. Masukkan berkas .ttf ke direktori fonts-nama-font-0.1
   2. Compress direktori fonts-nama-font-0.1 menjadi fonts-nama-font-0.1.tar.gz
   3. Masuk ke direktori fonts-nama-font-0.1 dan lakukan debianisasi. Ketik
      $dh_make -e isiemailanda -f ../fonts-nama-font-0.1.tag.gz
      Pilih single atau ketik s lalu tekan enter.
   1. Masuk ke direktori debian yang sudah ada di direktori fonts-nama-font dan
      lalukan pembersihan berkas yang tidak dibutuhkan. Ketik
      $rm *.ex *.EX docs info README.*
      $ls
   1. Ketikkan
       $dch -e
untuk melakukan penyesuaian versi dan log perubahan.
   1. Lakukan penyesuaian pada berkas control (bisa melihat paket yang sudah
      ada), begitu pula dengan berkas copyright.
   2. Lalu pindah ke direktori sebelumnya ketik
      $cd ..
   3. Lakukan initialisasi bzr, agar dapat mengirim ke bzr repo. Ketik
      $bzr init
   4. Kirim berkas ke bzr. Ketik
      $bzr add *
      $bzr commit -m “isikan pesan perubahan”
      $bzr push bzr+ssh://bzr@dev.blankonlinux.or.id:2222/bzr/tambora/nama-
      paket
   5. Buka IRGSH ​http://irgsh.blankonlinux.or.id, login menggunakan akun
      aku.blankonlinux.or.id anda (hubungi system adminitrator untuk
      mendaftarkan akun anda sebagai team pemaket) dan Klik Login
   6. Klik New Build, maka akan muncul halaman Submit Build job
   7. Isikan
          o Distribution = Tambora (sesuai dengan nama kode rilis).
          o Source URL = Alamat source yang ada di bzr blankon.
          o Source Type = Bazar repository
          o Source Option = Last version
          o Original Source = Alamat source code upstream bisa dari github
            ataupun akun pendekar (file berbentuk .tar.gz)
          o Additional Original Source = menambahkan source code upstream jika
            diperlukan.
15.Klik Submit
Last_modified 7 months ago Last modified on 10/11/2016 01:47:48 PM
#### 
    
 
 
 
 
 
---
 
