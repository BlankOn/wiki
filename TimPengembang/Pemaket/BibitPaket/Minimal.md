## Bibit Paket - Minimal

Task-Section: user
Task-Relevance: 9
Task-Description: Minimal base system
Task-Extended-Description: This task installs the core of an Ubuntu-based
system.
Task-Test-new-install: install skip
Note that some packages that form the core of an Ubuntu-based system are in the
required seed, from which this seed inherits. The minimal seed describes those
packages at Priority: important.

## Hardware and Architecture Support
### Generic
 * alsa-base # needed for proper hardware detection (hotplug/blacklist.d,
modprobe.d)
 * alsa-utils           # basic audio support and mixer level handling
 * pcmciautils          # PCMCIA support for >= 2.6.13-rc1 kernels

### i386, i686
 * libc6-i686 [i386]

## Comfortable Unix System
Programs and packages necessary for both the proper functionality of the system
and that any user would expect to find on a modern Unix-like system.
 * adduser
 * apt
 * aptitude          # better text-mode package manager
 * apt-utils         # apt-extracttemplates is required for debconf
preconfiguration
 * bzip2
 * console-setup     # https://launchpad.net/distros/ubuntu/+spec/sane-
installer-keyboard
 * console-tools
 * eject             # very popular, useful, small
 * gettext-base
 * gnupg             # introduce security from the very base
 * initramfs-tools   # needed for the Ubuntu kernel
 * less
 * libfribidi0       # right-to-left text support in newt
 * lsb-release
 * module-init-tools # required for kernel 2.6
 * netbase
 * pciutils
 * sudo              # LaMontJones
 * sysklogd
 * tasksel           # used by installer to install desktop etc.
 * udev
 * usbutils
 * util-linux-locales
 * vim-tiny

## Networking
These provide various networking services, all should be configured in a
client-only state with the server de-activated unless the user requires it.
 * dhcp3-client   # LaMontJones
 * iproute
 * ifupdown
 * net-tools
 * ntpdate        # FabioMassimoDiNitto
 * wireless-tools
 * wpasupplicant  # ScottJamesRemnant
 * ethtool
 * iputils-ping
 * mii-diag
 * netcat             # FabioMassimoDiNitto

### Meta
 * ubuntu-minimal     # Ubuntu-specific bits we want on every Ubuntu system
 * ubuntu-keyring     # for authenticated package downloads

### Other 
 * python             # upstream doesn't want python-minimal shipped alone

Last modified on 06/16/2008 11:03:41 AM
 
---
 
