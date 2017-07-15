# Instalasi Bootloader

Kita pakai syslinux, Pakai grub juga boleh kalau mau.
1.Install syslinux dalam chroot 
```
~/livecd$ sudo chroot chroot apt-get install syslinux
```
##### Keluaran:
```
Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  mtools
Suggested packages:
  floppyd
The following NEW packages will be installed:
  mtools syslinux
0 upgraded, 2 newly installed, 0 to remove and 3 not upgraded.
Need to get 617kB of archives.
After this operation, 1380kB of additional disk space will be used.
Do you want to continue [Y/n]? 
Get:1 http://kambing.ui.edu intrepid/main mtools 3.9.11-1 [207kB]
Get:2 http://kambing.ui.edu intrepid/main syslinux 2:3.63+dfsg-2ubuntu3 [410kB]
Fetched 617kB in 0s (687kB/s)    
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
        LANGUAGE = (unset),
        LC_ALL = (unset),
        LANG = "en_US.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").
locale: Cannot set LC_CTYPE to default locale: No such file or directory
locale: Cannot set LC_MESSAGES to default locale: No such file or directory
locale: Cannot set LC_ALL to default locale: No such file or directory
Can not write log, openpty() failed (/dev/pts not mounted?)
Selecting previously deselected package mtools.
(Reading database ... 11773 files and directories currently installed.)
Unpacking mtools (from .../mtools_3.9.11-1_amd64.deb) ...
Selecting previously deselected package syslinux.
Unpacking syslinux (from .../syslinux_2%3a3.63+dfsg-2ubuntu3_amd64.deb) ...
Can not write log, openpty() failed (/dev/pts not mounted?)
Setting up mtools (3.9.11-1) ...
perl: warning: Setting locale failed.
perl: warning: Please check that your locale settings:
        LANGUAGE = (unset),
        LC_ALL = (unset),
        LANG = "en_US.UTF-8"
    are supported and installed on your system.
perl: warning: Falling back to the standard locale ("C").

Setting up syslinux (2:3.63+dfsg-2ubuntu3) ...
```

2.Siapkan direktori syslinux 
```
~/livecd$ mkdir -p binary/isolinux
~/livecd$ ls binary/
casper  isolinux
```
3.Salin program isolinux.bin dari dalam chroot ke direktory binary/isolinux 
```
~/livecd$ cp chroot/usr/lib/syslinux/isolinux.bin binary/isolinux
~/livecd$ ls binary/isolinux/
isolinux.bin
```
4.Buat berkas bernama binary/isolinux/isolinux.cfg, isi dengan 
```
DEFAULT /casper/vmlinuz
GFXBOOT bootlogo
APPEND  boot=casper initrd=/casper/initrd.img  boot=casper union=aufs

LABEL live
   menu label IniDiaBlankOnLive
   kernel /casper/vmlinuz
   append initrd=/casper/initrd.img boot=casper union=aufs

TIMEOUT 300
PROMPT 1
```

5.Salin squashfs tadi ke direktori binary/casper 
```
~/livecd$ cp chroot/filesystem.squashfs binary/casper
cp: cannot open `chroot/filesystem.squashfs' for reading: Permission denied
~/livecd$ sudo cp chroot/filesystem.squashfs binary/casper
~/livecd$ ls -al binary/casper/
total 177168
-rwx------ 1 root   root   170156032 2008-10-31 19:39 filesystem.squashfs
-rw-r--r-- 1 kholis kholis   8721650 2008-10-31 19:16 initrd.img
-rw-r--r-- 1 kholis kholis      2045 2008-10-31 19:22 parameters.txt
-rw-r--r-- 1 kholis kholis   2339712 2008-10-31 19:16 vmlinuz
```
6.Ambil data bawaan syslinux dan gfxboot di bazaar dev.blankonlinux.or.id 
```
~/livecd$ bzr branch http://dev.blankonlinux.or.id/bzr/meuligoe/pabrik-cd/
Branched 3 revision(s).                                                                                                                                                           
~/livecd$ ls
binary  chroot  pabrik-cd
```

7.Copy data dari bzr tadi 
```
~/livecd$ cp pabrik-cd/blankon-cd-factory/syslinux/* binary/isolinux
~/livecd$ cp pabrik-cd/data/meuligoe/cdlive/syslinux/* binary/isolinux
```
