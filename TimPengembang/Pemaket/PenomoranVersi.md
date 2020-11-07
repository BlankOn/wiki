# Penomoran Versi

### Latar Belakang

Paket-paket di BlankOn dihasilkan dari:
- Impor Upstream/Debian semisal gnome-control-center
- Impor Upstream/Debian Native semisal apt
- Impor dari source langsung dan di Debian belum dimasukkan atau belum ada versi terbaru semisal stardict-kbbi
- Impor Dari Ubuntu/PPA/MInt atau distro Debian Based semisa uck
- Khas BlankOn yang hanya di pakai BlankOn Native semisal blankon-branding
- Khas BlankOn yang bisa diunggah ke di Distro Upstream semisal manokwari
   
Masing-masing jenis juga bisa digolongkan menjadi dua, yaitu
   1. Paket Khusus, adalah paket yang dibuat khusus untuk sebuah distribusi. Misalnya APT pada Debian yang kemudian diturunkan ke Ubuntu dan BlankOn.
   2. Paket Umum, adalah paket yang dimasukkan ke sebuah distribusi namun tidak khusus dibuat untuk distribusi tersebut, contoh Daluang.
   
### Konvensi

Dengan demikian, ada 4 buah kasus yang mungkin terjadi. Berikut ini adalah
konvensi pembuatan versi untuk setiap kasus yang ada.
- Paket Turunan dan Khusus Contoh: apt
  - Debian versi `1.2` -> BlankOn: `1.2blankon3`
  - Ubuntu: `1.2ubuntu3` -> BlankOn: `1.2ubuntu3+blankon4`
- Paket Impor dan Umum:
  - Debian versi `1.2-3` -> `BlankOn: 1.2-3blankon4`
  - Ubuntu: `1.2-3ubuntu4` -> `BlankOn: 1.2-3ubuntu4+blankon5`
- Paket Khas dan Khusus Contoh: blankon-docs
  - BlankOn: `4.0` -> BlankOn: `4.0`. Gunakan versi yang ada apa adanya. Tidak ada penambahan apa-apa.
- Paket Khas dan Umum Contoh: daluang
  - Upstream: `0.3` -> BlankOn: `0.3-0blankon1`
     
### Suffix -0 di Debian

Paket dari Debian perlu ditambahkan `-0`. Misal jika versinya adalah `2.22.1`, maka setelah ditambahkan suffix menjadi `2.22.1-0`, baru kemudian ditempel oleh versi distribusi turunan, menjadi `2.22.1-0blankon1`

Mengapa diawali oleh -0 ? Agar memberi kesempatan Debian untuk membuat revisi pertamanya. Cara ini juga dipakai oleh Ubuntu misalnya pada paket gedit (`2.22.1-0ubuntu1`). Kalau dilihat di situ, nilai debian_revision adalah 0. Sedangkan [menurut protokol](https://www.debian.org/doc/debian-policy/ch-controlfields.html), nilai debian_revision dimulai dari angka 1. *"It is conventional to restart the debian_revision at 1 each time the upstream_version is increased."*

Nilai X pada +blankonX dan -0+blankonX selalu dimulai dari angka 1 bilamana versi di bagian depannya mengalami peningkatan. 

### Contoh Peningkatan Verssi

- Versi awal: `hai-0.0.1`
  - `hai-0.0.1-0blankon1`
  - `hai-0.0.1-0blankon2` (Peningkatan versi dari sudut pandang pemeliharaan paket)
  - `hai-0.0.1-2blankon1` (Kenaikan revisi di depan, maka versi di blankon direset ke 1)
  - `hai-0.0.1-2blankon2` (Peningkatan versi dari sudut pandang pemeliharaan paket)
  - `hai-0.0.2-0blankon1` (Kenaikan versi di depan, maka versi di blankon direset ke 1)
  
- Versi awal: `halo-0.0.1`
  - `hai-0.0.1-0ubuntu1+blankon1`
  - `hai-0.0.1-0ubuntu1+blankon2` (Peningkatan versi dari sudut pandang pemeliharaan paket)
  - `hai-0.0.2-0ubuntu1+blankon1` (Kenaikan versi di depan, maka versi di ubuntu dan blankon direset ke 1)
  - `hai-0.0.2-0ubuntu1+blankon2` (Peningkatan versi dari sudut pandang pemeliharaan paket)
  - `hai-0.0.2-0ubuntu2+blankon1` (Kenaikan revisi di depan, maka versi di blankon direset ke 1)

### Penomoran versi untuk pembaruan pada lumbung updates dan security

Penomoran versi untuk pembaruan paket pada `updates` dan `security` ditambahkan dengan suffix nama rilis. Misal untuk rilis Tambora suffixnya `+tambora1`, versi paket menjadi `nama-paket_1.0-1blankon1+tambora1`.

Hal ini untuk mencegah versi bentrok jika paket yang sama juga ingin diperbarui untuk rilis sebelumnya.

### Referensi: 

- https://www.debian.org/doc/debian-policy/ch-controlfields.html
- https://aftian.wordpress.com/2014/03/08/desain-pengembangan-blankon-tidak-resmi-5-penomoran-versi-paket-debian/
