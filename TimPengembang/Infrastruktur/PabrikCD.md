# PABRIK CD

Laman ini menjelaskan pembuatan pabrik CD Uluwatu secara manual

## Install perkakas
`$ sudo apt-get install git debootstrap genisoimage zsync reprepro xorriso postfix mailutils dosfstools`

## Setup GNUPG

## Menghajar Pabrik
* Buat User CDIMAGE  
`$ sudo adduser cdimage`

* Ubah CDIMAGE menjadi sudoers  
`$ sudo visudo -f /etc/sudoers`  
Tambahkan di baris terakhir dan simpan  
`cdimage ALL=NOPASSWD: ALL`

* Masuk Ke CDIMAGE  
`$ sudo su – cdimage`

* Menarik Skrip Pabrik CD  
`$ git clone https://github.com/tuanpembual/pabrik-cc.git`  
`$ git checkout uluwatu`  

* Ubah suai config pabrik  
`$ vim uluwatu.config`

* Mengatur debootstrap uluwatu  
`$ vim uluwatu.debootstrap`  
`$ sudo cp uluwatu.debootstrap /usr/share/debootstrap/scripts/uluwatu`
`$ sudo cp lsb-release /etc/.`

* Mengatur lokasi cd image  
`$ mkdir /home/cdimage/images/livedvd-harian/`

## Membuat Cetakan CD
`$ ./enter-cd-blankon.sh`

## Selamat Menikmati Error dan Baca Log

## Keluar dari Chroot
```
$ sudo mount  
$ sudo umount /path/to/pabrikcd/pabrik-cc-github/tmp/$DATE-rootfs-amd64/sys  
$ sudo umount /path/to/pabrikcd/pabrik-cc-github/tmp/20170521-rootfs-amd64/proc  
$ sudo umount /path/to/pabrikcd/pabrik-cc-github/tmp/20170521-rootfs-amd64/dev/pts
```

## Rilis
`$ sudo ./release-image -d /home/cdimage/images/livedvd-harian/$DATE/ -r 11.0 -p /home/cdimage/images/rilis/uluwatu/Jahitan-RC4/`

