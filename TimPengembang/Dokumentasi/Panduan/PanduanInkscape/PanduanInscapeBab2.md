# Bab 2
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png] [/
raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]
## Bab 2 File
Halaman ini khusus menjelaskan secara ringkas dan sederhana mengenai managemen
file pada Inkscape. Penjelasan mencakup cara menyimpan, import, export, dan
print gambar atau file. Untuk menjalankan menu file, klik File => nama submenu
pada Menu Bar. Cara lainnya klik salah satu ikon pada Command Bar, contohnya:
New-default, Open, Save, Print, Import, dan Export Bitmap.
### 2.1. Membuka Halaman Baru
Klik File => New => pilih jenis halaman yang akan dipakai, atau tekan tombol
Ctrl+N pada keyboard, cara lainnya klik ikon New pada Command Bar. Standar
Document baru pada Inkscape menggunakan halaman A4 dengan orientasi portrait
(tegak), walau begitu standar tersebut dapat diubah dengan menggunakan template
baru yang kita buat, kemudian mengganti template asli dengan template baru
tersebut.
###### Catatan
Jika menggunakan sistem operasi GNU/Linux settingan template tersebut berada
pada direktori /usr/local/inkscape/share/templates dengan nama default.svg.
### 2.2. Membuka File
Gambar yang dibuat menggunakan Inkscape secara otomatis disimpan dalam bentuk
SVG. Gambar yang sudah dibuat sebelumnya dapat dibuka secara langsung dengan
melakukan klik dua kali atau cara lain sesuai sistem operasi yang dipakai.
#### 2.2.1. Cara Membuka File
Untuk membuka file yang sudah dibuat sebelumnya lakukan langkah berikut: klik
File => Open, atau tekan Ctrl+O pada keyboard, cara lainnya klik ikon Open pada
Command Bar, kemudian lakukan pencarian file yang akan dibuka pada direktori
komputer Anda.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.2.Cara_Membuka_File.png]
Untuk melihat tampilan gambar yang akan dibuka, beri tanda centang (check list)
pada menu Enable preview, sedangkan untuk menampilkan semua jenis File klik
menu All Inkscape Files, setelah document yang akan dibuka sesuai dengan
pilihan, klik Open atau klik dua kali. Jika File yang akan dibuka formatnya
bukan SVG maka akan tampil pesan peringatan untuk memasukkan gambar dengan
menempelkannya (embed) atau melalui tautan (link), pilih salah satu kemudian
klik Ok.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.2.1.png_GDK.png]
Cara lain untuk membuka File adalah dengan melakukan pencarian pada direktori,
pilih file tersebut => klik kanan Open with Inkscape.
#### 2.2.2. Open Recent
Open Recent digunakan untuk membuka file yang terakhir dikerjakan dengan
memilih nama file yang ada dalam daftar submenu. Daftar File terbaru mencakup
seluruh sistem file yang terakhir dibuka. Daftar file yang ada dapat
dibersihkan melalui jendela Inkscape Preferences => Interface => Maximum
document in Open Recent => Clear list, sedangkan untuk menentukan jumlah list
pada submenu tersebut dapat dilakukan dengan mengganti nilai yang sudah ada
dengan nilai tertentu yang dinginkan.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.2.2.Open_Recent.png]
###### Catatan:
Jika ingin membuka file dari media lain atau dari direktori yang tidak
terdaftar pada sistem operasi yang dipakai sebaiknya kaitkan (mount) terlebih
dulu pada media tersebut
#### 2.2.3. Revert
Mengembalikan file ke kondisi semula sebelum dilakukan perubahan, cara ini
berjalan pada gambar bitmap.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.2.3.Revert.png]
### 2.3. Save File
Agar document atau gambar yang dibuat dapat di gunakan sewaktu-waktu maka perlu
disimpan, untuk melakukan penyimpanan lakukan langkah-langkah berikut: Arahkan
kursor ke Menu Bar klik File => Save, atau tekan tombol Ctrl+S pada keyboard
secara bersamaan, cara lain dapat dilakukan dengan klik ikon Save pada Command
Bar
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.3.Save_File.png]
Maka tidak beberapa lama keluar tampilan menu untuk melakukan penyimpanan,
arahkan kursor ke Lokasi penyimpanan, sebagai contoh klik folder Pictures atau
folder lainnya, pada tab Name tulis judul yang diinginkan, sedangkan untuk
memilih jenis file yang akan disimpan klik Inkscape SVG (*.svg) atau pilih
jenis file yang sesuai, kemudian klik Save
#### 2.3.1. Save AS (Shift+Ctrl+S
Save As atau Simpan Sebagai digunakan untuk menyimpan File dengan nama dan
format lain. Dibawah ini beberapa format yang dapat disimpan oleh Inkscape
dengan beberapa keterangannya:
  * .svg ( Satandar SVG), format standar Inkscape, semua bentuk object yang
      dibuat lebih mudah diedit dikemudian hari menggunakan Inkscape.
  * .svg (Plain SVG0, format SVG yang direkomendasikan sepenuhnya sesuai
      dengan spesifikasi W3C. Jika menggunakan format ini gambar object berupa
      shapes yang sudah banyak dimodifikasi akan diubah menjadi path.
  * .svgz (Compressed Inkscape SVG, Format SVG yang telah terkompres dengan
      gzip, ukuran file lebih kecil sehingga lebih mudah di download maupun di
      upload ke web.
  * .svgz (Compressed plain SVG), Format SVG gabungan antara Plain SVG dengan
      Compressed Inkscape SVG.
  * .pdf (Portable Document Format, Format standard yang dibuat oleh Adobe,
      biasanya digunakan untuk pertukaran file, dengan menggunakan format ini
      sebagian file yang terdiri dari banyak object dalam group tidak bisa
      terbaca dengan baik.
  * .png (Cairo PNG), Menyimpan file sebagai PNG melalui Cairo. Untuk
      melakukan eksport dengan hasil yang lebih baik dapat dilakukannya dengan
      cara klik File => Export Bitmap ... atau tekan tombol Shift+Ctrl+E pada
      keyboard.
  * .ps atau .eps (Encapsulated PostScript?), Format standar yang digunakan
      pada printer jaman dulu (antara tahun 1980-an s/d 1990-an) biasanya untuk
      object campuran antara vektor dan raster.
  * .pov (Pov Ray or path and shapes only), Format file ray yang dibuat untuk
      render 3D. File disimpan dalam bentuk Shapes dan path namun stroke tidak
      ikut tersimpan.
  * .fx (Javafx), Menyimpan file dalam format JavaFX melalui rutin yang
      berjalan didalam Inkscape, hanya Path dan Shapes yang didukung dengan
      baik.
  * .odg (Open Document drawing), Format standar yang dipakai oleh
      OpenOffice? Drawing atau LibreOffice? Drawing.
  * .tex (Latex With PSTricks macros), Format standar yang dipakai LateX.
  * .wmf (Windows Metafile), Format yang dipakai oleh Microsoft, untuk dapat
      menjalankan mode ini membutuhkan UniConvertor? 1.1.4 atau versi yang
      lebih baru lagi.
  * .xcf (GIMP XCF maintaining layers), Format dengan metode layer yang
      digunakan GIMP.
  * .zip (Jessyink zipped or png output), Format untuk memperkecil gambar
      berupa file SVG menjadi paket zip secara langsung, file yang dihasilkan
      tidak dapat dibaca langsung oleh Inkscape (untuk dapat membukanya harus
      di ekstrak dulu). File yang tersimpan dalam paket zip dapat berupa *.png
      atau *.pdf.
  * .gpl (GIMP Palette), Menyimpan daftar warna yang digunakan dalam gambar
      menjadi file Palette Gimp.
  * .dxf (AutoCAD DXF R12/R14)(*), Format standar untuk gambar teknik,
      biasanya digunakan untuk bertukar file dengan perangkat lunak Autocad.
  * .plt or .hpgl (HP Graphic Language Plot file [Auto CAD]), Menyimpan file
      dalam bentuk format HPGL, digunakan pada berbagai alat plotter dan
      cutter. Untuk dapat menjalankan mode ini membutuhkan UniConvertor? 1.1.4
      atau versi yang lebih baru.
  * .sk1 (sK1 vector graphics files), Untuk menyimpan file dalam bentuk
      sketsa, agar dapat menjalankan mode ini membutuhkan UniConvertor? 1.1.4
      atau versi yang lebih baru.
  * .xaml (Microsoft XAML), Format yang dikembangkan oleh Microsoft untuk
      antarmuka grafis pada Windows Vista.
#### 2.3.2. Simpan Sebagai Salinan (Shift+Ctrl+Alt+S)
Digunakan untuk menyimpan File lama dengan nama yang sama pada direktori lain.
###### Catatan
Inkscape juga menyediakan fitur untuk menyimpan perubahan secara otomatis
(autosave), fitur ini dapat diaktifkan melalui jendela Inkscape Preferences =>
Save, jeda waktu dan maksimum penyimpanan dapat diatur dengan megubah nilai
yang sudah ada dengan nilai tertentu pada kotak yang tersedia.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.3.2.Auto_Save.png]
### 2.4. Import File
Inkscape mampu mengimpor berbagai jenis file vektor dan bitmap termasuk
mengimpor teks. Beberapa jenis file ditangani secara internal oleh GDK,
misalnya file dengan format ani, bmp, gif, ico, ICNS, jpeg, PCX, png, pnm, ras,
tga, tiff, WBMP, xbm, XPM dan lain-lain. Beberapa format lain dapat dibuka
dengan program tambahan. Salah satu fitur khusus pada Inkscape dapat digunakan
untuk mengimpor gambar dari web adalah Open Clip Art Library.
#### 2.4.1. Menjalankan Import File
Terdapat dua metode yang dapat dilakukan untuk mengimpor file ke halaman kerja
yang sudah terbuka. Cara pertama adalah dengan menggunakan Window manager
kemudian menyeret file yang dipilih ke halaman Inkscape dan melepaskannya (drag
and drop). Sedangkan cara kedua dengan cara klik File => Import (Ctrl+I)
kemudian klik dua kali file yang akan dibuka. Berikut daftar file yang dapat di
import oleh Inkscape (untuk yang bertanda * [bintang] penulis belum mengujinya)
  * .ai (Adobe Illustrator)* versi 9.0 yang dapat dibuka, pada Inkscape v0.47
      membutuhkan Uni Converter untuk dapat membukanya.
  * ai.svg (Adobe Illustrator SVG)
  * .ani (Animation Cursor)
  * .bmp (Windows Bitmap)
  * .cdr, .ccx, .cdt, .cmx (Corel DRAW), untuk membukanya membutuhkan
      UniConvertor?. File cdr Versi 7 sampai dengan X4 membutuhkan
      UniConvertor? 1.1.1.3 atau versi yang lebih baru.
  * .cgm (Computer Graphics Metafile)* untuk membukanya membutuhkan
      UniConvertor?.
  * .cur (Windows cursor)
  * .dia (Dia) untuk dapat membuka format ini membutuhkan program Dia yang
      terpasang pada sistem operasi yang sama.
  * .dxf (Auto CAD), Impor dilakukan dengan script internal, Import ditujukan
      untuk AutoCAD versi 13, untuk membuka file versi dibawahnya disarankan
      menggunakan program QCad atau FreeCad?.
  * .eps (Encapsulated PostScript?), membutuhkan Ghostscript dengan utility
      ps2pdf pada PATH. File EPS dikonversi terlebih dulu ke format PDF
      kemudian baru diimpor. Pada Inkscape v0.47 dan dibawahnya membutuhkan
      pstoedit.
  * .fig (XFig), Membutuhkan xfig (fig2dev) yang harus diinstal.
  * .ggr (Gimp gradient), membutuhkan program Gimp untuk dapat melakukannya.
      Gradient yang di impor akan muncul pada menu Gradien, fitur ini hanya
      bekerja untuk Gradient linear.
  * .gif (GIF: Graphic Interchange Format)
  * .icns (Apple Icon Image icon icon)
  * .ico (Windows icon)
  * .jpg, .jpe, .jpeg, jp2, .jpc, .jpx, .j2k, .jpf (JPEG and JPEG2000: Joint
      Photographic Experts Group)
  * .pbm, .pgm, .pnm, .ppm (PNM, Portable Anymap)
  * .pcx (PC Paintbrush Bitmap Format)
  * .pdf (Adobe Portable Document Format), didukung native melalui poppler
      library.
  * .plt (HPGL File for desktop cutters), untuk membukanya membutuhkan
      UniConvertor? 1.1.4 atau versi yang lebih baru.
  * .png (PNG: Portable Network Graphic)
  * .ps (PostScript?), membutuhkan Ghostscript dengan utility ps2pdf pada
      PATH.
  * .ras (Sun Raster)*
  * .sk (Sketch /Skencil), Membutuhkan Skencil yang terpasang dengan baik.
  * .sk1 (sK1, fork of Sketch), untuk membukanya membutuhkan UniConvertor?
  * .svg (SVG)
  * .svgz (SVG Compressed)
  * .tga, .targa (Truevision Advanced Raster Graphics Adapter).
  * .tif, tiff (TIFF: Tagged Image Format)
  * .txt (Text), membutuhkan modul Perl SVG.pm. Teks diimpor sebagai group
      object teks biasa.
  * .wbmp (Wireless Application Protocol Bitmap Format).
  * .wmf (Windows Meta File) membutuhkan UniConvertor?
  * .wpg (WordPerfect? Graphics)*.
  * .xaml (Microsoft Application eXtensible Markup Language)*.
  * .xbm (X-BitMap?).
  * .xpm (X-Pixmap)
#### 2.4.2. Import dari Open Clip Art Library
Fitur ini akan mengimpor object secara langsung dari situs ​http://
openclipart.org/. Untuk menjalankan fitur ini klik File => Import From Open
Clip Art Library, maka segera muncul jendela untuk menghubungkan ke situs Open
Clip Art Library
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.4.2.Import_dari_Open_Clip_Art_Library.png]
###### Catatan:
Untuk dapat menjalankan fitur ini komputer harus terhubung dengan internet atau
dalam jaringan Jika fitur ini tidak berjalan dengan baik, silakan lakukan
pengaturan nama server ke openclipart.org pada jendela Inkscape Preferences =>
Import /Export
### 3.5. Export File
Inkscape mampu mengekspor gambar pada berbagai jenis file grafis vektor dan
bitmap. Metode ekspor yang dapat dilakukan dibagi dua yaitu export langsung
menjadi PNG dan eksport secara langsung menjadi format lain yang didukung oleh
Inkscape. Standar grafis PNG adalah standar yang didukung secara native oleh
semua web browser utama dan program grafis pada umumnya.
#### 2.5.1. Export to PNG
Untuk melakukan export file menjadi PNG, klik File => Export Bitmap atau tekan
Shift+Ctrl+E Pada jendela pengaturan terdapat 4 (empat) Tab yang dapat dipilih
dan digunakan untuk melakukan pengaturan pada gambar yang akan di ekspor
(kecuali pad tab Custom).
  * Page: hanya object yang berada di dalam area halaman yang di ekspor.
      Format file yang semula SVG diubah menjadi png, namun format SVG tetap
      ada.
  * Drawing: ekspor semua object dalam canvas, object paling pinggir menjadi
      pembatas gambar hasil ekspor.
  * Selection: ekspor object yang dipilih, bject paling pinggir menjadi
      pembatas gambar hasil ekspor. Nama gambar sesuai dengan nama Object yang
      dipilih.
  * Custom: ekspor gambar dengan batas sesuai ukuran yang ditentukan secara
      manual.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.5.1.Export_to_PNG.png]
