## Bibit Paket - Supported

# Hardware
 * i855-crt        # crack to enable video out on i855 chipsets
 * mdetect         # formerly used by X for mouse autodetection
 * irda-utils
 * wacom-tools
 * palo            # hppa boot loader, but needed on other architectures to
build hppa CD images
 * ps3-kboot       # boot loader for Sony PlayStation 3
## Bluetooth
 * bluez-gnome	# To do Bluetooth pairing
## Filesystems
 * xfsdump # only useful when machine is setup and working, and only for xfs
people
 * cloop-utils # for LiveCD
 * squashfs-tools
 * reiser4progs
 * hfsplus
## Cluster
 * ocfs2console
 * system-config-cluster
# Servers and Daemons
Database:
 * mdbtools				# OOo2 supports the JET format
 * mdbtools-gmdb
Email:
 * fetchmail
 * procmail
Must also consider webmail and so on...
Other:
 * racoon
 * sysvinit  # ScottJamesRemnant retain support for now
 * openprinting-ppds-extra          # Less common printer drivers we don't want
in desktop
Printing:
 * m2300w
 * splix
 * pxljr
Utilities:
 * analog                 # essential for any web server, possible candidate
for desktop integration
 * graphviz
 * logcheck		  # great security tool for any server
 * logcheck-database	  # useful for above
# Network
 * irssi
Security:
 * nessus                 # client for nessus security testing and monitoring
framework
Download:
 * bittorrent             # rapid p2p download, for efficient large file
distribution, perhaps for desktop
 * jigit                  # specialised Debian/Ubuntu CD image download
# Desktop
 * openoffice.org-gcj
 * openoffice.org-filter-binfilter
 * libuno-cil
 * openoffice.org-style-andromeda
 * openoffice.org-style-default
 * openoffice.org-style-industrial
 * openoffice.org-style-tango
 * gnome-accessibility-themes-extras
# Standards
 * lsb
# Development
## Development Tools
 * bicyclerepair          # python refactoring tool for vim & emacs
 * bison
 * debconf-english   # for minimal buildd chroots, without i18n cruft
 * flex
 * patchutils
 * gdb
 * valgrind
 * autoconf
 * automake
 * autotools-dev
 * libtool
 * ccache            # C/C++ development, package development
 * kernel-package
 * pychecker
 * exuberant-ctags   # ColinWatson
 * ant
 * linux32		# without it, biarch buildds can go wonky
 * ocaml-native-compilers  # we support the source package anyway
 * pymacs                 # makes bicyclerepair work with emacs
 * bootchart         # boot speed profiling
 * indent
 * g++-3.3		# compiling and linking against older abis
 * ecj-bootstrap-gcj
 * autopkgtest
 * cmake
 * apport-retrace
 * apport-cli
 * libservlet2.4-java-gcj # source needs to be in main anyway
 * liblog4j1.2-java-gcj # source needs to be in main anyway
## Mono
 * mono-devel
 * mono-jay
 * mono-classlib-1.0
 * libmono-sqlite1.0-cil
## Revision Control
 * subversion
 * subversion-tools
 * python2.4-subversion
 * git-core
 * gitk
 * bzrtools
 * python2.4-paramiko	# for bzr sftp support
 * cvs
## Package Maintainance
 * debhelper         # ColinWatson
 * dh-make
 * dupload           # ColinWatson
 * linda             # python-based replacement for lintian
 * lintian
 * pbuilder          # ColinWatson
 * apt-listchanges
 * apt-transport-https # sanctioned by MichaelVogt
 * dput
 * pkgstriptranslations # for removing gettext data on the buildds
 * pkg-create-dbgsym # automatic creation of debug symbols
 * hello
 * hello-debhelper
## Seed Management
 * germinate         # quis custodiet ipsos custodes?
# Shells
 * zsh
# Desktop
 * epiphany-browser
 * epiphany-extensions
 * xchat-gnome
 * mozilla-thunderbird # world favourite mail client
 * mozilla-thunderbird-enigmail # gpg integration for thunderbird
 * mozilla-thunderbird-offline  # offline use of thunderbird
 * mozilla-thunderbird-typeaheadfind # neat usability enhancement for
thunderbird
 * mozilla-thunderbird-inspector     # used for extension development and
debugging
 * nautilus-gksu
 * festival
