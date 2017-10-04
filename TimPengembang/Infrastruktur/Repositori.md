# Repositori
Repositori BlankOn dibuat menggunakan program ​reprepro
    * Lokasi konfigurasi dan log di rani: /home/arsipdev/reprepro ($CONF)
    * Lokasi konfigurasi di bzr: ​http://dev.blankonlinux.or.id/browser/
      infrastruktur/reprepro-config-rani
    * Bawa .gnupg-archive simpan di home arsipdev
    * Jangan lupa untuk lakukan bzr pull di $CONF/conf setiap kali membuat
      perubahan di bzr
    * Lokasi repositori di rani: /home/arsipdev/repo/blankon
    * Sinkronisasi dengan Ubuntu dilakukan via crontab pada pengguna arsipdev
## Administratif
### Memperbarui konfigurasi dari bzr
cd $CONF/conf
bzr pull
### Memperbarui paket dari Ubuntu
cd $CONF
reprepro -v -v -v -v -v update DIST
Perintah di atas akan melakukan apa yang dituliskan pada berkas conf/updates.
Paket-paket yang terdaftar dalam berkas $DISTRO.blacklist tidak akan
diperbarui.
### Membuat berkas index Packages.gz Sources.gz
cd $CONF
reprepro export DIST
### Memasukkan berkas paket .deb/.udeb + kode sumber menggunakan berkas
.changes
cd CONF
reprepro -C COMPONENT -P PRIORITY -S SECTION include DIST /PATH/TO/
PACKAGE.changes
### Memasukkan berkas paket .deb
cd CONF
reprepro -C COMPONENT -P PRIORITY -S SECTION includedeb DIST /PATH/TO/
PACKAGE.deb
### Memasukkan berkas paket debian-installer (.udeb)
cd CONF
reprepro -C COMPONENT -P PRIORITY -S SECTION includeudeb DIST /PATH/TO/
PACKAGE.udeb
### Memasukkan berkas kode sumber saja
cd $CONF
reprepro -C COMPONENT -P PRIORITY -S SECTION includedsc DIST /PATH/TO/
PACKAGE.dsc
### Menghapus paket dari repositori
cd $CONF
reprepro remove DIST NAMA_PAKET
### Inisialisasi repositori saat membuat rilis baru
cd $CONF
reprepro pull <nama-distro-asal>
### Perawatan
Digunakan untuk menjaga/mengecek repository
cd $CONF
reprepro dumpunreferenced
Gunakan opsi --keepunreferenced untuk simulasi
### Membekukan rilis
Tambahkan opsi ReadOnly? dan hilangkan tiffany.py , contoh
Origin: BlankOn
Label: BlankOn
Codename: nanggar
Suite: nanggar
....
ReadOnly: Yes  <----------
Last modified on 10/10/2011 08:08:51 PM
#### 
    
 
 
 
 
 
---
 
