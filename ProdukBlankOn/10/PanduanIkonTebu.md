# Panduan Ikon Tebu Tambora
[/raw-attachment/wiki/Kesenian/MenujuTambora/PanduanIkonTebu/ikonsettebu300px.png]

Rencananya, set ikon Tebu akan digunakan sebagai ikon di rilis Tambora,
menggantikan set ikon Komodo 2.0. Set ikon ini pertama kali diusung oleh Sdr.
​Heru_Setiawan, yang mengambil gagasan dari ​Sugar_Icon dan ​SuperBundle
Compass.

**Panduan Umum Pembuatan Ikon**
Gaya ikon Tebu adalah seolah-olah timbul seperti sebuah tombol dengan perpaduan
warna yang lembut (tidak glossy, tidak terlalu flat).
[/raw-attachment/wiki/Kesenian/MenujuTambora/PanduanIkonTebu/
tebuguiderevised.png]
   1. Lapis dasar, dimana ikon digambar.
   2. Lapis bayangan.
   3. Lapis bayangan.
   4. Lapis bayangan.
   5. Lapis bayangan.
   6. Lapis sisi samping tombol untuk menimbulkan kesan timbul seolah-olah
      berbentuk tombol.
   7. Lapis garis pinggir di bawah ikon.
Bila ingin membuat bayangan, gunakanlah trik bayangan seperti lapis 2 s/d 5
karena hasil seperti itu lebih ringan untuk dirender. Hindari pembuatan
bayangan dengan fitur 'blur'.
Contoh :
[/raw-attachment/wiki/Kesenian/MenujuTambora/PanduanIkonTebu/contoh295px.png]
**Forking dari set ikon Faenza**
Keseluruhan set ikon Tebu akan terdiri dari :
    * actions
    * apps
    * categories
    * devices
    * emblems
    * extras
    * mimetypes
    * places
    * status
    * stock
Hanya apps dan places yang dibuatkan gaya Tebu, sedangkan sisanya tetap Faenza.
**Berkas Template**
Untuk memulai bekerja, silakan unduh berkas template : ​http://
dev.blankonlinux.or.id/attachment/wiki/Kesenian/MenujuTambora/PanduanIkonTebu/
tebu-template.svg
Gunakan berkas tersebut sebagai patokan untuk membuat ikon.
**Ekspor sekaligus menjadi berkas PNG.**
Gunakan skrip berikut, jalankan di direktori dimana berkas svg berada. Atur
panjang dan lebarnya (--export-height=? --export-width=?)
#!/bin/bash
mkdir export
SAVEIF=$IFS
IFS=$(echo -en "\n\b")
for file in $(ls *svg)
do
  name=${file%%.svg}
  inkscape $name.svg --export-png=$name.png --export-height=96 --export-
width=96
  mv $name.png export/
done
Last_modified 3 years ago Last modified on 03/08/2014 06:47:20 AM
**Attachments (8)**
    * 1495969_10200352755261928_960974577_o.jpg​ (56.9 KB) - added by piko 3
      years ago. Set ikon Tebu oleh Sdr. Heru Setiawan
    * 1495969_10200352755261928_960974577_o.2.jpg​ (56.9 KB) - added by piko 3
      years ago.
    * ikonsettebu300px.png​ (58.3 KB) - added by piko 3 years ago.
    * lapisan_ikon400px.png​ (11.9 KB) - added by piko 3 years ago.
    * contoh_satruasi323px.png​ (14.8 KB) - added by piko 3 years ago.
    * contoh295px.png​ (21.6 KB) - added by piko 3 years ago.
    * tebuguiderevised.png​ (5.8 KB) - added by piko 3 years ago.
    * tebu-template.svg​ (68.0 KB) - added by piko 3 years ago.
Download all attachments as: .zip

