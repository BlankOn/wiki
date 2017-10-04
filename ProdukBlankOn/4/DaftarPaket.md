# Daftar Paket BlankOn 4

## Daftar Paket Khas BlankOn 4
    * daluang (iang)
    * blankon-docs (iang)
    * blankon-artwork
    * blankon-example-content
    * blankon-mozilla-firefox-locale-all (iang)
    * docang-icon-theme
    * docang-theme
    * kamonesan-icon-theme (iang)
    * kamonesan-gdm-theme (iang)
    * indonesian-fonts
    * gulali-hitam-themes (MuhammadTakdir)
    * multimedia-blankon (MuhammadTakdir)
    * panel-desktop-minimalis (MuhammadTakdir)
    * panel-desktop-standar (MuhammadTakdir)
    * scim-tables-indonesian

## Daftar Paket Impor BlankOn 4
Format penulisannya : name_paket_binary (nama_pengelola); name_paket_binary

bisa dilihat di debian/control (apabila ada beberapa cukup tulis salah satusaja); sedangkan nama_pengelola adalah nama login di ​http://irgsh.blankonlinux.or.id

Paket Impor ini dapat juga Anda lihat statusnya di ​http://irgsh.blankonlinux.or.id/status/

    * apt (iang)
    * base-files (bleketux)
    * casper (muhammad-takdir)
    * epiphany-browser (iang)
    * firefox (imasens)
    * fontconfig (muhammad-takdir)
    * gdm (fadly-kasim)
    * gimp (rametux)
    * gnome-control-center (rametux)
    * gnome-desktop (muhammad-takdir)
    * gnome-icon-theme (bleketux)
    * gnome-session (iang)
    * openoffice.org (iang)
    * python-apt (iang)
    * system-config-printer (muhammad-takdir)
    * ubiquity (iang)
    * yelp (muhammad-takdir)
    * apt-setup-udeb (imtheface)
    * base-installer (imtheface)
    * cdrom-checker (imtheface)
    * cdrom-detect (imtheface)
    * debootstrap (imtheface)
    * gnome-panel (imtheface)
    * libcanberra-gnome (imtheface)
    * localechooser (imtheface)
    * main-menu (imtheface)
    * netcfg (imtheface)
    * tangerine-icon-theme (imtheface)
    * tasksel (imtheface)
    * launchpad-integration (iang)
    * language-pack-id (iang)
    * language-pack-id-base (iang)
    * language-pack-gnome-id (imtheface)
    * language-pack-gnome-id-base (imtheface)

## Daftar Paket Impor Mentah BlankOn 4

Ini formatnya:
> ## Kolom 1: Nama paket SUMBER (apt-cache showsrc NAMA-PAKET | grep Package:)
> ## Kolom 2: Tempat komponen repository BlankOn (isi hanya di main atau restricted)
    * gnucash (main)
    * grisbi (main)
    * flashplugin-nonfree (restricted)
    * gstreamer0.10-pitfdll (restricted)
    * gst-plugins-ugly-multiverse0.10 (restricted)
    * gst-plugins-bad-multiverse0.10 (restricted)
    * gst-plugins-bad0.10 (restricted)
    * gst-plugins-ugly0.10 (restricted)
    * gstreamer0.10-ffmpeg (restricted)
    * gst-plugins-farsight (restricted)
    * gst-fluendo-mp3 (restricted)
    * gst-fluendo-mpegdemux (restricted)
    * gst-fluendo-mpegmux (restricted)
    * lame (restricted)
    * libcdaudio (restricted)
    * jack-audio-connection-kit (restricted)
    * libmms (restricted)
    * libopenspc (restricted)
    * soundtouch (restricted)
    * faac (restricted)
    * faad (restricted)
    * mjpegtools (restricted)
    * x264 (restricted)
    * xvidcore (restricted)
    * a52dec (restricted)
    * libdvdread (restricted)
    * mpeg2dec (restricted)
    * sidplay-libs (restricted)
    * unrar (restricted)
    * gcc-3.3 (main)
    * msttcorefonts (restricted)
    * python-django (main)
    * totem (main)
    * gnochm (main)
    * python-mako (main)
    * xine-lib (main)
    * libtsmux (restricted)

# Usulan Paket DVD BlankOn 4

Berikut ini adalah daftar paket yang diusulkan untuk dimasukkan ke dalam DVD BlankOn 4 masih dikerjakan, silahkan ditambahkan sesuka hati Anda tapi ingat jangan paket yang berbayar

**Multimedia**
    * audacious
    * gstreamer
    * gstreamer0.10-ffmpeg
    * gstreamer0.10-plugins-bad
    * gstreamer0.10-plugins-bad-multiverse
    * gstreamer0.10-plugins-ugly-multiverse
    * gstreamer0.10-plugins-good
    * gstreamer0.10-plugins-ugly
    * gstreamer0.10-plugins-base
    * dir2ogg
    * vlc
    * pulseaudio
    * amarok
    * audacity
    * k3b
**Server**
    * apache2
    * libapache2-mod-php5
    * php5
    * php5-mysql
    * mysql-server
    * phpmyadmin
    * bind9
    * dhcpd3-server
    * proftpd
    * vsftpd
    * webalizer
    * openssh-server
    * samba
    * nfs-kernel-server
**Networking**
    * nmap
    * gnome-ppp
    * csnut (ada paket debian nya?)
    * htop
    * iptraf
    * iftop
    * zenmaq
    * thunderbird
    * claws-mail
    * pidgin
    * seamonkey
    * filezilla
    * Azureus
    * d4x
    * krdc
    * kppp
    * NFS Client
    * kazehakase
    * wireshark
    * kismet
    * netcat
    * shorewall
    * zenoss
    * ...
**Office**
    * openoffice.org
    * abiword
    * xpdf
    * scribus
    * docbook
    * docbook-utils
    * conglongmerate
    * docbook-xml
    * docbook-xsl
    * linuxdoc-tools
    * fop
    * texlive
**Accessories**
    * xchm
    * wine
    * ccsm
    * compiz-plugin (kalo bisa kasih yang bersi terbaru)
    * winbind
    * awn-manager
    * avant-window-navigator
    * isomaster
    * liveusb (​http://ppa.launchpad.net/probono/ubuntu)
    * gcolor2
    * keepassx
    * gmount-iso
    * cutecom
    * zekr (full)
    * nrg2iso
    * ...
**Editor**
    * bluefish
    * screem
    * kompozer
**Development**
    * poedit
    * gtanslator
    * bzr
    * olive
    * rapidsvn
    * python-paramiko
    * ruby (termasuk rubygems,ruby-gnome2, dll yang dirasa penting)
    * gambas
    * lazarus
    * netbeans
    * eclipse
    * git-core
    * openjdk-6-jdk
**Education**
    * gcompris
    * childsplay
    * pysycache
    * stellarium
    * ghemical
    * kalzium
    * kgeography
    * kstars
**Library**
    * openjdk-6-jre
**Graphics**
    * gimp
    * fspot
    * inkscape
    * blender
    * istanbul...
    * ktoon --- ​http://ktoon.toonka.com
    * dia
    * ...
**Games**
    * vdrift --- ​http://vdrift.net
    * racer --- ​http://www.racer.nl
    * paitown --- ​http://www.getdeb.net/app/PainTown
    * glest --- ​http://www.getdeb.net/app/Glest
    * ...
**paket dalam pertimbangan**
    * Cairo-Dock (ada url? *reply url: ​http://developer.berlios.de/projects/
      cairo-dock/ )
**paket yang ditolak**
    * VMWare-Server-Console ada paket debian nya?
    * adobe reader



---
 



