Reference:
- https://salsa.debian.org/mirror-team/archvsync
- http://www.linux-admins.net/2013/11/creating-official-debian-mirror-with.html
- https://www.pipefail.io/2017/01/14/dpkg-repo/


Example of ftpsync configuration file,
```
########################################################################
########################################################################
## This is a sample configuration file for the ftpsync mirror script. ##
## Only options most users may need are included.  For documentation  ##
## and all available options see ftpsync.conf(5).                     ##
########################################################################
########################################################################

MIRRORNAME=cermin.blankonlinux.or.id
TO="/home/mirror/mirrors/debian"
# MAILTO="$LOGNAME"
# HUB=false

########################################################################
## Connection options
########################################################################

RSYNC_HOST="mirror.coganng.com"
RSYNC_PATH="debian"
# RSYNC_USER=
# RSYNC_PASSWORD=

########################################################################
## Mirror information options
########################################################################

INFO_MAINTAINER="Herpiko Dwi Aguno <herpiko@gmail.com>"
# INFO_SPONSOR="Example <https://example.com>"
INFO_COUNTRY=ID
# INFO_LOCATION="Example"
INFO_THROUGHPUT=10Mb

########################################################################
## Include and exclude options
########################################################################

EXCLUDE="--exclude=bullseye* --exclude=buster* --exclude=jessie* --exclude=oldstable* --exclude=sid* --exclude=trixie* --exclude=testing* --exclude=unstable* --exclude=experimental* --exclude=Debian* --exclude=stable* --exclude=old*"
ARCH_EXCLUDE="alpha arm armel armhf hppa hurd-i386 ia64 kfreebsd-amd64 kfreebsd-i386 m68k mipsel mips powerpc s390 s390x sh sparc i386 arm64"
# ARCH_EXCLUDE=

########################################################################
## Log option
########################################################################

LOGDIR=/home/mirror/log
```
