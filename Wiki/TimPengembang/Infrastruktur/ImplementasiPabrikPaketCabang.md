# Implementasi Pabrik Paket Cabang
### Instalasi
   1. Instal pbuilder
      sudo apt-get install pbuilder
   2. Buat pengguna blankon-dev
      sudo useradd blankon-dev
   3. Masukkan blankon-dev sebagai pengguna sudo untuk pbuilder
      `# echo "blankon-dev ALL=NOPASSWD: /usr/sbin/pbuilder" >> /etc/sudoers`
   4. Siapkan rootstrap (dilakukan sebagai blankon-dev)
      `# sudo - blankon-dev`  
      `sudo  pbuilder create  --configfile /home/blankon-dev/.pbuilderrc`
   5. Instalasi skrip pabrik paket cabang

### Lampiran
#### .pbuilderrc

Letakkan berkas .pbuilderrc di /home/blankon-dev, isinya:

```
BASETGZ=/home/blankon-dev/pbuilder/base.tgz
#EXTRAPACKAGES=gcc3.0-athlon-builder
export DEBIAN_BUILDARCH=i386
BUILDPLACE=/home/blankon-dev/pbuilder/build/
MIRRORSITE=http://gx.tmp.mnots.eu

#Ini nanti dibuka kalau sudah ada isinya
#OTHERMIRROR="deb http://konde-dev.ubuntu-id.org konde main"
#export http_proxy=http://your-proxy:8080/
USEPROC=no
USEDEVPTS=yes
USEDEVFS=no
BUILDRESULT=/home/blankon-dev/pbuilder/result/

# specifying the distribution forces the distribution on "pbuilder update"
DISTRIBUTION=gutsy

# specifying the components of the distribution (default is "main")
#COMPONENTS="main restricted universe multiverse"
#specify the cache for APT
APTCACHE="/home/blankon-dev/pbuilder/aptcache/"
APTCACHEHARDLINK="yes"
REMOVEPACKAGES="lilo"
#HOOKDIR="/usr/lib/pbuilder/hooks"
HOOKDIR=""
# make debconf not interact with user
export DEBIAN_FRONTEND="noninteractive"
DEBEMAIL=""
#for pbuilder debuild
BUILDSOURCEROOTCMD="fakeroot"
PBUILDERROOTCMD="sudo"
# command to satisfy build-dependencies; the default is an internal shell
# implementation which is relatively slow; there's an alternate experimental
# implementation, "pbuilder-satisfydepends-experimental", which might be useful
# to pull packages from experimental or from repositories with a low APT Pin
# Priority
PBUILDERSATISFYDEPENDSCMD="/usr/lib/pbuilder/pbuilder-satisfydepends"
#default is to build everything. Passed on to dpkg-buildpackage
#DEBBUILDOPTS="-b"
DEBBUILDOPTS=""
#APT configuration files directory
APTCONFDIR=""
# the username and ID used by pbuilder, inside chroot. Needs fakeroot, really
BUILDUSERID=1234
BUILDUSERNAME=pbuilder
# BINDMOUNTS is a space separated list of things to mount
# inside the chroot.
BINDMOUNTS=""
# Set the debootstrap variant to 'buildd' type.
# DEBOOTSTRAPOPTS[0]='--variant=buildd'
# or work around bug in debootstrap 3.0.0 (314858)
unset DEBOOTSTRAPOPTS
DEBOOTSTRAPOPTS[0]='--arch'
DEBOOTSTRAPOPTS[1]='i386'
# Set the PATH I am going to use inside pbuilder: default is "/usr/sbin:/usr/bin
# DEBOOTSTRAPOPTS[0]='--variant=buildd'
# or work around bug in debootstrap 3.0.0 (314858)
unset DEBOOTSTRAPOPTS
DEBOOTSTRAPOPTS[0]='--arch'
DEBOOTSTRAPOPTS[1]='i386'
# Set the PATH I am going to use inside pbuilder: default is "/usr/sbin:/usr/bin:/sbin:/bin:/usr/X11R6/bin"
#
export PATH="/usr/sbin:/usr/bin:/sbin:/bin:/usr/X11R6/bin"
# SHELL variable is used inside pbuilder by commands like 'su'; and they need sane values
export SHELL=/bin/bash
# The name of debootstrap command.
DEBOOTSTRAP="debootstrap"
# default file extension for pkgname-logfile
PKGNAME_LOGFILE_EXTENTION="_$(dpkg --print-architecture).build"
# default PKGNAME_LOGFILE
PKGNAME_LOGFILE=""
KategoriPemaket KategoriInfra
Last modified on 07/01/2008 01:29:41 PM
```

---