Other:
 * devhelp
 * dia-gnome           # useful but a bit specialist
 * finger
 * gftp-gtk
 * glade-gnome-3
 * memprof
 * pan
 * workrave            # RSI-avoidance
 * xnest
 * xrestop
 * unclutter           # super useful for anti-mouse freaks
 * emacs               # won't fit on CDs
 * emacs-el
 * emacs-nox
 * inkscape            # SVG drawing application
 * screem                  # MRS, our default html editor
 * vim-gnome
 * vim-tiny
 * vorbis-tools
 * vorbisgain
 * enscript
 * emacs-goodies-el
 * bbdb
 * calc
 * gnus
 * auctex
 * lbdb
 * dictd
 * dict-gcide
 * dict-moby-thesaurus
 * dict-foldoc
 * dict-jargon
 * dict-vera
 * kino
 * sabayon            # desktop profile management
 * tomboy							# move from desktop  ()
 * liferea
 * gkbd-capplet      # we need to support the source anyway
 * dcraw 		   			# used by f-spot to display RAW images / move from desktop
 * f-spot						# move from desktop ()
 * landscape-client	# move from desktop ()
 * example-content	# move from desktop () & replace blankon-content
 * ubufox						# move from desktop () ubuntu firefox tweaks
Themes:
 * ubuntu-artwork
 * ubuntu-sounds
GNOME Office:
 * abiword-gnome
 * abiword-help
 * abiword-plugins
 * abiword-plugins-gnome
 * gnumeric
 * gnumeric-plugins-extra
 * planner
Ubuntu artwork:
 * ubuntu-calendar
 * ubuntu-calendar-january
 * ubuntu-calendar-february
 * ubuntu-calendar-march
 * ubuntu-calendar-april
 * ubuntu-calendar-may
 * ubuntu-calendar-june
 * ubuntu-calendar-july
 * ubuntu-calendar-august
 * ubuntu-calendar-september
 * ubuntu-calendar-october
 * ubuntu-calendar-november
 * ubuntu-calendar-december
# Console Tools
 * freecdb
 * dict
 * wdiff
 * xml-twig-tools  # we need libxml-twig-perl as build dep anyway, so we can as
well support this binary
# Libraries
 * libcrypt-blowfish-perl
 * libdate-manip-perl
 * libnet-ldap-perl
 * libchart-perl
 * libgd-graph-perl
 * libtemplate-perl
 * libfile-rsyncp-perl
 * libnss-db
 * tdsodbc
 * tk8.3-dev
 * libsdl1.2debian-all
 * libsdl1.2debian-alsa
 * libsdl1.2debian-esd
 * libsdl1.2debian-oss
 * libgl1-mesa-swx11-i686
# System Administration Tools
 * attr                 # will move to base if we go to selinux
 * quota
 * backuppc             # RobertCollins
 * debian-goodies
 * whois                # FabioMassimoDiNitto
 * minicom              # useful for serial access to anything
 * cu                   # super-basic serial access
 * john                 # detects weak passwords, might be needed in desktop
 * libpam-cracklib      # enables weak password checking during password
change, should it be in desktop?
 * chkrootkit           # forensic detection of rootkit
 * xinetd               # JamesTroup, from hoglet
 * system-config-kickstart # Kickstart configuration GUI
 * mknbi                # for creating etherboot images for LTSP
# Documentation
We need a consistent policy for -doc. At the least, any -doc package produced
by a source package that also generates a binary package in one of our seed
lists should absolutely go into supported.
 * doc-linux-html          # ColinWatson; basic HOWTOs and stuff from LDP
 * manpages-dev            # ColinWatson
 * ubuntu-faqguide
 * monodoc
 * monodoc-browser
 * diveintopython-zh
 * autoconf-doc
 * automake1.8-doc
 * automake1.9-doc
 * automake1.10-doc
 * emacs21-common-non-dfsg # Non-DFSG docs
 * packaging-guide
 * %texlive-doc
# Rescued from Extra
 * Extra-Include: *-dbg *-debug *-dev *-doc
... and some miscellaneous exclusions for things we don't want to drag in
automatically (note that Extra-Exclude *only* prevents packages from being
included due to matching Extra-Include patterns, and has no other effect):
 * Extra-Exclude: lib*stdc++*   # we want to consider these individually
 * Extra-Exclude: *gfortran* gpc*-doc libgnat*-dev libmudflap* gnat-doc
 * Extra-Exclude: libavformat-dev libpostproc-dev
 * Extra-Exclude: libgdchart-gd2-xpm-dev
 * Extra-Exclude: libgdome2-ocaml-dev
 * Extra-Exclude: libmpich-mpd1.0-dev libmpich-shmem1.0-dev
 * Extra-Exclude: libnetpbm9-dev
 * Extra-Exclude: libavahi-compat-howl-dev
 * Extra-Exclude: libboost-*-dev
 * Extra-Exclude: libcairo-directfb2-dev
 * Extra-Exclude: libcdio-*-dev libiso9660-dev
 * Extra-Exclude: libxaw6*		# built from the same source as libxaw7*
 * Extra-Exclude: nvidia-glx-legacy-dev # nvidia-glx-legacy is unsupportable
 * Extra-Exclude: python-qt3-gl-dbg # We don't want python-qt3-gl in main
Transitional packages:
 * Extra-Exclude: atm-dev
 * Extra-Exclude: mozilla-firefox-dev
