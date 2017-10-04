# Daftar Paket BlankOn 7 Pattimura

## Perbandingan Versi Paket Dasar BlankOn 7 Pattimura

Silakan gunakan package-monitor dari ​http://dev.blankonlinux.or.id/bzr/pemaket/package-monitor/ untuk mengisi tabel di bawah ini. Paket-paket dasar
diperoleh dari perintah:

> $ debootstrap --arch <ARCH> --print-debs maverick /tmp/maverick

Masukkan semua daftar paket yang dihasilkan perintah di atas dalam sebuah berkas data/pattimura-<ARCH>.list. Satu paket dalam satu baris. Kemudian jalankan pada masing-masing arsitektur:

> $ package-monitor.py -a <ARCH> -d pattimura

Jangan lupa untuk menyesuaikan lumbung di direktori sources.lists/.

**i386**
                   Pattimura              Debian Sid               Ubuntu Maverick         Ombilin                  Homepage                                                           Maintainer
adduser            3.112ubuntu1           3.112ubuntu1             3.112ubuntu1            3.112ubuntu1             ​http://alioth.debian.org/projects/adduser/
base-files         --                     5.9                      5.0.0ubuntu22           5.0.0ubuntu20+blankon3
base-passwd        --                     3.5.22                   3.5.22                  3.5.22
bash               --                     4.1-3                    4.1-2ubuntu4            4.1-2ubuntu3             ​http://tiswww.case.edu/php/chet/bash/bashtop.html
bsdutils           --                     1:2.17.2-3.1             1:2.17.2-0ubuntu1       1:2.17.2-0ubuntu1
busybox-initramfs  --                     --                       1:1.15.3-1ubuntu4       1:1.13.3-1ubuntu11
coreutils          --                     8.5-1                    8.5-1ubuntu3            7.4-2ubuntu2             ​http://gnu.org/software/coreutils
cpio               --                     2.11-4                   2.11-4ubuntu1           2.10-1ubuntu2
dash               --                     0.5.5.1-7                0.5.5.1-7ubuntu1        0.5.5.1-3ubuntu2         ​http://gondor.apana.org.au/~herbert/dash/
debconf            1.5.28ubuntu4+blankon2 1.5.35                   1.5.32ubuntu1           1.5.28ubuntu4+blankon2
debconf-i18n       1.5.28ubuntu4+blankon2 1.5.35                   1.5.32ubuntu1           1.5.28ubuntu4+blankon2
debianutils        --                     3.4                      3.2.3                   3.2.2
diffutils          --                     1:3.0-1                  1:3.0-1                 1:2.8.1-18               ​http://www.gnu.org/software/diffutils/
dpkg               --                     1.15.8.4                 1.15.8.4ubuntu2         1.15.5.6ubuntu4.1        ​http://wiki.debian.org/Teams/Dpkg                               udienz
e2fslibs           --                     1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                                                                                           1ubuntu2+blankon1
e2fsprogs          --                     1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                                                                                           1ubuntu2+blankon1
findutils          --                     4.4.2-1                  4.4.2-1ubuntu1          4.4.2-1ubuntu1           ​http://savannah.gnu.org/projects/findutils/
gcc-4.5-base       --                     --                       4.5.1-2ubuntu2          --                       ​http://gcc.gnu.org/
grep               --                     2.6.3-3                  2.6.3-3                 2.5.4-4build1            ​http://www.gnu.org/software/grep/
gzip               --                     1.3.12-9                 1.3.12-9ubuntu1.1       1.3.12-9ubuntu1
hostname           --                     3.04                     3.04ubuntu1             3.03ubuntu1
ifupdown           --                     0.6.10                   0.6.10ubuntu2           0.6.8ubuntu29
initramfs-tools    0.92bubuntu78          0.98.1                   0.98ubuntu2             0.92bubuntu78
initramfs-tools-   --                     --                       0.98ubuntu2             0.92bubuntu78
bin
initscripts        --                     2.88dsf-12               2.87dsf-4ubuntu17       2.87dsf-4ubuntu17        ​http://savannah.nongnu.org/projects/sysvinit
insserv            --                     1.14.0-2                 1.14.0-2                1.12.0-14                ​http://savannah.nongnu.org/projects/sysvinit
klibc-utils        --                     1.5.20-1                 1.5.18-1                1.5.17-4ubuntu1
libacl1            --                     2.2.49-3                 2.2.49-3                2.2.49-2                 ​http://savannah.nongnu.org/projects/acl/
libattr1           --                     1:2.4.44-2               1:2.4.44-2              1:2.4.44-1               ​http://savannah.nongnu.org/projects/attr/
libblkid1          --                     2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
libbz2-1.0         --                     1.0.5-4                  1.0.5-4                 1.0.5-4                  ​http://www.bzip.org/
libc-bin           --                     2.11.2-2                 2.12.1-0ubuntu1         2.11.1-0ubuntu7.2        ​http://www.eglibc.org
libc6              --                     2.11.2-2                 2.12.1-0ubuntu1         2.11.1-0ubuntu7.2        ​http://www.eglibc.org
libcomerr2         --                     1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                                                                                           1ubuntu2+blankon1
libdb4.8           --                     4.8.30-1                 4.8.30-1                4.8.24-1ubuntu1          ​http://www.oracle.com/technology/software/products/berkeley-db/
                                                                                                                    index.html
