# Mengenal Berkas-berkas Pada Direktori Debian

Direktori debian merupakan direktori khas distro debian/turunannya yang ditambahkan pada file sumber sebagai metadata dalam pembuatan paket. Direktori debian terdiri dari banyak file, file yang wajib ada adalah: changelog, control, copyright dan rules. 

#### Persiapan
1. Buat identitas pemaket 
		$ vim .bashrc

(tambahkan pada akhir baris:)
export DEBFULLNAME="Joe Hacker" (sesuaikan dengan nama Anda)
export DEBEMAIL="joe.hacker@isp.com" (sesuaikan dengan e-mail Anda)

		$ source .bashrc

2. Install paket-paket yang dibutuhkan 
		$ sudo apt-get install build-essential devscripts debhelper dh-make fakeroot lintian gnupg

build-essensial: paket meta yang akan menginstall paket-paket dasar yang dibutuhkan untuk development kaya gcc, make, libc6-dev, dpkg-dev, dll.
devscripts: kumpulan tools yang membuat hidup pemaket jadi lebih menyenangkan, seperti dch (tool edit changelog), debuild (bangun paket) dsb.
debhelper: kumpulan script2 yang digunakan di berkas debian/rules
dh-make: tool untuk mendebiankan paket kode sumber (isinya template2 untuk direktori debian)
lintian: nah ini nih si tukang ngecek paket apakah sudah sesuai tidak dengan
gnupg: dibutuhkan untuk menandatangi paket debian
fakeroot: biar bisa ngompail tanpa akses root sebenernya

3. Buat gpg key 
> $ gpg --gen-key

Real name: Joe Hacker
E-mail address: joe.hacker@isp.com
Passphrase: paswordpercobaanjanganditiru

FYI di debian dan ubuntu setiap paket yang akan dikirim ke pabrik paket perlu ditandatangani oleh pemaket, nanti robot pabrik akan ngecek apakah tandatanganya benar2 milik anda. klo sudah beres HARAP BACKUP direktori .gnupg ke tempat yg aman karena kunci gpg adalah satu-satunya identitas Anda agar dapat dikenal oleh irgsh

4. Download paket yang akan dijadikan contoh pada lokakarya ini. letakkan pada direktori tertentu 
> $ mkdir -p lokakarya
$ cd lokakarya
$ wget http://cecunguk.blankonlinux.or.id/~imtheface/lokakarya/jao-theme-1.8.tar.gz
$ tar xzf jao-theme-1.8.tar.gz
$ cd jao-theme-1.8
$ ls

Terlihat masih belum ada direktori debian. Untuk dapat membuat paket debian dari jao, maka kita perlu mendebiankan kode sumber jao-theme dengan menambahkan direktori debian beserta isi-isinya. File-file tersebut bisa dibuat manual tapi alangkah enaknya jika dibuat secara otomatis menggunakan bantuan dh-make.

    Buat direktori debian dengan menggunakan dh_make 

$ dh_make -c gpl -f ../jao-theme-1.8.tar.gz
Type of package: single binary, multiple binary, library, kernel module or cdbs?
 [s/m/l/k/b] s

Maintainer name : Joe Hacker
Email-Address   : joe.hacker@isp.com
Date            : Thu, 13 Nov 2008 05:37:17 +0700
Package Name    : jao-theme
Version         : 1.8
License         : gpl
Type of Package : Single
Hit <enter> to confirm: 
Done. Please edit the files in the debian/ subdirectory now. jao-theme
uses a configure script, so you probably don't have to edit the Makefiles.

Proses ini akan membuat direktori debian beserta isinya dari template yang telah disediakan. Serta membuat file jao-theme_1.8.orig.tar.gz sejajar dengan direktori jao-theme-1.8.tar.gz

Di debian ada policy bahwa kode sumber dari upstream tidak boleh kita boleh kita ubah secara langsung, setiap perubahan yg kita lakukan akan dilakukan di dalam direktori debian. Nantinya isi dari direktori debian itu kalau paket sudah dibangun akan di kompres menjadi nama-paket.diff.gz
File control

Secara umum file ini berisi:

Source: jao-theme
Section: unknown
Priority: extra
Maintainer: Joe Hacker <joe.hacker@isp.com>
Build-Depends: debhelper (>= 5), autotools-dev
Standards-Version: 3.7.2

Package: jao-theme
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}
Description: <insert up to 60 chars description>
 <insert long description, indented with spaces>

Isi control itu terdiri dari 2 bagian:

    Bagian source 

Source: nama-paket

Section: itu entri dimana paket debian mau ditaro

