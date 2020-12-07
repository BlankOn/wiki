# Penomoran Versi

### Latar Belakang

Paket-paket di BlankOn dihasilkan dari:
- Impor Upstream/Debian semisal gnome-control-center
- Impor Upstream/Debian Native semisal apt
- Impor dari source langsung dan di Debian belum dimasukkan atau belum ada versi terbaru semisal stardict-kbbi
- Impor Dari Ubuntu/PPA/MInt atau distro Debian Based semisa uck
- Khas BlankOn yang hanya di pakai BlankOn Native semisal blankon-branding
- Khas BlankOn yang bisa diunggah ke di Distro Upstream semisal manokwari
   
Secara garis besar, paket-paket ini digolongkan [menjadi 2, yaitu paket native dan paket umum](./JenisPaket.md).

   
### Konvensi

Konvensi versi paket turunan lumbung Debian yang dipaketkan ulang adalah sebagai berikut:
- Ditambahkan **revisi derivatif**, yaitu `blankon1` dengan 1 adalah angka incremental untuk setiap revisi
- Paket native: apt
  - Debian versi `1.2` -> BlankOn: `1.2blankon1`
  - Ubuntu: `1.2ubuntu3` -> BlankOn: `1.2ubuntu3+blankon1`
- Paket umum:
  - Debian versi `1.2-3` -> `BlankOn: 1.2-3blankon4`
  - Ubuntu: `1.2-3ubuntu4` -> `BlankOn: 1.2-3ubuntu4+blankon1`
     
### Suffix revisi -0 untuk paket umum/quilt (non-native)

Paket umum (quilt, alias non-native) merupakan paket yang kode sumber dan spesifikasi `debian`-nya terpisah. Setiap usaha penyesuaian spesifikasi `debian` terhadap sumber kode akan berujung ke revisi, yaitu ditandai dengan suffix `-0` (atau nilai incrementalnya). Misal jika versinya adalah `2.22.1`, maka setelah ditambahkan suffix menjadi `2.22.1-1`, baru kemudian ditempel oleh versi distribusi turunan, menjadi `2.22.1-1blankon1`

Mengapa diawali oleh suffix revisi -0 ? 

1. Memenuhi permintaan `lintian`
2. Agar memberi kesempatan Debian untuk membuat revisi pertamanya. 

Cara ini juga dipakai oleh Ubuntu misalnya pada paket gedit (`2.22.0-0ubuntu1`). Kalau dilihat di situ, nilai debian_revision adalah 0. Sedangkan [menurut protokol](https://www.debian.org/doc/debian-policy/ch-controlfields.html), nilai debian_revision dimulai dari angka 1. *"It is conventional to restart the debian_revision at 1 each time the upstream_version is increased."*

Bila paket turunan dari lumbung Debian tersebut memiliki revisi `-1`, maka di BlankOn akan menyesuaikan menjadi `2.22.0-1blankon1`. Bila BlankOn memiliki spesifikasi `debian` sendiri untuk paket tersebut dan ada tambalan/revisi, maka yang naik adalah revisi derivatifnya, menjadi `2.22.0-1blankon2`
Namun bila paket tersebut tidak ada di Debian dan merupakan paket khas yang dipaketkan di BlankOn, maka

Nilai X pada +blankonX dan -0+blankonX selalu dimulai dari angka 1 bilamana versi di bagian depannya mengalami peningkatan. 

### Contoh Peningkatan Versi

- Versi awal: `hai-0.0.1`
  - `hai-0.0.1-0blankon1`
  - `hai-0.0.1-0blankon2` (Peningkatan versi dari sudut pandang pemeliharaan paket)
  - `hai-0.0.1-1blankon1` (Kenaikan revisi di depan, maka revisi derivatif di blankon direset ke 1)
  - `hai-0.0.1-1blankon2` (Peningkatan revisi dari sudut pandang pemeliharaan paket)
  - `hai-0.0.2-0blankon1` (Kenaikan versi di depan, maka revisi menyesuaikan hulu dan revisi derivatif direset ke 1)

### Penomoran versi untuk pembaruan pada lumbung updates dan security

Penomoran versi untuk pembaruan paket pada `updates` dan `security` ditambahkan dengan suffix nama rilis. Misal untuk rilis Tambora suffixnya `+tambora1`, versi paket menjadi `nama-paket_1.0-1blankon1+tambora1`.

Hal ini untuk mencegah versi bentrok jika paket yang sama juga ingin diperbarui untuk rilis sebelumnya.

### Referensi: 

- https://www.debian.org/doc/debian-policy/ch-controlfields.html
- https://aftian.wordpress.com/2014/03/08/desain-pengembangan-blankon-tidak-resmi-5-penomoran-versi-paket-debian/