libdbus-1-3        --                     1.2.24-3                 1.2.24-3ubuntu1         1.2.16-2ubuntu4          ​http://dbus.freedesktop.org/
libdrm-intel1      --                     2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libdrm-nouveau1    --                     2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libdrm-radeon1     --                     2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libdrm2            --                     2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libgcc1            --                     1:4.4.4-11               1:4.5.1-2ubuntu2        1:4.4.3-4ubuntu5         ​http://gcc.gnu.org/
libglib2.0-0       --                     2.24.1-1                 2.25.14-1ubuntu2        2.24.1-0ubuntu1          ​http://www.gtk.org/
libklibc           --                     1.5.20-1                 1.5.18-1                1.5.17-4ubuntu1
liblocale-gettext- --                     1.05-6                   1.05-6                  1.05-6                   ​http://search.cpan.org/dist/gettext/gettext.pm
perl
liblzma2           --                     4.999.9beta+20100810-1   4.999.9beta+20100527-1  --                       ​http://tukaani.org/xz/
libncurses5        --                     5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
libncursesw5       --                     5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
libnih-dbus1       --                     1.0.2-1                  1.0.2-1ubuntu2          1.0.1-1                  ​https://launchpad.net/libnih
libnih1            --                     1.0.2-1                  1.0.2-1ubuntu2          1.0.1-1                  ​https://launchpad.net/libnih
libpam-modules     --                     1.1.1-4                  1.1.1-4ubuntu1          1.1.1-2ubuntu5           ​http://pam.sourceforge.net/
libpam-runtime     1.1.1-2ubuntu5         1.1.1-4                  1.1.1-4ubuntu1          1.1.1-2ubuntu5           ​http://pam.sourceforge.net/
libpam0g           --                     1.1.1-4                  1.1.1-4ubuntu1          1.1.1-2ubuntu5           ​http://pam.sourceforge.net/
libpcre3           --                     8.02-1.1                 8.02-1                  7.8-3build1
libplymouth2       --                     --                       0.8.2-2ubuntu3          0.8.2-2ubuntu2+blankon1
libpng12-0         --                     1.2.44-1                 1.2.44-1                1.2.42-1ubuntu2.1        ​http://libpng.org/pub/png/libpng.html
libselinux1        --                     2.0.96-1                 2.0.94-1                2.0.89-4
libsepol1          --                     2.0.41-1                 2.0.41-1                2.0.40-2
libslang2          --                     2.2.2-4                  2.2.2-4ubuntu1          2.2.2-2ubuntu1
libss2             --                     1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                                                                                           1ubuntu2+blankon1
libssl0.9.8        --                     0.9.8o-2                 0.9.8o-1ubuntu3         0.9.8k-7ubuntu8
libtext-charwidth- --                     0.04-6                   0.04-6                  0.04-6                   ​http://search.cpan.org/search?module=Text::CharWidth
perl
libtext-iconv-perl --                     1.7-2                    1.7-2                   1.7-2                    ​http://search.cpan.org/search?module=Text::Iconv
libtext-wrapi18n-  0.06-7                 0.06-7                   0.06-7                  0.06-7                   ​http://search.cpan.org/search?module=Text::WrapI18N
perl
libudev0           --                     161-1                    161+git20100825-1       151-12
libusb-0.1-4       --                     2:0.1.12-15              2:0.1.12-15ubuntu2      2:0.1.12-14ubuntu0.2     ​http://www.linux-usb.org/
libuuid1           --                     2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
locales            2.11+git20100304-3     2.11.2-2                 2.13+git20100825-1      2.11+git20100304-3       ​http://www.eglibc.org
login              --                     1:4.1.4.2-1              1:4.1.4.2-1ubuntu2      1:4.1.4.2-1ubuntu2       ​http://pkg-shadow.alioth.debian.org/
lsb-base           4.0-0ubuntu8           4.0-0ubuntu8             4.0-0ubuntu8            4.0-0ubuntu8             ​http://www.linux-foundation.org/en/LSB
makedev            2.3.1-89ubuntu1        2.3.1-89ubuntu1          2.3.1-89ubuntu1         2.3.1-89ubuntu1
mawk               --                     1.3.3-15                 1.3.3-15ubuntu2         1.3.3-15ubuntu2
module-init-tools  --                     3.12-1                   3.12-1ubuntu1           3.11.1-2ubuntu1          ​http://www.kerneltools.org/
mount              --                     2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
mountall           --                     --                       2.16                    2.15
ncurses-base       5.7+20090803-2ubuntu3  5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
ncurses-bin        --                     5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
net-tools          --                     1.60-23                  1.60-23ubuntu3          1.60-23ubuntu2
passwd             --                     1:4.1.4.2-1              1:4.1.4.2-1ubuntu2      1:4.1.4.2-1ubuntu2       ​http://pkg-shadow.alioth.debian.org/
perl-base          --                     5.10.1-14                5.10.1-12ubuntu2        5.10.1-8ubuntu2
plymouth           --                     0.8.3-6                  0.8.2-2ubuntu3          0.8.2-2ubuntu2+blankon1  ​http://www.freedesktop.org/wiki/Software/Plymouth
procps             --                     1:3.2.8-9                1:3.2.8-9ubuntu3        1:3.2.8-1ubuntu4         ​http://procps.sf.net/
python-minimal     2.6.5-0ubuntu1         2.6.5-13                 2.6.5-13ubuntu1         2.6.5-0ubuntu1           ​http://www.python.org/
python2.6-minimal  --                     2.6.6-2                  2.6.6-1ubuntu1          2.6.5-1ubuntu6
sed                --                     4.2.1-7                  4.2.1-7                 4.2.1-6                  ​http://www.gnu.org/software/sed/
sensible-utils     0.0.1ubuntu3           0.0.4                    0.0.4ubuntu1            0.0.1ubuntu3
sysv-rc            2.87dsf-4ubuntu17      2.88dsf-12               2.87dsf-4ubuntu17       2.87dsf-4ubuntu17        ​http://savannah.nongnu.org/projects/sysvinit
sysvinit-utils     --                     2.88dsf-12               2.87dsf-4ubuntu17       2.87dsf-4ubuntu17        ​http://savannah.nongnu.org/projects/sysvinit
tar                --                     1.23-2.1                 1.23-2                  1.22-2
tzdata             2010k-0ubuntu0.10.04   2010l-1                  2010l-1                 2010k-0ubuntu0.10.04
udev               --                     161-1                    161+git20100825-1       151-12
upstart            --                     0.6.6-1                  0.6.6-3                 0.6.5-7                  ​http://upstart.ubuntu.com/
util-linux         --                     2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
xz-utils           --                     4.999.9beta+20100810-1   4.999.9beta+20100527-1  4.999.9beta+20091116-1   ​http://tukaani.org/xz/
zlib1g             --                     1:1.2.3.4.dfsg-3         1:1.2.3.4.dfsg-3ubuntu1 1:1.2.3.3.dfsg-15ubuntu1 ​http://zlib.net/
apt                --                     0.8.0                    0.8.0ubuntu2            0.7.25.3ubuntu9+blankon1
apt-utils          --                     0.8.0                    0.8.0ubuntu2            0.7.25.3ubuntu9+blankon1
bzip2              --                     1.0.5-4                  1.0.5-4                 1.0.5-4                  ​http://www.bzip.org/
console-setup      1.34ubuntu15+blankon1  1.55                     1.34ubuntu15+blankon1   1.34ubuntu15+blankon1
console-terminus   4.30-2                 4.30-2                   4.30-2                  4.30-2
cron               --                     3.0pl1-114               3.0pl1-114ubuntu1       3.0pl1-106ubuntu5        ​http://ftp.isc.org/isc/cron/
dhcp3-client       --                     4.1.1-P1-9               3.1.3-2ubuntu6          3.1.3-2ubuntu3
dhcp3-common       --                     4.1.1-P1-9               3.1.3-2ubuntu6          3.1.3-2ubuntu3
dmsetup            --                     2:1.02.48-3              2:1.02.39-1ubuntu4      2:1.02.39-1ubuntu4       ​http://sources.redhat.com/lvm2/
eject              --                     2.1.5+deb1+cvs20081104-7 2.1.5+deb1+cvs20081104- 2.1.5+deb1+cvs20081104-7 ​http://www.pobox.com/~tranter/eject.html
                                                                   7