Exclude some KDE-specific pieces:
 * Extra-Exclude: libdbus-qt-1-dev
 * Extra-Exclude: libdcop3-java-dev
 * Extra-Exclude: libindex0-dev
 * Extra-Exclude: libpoppler-qt-dev
 * Extra-Exclude: libqt4-debug-dev
 * Extra-Exclude: libsmokekde-dev
## Development
 * python-mode
 * libc6-prof [i386]
 * g++-4.2-multilib [i386]
 * gcc-4.2-locales
 * gcc-4.2-source
 * gfortran-4.2
 * gobjc-4.2
 * libstdc++6-4.1-dbg
 * libstdc++6-4.2-dbg
 * openoffice.org-qa-tools
 * openoffice.org-qa-api-tests
 * openoffice.org-officebean
 * openoffice.org-help-br
 * openoffice.org-l10n-br
 * libxsltc-java
## Documentation
 * diveintopython						# move from desktop ()
 * ubuntu-docs							# move from desktop ()
 * gimp-manual
 * gimp-help-en
 * gimp-help-de
 * gimp-help-sv
 * gimp-help-fr
 * gfortran-doc
 * gfortran-4.2-doc
 * doc-linux-text
 * gimp-helpbrowser
 * exim4-doc-html
 * libstdc++6-4.1-doc
 * libstdc++6-4.2-doc
These *-doc packages are in separate source packages, so Extra-Includes won't
catch them and they need to be listed explicitly.
 * automake1.8-doc
 * automake1.9-doc
 * bison-doc
 * diff-doc
 * gawk-doc
 * gdb-doc
 * glibc-doc-reference
 * gnupg-doc
 * make-doc
 * python-gtk2-doc
 * python-gtk2-tutorial
 * scribus-doc
 * tar-doc
## System Administration
 * fbset
 * libcap-bin
 * libpam-opie
 * opie-client
 * opie-server
 * sasl2-bin
 * libsasl2-modules-sql
 * autofs
 * awstats
 * acct
 * authbind                     # BIGGER SECURITAH REVIEW
 * siege
 * bonnie++
## Multimedia
 * flac
 * esound-clients
 * eyed3			# we need to support the source anyway, harmless tool
## Kernel
 * /^linux-(backports-modules-|headers-)?(386|686|generic|k7|server).*/
 * linux-doc
 * linux-source
 * linux-kernel-devel
 * /^linux-image-debug-.*(?<!lowlatency)$/
 * vmware-*-kernel-modules
## Transitional from dapper
 * linux-image-686
 * linux-image-k7
# Database
 * libqt3c102-mt-mysql
 * libqt3c102-mt-psql
# Localisation
 * aspell-de
 * aspell-de-alt
 * gettext-el
 * myspell-de-de-oldspell # non-default alternative for language-support-de
 * myspell-fr # myspell-fr-gut preferred
 * ttf-alee
 * ttf-unfonts
 * ttf-arphic-bkai00mp
 * ttf-arphic-bsmi00lp
 * ttf-arphic-gbsn00lp
 * ttf-arphic-gkai00mp
 * nabi
 * imhangul
 * culmus
 * latex-ucs # UTF-8 support for LaTeX
 * latex-ucs-uninames
 * latex-ucs-contrib
 * %texlive-lang
 * openoffice.org-help-en-gb
 * openoffice.org-l10n-en-gb
 * openoffice.org-l10n-in	# dependency package for Indian locales
 * openoffice.org-l10n-za	# dependency package for South African locales
# Transitional packages
 # renamed to openprinting-* during Feisty
 * linuxprinting.org-ppds
 * linuxprinting.org-ppds-extra
# Miscellaneous
 * miscfiles
# Germinate workarounds
 * mono-jit # germinate likes pnet better, but we want mono-mcs -mdz
# Not quite ready for the default install yet
# Language packs
 * /^language-pack-[^-]+$/
 * /^language-pack-gnome-[^-]+$/
 * /^language-support-[^-]+$/
 * openoffice.org-l10n-nr      # does not match a valid locale, so no l-
support-*
# Installer
 # Used for netboot installations
 * Kernel-Version: 2.6.20-15-386
 * /^.*-firmware-.*-386-di/ [i386]
 * /^.*-modules-.*-386-di/ [i386]
 * debian-installer # also has side-effect of pulling in installer image build
system
 * gfxboot
 * gfxboot-theme-ubuntu
 * cdebconf # useful for testing, but not used by default yet
 * casper # needed by live CD build system
 * livecd-rootfs # live CD build script
 * installation-guide-i386 [i386]
# LTSP
 * ltsp-server
 * ltsp-server-standalone
 * ltsp-client
# OMG!
 * firefox-themes-ubuntu

KategoriBlankOn KategoriPemaket
Last modified on 06/16/2008 11:10:38 AM
    
 
 
 
 
 
---
 
