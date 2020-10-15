
# Bab 2 Memasang BlankOn
**Panduan BlankOn 6**

Bab ini membahas cara memasang BlankOn di komputer. Pemasangan BlankOn sangat
mudah dilakukan jika Anda sudah memahami persiapan dan langkah-langkah apa saja
yang perlu dilakukan. Pada bab ini, dibahas mengenai persiapan dan langkah-
langkah melakukan pemasangan BlankOn.
### Kebutuhan sistem
Sebelum melakukan pemasangan, terlebih dahulu komputer Anda harus memenuhi
syarat spesifikasi minimal agar BlankOn bisa berjalan dengan lancar. Berikut
adalah syarat spesifikasi minimal untuk BlankOn 6.0 :
  * Prosesor setara Pentium IV atau Celeron,
  * Memori RAM 256 MB,
  * Kartu Video atau VGA minimal memiliki memori 64 MB untuk efek desktop,
      dan
  * Harddisk dengan ukuran 6 GB.
### Cara Mendapatkan CD BlankOn
Untuk mendapatkan CD BlankOn, Anda bisa mengunduh image atau cetakan CD-nya
dari situs ​http://cdimage.blankonlinux.or.id. Berkas cetakan tersebut
selanjutnya dibakar ke CD kosong menggunakan aplikasi pembakar CD seperti
Brasero, K3b, Nero, Roxio, dsb.
     TIP: Jika mengunduh terasa lambat, Anda bisa memanfaatkan situs
     cermin (mirror) sebagai sumber mengunduh berikut ini :
  * ​http://kambing.ui.ac.id/iso/blankon
  * ​http://mirror.unej.ac.id/blankon-cd
  * ​ftp://dl2.foss-id.web.id/iso/blankon
  * ​http://buaya.klas.or.id/pub/blankon
  * ​http://pandawa.ipb.ac.id/iso/blankon/
  * ​http://repo.ugm.ac.id/iso/blankon
  * ​http://jaran.undip.ac.id/public/ISO/
  * ​http://mugos.ums.ac.id/iso/Blankon
