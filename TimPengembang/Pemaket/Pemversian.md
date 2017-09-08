# Pemversian
### LATAR BELAKANG
Pada dasarnya ada 2 jenis paket yang masuk ke repositori BlankOn
   1. Paket yang diturunkan dari distribusi lain (Turunan)
   2. Paket yang benar2 baru ada cuma di BlankOn (Khas)
   3. Paket yang benar2 baru yang diambil dari hulu
Masing-masing jenis juga bisa digolongkan menjadi dua, yaitu
   1. Paket Khusus
   2. Paket Umum
Paket Khusus adalah paket yang dibuat khusus untuk sebuah distribusi. Misalnya
APT pada Debian yang kemudian diturunkan ke Ubuntu dan BlankOn.
Paket Umum adalah paket yang dimasukkan ke sebuah distribusi namun tidak khusus
dibuat untuk distribusi tersebut, contoh Daluang.
### KONVENSI
Dengan demikian, ada 4 buah kasus yang mungkin terjadi. Berikut ini adalah
konvensi pembuatan versi untuk setiap kasus yang ada.
   1. Paket Turunan dan Khusus Contoh: apt
     Debian: 1.2
     Ubuntu: 1.2ubuntu3
     BlankOn: 1.2ubuntu3+blankon4
     => Tambah akhiran +blankonX Jika Mengambil dari ubuntu
     Debian: 1.2
     BlankOn: 1.2blankon1
     => Tambah akhiran blankonX Jika Mengambil dari debian
   1. Paket Impor dan Umum:
     Debian: 1.2-3
     Ubuntu: 1.2-3ubuntu4
     BlankOn: 1.2-3ubuntu4+blankon5
     => Tambah akhiran +blankonX JIka mengambil dari ubuntu
     Debian: 1.2-3
     BlankOn: 1.2-3blankon1
     => Tambah akhiran -YblankonX JIka mengambil dari debian
     Hulu: 1.2
     BlankOn: 1.2-0blankon1
     => Tambah akhiran -0blankonX JIka mengambil dari hulu
   1. Paket Khas dan Khusus Contoh: blankon-docs
     BlankOn: 4.0
     => Gunakan versi yang ada apa adanya. Tidak ada penambahan apa-apa.
   1. Paket Khas dan Umum Contoh: daluang
     Upstream: 0.3
     BlankOn: 0.3-0blankon1
     => Tambah akhiran -0blankonX
     Mengapa diawali oleh -0 ? Agar memberi kesempatan Debian untuk
     membuat revisi pertamanya. Cara ini juga dipakai oleh Ubuntu misalnya
     pada paket gedit.
     Versi pada ubuntu: 2.22.1-0ubuntu1
     Kalau dilihat di situ, nilai debian_revision adalah 0. Sedangkan
     menurut UUD, nilai debian_revision dimulai dari angka 1.
     "It is conventional to restart the debian_revision at 1 each time the
     upstream_version is increased."
   1. Nilai X pada +blankonX dan -0+blankonX selalu dimulai dari angka 1 andai
      versi di bagian depannya mengalami peningkatan.
Last modified on 05/23/2011 09:10:20 PM
#### 
    
 
 
 
 
 
---
 
