# Pembuatan Paket Armhf

Membuat Paket Armhf
sudo debootstrap --foreign --arch=armhf rote armhf http://
arsip.blankonlinux.or.id/blankon
sudo cp /usr/bin/qemu-arm-static armhf/usr/bin/
sudo chroot armhf/ /debootstrap/debootstrap --second-stage
Trus di /etc/apt/sources.list dipasang:
    * deb ke repo armhf
    * deb ke repo ​http://arsip.blankonlinux.or.ir/blankon
    * deb-src ke repo rote biasa untuk ambil paket2 sumber
Trus bangun paket2 yg ada di debootstrap dgn
apt-get build-dep <nama-paket>
apt-get source -b <nama-paket>

Last modified on 07/03/2012 07:43:53 PM

---
 