file               --                     5.04-5                   5.03-5ubuntu1           5.03-5ubuntu1            ​http://www.darwinsys.com/file/
gnupg              --                     1.4.10-4                 1.4.10-2ubuntu2         1.4.10-2ubuntu1          ​http://www.gnupg.org
gpgv               --                     1.4.10-4                 1.4.10-2ubuntu2         1.4.10-2ubuntu1          ​http://www.gnupg.org
iproute            --                     20100519-3               20100519-2              20091226-1               ​http://www.linux-foundation.org/en/Net:Iproute2
iputils-ping       --                     3:20100418-2             3:20100418-2ubuntu1     3:20071127-2ubuntu1
kbd                --                     1.15.2-1                 1.15-1ubuntu3           1.15-1ubuntu3
less               --                     436-1                    436-1                   436-1                    ​http://www.greenwoodsoftware.com/less/
libatm1            --                     1:2.5.1-1.2              1:2.5.1-1.2             1:2.5.1-1.2              ​http://linux-atm.sourceforge.net/
libcap2            --                     1:2.19-3                 1:2.19-2                1:2.17-2ubuntu1          ​http://sites.google.com/site/fullycapable/
libdevmapper1.02.1 --                     2:1.02.48-3              2:1.02.39-1ubuntu4      2:1.02.39-1ubuntu4       ​http://sources.redhat.com/lvm2/
libfribidi0        --                     0.19.2-1                 0.19.2-1                0.19.2-1                 ​http://www.fribidi.org/
liblockfile1       --                     1.08-4                   1.08-4                  1.08-3ubuntu1
libmagic1          --                     5.04-5                   5.03-5ubuntu1           5.03-5ubuntu1            ​http://www.darwinsys.com/file/
libnewt0.52        --                     0.52.11-1                0.52.11-1               0.52.10-5ubuntu1         ​https://fedorahosted.org/newt/
libpopt0           --                     1.16-1                   1.16-1                  1.16-1                   ​http://rpm5.org/
libreadline6       --                     6.1-3                    6.1-3                   6.1-1
libsqlite3-0       --                     3.7.2-1                  3.7.0.1-1               3.6.22-1
libstdc++6         --                     4.4.4-11                 4.5.1-2ubuntu2          4.4.3-4ubuntu5           ​http://gcc.gnu.org/
lockfile-progs     --                     0.1.15                   0.1.15                  0.1.13ubuntu1
logrotate          --                     3.7.8-6                  3.7.8-6ubuntu1          3.7.8-4ubuntu2
lsb-release        4.0-0ubuntu8           4.0-0ubuntu8             4.0-0ubuntu8            4.0-0ubuntu8             ​http://www.linux-foundation.org/en/LSB
mime-support       3.48-1ubuntu1          3.48-1ubuntu1            3.48-1ubuntu2           3.48-1ubuntu1
netbase            4.35ubuntu3            4.42                     4.35ubuntu3             4.35ubuntu3
netcat-openbsd     --                     1.89-4                   1.89-3ubuntu2           1.89-3ubuntu2
ntpdate            --                     1:4.2.6.p2+dfsg-1        1:4.2.4p8+dfsg-1ubuntu6 1:4.2.4p8+dfsg-1ubuntu2  ​http://support.ntp.org/
python             2.6.5-0ubuntu1         2.6.5-13                 2.6.5-13ubuntu1         2.6.5-0ubuntu1           ​http://www.python.org/
python-central     0.6.15ubuntu1          0.6.16                   0.6.15ubuntu1           0.6.15ubuntu1
python2.6          --                     2.6.6-2                  2.6.6-1ubuntu1          2.6.5-1ubuntu6
readline-common    6.1-1                  6.1-3                    6.1-3                   6.1-1
rsyslog            --                     4.6.4-1                  4.2.0-2ubuntu8          4.2.0-2ubuntu8           ​http://www.rsyslog.com/
sudo               --                     1.7.2p7-1                1.7.2p7-1ubuntu1        1.7.2p1-1ubuntu5.1
ubuntu-keyring     2010.11.09             2010.11.09               2010.+05.27.1           2010.11.09
ubuntu-minimal     --                     --                       1.204                   1.197
ucf                3.0025                 3.0025                   3.0025                  3.0025
ureadahead         --                     --                       0.100.0-7               0.100.0-4.1.2
                                          2:
