# Instalasi paket blankon-desktop (atau blankon-desktop-minimalis)
## Instalasi Kernel

1.Silahkan chroot 
```
$ sudo cp /etc/resolv.conf chroot/etc/resolv.conf
$ sudo chroot chroot
```

2.mount dan tentukan bahasa 
```
/# mount -t proc proc-blive /proc
/# mount -t devpts devpts-blive /dev/pts
/# mount -t sysfs sysfs-blive /sys
/# export HOME=/root
/# export LC_ALL=C
````

3.Buat file /etc/apt/sources.list yang berisi (isikan dengan mirror kesukaan anda):
```
$ cp /etc/apt/sources.list chroot/etc/apt/sources.list
```
yang berisikan
```
deb http://kambing.ui.edu/ubuntu jaunty main restricted multiverse universe
deb http://arsip.blankonlinux.or.id/blankon nanggar main restricted
```

4.Update sistem dan install paket meta 
```
/# apt-get update
/# apt-get dist-upgrade
/# apt-get install blankon-desktop blankon-minimal blankon-standard
```

Keluaran:
```
root@blankone:/# aptitude update
Hit http://mirror.unej.ac.id jaunty Release.gpg
Get:1 http://mirror.unej.ac.id nanggar Release.gpg [189B]
Hit http://mirror.unej.ac.id jaunty Release
Get:2 http://mirror.unej.ac.id nanggar Release [9727B]
Hit http://mirror.unej.ac.id jaunty/main Packages
Ign http://mirror.unej.ac.id nanggar Release   
Get:3 http://mirror.unej.ac.id jaunty/restricted Packages [8848B]
Get:4 http://mirror.unej.ac.id jaunty/universe Packages [4757kB]
Get:5 http://mirror.unej.ac.id jaunty/multiverse Packages [197kB]
Get:6 http://mirror.unej.ac.id nanggar/main Packages [71.3kB]
Get:7 http://mirror.unej.ac.id nanggar/restricted Packages [28.5kB]
Fetched 5073kB in 4s (1216kB/s)                  
Reading package lists... Done
W: GPG error: http://mirror.unej.ac.id nanggar Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY B85EF00D2CCF12D8
W: You may want to run apt-get update to correct these problems

Current status: 5 updates [+5], 20748 new [+20748].
root@blankone:/# apt-get install blankon-desktop
```
