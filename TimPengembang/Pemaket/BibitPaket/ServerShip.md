# Bibit Paket - ServerShip

## Kernel 
We seed both linux-* and linux-image-* so that it's easier to build CD
images without the restricted component. The linux-* kernels include
restricted modules.
 * Kernel-Stem: linux linux-image
## i386
 * ${Kernel-Stem}-server [i386]
 * ${Kernel-Stem}-server-bigiron [i386]
 * linux-headers-server [i386]
 * linux-headers-server-bigiron [i386]
## From Ship
 * ssh
 * lsb-core
 * lsb-cxx
 * ntp
 * nis
 * mailx
 * mutt
 * build-essential
 * fakeroot
 * devscripts
 * setserial
## Filesystems
 * xfsprogs
 * jfsutils
 * lvm2
 * mdadm
 * dmsetup
## For language support in the installer
 * console-terminus
 * unifont
# Cluster
 * redhat-cluster-suite
 * ocfs2-tools
 * libaio1
 * libaio-dev
 * ipvsadm
 * keepalived
 * multipath-tools
# Servers and Daemons
Samba:
 * %samba
Database:
 * %db4.2
 * %db4.3
 * %mysql-dfsg-5.0
 * %postgresql-8.2
Proxy:
 * squid # RobertCollins
LDAP:
 * slapd
 * ldap-utils
Web:
 * %apache2
 * libapache2-mod-auth-mysql # FabioMassimoDiNitto
 * libapache2-mod-auth-pgsql # FabioMassimoDiNitto
 * libapache2-mod-macro      # FabioMassimoDiNitto
 * libapache2-mod-perl2 # python is in supported
 * libapache2-mod-python        #ThomMay
 * libapache2-mod-python-doc    #ThomMay
 * libapache2-mod-auth-pam       # FabioMassimoDiNitto
 * libapache2-mod-auth-plain     # FabioMassimoDiNitto
 * libapache2-mod-auth-sys-group # FabioMassimoDiNitto
 * libapache2-mod-security       # FabioMassimoDiNitto
 * zope3-sandbox
 * elinks
PHP:
 * %php5
Email:
 * %dovecot                   # ThomMay
 * %exim4
 * %postfix
Must also consider webmail and so on...
FTP/TFTP:
 * vsftpd # a secure ftpd
 * tftpd-hpa # The one from OpenBSD which supports PXE
 * tftp-hpa # client
Other:
 * dhcp3-server
 * snmp
 * snmpd
 * sensord
 * lm-sensors
 * openbsd-inetd
 * nbd-server
Application Servers:
 * python-moinmoin        # moin (>= 1.5)
 * mailman
RCS:
 * %subversion
 * cvs
 * git-core
 * bzr
Utilities:
 * analog                 # essential for any web server, possible candidate
for desktop integration
 * graphviz
## Network
 * nmap                   # network diagnostics
 * dnstracer              # dns network diagnostics
 * iptraf                 # sysadmin's toy, may be a candidate for removal
 * traceroute             # we have iputils-tracepath in base, this is only for
real traceroute lovers
 * pptpd                  # server that allows setup of Microsoft-compatible
VPN
 * ifenslave-2.6          # interface bonding/trunking/etherchannel
 * ipsec-tools            # IPsec configuration
 * vlan                   # userland tools to config 8021q support
 * bridge-utils           # userland tools to config kernel bridging feature
IPv6 tools:
 * freenet6               # FabioMassimoDiNitto
 * radvd                  # FabioMassimoDiNitto
 * quagga                 # RobertCollins
Firewall:
 * shorewall
Security:
 * nessus-plugins         # plugins for the extension of nessus security
monitoring framework
 * nessusd                # server to coordinate nessus network security
monitoring
 * cricket                # JamesTroup, from Hoglet
 * checksecurity          # JamesTroup, from Hoglet
 * aide                   # JamesTroup, from Hoglet
Download:
 * bittornado             # used on the servers.
## Shells
 * zsh
## System Administration Tools
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
 * libcap-bin
 * libpam-opie
 * opie-client
 * opie-server
 * sasl2-bin
 * autofs
 * awstats
 * acct
 * authbind                     # BIGGER SECURITAH REVIEW
 * siege
 * bonnie++
 * smartmontools   # hard disk diagnostics
## Documentation
 * ubuntu-serverguide
## Miscellaneous
 * miscfiles
 * lilo
kill if we run out of space
## LTSP
 * ltsp-server
 * ltsp-server-standalone
= From desktop =
 * bc
 * screen
 * lftp
 * slocate              # tool to index user files
 * zip
 * unzip                # also used for .zip support in file-roller
 * cupsys                       # our preferred printer management
infrastructure
 * cupsys-bsd                   # gives us lpc, lpq, lpr, lprm
 * cupsys-client                # gives us cancel, cupstestppd, lp, lpoptions,
lppasswd, lpstat, cupsaddsmb, accept, lpadmin, lpinfo, lpmove
 * foomatic-db-engine           # integrate the foomatic printer driver engine
 * foomatic-db                  # the foomatic printer driver database
 * foomatic-filters             # converter from postscript to printer-specific
formats
 * foomatic-db-hpijs            # printer drivers from the hp inkjet project
 * openprinting-ppds
 * cupsys-driver-gutenprint     # a ton of cupsys ppds, for real comprehensive
printer support
 * pnm2ppa                      # several ppds require this
 * ghostscript                  # some ppds require this
 * hplip                        # support for HP all-in-one printers
 * libxp6 # required for some third party apps. See #15739
## Blacklist
libavcodec cannot be shipped on CDs (c.f. Ubuntu technical board resolution
2007-01-02).
 * !libavcodec*

Last modified on 06/16/2008 10:53:07 AM
 
---
 
