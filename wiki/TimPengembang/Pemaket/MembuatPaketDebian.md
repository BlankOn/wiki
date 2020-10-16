# Membuat Paket Debian
## Tujuan
Dokumen ini menjelaskan langkah-langkah pembuatan paket Debian sederhana.
## Pengetahuan dasar
Pengetahuan akan hal-hal berikut akan membantu Anda membuat paket Debian dengan benar:
  * Mekanisme pembangunan perangkat lunak, misalnya dengan Makefile atau autotools.
  * Cara kerja instalasi paket Debian (dpkg, apt-get).

Dalam dokumen ini diasumsikan paket khayalan yang dibangun menggunakan autotools.

## Peralatan
Silakan mulai dengan menginstal peralatan berikut:
  * cdbs
  * debhelper
  * devscripts
  * penyunting teks

## Mulai bekerja
Siapkan paket yang belum ada paket Debiannya. Ciri-cirinya adalah dengan tidak
ada direktori DEBIAN atau debian di dalamnya. Misalnya kita punya perangkat
lunak bernama labusiyam. Perangkat lunak ini menggunakan autotools (ciri-
cirinya, dibangun dengan cara ./configure kemudian make dan make install).

### Pendataan berkas yang diinstal
Saat melakukan make install perangkat lunak ini akan menginstal:
  * /usr/bin/labusiyam
  * /usr/lib/liblabusiyam.so.0.0.1
  * /usr/lib/liblabusiyam.so.0 (symlink)
  * /usr/lib/liblabusiyam.so (symlink)
  * /usr/include/labusiyam.h
  * /etc/labusiyam/config.txt
  * /usr/share/labusiyam/data.txt
Tahu dari mana bahwa berkas-berkas di atas yang diinstal? Silakan tengok
Makefile.am di seluruh direktori yang ada di dalam kode sumbernya. Ciri-ciri
berkas yang diinstal adalah berkas yang ada didefinisikan dalam variabel:
  * bin_PROGRAMS
  * LTLIBRARIES
  * variabel yang mengandung kata 'dir', misalnya:
      configdir = $(sysconf)
      config_DATA = config.txt
      berarti berkas-berkas yang ada di dalam variabel berikutnya (yang tanpa
      kata dir akan diinstal ke dalam direktori itu).
Semua berkas yang akan diinstal harus dicatat dengan baik.

### Pengategorian paket
Dalam daftar berkas ada tiga jenis paket yang akan kita buat:
  * Paket binari
      Paket ini berisi semua program dalam /usr/bin atau /usr/sbin atau
      direktori eksekutabel lainnya. Juga berisi berkas-berkas pendukung (data
      dan konfigurasi)
  * Paket pustaka program
      Paket ini berisi semua pustaka program yang memiliki pola nama /usr/lib/
      lib*. Nama paket ini harus dimulai dengan kata lib dan diakhiri dengan
      nomor SONAME.
  * Paket pengembangan
      Paket ini berisi symlink ke pustaka program dan semua berkas yang
      dibutuhkan untuk pengembangan (misalnya berkas-berkas kepala kode sumber
      (header files)).
  * Paket debug
      Paket ini berisi salinan binari dan pustaka program dengan menyertakan
      simbol di dalamnya. Gunanya untuk menelusuri kesalahan program dengan
      debugger.
Jadi dalam kasus kita kita akan buat paket-paket berikut:
  * labusiyam
  * liblabusiyamX
  * liblabusiyam-dev
  * liblabusiyamX-dbg
  * labusiyam-dbg
X dalam liblabusiyamX belum kita ketahui. Namun nilainya dapat kita cari dengan
cara:

```
$ make                              # asumsi proses berjalan lancar
$ cd src/.libs                      # asumsi lokasinya ada di src/
$ objdump -x liblabusiyam.so.0.0.1 | grep SONAME
```

Perintah di atas akan menghasilkan sesuatu seperti
  SONAME     liblabusiyam.so.0
Angka terakhir itulah (0) yang dijadikan X. Jadi daftar final paket kita
adalah:
  * labusiyam
  * liblabusiyam0
  * liblabusiyam-dev
  * liblabusiyam0-dbg
  * labusiyam-dbg

