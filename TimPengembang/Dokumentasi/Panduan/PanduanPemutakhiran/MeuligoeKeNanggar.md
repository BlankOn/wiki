# Panduan Pindah dari Meuligoe ke Nanggar
   * Perbaharui repositori BlankOn di /etc/apt/sources.list. Isi berkas
      tersebut dengan baris-baris berikut
      deb http://arsip.blankonlinux.or.id/blankon nanggar main restricted
      deb http://arsip.blankonlinux.or.id/blankon nanggar-updates main
      restricted
      deb http://security.blankonlinux.or.id/blankon nanggar-security main
      restricted
      deb http://id.archive.ubuntu.com/ubuntu jaunty main restricted universe
      multiverse
      deb http://id.archive.ubuntu.com/ubuntu jaunty-updates main restricted
      universe multiverse
      deb http://security.ubuntu.com/ubuntu jaunty-security main restricted
      universe multiverse
   * Perbaharui basis data paket
      sudo apt-get update
   * Naikkan versi
     ` sudo apt-get upgrade`
      sudo apt-get dist-upgrade
   * Naikan versi tanpa perlu konfirmasi dari user
      `sudo apt-get--force-yes--yes dist-upgrade`
Last modified on 05/03/2009 09:01:07 PM
 
---
 
