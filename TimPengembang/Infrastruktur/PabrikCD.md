# Pabrik CD

Halaman ini menjelaskan proses pembuatan CD secara manual
## Jenis CD
  cdlive
      Live CD biasa, paket yang diinstal adalah blankon-desktop
  cdlive.minimalist
      Live CD dengan desktop BlankOn minimalis, paket yang diinstal adalah
      blankon-desktop-minimalist
  dvdlive
      DVD Live, paket yang diinstal adalah blankon-desktop + daluang
## Proses pembuatan CD
    * Buat ulang berkas Release pada cermin Ubuntu
      # su - irgsh
      $ cd repo/dev/<distro-ubuntu>
      $ ~/utils/gen-release.sh
      $ exit
    * Mulai pembuatan CD
      # su - cdimage
      $ cd pabrik
      $ ./start.sh <distro> <arch> <jenis-cd>
     Jika berhasil maka CD akan diletakkan pada direktori /home/cdimage/
     images/daily-live/<tanggal>. Jika proses diulangi maka berkas .iso
     yang sudah berhasil dibuat (bila ada) akan ditimpa.
*tambahan = untuk jahit manual tinggal dilihat di file crontab.txt di folder
home cdimage
KategoriInfra
Last modified on 03/28/2010 10:32:28 AM
#### 
    
 
 
 
 
 
---
 