vim-common         --                     7.3.000+hg~ee53a39d5896- 2:7.2.330-1ubuntu3      2:7.2.330-1ubuntu3       ​http://www.vim.org/
                                          1
                                          2:
vim-tiny           --                     7.3.000+hg~ee53a39d5896- 2:7.2.330-1ubuntu3      2:7.2.330-1ubuntu3       ​http://www.vim.org/
                                          1
whiptail           --                     0.52.11-1                0.52.11-1               0.52.10-5ubuntu1         ​https://fedorahosted.org/newt/
xkb-data           1.8-1ubuntu8           1.8-1ubuntu8             1.8-1ubuntu8            1.8-1ubuntu8             ​http://www.freedesktop.org/Software/XKeyboardConfig

**amd64**
                   Pattimura                Debian Sid               Ubuntu Maverick         Ombilin                  Homepage                                                           Maintainer
adduser            3.112ubuntu1             3.112ubuntu1             3.112ubuntu1            3.112ubuntu1             ​http://alioth.debian.org/projects/adduser/
base-files         5.0.0ubuntu20+blankon3   5.9                      5.0.0ubuntu22           5.0.0ubuntu20+blankon3
base-passwd        3.5.22                   3.5.22                   3.5.22                  3.5.22
bash               4.1-2ubuntu3             4.1-3                    4.1-2ubuntu4            4.1-2ubuntu3             ​http://tiswww.case.edu/php/chet/bash/bashtop.html
bsdutils           1:2.17.2-0ubuntu1        1:2.17.2-3.1             1:2.17.2-0ubuntu1       1:2.17.2-0ubuntu1
busybox-initramfs  1:1.13.3-1ubuntu11       1:1.13.3-1ubuntu11       1:1.15.3-1ubuntu4       1:1.13.3-1ubuntu11
coreutils          7.4-2ubuntu2             8.5-1                    8.5-1ubuntu3            7.4-2ubuntu2             ​http://gnu.org/software/coreutils
cpio               2.10-1ubuntu2            2.11-4                   2.11-4ubuntu1           2.10-1ubuntu2
dash               0.5.5.1-3ubuntu2         0.5.5.1-7                0.5.5.1-7ubuntu1        0.5.5.1-3ubuntu2         ​http://gondor.apana.org.au/~herbert/dash/
debconf            1.5.28ubuntu4+blankon2   1.5.35                   1.5.32ubuntu1           1.5.28ubuntu4+blankon2
debconf-i18n       1.5.28ubuntu4+blankon2   1.5.35                   1.5.32ubuntu1           1.5.28ubuntu4+blankon2
debianutils        3.2.2                    3.4                      3.2.3                   3.2.2
diffutils          1:2.8.1-18               1:3.0-1                  1:3.0-1                 1:2.8.1-18               ​http://www.gnu.org/software/diffutils/
dpkg               1.15.5.6ubuntu4.1        1.15.8.4                 1.15.8.4ubuntu2         1.15.5.6ubuntu4.1        ​http://wiki.debian.org/Teams/Dpkg                               udienz
e2fslibs           1.41.11-                 1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                   1ubuntu2+blankon1                                                         1ubuntu2+blankon1
e2fsprogs          1.41.11-                 1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                   1ubuntu2+blankon1                                                         1ubuntu2+blankon1
findutils          4.4.2-1ubuntu1           4.4.2-1ubuntu1           4.4.2-1ubuntu1          4.4.2-1ubuntu1           ​http://savannah.gnu.org/projects/findutils/
gcc-4.5-base       --                       --                       4.5.1-2ubuntu2          --                       ​http://gcc.gnu.org/
grep               2.5.4-4build1            2.6.3-3                  2.6.3-3                 2.5.4-4build1            ​http://www.gnu.org/software/grep/
gzip               1.3.12-9ubuntu1          1.3.12-9ubuntu1          1.3.12-9ubuntu1.1       1.3.12-9ubuntu1
hostname           3.03ubuntu1              3.04                     3.04ubuntu1             3.03ubuntu1
ifupdown           0.6.8ubuntu29            0.6.10                   0.6.10ubuntu2           0.6.8ubuntu29
initramfs-tools    0.92bubuntu78            0.98.1                   0.98ubuntu2             0.92bubuntu78
initramfs-tools-   0.92bubuntu78            0.92bubuntu78            0.98ubuntu2             0.92bubuntu78
bin
initscripts        2.87dsf-4ubuntu17        2.88dsf-12               2.87dsf-4ubuntu17       2.87dsf-4ubuntu17        ​http://savannah.nongnu.org/projects/sysvinit
insserv            1.12.0-14                1.14.0-2                 1.14.0-2                1.12.0-14                ​http://savannah.nongnu.org/projects/sysvinit
klibc-utils        1.5.17-4ubuntu1          1.5.20-1                 1.5.18-1                1.5.17-4ubuntu1
libacl1            2.2.49-2                 2.2.49-3                 2.2.49-3                2.2.49-2                 ​http://savannah.nongnu.org/projects/acl/
libattr1           1:2.4.44-1               1:2.4.44-2               1:2.4.44-2              1:2.4.44-1               ​http://savannah.nongnu.org/projects/attr/
libblkid1          2.17.2-0ubuntu1          2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
libbz2-1.0         1.0.5-4                  1.0.5-4                  1.0.5-4                 1.0.5-4                  ​http://www.bzip.org/
libc-bin           2.11.1-0ubuntu7.2        2.11.2-2                 2.12.1-0ubuntu1         2.11.1-0ubuntu7.2        ​http://www.eglibc.org
libc6              2.11.1-0ubuntu7.2        2.11.2-2                 2.12.1-0ubuntu1         2.11.1-0ubuntu7.2        ​http://www.eglibc.org
libcomerr2         1.41.11-                 1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                   1ubuntu2+blankon1                                                         1ubuntu2+blankon1
libdb4.8           4.8.24-1ubuntu1          4.8.30-1                 4.8.30-1                4.8.24-1ubuntu1          ​http://www.oracle.com/technology/software/products/berkeley-db/
                                                                                                                      index.html
