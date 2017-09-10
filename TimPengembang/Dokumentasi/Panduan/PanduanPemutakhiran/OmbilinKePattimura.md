# Panduan Menaikkan Versi BlankOn Ombilin ke Pattimura

### Ombilin
  * Perbaharui lumbung paket BlankOn di /etc/apt/sources.list. Isi berkas
      tersebut dengan baris-baris berikut :
      deb http://arsip.blankonlinux.or.id/blankon ombilin main restricted
      extras extras-restricted
      deb http://arsip.blankonlinux.or.id/blankon ombilin-updates main
      restricted extras extras-restricted
      deb http://arsip.blankonlinux.or.id/blankon ombilin-security main
      restricted
  * Perbarui basis data lumbung aplikasi
`$ sudo apt-get update`
  * Naikan versi
`$ sudo apt-get upgrade`

### Pattimura
  * Perbarui sources.list, ganti ombilin menjadi pattimura, Isi berkas
      tersebut dengan baris-baris berikut :
      deb http://arsip.blankonlinux.or.id/blankon pattimura main restricted
      extras extras-restricted
      deb http://arsip.blankonlinux.or.id/blankon pattimura-updates main
      restricted extras extras-restricted
      deb http://arsip.blankonlinux.or.id/blankon pattimura-security main
      restricted extras extras-restricted
  * Perbarui basis data lumbung aplikasi
`$ sudo apt-get update`

  * Pasang blankon-desktop Pattimura
     `$ sudo apt-get install blankon-desktop`
  * Naikan Ombilin menjadi Pattimura
      `$ sudo apt-get dist-upgrade`
  * Selesai

Last modified on 08/17/2011 01:21:39 AM
 
---
 
