# Bab 11 Pengenalan Antarmuka Teks
**Panduan BlankOn Linux 7**


Antarmuka dasar untuk pengoperasian sistem operasi Linux sebenarnya adalah
antarmuka berbasis teks, atau sering disebut Command Line. Antarmuka grafis
atau desktop yang ada di dalam Linux sebenarnya hanyalah alat bantu untuk
pengoperasian bagi mereka yang sudah biasa bekerja dengan Graphical User
Interface (GUI) yang terdapat di beberapa sistem operasi modern. Ini mirip
dengan piranti lunak Microsoft Windows sebelum versi 95 yang hanya merupakan
alat bantu pengoprasian berbasis grafis untuk DOS.
Untuk memberikan suatu perintah pada antarmuka teks, para pengguna harus
mengetik nama perintah yang akan dijalankan beserta opsi-opsi/parameter-nya,
kemudian menekan tombol Enter untuk mengeksekusi perintah tersebut. Tidak
seperti antarmuka grafis, penggunaan mouse secara umum tidak diperlukan karena
semua kontrol hanya dilakukan melalui papan ketik.
Tidak benar jika penggunaan antarmuka teks tidak bisa melakukan produktivitas.
Anda masih bisa berproduktivitas dengan berbagai aplikasi berbasis teks yang
tersedia dan siap Anda gunakan. Bahkan untuk para administrator, penggunaan
antarmuka teks sangat disarankan ketimbang antarmuka grafis karena memakan
sumberdaya CPU dan RAM yang lebih kecil, sehingga tidak menganggu kinerja
komputer pada saat melakukan suatu tugas administrasi.
Pada bab ini, dijelaskan mengenai dasar pengoprasian antarmuka teks yang ada
pada BlankOn Linux. Sasaran pembaca tidak hanya bagi Anda yang power user,
melainkan juga para pemula/newbie yang ingin mempelajari Linux lebih lanjut.
### Membuka Antarmuka Teks
Ada dua jenis antarmuka teks yang bisa Anda buka, yaitu terminal dan virtual
console. Terminal merupakan antarmuka teks yang berjalan di dalam desktop dan
berupa jendela aplikasi, sedangkan virtual console merupakan antarmuka teks
yang berjalan secara mandiri di luar desktop.
#### Membuka Terminal Console
Untuk membuka terminal, klik menu Aplikasi > Aksesoris > Terminal pada BlankOn,
kemudian jendela terminal akan muncul di dalam desktop.
[/raw-attachment/wiki/Dokumentasi/Panduan/7/Bab11/gnome-terminal.png]
Terminal
Jika Anda ingin membuka sesi kerja yang baru, Anda bisa membuat tab baru
seperti layaknya fitur tabbed browsing pada peramban web dengan mengklik menu
File > Buka Tab, atau Anda bisa tekan tombol Shift+Ctrl+T pada keyboard.
Anda bisa mengkostumisasi penampilan terminal sesuai dengan keinginan Anda
melalui jendela pengaturan yang bisa Anda buka melalui menu Edit > Preferensi.
Jika ingin membuat terminal dalam mode layar penuh, Anda bisa klik menu Lihat >
Layar Penuh atau Anda bisa tekan tombol F11 pada keyboard.
#### Membuka Virtual Console
Linux telah menyediakan enam sesi antarmuka teks yang bisa Anda buka dengan
cara menekan tombol Ctrl+Alt+F1, Ctrl+Alt+F2 sampai Ctrl+Alt+F6.
Berbeda dengan menggunakan terminal, Anda harus melakukan login terlebih dahulu
sebelum bekerja dengan antarmuka teks. Ketik id pengguna kemudian tekan enter
lalu masukkan sandi (password tidak akan ditampilkan pada layar) Anda dan tekan
enter sekali lagi. Berbeda dengan terminal, Anda tidak bisa melakukan
kustomisasi penampilan agar lebih menarik. Bekerja disini layaknya bekerja
dengan sistem operasi DOS (Disk Operating Systems).
Untuk kembali ke desktop, Anda bisa tekan tombol Ctrl+Alt+F7 sampai
Ctrl+Alt+F12. Bergantung dari sesi desktop yang digunakan (Secara default
menggunakan Ctrl+Alt+F7 jika Anda tidak memanfaatkan fitur pindah pengguna
untuk mengaktifkan lebih dari satu sesi desktop).
### Pengenalan Antarmuka Teks
Setelah Anda membuka terminal atau login di dalam virtual console, Anda akan
diminta untuk memasukkan perintah yang ingin Anda jalankan. Tempat Anda
mengetik berada pada kursor/penanda yang berkedip-kedip. Pada bagian kiri
kursor tersebut, Anda akan melihat teks seperti berikut :
blankon@blankon:~$
  * Teks tersebut memiliki berbagai informasi sebagai berikut :
  * Teks “blankon” sebelum tanda at (@) merupakan nama id pengguna yang login
      menggunakan antarmuka teks,
  * Teks “blankon” setelah tanda at (@) merupakan nama komputer yang
      digunakan pada saat bekerja,
  * Teks “~” setelah tanda titik dua (:) menunjukan folder yang saat ini
      dibuka. Folder “~” berarti sedang membuka folder rumah/home.
  * Tanda “$” pada bagian akhir menunjukkan Anda bekerja di level pengguna
      biasa. Jika Anda bekerja dalam mode administratif, maka tandanya akan
      berubah menjadi “#”.
