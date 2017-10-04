# Panduan Pindah Konde Ke Lontara
  * Perbarui repositori BlankOn ke /etc/apt/sources.list. Ganti kata konde ke
      lontara.
      deb http://arsip.blankonlinux.or.id/blankon lontara main restricted
      deb http://arsip.blankonlinux.or.id/blankon lontara-updates main
      restricted
      deb http://security.blankonlinux.or.id/blankon lontara-security main
      restricted
  * Perbarui basis data paket
      sudo apt-get update
  * Naikkan versi
      sudo apt-get dist-upgrade
  * Install blankon-desktop-minimalist untuk varian Minimalis dan jawab Ya
      untuk semua pertanyaan.
      sudo apt-get install blankon-desktop-minimalist

KategoriDok
Last modified on 06/17/2008 01:14:41 PM



