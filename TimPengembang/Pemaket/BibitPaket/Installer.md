## Bibit Paket - Installer

This list was originally constructed based on a [http://people.debian.org/
~cjwatson/d-i/ list of packages in the current d-i netinst images], and from
initrd.list files in d-i daily builds.
= Common Packages =
 * anna
 * apt-cdrom-setup
 * apt-mirror-setup
 * apt-setup-udeb # first-stage apt configuration question
 * archdetect
 * base-installer
 * binutils-static-udeb # for restricted modules
 * bogl-bterm-udeb
 * bootchart-udeb # profiling; disabled unless you boot with 'bootchart'
parameter
 * brltty-udeb
 * bterm-unifont
 * busybox-udeb
 * cdebconf-newt-udeb
 * cdebconf-priority
 * cdebconf-text-udeb
 * cdebconf-udeb
 * cdrom-checker
 * cdrom-detect
 * cdrom-retriever
 * choose-mirror
 * clock-setup
 * debootstrap-udeb
 * dhcp3-client-udeb
 * di-utils
 * di-utils-mapdevfs
 * di-utils-reboot
 * di-utils-shell
 * di-utils-terminfo
 * disk-detect
 * download-installer
 * e2fsprogs-udeb
 * eject-udeb
 * env-preseed
 * ethdetect
 * fbset-udeb
 * file-preseed
 * finish-install
 * hdparm-udeb # not currently used, but may be used by cdrom-detect in the
future
 * hw-detect
 * initrd-preseed
 * installation-locale
 * installation-report
 * iso-3166-udeb
 * iso-scan # for USB boot
 * jfsutils-udeb
 * console-setup-udeb
 * console-setup-pc-ekmap
 * console-setup-fonts-udeb
 * libdevmapper1.02-udeb
 * libfribidi0-udeb
 * libnss-dns-udeb
 * libnss-files-udeb
 * libparted1.7-udeb
 * libtextwrap1-udeb
 * load-cdrom
 * load-iso # for USB boot
 * localechooser # replaces languagechooser and countrychooser
 * lowmem
 * lowmemcheck
 * lsb-release-udeb
 * lvm2-udeb
 * lvmcfg
 * lvmcfg-utils
 * main-menu
 * mdadm-udeb
 * mdcfg
 * mdcfg-utils
 * migration-assistant
 * mii-diag-udeb
 * mkreiserfs-udeb
 * module-init-tools-udeb
 * nano-udeb
 * net-retriever
 * netcfg
 * network-preseed
 * nobootloader
 * ntfsprogs-udeb # for ntfsresize
 * oem-config-udeb # first-stage component of OEM installer
 * openssh-client-udeb
 * os-prober-udeb
 * partconf-find-partitions
 * partconf-mkfstab
 * parted-udeb
 * partman-auto
 * partman-auto-lvm
 * partman-base
 * partman-basicfilesystems
 * partman-basicmethods
 * partman-ext3
 * partman-jfs
 * partman-lvm
 * partman-md
 * partman-partitioning
 * partman-reiserfs
 * partman-target
 * partman-xfs
 * pciutils-udeb # for lspci, so we can show descriptive names for devices
 * pcmciautils-udeb
 * pkgsel # after installing the base system, install everything else
 * ppp-udeb
 * preseed-common
 * reiserfsprogs-udeb
 * rescue-check # initrd part of rescue mode
 * rescue-mode  # main part of rescue mode, installed if rescue/enable=true
 * rootskel
 * save-logs
 * strace-udeb # handy for debugging
 * tzsetup-udeb # first-stage timezone question
 * udev-udeb
 * udpkg
 * usb-discover
 * usbutils-udeb # for lsusb, so we can show descriptive names for devices
 * user-setup-udeb # first-stage username/password question
 * wireless-tools-udeb
 * xfsprogs-udeb
= Floppy Support =
 * busybox-floppy-udeb
 * floppy-retriever
 * load-floppy
 * rootskel-bootfloppy
= Release File Authentication =
 * gpgv-udeb
 * ubuntu-keyring-udeb
= Kickstart Compatibility =
 * initrd-kickseed
= Partition Management (architecture-specific) =
 * fdisk-udeb
 * gptsync-udeb [i386]
 * partman-efi [i386]
= Bootloader Installers =
 * elilo-installer [i386]
 * grub-installer [i386]
 * lilo-installer [i386]
= Experimental stuff =
 * network-console
= Kernel Modules =
Make sure to leave the Kernel-Version: lines and separated architectures in
here! germinate needs them.
== i386 ==
 * Kernel-Version: 2.6.22-8-generic
 * /^.*-firmware-.*-di/ [i386]
 * /^.*-modules-.*-di/ [i386]
KategoriBlankOn KategoriPemaket
Last modified on 06/16/2008 11:01:17 AM
#### 
    
 
 
 
 
 
---
 
