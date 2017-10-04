# Implementasi Layanan Torrent
### Gambaran Umum
Untuk melayani distribusi melalui protokol bittorrent, diperlukan beberapa
tahap
    * pembuatan file torrent (dilakukan oleh script pembuat ISO secara
      otomatis)
    * pengaktifan tracker torrent
    * penyediaan seed
### Membuat File Torrent
btmakemetafile <trackerurl> <file> --comment "Tulisan pesan-pesan disini"
### Tracker Torrent
Tracker berguna untuk tempat koordinasi. Tracker mencatat IP mana saja yang
telah memiliki file ISO secara lengkap, dan IP mana saja yang sedang melakukan
transfer data.
Tracker diaktifkan dengan perintah (menggunakan client bittornado):
bttrack --dfile /path/ke/berkas/log --port 6969 --allow_get 1 --allowed_dir /
path/ke/dir/torrent/
### Seed
Mesin yang baru saja memulai mengambil file dengan protokol torrent akan
menghubungi tracker untuk memperoleh daftar IP mesin yang telah memiliki data,
dan meminta bagian-bagian file dari mesin-mesin tersebut. Untuk pertama kali,
harus ada satu mesin yang telah memilik data lengkap untuk menjadi seed awal.
Selanjutnya mesin-mesin lain yang telah mengambil data secara lengkap akan
menjadi pendukung seed murni.
Dengan aplikasi bittorrent mode teks, seed diaktifkan dengan perintah:
cd /path/ke/dir/torrent
btlaunchmanycurses .
Berkas ISO yang akan disebarkan mesti terletak pada current directory tempat
btlaunchmanycurses. Bisa juga berkas ini berupa link (bukan symlink) ke lokasi
berkas ISO yang disediakan melalui layanan http, ftp, maupun rsync.
Mesin lain yang telah memiliki ISO tersebut akan menjadi seeder juga setelah
menjalankan perintah di atas.
KategoriInfra
Last modified on 10/08/2008 06:49:31 PM
#### 
    
 
 
 
 
 
---
 
