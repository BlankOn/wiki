# **Belajar Git dan GitHUb Bersama Pak Piko (sesi ke-2)**

*Sebuah catatan kuliah murid tingkat pemula*

Materi		: Bermain Git di awan dan Berkolaborasi

Pemateri	: Pak Herpiko Dwi Aguno


Kelas ini merupakan kelas lanjutan. Pada kelas sebelumnya kita sudah membahas siklus git di lokal. Sekarang, kita akan coba bermain git di awan dan berkolaborasi.

Seperti biasa, bentuk kelas ini adalah diskusi bebas. Siapa saja bebas memotong percakapan dan langsung bertanya. Peserta kelas yang memiliki jawaban lebih baik dan jelas bisa langsung diutarakan.

Ada beberapa penyedia layanan kolaborasi git di internet, seperti github, bitbucket, gitlab. Di sini kita akan pakai github. Layanan ini digunakan sebagai remote repository, dimana kita bisa menyimpan berkas-berkas kita, lengkap dengan catatan versi-versinya.

Salah satu contoh remote repositori adalah [http://github.com/blankon/wiki](http://github.com/blankon/wiki). Kata 'blankon' mewakili user atau group pemilik repo. Sedangkan kata 'wiki' mewakili nama repo. Repo‐repo seperti ini bisa di‐`forking`, yaitu disalin ke akun kita.

Sebelum lanjut, yang ikut kelas mohon menyiapkan akun github.

Gambaran siklus kolaborasi github seperti ini :
- BlankOn membuat proyek wiki di lokal
- BlankOn mendorong proyeknya ke Github, akhirnya beralamat di `github.com/blankon/wiki`
- Adi ingin berkontribusi atau kolaborasi ke proyek wiki
- Adi mengunduh proyek wiki ke lokalnya, lalu melakukan penambahan atau perubahan
- Adi ingin mendorong perubahannya ke repo milik BlankOn dengan cara;
	- mendorong terlebih dahulu ke repo sendiri,
	- lalu mengajukan proposal ke repo milik Budi.

Skenario lain :
- Adi melakukan *forking* dari repo milik BlankOn. Sekarang Adi mempunyai repo wiki sendiri yang beralamat di `github.com/adi/wiki`
- Adi mengunduh berkas dari reponya sendiri, melakukan perubahan, kemudian mendorong perubahannya kembali ke reponya sendiri
- dari reponya sendiri, Adi mengajukan proposal perubahan ke repo milik Budi. Saat proposal masuk ke repo milik Budi, Budi bisa memilih untuk menerima maupun menolak proposal tersebut, berdiskusi dan lain sebagainya.

*Forking* adalah proses menyalin sebuah repositori ke akun milik kita. Hasil dari forking adalah kita memiliki repositori dan berhak kita kelola sendiri. Pada dasarnya, kita hanya berhak mengotak-atik repositori milik kita sendiri. Pada contoh di atas, hanya BlankOn yang boleh mengotak-atik `github.com/blankon/wiki`. Dan hanya Adi yang boleh mengotak-atik `github.com/adi/wiki`.

Untuk mengikuti kelas ini, kita perlu;
1. Memasang git di komputer kita
2. Mengatur Informasi Pengguna
3. Buat folder atau direktori
4. Masuk ke folder atau direktori tersebut
5. Inisiasi
6. Membuat sebuah berkas / file
7. Menambahkan berkas ke dalam git
8. Menambahkan commit
9. Membuat akun di [github.com](https://github.com)

Ketujuh langkah di atas dapat dilakukan dengan perintah-perintah berikut ini;

    sudo apt-get install git
    git config --global user.name "[nama]"
    git config --global user.email "[alamat email]"
    mkdir puisidong
    cd puisidong
    git init
	touch hai.txt
	git add hai.txt


## Membuat Repository

1.	Buka [github.com](http://github.com). Setelah login, di pojok ada simbol plus. Klik **New repository**. Kita akan membuat repo di akun masing-masing.
  ![Gambar 1: New Repository][1]

2. Isikan nama repo di Repository name

  Isian yang lain silakan disesuaikan. Jika sukses, masing-masing peserta akan punya repository baru yang beralamat di `https://github.com/'namamu'/puisidong`. Misalnya [https://github.com/herpiko/puisidong](https://github.com/herpiko/puisidong)

  ![Gambar 2: Repository name ][2]

3. Masuk ke direktori kerja yang telah kita buat untuk praktek atau latihan git.

	>git commit -m 'hai'

Dari halaman [puisidong](https://github.com/herpiko/puisidong) kita dapat melihat dua jenis alamat; HTTPS dan SSH. Kedua alamat tersebut adalah alamat repositoru yang kita buat. Misalnnya: https://github.com/herpiko/puisidong.git. Sementara, kita salin alamat HTTPS‐nya.

![Gambar 3: Alamat Repositori ][3]

## Meremote Repositori ke dalam Direktori Kerja
4. Kembali ke terminal dan masuk ke direktori kerja. Ketik perintah git remote add origin 'alamat https yang tadi disalin' misalnya https://github.com/herpiko/puisidong.git

	>git remote add origin https://github.com/'namamu'/puisidong.git

    >git remote -v

Perintah `git remote add origin [alamat repo]` ini berfungsi untuk meletakkan alamat repo git tadi ke direktori kerja git kita. Sedangkan `git remote -v` berfungsi untuk melihat daftar repositori yang kita kelola.

## Menarik Berkas dari Repositori di GitHub
Jalankan perintah;
	> git fetch origin

## Menggabungkan Berkas dari Repositori di GitHub dan Berkas Git Lokal
Langkah ini dapat dilewati jika Repositori di GitHub masih kosong. Untuk menggabungkan berkas sekaligus mengurutkan kembali urutan commit, dapat kita gunakan perintah;
	> git rebase -i origin/master

Bila muncul teks editor, simpan saja. Setelah selesai, akan ada pesan **Successfully rebased ......**

## Mendorong Berkas Git Lokal ke Repositori di GitHub

	> git push origin master

## Mengunduh Berkas-berkas dari Repository di GitHub ke Git Lokal
Kita dapat menggunakan perintah `git clone [alamat repo]`. Contoh: git clone https://github.com/herpiko/puisidong.git
	> git clone [alamat repomu]

Perintah `git clone [alamat repo]` ini akan memerintah kepada Git untuk mengunduh berkas-berkas dari suatu repositori. Pada latihan kali ini, perintah `git clone` akan mengunduh berkas-berkas dari https://github.com/'namamu'/puisidong dan menyimpannya pada direktori baru dengan nama **puisidong**. Direktori ini sudah terinisiasi dengan git, sudah ada daftar commitnya, dan sudah punya alamat repo remote _default_, yaitu **origin**.

Setelah proses `clone` selesai, kita dapat bekerja misalnya mengubah dan atau menambahkan suatu berkas. Setiap kali melakukan perubahan, kita perlu mencatat commit-nya pada git dan mendorongnya ke github.com dengan perintah `pull`. Cara kerja seperti ini dapat dijadikan sebagai salah satu sistem cadangan/_back up_ berkas.


[1]:https://github.com/FaiqAminuddin/BlankOn-Uluwatu-Dokumentasi/blob/master/gambar/1.png "New Repository"
[2]:https://github.com/FaiqAminuddin/BlankOn-Uluwatu-Dokumentasi/blob/master/gambar/2.png "Nama Repositori"
[3]:https://github.com/FaiqAminuddin/BlankOn-Uluwatu-Dokumentasi/blob/master/gambar/3.png "Alamat Repositori"
