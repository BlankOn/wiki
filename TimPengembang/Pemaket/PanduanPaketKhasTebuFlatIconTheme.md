# PANDUAN PEMAKETAN TEBU FLAT ICON THEME MENGGUNAKAN KOMPUTER LOKAL
   1. Sebelum melakukan pemaketan Tebu Flat Icon Theme silahkan persiapkan
      alatnya. Bisa dibaca di Wiki atau ​Buku_Panduan_Pemaketan. Pada proses
      persiapan alat, baca panduan sampai pada pembuatan kunci.
   2. Unduh source code upstream tebu flat icon di github yang sudah dirilis
      oleh team kesenian. Masuk ke ​https://github.com/BlankOn/Tebu-flat =>
      Klik Release
[No_image_"image01.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]
Pada halaman release, pilih versi yang ingin dipaketkan dan unduh berkas
sourcenya dengan ektensi .tar.gz
   1. Buka terminal, buat folder Paket di home dan masuk ke folder Paket/
      dengan ketik perintah
      $mkdir Paket/
      $cd Paket/
dan kemudian ketik
$bzr branch http://dev.blankonlinux.or.id/browser/tambora/tebu-flat-icon-theme
untuk mengunduh folder debian dari tebu-flat-icon-theme dari bzr BlankOn.
[No_image_"image00.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]
   1. Ektraks berkas .tar.gz dari Tebu flat dan masukkan ke folder tebu-flat-
      icon-theme
   2. Di folder Paket, masuk ke folder tebu-flat-icon-theme, ketik
      $dch -i
lalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email
anda.
   1. Untuk versi
          o 1.33 adalah versi upstream (akan berubah versi setiap upstream
            merilis versi terbaru)
          o -0 adalah versi dari debian
          o blankon1 adalah versi yang digunakan blankon, apabila ada
            penambahan patch maka versi akan naik.
   2. Pada berkas format difolder debian/source isikan 3.0 (native)
   3. Lakukan
      $debuild -S
   4. Ketik
      $cd ..
      $sudo pbuilder build namapaket.dsc
   5. Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/
      pbuilder/result/
   6. Selanjutnya bisa dilanjutkan ke IRSGH.
PEMAKETAN DI IRGSH
   1. Ketik
      $bzr branch http://dev.blankonlinux.or.id/browser/tambora/tebu-flat-icon-
      theme
untuk mengunduh kode sumber dari tebu-flat-icon-theme dari bzr BlankOn.
   1. Unduh source code upstream tebu icon di github yang sudah dirilis oleh
      team kesenian. Masuk ke ​https://github.com/BlankOn/Tebu-flat => Klik
      Release dan unduh di halaman release. Lakukan ektraksi dan masukkan
      direktori tebu-icon-theme
   2. Masuk ke folder tebu-flat-icon-theme dan lakukan pemversian. Ketik
      $dch -i
lalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email
anda. Untuk versi
    * 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis
      versi terbaru)
    * -0 adalah versi dari debian
    * blankon1 adalah versi yang digunakan blankon, apabila ada penambahan
      patch maka versi akan naik.
   1. Kirim berkas tebu-flat-icon-theme ke bzr
      $bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi
      bzr)
      $bzr add *
      $bzr commit -m “isikan pesan perubahan”
      $bzr push bzr+ssh://bzr@dev.blankonlinux.or.id:2222/bzr/tambora/nama-
      paket
[No_image_"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]
   1. Buka IRGSH ​http://irgsh.blankonlinux.or.id, login menggunakan akun
      aku.blankonlinux.or.id anda (hubungi system adminitrator untuk
      mendaftarkan akun anda sebagai team pemaket).
[No_image_"login.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]
Klik Login
   1. Klik New Build, maka akan muncul halaman Submit Build job
[No_image_"build.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]
   1. Isikan
          o Distribution = Tambora (sesuai dengan nama kode rilis).
          o Source URL = Alamat source yang ada di bzr blankon.
          o Source Type = Bazar repository
          o Source Option = Last version
          o Original Source = Alamat source code upstream bisa dari github
            ataupun akun pendekar (file berbentuk .tar.gz)
          o Additional Original Source = menambahkan source code upstream jika
            diperlukan.
[No_image_"submit.png"_attached_to_Pemaket/PanduanPaketKhasTebuFlatIconTheme]
8.Klik Submit
Last_modified 7 months ago Last modified on 10/11/2016 02:17:25 PM
#### 
    
 
 
 
 
 
---
 
