# Pemaket
## Menambah pemaket baru
### Prasyarat
    * Calon pemaket sudah menjadi Ubuntero.
    * Memasukkan alamat surat elektronik yang hendak dipakai dalam kunci GPG.
### Tahapan
Ini dilakukan dari pengguna irgsh di yeyen. Ganti $KUNCI_GPG dengan kode kunci
GPG yang calon pemaket dan $NAMA_LOGIN dengan nama login calon pemaket di
​Launchpad.
    * Ambil kunci GPG dari Launchpad dan tandatangani. Gunakan sandi yang
      tercantum pada halaman ​http://dev.blankonlinux.or.id/wiki/Infrastruktur/
      GPG (Hanya beberapa tim steering dan infrastruktur yang dapat membukanya)
      # su - irgsh
      $ gpg --keyserver keyserver.ubuntu.com --recv-keys $KUNCI_GPG
      $ gpg --sign-key $KUNCI_GPG
    * Masukkan calon pemaket dalam daftar pemaket.
      # su - irgsh
      $ cd ~/master-web
      $ echo "$NAMA_LOGIN:$KUNCI_GPG" >> packagers.txt
    * Calon pemaket sudah siap menjadi pemaket.
### tambahan
pastikan pemaket sudah mengunggah ssh key di dev boi
    * untuk unggah ssh key manual;
# su -s /bin/bash bzr
$ ~/utils/gen_authorized_keys.sh
$ exit
grep namalogin@namamesin /home/bzr/.ssh/authorized_keys
namalogin@namamesin itu tergantung apa kata buntut berkas id_rsa.pub/atau
id_dsa.pub
Last modified on 04/08/2010 10:21:09 PM
#### 
    
 
 
 
 
 
---
 
