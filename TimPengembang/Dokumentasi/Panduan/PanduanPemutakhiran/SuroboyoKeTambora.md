# Panduan Pemutakhiran dari Suroboyo ke Tambora

## Pengaturan lumbung paket
deb http://arsip-dev.blankonlinux.or.id/blankon tambora main extras restricted
extras-restricted
deb http://arsip-dev.blankonlinux.or.id/blankon tambora-updates main extras
restricted extras-restricted
deb http://arsip-dev.blankonlinux.or.id/blankon tambora-security main extras
restricted extras-restricted

## Proses pemutakhiran

```
$ sudo dpkg-reconfigure locales
$ sudo apt-get update
$ sudo apt-get dist-upgrade
$ sudo reboot
```

Catatan: Jika terjadi galat saat pemutakhiran, jalankan perintah
`$ sudo apt-get -f install`

Last modified on 06/08/2015 10:52:59 AM
 
---
 