klo di debian policy section itu terdiri dari beberapa: admin, comm, devel, doc, editors, electronics, embedded, games, gnome, graphics, hamradio, interpreters, kde, libs, libdevel, mail, math, misc, net, news, oldlibs, otherosfs, perl, python, science, shells, sound, tex, text, utils, web, x11. (​http://www.debian.org/doc/debian-policy/ch-archive.html#s-subsections)

Priority: menunjukkan tingkat pentingnya paket. Dapat berisi: required, important, standard, optional, extra. Paket-paket biasanya sih menggunakan priority "optional" saja, di atas priority "optional" hanya digunakan paket-paket penting. Kalau di debian perlu mendapatkan persetujuan dari para bos untuk bisa menggunakan priority di atas "optional". (​http://www.debian.org/doc/debian-policy/ch-archive.html#s-priorities)

Maintainer: nama orang yang memaketkan.

Build-Depends: Paket yg dibutuhkan untuk membuat paket tersebut.

Bagaimana cari tahu isinya build-depends?

    liat README 

    tanya pengelola/pembuat 

    liat Makefile.am 

Standars-Version: Versi dari dh-make yang digunakan

    Bagian binary 

Bagian binary bisa menghasilkan 1 macam paket atau lebih tergantung kebutuhan, kadang-kadang paket sumber kita perlu pecah jadi beberapa paket binary. contohnya seperti OpenOfficeorg?, kenapa harus dipecah OOo? agar kita bisa pilih paket2 mana saja yg ingin kita install sesuai kebutuhan. klo cuman butuh OOo writer aja buat apa harus install seluruh paket OOo, makanya lebih baik dipecah saja. klo jao-theme sih gak perlu dipecah2.

Package: nama paket

Architecture: menunjukkan arsitektur yang akan dipakai

bisa menggunakan:

i386 = kalau ingin hanya arsitektur i386 saja

amd64 = kalau ingin hanya arsitektur i386 saja

i386, amd64 = kalau ingin kedua-duanya

any = semua arsitektur yang tersedia akan dibuat paketnya (i386, amd64, powerpc, sparc, dll)

all = untuk paket yg bisa diinstall di semua arsitektur (arsitektur independen).

Depends: paket-paket yg dibutuhkan agar paket kita dapat berjalan dengan baik. bagaimana menentukan "Depends" sebuah paket? hal ini dapat diketahui hanya dengan mengisinya dengan ${shlibs:Depends}, ${misc:Depends} nanti klo pas kita bangun paket parameter2 itu akan diganti sendiri oleh script debhelper menjadi paket-paket Dependencies paket tersebut. tapi kadang2 kita juga perlu tambah manual "Depends" itu. untuk jao-theme selain yg udah ada sekarang, silakan tambah Depends: rae-icon-theme

Description: berisi deskripsi singkat tentang paket (max 60 karakter). Baris selanjutya berisi deskkripsi panjang tentang paket (harus diawali dengan spasi dan tiap baris max 80 karakter)

Sehingga file control akan seperti:

Source: jao-theme
Section: x11
Priority: extra
Maintainer: Joe Hacker <joe.hacker@isp.com>
Build-Depends: debhelper (>= 5), autotools-dev
Standards-Version: 3.7.2

Package: jao-theme
Architecture: all
Depends: ${shlibs:Depends}, ${misc:Depends}, rae-icon-theme
Description: jao theme, tema khusus untuk blankon
 quick brown fox jumps over the lazy dog
 quick brown fox jumps over the lazy dog
 .quick brown fox jumps over the lazy dog
 quick brown fox jumps over the lazy dog

File changelog

file changelog sangat penting bagi pemaket. file ini berisi versi paket, catatan sejarah perubahan paket, siapa yang merubah dan informasi penting lainya.

file ini sudah digenerate otomatis pas kita jalankan dh_make tadi. atau jika ingin yang baru dapat menggunakan tools dch.

hapus changelog lama, lalu generate yang baru

$ pwd
jao-theme-1.8
$ rm -rf debian/changelog
$ dch --create

akan dibuatkan file changelog baru dengan format:

PACKAGE (VERSION) UNRELEASED; urgency=low

  * Initial release. (Closes: #XXXXXX)

 -- Joe Hacker <joe.hacker@isp.com>  Thu, 13 Nov 2008 06:32:18 +0700

Secara umum file changelog terdiri dari 3 bagian:

    Bagian atas 

PACKAGE: isi dengan nama paket kode sumber (jao-theme)

VERSION: versi yang akan digunakan (1.8-1)

1.8-1 itu artinya 1.8 versi upstream -1 itu versi revisi debian

UNREALEASED: berisi distribusi yang akan digunakan

kalau di debian bisa diisi dengan: stable, unstable, testing, etch dll kalau di ubuntu bisa diisi dengan: gutsy, hardy, intrepid dll kalau di blankon bisa diisi dengan: konde, lontara, meulogoe dll

urgency: menunjukkan seberapa penting kan update yg kita lakukan

bisa diisi dengan: urgency: pilihannya low, medium, high, emergency, critical

    Bagian tengah 

isinya ini deskripsi perubahan yg kita lakukan di paket tsb, isi deskripsi yg baik itu harus dapat menjelaskan apa-apa saja yg kita ubah dan alasannya kenapa? contoh yang baik lihat di: ​http://dev.blankonlinux.or.id/browser/meuligoe/gdm/debian/changelog.ubuntu

contoh: sekarang coba edit file AUTHORS lalu tambah authors di situ Tim Artis BlankOn <BlankOn@googlegroup.com>

karena kita mengubah sesuatu di berkas debian, maka perubahan itu harus ditulis di changelog bagian tengah

    AUTHORS: Tambah author Tim Artis BlankOn <BlankOn@googlegroup.com> 

    Bagian terakhir 

bagian bawah isinya itu info tentang siapa yg mengubah paket ini, dan tanggal berapa diubahnya. nama (alamat email) itu diambil dari parameter DEBFULLNAME dan DEBEMAIL yg kita set tadi.

sehingga changelog menjadi:

jao-theme (1.8-1) meuligoe; urgency=low

  * Initial release. 
  * AUTHORS: Tambah author Tim Artis BlankOn <BlankOn@googlegroup.com>

 -- Joe Hacker <joe.hacker@isp.com>  Wed, 13 Nov 2008 22:45:09 +0700

File copyright

File copyright itu salah satu file terpenting di dir debian, isinya yah tentu saja yg berhubungan dengan hak cipta. di debian setiap paket yg masuk ke dalam pabrik paket akan di cek terlebih dahulu apakan lisensi yg digunakan sesuai tidak dengan Debian Free Software Guideline

File ini berisi keterangan tentang author, sumbernya didonwload dari mana, lisensinya apa dll. lisensi yang dituliskan dalam file ini cuma sebagian saja, selengkapnya bisa dibaca di file lain (biasanya di /usr/share/common-licenses/).

Untuk mengetahui lisensi suatu paket dapat di lihat file COPYING atau juga kode sumbernya, karena kadang-kadang satu paket terdiri dari beberapa lisensi.

Contoh: paket blankon-sounds menggunakan 2 lisensi, 1 GPL untuk karya om blex dan 1 lagi CC untuk karya2 dari pengembang ubuntu. Yang CC karena gak ada di /usr/share/common-licenses/ maka perlu ditulis lengkap isi lisensinya. ​http://dev.blankonlinux.or.id/browser/meuligoe/blankon-sounds/debian/copyright

This package was debianized by Joe Hacker <joe.hacker@isp.com> on
Wed, 12 Nov 2008 13:24:36 +0700.

It was downloaded from http://dev.blankonlinux.or.id/

Upstream Author(s):

    Farhan Perdana

Copyright:

		(C) 2008 Farhan Perdana <blackdramon@gmail.com>
		License: GPL Version 3

License:

    This package is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This package is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this package; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA

On Debian systems, the complete text of the GNU General
Public License can be found in `/usr/share/common-licenses/GPL'.

The Debian packaging is (C) 2008, Joe Hacker <joe.hacker@isp.com> and
is licensed under the GPL, see above.


# Please also look if there are files or directories which have a
# different copyright/license attached and list them here.

File rules

File rules itu file Makefile untuk paket debian kira2 fungsinya sama dengan file Makefile nya autoconf. Perintah-perintah untuk membangun paket kita tulis di sini, di debian sih cukup enak dah banyak tool & script untuk mempermudah membangun paket salah satunya debhelper. Kita tinggal tulis aja di rules script-script debhelper itu yg berawalan dh_*, ini otomatis dibuatkan saat kita menjalankan dh_make diawal.

Selain menggunakan debhelper, ada juga script lain untuk membuat rules. namanya cdbs (common debian build system).
Membangun paket

    Hapus file-file di direktori debian selain control, changelog, rules, copyright (tidak dihapus juga tidak apa-apa) 

$ pwd
debian
$ rm *.ex *.EX

    Kembali ke direktori jao-theme, lalu jalankan: 

$ pwd
jao-theme-1.8
$ dpkg-buildpackage -rfakeroot
...
... (dipotong)
...
dpkg-genchanges
dpkg-genchanges: including full source code in upload
dpkg-buildpackage: full upload (original source is included)
(WARNING: Failed to sign .dsc and .changes file)

    Abaikan saja WARNING diatas. maka akan terbentuk file-file: 

jao-theme_1.8-1_all.deb
jao-theme_1.8-1_amd64.changes
jao-theme_1.8-1.diff.gz
jao-theme_1.8-1.dsc

NOTE: berdasarkan lokakarya tanggal 12-11-08 di #blankon by imtheface

oiya...ada PRnya juga:

​http://www.debian.org/doc/debian-policy/

​http://www.debian.org/doc/maint-guide/

​http://www.debian.org/doc/developers-reference/ 
