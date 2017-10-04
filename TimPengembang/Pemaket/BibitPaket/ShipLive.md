## Bibit Paket - ShipLive

The ship-live seed will be added to the live CD as an ordinary package
archive. Here belongs anything that somebody might need to install after
installing the contents of the live CD in order to get online and fetch more
packages.
## Development
These packages are needed in order to build Ubuntu packages.
 * build-essential
 * fakeroot
## Hardware & Network Access
 * pptp-linux             # client for Microsoft-compatible VPN's, needed for
some ISPs
 * sl-modem-daemon	# needed for some Winmodems (see OutoftheboxWinmodem)
 * eagle-usb-utils        # needed for some ADSL modems
 * bpalogin
 * ndiswrapper-utils [i386]
 * ndiswrapper-utils-1.9 [i386]
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
## Installer
 * oem-config-gtk
## Blacklist
libavcodec cannot be shipped on CDs (c.f. Ubuntu technical board resolution
2007-01-02).
 * !libavcodec*
KategoriBlankOn KategoriPemaket
Last modified on 06/16/2008 11:08:29 AM

---
 
