# Komponen BlankOn Wikipedia-id
[/raw-attachment/wiki/Pemaket/Komponen/BlankOnWikipedia-id/wo-jv.jpg]

Tulisan ini merupakan bagian dari project pengembangan konten lokal yang
 bermanfaat untuk dimasukan ke dalam distro linux BlankOn. Masih berupa rintisan/konsep dan menunggu persetujuan tim steering.

## Wikipedia Berbahasa Indonesia
Wikipedia.org adalah ensiklopedia multibahasa dalam jaringan internet yang
disusun agar dapat diisi, dibaca, diawasi dan disunting secara terbuka oleh
semua orang. Wikipedia dalam bahasa Indonesia (id.wikipedia.org) saat ini
memiliki 68.764 artikel dengan 50.675 pengguna terdaftar. Semua isi teks
dilisensikan di bawah Lisensi Dokumentasi Bebas GNU (GDFL). Dengan filosofi
"bebas terbuka" dan jumlah artikel yang sedemikian besar, Wikipedia berbahasa
Indonesia merupakan ensiklopedia dan sumber pengetahuan yang dapat dimanfaatkan
oleh semua orang, terutamanya untuk keperluan edukasi.

## Wikipedia Offline, Ruby dan BlankOn
Masalahnya adalah tidak semua penduduk
Indonesia memiliki akses internet, jika
ada versi offline dari wikipedia ini
tentu akan lebih banyak pihak yang
dapat menikmati pengetahuan yang
terkandung di dalamnya. Distribusi
Wikipedia berbahasa lokal menggunakan
media CD sudah dipelopori di Jerman dan
beberapa negara lain.

Wikipedia menyediakan download dalam
banyak bentuk: dump database, halaman
HTML static dan offline CD. Kumpulan
halaman HTML static wikipedia berbahasa
Indonesia berukuran kurang lebih
2Gbytes, cukup boros ruang penyimpanan
sementara versi kompresi 7z nya hanya
95Mbytes. Sedangkan versi dump database
membutuhkan layanan server MySQL,

Apache dan Mediawiki. Tersebutlah Stian
Haklev, seorang warga negara Norwegia   [http://upload.wikimedia.org/wikipedia/
yang sedang bekerja di sebuah LSM di    commons/thumb/6/63/Wikipedia-logo.png/
Indonesia menaruh perhatian terhadap    180px-Wikipedia-logo.png]
kesulitas akses internet di Indonesia
dan kebutuhan akan wikipedia offline.
Dengan menggunakan bahasa pemrograman
Ruby dia mencoba membuat aplikasi yang
bisa mengakses koleksi halaman
wikipedia berbahasa Indonesia yang
masih dalam bentuk terkompresi sehingga
hemat ruang. Idenya ini (aplikasi
bernama zipdoc) dilontarkan ke milis
official Ruby dan id-Ruby dan beberapa
anggota milis id-Ruby tertarik dengan
ide ini.

Sementara itu BlankOn linux versi 2.0
menjelang masa rilis. Beberapa anggota
tim BlankOn mencoba memasukan dua poin
di atas ke BlankOn (kalaupun bukan
terinstall default minimal merupakan
paket tambahan) sehingga bisa menjadi
konten lokal yang bermanfaat.

## Menginstall Wikipedia Offline (devel progress)
Berikut langkah sementara untuk developer/pemaket, bukan untuk pengguna.
Install paket git (Source Code Management seperti CVS/SVN) untuk mengambil
source code zipdoc terbaru dan paket 7zip untuk membuka kompresi 7z hasil
download dari wikipedia nanti juga bahasa Ruby dan library kompresi untuk Ruby.

Lalu setelah itu install gem trollop dengan menggunakan sistem paket Rubygems:
`sudo apt-get install git-core p7zip-full ruby rubygems mongrel libbz2-ruby1.8`
`sudo gem install trollop`

Ambil source code zipdoc terbaru, lalu masuklah ke direktori yang terbentuk:

`git clone git://repo.or.cz/zip-doc.git`
`cd zip-doc`

Download data kompresi wikipedia berbahasa Indonesia terbaru dari ​http://static.wikipedia.org, contohnya:
`wget -c http://static.wikipedia.org/downloads/September_2007/id/wikipedia-id-html.7z`
Extract hasil download dengan menggunakan aplikasi 7z yang menghasilkandirektori "id": 7z x wikipedia-id-html.7z

Buat file zdump (kompresi berindeks), lalu jika perlu hapus direktori "id" yang
berukuran sekitar 2GByte:
`ruby zdump.rb id id.zdump`
`rm -rf id`

Jalankan file mongrel-web untuk menyalakan webserver mini mongrel dan mengakses
arsip id.zdump:
`ruby mongrel-web.rb id.zdump`

Kini wikipedia berbahasa Indonesia sudah bisa diakses di alamat ​http://localhost:2042

[/raw-attachment/wiki/Pemaket/Komponen/BlankOnWikipedia-id/pygtk%2Bmozembed_th.jpg]

## Menginstall Wikipedia Offline (final package)
`sudo apt-get install blankon-wikipedia-id`