libdbus-1-3        1.2.16-2ubuntu4          1.2.24-3                 1.2.24-3ubuntu1         1.2.16-2ubuntu4          ​http://dbus.freedesktop.org/
libdrm-intel1      2.4.18-1ubuntu3          2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libdrm-nouveau1    2.4.18-1ubuntu3          2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libdrm-radeon1     2.4.18-1ubuntu3          2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libdrm2            2.4.18-1ubuntu3          2.4.21-1~squeeze2        2.4.21-1ubuntu2         2.4.18-1ubuntu3
libgcc1            1:4.4.3-4ubuntu5         1:4.4.4-11               1:4.5.1-2ubuntu2        1:4.4.3-4ubuntu5         ​http://gcc.gnu.org/
libglib2.0-0       2.24.1-0ubuntu1          2.24.1-1                 2.25.14-1ubuntu2        2.24.1-0ubuntu1          ​http://www.gtk.org/
libklibc           1.5.17-4ubuntu1          1.5.20-1                 1.5.18-1                1.5.17-4ubuntu1
liblocale-gettext- 1.05-6                   1.05-6                   1.05-6                  1.05-6                   ​http://search.cpan.org/dist/gettext/gettext.pm
perl
liblzma2           --                       4.999.9beta+20100810-1   4.999.9beta+20100527-1  --                       ​http://tukaani.org/xz/
libncurses5        5.7+20090803-2ubuntu3    5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
libncursesw5       5.7+20090803-2ubuntu3    5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
libnih-dbus1       1.0.1-1                  1.0.2-1                  1.0.2-1ubuntu2          1.0.1-1                  ​https://launchpad.net/libnih
libnih1            1.0.1-1                  1.0.2-1                  1.0.2-1ubuntu2          1.0.1-1                  ​https://launchpad.net/libnih
libpam-modules     1.1.1-2ubuntu5           1.1.1-4                  1.1.1-4ubuntu1          1.1.1-2ubuntu5           ​http://pam.sourceforge.net/
libpam-runtime     1.1.1-2ubuntu5           1.1.1-4                  1.1.1-4ubuntu1          1.1.1-2ubuntu5           ​http://pam.sourceforge.net/
libpam0g           1.1.1-2ubuntu5           1.1.1-4                  1.1.1-4ubuntu1          1.1.1-2ubuntu5           ​http://pam.sourceforge.net/
libpcre3           7.8-3build1              8.02-1.1                 8.02-1                  7.8-3build1
libplymouth2       0.8.2-2ubuntu2+blankon1  0.8.2-2ubuntu2+blankon1  0.8.2-2ubuntu3          0.8.2-2ubuntu2+blankon1
libpng12-0         1.2.42-1ubuntu2.1        1.2.44-1                 1.2.44-1                1.2.42-1ubuntu2.1        ​http://libpng.org/pub/png/libpng.html
libselinux1        2.0.89-4                 2.0.96-1                 2.0.94-1                2.0.89-4
libsepol1          2.0.40-2                 2.0.41-1                 2.0.41-1                2.0.40-2
libslang2          2.2.2-2ubuntu1           2.2.2-4                  2.2.2-4ubuntu1          2.2.2-2ubuntu1
libss2             1.41.11-                 1.41.12-2                1.41.12-1ubuntu2        1.41.11-                 ​http://e2fsprogs.sourceforge.net
                   1ubuntu2+blankon1                                                         1ubuntu2+blankon1
libssl0.9.8        0.9.8k-7ubuntu8          0.9.8o-2                 0.9.8o-1ubuntu3         0.9.8k-7ubuntu8
libtext-charwidth- 0.04-6                   0.04-6                   0.04-6                  0.04-6                   ​http://search.cpan.org/search?module=Text::CharWidth
perl
libtext-iconv-perl 1.7-2                    1.7-2                    1.7-2                   1.7-2                    ​http://search.cpan.org/search?module=Text::Iconv
libtext-wrapi18n-  0.06-7                   0.06-7                   0.06-7                  0.06-7                   ​http://search.cpan.org/search?module=Text::WrapI18N
perl
libudev0           151-12                   161-1                    161+git20100825-1       151-12
libusb-0.1-4       2:0.1.12-14ubuntu0.2     2:0.1.12-15              2:0.1.12-15ubuntu2      2:0.1.12-14ubuntu0.2     ​http://www.linux-usb.org/
libuuid1           2.17.2-0ubuntu1          2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
locales            2.11+git20100304-3       2.11.2-2                 2.13+git20100825-1      2.11+git20100304-3       ​http://www.eglibc.org
login              1:4.1.4.2-1ubuntu2       1:4.1.4.2-1ubuntu2       1:4.1.4.2-1ubuntu2      1:4.1.4.2-1ubuntu2       ​http://pkg-shadow.alioth.debian.org/
lsb-base           4.0-0ubuntu8             4.0-0ubuntu8             4.0-0ubuntu8            4.0-0ubuntu8             ​http://www.linux-foundation                                     .org/en/
                                                                                                                                                                                         LSB