### Pendefinisian paket

```
mkdir debian
cd debian
touch changelog control rules
chmod +x rules
touch labusiyam.install labusiyam0.install labusiyam-dev.install
echo 4 > compat
```

Sekarang kalau dilihat kita akan lihat:
`ls -l`
hasilnya:
total 8

```
-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 changelog
-rw-r--r-- 1 mdamt mdamt    2 2007-07-11 16:07 compat
-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 control
-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 labusiyam0.install
-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 labusiyam-dev.install
-rw-r--r-- 1 mdamt mdamt    0 2007-07-11 16:07 labusiyam.install
-rwxr-xr-x 1 mdamt mdamt    0 2007-07-11 16:07 rules
```

#### Membuat program pembangun paket
Sunting berkas rules. Isikan informasi berikut:

```
#!/usr/bin/make -f
include /usr/share/cdbs/1/rules/debhelper.mk
include /usr/share/cdbs/1/class/autotools.mk
DEB_DH_STRIP_ARGS := --dbg-package=liblabusiyam0 --dbg-package=labusiyam
```

Berkas di atas menandakan bahwa pembangunan paket akan menggunakan skrip cdbs.
Di situ juga didefinisikan dua paket debug yang kita punya.

#### Membuat definisi paket
Sunting berkas control. Isikan informasi berikut:
Source: labusiyam
Section: base
Priority: optional
Maintainer: Prajurit Ryan <ryan@private.tentara.mil>
Build-Depends: debhelper, cdbs, pkg-config, libgtk2.0-dev
Standards-Version: 3.6.0
Package: labusiyam
Section: base
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends},
Description: Labusiyam
 Labusiyam digunakan untuk membuat sayur.
Package: liblabusiyam0
Section: base
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends},
Description: Pustaka Labusiyam
 Pustaka Labusiyam digunakan untuk membuat sayur lainnya.
Package: labusiyam-dev
Section: base
Architecture: all
Depends: ${shlibs:Depends}, ${misc:Depends},
Description: Pengembangan Labusiyam

Paket ini digunakan untuk membantu pembuatan sayur lain.
Perhatikan untuk mengisi kolom-kolom Section, Architecture, dan Build-Depends
dengan benar. Mari kita lihat satu-persatu:
  * Definisi pertama kali dibuka dengan mendefinisikan paket sumber, ditandai
      dengan adanya kolom Source. Isikan dengan nama paketnya. Build-Depends
      diisi dengan paket-paket yang dibutuhkan selama pembangunan paket ini
      (semua paket yang Anda butuhkan saat melakukan make dan make install).
      Source: labusiyam
      Section: base
      Priority: optional
      Maintainer: Prajurit Ryan <ryan@private.tentara.mil>
      Build-Depends: debhelper, cdbs, pkg-config, libgtk2.0-dev
      Standards-Version: 3.6.0
  * Kemudian definisikan paket binari kita, yaitu labusiyam. Section diisi
      sesuai dengan kategori perangkat lunaknya. Silakan konsultasi dengan
      manual Debian. Arsitektur diisi dengan any karena mengandung berkas-
      berkas binari.
      Package: labusiyam
      Section: base
      Architecture: any
      Depends: ${shlibs:Depends}, ${misc:Depends},
      Description: Labusiyam
       Labusiyam digunakan untuk membuat sayur.
  * Lalu paket pustaka.
      Package: liblabusiyam0
      Section: base
      Architecture: any
      Depends: ${shlibs:Depends}, ${misc:Depends},
      Description: Pustaka Labusiyam
       Pustaka Labusiyam digunakan untuk membuat sayur lainnya.
  * Lalu paket pengembangan. Arsitektur kita isi dengan all karena ia hanya
      menginstal berkas labusiyam.h dan tautan simbolik saja. Bila ia juga
      menyertakan berkas binari maka harus kita ganti ke any.
      Package: labusiyam-dev
      Section: base
      Architecture: all
      Depends: ${shlibs:Depends}, ${misc:Depends},
      Description: Pengembangan Labusiyam
       Paket ini digunakan untuk membantu pembuatan sayur lain.
  * Cukup sekian. Paket debug tidak perlu kita definisikan dalam debian/
      control.

