# Membangun Paket BlankBerry
   

Untuk menyiapkan sistem BlankBerry, kita gunakan paket-paket dasar dari proyek
Raspbian. Ada beberapa paket BlankOn yang perlu dibangun ulang dan dipasang di
atas Raspbian untuk mendapatkan sistem BlankBerry.
## Daftar Paket
    * manokwari
    * gnome-session
    * metacity
    * base-files
### Cara pembangunan
#### Prasyarat
Anda sudah mahir membuat sistem chroot dengan debootstrap dan tahu cara
menggunakannya.
#### Tahap I
Tahap pertama adalah menyiapkan sistem pembangunan.
sudo qemu-debootstrap --arch armhf rote blankberry-dev http://arsip-
dev.blankonlinux.or.id/raspbian /usr/share/debootstrap/scripts/wheezy
Siapkan sources.list dengan konfigurasi:
deb http://arsip-dev.blankonlinux.or.id/raspbian rote main
deb-src http://arsip.blankonlinux.or.id/blankon rote main
#### Tahap II
Bangun ulang paket-paket di atas di dalam chroot, gunakan perintah apt-get
source. Hasil pembangunan bisa langsung dipasang di dalam sistem Raspbian.
Last modified on 09/20/2012 02:29:59 PM
#### 
    





