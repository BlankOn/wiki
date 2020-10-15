# PANDUAN PEMAKETAN BLANKON INSTALLER MENGGUNAKAN KOMPUTER LOKAL
   1. Sebelum melakukan pemaketan BlankOn-Installer silahkan persiapkan
      alatnya. Bisa dibaca di Wiki atau ​Buku_Panduan_Pemaketan. Pada proses
      persiapan alat, baca panduan sampai pada pembuatan kunci.
   2. Unduh source code upstream blankon-installer di github yang sudah dirilis
      oleh team riset. Masuk ke ​https://github.com/BlankOn/blankon-installer
      => Klik Release
[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/image01.png]
Pada halaman release, pilih versi yang ingin dipaketkan dan unduh berkas
sourcenya dengan ektensi .tar.gz
[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/image02.png]
   1. Buka terminal, buat folder Paket di home dan masuk ke folder Paket/
      dengan ketik perintah
      $mkdir Paket/
      $cd Paket/
dan kemudian ketik
$bzr branch http://dev.blankonlinux.or.id/browser/tambora/blankon-installer
untuk mengunduh folder debian dari BlankOn-installer dari bzr BlankOn.
[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/image00.png]
   1. Taruh berkas .tar.gz di folder /Paket dan ektraks berkas .tar.gz dari
      blankon-installer.
   2. Di folder Paket, masuk ke folder blankon-installer, ketik
      $dch -i
lalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email
anda.
     Untuk versi
    * 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis
      versi terbaru)
    * -0 adalah versi dari debian
    * blankon1 adalah versi yang digunakan blankon, apabila ada penambahan
      patch maka versi akan naik.
   1. Pada berkas format difolder debian/source isikan 3.0 (quilt)
   2. Lakukan
      $debuild -S
   3. Ketik
      $cd ..
      $sudo pbuilder build namapaket.dsc
   4. Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/
      pbuilder/result/
   5. Selanjutnya bisa dilanjutkan ke IRSGH.
PEMAKETAN DI IRGSH
   1. Ketik
      $bzr branch http://dev.blankonlinux.or.id/browser/tambora/blankon-
      installer
untuk mengunduh folder debian dari BlankOn-installer dari bzr BlankOn.
   1. Masuk ke folder blankon-installer dan lakukan pemversian. Ketik
      $dch -i
lalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email
anda.
   1. Untuk versi
          o 1.33 adalah versi upstream (akan berubah versi setiap upstream
            merilis versi terbaru)
          o -0 adalah versi dari debian
          o blankon1 adalah versi yang digunakan blankon, apabila ada
            penambahan patch maka versi akan naik.
   1. Kirim berkas blankon-installer ke bzr
      $bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi
      bzr)
      $bzr add *
      $bzr commit -m “isikan pesan perubahan”
      $bzr push bzr+ssh://bzr@dev.blankonlinux.or.id:2222/bzr/tambora/nama-
      paket
[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/irgsh.png]
   1. Buka IRGSH ​http://irgsh.blankonlinux.or.id, login menggunakan akun
      aku.blankonlinux.or.id anda (hubungi system adminitrator untuk
      mendaftarkan akun anda sebagai team pemaket).
[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/login.png]
Klik Login
   1. Klik New Build, maka akan muncul halaman Submit Build job
[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/build.png]
   1. Isikan
          o Distribution = Tambora (sesuai dengan nama kode rilis).
          o Source URL = Alamat source yang ada di bzr blankon.
          o Source Type = Bazar repository
          o Source Option = Last version
          o Original Source = Alamat source code upstream bisa dari github
            ataupun akun pendekar (file berbentuk .tar.gz)
          o Additional Original Source = menambahkan source code upstream jika
            diperlukan.
[/raw-attachment/wiki/Pemaket/PanduanPaketKhas/submit.png]
8.Klik Submit
Last_modified 7 months ago Last modified on 10/11/2016 02:09:11 PM
#### Attachments (7)
    * image00.png​ (25.4 KB) - added by syaimif 7 months ago.
    * image01.png​ (112.3 KB) - added by syaimif 7 months ago.
    * image02.png​ (81.4 KB) - added by syaimif 7 months ago.
    * irgsh.png​ (90.8 KB) - added by syaimif 7 months ago.
    * login.png​ (31.1 KB) - added by syaimif 7 months ago.
    * build.png​ (60.6 KB) - added by syaimif 7 months ago.
    * submit.png​ (31.6 KB) - added by syaimif 7 months ago.
#### 
    
 
 
 
 
 
---
 
