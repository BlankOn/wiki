# Instalasi Kernel

melanjutkan dari halaman [ini](http://dev.blankonlinux.or.id/wiki/Dokumentasi/Lokakarya/MembuatLiveCD/InstalasiPaketMeta), maka langkah selanjutnya adalah:

1.buat file /etc/kernel-img.conf (di chroot), isi dengan: 
```
do_bootloader = No
do_initrd = Yes 
warn_initrd = No
```
2.Masih di chroot, silahkan install kernelnya: 
```
/# apt-get install linux-image-2.6.28-11-generic casper
```
##### Keluaran:

```
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  grub grub-common localechooser-data user-setup uuid-runtime wireless-crda
Suggested packages:
  grub-doc mdadm multiboot-doc fdutils linux-doc-2.6.28 linux-source-2.6.28
The following NEW packages will be installed:
  casper grub grub-common linux-image-2.6.28-11-generic localechooser-data user-setup uuid-runtime wireless-crda
0 upgraded, 8 newly installed, 0 to remove and 0 not upgraded.
Need to get 25.3MB of archives.
After this operation, 97.9MB of additional disk space will be used.
Do you want to continue [Y/n]? y
WARNING: The following packages cannot be authenticated!
  localechooser-data user-setup casper
Install these packages without verification [y/N]? y
Get:1 http://mirror.unej.ac.id jaunty/main wireless-crda 1.7 [15.0kB]
Get:2 http://mirror.unej.ac.id jaunty/main linux-image-2.6.28-11-generic 2.6.28-11.42 [24.6MB]
Get:3 http://mirror.unej.ac.id jaunty/main uuid-runtime 1.41.4-1ubuntu1 [49.4kB]
Get:4 http://mirror.unej.ac.id jaunty/main grub-common 1.96+20080724-12ubuntu2 [93.5kB]
Get:5 http://mirror.unej.ac.id jaunty/main grub 0.97-29ubuntu53 [404kB]
Get:6 http://mirror.unej.ac.id nanggar/main localechooser-data 2.09ubuntu2+blankon1 [5276B]
Get:7 http://mirror.unej.ac.id nanggar/main user-setup 1.23ubuntu20+blankon4 [133kB]
Get:8 http://mirror.unej.ac.id nanggar/main casper 1.173+blankon2 [39.9kB]
Fetched 25.3MB in 2s (9080kB/s)
Preconfiguring packages ...
Selecting previously deselected package wireless-crda.
(Reading database ... 66493 files and directories currently installed.)
Unpacking wireless-crda (from .../wireless-crda_1.7_i386.deb) ...
Selecting previously deselected package linux-image-2.6.28-11-generic.
Unpacking linux-image-2.6.28-11-generic (from .../linux-image-2.6.28-11-generic_2.6.28-11.42_i386.deb) ...
Done.

...
... (dipotong)
...
Processing triggers for initramfs-tools ...
update-initramfs: Generating /boot/initrd.img-2.6.28-11-generic
```

3.umount 
```
/# umount devpts-blive
/# umount sysfs-blive
/# umount proc-blive
```