Bagi Anda yang memiliki koneksi internet terbatas atau bahkan tidak memiliki
koneksi internet sama sekali, jangan khawatir. Anda bisa membeli CD BlankOn
melalui toko penjual CD/DVD Linux atau meminjamnya dari teman yang telah
memilikinya. Berikut adalah beberapa Toko penjual CD/DVD Linux yang ada di
Indonesia :
  * Juragan Kambing (​http://juragan.kambing.ui.ac.id)
  * Toko Baliwae (​http://toko.baliwae.com)
  * Gudanglinux (​http://gudanglinux.com)
  * Toko Ku Online (​http://tokoku-online.com/)
  * dll.
### Persiapan menjelang pemasangan
Sebelum melakukan pemasangan BlankOn, lakukan beberapa persiapan seperti
berikut:
   1. Persiapkan CD BlankOn sebagai bekal untuk proses pemasangan, baca kembali
      subbab sebelumnya untuk mengetahui cara mendapatkan CD BlankOn, pastikan
      CD dalam keadaan baik agar proses pemasangan lancar.
   1. Backup atau buat cadangan dari data penting Anda ke media penyimpanan
      cadangan (seperti Flash Disk, Harddisk lain, CD/DVD) agar data Anda aman
      dan terhindar dari resiko kehilangan data.
   1. Tentukan skema partisi harddisk yang Anda inginkan. Partisi merupakan
      bagian ruang-ruang data yang terdapat di harddisk. Jika Anda ingin
      melakukan dual-boot (terdapat dua sistem operasi dalam satu komputer),
      Anda harus membuat partisi baru pada harddisk komputer yang nantinya akan
      digunakan sebagai tempat pemasangan BlankOn. Pembahasan lebih lanjut
      dijelaskan pada subbab tentang langkah pemasangan.
   1. Pastikan untuk menjaga kestabilan tegangan listrik. Hal ini untuk
      menghindari listrik yang tiba-tiba padam saat pemasangan dan menyebabkan
      terjadinya kerusakan fisik pada komputer (terutama harddisk).
   1. Lakukan penyetelan BIOS agar komputer membaca CD terlebih dahulu untuk
      proses booting. Silahkan merujuk ke manual komputer atau motherboard Anda
      mengenai cara melakukan penyetelan ini.
### Persiapan Partisi
Sebelum memulai pemasangan, terlebih dahulu persiapkan partisi kosong untuk
yang akan digunakan sebagai tempat pemasangan BlankOn. Misal di Windows, Anda
mempunyai drive C dan D. Salin data yang ada di Drive D ke media lain
(flashdisk, eksternal harddisk, atau harddisk lain). Drive D akan kita gunakan
sebagai tempat instalasi BlankOn. Jika Anda mempunyai drive C, D, dan E. Anda
bisa memindahkan data di drive E ke drive D, lalu drive E yang akan kita
gunakan untuk instalasi BlankOn. Jika semua bagian harddisk sudah terpartisi,
Anda bisa memotong partisi harddisk terakhir dengan langkah berikut ini:
     PERINGATAN! Jika partisi tersebut merupakan partisi Windows, lakukan
     terlebih dahulu Defragmenting melalui tools “Disk Defragmenter” yang
     terdapat di sistem operasi Microsoft Windows. Hal ini untuk
     menghindari partisi yang rusak pada saat melakukan pemotongan
     partisi.
   1. Buka aplikasi Editor Partisi melalui menu Sistem > Administrasi > Gparted
      (Editor Partisi).
   1. Pada baris partisi yang ditampilkan, klik kanan pada partisi terakhir
      (yang paling kanan), lalu pilih menu [>Ubah Ukuran/Pindahkan?<].
   1. Tentukan ukuran baru dari partisi yang Anda potong pada opsi [>Ukuran
      Baru (MiB)<]. Kemudian, klik tombol [>Ubah Ukuran/Pindahkan?<].
   1. Terakhir, klik tombol [>Terapkan<] pada toolbar untuk menerapkan
      perubahan yang dilakukan.
Sekarang, Anda sudah memiliki partisi kosong yang bisa Anda manfaatkan untuk
pemasangan BlankOn.
### Memasang BlankOn melalui Live CD
Untuk pemasangan melalui Live CD, Anda harus mempersiapkan Live CD dari BlankOn
6.0 Ombilin. Masukkan CD tersebut ke dalam CD/DVD-ROM drive pada komputer Anda.
Restart komputer Anda dan Anda akan melihat menu awal dari Live CD BlankOn 6.0
Ombilin, tekan tombol Enter untuk masuk ke modus Live CD, maka sistem operasi
BlankOn 6.0 Ombilin akan mulai dijalankan melalui CD. Tunggu sebentar sampai
desktop BlankOn 6.0 Ombilin muncul. Proses booting memakan waktu sekitar 1
menit lamanya.
[menu_awal]
     TIP: Jika terdapat masalah pada saat menampilkan antarmuka grafis,
     Anda bisa restart komputer dan memilih menu [>Coba BlankOn 6.0
     Ombilin (darurat)<] pada menu awal Live CD BlankOn.
[sedang_booting]
Setelah proses booting selesai, maka Anda akan melihat desktop BlankOn 6.0
Ombilin yang sangat cantik. Anda bisa mencobanya terlebih dahulu sebelum
memasangnya ke harddisk.
Untuk melakukan pemasangan BlankOn, klik ganda ikon [>Pasang<] pada Desktop.
Maka akan muncul sebuah wahana pandu yang membantu Anda dalam pemasangan
BlankOn. Berikut uraian setiap langkahnya :
  * [Selamat Datang]
      Pada langkah ini, pilih bahasa pengantar yang ingin Anda gunakan dalam
      proses pemasangan. Setelah itu, klik tombol [>Maju<].
[instalasi_blankon]
  * [Memilih Lokasi Anda]
      Pilih lokasi tempat tinggal Anda pada peta yang disediakan. Kemudian,
      klik tombol [>Maju<].
[instalasi_blankon_-_lokasi]
  * [Susunan Papan Tik]
      Pilih jenis papan tik (keyboard) yang Anda gunakan. Jenis papan tik yang
      umum digunakan di Indonesia adalah jenis Amerika Serikat (USA). Kemudian,
      klik tombol [>Maju<].
[instalasi_blankon_-_keyboard]
  * [Mempersiapkan ruang (partisi) Harddisk]
      Disini, Anda akan memilih skema tata ruang partisi harddisk yang Anda
      inginkan. Jika Anda ingin menghapus semua isi data dan partisi yang ada
      di harddisk, pilih mode [>Hapus dan gunakan seluruh cakram<]. Karena kita
      sudah mempersiapkan paritisi kosong, kita akan membuat partisi manual.
      Setelah itu, klik tombol [>Maju<].
[instalasi_blankon_-_buat_partisi]
  * [Titik kait root (/)]
      Pilih ruang atau partisi kosong, lalu klik tombol Tambah, isi paramater
      seperti gambar. Ukuran partisi / bisa disesuaikan dengan kapasitas
      harddisk yang Anda miliki. Jangan lupa memilih Titik kait /. Titik kait /
      merupakan partisi sistem.
[buat_partisi]
  * [Swap]
      Pilih ruang atau partisi kosong, lalu klik tombol Tambah, isi paramater
      seperti gambar. Ukuran partisi swap ini disesuai dengan memori komputer
      Anda. Biasanya 2 kali kapasitas memori. Misal Anda mempunyai memori 512
      MB, ukuran partisi swap 1024 MB.
[buat_partisi_swap]
  * [Titik kait beranda (home)]
      Pilih ruang atau partisi kosong, lalu klik tombol Tambah, isi paramater
      seperti gambar. Sisa kapasitas harddisk digunakan untuk partisi home ini.
[buat_partisi_home]
  * [Isi data diri]
      Isi nama lengkap anda, nama akun pengguna, dan sandi sesuai dengan yang
      Anda inginkan. Nama akun pengguna dan sandi akan Anda gunakan pada saat
      masuk ke sistem (login). Nama akun pengguna dan sandi ini juga akan
      memiliki hak administratif untuk melakukan pengaturan sistem secara
      mendalam. Jika Anda ingin masuk otomatis ke sistem tanpa perlu memasukkan
      id pengguna dan password, klik pada opsi [>Masuk secara otomatis<].
      Selanjutnya, klik tombol [>Maju<].
[instalasi_blankon_-_pengguna_dan_sandi]
  * [Migrasi data dan dokumen]
      Jika Anda ingin memigrasikan data Anda dari sistem operasi lain yang
      sudah terinstal ke sistem operasi BlankOn yang akan di-instal, beri tanda
      centang pada nama sistem operasi yang ingin Anda migrasikan datanya,
      kemudian klik tombol [>Maju<].
[instalasi_blankon_-_informasi_instalasi]
  * [Proses pemasangan]
      Jika Anda siap untuk melakukan pemasangan, klik tombol [>Maju<]. Maka
    akan dipasang ke partisi harddisk yang telah Anda tentukan.
      Proses pemasangan memakan waktu sekitar 5 sampai 30 menit, tergantung
      dari kecepatan komputer Anda. Sembari menunggu pemasangan, Anda bisa
      membuka berbagai permainan kecil yang ada di menu BlankOn > Permainan.
[instalasi_blankon_-_informasi_instalasi]
  * [Pemasangan berhasil]
      Selamat! Proses pemasangan telah berhasil dilakukan. Jika Anda ingin
      tetap lanjut menggunakan Live CD, klik tombol [>Lanjut Pengecekan<]. Jika
      tidak, klik tombol [>Restart sekarang<] untuk menghidupkan ulang
      komputer.
Pada saat pertama kali menghidupkan komputer, Anda akan melihat menu sistem
operasi yang bisa Anda jalankan. Jika Anda ingin menggunakan BlankOn, Anda bisa
memilih pilihan paling atas menggunakan tombol arah panah, dan tekan tombol
Enter. Jika Anda tidak memilih sistem operasi apapun, 5 detik kemudian otomatis
komputer melakukan booting ke sistem operasi BlankOn 6.0 Ombilin.
[boot_loader]
Layar boot ganda
Setelah proses booting, Anda akan melihat layar login BlankOn. Tik nama akun
pengguna Anda lalu tekan enter, lalu tik sandi Anda dan tekan tombol enter
lagi. Maka Anda akan masuk ke desktop BlankOn.
### Mengatasi masalah boot ganda
Pada saat panduan ini ditulis, instalasi dua OS Windows XP dan BlankOn, akan
membuat Windows tidak muncul pada daftar pilihan sistem operasi. Untuk
mengatasinya, pada saat boot loader (pilihan sistem operasi) muncul, gunakan
pilihan kedua yakni [>BlankOn (recovery mode)<] dengan menggunakan tombol panah
bawah, lalu tekan enter. Tunggu sebentar sampai muncul berikut.
[memutahirkan_boot_loader]
Memulihkan sistem
Pilihlah [>grub - Update grub loader<] dengan tombol panah bawah lalu tekan
Enter. Blankon akan memutahirkan grub boot loader, sehingga sistem operasi
Windows muncul pada boot loader. Setelah pemutahiran grub bootloader sukses,
pilih Lanjutkan boot normal. Anda akan dibawa mode teks.
blankon login :
Password
Tikkan nama pengguna tekan enter, tik password Anda lalu tekan enter
Setelah masuk BlankOn, restart komputer, gunakan perintah:
blankon@blankon:~$sudo reboot
[sudo] Password for blankon :
tik sandi Anda lalu tekan enter. Komputer akan restart. Windows XP sudah
terdaftar di bootloader. Sekarang Anda bisa berpindah sistem operasi.
Last modified on 06/26/2010 04:47:29 PM
#### Attachments (16)
  * menu_awal.png​ (174.1 KB) - added by hanafi 7 years ago. menu awal
  * live-booting.png​ (121.8 KB) - added by hanafi 7 years ago. sedang
      booting
  * Gambar-Layar-Buat-partisi.png​ (23.2 KB) - added by hanafi 7 years ago.
      buat partisi
  * Gambar-Layar-Buat-partisi-home.png​ (23.7 KB) - added by hanafi 7 years
      ago. buat partisi home
  * Gambar-Layar-Buat-partisi-swap.png​ (21.8 KB) - added by hanafi 7 years
      ago. buat partisi swap
  * Gambar-Layar-Instal.png​ (47.3 KB) - added by hanafi 7 years ago.
      instalasi blankon
  * Gambar-Layar-Instal-1.png​ (120.9 KB) - added by hanafi 7 years ago.
      instalasi blankon - lokasi
  * Gambar-Layar-Instal-2.png​ (58.2 KB) - added by hanafi 7 years ago.
      instalasi blankon - keyboard
  * Gambar-Layar-Instal-3.png​ (61.9 KB) - added by hanafi 7 years ago.
      instalasi blankon - buat partisi
  * Gambar-Layar-Instal-4.png​ (54.2 KB) - added by hanafi 7 years ago.
      instalasi blankon - buat partisi selesai
  * Gambar-Layar-Instal-5.png​ (51.5 KB) - added by hanafi 7 years ago.
      instalasi blankon - pengguna dan sandi
  * Gambar-Layar-Instal-6.png​ (37.3 KB) - added by hanafi 7 years ago.
      instalasi blankon - informasi instalasi
  * Gambar-Layar-Instal-7.png​ (57.2 KB) - added by hanafi 7 years ago.
      instalasi blankon - informasi instalasi
  * Gambar-Layar-Meng-install-sistem.png​ (7.6 KB) - added by hanafi 7 years
      ago. instalasi blankon - instalasi sedang berjalan
  * dual-booting.png​ (7.1 KB) - added by hanafi 7 years ago. boot loader
  * mode-pemulihan.png​ (4.4 KB) - added by hanafi 7 years ago. memutahirkan
      boot loader
#### 
    
 
 
 
 
 
---
 
