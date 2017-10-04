## Panduan Paket Impor # firefox-3.0
### Sudah tidak berlaku di PATTIMURA
lihat halaman ​http://dev.blankonlinux.or.id/wiki/Pemaket/PanduanPaketImpor/
firefox
Proses BlankOnisasi:
   1. Mengubah isi Bookmark milik Firefox 3. Perubahan dilakukan melalui patch
      yang tertulis dalam debian/patches/blankon.patch
   2. Membuat patch agar Vendor string masuk ke dalam User Agent. Nilai ini
      diambil dari /etc/lsb-release sehingga pastikan paket base-files milik
      BlankOn sudah benar dan sudah terbentuk. Perubahan dilakukan dengan
      menambah berkas debian/vendor.js.in dan perubahan pada debian/rules.
     Kode berikut ditambahkan pada bagian binary-install/$(DEBIAN_NAME)::
        set -e; . /etc/lsb-release; export DISTRIB_ID DISTRIB_RELEASE
DISTRIB_CODENAME; $(CURDIR)/build-tree/mozilla/config/preprocessor.pl -E < $
(CURDIR)/debian/vendor.js.in > $(CURDIR)/debian/vendor.js
153 		        dh_install debian/vendor.js $(DEBIAN_FF3_DIR)/defaults/
preferences/
   1. Proses re-branding berikutnya (startup page, dsb) dilakukan melalui
      sebuah firefox extension bernama blankonfirefox
   2. Ubah maintainer
KategoriPemaket
Last modified on 12/30/2010 10:02:30 PM
#### 
    
 
 
 
 
 
---
 
