# DVD Repo

## Peralatann
debpartial dan mkisofs

## Lokasi
Marya

## Cara membuat

```
sudo su
su - arsip
cd ~/dvdrepo
./dvdrepo.sh <DIST> <ARCH>
```

Hasilnya ada di `~/dvdrepo/results/` dan bisa diakses via web dari alamat: ​http://arsip.blankonlinux.or.id/dvdrepo/

## Cara Lain
`$ date`

Lihat hasil tanggal, misanya \[tanggal], Kemudian :

```
$ at \[tanggal]
\> cd /home/arsip/dvdrepo && ./dvdrepo.sh ombilin i386
\> ctrl+d (pencet ctrl <plus> d)
```

Asumsi <DIST> = ombilin <ARCH> = i386
Last modified on 06/21/2011 08:54:01 PM


---
 
