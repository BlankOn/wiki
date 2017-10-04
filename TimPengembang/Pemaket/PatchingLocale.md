# Patching Locale

lokakarya patch locale @IRC 23-2-2011
contoh kasus : GDM
============================================================
buat folder 1
lakukan branch dari bzr blankon
bzr branch ​http://dev.blankonlinux.or.id/bzr/pattimura/gdm
===========================================================
buat folder 2
pasang deb-src ​http://arsip-dev.blankonlinux.or.id/blankon pattimura main
restricted extras extras-restricted
sudo apt-get update
apt-get source gdm
hasil =>> akan ada hasil folder gdm-2.32-0
copy folder tsb menjadi berakhiran .orig
command =>> cp -r gdm-232.0 gdm-232.0.orig
kembali ke folder 2
command =>> cd gdm-2.32.0
ubah di file yang memuat pendefinisian (Makefile.am)
command =>> nano Makefile.am
hapus baris pendefinisian locale
po /
keluar dari folder gdm-2.32.0 ke folder 2
diff -Naur gdm-2.32.0.orig gdm-2.32.0 > blankon_no_po.patch
==============================================================
kembali ke folder 1
"blankon_no_po.patch" (sesuai nama patch)
ditambahkan ke folder 1/debian/patches/series
copy kan blankon_no_po.patch ke folder1/debian/patches
=============================================================
lakukan pengiriman paket seperti biasa
dch -i
bzr add *
bzr commit -m "pesan"
bzr tag
bzr push
Last modified on 02/23/2011 09:33:48 PM
#### 
    
 
 
 
 
 
---
 
