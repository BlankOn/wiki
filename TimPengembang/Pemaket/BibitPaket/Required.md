# BibitPaket - Required

This seed describes the packages at Priority: required. These packages are
installed by the first pass of debootstrap, which extracts them (dpkg -x,
without running maintainer scripts) in order to construct a basic environment
into which it can chroot and install them properly.
A system containing only required packages is not a supported Ubuntu system;
you need to install at least the packages from minimal as well.

## UNIX 
## Essential 
These are packages which have "Essential: yes" in their control file.
 * base-files
 * base-passwd    # ColinWatson
 * bash
 * bsdutils       # LaMontJones
 * coreutils
 * debianutils
 * diff
 * dpkg
 * e2fsprogs
 * findutils
 * grep
 * gzip
 * hostname
 * login
 * mktemp
 * mount          # LaMontJones
 * ncurses-base
 * ncurses-bin
 * perl-base
 * python-minimal
 * sed
 * tar            # LaMontJones
 * util-linux     # LaMontJones
Our init system:
 * upstart
 * upstart-compat-sysv
 * upstart-logd
 * startup-tasks
 * system-services
In some sense, debconf isn't truly required, but it makes our life a lot easier
to have it installed in the first pass.
 * debconf
Other packages necessary to get started:
 * dash               # Much faster default shell
 * locales
 * makedev
 * mawk
 * passwd
 * procps
 * tzdata

KategoriBlankOn KategoriPemaket
Last modified on 06/16/2008 11:06:17 AM
    
 
 
 
 
 
---
 
