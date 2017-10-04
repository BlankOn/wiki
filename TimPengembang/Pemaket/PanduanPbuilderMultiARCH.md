# PanduanPbuilderMultiARCH
### Membangun Paket di lingkungan Pbuilder
sudo apt-get install devscripts build-essential fakeroot debhelper gnupg
pbuilder pdebuild-cross dh-make dpkg-dev ubuntu-dev-tools qemu-user-static
gnome-pkg-tools dh-autoreconf
#### Ubah konfigurasi sudo
Defaults        env_reset
menjadi
Defaults        env_reset,env_keep="DIST ARCH"
Tambahkan di konfigurasi sudo
Cmnd_Alias  PBUILDER = /usr/sbin/pbuilder, /usr/bin/pdebuild, /usr/bin/debuild-
pbuilder
<your user>  ALL=(ALL) SETENV: NOPASSWD: PBUILDER
#### Berkas konfigurasi pbuilder
sudo vim /etc/pbuilderrc
# Codenames for Debian suites according to their alias. Update these when
# needed.
UNSTABLE_CODENAME="sid"
TESTING_CODENAME="jessie"
STABLE_CODENAME="wheezy"
STABLE_BACKPORTS_SUITE="$STABLE_CODENAME-backports"
DEBOOTSTRAPOPTS=('--keyring' '/usr/share/keyrings/blankon-archive-keyring.gpg')
# List of Debian suites.
DEBIAN_SUITES=($UNSTABLE_CODENAME $TESTING_CODENAME $STABLE_CODENAME
    "unstable" "testing" "stable")
# List of Ubuntu suites. Update these when needed.
BLANKON_SUITES=("experimental" "tambora" "suroboyo")
# Mirrors to use. Update these to your preferred mirror.
DEBIAN_MIRROR="ftp.us.debian.org"
BLANKON_MIRROR="arsip-dev.blankonlinux.or.id"
# Optionally use the changelog of a package to determine the suite to use if
# none set.
if [ -z "${DIST}" ] && [ -r "debian/changelog" ]; then
    DIST=$(dpkg-parsechangelog | awk '/^Distribution: / {print $2}')
    DIST="${DIST%%-*}"
    # Use the unstable suite for certain suite values.
    if $(echo "experimental UNRELEASED" | grep -q $DIST); then
        DIST="$UNSTABLE_CODENAME"
    fi
fi
# Optionally set a default distribution if none is used. Note that you can set
# your own default (i.e. ${DIST:="unstable"}).
: ${DIST:="$(lsb_release --short --codename)"}
# Optionally change Debian release states in $DIST to their names.
case "$DIST" in
    unstable)
        DIST="$UNSTABLE_CODENAME"
        ;;
    testing)
        DIST="$TESTING_CODENAME"
        ;;
    stable)
        DIST="$STABLE_CODENAME"
        ;;
esac
# Optionally set the architecture to the host architecture if none set. Note
# that you can set your own default (i.e. ${ARCH:="i386"}).
: ${ARCH:="$(dpkg --print-architecture)"}
NAME="$DIST"
if [ -n "${ARCH}" ]; then
    NAME="$NAME-$ARCH"
    DEBOOTSTRAPOPTS=("--arch" "$ARCH" "${DEBOOTSTRAPOPTS[@]}")
fi
if [ "$ARCH" == "armel" ] && [ "$(dpkg --print-architecture)" != "armel" ];
then
    DEBOOTSTRAP="qemu-debootstrap"
fi
if [ "$ARCH" == "armhf" ] && [ "$(dpkg --print-architecture)" != "armhf" ];
then
    DEBOOTSTRAP="qemu-debootstrap"
fi
BASETGZ="/home/$USER/pbuilder/$NAME-base.tgz"
DISTRIBUTION="$DIST"
BUILDRESULT="/home/$USER/pbuilder/$NAME/result/"
APTCACHE="/home/$USER/pbuilder/$NAME/aptcache/"
BUILDPLACE="/home/$USER/pbuilder/build/"
DEBBUILDOPTS="-I -i -j9"
# Optionally set the CONCURRENCY_LEVEL to specifies the number of allowed
# concurrent jobs for make while building the package.
# Default is cores-1.
: ${CCL:="$(grep -cE "^processor" /proc/cpuinfo)"}
if [ "${CCL}" -eq "1" ]; then
    CONCURRENCY_LEVEL=${CCL}
else
    CONCURRENCY_LEVEL=$((${CCL}-1))
fi
# export the three variables
export DIST
export ARCH
export CONCURRENCY_LEVEL
#echo architecture: $ARCH
#echo distribution: $DIST
#echo used cpus:    $CONCURRENCY_LEVEL
# Option to pass to apt-get always.
export APTGETOPT=(--force-yes)
# Option to pass to aptitude always.
export APTITUDEOPT=(--force-yes)
# make debconf not interact with user
export DEBIAN_FRONTEND="noninteractive"
# SHELL variable is used inside pbuilder by commands like 'su'; and they need
sane values
#export SHELL=/bin/bash
if $(echo ${DEBIAN_SUITES[@]} | grep -q $DIST); then
    # Debian configuration
    MIRRORSITE="http://$DEBIAN_MIRROR/debian/"
    COMPONENTS="main contrib non-free"
    DEBOOTSTRAPOPTS=("${DEBOOTSTRAPOPTS[@]}" "--keyring=/usr/share/keyrings/
debian-archive-keyring.gpg")
elif $(echo ${BLANKON_SUITES[@]} | grep -q $DIST); then
    # BlankOn configuration
    MIRRORSITE="http://$BLANKON_MIRROR/blankon/"
    COMPONENTS="main extras restricted extras-restricted"
    DEBOOTSTRAPOPTS=("${DEBOOTSTRAPOPTS[@]}" "--keyring=/usr/share/keyrings/
blankon-archive-keyring.gpg")
else
    echo "Unknown distribution: $DIST"
    exit 1
fi
# info output
echo "I: Used distribution is ${DIST}."
echo "I: Build architecture is ${ARCH}."
echo "I: Used cpus for building: ${CONCURRENCY_LEVEL}."
#### Buat pbuilder base
sudo DIST=tambora ARCH=amd64 pbuilder create
atau armhf
sudo DIST=tambora ARCH=armhf pbuilder create
#### Update base
sudo DIST=tambora ARCH=amd64 pbuilder update --override-config
#### Bangun paket
sudo DIST=tambora ARCH=amd64 pbuilder build nama-paket.dsc
Last_modified 7 months ago Last modified on 10/08/2016 10:07:14 PM
#### 
    
 
 
 
 
 
---
 