Untuk menjalankan suatu perintah, Anda bisa ketik perintah tersebut lalu
menekan tombol enter. Sebagai contoh, untuk menampilkan isi suatu folder/
direktori, Anda bisa ketik perintah “ls” lalu tekan tombol Enter, maka Anda
akan melihat antarmuka teks seperti berikut :
blankon@blankon:~/Contoh$ ls↵
about-jubing.txt           	oo-sampul-dan-stiker-cd-dvd.odg
buku-panduan.tar.bz2       	oo-selamat-datang.odt
Bungong_Jeumpa.ogg         	oo-tentang-blankon.odt
oo-jadwal-pembayaran.ods        sampul_stiker_cd.tar.bz2
oo-maxwell.odt             	souvenir-src.tar.bz2
oo-presentasi-blankon.odp  	Studi Kasus - Daftar Pengguna Blankon.pdf
blankon@blankon:~/Contoh$
Untuk menjalankan perintah yang bersifat administratif, Anda bisa mengetik
perintah “sudo” sebelum perintah yang ingin Anda jalankan. Anda harus memiliki
wewenang untuk menggunakan sudo agar perintah bisa berjalan. Misalnya, jika
ingin menghapus berkas “nasi.txt” pada folder /opt (Dalam hal ini, Anda tidak
memiliki hak untuk mengelola folder /opt), Anda bisa ketik perintah “sudo rm /
opt/nasi.txt”.
blankon@blankon:~$ sudo rm /opt/nasi.txt ↵
[sudo] password for blankon:
blankon@blankon:~$
     INFO: Walaupun menyediakan id pengguna khusus untuk menjalankan
     perintah bersifat administratif (yaitu root), secara default Anda
     tidak bisa menggunakannya untuk login. Anda bisa login ke root dengan
     cara mengetik perintah “sudo su -”.
