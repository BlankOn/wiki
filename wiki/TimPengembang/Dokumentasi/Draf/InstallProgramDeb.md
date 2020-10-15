# Memasang paket dari berkas .deb

Di BlankOn anda dapat menambah paket dari sebuah/beberapa berkas yang mempunyai format .deb (debian package). Untuk melakukan instalasi paket, Anda 
dapat menggunakan dpkg.

## Studi kasus
Apabila kita ingin mengingankan memasang paket ​tema_ikon_kamonesan maka caranya adalah:

## Unduh paket
Unduh paket dari Repository

```
 $ wget -c http://arsip.blankonlinux.or.id/blankon/pool/main/k/kamonesan-icon- theme/kamonesan-icon-theme_0.1-0blankon1_all.deb

 ```

## Pasang paket dalam sistem

Silakan pasang paket tersebut ke dalam sistem Anda
`$ sudo dpkg -i kamonesan-icon-theme_0.1-0blankon1_all.deb`

## Problem
Bila paket tersebut gagal dipasang pada sistem Anda, maka permasalahanya adalah:
  1. Ketergantungan paket, silakan install paket-paket yang diperlukan oleh paket tersebut
  2. Anda tidak mempunyai hak root, silakan coba dengan  sudo dpkg -i paket_yang_akan_di_install
  3. Ruang kosong dalam harddisk Anda.
Last modified on 01/05/2009 08:21:10 PM

---
 


