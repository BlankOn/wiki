## Bibit Paket - blacklist

# blacklist: gnome1
# We want to avoid shipping GNOME 1.x components if possible
gconf
libxml
libcapplet
gnome-bin
gnome-libs
# blacklist: misc
# Packages which are pulled in incidentally (typically by build-dependencies)
# and could be trivially replaced with something that we ship
# java-common build-depends
#dpsyco
# various build-depends, pulls in lua, consider standarizing html->text
#elinks
# could be removed by getting rid of CHILL, which nothing uses
gcc-2.95
# tcl8.3 and tcl8.4 is more than enough, consider dropping tcl8.3 too
tcl8.0
# no one actually uses this anymore
#zephyr
# mdz, 2004-06-15: only pulled in by vim
ruby1.8
# blacklist: security
#
# Packages which are not supportable from a security standpoint
#
## mdz: Packages noticed in 2004-06-14 review of germinate output
uw-imap
# We shall only ship current kernel-source
kernel-source-2.4.22
kernel-source-2.4.23
kernel-source-2.4.24
kernel-source-2.4.25
kernel-source-2.2.25
# results in lots of unwanted setuid-ness; modern stuff uses X or fb
svgalib
# we ship server software with TLS built-in
stunnel
# mdz, 2004-06-15
apache
## Packages which haven't shown up yet; make sure they don't sneak in
# mdz, 2004-06-14: many, many bugs and unmaintained (both debian and upstream)
metamail
# mdz, 2004-06-14: lots of unsafe string handling, CVE-2002-0789,
# CAN-2003-0436, CAN-2003-0437
mnogosearch
# mdz, 2004-06-14: requires no explanation
wu-ftpd
# mdz, 2004-06-14: CAN-2003-0781, unmaintained upstream, Debian#210444
ecartis
# mdz, 2004-06-14: lots of DoS and other badness, CAN-2003-0946, CAN-2004-0270,
# debian#209084
clamav
# mdz, 2004-06-14: upstream deliberately obfuscates vulnerabilities
# mdz, 2004-06-20: CAN-2002-0757, CAN-2003-0101, SNS 74, SNS 75
webmin

Last modified on 06/16/2008 10:53:59 AM
 
---
 