blankon@blankon:~$ sudo su -↵
[sudo] password for blankon:
root@blankon:~#
### Perintah-perintah dalam Antarmuka Teks
Berikut adalah berbagai penjelasan dari perintah-perintah dalam pengelolaan
berkas secara sederhana menggunakan antarmuka teks.
#### Berpindah Folder/Direktori? (cd)
Untuk berpindah dari satu folder ke folder lainnya, Anda bisa ketik perintah
“cd” dan diikuti dengan alamat folder yang dibuka (dipisah dengan spasi).
Sebagai contoh, jika ingin membuka folder Unduhan yang ada di dalam folder
home, Anda bisa ketik “cd ~/Unduhan”. Jika Anda berada di dalam folder home,
Anda cukup ketik “cd Unduhan” saja.
blankon@blankon:~$  cd Unduhan↵
blankon@blankon:~/Unduhan$
Jika ingin berpindah ke folder yang ada di level lebih atas, ketik perintah “cd
..”.
blankon@blankon:~/Unduhan$  cd ..↵
blankon@blankon:~$
#### Melihat Isi Folder/Direktori? (ls)
Untuk melihat isi dari suatu folder/direktory Anda saat ini, Anda cukup ketik
opsi “ls”.
blankon@blankon:~/Contoh$ ls↵
about-jubing.txt           oo-sampul-dan-stiker-cd-dvd.odg
buku-panduan.tar.bz2       oo-selamat-datang.odt
Bungong_Jeumpa.ogg         oo-tentang-blankon.odt
oo-jadwal-pembayaran.ods   sampul_stiker_cd.tar.bz2
oo-maxwell.odt             souvenir-src.tar.bz2
oo-presentasi-blankon.odp  Studi Kasus - Daftar Pengguna Blankon.pdf
blankon@blankon:~$
Anda juga bisa membuka isi folder lain selain folder saat ini dengan
menambahkan lokasi folder setelah perintah ls dengan dipisah spasi. Misalnya,
ketik perintah “ls /usr” untuk menampilkan isi folder /usr.
blankon@blankon1:~$ ls /usr↵
bin  games  include  lib  lib64  libexec  local  sbin  share  src  X11R6
blankon@blankon:~$
Untuk informasi berkas/folder di dalam folder, Anda bisa menambahkan opsi “ -l”
pada perintah “ls” yang Anda jalankan.
blankon@blankon1~$  ls /usr -l↵
total 148
drwxr-xr-x  2 	root root 36864	2010-06-08 14:21 bin
drwxr-xr-x  2 	root root 4096 	2010-05-14 04:14 games
drwxr-xr-x  39 	root root 4096 	2010-05-14 04:14 include
drwxr-xr-x 198 	root root 69632	2010-06-08 14:21 lib
drwxr-xr-x 3 	root root 4096 	2010-05-14 04:13 lib64
drwxr-xr-x 10 	root root 4096 	2010-05-14 04:04 local
drwxr-xr-x 2 	root root 12288	2010-06-08 14:21 sbin
drwxr-xr-x 284 	root root 12288	2010-06-08 14:21 share
drwxrwsr-x 5 	root src  4096 	2010-06-08 14:21 src
blankon@blankon:~$
#### Membuka Berkas
Untuk membuka suatu berkas menggunakan suatu aplikasi, Anda bisa mengetik
perintah untuk menjalankan aplikasi kemudian diikuti dengana nama atau path
dari berkas yang ingin dibuka. Misalnya, jika ingin membuka berkas “oo-tentang-
blankon.odt” pada folder “Contoh” dengan OpenOffice?.org, Anda bisa ketik
perintah “soffice Contoh/oo-tentang-blankon.odt”.
blankon@blankon:~$  soffice Contoh/oo-tentang-blankon↵
Sebagai catatan, jika Anda ingin menjalankan aplikasi berbasis grafis, Anda
harus menggunakan antarmuka teks yang berada di bawah mode grafis alias
terminal emulator. Jika tidak, maka akan muncul pesan kesalahan.
Pada saat aplikasi sedang dijalankan, JANGAN menutup atau mengakhiri sesi
antarmuka teks, karena akan menyebabkan aplikasi yang dibuka tertutup secara
paksa dan menyebabkan kehilangan berkas.
#### Membuat Direktory (mkdir)
Untuk membuat direktory/folder, Anda bisa menggunakan perintah “mkdir
namafolder” atau “mkdir path-folder”. Maka akan dibuat folder baru yang berada
di bawah folder Anda saat ini.
blankon@blankon:~$ mkdir Coba↵
blankon@blankon:~$ cd Coba↵
blankon@blankon:~/Coba$ mkdir ../Dokumen/Coba1↵
blankon@blankon:~/Coba$ cd ../Dokumen/Coba1↵
blankon@blankon:~/Dokumen/Coba1$
#### Menghapus Direktory (rmdir)
Untuk menghapus suatu direktory/folder, Anda bisa gunakan perintah “rmdir
namafolder” atau “rmdir path-folder”. Syaratnya, folder tersebut harus kosong
tanpa berisi berkas atau subfolder apapun.
blankon@blankon:~$ rmdir Coba↵
blankon@blankon:~$ cd Coba↵
bash: cd: Coba: No such file or directory
blankon@blankon:~/Coba$ rmdir ../Dokumen/Coba1↵
blankon@blankon:~/Coba$ cd ../Dokumen/Coba1↵
bash: cd: Coba1: No such file or directory
#### Menghapus Berkas (rm)
Untuk menghapus suatu berkas, gunakan perintah “rm” lalu diikuti dengan nama
berkas atau dilengkapi dengan path (alamat lengkapnya) jika diperlukan.
Peringatan: Setelah Anda menjalankan perintah ini, berkas akan dihilangkan
begitu saja tanpa konfirmasi. Jadi, hati-hati dalam menggunakannya.
blankon@blankon:~/Coba$ rm nasi.txt↵
Jika ingin menghapus suatu isi folder sampai isinya secara rekursif, Anda juga
bisa gunakan perintah ini dengan menambahkan opsi “-R”. Sekali lagi, hati-hati
dalam menggunakan perintah ini.
blankon@blankon:~/Coba$ rm -R Coba↵
#### Menggandakan Berkas (cp)
Untuk menggandakan berkas, gunakan perintah cp dengan format “cp berkas-sumber
folder-tujuan”. Seperti semua perintah di atas, Anda juga bisa menyebutkan path
penuh dari berkas-sumber atau folder-tujuan jika diperlukan. Contohnya, jika
ingin menggandakan berkas “Contoh/oo-tentang-blankon.odt” ke dalam folder
Dokumen, gunakan perintah “cp nasi.txt Dokumen”.
blankon@blankon:~/Contoh$ sudo cp oo-tentang-blankon.odt /home/naya/Dokumen/↵
[sudo] password for naya:
blankon@blankon:~/Contoh$ cd ../Dokumen↵
blankon@blankon:~/Dokumen$ ls↵
oo-tentang-blankon.odt
blankon@blankon:~/Dokumen$
Sama dengan perintah rm, Anda bisa manfaatkan opsi “-R” jika ingin menggandakan
suatu folder secara rekursif.
blankon@blankon:~$ cp -R Dokumen Kerangka↵
blankon@blankon:~$ cd Kerangka↵
blankon@blankon:~/Kerangka$ ls↵
oo-tentang-blankon.odt
blankon@blankon:~/Kerangka$
#### Memindahkan Berkas/Folder? (mv)
Untuk memindahkan berkas/folder, Anda bisa gunakan perintah “mv”. Penggunaanya
mirip dengan perintah “cp”. Hanya saja, jika memindahkan suatu folder, Anda
tidak perlu menggunakan opsi recursif “-R”. Contohnya, jika ingin memindahkan
file “nasi.txt” ke dalam folder “Dokumen”, ketik perintah “mv nasi.txt
Dokumen”.
blankon@blankon:~$ mv nasi.txt Dokumen↵
blankon@blankon:~$ cd /Dokumen↵
blankon@blankon:~/Dokumen$ ls↵
nasi.txt
blankon@blankon:~/Dokumen$
#### Mengubah Nama Berkas/Folder? (mv)
Perintah yang digunakan untuk mengubah nama berkas sama dengan perintah untuk
memindahkan berkas/folder yaitu “mv”. Cara penggunaannya pun sama. Contoh,
untuk mengubah nama berkas “nasi.txt” ke “wira.txt”, ketik perintah “mv
nasi.txt wira.txt”.
blankon@blankon:~$ mv nasi.txt wira.txt↵
blankon@blankon:~$ ls↵
.........
blankon.txt
.........
blankon@blankon:~$
#### Mengubah Hak Akses Berkas/Folder? (chmod)
Untuk mengubah hak akses berkas/folder, Anda bisa gunakan perintah chmod dengan
format “chmod hakakses berkas/folder”. Hak akses diisi dengan tiga angka oktal.
Angka ke-1 merupakan hak untuk pemilik, angka ke-2 merupakan hak untuk grup dan
angka ke-3 merupakan hak untuk selain pemilik dan grup. Masing-masing bagian
diisi dengan angka basis 8, dimana hak baca bernilai 4, hak tulis bernilai 2,
hak eksekusi bernilai 1.
Sebagai contoh, untuk mengubah berkas “skrip.py” agar hak baca,tulis dan
eksekusi untuk pemilik, sedangkan yang lain hanya memiliki hak baca dan
eksekusi, Anda bisa ketik perintah “chmod 755 skrip.py”.
blankon@blankon:~$ chmod 755 skrip.py↵
Untuk memberikan suatu hak akses secara rekursif pada suatu folder, Anda bisa
menambahkan opsi “-R”. Misalnya, jika ingin memberikan hak mutlak (hak
baca,tulis,eksekusi untuk semua aspek) pada folder Public, Anda bisa ketik
perintah “chmod 777 -R Public”.
blankon@blankon:~$ chmod 777 -R Publik↵
Untuk menampilkan hak akses suatu berkas/folder, Anda bisa manfaatkan perintah
“ls -l”. Kemudian, Anda akan melihat seperti karakter yang dicetak tebal yang
merupakan hak akses dari berkas tersebut. Keenam karakter itu dibagi menjadi
tiga, bagian pertama merupakan hak akses pemilik, bagian kedua merupakan hak
akses grup dan bagian terakhir merupakan hak akses selain pemilik dan grup.
blankon@blankon:~/Dokumen$ ls -l ↵
-rw-r--r-- 1 root root 52625 2010-06-08 19:44 oo-tentang-blankon.odt
Keterangan : r : Hak Baca, w : Hak tulis, x : Hak eksekusi
#### Mengubah ID Pemilik atau Grup pada Berkas/Folder? (chown)
Untuk mengubah id pemilik atau grup pada berkas/folder, gunakan perintah chown
dengan format “chown id-pemilik namaberkas” jika ingin mengubah id pemilik
berkas/folder, “chown :grup namaberkas” untuk mengganti grup berkas dan “chown
id-pemilik:grup nama berkas” jika ingin mengubah id pemilik dan nama grup pada
suatu berkas sekaligus. Ingat, yang hanya bisa mengubah pemilik berkas hanyalah
pengguna administratif, sedangkan grup hanya bisa diubah oleh pemilik berkas.
Contohnya, jika ingin mengubah grup berkas menjadi “admin” pada berkas
nasi.txt, Anda bisa ketik perintah “chown :admin nasi.txt”.
blankon@blankon:~/Dokumen$ chown :admin nasi.txt↵
Untuk mengetahui id pemilik dan grup dari suatu berkas/folder, Anda bisa
manfaatkan perintah “ls -l”. Kolom kedua dari setiap informasi berkas merupakan
id pemilik berkas, sedangkan kolom selanjutnya merupakan grup/kelompok pemilik
berkas.
blankon@blankon:~/Dokumen$ ls -l ↵
total 56
-rw-r--r-- 1 blankon admin     9 2010-06-08 19:50 nasi.txt
-rw-r--r-- 1 root root  52625 2010-06-08 19:44 oo-tentang-blankon.odt
Keterangan : teks "blankon" di sebelah kiri adalah id pengguna pemilik berkas,
sedangkan yang disebelah kanan merupakan id grup/kelompok pemilik berkas.
#### Membuat Berkas Tar (tar)
Tar merupakan program yang berfungsi untuk menyatakan beberapa berkas/folder ke
dalam satu berkas yang disebut dengan tarfile/tarball. Sangat berguna sekali
untuk melakukan backup.
Untuk membuat berkas tar, selain melalui aplikasi pengelola arsip pada desktop,
Anda juga bisa gunakan perintah tar dengan format “tar -f berkas.tar
namaberkas/folder1 namaberkas/folder2.....”. Anda juga bisa gunakan opsi “-v”
agar menampilkan informasi detail dari proses tar.
blankon@blankon:~$ tar -cvf coba.tar Templat/
Templat/
Sedangkan untuk mengekstrak atau mengeluarkan isi suatu tarfile, Anda bisa
gunakan perintah dengan format “tar -xf berkas.tar -C folder-tujuan”.
blankon@blankon:~$ tar -xf coba.tar -C ~↵
#### Kompresi Gzip (gzip)
Gzip atau GNU Zip merupakan format arsip terkompresi dengan algoritma Lempel-
Ziv (LZ77). Untuk melakukan kompresi suatu berkas dengan format Gzip, gunakan
perintah “gzip namaberkas”. Ekstensi berkas hasil kompresi adalah *.gz.
Sebaliknya, untuk melakukan decompress, gunakan perintah “gunzip
namaberkas.bz2”.
blankon@blankon:~$ gzip coba.tar↵
blankon@blankon:~$ ls↵
coba.tar.gz
blankon@blankon:~$ gunzip coba.tar.gz↵
blankon@blankon:~$ ls↵
coba.tar
blankon@blankon:~$
#### Kompresi Bzip2 (bzip2)
Bzip2 atau GNU Bzip2 merupakan format kompresi arsip dengan algoritma Burrows-
Wheller block sorting text compression. Untuk melakukan kompresi suatu berkas
dengan format bzip2, gunakan perintah “bzip2 namaberkas”. Ekstensi berkas hasil
kompresi adalah *.bz2. Sedangkan untuk melakukan decompress, gunakan perintah
“bunzip namaberkas.bz2”.
blankon@blankon:~$ bzip2 coba.tar↵
blankon@blankon:~$ ls↵
coba.tar.bz2
blankon@blankon:~$ bunzip2 coba.tar.gz↵
blankon@blankon:~$ ls↵
coba.tar
blankon@blankon:~$
     INFO: Baik format gzip maupun bzip2 “hanya” melakukan kompresi
     terhadap sebuah berkas. Jika ingin mengkompresi banyak berkas di
     dalam sebuah berkas, Anda harus menggunakan perpaduan antara perintah
     tar dengan perintah gzip maupun bzip2. Anda bisa menambahkan opsi “-
     z” pada perintah tar untuk membuat/mengextract tarball dengan format
     kompresi GZIP. Sedangkan untuk membuatnya dengan format BZIP2,
     gunakan opsi “-j” pada perintah tar.
