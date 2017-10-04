# Panduan Paket Impor - blankonfirefox
Paket ini diturunkan dari paket ubufox yang merupakan extension firefox yang
ditujukan untuk rebranding firefox. Proses BlankOnisasi?:
   1. Mengubah seluruh kata ubufox menjadi blankonfirefox
   2. Mengubah seluruh kate ubufox@ubuntu.com menjadi
      blankonfirefox@blankonlinux.or.id
   3. Mengubah getUbuntu dan getUbuntu3 menjadi getBlankOn dan getBlankOn3.
   4. Mengubah halaman startup menjadi file:///usr/share/blankon-artwork/home/
      index.html
   5. Mengubah halaman release note menjadi http://www.blankonlinux.or.id/
      catatan-rilis/3.0/
   6. Mengubah maintainer
Keterangan: gunakan grep untuk mencari kata itu semua. Contoh:
`$ grep -r ubufox *`
Contoh perubahan: ​http://bazaar.launchpad.net/~blankon-pemaket/blankon/
blankonfirefox/revision/45
KategoriPemaket
Last modified on 06/28/2008 12:46:18 AM
 
---
 
