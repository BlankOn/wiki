# Install Program dpkg

### Tentang dpkg

dpkg adalah perangkat lunak dasar pada sistem manajemen paket Debian. Tool dpkg digunakan untuk memasang, menghapus, dan memberikan informasi tentang 
paket yang berupa berkas .deb (debian package).

### Menggunakan dpkg
  * Memasang paket .deb:
	`$ sudo dpkg -i <NamaBerkasdeb>`
	Dengan <NamaBerkasdeb> adalah nama berkas paket Debian.

  * Untuk melihat daftar paket yang sudah terpasang:
`$ sudo dpkg -l`

  * Untuk menghapus paket:
`$ sudo dpkg -r <nama paket>`

### Studi Kasus
Apabila kita ingin mengingankan memasang paket ​tema_ikon_kamonesan maka caranya adalah:

**Unduh paket**
Unduh paket dari Repository
```
$ wget -c http://arsip.blankonlinux.or.id/blankon/pool/main/k/kamonesan-icon-
theme/kamonesan-icon-theme_0.1-0blankon1_all.deb
```

**Pasang paket dalam sistem**
Silakan pasang paket tersebut ke dalam sistem anda
$ sudo dpkg -i kamonesan-icon-theme_0.1-0blankon1_all.deb

**Hapus paket dari sistem**
Untuk menghapus paket dari sistem, lakukan perintah berikut
`$ sudo dpkg -r kamonesan-icon-theme_0.1-0blankon1_all.deb`

*** Problem ***
Bila terjadi kegagalan saat memasang paket di sistem anda, ada beberapa kemungkinan terjadi kegagalan :
   1. Ketergantungan paket, silakan install paket-paket yang di perlukan oleh paket tersebut.
   2. Anda tidak mempunyai hak root, silakan coba dengan  sudo dpkg -i paket_yang_akan_di_install
   3. Ruang kosong dalam harddisk anda kurang.

Last modified on 06/12/2010 01:21:13 PM

---
 



