# Prosedur Pemaketan Di Pabrik
## Ketentuan
   1. Anda sudah memahami Prosedur_Pembuatan_Paket.
   2. Anda sudah memasang Mesin_Kompilasi_Pribadi di komputer Anda.
## Prosedur Utama
   1. Buat tag paket yang siap-bangun
   2. Daftarkan tag tersebut di alamat pendaftaran
   3. Tunggu sebentar dua bentar. Bila tidak ada perkembangan dalam 3 jam,
      kirim surat ke mdamt at gnome dot org.
Detil proses masing-masing tahapan dibahas di bawah ini.
### Pembuatan tag
Pembuatan tag pada prinsipnya adalah menyalin kode sumber ke tempat lain yang
dikhususkan untuk tag. Salinan tersebut sudah dimodifikasi sehingga mengandung
nomor versi terbaru.
Lakukan tahapan berikut pada cabang utama:
   1. Pastikan Anda dalam direktori paling atas pada cabang utama.
   2. Sunting debian/changelog dengan perintah dch -i. Naikkan nomor versi
      paket di situ.
   3. Simpan perubahan ke cabang dengan bzr commit
   4. Buat cabang baru dengan ketentuan: nama-paket_nomor-versi. Misalnya untuk
      blankon-meta versi 0.0.1-0blankon2 maka nama cabangnya adalah blankon-
      meta_0.0.1-0blankon2. Nama baru ini akan menjadi nama tagnya. Masih
      dengan contoh blankon-meta maka perintahnya adalah: bzr tag blankon-
      meta_0.0.1-0blankon2
   5. Simpan perubahan ke gudang kode dengan bzr push
   6. Pembuatan tag selesai.
### Pendaftaran tag
   1. Masuk ke direktori yang baru di luar direktori utama paket. Misalnya /
      tmp.
   2. Ambil cabang paket-siap-bangun di: ​http://bazaar.launchpad.net/~blankon-
      pemaket/blankon/paket-siap-bangun. Caranya bzr co http://
      bazaar.launchpad.net/~blankon-pemaket/blankon/paket-siap-bangun.
   3. Sunting berkas daftar-paket.txt yang ada dalam direktori paket-siap-
      bangun. Isi dengan kode dengan ketentuan bzr<spasi>nama-tag<spasi>url-
      cabang-utama[<spasi>url-berkas-asli.orig.tar.gz]. Misalnya untuk paket
      blankon-meta di atas kita isi dengan:
      bzr blankon-meta_0.0.1-0blankon2 http://bazaar.launchpad.net/~blankon-
      pemaket/blankon/blankon-meta
   4. Simpan dan lakukan bzr commit
   5. Simpan perubahan ke gudang kode dengan bzr push, misalnya
      bzr push sftp://<akun-anda>@bazaar.launchpad.net/~blankon-pemaket/
      blankon/paket-siap-bangun
   6. Pendaftaran selesai.
KategoriInfra
Last modified on 06/17/2008 12:29:05 AM
#### 
    
 
 
 
 
 
---
 
