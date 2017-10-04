## Bibit Paket - Standard

Task-Section: user
Task-Relevance: 8
Task-Description: Standard system
Task-Extended-Description: This task installs a reasonably small character-mode
system.
Task-Test-new-install: install skip

## UNIX
### Comfortable Unix System
 * at
 * cpio
 * cron
 * dselect           # old-school package management (maybe move further out?)
 * ed
 * fdutils           # needed for debian kernel
 * file
 * hdparm            # speed up CD-ROM and disk access, used by installer
 * info
 * logrotate
 * man-db            # ColinWatson
 * manpages          # ColinWatson
 * mime-support      # establishes framework for dealing with MIME
 * nano              # we need a text editor less scary than vi
 * parted
 * psmisc            # utilities for /proc such as killall, pstree, fuser
 * time
### Filesystems
These are commonly used filesystem support packages, here because someone
setting up a server would begin with standard, configure filesystems and
network and then add other services. NFS is explicitly not here, because it
brings in nasties like portmap, and because the network will need to be running
before it can be used, so we may as well put that in Supported.
 * reiserfsprogs
 * dosfstools
### Networking
These provide various networking services, all should be configured in a
client-only state with the server de-activated unless the user requires it.
 * dnsutils       # LaMontJones
 * ftp
 * iptables       # FabioMassimoDiNitto
 * telnet
 * ppp
 * pppconfig
 * pppoeconf
 * (openssh-client) # ColinWatson
 * rsync          # would be just client but they are the same binary
apparently
 * w3m            # we need some text-based html presenter
 * wget           # FabioMassimoDiNitto
## Debugging and Diagnostics
A base system should be a good platform for diagnostics about the hardware and
network. In other words, after installing just the Base system one should have
everything one might need to get the rest of the system up and running the way
you want it.
These are used for debugging problems or examining the system.
 * memtest86+
 * strace
 * dmidecode
 * lshw
 * lsof
 * ltrace
## Helpful Tools
 * inputattach # needed for serial mice
 * (command-not-found)
 * (update-manager-core)  # needed for server based release upgrades
 * (apparmor-utils) # controll AppArmor policies (pulls in policy parser as
well)
### Network
 * iputils-arping     # would have made my life easier at debconf
 * iputils-tracepath  # more secure sort of traceroute, will put compatibility
symblink in for traceroute users
 * (mtr-tiny)           # LaMontJones
 * tcpdump
## Other
 * popularity-contest
 * ubuntu-standard # metapackage for everything here

Last modified on 06/16/2008 11:09:18 AM
 
---
 