#### Mendaftarkan berkas
Selanjutnya adalah mendaftarkan berkas yang akan diinstal dalam masing-masing
paket. Mari kita sunting berkas-berkas berikut dan mengisinya dengan informasi
yang juga diberikan di bawah.
  * labusiyam.install
      debian/tmp/usr/bin/labusiyam
      debian/tmp/etc/labusiyam/config.txt
      debian/tmp/usr/share/labusiyam/data.txt
  * liblabusiyam0.install
      debian/tmp/usr/lib/liblabusiyam.so.0.0.1
      debian/tmp/usr/lib/liblabusiyam.so.0
      atau boleh juga:
      debian/tmp/usr/lib/liblabusiyam.so.*
  * liblabusiyam-dev.install
      debian/tmp/usr/lib/liblabusiyam.so
      debian/tmp/usr/include/labusiyam.h

#### Membuat catatan versi
Sunting berkas changelog, isikan:
labusiyam (0.0.1-0blankon1) konde; urgency=low
  * New release.
 -- Prajurit Ryan <ryan@private.tentara.mil>  Wed,  4 Jul 2007 11:37:37 +0300
Perhatikan bahwa penulisan tanggal harus dilakukan dengan bentuk seperti di
atas. Silakan konsultasi dengan manual Debian untuk lebih jelasnya. Perhatikan
di mana harus menulis spasi dan di mana tidak. Penomoran nomor versi bergantung
dengan konvensi distribusi. Kata konde di atas menandakan bahwa paket ini
ditujukan untuk distribusi konde. Pada Debian biasanya menggunakan unstable
atau testing.

#### Membangun paket
Sekarang mari kita bangun paketnya:

cd ..    # tadi ada di dalam direktori debian/ sekarang kita naik satu tingkat
dpkg-buildpackage -rfakeroot

Bila tidak ada aral melintang, maka dalam direktori atasnya lagi kita akan
punya berkas-berkas berikut:
 * labusiyam_0.0.1-0ubuntu1_i386.deb
 * liblabusiyam0_0.0.1-0ubuntu1_i386.deb
 * liblabusiyam-dev_0.0.1-0ubuntu1_all.deb
 * liblabusiyam0-dbg_0.0.1-0ubuntu1_i386.deb
 * labusiyam-dbg_0.0.1-0ubuntu1_i386.deb
 * labusiyam_0.0.1-0ubuntu1.dsc
 * labusiyam_0.0.1-0ubuntu1.tar.gz
## Pengecekan
Pengecekan perlu kita lakukan pada tiap-tiap paket yang dihasilkan guna
memastikan bahwa paket-paket tersebut berisi berkas-berkas yang benar.
### Pengecekan daftar isi
Mengeceknya mudah. Gunakan perintah:
dpkg --contents nama-berkas.deb
Dalam hasil keluaran biasanya akan muncul bahwa ada berkas bernama
changelog.gz, changelog.Debian.gz, dan copyright. Ini tidak apa-apa. Namun
pastikan bahwa berkas-berkas yang sudah kita masukkan ke dalam berkas *.install
benar-benar ada dalam hasil keluarannya.
### Pengecekan instalasi
Cek dengan menginstal paket tersebut:
sudo dpkg -i nama-berkas.deb
Biasanya masalah yang timbul disini adalah ketidakcocokan dalam ketergantungan
paket, dsb.
### Pengecekan kesalahan lain
Gunakan perangkat lunak khusus pengecekan paket, misalnya linda atau lintian.
Caranya silakan lihat halaman manualnya masing-masing.
## Ada pertanyaan?
Silakan tanya ke milis ubuntu-id@… dengan subyek [PAKET].
## Tautan penting
  * ​Debian_Policy_Manual
  * ​Manual_CDBS
KategoriPemaket
Last modified on 08/20/2009 04:13:49 PM

---
 
