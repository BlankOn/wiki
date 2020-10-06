## Bibit Paket - Ship

## Kernel
 * linux [i386]
## Desktop
A small first step to comprehensive certification. Unfortunately, lsb
includes lsb-desktop, which pulls in both gtk and qt, so we pick individual
modules instead.
 * lsb-core [i386]
 * lsb-cxx [i386]
 * lsb-graphics [i386]
## Server
 * ssh
 * lilo [i386]   # MattZimmerman wants this for server admins; needed for LVM
installs
 * nfs-kernel-server   # need an NFS server
 * apache2-mpm-worker [i386]  # ThomMay; for simple file/web serving -> add
zeroconf and we have swish mac os x style :-)
 * samba  [i386] # for Windows filesharing and integration
 * nis                 # allows Kickstart to configure NIS
 * ltsp-server-standalone [i386] # for LTSP-on-install
 * ltsp-client [i386]            # for LTSP-on-install
 * ldm [i386] # seeded because its not a hard dependency of ltsp-client anymore
## Filesystems
 * xfsprogs
 * jfsutils
 * lvm2
 * mdadm
 * dmsetup
## Networking
 * mailx
 * vlan                   # userland tools to config 8021q support
## Development
 * build-essential
 * fakeroot
 * devscripts          # Debian package development
 * bzr                 # Obvious
## Common UNIX stuff
 * nfs-common		  # allows people to access NFS filesystems
 * vim                    # vim-tiny is in minimal; vim includes syntax
highlighting, help files, etc.
## For language support in the installer
 * console-terminus
 * unifont
## Hardware & Network Access
 * pptp-linux             # client for Microsoft-compatible VPN's, needed for
some ISPs
 * sl-modem-daemon	# needed for some Winmodems (see OutoftheboxWinmodem)
 * eagle-usb-utils        # needed for some ADSL modems
 * bpalogin
 * ndiswrapper-utils [i386]
 * ndiswrapper-utils-1.9 [i386]
 * nvidia-glx    # nvidia drivers, for multiseat, but also easy access
 * ipppd
 * isdnutils-xtools
 * capiutils
 * pppdcapiplugin
 * linux-wlan-ng
 * avm-fritz-firmware
 * drdsl
 * libatm1	# suggested by ppp for PPP-over-ATM
 * setserial	# needed by folks with nonstandard serial ports
 * mouseemu	# needed on Macs with single-button mice
## Common language packs
 # must have
 * Languages: en
 * language-pack-${Languages}
 * language-pack-gnome-${Languages}
 * language-support-${Languages} [i386]
 * Languages: id
 * language-pack-${Languages} [i386]
 * language-pack-gnome-${Languages} [i386]
## Installer
 * oem-config-gtk
## Transitional packages
 * openoffice.org-gtk-gnome [i386]
 * openoffice.org-l10n-en-us	# mvo: make dapper->edgy cdrom upgrades happy
## Blacklist
libavcodec cannot be shipped on CDs (c.f. Ubuntu technical board resolution
2007-01-02).
 * !libavcodec*

Last modified on 06/16/2008 11:07:56 AM
 
---
 
