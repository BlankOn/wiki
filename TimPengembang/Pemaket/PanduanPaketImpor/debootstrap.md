   BlankOn
 About_Trac
    * About_Trac
    * Preferences
    * Login
    * Help/Guide
    * Wiki
    * Roadmap
    * Browse_Repository
    * View_Reports
[q                 ]
    * BlankOn  /
    * Wiki  /
    * Pemaket  /
    * PanduanPaketImpor  /
    * debootstrap
Perubahan yang dilakukan
   1. Berkas Makefile
         1. Salin skrip dari scripts/blankon/*
install -o root -g root -m 0644 scripts/blankon/* $(DSDIR)/scripts/
   1. Buat symlink lontara ke konde (ikuti Hardy)
ln -s konde $(DSDIR)/scripts/lontara
   1. Berkas scripts/blankon/konde
         1. Berkas asli: scripts/ubuntu/gutsy
         2. Modifikasi repository default ke http://arsip.blankonlinux.or.id/
            blankon
Last modified on 06/06/2008 11:21:34 AM
#### 
    
 
 
 
 
 
---
[**Daftar Isi Wiki BlankOn**](/DaftarIsi/README.md)
 
[**Indeks Wiki BlankOn**](/Indeks.md)