# Bab7-Clone
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png] [/
raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]
### 7.5. Clone
Clone atau kloning digunakan untuk membuat salinan suatu object namun masih
terhubung dengan object asli. Bentuk object hasil Clone sama persis dengan
object asli atau induk, baik bentuk, warna, style, dan ukuran. Setiap melakukan
perubahan pada object induk maka object hasil clone akan mengikuti
perubahannya, agar object hasil clone tidak mengikuti perubahan pada object
induk, matikan atribut clone dengan metode Unlink Clone.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab7-Clone/
7.5.2.Create_Tiled_Clones.png]
Clone dapat dilakukan pada beberapa object sekaligus dengan mengelompokkan
object-object tersebut terlebih dulu. Untuk melakukan kloning pilih terlebih
dulu object yang akan dikloning kemudian lakukan salah satu langkah berikut:
#### 7.5.1. Create Clone
    * Melalui Menu Bar, klik Edit => Clone => Create Clone
    * Melalui Comand Bar, klik ikon (Create a Clone of selected object).
    * Menggunakan Keyboard, tekan Alt+D
#### 7.5.2. Create Tiled Clones
Create Tiled Clones digunakan untuk melakukan kloning object dengan menciptakan
satu kelompok object yang terdiri beberapa object dalam waktu bersamaan secara
otomatis.
Posisi object yang dihasilkan berjejer dengan salah satu object dan menumpuk
persis di atas object asli.
Pada saat metode ini diterapkan maka akan tampil jendela pengaturan untuk
mengatur banyak baris dan kolom object yang akan dibuat. Arahkan kursor ke Menu
Bar, klik Edit => Clone => Create Tiles Clones => tentukan jumlah baris dan
kolom object yang akan dibuat => klik Create, kemudian tutup jendela pengaturan
clone.
Jendela pengaturan Create Tiled Clones berisi beberapa menu, menu utama berupa
kolom atau tab yang terdiri dari Symmetry, Shift, Scale, Rotation, Blur and
Opacity, Color, dan Trace, pada setiap tab memiliki menu dan beberapa submenu.
Di bawah tab terdapat menu yang berisi dua submenu yaitu: submenu row, columns
yang fungsinya untuk mengatur jumlah object yang akan dibuat, sedangkan submenu
width, height digunakan untuk mengatur ukuran object (tergantung metode pada
pengaturan submenu pada masing-masing tab).
Menu Use saved size and position of the tile digunakan untuk membuat kloning
object sesuai operasi terakhir yang dilakukan dengan memberi tanda centang
(checklist) pada kotak yang tersedia. Reset digunakan untuk mengembalikan
pengaturan pada semua tab yang sudah dilakukan. Remove digunakan untuk
menghapus object hasil kloning atau dengan kata lain untuk membatalkan kloning
(undo clone). Unclump digunakan untuk mengatur penyebaran proses kloning secara
acak atau untuk menghentikan perubahan warna pada object induk yang sudah
dikloning. Create digunakan untuk menerapkan proses kloning
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab7-Clone/
7.5.2A.Jendela_pengaturan_Create_Tiled_Clones.png]
Berikut penjelasan singkat masing-masing menu dan submenu pada tab yang
tersedia
*** 7.5.2.1. Symmetry ***
Menu pada tab Symmetry berisi 17 submenu yang menganut pada pola (pattern) dua
dimensi sesuai rumus matematika. Rumus tersebut sering dipakai dalam arsitektur
dan seni dekoratif. 17 submenu tersebut memiliki efek yang berbeda saat
diterapkan, untuk memilih dan menggunakannya klik submenu yang berada dibawah
tab Symmetry. Dibawah ini beberapa contoh gambar efek dari penerapan Symmetry
*** 7.5.2.2. Shift ***
Tab Shift digunakan untuk memberi variasi jarak antar tile atau batas object
hasil kloning. Pada saat menggunakan modus standart (default) maka bagian
pinggir object saling menempel tanpa jarak. Shift X dan Shift Y digunakan untuk
menambahkan atau mengurangi jarak antar tile dengan menggunakan satuan pembatas
object lebar kali tinggi. Jarak antara tile dapat diacak dengan mengubah nilai
pada kolom Randomize. Exponent Digunakan untuk mengubah efek dari fungsi Shift
X dan Shift Y, kotak sebelah kiri untuk efek Shift X dan kotak sebelah kanan
untuk Shift Y. Alternate Digunakan untuk mengatur jarak yang ditambahkan atau
dikurangi berdasarkan nilai pada kotak Shift X dan Shift Y.. Cumulate Digunakan
untuk menambahkan renggang antar pinggir object yang dibuat dengan perhitungan
2 (dua) kali secara berurutan dari nilai pada kolom Shift X atau Shift Y. Misal
pada kolom Shift Y dan Shift X memiliki nilai 15% sedangkan jumlah object yang
akan dibuat adalah 3 x 3, maka pada renggang pertama 15% renggang kedua 30%
renggang ketiga 45%. Exclude tile Digunakan untuk mematikan renggang antar tile
sehingga object yang dibuat saling bertumpuk (tidak memiliki jarak), Modus ini
berguna jika dikombinasikan dengan menu pada tab lain, misalnya dengan tab
Rotation untuk membuat tile melingkar. Rumus yang digunakan hampir sama dengan
mengubah nilai pada Shift X dan Shift Y menjadi -100%.
*** 7.5.2.3. Scale ***
Tab Scale digunakan untuk menambah dan mengurangi ukuran tile yang akan dibuat
berdasarkan posisi baris dan kolom. Berikut penjelasan dari submenu yang
tersedia untuk mengatur ukuran tile. Scale X, Scale Y Digunakan untuk
menambahkan dan mengurangi ukuran tile berdasarkan % (persen). Penambahan dan
pengurangan secara acak dapat dilakukan dengan mengubah nilai pada kolom
Randomize.
Exponent Digunakan untuk mengubah efek dari fungsi Scale X dan Y. Base
Digunakan untuk membuat tile dengan pola memutar jika dikombinasi pada tab
Rotation. Untuk dapat menerapkan modus ini ubah pusat object ke salah satu
sisi, sebagai contoh jika pusat object berada di sebelah kanan maka pola yang
tercipta berada di sisi kanan.
====7.5.2.4. Rotation === Tab Rotation digunakan untuk memutar tile yang akan
dibuat berdasarkan baris dan kolom. Object induk digunakan sebagai pusat
rotasi. Perputaran (rotasi) menggunakan ukuran derajat atau dengan kata lain
perputaran searah jarum jam (dari kanan ke kiri). Angle Digunakan untuk
mengatur rotasi berdasarkan derajat. Pengaturan rotasi secara acak dapat
dilakukan dengan mengubah nilai pada kolom Randomize.
*** 7.5.2.5. Blur and Opacity ***
Tab Blur and Opacity digunakan untuk mengubah blur dan transparansi tile yang
akan dibuat berdasarkan baris dan kolom. Blur Blur dapat diterapkan pada
masing-masing tile dengan nilai berbeda. Perubahan dari efek blur berdasarkan %
(persen) yang sesuai nilai pada kotak isian. Efek blur secara acak dapat
dilakukan dengan mengubah nilai pada kolom Randomize. Opacity Opacity atau
transparansi dapat diterapkan pada masing-masing tile dengan nilai berbeda.
Perubahan dari transparansi berdasarkan % (persen) yang sesuai nilai pada kotak
isian.
*** 7.5.2.6. Color ***
Tab Color digunakan untuk mengubah warna tile yang akan dibuat berdasarkan
posisi baris dan kolom. Perubahan warna ditentukan dalam hitungan persen sesuai
angka pada kotak isian. Warna yang digunakan adalah standar HSL (Hue,
Saturation, dan Lightness). Warna pada Hue secara otomatis akan terulang jika
perubahan warna mencapa 100%. Ukuran lengkap masing-masing komponen untuk
Saturation dan Lightness adalah 100%. Perubahan pada ketiga warna dapat diatur
secara terpisah menggunakan fitur Alternate. Perubahan warna secara acak juga
dapat diterapkan dengan menggunakan fasilatas Randomize. Object induk yang akan
digunakan harus dalam keadaan Unset (lebih jelasnya baca halaman Styling Object
and Color). Warna awal yang akan digunakan sesuai warna yang ada di sebelah
kanan Initial color, untuk mengubah warna yang sudah ada klik kotak tersebut
kemudian lakukan pengaturan sesuai keinginan.
*** 7.5.2.7. Trace ***
Tab Trace digunakan untuk mengatur warna, ukuran, dan transparansi tile
menggunakan object yang berada dibawah tile. Beri tanda centang (checklist)
pada Trace the drawing under the tiles untuk dapat menggunakan fitur ini. Tab
Trace memiliki tiga submenu. Submenu nomor satu adalah untuk menentukan input
gambar yang dipakai. Tersedia juga pilihan untuk menentukan warna yang
digunakan yaitu Color, Opacity atau salah satu submenu yang pada RGB dan HSL.
Submenu nomor dua untuk mengubah nilai Inpu, submenu ini memiliki tiga piliha
yaitu:
   1. Gamma correction untuk menentukan koreksi Gamma pada warna.
   2. Randomize untuk menambahkan modus pengacakan pada input.
   3. Invert digunakan untuk membalik input.
