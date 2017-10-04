# PANDUAN PEMAKETAN MALEO MENGGUNAKAN KOMPUTER LOKAL
   1. Sebelum melakukan pemaketan Maleo silahkan persiapkan alatnya. Bisa
      dibaca di Wiki atau ​Buku_Panduan_Pemaketan. Pada proses persiapan alat,
      baca panduan sampai pada pembuatan kunci.
   2. Buka terminal, buat folder Paket di home dan masuk ke folder Paket/
      dengan ketik perintah
      $mkdir Paket/
      $cd Paket/
dan kemudian ketik
$bzr branch http://dev.blankonlinux.or.id/browser/tambora/maleo
untuk mengunduh folder kode sumber dari Maleo dari bzr BlankOn.
[No_image_"#"_attached_to_Pemaket/PanduanPaketKhasMaleo]
   1. Di folder Paket, masuk ke folder maleo, ketik
      $dch -i
lalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email
anda.
     Untuk versi
    * 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis
      versi terbaru)
    * -0 adalah versi dari debian
    * blankon1 adalah versi yang digunakan blankon, apabila ada penambahan
      patch maka versi akan naik.
   1. Pada berkas format difolder debian/source isikan 3.0 (native)
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
      $bzr branch http://dev.blankonlinux.or.id/browser/tambora/maleo
untuk mengunduh kode sumber dari Maleo dari bzr BlankOn.
   1. Masuk ke folder maleo dan lakukan pemversian. Ketik
      $dch -i
lalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email
anda. Untuk versi
    * 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis
      versi terbaru)
    * -0 adalah versi dari debian
    * blankon1 adalah versi yang digunakan blankon, apabila ada penambahan
      patch maka versi akan naik.
   1. Kirim berkas maleo ke bzr
      $bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi
      bzr)
      $bzr add *
      $bzr commit -m “isikan pesan perubahan”
      $bzr push bzr+ssh://bzr@dev.blankonlinux.or.id:2222/bzr/tambora/nama-
      paket
[No_image_"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]
   1. Buka IRGSH ​http://irgsh.blankonlinux.or.id, login menggunakan akun
      aku.blankonlinux.or.id anda (hubungi system adminitrator untuk
      mendaftarkan akun anda sebagai team pemaket).
[No_image_"login.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]
Klik Login
   1. Klik New Build, maka akan muncul halaman Submit Build job
[No_image_"build.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]
6, Isikan
    * Distribution = Tambora (sesuai dengan nama kode rilis).
    * Source URL = Alamat source yang ada di bzr blankon.
    * Source Type = Bazar repository
    * Source Option = Last version
    * Original Source = Alamat source code upstream bisa dari github ataupun
      akun pendekar (file berbentuk .tar.gz)
    * Additional Original Source = menambahkan source code upstream jika
      diperlukan.
[No_image_"submit.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]
7.Klik Submit
Last_modified 7 months ago Last modified on 10/11/2016 02:20:20 PM
#### 
    
 
 
 
 
 
---
 
