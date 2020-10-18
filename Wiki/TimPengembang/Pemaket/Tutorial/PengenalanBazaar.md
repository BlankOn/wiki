# Tutorial PengenalanBazaar
Bazaar (disingkat menjadi bzr) adalah salah satu aplikasi Version Control
System (VCS) seperti halnya Subversion (svn), CVS, dan git. Berbeda dengan
Subversion atau CVS yang bersifat terpusat, Bazaar memiliki sifat
terdisitribusi seperti halnya git. Karena bersifat terdistribusi, maka tidak
diperlukan satu buah server utama yang berisi informasi seluruh revisi yang
pernah dilakukan. Seluruh informasi revisi akan selalu ada pada salinan
repositori yang dibuat.
### Menggunakan Bazaar
Operasi-operasi dasar
   1. Membuat repositori (init)
   2. Menambahkan berkas atau direktori (add)
   3. Menyimpan perubahan pada repositori (commit)
   4. Menyalin sebuah repositori ke repositori lokal (branch)
   5. Mengirim perubahan pada repositori lokal ke repositori lain (push)
Operasi tambahan
   1. Membuat tag
   2. Mengecek status berkas
   3. Mengatur nama dan email
   4. Melihat perubahan antar revisi
#### Membuat Repositori
Untuk menggunakan Bazaar, diperlukan adanya repositori kode sumber yang akan
menampung seluruh perubahan yang dilakukan. Pembuatan repositori ini dilakukan
dengan cara.
$ bzr init
Perintah tersebut akan membuat repositori pada direktori kerja yang aktif.
Repositori dapat dikenali dengan adanya direktori .bzr. Direktori repositori
ini berisi informasi bagi seluruh berkas pada direktori dan seluruh sub
direktori kerja. Seluruh informasi terdapat dalam satu buah direktori ini dan
tidak tersebar di seluruh direktori yang ada seperti halnya pada Subversion.
Jika ingin menggunakan fasilitas tagging, tambahkan opsi --dirstate-tags pada
saat membuat repositori.
$ bzr init --dirstate-tags
Dengan mengizinkan pembuatan tag, setiap revisi dapat diberi tanda khusus
berupa nama yang mudah diingat. Sehingga tidak hanya berupa nomor revisi saja.
Repositori Bazaar yang digunakan untuk menampung berkas-berkas paket untuk
BlankOn menggunakan jenis repositori dengan fasilitas tagging seperti ini.
#### Menambahkan Berkas
Berkas maupun direktori yang ada di dalam direktori kerja tidak serta-merta
menjadi berkas/direktori yang tercatat dan tersimpan di dalam repositori. Agar
berkas/direktori tersebut dapat tersimpan di dalam repositori, maka berkas/
direktori tersebut harus ditandai terlebih dahulu.
Untuk menandai berkas/direktori agar dapat disimpan di dalam repositori, dapat
digunakan perintah berikut.
$ bzr add berkas1 berkas2 direktori1 direktori2 ...
Pemanggilan perintah di atas hanya bertujuan untuk menandai saja. Tidak
bertujuan untuk benar-benar menyimpan berkas ke dalam repositori. Untuk
menyimpannya, silakan baca bagian berikutnya.
#### Menyimpan Perubahan
Setiap berkas yang sudah ditandai akan dipantau. Jika berkas tersebut mengalami
perubahan, maka perubahan akan disimpan ke dalam repositori. Untuk menyimpan
perubahan, gunakan perintah berikut.
$ bzr commit
Sebuah editor teks akan terbuka dan Anda diberi kesempatan untuk menuliskan
catatan perubahan yang Anda lakukan. Tulis catatan dengan baik dan jelas
sehingga rekan kerja Anda dapat memahami perubahan yang Anda lakukan.
Jika Anda ingin melakukan penyimpanan dan penulisan catatan dalam satu langkah,
gunakan perintah berikut.
$ bzr commit -m "Catatan perubahan yang terjadi"
#### Menyalin Repositori
Karena Bazaar bersifat terdistribusi, maka setiap operasi penyalinan akan
menyalin seluruh repositori yang ada. Hal ini berarti Anda juga akan
mendapatkan seluruh informasi revisi yang pernah dilakukan sebelumnya.
Untuk menyalin repositori, gunakan perintah berikut.
$ bzr branch url://menuju/repositori
Contoh:
$ bzr branch http://bazaar.launchpad.net/~blankon-pemaket/blankon/blankon-
artwork
Dengan melakukan perintah di atas, repositori blankon-artwork di launchpad.net
akan disalin ke komputer Anda.
#### Mengirim Perubahan
Ada kalanya Anda ingin mengirim perubahan yang telah Anda simpan dalam
repositori lokal ke sebuah repositori lain. Sebagai contoh, Anda ingin mengirim
perubahan yang Anda lakukan ke repositori Bazaar yang ada di launchpad.net.
Untuk melakukan hal tersebut, perintah berikut dapat digunakan.
$ bzr push url://menuju/repositori
Contoh:
$ bzr push bzr+ssh://bazaar.launchpad.net/~blankon-pemaket/blankon/blankon-
artwork/
#### Membuat Tag
Jika Anda menggunakan jenis repositori yang mendukung pembuatan tag, maka Anda
dapat memberi nama pada setiap revisi yang ada. Perintah untuk melakukan hal
tersebut adalah sebagai berikut.
$ bzr tag nama-tag
Tag yang dibuat akan diberikan kepada revisi terakhir yang ada. Jadi, jika Anda
ingin memberi tag pada perubahan yang telah Anda lakukan, pastikan Anda
melakukan operasi commit terlebih dahulu.
#### Mengecek Status
Untuk melihat status dari setiap berkas atau direktori yang ada pada direktori
kerja, Anda dapat menggunakan perintah berikut.
$ bzr status
Jika ada berkas atau direktori yang tidak aktual mengikuti revisi terakhir,
maka berkas/direktori tersebut akan diberi keterangan status, seperti removed,
modified, added, dan unknown.
    * removed berarti berkas/direktori tersebut tidak ditemukan dalam direktori
      kerja. Jika Anda melakukan operasi commit, maka berkas/direktori tersebut
      juga akan dihapus pada revisi terakhir (namun tetap ada pada revisi-
      revisi sebelumnya)
    * modified berarti berkas tersebut sudah mengalami perubahan
    * added berarti berkas/direktori tersebut adalah berkas/direktori baru yang
      belum pernah ada di dalam repositori dan akan dimasukkan ke dalam
      repositori
    * unknown berarti berkas/direktori tersebut tidak ditemukan di dalam
      repositori dan tidak akan dimasukkan ke dalam repositori pada saat
      melakukan operasi commit.
#### Mengatur Nama dan Email
Setiap revisi yang ada akan mengandung informasi pengguna yang membuat revisi
tersebut. Untuk mengaturnya, gunakan perintah berikut.
$ bzr whoami "Nama Anda <email@anda.id>"
Untuk mengecek nama yang sedang digunakan, jalankan perintah berikut.
$ bzr whoami
Untuk membuka bzr yang sedang terkunci, jalankan perintah berikut.
$ bzr break-lock  bzr+ssh
#### Melihat Perubahan
Untuk melihat perubahan yang terjadi antara revisi terakhir yang tersimpan dan
revisi yang masih ada dalam direktori kerja Anda, perintah berikut dapat
digunakan.
$ bzr diff
Sebuah informasi perubahan dengan format diff akan ditampilkan.
Jika Anda ingin membandingkan dua revisi spesifik, gunakan perintah berikut.
$ bzr diff -rX..Y
Nilai X dan Y menunjuk ke nomor revisi dari revisi yang ingin Anda bandingkan.
KategoriPemaket
Last_modified 7 months ago Last modified on 09/28/2016 01:39:58 PM
#### 
    
 
 
 
 
 
---
 
