# Panduan Pindah dari Nanggar ke Ombilin
   * Perbaharui repositori BlankOn di /etc/apt/sources.list. Isi berkas
      tersebut dengan baris-baris berikut
      deb http://arsip.blankonlinux.or.id/blankon ombilin main restricted
      deb http://arsip.blankonlinux.or.id/blankon ombilin-updates main
      restricted
      deb http://arsip.blankonlinux.or.id/blankon ombilin-security main
      restricted
   * Perbaharui basis data paket
      sudo apt-get update
   * Naikkan versi
     `sudo apt-get upgrade`
     `sudo apt-get dist-upgrade`
   * Naikan versi tanpa perlu konfirmasi dari user
     `sudo apt-get--force-yes--yes dist-upgrade`

Last modified on 10/07/2011 10:16:46 AM
 
---
 
