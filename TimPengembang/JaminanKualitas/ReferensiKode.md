# Referensi Kode Jaminan Kualitas

Skrip / Kode yang dapat digunakan
  1. Skrip ps_mem.py untuk mengetahui penggunaan memori, dapat diunduh di
      ​sini, jalankan dengan
      sudo python ps_mem.py
  1. Kode untuk mengetahui ukuran paket dalam livecd
      #dijalankan pada console livecd
      dpkg-query -W -f='${Installed-Size}\t${Package}\n' |sort -n
  1. Memeriksa paket yang terinstal, cek manifest CD, atau
      #dijalankan pada console livecd
      dpkg-query -W
  1. Memeriksa versi paket yang terinstal dan tersedia di lumbung
      #dijalankan pada console livecd
      apt-cache policy [namapaket]
  1. Memeriksa dependensi paket (paket A MEMbutuhkan paket apa saja)
      #dijalankan pada console livecd
      apt-cache depends [namapaket]
  1. Memeriksa reverse-dependensi paket (paket A DIbutuhkan paket apa saja)
      #dijalankan pada console livecd
      apt-cache rdepends [namapaket]

Last modified on 03/16/2014 08:17:48 PM


---
 
