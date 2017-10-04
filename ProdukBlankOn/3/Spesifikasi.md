# Spesifikasi BlankOn 3 Lontara

  + [Spesifikasi ArtworkLontara](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/ArtworkLontara)
  + [Spesifikasi BlankOn-Theme-Editor](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/BlankOn-Theme-Editor)
  + [Spesifikasi Emulator-AddOn](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/Emulator-AddOn)
  + [Spesifikasi PaketSekolah](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/PaketSekolah)
  + [Spesifikasi TakselBlankOn](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/TakselBlankOn)
  + [Spesifikasi Warnet](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/Warnet)
  + [Spesifikasi WikipediaOffline](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/WikipediaOffline)
  + [Spesifikasi XFCE](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/XFCE)
  + [Spesifikasi XFCE/AlihBahasa](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/XFCE/AlihBahasa)
  + [Spesifikasi XFCE/Aplikasi](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/XFCE/Aplikasi)
  + [Spesifikasi gnome-fleksibel](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/gnome-fleksibel)
  + [Spesifikasi gnome-minimalis](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/gnome-minimalis)
  + [Spesifikasi warnet](http://dev.blankonlinux.or.id/wiki/3/Spesifikasi/warnet)


## PaketSekolah

Silakan kunjungi halaman Launchpad di bawah ini untuk melihat status dokumen ini.
    * Halaman spesifikasi di Launchpad: ​Spek_PaketSekolah
    * Penanggung jawab: Antonius Fran Setiawan
    * Pembuat usul: MuhammadTakdir

**Ringkasan**
Tersedianya paket-paket pendidikan untuk sekolah-sekolah di Indonesia untuk memudahkan pemberian materi pada bidang studi tertentu

**Latar Belakang**
Sistem pembelajaran IT di Indonesia sangat unik karena tidak beda dengan sistem pembelajaran di pendidikan luar sekolah, sementara penerapan pelajaran IT
tematik belum dikembangkan. Hingga beberapa materi tematik seperti Fisika dan Kimia yang bisa disisipi penggunaan komputer untuk mata pelajaran tersebut. Kekurangan materi dalam buku ajar dan sistem pembelajaran karena belum dikenalkannya materi opensource di dunia pendidikan Indonesia, sekaligus mengenalkan BlankOn sebagai sistem operasi buatan bangsa Indonesia

**Rancangan & Implementasi**
    * Berkoordinasi dengan tim Edubuntu Indonesia
    * Berkoordinasi dengan lembaga dan komunitas pendidik IT di Indonesia
    * Mengumpulkan materi pelajaran yang ada dan membuatnya dalam bentuk wiki
    * Mengumpulkan aplikasi-aplikasi pelajaran yang sesuai dengan kurikulum indonesia
    * Membuat paket debian nya di pabrik dan memasangnya di repo blankon (1)
    * Menggabungkan semuanya dalam sebuah paket (blankon-sekolah.deb <-- installer)

**Permasalahan**
    * Belum adanya optimalisasi aplikasi pendidikan di edubuntu untuk pengajaran berbasis kurikulum
    * Belum adanya modul ajar sesuai dengan KTSP
    * Peluang pemanfaatan pengenalan huruf dan angka serta nama obyek di kelas pre-school dan taman kanak-kanak (GCompris)

**Agenda Wacana dan Diskusi**
    * drop down 1 (AinulHakim)
          o Gcompris bahasa indonesia (paket di unstable debian)
          o KStars
          o Kig
          o Atomix
    * Perlu dicek & ricek juga apakah aplikasi edukasi tersebut sudah memiliki konten khas untuk pengguna di Indonesia. Seperti gambar mata uang Rupiah, gambar monas untuk Gcompris dsb. (terakhir saya lihat masih belum ada tuh). Jika belum ada sepertinya kita juga perlu membuatnya, bukan begitu? (AndyApdhani)
    * Usul dan saran masuk disini
          o Menggabungkan semuanya dalam sebuah paket (blankon-sekolah.deb <-- installer) bukan gaya Ubuntu. Sebaiknya membuat paket kosong
            blankon-sekolah yang dependensinya ke berbagai paket aplikasi relevan. Alternatifnya adalah membuat tasksel blankon-sekolah.
            (AndikaTriwidada)
          o Sesuai usulan Pak Rus dan Mdamt di milis, untuk SD perlu Gpaint; untuk SMP perlu Inskcape; untuk SMK Akuntansi perlu gnucash;
            Scribus (publishing), OpenOffice (editor HTML); untuk SMA Anjuta (AndikaTriwidada)






---
 