###### Keterangan
  * Area dan ukuran gambar yang akan diekspor dapat diatur dan dimodifikasi
      pada kotak pengaturan yang disediakan dengan mengubah nilai yang sudah
      ada dengan nilai tertentu sesuai keinginan. Pada menu Bitmap size ukuran
      lebar (width) dan tinggi (height) dapat diatur sesuai keinginan, jika
      salah satu ukuran diubah maka ukuran lainnya akan mengikuti, misalnya
      ukuran tinggi diubah maka ukuran lebar ikut berubah, begitupun
      sebaliknya, namun modus ini tidak berlaku pada tab Page.
  * Ukuran resolusi bawaan yang digunakan Inkscape adalah 72 dpi, namun dapat
      diubah secara manual, semakin tinggi nilai dpi yang dipakai maka semakin
      besar juga ukuran kapasitas gambar yang dihasilkan hasilnyapun semakin
      baik. Menu Filename untuk menentukan letak file dan memberi nama file
      hasil ekspor, klik Browser untuk menuju ke direktori yang diinginkan.
###### Catatan
  * Jika ingin mengekspor gambar yang berasal dari shape dan path sebaiknya
      gunakan antara 200 s/d 300 dpi, sedangkan jika yang akan dieksport gambar
      berupa text gunakan nilai 150 dpi.