#### Pencarian Berkas (find)
Untuk mencari berkas, gunakan perintah find dengan opsi “find folder -name
“namaberkas”. Contohnya, jika Anda ingin mencari berkas bernama “wira” di dalam
folder rumah/home, ketik perintah “find ~ -name “wira””. Maka akan muncul path/
lokasi dari berkas/fodler yang bernama wira.
blankon@blankon:~$ find ~ -name “blankon”↵
/home/blankon
/home/blankon/.wine/drive_c/windows/profiles/blankon
/home/blankon/.openme/cache/home/blankon
blankon@blankon:~$
     TIP: Jika Anda ingin menulis nama berkas/folder lebih cepat, Anda
     bisa terlebih dahulu mengetik satu/beberapa huruf awal dari nama
     berkas/folder tersebut, kemudian menekan tombol Tab pada keyboard.
     Contohnya, jika ingin mengetik nama berkas “wirama.txt” lebih cepat,
     Anda bisa ketik “w” saja atau “wi”, kemudian menekan tombol Tab.
     Secara otomatis, nama berkas akan dilengkapi.
     TIP: Jika ingin menyebutkan banyak nama berkas/folder yang memiliki
     huruf awal sama (misalnya, “wira.txt”, “weda.txt”, “wanti.txt”,
     “wantek.txt”) Anda cukup ketik “w*” (w disertai tanda bintang “*”).
     Jika ingin menyebutkan huruf belakangnya (misalnya ingin menyebutkan
     ekstensi berkas txt), Anda bisa ketik “*.txt”.
Sebenarnya, masih banyak lagi perintah-perintah untuk antarmuka teks yang bisa
Anda gunakan untuk bekerja. Untuk melakukan otomatisasi kerja, Anda juga bisa
membuat skrip yang disebut dengan shell script. Otomatisasi pekerjaan sangat
penting bagi administrator untuk memperingan dan mempercepat pekerjaannya dalam
jaringan. Untuk mempelajari shell script lebih lanjut, Anda bisa membaca buku
tentang Bash Scripting atau mencari referensi melalui internet.
Last modified on 05/26/2011 11:59:49 PM
#### Attachments (1)
  * gnome-terminal.png​ (13.2 KB) - added by guspur 6 years ago.
#### 
    
 
 
 
 
 
---
 
