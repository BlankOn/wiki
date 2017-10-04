## Panduan Paket Impor # gnome-panel
Proses BlankOnisasi gnome-panel
   1. Tambahkan 2 file yang akan membentuk entri Ihwal BlankOn. Ada pada berkas
      debian/blankon-about.desktop dan debian/blankon-about.desktop.in
   1. Ubah maintainer
Contoh revisi: ​http://bazaar.launchpad.net/~blankon-pemaket/blankon/gnome-
panel/revision/21
Tambahan karena ada perbedaan panel blankon-desktop dan blankon-minimalis
   1. Di berkas control dan control.in tambahkan depend blankon-panel-shortcut
      pada paket gnome-panel-data
   2. Hapus berkas debian/gnome-panel-data.postinst
Contoh revisi : ​http://bazaar.launchpad.net/~blankon-pemaket/blankon/gnome-
panel/revision/34
KategoriPemaket
Last modified on 07/03/2008 03:55:24 PM
#### 
    
 
 
 
 
 
---
 
