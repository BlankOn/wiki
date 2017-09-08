# Tutorial Mencari Nama Aplikasi
Kadangkala ada beberapa aplikasi yang perlu disesuaikan, Namun proses
penyesuaian aplikasi tersebut harus mengetahui nama paket dari aplikasi
tersebut. untuk mencari tahu nama aplikasi dan nama paket bisa dilakukan dengan
banyak cara, beberapa diantaranya adalah sebagai berikut :
### Melalui Peluncur
Contoh kali ini akan mencari nama paket dari aplikasi "Aplikasi Pilihan" yang
ada di Sistem -> Preferensi -> Aplikasi Pilihan, langkahnya sebagai berikut :
    * Klik menu Sistem -> Preferensi
    * Klik kanan pada "Aplikasi Pilihan"
    * Pilih menu "Tambahkan peluncur ini ke desktop"
    * Setelah peluncur berada di desktop, klik kanan ikon peluncur tersebut.
    * Pilih menu Properti
    * Lihat pada bagian perintah
    * Jalankan Terminal
    * ketik dpkg -S <nama perintah>
    * Muncul hasil yang akan menginformasikan nama paket dari aplikasi
      tersebut.
### Melalui Nama Proses
Masih tetap menggunakan "Aplikasi Pilihan" sebagai contoh, kali ini kita akan
mencari tahu nama paket dari sebuah aplikasi, menggunakan nama proses yang
berjalan, dari nama proses tersebut bisa dijalankan perintah untuk mencari nama
paket yang membawa aplikasi tersebut. berikut ini langkah - langkahnya :
    * Jalankan aplikasi "Aplikasi Pilihan" dari menu Sistem -> Preferensi
    * Buka Terminal
    * Dari terminal ketikan perintah : xprop | grep _NET_WM_PID
    * Kursor akan berubah menjadi tanda tambah (+)
    * Klik pada jendela "Aplikasi Pilihan"
    * Pada terminal akan muncul id proses dari apliksi yang di klik tersebut.
    * Langkah selanjutnya adalah mencari tau nama proses dari id proses
      tersebut.
    * Dari terminal ketikan : ps aux | grep <id proses>
    * Sampai sini kita sudah mendapatkan nama proses nya.
    * Jalankan dari terminal : dpkg -S <nama proses>
    * \0/ Nama paket berhasil kita dapatkan.
==
Ditulis oleh Somat dibimbing oleh Mohammad Dhani Anwari Mohammad Taib (mdamt).
Last modified on 04/28/2010 04:28:04 PM
#### 
    
 
 
 
 
 
---
 
