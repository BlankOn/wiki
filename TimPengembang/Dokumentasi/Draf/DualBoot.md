# DualBoot

Dual boot adalah dua sistem operasi yang bisa di boot secara bergantian didalam satu system komputer. Misal Blankon dengan Ms Windows, Blankon dengan 
distro linux lainya. Dual boot di perlukan di mana kita ingin migrasi ke blankon yang membutuhkan pembelajaran. inti dalam dual boot adalah kita perlu 
beberapa partisi hardisk yang akan di tempati sistem operasi dan mungkin satu partisi data. untuk itu membutuhkan aplikasi pemartisi semisal gparted, 
qparted, atau partition magic. Langkah-Langkah mempersiapkan dual boot.

   1. Persiapkan partisi. Sebelum memulai pemasangan, terlebih dahulu persiapkan partisi kosong untuk yang akan digunakan sebagai tempat pemasangan 
BlankOn. Misal di Windows, Anda mempunyai drive C dan D. Salin data yang ada di Drive D ke media lain (flashdisk, eksternal harddisk, atau harddisk 
lain). Drive D akan kita gunakan sebagai tempat instalasi BlankOn. Jika Anda mempunyai drive C, D, dan E. Anda bisa memindahkan data di drive E ke 
drive D, lalu drive E yang akan kita gunakan untuk instalasi BlankOn. Jika semua bagian harddisk sudah terpartisi, Anda bisa memotong partisi harddisk 
terakhir dengan langkah berikut ini:
     PERINGATAN! Jika partisi tersebut merupakan partisi Windows, lakukan terlebih dahulu Defragmenting melalui tools “Disk Defragmenter” yang 
terdapat di sistem operasi Microsoft Windows. Hal ini untuk menghindari partisi yang rusak pada saat melakukan pemotongan partisi.
   1. Buka aplikasi Editor Partisi melalui menu Sistem Administrasi Gparted (Editor Partisi).
   1. Pada baris partisi yang ditampilkan, klik kanan pada partisi terakhir
      (yang paling kanan), lalu pilih menu Ubah Ukuran/Pindahkan?.
   1. Tentukan ukuran baru dari partisi yang Anda potong pada opsi Ukuran Baru (MiB). Kemudian, klik tombol Ubah Ukuran/Pindahkan?.
   1. Terakhir, klik tombol Terapkan pada toolbar untuk menerapkan perubahan yang dilakukan. Sekarang, Anda sudah memiliki partisi kosong yang bisa 
Anda manfaatkan untuk pemasangan BlankOn. 2.5 Memasang BlankOn melalui Live CD Untuk pemasangan melalui Live CD, Anda harus mempersiapkan Live CD dari 
BlankOn 6.0 Ombilin. Masukkan CD tersebut ke dalam CD/DVD-ROM drive pada komputer Anda. Restart komputer Anda dan Anda akan melihat menu awal dari 
Live CD BlankOn 6.0 Ombilin, tekan tombol Enter untuk masuk ke modus Live CD, maka sistem operasi BlankOn 6.0 Ombilin akan mulai dijalankan melalui 
CD. Tunggu sebentar sampai desktop BlankOn 6.0 Ombilin muncul. Proses booting memakan waktu sekitar 1 menit lamanya. Sekarang, Anda sudah memiliki 
partisi kosong yang bisa Anda manfaatkan untuk pemasangan BlankOn.
   1. Intalasi blankon Untuk pemasangan melalui Live CD, Anda harus mempersiapkan Live CD dari BlankOn 6.0 Ombilin. Masukkan CD tersebut ke dalam 
CD/DVD-ROM drive pada komputer Anda. Restart komputer Anda dan Anda akan melihat menu awal dari Live CD BlankOn 6.0 Ombilin, tekan tombol Enter untuk 
masuk ke modus Live CD, maka sistem operasi BlankOn 6.0 Ombilin akan mulai dijalankan melalui CD. Tunggu sebentar sampai desktop BlankOn 6.0 Ombilin 
muncul. Proses booting memakan waktu sekitar 1 menit lamanya. Last modified on 10/29/2010 01:21:34 AM

---
 