makedev            2.3.1-89ubuntu1          2.3.1-89ubuntu1          2.3.1-89ubuntu1         2.3.1-89ubuntu1
mawk               1.3.3-15ubuntu2          1.3.3-15ubuntu2          1.3.3-15ubuntu2         1.3.3-15ubuntu2
module-init-tools  3.11.1-2ubuntu1          3.12-1                   3.12-1ubuntu1           3.11.1-2ubuntu1          ​http://www.kerneltools.org/
mount              2.17.2-0ubuntu1          2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
mountall           2.15                     2.15                     2.16                    2.15
ncurses-base       5.7+20090803-2ubuntu3    5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
ncurses-bin        5.7+20090803-2ubuntu3    5.7+20100313-2           5.7+20100626-0ubuntu1   5.7+20090803-2ubuntu3    ​http://invisible-island.net/ncurses/
net-tools          1.60-23ubuntu2           1.60-23ubuntu2           1.60-23ubuntu3          1.60-23ubuntu2
passwd             1:4.1.4.2-1ubuntu2       1:4.1.4.2-1ubuntu2       1:4.1.4.2-1ubuntu2      1:4.1.4.2-1ubuntu2       ​http://pkg-shadow.alioth.debian.org/
perl-base          5.10.1-8ubuntu2          5.10.1-14                5.10.1-12ubuntu2        5.10.1-8ubuntu2
plymouth           0.8.2-2ubuntu2+blankon1  0.8.3-6                  0.8.2-2ubuntu3          0.8.2-2ubuntu2+blankon1  ​http://www.freedesktop.org/wiki/Software/Plymouth
procps             1:3.2.8-1ubuntu4         1:3.2.8-9                1:3.2.8-9ubuntu3        1:3.2.8-1ubuntu4         ​http://procps.sf.net/
python-minimal     2.6.5-0ubuntu1           2.6.5-13                 2.6.5-13ubuntu1         2.6.5-0ubuntu1           ​http://www.python.org/
python2.6-minimal  2.6.5-1ubuntu6           2.6.6-2                  2.6.6-1ubuntu1          2.6.5-1ubuntu6
sed                4.2.1-6                  4.2.1-7                  4.2.1-7                 4.2.1-6                  ​http://www.gnu.org/software/sed/
sensible-utils     0.0.1ubuntu3             0.0.4                    0.0.4ubuntu1            0.0.1ubuntu3
sysv-rc            2.87dsf-4ubuntu17        2.88dsf-12               2.87dsf-4ubuntu17       2.87dsf-4ubuntu17        ​http://savannah.nongnu.org/projects/sysvinit
sysvinit-utils     2.87dsf-4ubuntu17        2.88dsf-12               2.87dsf-4ubuntu17       2.87dsf-4ubuntu17        ​http://savannah.nongnu.org/projects/sysvinit
tar                1.22-2                   1.23-2.1                 1.23-2                  1.22-2
tzdata             2010k-0ubuntu0.10.04     2010l-1                  2010l-1                 2010k-0ubuntu0.10.04
udev               151-12                   161-1                    161+git20100825-1       151-12
upstart            0.6.5-6                  0.6.6-1                  0.6.6-3                 0.6.5-7                  ​http://upstart.ubuntu.com/
util-linux         2.17.2-0ubuntu1          2.17.2-3.1               2.17.2-0ubuntu1         2.17.2-0ubuntu1
xz-utils           4.999.9beta+20091116-1   4.999.9beta+20100810-1   4.999.9beta+20100527-1  4.999.9beta+20091116-1   ​http://tukaani.org/xz/
zlib1g             1:1.2.3.3.dfsg-15ubuntu1 1:1.2.3.4.dfsg-3         1:1.2.3.4.dfsg-3ubuntu1 1:1.2.3.3.dfsg-15ubuntu1 ​http://zlib.net/
apt                0.7.25.3ubuntu9+blankon1 0.8.0                    0.8.0ubuntu2            0.7.25.3ubuntu9+blankon1
apt-utils          0.7.25.3ubuntu9+blankon1 0.8.0                    0.8.0ubuntu2            0.7.25.3ubuntu9+blankon1
bzip2              1.0.5-4                  1.0.5-4                  1.0.5-4                 1.0.5-4                  ​http://www.bzip.org/
console-setup      1.34ubuntu15+blankon1    1.55                     1.34ubuntu15+blankon1   1.34ubuntu15+blankon1
console-terminus   4.30-2                   4.30-2                   4.30-2                  4.30-2
cron               3.0pl1-106ubuntu5        3.0pl1-114               3.0pl1-114ubuntu1       3.0pl1-106ubuntu5        ​http://ftp.isc.org/isc/cron/
dhcp3-client       3.1.3-2ubuntu3           4.1.1-P1-9               3.1.3-2ubuntu6          3.1.3-2ubuntu3
dhcp3-common       3.1.3-2ubuntu3           4.1.1-P1-9               3.1.3-2ubuntu6          3.1.3-2ubuntu3
dmsetup            2:1.02.39-1ubuntu4       2:1.02.48-3              2:1.02.39-1ubuntu4      2:1.02.39-1ubuntu4       ​http://sources.redhat.com/lvm2/
eject              2.1.5+deb1+cvs20081104-7 2.1.5+deb1+cvs20081104-7 2.1.5+deb1+cvs20081104- 2.1.5+deb1+cvs20081104-7 ​http://www.pobox.com/~tranter/eject.html
                                                                     7
