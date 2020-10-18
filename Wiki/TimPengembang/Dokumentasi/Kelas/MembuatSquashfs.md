# Membuat Squashfs

Squashfs adalah jenis file system yang mendukung kompresi sehingga cocok digunakan pada LiveCD. Kita akan membuat image dari chroot tadi, atau dengan kata lain direktori chroot itu akan kita masukkan dalam sebuah sistem berkas baru berjenis squashfs.

1.Install program pembuat squashfs 
```
/# apt-get install squashfs-tools
```
##### Keluaran:
```
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Suggested packages:
  squashfs-source lzma-source
The following NEW packages will be installed:
  squashfs-tools
0 upgraded, 1 newly installed, 0 to remove and 3 not upgraded.
Need to get 123kB of archives.
After this operation, 311kB of additional disk space will be used.
Get:1 http://kambing.ui.edu intrepid/main squashfs-tools 1:3.3-7ubuntu1 [123kB]
Fetched 123kB in 0s (412kB/s)   
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
Selecting previously deselected package squashfs-tools.
(Reading database ... 11764 files and directories currently installed.)
Unpacking squashfs-tools (from .../squashfs-tools_1%3a3.3-7ubuntu1_amd64.deb) ...
Can not write log, openpty() failed (/dev/pts not mounted?)
Setting up squashfs-tools (1:3.3-7ubuntu1) ...
```

2.Pastikan kita berada di / lalu lakukan perintah ini 
```
/# mksquashfs / filesystem.squashfs -e filesystem.squashfs
```
 ##### Keluaran:
```
Parallel mksquashfs: Using 1 processor
Creating little endian 3.1 filesystem on filesystem.squashfs, block size 131072.
[===============================================================================================================================================================] 12532/12532 100%
Exportable Little endian filesystem, data block size 131072, compressed data, compressed metadata, compressed fragments, duplicates are removed
Filesystem size 166166.12 Kbytes (162.27 Mbytes)
        47.74% of uncompressed filesystem size (348088.57 Kbytes)
Inode table size 142854 bytes (139.51 Kbytes)
        31.86% of uncompressed inode table size (448402 bytes)
Directory table size 132499 bytes (129.39 Kbytes)
        55.07% of uncompressed directory table size (240604 bytes)
Number of duplicate files found 751
Number of inodes 13532
Number of files 11081
Number of fragments 1303
Number of symbolic links  895
Number of device nodes 86
Number of fifo nodes 2
Number of socket nodes 0
Number of directories 1468
Number of uids 5
        root (0)
        syslog (101)
        libuuid (100)
        news (9)
        klog (102)
Number of gids 13
        video (44)
        audio (29)
        tty (5)
        kmem (15)
        disk (6)
        adm (4)
        shadow (42)
        mail (8)
        staff (50)
        libuuid (101)
        src (40)
        utmp (43)
        klog (103)
```

Artinya buatlah sebuah berkas bernama filesystem.squashfs berisi semua berkas mulai dari direktori / tapi jangan menyertakan filesystem.squashfs yang sedang dibuat ke dalamnya. PERHATIAN: opsi -e filesystem.squashfs itu sangat penting. Kalau tidak pakai itu nanti berkas cetakannya juga masuk dalam squashfsnya, dan bersifat rekursif.

3.Keluar dari chroot 
```
/# exit
```

4.Buat direktori untuk direkam dalam CD. 
```
~/livecd$ mkdir -p binary/casper
```

5.Salin kernel dan initrd dari direktori chroot ke direktori casper. Tapi potong namanya 
```
~/livecd$ cp chroot/boot/vmlinuz-2.6.27-7-generic binary/casper/vmlinuz
~/livecd$ cp chroot/boot/initrd.img-2.6.27-7-generic binary/casper/initrd.img
```

6.Buat berkas parameters.txt dalam direktori binary/casper. Lalu isi dengan ​http://pastebin.com/m3b26788f 
```
Boot Parameters for Debian Live
-------------------------------

Updated for casper 1.77+debian-7 on 2007-02-08.

These options (can be combined) work from the syslinux bootprompt:

casper casper-getty
casper xdebconf
casper hostname=HOSTNAME
casper userfullname=USERFULLNAME
casper username=USERNAME
casper {keyb|kbd-chooser/method}=KEYBOARD
casper {klayout|console-setup/layoutcode}=LAYOUT
casper {kvariant|console-setup/variantcode}=VARIANT     ,
casper {kmodel|console-setup/modelcode}=CODE ,  koptions=OPTIONS
casper ip=IFACE,ADDRESS,NETMASK,GATEWAY[:IFACE,ADDRESS,NETMASK,GATEWAY]*
casper ip[=frommedia]
casper {live-media|bootfrom}=DEVICE
casper live-media-offset=BYTES
casper locale=LOCALE | debian-installer/locale=LOCALE
casper netboot[=nfs|cifs]
casper persistent
casper nopersistent
casper showmounts
casper todisk=DEVICE
casper toram
casper {preseed/file|file}=FILE
casper package/question=VALUE

Values for the vga kernel parameter:

Colours   640x400 640x480 800x600 1024x768 1152x864 1280x1024 1600x1200
--------+--------------------------------------------------------------
 4 bits |    ?       ?     0x302      ?        ?        ?         ?
 8 bits |  0x300   0x301   0x303    0x305    0x161    0x307     0x31C
15 bits |    ?     0x310   0x313    0x316    0x162    0x319     0x31D
16 bits |    ?     0x311   0x314    0x317    0x163    0x31A     0x31E
24 bits |    ?     0x312   0x315    0x318      ?      0x31B     0x31F
32 bits |    ?       ?       ?        ?      0x164      ?

Colours   640x400 640x480 800x600 1024x768 1152x864 1280x1024 1600x1200
--------+--------------------------------------------------------------
 4 bits |    ?       ?      770       ?        ?        ?         ?
 8 bits |   768     769     771      773      353      775       796
15 bits |    ?      784     787      790      354      793       797
16 bits |    ?      758     788      791      355      794       798
24 bits |    ?      786     789      792       ?       795       799
32 bits |    ?       ?       ?        ?       356       ?

```
