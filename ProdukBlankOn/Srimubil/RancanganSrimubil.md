# Rancangan BlankOn Mobile

### Ringkasan
BlankOn Mobile (jds: Srimubil) adalah varian BlankOn yang ditargetkan untuk
diinstal pada komputer-komputer bergerak dan berukuran lebih kecil dari laptop.
Pengguna BlankOn Mobile selalu terhubung ke Internet di mana saja.
### Latar Belakang
Desktop BlankOn biasa tidak cocok digunakan untuk komputer-komputer dengan
ukuran layar kecil. Banyak aplikasi menampilkan dialog dan layar aplikasi yang
ukurannya lebih besar dari ukuran resolusi layar.
### Studi Kasus
  * Sitti mengunjungi sebuah kafe dan menunggu temannya. Ia menyalakan
      netbooknya. WiFi? ternyata tidak tersedia di cafe tersebut, namun tidak
      masalah karena Sitti kemudian menyalakan akun 3G-nya dan terhubung ke
      Internet. Setelah masuk jaringan, ia memperbarui status Facebook dan
      Twitternya. Kemudian ia membaca surat pada akun Gmail sambil mendengarkan
      radio Internet.
  * Razaq duduk di sofa dan ingin tahu apakah filem yang sedang diputar di
      bioskop dekat rumahnya bagus atau tidak. Ia menyalakan netbooknya dan
      mulai meramban Internet dan mencari tahu informasi tentang filem
      tersebut. Setelah tertarik, ia masuk ke program chat dan mengajak teman-
      temannya untuk menonton filem malam itu.
  * Zaki adalah seorang penulis novel dan sekarang sedang ada di taman untuk
      mencari inspirasi. Ia menyalakan netbooknya dan mulai menulis bab
      berikutnya dengan Google Docs. Tiba-tiba ada SMS masuk dan ternyata Zaki
      harus segera pulang sebentar karena adiknya pulang dan tidak membawa
      kunci pintu. Ia menutup netbooknya dan kembali pulang. Setelah itu ia
      kembali ke taman dan membuka netbooknya yang langsung siap kembali ke
      layar sebelum ia pulang tadi.

### Rancangan & Implementasi
Konsep implementasi bisa dilihat di halaman Srimubil

#### Pilihan aplikasi
  * mutter (dari moblin.org) sebagai shell utama.
  * Fennec sebagai peramban web
  * Empathy sebagai program chat
  * Banshee sebagai pemutar media
  * Dates untuk program kalender
  * Anjal (dari moblin.org) sebagai program email
  * Lain2: Novel Moonlight, Adobe Flash

#### Boot kilat
  * Kernel dan skrip inisialisasi sistem perlu dimodifikasi untuk mempercepat
      proses boot

#### Siap sekejap
  * Dalam sistem tidak dikenal logout, login, tidur dan hibernasi. Sistem
      otomatis ditidurkan saat tutup netbook ditutup dan kembali hidup sekejap
      saat tutup dibuka. Jika perlu menghemat baterai, maka sistem dimatikan
      dengan normal.
  * Untuk mematikan sistem, cukup menekan tombol daya beberapa saat.

### Permasalahan
  * Banyak program (misalnya mutter, Fennec dan Anjal) yang belum masuk repo
      Ubuntu, tapi mungkin sudah ada di PPA
  * Tema mutter dan desktop mungkin berbeda dengan BlankOn biasa, jadi perlu
      ada tim artis yang terlibat
  * Cara penggunaan juga berbeda dengan BlankOn biasa, jadi perlu ada tim
      dokumentasi ikut terlibat menyusun buku panduannya
  * Program-program moblin belum dialihbahasakan ke Bahasa Indonesia.

### Batasan
Target awal BlankOn Mobile adalah netbook-netbook dengan kartu grafis Intel dan
NVidia.

### Agenda Wacana dan Diskusi
Usul dan saran masuk disini
  * Perlu OpenOffice?.org?
          (OpenOffice?.org saya rasa perlu banget, beberapa teman
          yang memakai BlankOn Minimalist kebanyakan menginstall
          OpenOffice?.Org. Karna mereka tidak terbiasa dengan
          aplikasi perkantoran lainnya.)
  * Aplikasi lain mana yang perlu?

Last modified on 08/17/2009 10:12:58 AM

---
 