file               5.03-5ubuntu1            5.04-5                   5.03-5ubuntu1           5.03-5ubuntu1            ​http://www.darwinsys.com/file/
gnupg              1.4.10-2ubuntu1          1.4.10-4                 1.4.10-2ubuntu2         1.4.10-2ubuntu1          ​http://www.gnupg.org
gpgv               1.4.10-2ubuntu1          1.4.10-4                 1.4.10-2ubuntu2         1.4.10-2ubuntu1          ​http://www.gnupg.org
iproute            20091226-1               20100519-3               20100519-2              20091226-1               ​http://www.linux-foundation.org/en/Net:Iproute2
iputils-ping       3:20071127-2ubuntu1      3:20100418-2             3:20100418-2ubuntu1     3:20071127-2ubuntu1
kbd                1.15-1ubuntu3            1.15.2-1                 1.15-1ubuntu3           1.15-1ubuntu3
less               436-1                    436-1                    436-1                   436-1                    ​http://www.greenwoodsoftware.com/less/
libatm1            1:2.5.1-1.2              1:2.5.1-1.2              1:2.5.1-1.2             1:2.5.1-1.2              ​http://linux-atm.sourceforge.net/
libcap2            1:2.17-2ubuntu1          1:2.19-3                 1:2.19-2                1:2.17-2ubuntu1          ​http://sites.google.com/site/fullycapable/
libdevmapper1.02.1 2:1.02.39-1ubuntu4       2:1.02.48-3              2:1.02.39-1ubuntu4      2:1.02.39-1ubuntu4       ​http://sources.redhat.com/lvm2/
libfribidi0        0.19.2-1                 0.19.2-1                 0.19.2-1                0.19.2-1                 ​http://www.fribidi.org/
liblockfile1       1.08-3ubuntu1            1.08-4                   1.08-4                  1.08-3ubuntu1
libmagic1          5.03-5ubuntu1            5.04-5                   5.03-5ubuntu1           5.03-5ubuntu1            ​http://www.darwinsys.com/file/
libnewt0.52        0.52.10-5ubuntu1         0.52.11-1                0.52.11-1               0.52.10-5ubuntu1         ​https://fedorahosted.org/newt/
libpopt0           1.16-1                   1.16-1                   1.16-1                  1.16-1                   ​http://rpm5.org/
libreadline6       6.1-1                    6.1-3                    6.1-3                   6.1-1
libsqlite3-0       3.6.22-1                 3.7.2-1                  3.7.0.1-1               3.6.22-1
libstdc++6         4.4.3-4ubuntu5           4.4.4-11                 4.5.1-2ubuntu2          4.4.3-4ubuntu5           ​http://gcc.gnu.org/
lockfile-progs     0.1.13ubuntu1            0.1.15                   0.1.15                  0.1.13ubuntu1
logrotate          3.7.8-4ubuntu2           3.7.8-6                  3.7.8-6ubuntu1          3.7.8-4ubuntu2
lsb-release        4.0-0ubuntu8             4.0-0ubuntu8             4.0-0ubuntu8            4.0-0ubuntu8             ​http://www.linux-foundation.org/en/LSB
mime-support       3.48-1ubuntu1            3.48-1ubuntu1            3.48-1ubuntu2           3.48-1ubuntu1
netbase            4.35ubuntu3              4.42                     4.35ubuntu3             4.35ubuntu3
netcat-openbsd     1.89-3ubuntu2            1.89-4                   1.89-3ubuntu2           1.89-3ubuntu2
ntpdate            1:4.2.4p8+dfsg-1ubuntu2  1:4.2.6.p2+dfsg-1        1:4.2.4p8+dfsg-1ubuntu6 1:4.2.4p8+dfsg-1ubuntu2  ​http://support.ntp.org/
python             2.6.5-0ubuntu1           2.6.5-13                 2.6.5-13ubuntu1         2.6.5-0ubuntu1           ​http://www.python.org/
python-central     0.6.15ubuntu1            0.6.16                   0.6.15ubuntu1           0.6.15ubuntu1
python2.6          2.6.5-1ubuntu6           2.6.6-2                  2.6.6-1ubuntu1          2.6.5-1ubuntu6
readline-common    6.1-1                    6.1-3                    6.1-3                   6.1-1
rsyslog            4.2.0-2ubuntu8           4.6.4-1                  4.2.0-2ubuntu8          4.2.0-2ubuntu8           ​http://www.rsyslog.com/
sudo               1.7.2p1-1ubuntu5.1       1.7.2p7-1                1.7.2p7-1ubuntu1        1.7.2p1-1ubuntu5.1
ubuntu-keyring     2010.11.09               2010.11.09               2010.+05.27.1           2010.11.09
ubuntu-minimal     1.197                    1.197                    1.204                   1.197
ucf                3.0025                   3.0025                   3.0025                  3.0025
ureadahead         0.100.0-4.1.2            0.100.0-4.1.2            0.100.0-7               0.100.0-4.1.2
                                            2:
vim-common         2:7.2.330-1ubuntu3       7.3.000+hg~ee53a39d5896- 2:7.2.330-1ubuntu3      2:7.2.330-1ubuntu3       ​http://www.vim.org/
                                            1
                                            2:
