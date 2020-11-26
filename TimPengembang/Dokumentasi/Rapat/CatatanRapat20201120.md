# Catatan BlankOngkow 20201120

## Catatan dari Masceng;
- Perbedaan antara tujuan proyek dan tujuan produk walau saling berkaitan.
  > Tujuan proyek antara lain untuk mempelajari sesuatu yang sifatnya universal. Tujuan proyek ini berlaku untuk semua individu, yaitu belajar menghasilkan produk secara bersama-sama.
- Perjelas visi produk.
  > Sebenarnya pengembang BlankOn ingin membuat apa, sih?
- Persempit target pengguna.

- Dalam pengembang perangkat lunak perlu mempertimbangkan;
  - Fokus pada satu hal terlebih dahulu
  - Perangkat lunak tersebut untuk kita gunakan sendiri dulu.
    > Pengembang perangkat lunak lebih mungkin berkontribusi balik (berkontribusi setelah memakainya)
    
- Setelah rilis Verbeek dengan target pengguna yang sempit, rilis berikutnya kita belajar lagi memperluas target pengguna (perlebar variant)
  >  Dampak keputusan (misal kalau target penggunanya adalah pengembang perangkat lunak), maka kita perlu menentukan;
     - Paket-paket khas pilihan
     - Arah kampanye humas

- Untuk memperjelas target Verbeek, perlu ditentukan;
  - menggunakan Desktop apa?
  - menggunakan Bootloader apa?
  - pilihan-pilihan esential lainnya sesuai target pengguna

- User growth measurement, sebagai indikator apakah produk kita sudah sesuai. Jadi, tidak ada lagi yang namanya habis rilis terus lepas tangan.
    
- Geser mindset "distro adalah bonus" menjadi "distro adalah produk kita, produk kita stabil dan banyak yang menggunakannya, termasuk kita sendiri."
 
## Agenda rapat
 - Menetapkan visi produk
 - Target Verbeek

###  Contoh Installer
- debian-installer
- https://github.com/calamares/calamares
- elementaryOS
- ubiquity (Ubuntu)
- PopOS
    
### Kernel:
        Ikut debian, kalau ga stabil di perangkat yang kita uji, baru coba maju mundurin versi.
### DE [X]
- Gnome (X11), bawa ekstensi pendukung lingkungan kerja [X]
- Ekstensi network manager:
  - pptp
  - l2tp
  - openvpn
### App standar:
- libreoffice suites [X]
- multimedia (video, audio)[X]
- Kalender: ?
- Surel: geary vs thunderbird
### Peramban
- Chromium [X]
### Penyunting teks:
- vim terkonfigurasi dengan plugin [X]
### Laporboi desktop
### CLI stuff:
- git
- unix tools
- unix tools extra: jq
- net tools: curl, nmap, netcat
### Lain-lain:
- gi gui: https://github.com/git-cola/git-cola
### Linux dev:
- build-essential

## Pemeliharaan paket:
- BlankOn:
  - irgsh-cli
- IDE:
  - Android Studio
  - Arduino IDE
  - VScode
- Bahasa-bahasa pemrograman terbaru
  - nodejs/npm
  - golang
  - ruby
  - python
- Pustaka:
  - tensorflow
- Cloud native
  - docker
  - k8s
  - envoy

## Lainnya:
- Pelajari lagi lisensi untuk dipaketkan ke ISO
- ISO mengandung lumbung lokal
- Rilis survey untuk target pengguna:
  - Mereka ingin ada apa saja di distribusi linuxnya?
  - Sehari-hari menggunakan perangkat lunak apa saja?
  - Pekerjaannya apa?

