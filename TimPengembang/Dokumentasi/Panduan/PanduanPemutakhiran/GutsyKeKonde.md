# Gutsy Ke Konde
  * Ambil dan masukkan keyring repositori BlankOn ke dalam apt-key:
      wget http://cdimage.blankonlinux.or.id/blankon-archive-keyring.gpg -O- |
      sudo apt-key add -
  * Masukkan komponen main restricted universe dan multiverse milik Ubuntu ke
      /etc/apt/sources.list
  * Masukkan repositori BlankOn ke /etc/apt/sources.list
      deb http://arsip.blankonlinux.or.id/blankon konde main restricted
      deb http://arsip.blankonlinux.or.id/blankon konde-updates main restricted
      deb http://security.blankonlinux.or.id/blankon konde-security main
      restricted
  * Perbarui basis data paket
      sudo apt-get update
  * Naikkan versi
      sudo apt-get upgrade
  * Install blankon-desktop dan jawab Ya untuk semua pertanyaan.
      sudo apt-get install blankon-desktop

KategoriBlankOn KategoriDok
Last modified on 06/16/2008 11:59:07 AM
 
---
 