vim-tiny           2:7.2.330-1ubuntu3       7.3.000+hg~ee53a39d5896- 2:7.2.330-1ubuntu3      2:7.2.330-1ubuntu3       ​http://www.vim.org/
                                            1
whiptail           0.52.10-5ubuntu1         0.52.11-1                0.52.11-1               0.52.10-5ubuntu1         ​https://fedorahosted.org/newt/
xkb-data           1.8-1ubuntu8             1.8-1ubuntu8             1.8-1ubuntu8            1.8-1ubuntu8             ​http://www.freedesktop.org/Software/XKeyboardConfig

**Wacana dan Diskusi**
  * Bibit Paket Desktop Maverick di sini ​http://people.canonical.com/
      ~ubuntu-archive/seeds/ubuntu.maverick/desktop


## Daftar Paket Impor BlankOn 7

Format penulisannya : name_paket_binary (nama_pengelola); name_paket_binary bisa dilihat di debian/control (apabila ada beberapa cukup tulis salah satu
saja); sedangkan nama_pengelola adalah nama login di ​http://irgsh.blankonlinux.or.id!!!

Paket Impor ini dapat juga Anda lihat statusnya di ​http://irgsh.blankonlinux.or.id/status/

**Daftar Paket Impor**
    * apt (simon-liling)
    * apt-setup-udeb (muhammad-takdir)
    * base-files (muhammad-takdir)
    * base-installer (muhammad-takdir)
    * blankfox (muhammad-takdir)
    * casper (muhammad-takdir)
    * cdrom-checker (muhammad-takdir)
    * cdrom-detect (muhammad-takdir)
    * console-setup (muhammad-takdir)
    * debootstrap (muhammad-takdir)
    * fontconfig (muhammad-takdir)
    * germinate (muhammad-takdir)
    * gdm (muhammad-takdir)
    * gnome-control-center (muhammad-takdir)
    * gnome-desktop (muhammad-takdir)
    * gnome-gvs (muhammad-takdir)
    * gnome-icon-theme (muhammad-takdir)
    * gnome-media (muhammad-takdir)
    * gnome-panel (muhammad-takdir)
    * gnome-session (muhammad-takdir)
    * human-icon-theme (acepby)
    * iso-codes (muhammad-takdir)
    * language-selector (muhammad-takdir)
    * libdvdcss (aftian)
    * libcanberra (muhammad-takdir)
    * localechooser (aftian)
    * main-menu (muhammad-takdir)
    * netcfg (muhammad-takdir)
    * partman-auto (muhammad-takdir)
    * pidgin (muhammad-takdir)
    * pulseaudio (muhammad-takdir)
    * python-apt (muhammad-takdir)
    * tasksel (muhammad-takdir)
    * tzsetup (muhammad-takdir)
    * ubiquity (aftian)
    * user-setup (muhammad-takdir)
    * yelp (yoza)
    * chromium-browser (muhammad-takdir)
    * inkscape (muhammad-takdir)
    * exaile (yoza)
    * pidgin-otr (muhammad-takdir)
    * ttf-freefont (muhammad-takdir)
    * usb-creator (muhammad-takdir)
    * debconf (yoza)
    * locales (yoza)
    * glib2.0 (yoza)
    * dpkg (simon-liling)
    * gconf-editor (simon-liling)
    * gparted (simon-liling)
    * update-manager (simon-liling)
    * gnome-power-manager (simon-liling)
    * gnome-bluetooth (simon-liling)
Daftar paket tentatif :

## Daftar Paket Khas BlankOn 7
    * blankon-artwork (muhammad-takdir)
    * bakso-theme (muhammad-takdir)
    * blankon-contextual-desktop (muhammad-takdir)
    * blankon-contextual-desktop-default-theme (muhammad-takdir)
    * blankon-default-font-configuration (muhammad-takdir)
    * blankon-docs (muhammad-takdir)
    * blankon-example-content (yoza)
    * blankon-gimp-brushes (yoza)
    * blankon-meta (muhammad-takdir)
    * blankon-mozilla-firefox-locale-all (muhammad-takdir)
    * blankon-sounds
    * blankon-tweak (muhammad-takdir)
    * blankon-ubiquity-artwork
    * blankon-branding
    * bubur-theme (muhammad-takdir)
    * daluang (muhammad-takdir)
    * docang-icon-theme (muhammad-takdir)
    * docang-theme (muhammad-takdir)
    * ecofont (muhammad-takdir)
    * germinate-blankon
    * gfxboot-blankon (muhammad-takdir)
    * gkamus
    * gtk2-engines-rawon (muhammad-takdir)
    * gulali-hitam-themes (muhammad-takdir)
    * idic (muhammad-takdir)
    * indomy-theme
    * indonesian-fonts (muhammad-takdir)
    * londe-icon-theme (muhammad-takdir)
    * jenggo-theme
    * meuligoe-gdm-themes
    * meuligoe-session-splashes
    * monde-icon-theme
    * multimedia-blankon (muhammad-takdir)
    * pattimura-gdm-theme (muhammad-takdir)
    * nasgor-theme (muhammad-takdir)
    * pecel-theme
    * tangkar-theme (muhammad-takdir)
    * usplash-theme-blankon
    * zekr-quran-translation-indonesian
    * zekr-quran-recitation-online-*
    * zekr-quran-recitation-offline-Muhammad-Siddeeq-al-Minshawi
    * zekr-quran-recitation-offline-Mishari-Bin-Rashid-Al-Afasy
    * hijra (aftian)
    * thwab
    * praytimes (aftian)
    * webstrict
    * monajat (aftian)
    * Qur'an in openoffice.org-qioo



---
 



