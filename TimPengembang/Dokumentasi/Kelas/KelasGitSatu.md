# Latihan Menggunakan Git untuk Mengelola Tulisan

Baru saja Tim Dokumentasi BlankOn XI Uluwatu mengadakan kelas daring dengan materi pengenalan Git bersama Pak Piko.

Menurut Pak Piko, Git adalah _version control_. Git bisa diterapkan ke berbagai macam berkas; kode, skripsi, puisi, desain grafis, multimedia dan lain sebagainnya.

Secara konvensional (tanpa _version control_), kita mungkin menulis skripsi dengan cara;
- Pertama menulis Bab 1 dan menyimpannya menjadi **Bab_1.odt**
- Pada waktu berikutnya, misalnya minggu depannya kita menyunting Bab 1 dan menyimpannya menjadi berkas baru, misalnya **Bab_1_revisi.odt**
- Minggu depannya lagi kita mungkin menyunting lagi dan menyimpan lagi menjadi berkas baru lagi, misalnya **- Bab_1_revisi_apadah_capek.odt**

Sedangkan bila menggunakan _version control_ seperti Git, maka kita cukup mengelola 1 berkas atau seperlunya. Adapun versi-versi dari berkas tersebut diurus oleh Git.

Berikut adalah dokumentasi ketika saya mencoba menggunakan Git untuk mengelola tulisan. Semoga bermanfaat.

## 1. Memasang Git pada BlankOn
- Klik menu **BlankOn > Perkakas Sistem > Terminal**
- Ketik:

  	sudo apt-get install git
- Masukkan sandi


## 2. Mengatur Informasi Pengguna
Untuk mengatur informasi pengguna kita dapat menggunakan perintah git config;

  	git config --global user.name "[nama]"
  	git config --global user.email "[alamat email]"

Contoh:
  	
      git config --global user.name "zaid"
  	git config --global user.email "zaid@blankonmail.or.id"

## 3. Menyiapkan Tempat
- **Membuat folder**

  Contoh: Kita akan membuat folder dengan nama LatihanGit
    	mkdir LatihanGit
    
- **Pindah folder **
  	cd LatihanGit

- **Inisiasi Git**
  	git init

## 4.	Mulai Menulis
- Menulis Bab 1
  	touch panduan.md
  	echo "#Bab 1" > panduan.md

Perintah **touch** dan **echo** tidak termasuk perintah Git. Perintah **touch [nama berkas]** digunakan untuk membuat berkas baru sekaligus menentukan namanya. Adapaun perintah **echo ["tulisan"] > [ nama berkas]** digunakan untuk memasukkan tulisan ke dalam berkas. Perintah di atas akan mengisi berkas **panduan.md** dengan tulisan **#Bab 1**.
    
- Menambahkan ke git dengan perintah **git add .** dan **git commit -m ['komentar']**.
  	git add .
  	git commit -m 'tulis bab 1'


Perintah **git add .** digunakan untuk menambahkan berkas yang ada ke dalam catatan indeks Git, sedangkan perintah **git commit -m ['pesan atau catatan']** digunakan untuk menyimpan dan mencatat versi terbaru dari suatu berkas.

- Melihat isi dengan perintah **cat**
    cat panduan.md

Perintah **cat** tidak termasuk perintah Git. Perintah **cat [nama berkas]** digunakan untuk melihat isi dari suatu berkas secara langsung di terminal (tanpa membuka berkas tersebut.

- Menulis Bab selanjutnya dengan cara yang sama (Menulis/menambahkan suatu bab baru dengan perintah **echo >>**, menambahkan ke dalam catatan indeks Git dengan perintah **add .**, dan menyimpan perubahan ke dalam Git dengan perintah **commit**. Contoh;
  	echo "#Bab 2" >> panduan.md
  	git add .
  	git commit -m 'tulis bab 2'
  	cat panduan.md
  	echo "#Bab 3" >> panduan.md
  	git add .
  	git commit -m 'tulis bab 3'
  	cat panduan.md
    
Catatan: perintah **echo >** (dengan satu >) digunakan untuk mengisi suatu berkas dengan tulisan baru, sedangkan perintah **echo >>** (dengan dua >) digunakan untuk menambahkan tulisan tanpa menghilangkan tulisan yang sudah ada.
    
Dengan serangkaian perintah di atas, sekarang kita mempunyai berkas dengan nama **panduan.md** yang tersimpan di dalam folder **LatihanGit**.

## 5.	Melihat log Git dengan perintah **git log**
  	
    git log
Dengan perintah **git  log** kita dapat melihat catatan tentang commit-commit yang telah kita simpan. Berikut contoh dari hasil **git log**;
  	
    commit 406b65c6031f820cb4788e1f54ad0830af673d0e
	Author: Zaid <zaid@blankonmail.or.id>
	Date:   Tue Mar 7 00:16:41 2017 +0700

    tulis bab 3

	commit 7404547cc0a5b7ff9bfb51622dd0e9abc14f7b74
    Author: Zaid <dampu@gmail.com
    Date:   Tue Mar 7 00:16:41 2017 +0700

    tulis bab 2
    
    commit a28924476c3855d5cf24e30ae123a75cb1c089f
    Author: Zaid <zaid@blankonmail.or.id
    Date:   Tue Mar 7 00:16:41 2017 +0700

    tulis bab 1

## 6.	Mengelola Tulisan dengan Git
- ### Kembali ke versi awal dengan perintah **git checkout [hashcommit]**

	Misalnya kita ingin kembali ke tulisan versi kedua yang berisi Bab 1 dan Bab 2 saja, kita tidak perlu menghapus Bab 3. Dengan perintah
      	git checkout 7404
kita dapat kembali ke tulisan versi kedua yang baru berisi Bab 1 dan Bab 2 tanpa menghapus Bab 3 dan tanpa membuat berkas baru.

7404 merupakan 4 karakter pertama dari commit hash yaitu commit **tulis bab 2**.

Bila kita memeriksa isi berkas **panduan.md** maka kita akan melihat bahwa isi dari berkas tersebut hanya Bab 1 dan Bab 2

- ### Menggabungkan Bab 1 dan Bab 3 (Meninggalkan Bab 2)
Bersambung ....