### 2.6. Printing Files
Untuk mencetak (print) gambar secara langsung dapat dilakukan dengan cara klik
File => Print atau tekan Ctrl+P. Cara lain klik ikon Printing pada Command Bar.
Standard untuk mencetak pada Inkscape adalah GTK, hal ini dapat mencetak gambar
dengan baik seperti standard pada PostScript? atau file PDF.
###### Catatan
Pada beberapa Distro GNU /Linux tertentu proses printing secara langsung dari
Inkscape kadang mengalami masalah terutama jika menggunakan mesin printer yang
belum mendukung driver secara native, solusinya simpanlah project dengan format
PDF, kemudian buka file dan print menggunakan aplikasi pembuka file PDF yang
sudah disediakan oleh Distro Linux yang dipakai.
### 2.7. Vacuuming Files
Perintah File => Vacuum Defs untuk menghilangkan definisi bagian dari <defs>
pada file SVG yang tidak terpakai. Cara ini digunakan untuk menghilangkan
gradients, patterns, markers, dan filters yang tidak terpakai.
### 2.8. Close File
Untuk menutup program Inkscape ada beberapa cara yaitu
  * Klik kiri File => Close atau tekan Ctrl+W.
  * Klik kiri pada tanda silang dipojok kanan atas
#### 2.8.1. Pesan Peringatan
Sebuah pesan peringatan akan muncul apabila kita menutup Inkscape yang
sebelumnya sudah melakukan perubahan pada object namun perubahan tersebut belum
disimpan
  * Klik Save untuk menyimpan dokumen.
  * Close without saving, menutup tanpa menyimpan perubahan.
  * Cancel untuk batal menutup dan program Inkscape akan tetap terbuka.
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/
2.8.1.Pesan_Peringatan.png]
[/raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Mundur.png] [/
raw-attachment/wiki/Dokumentasi/Panduan/Grafik/Inkscape/Bab2/Maju.png]
Last modified on 11/24/2014 08:17:20 PM
#### Attachments (11)
  * 2.2.1.png_GDK.png​ (27.2 KB) - added by imgos 3 years ago.
  * 2.2.2.Open_Recent.png​ (74.7 KB) - added by imgos 3 years ago.
  * 2.2.3.Revert.png​ (13.0 KB) - added by imgos 3 years ago.
  * 2.2.Cara_Membuka_File.png​ (113.5 KB) - added by imgos 3 years ago.
  * 2.3.2.Auto_Save.png​ (56.3 KB) - added by imgos 3 years ago.
  * 2.3.Save_File.png​ (86.8 KB) - added by imgos 3 years ago.
  * 2.4.2.Import_dari_Open_Clip_Art_Library.png​ (61.5 KB) - added by imgos 3
      years ago.
  * 2.5.1.Export_to_PNG.png​ (38.5 KB) - added by imgos 3 years ago.
  * 2.8.1.Pesan_Peringatan.png​ (22.0 KB) - added by imgos 3 years ago.
  * Maju.png​ (712 bytes) - added by istana 3 years ago.
  * Mundur.png​ (700 bytes) - added by istana 3 years ago.
#### 
    
 
 
 
 
 
---
 
