## Dokumentasi Pengembang
# Memutus Rangkaian Ketergantungan

### Studi Kasus :
#### Kasus pennyusutan hasil CD Iso harian
"Berdasarkan log pabrik cd, penyusutan terjadi saat menghapus paket2 yang ada
di daftar hitam."

`app-install-data tk8.4 tcl8.4 openoffice.org-style-human language-pack-gnome-en-base ubiquity-slideshow-ubuntu gnome-user-guide openoffice.org-help-en-usombilin-language-pack-extras-id`
Untuk mencari tahu biang keladinya:
  1. Masuk chroot pabrikcd
  1. Instal blankon-desktop
  1. Hapus paket2 di atas satu persatu dengan apt-get remove

Semua paket yang dibawa blankon-desktop akan dihapus saat mencoba menghapus
paket yang bermasalah. Ternyata paket tersebut adalah paket tcl8.4.
  1. Cari tahu siapa yang membutuhkan paket tersebut:

```
apt-cache rdepends tcl8.4
tcl8.4
Reverse Depends:
 xchat-gnome
 vim-gnome
 tk8.4
 tcl8.4-doc
 tcl8.4-dev
 tcl
 tcl |rrdtool-tcl
 libpurple0
 ecosconfig-imx
 blt
```

  1. Dari daftar di atas paket yang ada di blankon-desktop adalah
libpurple0 bawaan pidgin, artinya kita mesti memutus rantai ketergantungan
antara libpurple0 dengan tcl84.

```
# apt-cache depends libpurple0 | grep tcl8.4
 Suggests: tcl8.4
```

  1. Perbaiki paket yang bermasalah tersebut (libpurple0) dengan
menghapus kolom Suggests di dalam debian/control.
  1. Tertib

Last modified on 06/12/2010 05:24:50 AM
 
---
 

