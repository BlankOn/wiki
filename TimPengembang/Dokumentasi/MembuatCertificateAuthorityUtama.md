# Lokakarya Membuat Certificate Authority Utama

Lokakarya ini diselenggarakan pada tanggal 25 Februari 2011 bertempat di irc.freenode.net channel #blankon oleh bapak Fajran Iman Rusadi.

Dalam kriptografi, Certificate Authority (CA) adalah sebuah entitas yang mengeluarkan sertifikat digital yang dapat digunakan pihak-pihak lainnya. Para CA merupakan contoh pihak-pihak yang dapat dipercayai, khususnya dalam transaksi secara online di internet.​ http://id.wikipedia.org/wiki/Certificate_authority

Jika kita berbicara tentang Certificate Authority (CA) ada 2 istilah yang akan mengikuti diantaranya: Identitas dan Kepercayaan (trust). Secara analogi kita bisa membuat sertifikat untuk identitas kita tapi apakah identitas kita dipercaya oleh orang lain.

Mari kita langsung ke tutorial. 

# Membuat Certificate Authority Utama
1.Buat direktori kerja 
  ```
$mkdir ca-utama
```
```
$cd ca-utama
```

2.Salin kode pembantu dari /usr/lib/ssl/misc/CA.pl 
```
$cp /usr/lib/ssl/misc/CA.pl .
```

3.Buat CA baru **$./CA.pl -newca** 
Sertifikat akan disimpan di demoCA/cacert.pem. Untuk melihat informasi detail mengenai sebuah sertifikat, kita bisa menggunakan openssl, sebagai berikut
**$openssl x509 -in demoCA/cacert.pem -text**
Salah satu karakteristik sertifikat CA adalah sertifikat ini dipakai untuk menandatangani dirinya sendiri. Dalam informasi sertifikat, hal ini dapat dilihat pada bagian Subject dan Issuer.
**$ openssl x509 -in demoCA/cacert.pem -text |grep 'Subject:\|Issuer'**
Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA
Subject: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA

Bisa dilihat isi keduanya sama, hal ini menunjukkan self-signed certificate atau sertifikat yang ditandatangani sendiri.

# Membuat Sertifikat Baru

1.Buat permintaan sertifikat baru 
**$./CA.pl -newreq**

2.Tandatangani permintaan sertifikat tersebut dengan CA yang ada 
**$./CA.pl -sign**

Setelah ditandatangani, akan ada 3 buah berkas yaitu newcert.pem, newkey.pem, dan newreq.pem. Berkas newreq.pem bisa dihapus karena sudah tidak dipakai lagi. Berkas ini hanya berisi permintaan pembuatan sertifikat, bukan sertifikat akhir. Berkas newcert.pem dan newkey.pem adalah dua berkas yang harus diamankan karena berkas ini adalah berkas sertifikat dan kuncinya.
Mari kita cek judul dan penerbit sertifikat baru ini.

**$openssl x509 -in newcert.pem -text | grep 'Subject:\|Issuer:'**
```
Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA
Subject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik
```
Sekarang kita sudah punya sebuah sertifikat baru yang telah ditandatangani oleh CA yang kita buat di awal.

# Menjadikan Sertifikat Baru sebagai CA Kedua

1.siapkan direktori kerja baru 
```
$cd ..
$mkdir ca-kedua
$cd ca-kedua
$cp /usr/lib/ssl/misc/CA.pl .
```
2.Agar kode CA.pl dapat bekerja, kita harus mempersiapkan lingkungan kerjanya dengan opsi -newca. Namun alih-alih menyuruh kode tersebut untuk membuat sertifikat CA baru, kita bisa menggunakan sertifikat yang sudah ada. 
```
**$./CA.pl -newca**
CA certificate filename (or enter to create)
../ca-utama/newcert.pem
```

3.Salin berkas kunci sertifikat 
**$cp ../ca-utama/newkey.pem demoCA/private/cakey.pem**

4.Siapkan nomor seri baru 

**$echo 00 > demoCA/serial**

Sama seperti sebelumnya, sertifikat CA ada di demoCA/cacert.pem. Mari kita cek isinya.
```
**$openssl x509 -in demoCA/cacert.pem -text | grep 'Subject:\|Issuer:'
Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA
Subject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik
```
Persis sama dengan sertifikat yang dibuat sebelumnya khan? Memang sertifikat itu yang akan dipakai menjadi CA baru ini.

# Membuat Sertifikat dengan CA Tingkat Kedua tadi

1.Buat permintaan sertifikat seperti biasa. 
**./CA.pl -newreq**

2.Tandatangani sertifikat tersebut 
**./CA.pl -sign**

Seperti biasa, kita akan menjumpai 3 berkas baru. Mari kita cek informasi sertifikat baru ini.
```
$openssl x509 -in newcert.pem -text | grep 'Subject:\|Issuer:'
Issuer: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik
Subject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Pabrik, CN=Pekerja64
```
Dapat dilihat sertifikat baru ini ditandatangani oleh CA kedua yang telah kita buat.

# Bertingkat

Mari kita lihat informasi 3 sertifikat yang telah kita buat.

1.CA Utama 
**$openssl x509 -in ../ca-utama/demoCA/cacert.pem -text | grep 'Subject:\|Issuer:'**
```
Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA
Subject: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA
```
2.CA Kedua 

**$openssl x509 -in demoCA/cacert.pem -text | grep 'Subject:\|Issuer:'**
```
Issuer: C=ID, ST=Jakarta, O=BlankOn, OU=Infrastruktur, CN=CA
Subject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik
```

3.Sertifikat Biasa 
** $openssl x509 -in newcert.pem -text | grep 'Subject:\|Issuer:' **
```
Issuer: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Irgsh, CN=CA Pabrik
Subject: C=ID, ST=Jakarta, L=Jakarta, O=BlankOn, OU=Pabrik, CN=Pekerja64
```
Referensi :
```
   ​http://ngoprek.fajran.web.id/2011/02/membuat-certificate-authority.html
   ​http://idforge.or.id/irclogs/blankon/%23blankon.2011-02-25.log
 ```



