# Panduan Pembuatan Paket
### Langkah Pertama: Menginstal Peralatan
Instal paket yang dibutuhkan:
sudo apt-get install pbuilder debootstrap devscripts build-essential cdbs
debhelper dpkg-dev fakeroot bzr
Buat Tarbal:
sudo pbuilder create
### Langkah Kedua: Membuat Kembali Paket
Masukkan alamat ini ke dalam sources.list di direktori /etc/apt:
deb-src http://archive.ubuntu.com/ubuntu <ubuntu_version> main restricted
universe multiverse
Ganti <ubuntu_version> dengan versi ubuntu yang Anda pakai (misal, hardy)
Lakukan perintah ini:
sudo apt-get update
Kita akan membuat ulang paket hello di direktori /home/user
apt-get source hello
Lihat hasilnya di /var/cache/pbuilder/result/ :
cd /var/cache/pbuilder/result
akan terlihat
hello_2.2-2.diff.gz
hello_2.2-2.dsc
hello_2.2-2_i386.changes
hello_2.2-2_i386.deb
hello_2.2.orig.tar.gz
### Langkah Ketiga: Memodifikasi hello
Lakukan langkah berikut:
cd /home/user
Ganti user dengan home user Anda (misal, ahmad-->/home/ahmad).
Kita lihat ada dua file hello: tar dan diff dan direktori hello-2.2:
Hapus direktori tersebut.
sudo rm -r hello-2.2
Lanjutkan dengan langkah ini:
tar xzf hello_2.2.orig.tar.gz
cd hello-2.2
zcat ../hello_2.2-2.diff.gz | patch -p1
Nanti akan keluar:
patching file debian/changelog
patching file debian/control
patching file debian/copyright
patching file debian/rules
Setelah itu kita lanjutkan dengan yang ini:
chmod +x debian/rules
dpkg-buildpackage -rfakeroot
Akan keluar dua baris terakhir seperti berikut:
dpkg-buildpackage: binary and diff upload (original source NOT included)
dpkg-buildpackage: warning: Failed to sign .dsc and .changes file
Warning di situ abaikan saja. Kemudian kembali ke direktori user
cd
akan terlihat file berikut:
hello_2.2-2_i386.deb
hello_2.2-2_i386.changes
hello_2.2-2.dsc
Perhatikan, ketiga file di atas sama dengan file yang ada di /var/cache/
pbuilder/result/.
### Langkah Keempat: Membuat File debian/rules
cd hello-2.2
cd debian
sudo gedit rules
Kosongkan isi file tersebut, ganti dengan tiga baris berikut:
#!/usr/bin/make -f
include /usr/share/cdbs/1/rules/debhelper.mk
include /usr/share/cdbs/1/class/autotools.mk
Lanjutkan dengan yang ini:
cd .. (kembali ke direktori hello-2.2)
dpkg-buildpackage
Hasilnya sama dengan Langkah Ketiga
### Langkah Kelima: Mengubah Isi hello
Kalau kita install paket hello ini, kemudian kita ketik kata hello di terminal,
akan muncul kalimat berikut:
Hello, world!
Nah, sekarang kita ubah kalimat itu dengan kalimat berikut:
Halo, BlankOn Mania!
dan kalimat berikut:
Halo, Linuxer!
Caranya sebagai berikut:
$sudo gedit debian/rules
Tambahkan dengan baris ini:
include /usr/share/cdbs/1/rules/simple-patchsys.mk
Simpan. Lalu:
dch -i
Ganti baris yang paling atas
hello (2.2-3) unstable; urgency=low
dengan
hello (2.2-3blankon1) lontara; urgency=low
kemudian simpan
Ctrl o (enter)
Ctrl x
Sekarang kita cari file hello.c yang ada di src:
sudo gedit src/hello.c
Ganti baris 104 yang bertuliskan "hello, world" dengan "Halo, Dunia!"
Ganti baris 115 yang bertuliskan "Hello, world!" dengan "Halo, Linuxer!"
Ganti baris 122 yang bertuliskan "Hello, world!" dengan "Halo, BlankOn Mania!"
Lalu kembali dikompilasi ulang:
dpkg-buildpackage -rfakeroot
Nah, untuk melihat hasilnya kita kembali ke direktori /home/user. Kita lihat di
direktori itu ada paket bernama hello_2.2-3blankon1_i386.deb Untuk menguji
hasilnya, kita instal paket tersebut
sudo dpkg -i hello_2.2-3blankon1_i386.deb
hello (akan muncul --> Halo, BlankOn Mania!)
hello -n (akan muncul --> Halo, Linuxer!)
hello -t (akan muncul --> Halo, Dunia)
Demikian langkah-langkah membuat paket, langkah-langkah ini diambil dari Kelas
Paket_6_Juni_2008 dengan beberapa perubahan.
Lihat juga Paket_MOTU
KategoriPemaket
Last modified on 07/05/2008 05:10:40 PM
#### 
    
 
 
 
 
 
---
 