Submenu nomor tiga digunakan untuk menentukan apa yang terkena efek dari input.
Pilihan yang tersedia adalah Presence, Color, Size, dan Opacity. Berikut contoh
penjelasan sederhana untuk menerapkan modus tab Trace: Pilih gambar dasar yang
akan digunakan sebagai Output, gambar dapat menggunakan file SVG atau Bitmap.
Beri tanda centang pada Trace the drawing under tiles, pilih jenis warna yang
akan digunakan. Buat object yang akan dijadikan tile (object harus Unset),
lakukan pengaturan pada submenu nomor dua dan tiga Tentukan jumlah Row dan
Columns tile yang akan dibuat, klik Create.
Dibawah ini contoh penerapan tab Trace pada object Gradient, gambar kiri
merupakan output dan input untuk tile sedangkan sebelah kanan hasil akhir
dengan output gambar dasar yang sudah dihapus.. Catatan Alternate dan Cumulate
pada masing-masing tab memiliki fungsi yang hampir sama, misal fungsi Alternate
pada tab scale untuk menambah dan mengurangi ukuran, pada tab rotation untuk
untuk menambah dan mengurangi rotasi.
*** 7.5.3. Contoh penggunaan kombinasi ***
Berikut ini contoh pembuatan object dengan bentuk melingkar menggunakan fitur
Create Tiled Clones Buat object menggunakan Star Tool dengan ukuran 70,000 X
70,000 px, kemudian geser pusat object salah satu sisi.
Matikan atribut warna (unset fill) pada object tersebut, caranya klik object
tersebut, kemudian arahkan kursor ke Style Indicator pada Status Bar, klik
kanan pilih Unset fill.
Arahkan kursor pada Menu Bar, klik Edit => Clone => Create Tiled Clones, pada
menu Rows, colums isi dengan nilai 12 X 1.
Pindah ke Tab Shift, beri tanda centang (chek list) pada Exclude tile . Pindah
ke Tab Rotation, pada kotak isian Angle (per row) isi dengan nilai 30,0. Pindah
ke Tab Color, klik Initial color kemudian atur warna yang diinginkan, atur juga
nilai warna pada masing-masing kotak HSL yang ada. Setelah semua pengaturan
dirasa cukup, klik Create, maka hasilnya seperti gambar di bawah ini: Catatan
Dalam contoh di atas kita membuat object melingkar berjumlah 12 buah, rumus
yang digunakan adalah 360 derajat dibagi 12 sama dengan 30, jika ingin membuat
object melingkar dengan jumlah berbeda gunakan rumus yang sama, misal ingin
membuat object melingkar dengan jumlah 6 (enam) buah, rumusnya adalah 360:6=60
maka kotak isian pada tab Rotation => Angel (per columns) diisi dengan nilai
60.
#### 7.5.4. Unlink Clone
Digunakan untuk menghapus atau mematikan link antara object hasil kloning
dengan object asli. Object hasil kloning tidak ikut berubah jika object asli
dimodifikasi, berikut beberapa cara yang dapat dilakukan untuk melakukan Unlink
Clone: Melalui Menu Bar, klik Edit => Unlink Clone Melalui ikon Comand Bar,
klik ikon (Cut the selected clones' link to the original). Menggunakan
Keyboard, tekan Shift+Alt+D
#### 7.5.5. Relink to Copied
Untuk melakukan kloning object namun tidak terkait dengan object asli. Klik
object asli, kemudian duplikat object tersebut ke canvas atau area kerja (dapat
juga dengan menggunakan metode copy-paste), setelah itu klik Edit => Clone =>
Relink to Copied.
#### 7.5.6. Select Original
Digunakan untuk menemukan dan memilih object induk di antara object hasil
kloning Melalui Menu Bar, klik Edit => Select Original Menggunakan Keyboard,
tekan Shift+D
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png] [/
raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]
Last modified on 10/31/2014 07:20:37 PM
#### Attachments (2)
    * 7.5.2.Create_Tiled_Clones.png​ (126.8 KB) - added by istana 3 years ago.
    * 7.5.2A.Jendela_pengaturan_Create_Tiled_Clones.png​ (33.0 KB) - added by
      istana 3 years ago.
#### 
    
 
 
 
 
 
---
 