## Paket Wikipedia-id BlankOn
   * blankon-wikipedia (comingsoon... meta package)
   * blankon-wikipedia-idzdump (comingsoon...)
   * blankon-wikipedia-suzdump (comingsoon...)
   * blankon-wikipedia-jvzdump (​https://code.launchpad.net/~niwatori/blankon/
      blankon-wikipedia-jvzdump)
   * blankon-wikipedia-zipdoc (​https://code.launchpad.net/~niwatori/blankon/
      blankon-wikipedia-zipdoc)
   * blankon-wikipedia-trollop (​https://code.launchpad.net/~niwatori/blankon/
      blankon-wikipedia-trollop)
   * ruby
   * rubygems
   * mongrel
   * libbz2-ruby1.8

## Credits
   * Para kontributor artikel Wikipedia, terutama yang berbahasa Indonesia
   * Stian Haklev (​http://www.reganmian.net/blog) for the great Ruby ZipDoc
      (​http://repo.or.cz/w/zip-doc.git)
   * Rekan-rekan id-ruby untuk diskusi dan konsultasi teknis via YM ;P

## Tim
   * Niwatori (​http://diki.or.id)
   * imtheface (​http://skyisgrey.org)

## To Do List
   * Perapihan code dan info untuk RDoc (request akses commit ke repo git)
   * --(Koordinasi dengan imtheface (belajar pemaketan))--
   * --(Mengurangi penggunaan gem jika memungkinkan (pure berbasis apt saja))-
      - Trollop deb siap pakai.
   * GUI web server launcher (script tk yang sekarang masih crash di GNOME)
   * --(Image banyak yang masih mengambil online)-- Ternyata memang static
      tanpa images.
   * Saat kompresi skip semua halaman Talk/Diskusi? untuk mengurangi ukuran
   * Pengkajian legal/tata cara/batasan pemanfaatan content Wikipedia
   * Diskusi dan minta dukungan komunitas kontributor Wikipedia-id agar lebih
      banyak manfaat dan ide yang mungkin muncul

## List File Sementara
-rwxr-xr-x 251 2007-11-07 01:12 display-page.rb
-rwxr-xr-x 609628 2007-11-07 01:12 eee_darwin
-rwxr-xr-x 900 2007-11-07 01:12 htmlshrinker-data.rb
-rwxr-xr-x 2487 2007-11-07 01:12 htmlshrinker.rb
-rw-r--r-- 98708366 2007-11-07 02:26 id.zdump
-rwxr-xr-x 3411 2007-11-07 01:12 mongrel-web.rb
-rw-r--r-- 1013 2007-11-07 01:12 NOTES
-rwxr-xr-x 7664 2007-11-07 01:12 zarchive.rb
-rwxr-xr-x 4792 2007-11-07 01:12 zdump-7z.rb
-rwxr-xr-x 4202 2007-11-07 01:12 zdump.rb
-rw-r--r-- 10089 2007-11-07 01:12 zipdoc.rb
-rwxr-xr-x 1637 2007-11-07 01:12 zipweb.rb
-rw-r--r-- 1635 2007-11-07 01:12 zutil.rb
-rw-r--r-- 257894 2007-10-05 06:05 irb1.8_1.8.6.36-1ubuntu3_all.deb
-rw-r--r-- 17326 2006-06-20 18:10 libbz2-ruby1.8_0.2.2-2_i386.deb
-rw-r--r-- 9174 2007-05-25 17:03 libdaemons-ruby_1.0.6-1_all.deb
-rw-r--r-- 18188 2007-05-25 17:03 libdaemons-ruby1.8_1.0.6-1_i386.deb
-rw-r--r-- 27734 2007-07-23 14:03 libgemplugin-ruby_0.2.2-1_all.deb
-rw-r--r-- 12114 2007-07-23 14:03 libgemplugin-ruby1.8_0.2.2-1_all.deb
-rw-r--r-- 416328 2007-08-24 13:03 libgems-ruby1.8_0.9.4-1ubuntu1_all.deb
-rw-r--r-- 315710 2007-10-05 06:06 libopenssl-ruby1.8_1.8.6.36-
1ubuntu3_i386.deb
-rw-r--r-- 217724 2007-10-05 06:06 libreadline-ruby1.8_1.8.6.36-
1ubuntu3_i386.deb
-rw-r--r-- 1565514 2007-10-05 06:06 libruby1.8_1.8.6.36-1ubuntu3_i386.deb
-rw-r--r-- 55472 2007-08-31 05:04 mongrel_1.0.1-1_i386.deb
-rw-r--r-- 1180028 2007-08-07 13:03 p7zip-full_4.51~dfsg.1-1_i386.deb
-rw-r--r-- 331124 2007-10-05 06:05 rdoc1.8_1.8.6.36-1ubuntu3_all.deb
-rw-r--r-- 239156 2007-10-05 06:06 ruby1.8_1.8.6.36-1ubuntu3_i386.deb
-rw-r--r-- 18970 2005-04-15 02:45 ruby_1.8.2-1_all.deb
-rw-r--r-- 51502 2007-08-24 13:03 rubygems_0.9.4-1ubuntu1_all.deb
Total sekitar 106 Mbytes

Last modified on 06/16/2008 05:13:57 PM

#### Attachments (2)
   * wo-jv.jpg​ (34.8 KB) - added by alza 9 years ago.
   * pygtk+mozembed_th.jpg​ (30.0 KB) - added by alza 9 years ago.

---
 
