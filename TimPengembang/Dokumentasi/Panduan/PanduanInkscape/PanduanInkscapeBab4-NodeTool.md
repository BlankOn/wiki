# Bab 4-NodeTool
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png] [/
raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]
## 4.2. Node Tool
Penggunaan Node Tool sangat penting pada Inkscape untuk mengolah object yang
berbentuk garis atau curva terutama untuk modifikasi, manipulasi dan mengedit
Path. Sebelum menggunakan Node Tool sebaiknya kita memahami terlebih dulu
tentang Path dan beberapa konsep penting lainnya agar tidak mengalami
kebingungan.
### Apa Itu Path
Paths adalah object yang bentuknya tidak menentu (arbitrary). Subbab ini
menjelaskan tentang bagaimana menciptakan Path, jenis-jenis path, cara mengedit
path, dan istilah mengenai path yang sering digunakan pada Inkscape.
#### 4.2.1. Jenis Path
Path terdiri dari tiga jenis yaitu: Path Terbuka, Path Tertutup, dan Path
Campuran.
###### Path Terbuka
Path terbuka memiliki dua ujung yang terdiri dari garis, bentuknya lurus atau
berlekuk-lekuk, path terbuka dapat dibuat dengan mengunakan Pencil Tool,
Calligraphy Tool, dan Connector Tool.
###### Path Tertutup
Path tertutup tidak memiliki ujung, biasanya terbuat dari Object Shapes yang
mana stroke pada object sudah diubah menjadi path, perubahan dapat dilakukan
dengan menghapus Fill atau membiarkan Fill tetap ada.
###### Path Campuran
Path ini merupakan campuran dari path terbuka dan tertutup, Path jenis ini
dapat dibuat dengan cara memotong bagian tertentu pada path tertutup, atau
dapat dibuat dengan cara menyambung salah satu ujung dengan pangkal dari dua
path terbuka. Paths berbeda dengan Shapes, karena path tidak memiliki struktur
yang ditetapkan, namun Path juga dapat diciptakan dari stroke suatu shapes,
path yang berasal dari shapes adalah path tertutup.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.1.Jenis_Path.png]
#### 4.2.2. Bezier Curves
Sebagian besar path pada Inkscape dijelaskan secara mendalam sebagai rangkaian
Bezier curves, pada program menggambar lainnya juga tidak jauh berbeda. Hal ini
sangat berguna untuk memahami sifat dasar Bezier curves pada saat menggambar
dan memanipulasi path. Bezier Curves didefinisikan oleh empat poin, dua di
antaranya sebagai end points atau titik akhir, sedang yang lainnya sebagai
control points atau handles (pegangan), masing-masing dipasangkan dengan salah
satu titik akhir. Control point berguna untuk mengotrol bentuk path dengan
titik akhir Bezier curves.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.2.Bezier_Curve.png]
Dua Bezier curves atau lebih dapat digabungkan menjadi path yang bentuknya
lebih kompleks. Titik node yang terletak pada kedua node hasil gabung kadang
tampak smooth (halus) yang ditandai dengan titik kotak (normal) atau lingkaran
kecil (auto smooth).
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.2A.Bezier_Curve.png]
#### 4.2.3. Paths dari Object
Terdapat beberapa cara untuk menciptakan path secara tidak langsung. Salah
satunya adalah dengan mengkonversi (mengubah) shape biasa atau object berupa
teks menjadi path. Cara lainnya dengan mengubah Stroke atau garis yang dibuat
menggunakan Pencil (Freehand) dan Bezier (Pen) menjadi path, cara ketiga untuk
menciptakan path adalah dengan trace a bitmap image.
### Cara Menggunakan Node Tool
Untuk dapat memahami dan menggunakan Node Tool maka Anda harus memiliki object
yang berupa Path terlebih dulu, untuk itu buat object berupa garis terlebih
dulu menggunakan Bezier Tool, kemudian klik Node Tool, setelah itu arahkan
kursor pada Menu Bar => klik Path => Object to Path atau tekan Shift+Ctrl+C.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.3.Paths_dari_Object.png]
###### Catatan
Cara membuat object berupa garis menggunakan Bezier Tool baca penjelasannya
pada halaman Tool Box => Bezier With Pen Tool.
#### 4.2.4. Menambah Node
Saya asumsikan bahwa Node Tool yang Anda gunakan masih aktif setelah mejalankan
perintah sebelumnya, jika belum aktif lakukan langkah berikut; pilih atau klik
Path yang dibuat sebelumnya, kemudian klik ikon Node Tool pada Tool Box atau
tekan tombol F2, kemudian klik sekali lagi path yang akan di edit, setelah itu
klik ikon node yang ada tanda Tambah diatasnya (paling kiri) pada Tool Control.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.4.Menambah_Node.png]
Cara lainnya untuk menambah titik node adalah dengan langsung melakukan klik
dua kali pada path. Maka node baru akan ditambahkan pada salah satu bagian
path. penambahan node juga bisa dilakukan dengan cara menekan tombol Insert
pada keyboard. Jika pada path sudah terdapat beberapa titik node dan Anda ingin
menambahkan titik node banyak sekaligus tekan Ctrl+A kemudian klik ikon Insert
new node.
#### 4.2.5. Geser Node atau Path
Untuk menggeser titik node maupun path dapat dilakukan menggunakan mouse maupun
tombol tertentu pada keyboard, secara garis besar caranya seperti metode dalam
menggunakan Selector Tool. Misalnya jika ingin menggeser titik node ke atas,
klik-tahan dan seret titik node ke atas, atau tekan tombol arah yang menghadap
ke atas pada keyboard.
Pada saat kursor berada diatas node, maka warna node tersebut berubah merah,
untuk menggeser node klik dan seret node yang dipilih ketempat lain, cara lain
untuk menggeser node dapat dilakukan dengan menekan tombol Arah pada keyboard.
Untuk berpindah dari titik node maupun path yang sedang dipilih menggunakan
keyboard dapat dilakukan dengan menekan tombol Tab atau tombol Shift+Tab, jika
menekan tombol Tab maka perpindahan maju satu langkahsedangkan jika menekan
tombol Shift+Tab maka perpindahan mundur satu langkah. Cobalah modifikasi path
dengan menggeser titik node maupun path menjadi bentuk gambar seperti dibawah
ini
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.5.Geser_Node_atau_Path.png]
#### 4.2.6. Hapus Titik Node
Klik salah satu titik node, kemudian klik ikon Delete selected node atau tekan
tombol Delete maupun Backspace, cara lainnya dengan menekan tombol
Ctrl+Alt+klik kiri. Pada saat menghapus titik node dengan menekan tombol Delete
atau Backspace bentuk pinggir path tidak berubah, sedangkan jika sambil menekan
tombol Ctrl maka secara otomatis bentuk path berubah.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.6.Hapus_Titik_Node.png]
#### 4.2.7. Gabung Titik Node
Klik salah satu bagian path diantara dua titik node, kemudian klik ikon Joint
selected nodes, maka kedua titik node tersebut akan tergabung menjadi satu,
posisi titik node berada diantara dua titik node yang digabungkan.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.7.Gabung_Titik_Node.png]
Untuk menggabungkan node dapat juga dilakukan dengan menekan tombol Crtl+J.
#### 4.2.8. Membagi Path
Klik salah satu titik node, kemudian klik ikon Break path at selected nodes
pada Tool Control, setelah itu geser titik node untuk melihat hasilnya. Untuk
memutus node dapat juga dilakukan dengan menekan tombol Shif+B.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.8.Membagi_Path.png]
#### 4.2.9. Hapus Path
Untuk menghapus path, klik salah satu bagian path di antara dua titik node,
kemudian klik ikon Delete segment between two non-endpoint nodes, sedangkan
untuk menyambung kembali Path tersebut klik ikon Join selected endnodes with a
new segment.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.9.Hapus_Path.png]
###### Catatan
Untuk menyambung Path satu dengan path lain lakukan berikut: klik titik node
paling pinggir pada path => tekan Shift => klik titik node paling pinggir pada
path lain, kemudian klik ikon Join selected endnodes with a new segment.
#### 4.2.10. Modifikasi Titik Node
Titik Node yang ditambahkan pada path dapat diubah menjadi beberapa bentuk
dengan memilih salah satu ikon yang tersedia, terdapat 4 (empat) ikon node yang
dapat digunakan untuk mengubah bentuk titik node, berikut penjelasannya:
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.10.Modifikasi_Titik_Nod.png]
###### Node Sudut (nodes corner)
Untuk mengubah bentuk titik nodes menjadi sudut yang runcing. Jika pegangan
nodes aktif maka pada kedua sudut yang berlawanan memiliki pegangan untuk
mengatur bentuk path yang melengkung, namun jika bentuk path lurus maka
pegangan tersebut tidak muncul. Cara lain untuk menggunakan modus ini adalah
dengan menekan tombol Shift+C. Saat melakukan klik kedua secara berurutan
setelah klik pertama maka sudut path pada titik nodes menjadi lurus dan
runcing.
###### Node Smooth
Untuk mengubah titik node menjadi halus dengan efek bentuk path menjadi
melengkung. Jika salah satu ujung garis halus yang berbentuk lingkaran ditarik
memanjang maka bentuk path ikut berubah, namun garis halus pada sisi lain tidak
ikut memanjang. Cara lain untuk menggunakan modus ini adalah dengan menekan
tombol Shift+S.
###### Node Symmatric
Untuk mengubah titik node menjadi simetris dan halus dengan efek bentuk path
menjadi melengkung. Jika salah satu ujung garis halus yang berbentuk lingkaran
ditarik memanjang maka bentuk path ikut berubah dengan garis halus pada sisi
lain ikut memanjang. Cara lain untuk menggunakan modus ini adalah dengan
menekan tombol Shift+Y.
###### Node auto-smooth
Untuk mengubah titik node otomatis menjadi halus, Jika salah satu ujung garis
yang berbentuk lingkaran ditarik efek perubahan pada path lebih halus, hal ini
akan terasa jika digunakan untuk modifikasi path yang melengkung. Cara lain
untuk menggunakan modus ini adalah dengan menekan tombol Shift+A.
#### 4.2.11. Modifikasi bentuk path
Bentuk Path yang sudah dibuat dapat dimodifikasi dengan mudah menggunakan
fasilitas pada Node Tool, misalnya ingin mengubah bentuk path melengkung
menjadi lurus atau sebaliknya.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.11.Modifikasi_bentuk_path.png]
###### Mengubah Path jadi lurus
Pilih salah satu path yang melengkung diantara dua titik node, kemudian klik
ikon Make selected segment lines atau tekan Shif+L, maka bentuk path yang
tadinya melengkung menjadi lurus
###### Mengubah Path jadi melengkung
Pilih salah satu path yang lurus diantara dua titik node, kemudian klik ikon
Make selected segments curves atau tekan Shif+U, maka pada path tersebut muncul
dua lingkaran kecil sebagai pegangan titik node, geser lingkaran kecil tersebut
ke arah yang diinginkan maka path akan berubah bentuknya jadi melengkung atau
menjadi curva.
#### 4.2.12. Ubah Object menjadi Path
Pada object tertentu node atau path tidak aktif secara otomatis, misalnya pada
object lingkaran, spiral, dan teks, sehingga akan sulit untuk melakukan
penambahan titik node dan modifikasi path. Untuk mengkonversi Shape biasa atau
object berupa teks menjadi path, klik Path => Object to path atau tekan
Shift+Ctrl+C.
Pada saat object diubah menjadi path, object tersebut kehilangan fungsi khusus
yang dimilikinya, sebagai contoh teks yang sudah diubah menjadi path, maka font
dan teksnya tidak bisa diganti lagi. Namun object yang sudah diubah menjadi
path bentuknya dapat dimodifikasi menjadi berbagai bentuk lain. Konversi teks
menjadi path menghasilkan kelompok path dengan satu path pada glyph. Hal ini
memungkinkan karakter yang dihasilkan dapat dimanipulasi lebih mudah serta
memiliki atribut khusus sebagai glyphs secara mandiri.
#### 4.2.13. Mengubah Path menjadi Shape
Untuk mengubah Stroke atau Path menjadi Shape, klik Path => Stroke to Path atau
tekan Ctrl+Alt+C. Setelah proses ini dilakukan, path terlihat hampir sama namun
sebenarnya struktur path sudah berbeda, Fill yang sudah diubah memiliki dua
path. Sebenar metode ini lebih tepat digunakan untuk mengubah stroke yang
dibuat menggunakan Pencil Tool atau Bezier With Pen Tool menjadi Shape atau
Path tertutup.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.13.Mengubah_Stroke_menjadi_Path.png]
#### 4.2.14. Coordinate Node
Coordinate Node digunakan untuk mengatur titik node yang dipilih berdasarkan
pinggir halaman (page) dengan mengisi nilai tertentu pada kotak isian yang
tersedia, kotak X berdasarkan jarak dari sisi kiri pinggir halaman, sedangkan
kotak Y berdasarkan jarak dari sisi bawah pinggir halaman. Disebelah kanan
kotak coordinate terdapat ikon unit yang fungsinya untuk mengatur ukuran
(satuan) yang digunakan pada kotak isian.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.14.Coordinate_Node.png]
#### 4.2.15. Show path on clipping
Untuk menampilkan atau menyembunyikan node dan path pada object yang sudah
dipotong atau clipping, path terlihat sebagai garis hijau. Modus ini dapat
berjalan pada clipping yang menggunakan path sebagai pemotongnya.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.15.Show_path_on_clipping.png]
#### 4.2.16. Show path on mask
Untuk menampilkan atau menyembunyikan node dan path pada object yang sudah
dimodifikasi menggunakan teknik mask, path terlihat sebagai garis biru. Modus
ini hanya dapat bekerja dengan baik pada masking yang menggunakan path (bukan
menggunakan shape).
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.16.Show_path_on_mask.png]
###### Catatan
Untuk memahami kedua fungsi dari fitur diatas silakan baca halaman Multiple
Object Operations => Clip and Mask
#### 4.2.17. Show Edit LPE
Untuk mengaktifkan atau memanggil fungsi node dan path pada object yang
dimodifikasi menggunakan Live Path Editor. Untuk memahami fungsi dari fitur ini
silakan baca halaman Path => Live Path Editor.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.17.Show_Edit_LPE.png]
#### 4.2.18. Show Transformation Handle
Untuk mengaktifkan atau mematikan fungsi pegangan transformasi pada titik node
seperti fungsi transform object pada Selector Tool.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.18.Show_Transformation_Handle.png]
#### 4.2.19. Show Bezier handles
Untuk mengaktifkan atau mematikan pegangan pada titik node.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.19.Show_Bezier_handles.png]
#### 4.2.20. Show path outline
Untuk menampilkan atau menyembunyikan garis path pada object, saat fungsi ini
aktif maka garis path terlihat berwarna merah.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab4-NodeTool/
4.2.20.Show_path_outline.png]
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png] [/
raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]
Last modified on 12/15/2014 06:41:26 PM
#### Attachments (22)
  * 4.2.1.Jenis_Path.png​ (13.3 KB) - added by imgos 3 years ago.
  * 4.2.2.Bezier_Curve.png​ (12.4 KB) - added by imgos 3 years ago.
  * 4.2.2A._Bezier_Curve.png​ (12.6 KB) - added by imgos 3 years ago.
  * 4.2.2A.Bezier_Curve.png​ (12.6 KB) - added by imgos 3 years ago.
  * 4.2.3.Paths_dari_Object.png​ (56.4 KB) - added by imgos 3 years ago.
  * 4.2.4.Menambah_Node.png​ (19.9 KB) - added by imgos 3 years ago.
  * 4.2.5.Geser_Node_atau_Path.png​ (5.9 KB) - added by imgos 3 years ago.
  * 4.2.6.Hapus_Titik_Node.png​ (14.6 KB) - added by imgos 3 years ago.
  * 4.2.7._Gabung_Titik_Node.png​ (10.9 KB) - added by imgos 3 years ago.
  * 4.2.8.Membagi_Path.png​ (9.2 KB) - added by imgos 3 years ago.
  * 4.2.9.Hapus_Path.png​ (8.5 KB) - added by imgos 3 years ago.
  * 4.2.7.Gabung_Titik_Node.png​ (10.9 KB) - added by imgos 3 years ago.
  * 4.2.10.Modifikasi_Titik_Nod.png​ (5.9 KB) - added by imgos 3 years ago.
  * 4.2.11.Modifikasi_bentuk_path.png​ (3.8 KB) - added by imgos 3 years ago.
  * 4.2.13.Mengubah_Stroke_menjadi_Path.png​ (9.3 KB) - added by imgos 3
      years ago.
  * 4.2.14.Coordinate_Node.png​ (24.1 KB) - added by imgos 3 years ago.
  * 4.2.15.Show_path_on_clipping.png​ (22.8 KB) - added by imgos 3 years ago.
  * 4.2.16.Show_path_on_mask.png​ (16.7 KB) - added by imgos 3 years ago.
  * 4.2.18.Show_Transformation_Handle.png​ (17.7 KB) - added by imgos 3 years
      ago.
  * 4.2.19.Show_Bezier_handles.png​ (24.1 KB) - added by imgos 3 years ago.
  * 4.2.20.Show_path_outline.png​ (21.0 KB) - added by imgos 3 years ago.
  * 4.2.17.Show_Edit_LPE.png​ (38.9 KB) - added by imgos 3 years ago.
#### 
    
 
 
 
 
 
---
 
