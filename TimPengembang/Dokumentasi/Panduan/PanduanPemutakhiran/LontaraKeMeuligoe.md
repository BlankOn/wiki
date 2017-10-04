# Panduan Pindah dari Lontara ke Meuligoe
  * Perbaharui repositori BlankOn di /etc/apt/sources.list. Isi berkas
      tersebut dengan baris-baris berikut
      deb http://arsip.blankonlinux.or.id/blankon meuligoe main restricted
      deb http://arsip.blankonlinux.or.id/blankon meuligoe-updates main
      restricted
      deb http://security.blankonlinux.or.id/blankon meuligoe-security main
      restricted
      deb http://id.archive.ubuntu.com/ubuntu intrepid main restricted universe
      multiverse
      deb http://id.archive.ubuntu.com/ubuntu intrepid-updates main restricted
      universe multiverse
      deb http://security.ubuntu.com/ubuntu intrepid-security main restricted
      universe multiverse
  * Perbaharui basis data paket
     `sudo apt-get update`
  * Naikkan versi
      `sudo apt-get upgrade`
      `sudo apt-get dist-upgrade`
  * Naikan versi tanpa perlu konfirmasi dari user
      `sudo apt-get--force-yes--yes dist-upgrade`
Last modified on 11/17/2008 12:55:38 PM
 
---
 
