# Daftar Paket Srimubil
**Autotools**
    * gtk+
          o suggest
                # atk
                # glib
                # cairo
                # pango
                # atk
                # libtiff
    * gnome-control-center
          o suggest
                # gnome-desktop
                # gnome-menus
                # gnome-settings-daemon
    * gir-repository
          o depends
                # gobject-introspection
          o after
                # libsoup
                # pango
                # cairo
                # glib
                # clutter
                # libnotify
                # gtk+
                # gtksourceview
                # poppler
    * gobject-introspection
          o suggest
                # glib
    * gjs
          o suggest
                # mozilla
          o depends
                # gobject-introspection
          o after
                # gir-repository
    * telepathy-glib
          o suggest
                # glib
                # dbus
                # dbus-glib
                # libxslt
    * jana
    * clutter
          o suggest
                # gir-repository
                # gtk+
                # glib
          o depends
                # gobject-introspection
    * cairo
          o suggest
                # fontconfig
                # gtk-doc
                # pixman
          o after
                # glitz
    * pixman
    * mutter
          o suggest
                # gobject-introspection
                # gir-repository
          o depends
                # clutter
    * clutter-imcontext
          o depends
                # clutter
    * clutter-gesture
          o depends
                # clutter
    * clutter-gst
          o suggest
                # gst-plugins-base
          o depends
                # clutter
          o after
                # gir-repository
    * tracker
          o depends
    * tumbler
          o depends
    * maemo-video-thumbnailer
          o depends
    * clutter-gtk
          o suggest
                # gtk+
          o depends
                # clutter
    * moblin-icon-theme
    * cluttersmith
          o depends
                # clutter-gst
                # mx
                # gjs
                # moblin-icon-theme
    * mx
          o suggest
                # pango
                # cairo
                # startup-notification
                # dbus-glib
          o depends
                # clutter
                # clutter-gesture
                # clutter-imcontext
                # gobject-introspection
                # gir-repository
    * librest
          o depends
                # gobject-introspection
                # libsoup
                # gir-repository
    * json-glib
    * glib
          o depends
                # gtk-doc
          o after
                # shared-mime-info
    * twitter-glib
          o suggest
                # libsoup
          o depends
                # json-glib
    * libsocialweb
          o suggest
                # dbus-glib
                # gnome-keyring
                # gconf
                # glib
          o depends
                # librest
    * bisho
          o depends
                # libsocialweb
                # gnome-control-center
    * anerley
    * atasmart
    * udisks
          o suggest
                # lvm2
                # udev
                # dbus-glib
    * meego-panel-devices
          o suggest
                # udisks
          o depends
                # mx
                # mutter-meego
    * meego-panel-myzone
          o suggest
                # jana
                # telepathy-glib
          o depends
                # mx
                # libsocialweb
                # mutter-meego
    * meego-panel-applications
          o depends
                # mx
                # mutter-meego
    * meego-panel-status
          o depends
                # clutter-gtk
                # libsocialweb
                # mx
                # mutter-meego
    * meego-panel-people
          o depends
                # mx
                # anerley
                # mutter-meego
    * moblin-panel-pasteboard
          o depends
                # mutter-meego
                # mx
    * mutter-meego
          o depends
                # clutter-gtk
                # mutter
                # mx
                # gnome-control-center
    * hornsey
          o suggest
                # tracker
                # tumbler
          o depends
                # bognor-regis
                # mx
                # clutter-gst
                # clutter-gtk
    * bognor-regis
          o suggest
                # gupnp
                # gupnp-av
                # tracker
    * libccss
    * nbtk
          o depends
                # clutter
                # clutter-imcontext
                # libccss
    * dalston
          o depends
    * clutter-mozembed
          o depends
                # clutter
                # mozilla-headless-services
    * mozilla-headless-services
          o depends
                # clutter
    * moblin-web-browser
          o depends
                # mozilla-headless-services
                # clutter-mozembed
                # clutter-gtk
                # nbtk
    * WebKit?
          o suggest
                # cairo
                # fontconfig
                # libxml2
                # gtk+
                # pango
                # sqlite3
                # gir-repository
                # libxslt
                # gst-plugins-base
                # enchant
          o depends
                # libsoup
    * sqlite3
    * mozilla
          o depends
                # gtk+
                # sqlite3
                # nss
                # nspr
                # dbus
                # gconf
                # cairo
    * nss
          o depends
                # nspr
                # sqlite3
    * libsoup
          o suggest
                # glib
                # gnutls
                # libxml2
                # gconf
                # libproxy
                # sqlite3
                # libgnome-keyring
    * gstreamer
          o suggest
                # glib
                # libxml2
          o after
                # gir-repository
    * gst-plugins-base
          o suggest
                # gstreamer
                # gtk+
                # liboil
    * libtiff
    * libgcrypt
          o depends
                # libgpg-error
    * gnome-doc-utils
          o suggest
                # libxslt
                # intltool
                # rarian
***** tarbal *****
    * poppler
          o suggest
                # glib
                # poppler-data
          o depends
                # cairo
          o after
                # gtk+
    * fontconfig
          o suggest
                # expat
    * expat
    * lvm2
    * udev
          o suggest
                # usbutils
                # atasmart
    * usbutils
    * gtksourceview
          o suggest
                # intltool
                # gtk+
                # libxml2

**metamodule**
    * meta-meego-panels
          o depends
                # meego-panel-myzone
                # meego-panel-status
                # meego-panel-people
                # moblin-panel-pasteboard
                # meego-panel-applications
                # meego-panel-devices
    * meta-meego-netbook
          o depends
                # gobject-introspection
                # clutter
                # libsocialweb
                # mutter-meego
                # bisho


                # meta-meego-panels
    * meta-meego-js
          o depends
                # gobject-introspection
                # libsocialweb
                # libnotify
                # gtksourceview
                # poppler
                # gir-repository
                # mx
                # seed
                # gjs
                # cluttersmith

## Daftar Paket Hulu Srimubil

Dibawah ini adalah daftar paket dari Meego, Daftar ini ditujukan untuk membuat daftar bibit paket Srimubil. Daftar paket yang sudah diidentifikasi tersedia di
lumbung paket BlankOn dicatat di halaman Srimubil/DaftarPaketLumbung, kemudian buatlah tulisan menjadi tebal pada halaman ini untuk membedakan paket yang
sudah diidentifikasi dan yang belum. Aturan mainya :
    * Tulisan tebal : Paket yang sudah diidentifikasi dan ada dilumbung paket BlankOn
    * Tulisan tebal dan miring : Paket yang sudah diidentifikasi dan belum ada di lumbung paket BlankOn
    * Tulisan biasa : Paket yang belum diidentifikasi

**Autotools**
    * gtk+
          o suggest
                # atk
                # glib
                # cairo
                # pango
                # atk
                # libtiff
    * gnome-control-center
          o suggest
                # gnome-desktop
                # gnome-menus
                # gnome-settings-daemon
    * gir-repository
          o depends
                # gobject-introspection
          o after
                # libsoup
                # pango
                # cairo
                # glib
                # clutter
                # libnotify
                # gtk+
                # gtksourceview
                # poppler
    * gobject-introspection
          o suggest
                # glib
    * gjs
          o suggest
                # mozilla
          o depends
                # gobject-introspection
          o after
                # gir-repository
    * telepathy-glib
          o suggest
                # glib
                # dbus
                # dbus-glib
                # libxslt
    * jana
    * clutter
          o suggest
                # gir-repository
                # gtk+
                # glib
          o depends
                # gobject-introspection
    * cairo
          o suggest
                # fontconfig
                # gtk-doc
                # pixman
          o after
                # glitz
    * pixman
    * mutter
          o suggest
                # gobject-introspection
                # gir-repository
          o depends
                # clutter
    * clutter-imcontext
          o depends
                # clutter
    * clutter-gesture
          o depends
                # clutter
    * clutter-gst
          o suggest
                # gst-plugins-base
          o depends
                # clutter
          o after
                # gir-repository
    * tracker
          o depends
    * tumbler
          o depends
    * maemo-video-thumbnailer
          o depends
    * clutter-gtk
          o suggest
                # gtk+
          o depends
                # clutter
    * moblin-icon-theme
    * cluttersmith
          o depends
                # clutter-gst
                # mx
                # gjs
                # moblin-icon-theme
    * mx
          o suggest
                # pango
                # cairo
                # startup-notification
                # dbus-glib
          o depends
                # clutter
                # clutter-gesture
                # clutter-imcontext
                # gobject-introspection
                # gir-repository
    * librest
          o depends
                # gobject-introspection
                # libsoup
                # gir-repository
    * json-glib
    * glib
          o depends
                # gtk-doc
          o after
                # shared-mime-info
    * twitter-glib
          o suggest
                # libsoup
          o depends
                # json-glib
    * libsocialweb
          o suggest
                # dbus-glib
                # gnome-keyring
                # gconf
                # glib
          o depends
                # librest
    * bisho
          o depends
                # libsocialweb
                # gnome-control-center
    * anerley
    * atasmart
    * udisks
          o suggest
                # lvm2
                # udev
                # dbus-glib
    * meego-panel-devices
          o suggest
                # udisks
          o depends
                # mx
                # mutter-meego
    * meego-panel-myzone
          o suggest
                # jana
                # telepathy-glib
          o depends
                # mx
                # libsocialweb
                # mutter-meego
    * meego-panel-applications
          o depends
                # mx
                # mutter-meego
    * meego-panel-status
          o depends
                # clutter-gtk
                # libsocialweb
                # mx
                # mutter-meego
    * meego-panel-people
          o depends
                # mx
                # anerley
                # mutter-meego
    * moblin-panel-pasteboard
          o depends
                # mutter-meego
                # mx
    * mutter-meego
          o depends
                # clutter-gtk
                # mutter
                # mx
                # gnome-control-center
    * hornsey
          o suggest
                # tracker
                # tumbler
          o depends
                # bognor-regis
                # mx
                # clutter-gst
                # clutter-gtk
    * bognor-regis
          o suggest
                # gupnp
                # gupnp-av
                # tracker
    * libccss
    * nbtk
          o depends
                # clutter
                # clutter-imcontext
                # libccss
    * dalston
          o depends
    * clutter-mozembed
          o depends
                # clutter
                # mozilla-headless-services
    * mozilla-headless-services
          o depends
                # clutter
    * moblin-web-browser
          o depends
                # mozilla-headless-services
                # clutter-mozembed
                # clutter-gtk
                # nbtk
    * WebKit?
          o suggest
                # cairo
                # fontconfig
                # libxml2
                # gtk+
                # pango
                # sqlite3
                # gir-repository
                # libxslt
                # gst-plugins-base
                # enchant
          o depends
                # libsoup
    * sqlite3
    * mozilla
          o depends
                # gtk+
                # sqlite3
                # nss
                # nspr
                # dbus
                # gconf
                # cairo
    * nss
          o depends
                # nspr
                # sqlite3
    * libsoup
          o suggest
                # glib
                # gnutls
                # libxml2
                # gconf
                # libproxy
                # sqlite3
                # libgnome-keyring
    * gstreamer
          o suggest
                # glib
                # libxml2
          o after
                # gir-repository
    * gst-plugins-base
          o suggest
                # gstreamer
                # gtk+
                # liboil
    * libtiff
    * libgcrypt
          o depends
                # libgpg-error
    * gnome-doc-utils
          o suggest
                # libxslt
                # intltool
                # rarian

**tarbal**
    * poppler
          o suggest
                # glib
                # poppler-data
          o depends
                # cairo
          o after
                # gtk+
    * fontconfig
          o suggest
                # expat
    * expat
    * lvm2
    * udev
          o suggest
                # usbutils
                # atasmart
    * usbutils
    * gtksourceview
          o suggest
                # intltool
                # gtk+
                # libxml2

**metamodule**
    * meta-meego-panels
          o depends
                # meego-panel-myzone
                # meego-panel-status
                # meego-panel-people
                # moblin-panel-pasteboard
                # meego-panel-applications
                # meego-panel-devices
    * meta-meego-netbook
          o depends
                # gobject-introspection
                # clutter
                # libsocialweb
                # mutter-meego
                # bisho
                # meta-meego-panels
    * meta-meego-js
          o depends
                # gobject-introspection
                # libsocialweb
                # libnotify
                # gtksourceview
                # poppler
                # gir-repository
                # mx
                # seed
                # gjs
                # cluttersmith

## Daftar Paket Lumbung Srimubil

Daftar paket Srimubil yang sudah tersedia di lumbung paket BlankOn

| No | Nama Paket Meego | Nama Paket BlankOn |
|--------|--------|---|
| 1 | gnome-settings-daemon | gnome-settings-daemon |
| 2 | gnome-control-center | gnome-control-center |
| 3 | gnome-menus | gnome-menus |
| 4 | gobject-introspection | gobject-introspection |
| 5 | fontconfig | fontconfig |
| 6 | mutter | mutter |
| 7 | gtk+ | libgtk2.0-dev |
| 8 | atk | libatk1.0-0 |
| 9 | glib | libglib2.0-0 |
| 10 | cairo | libcairo2 |
| 11 | pango | libpango1.0-0 |
| 12 | libtiff | libtiff4 |
| 13 | gnome-desktop | libgnome-desktop-2 |
| 14 | gir-repository | gir-repository-dev |
| 15 | libsoup | libsoup2.4-1 |
| 16 | clutter | libclutter-1.0-0 |
| 17 | libnotify | libnotify-bin |
| 18 | gtksourceview | libgtksourceview1.0-0 |
| 19 | poppler | libpoppler5 |
| 20 | gjs | gjs |
| 21 | mozilla | xulrunner-1.9.2 |
| 22 | dbus | dbus |
| 23 | dbus-glib | libdbus-glib-1-2 |
| 24 | libxslt | libxslt1.1 |
| 25 | libtelepathy-glib | libtelepathy-glib0 |
| 26 | jana | libjana0 |
| 27 | gtk-doc | gtk-doc-tools |
| 28 | pixman | libpixman-1-0 |
| 29 | glitz | libglitz1 |
| 30 | clutter-imcontext | libclutter-imcontext-0.1-0 |
| 31 | clutter-gst | libclutter-gst-0.10-0 |
| 32 | gst-plugins-base | gir1.0-gst-plugins-base-0.10 |
| 33 | tracker | tracker |
| 34 | clutter-gtk | libclutter-gtk-0.10-0 |
| 35 | moblin-icon-theme | moblin-icon-theme |
| 36 | mx | libmx-1.0-0 |
| 37 | startup-notification | libstartup-notification0 |
| 38 | librest | librest-0.6-0 |
| 39 | json-glib | libjson-glib-1.0-0 |
| 40 | shared-mime-info | shared-mime-info |
| 41 | twitter-glib | libtwitter-glib-1.0-0 |
| 42 | gnome-keyring | gnome-keyring |
| 43 | gconf | gconf2 |
| 44 | bisho | bisho |
| 45 | anerley | libanerley0 |
| 46 | atasmart | libatasmart4 |
| 47 | udisks | udisks |
| 48 | lvm2 | lvm2 |
| 49 | udev | udev |
| 50 | hornsey | hornsey |
| 51 | bognor-regis | libbognor-regis-0.5-0 |
| 52 | gupnp | libgupnp-1.0-3 |
| 53 | gupnp-av | libgupnp-av-1.0-2 |
| 54 | libccss | libccss-1-5 |
| 55 | nbtk | libnbtk-1.2-0 |
| 56 | dalston | dalston |
| 57 | seed | seed |
| 58 | WebKit? | libwebkit-1.0-2 |
| 59 | libxml2 | libxml2 |
| 60 | sqlite3 | sqlite3 |
| 61 | enchant | libenchant1c2a |
| 62 | nss | libnss3-1d |
| 63 | nspr | libnspr4-0d |
| 64 | gnutls | libgnutls26 |
| 65 | libproxy | libproxy0 |
| 66 | libgnome-keyring | libgnome-keyring0 |
| 67 | gstreamer | libgstreamer0.10-0 |
| 68 | liboil | liboil0.3 |
| 69 | libgcrypt | libgcrypt11 |
| 70 | libgpg-error | libgpg-error0 |
| 71 | gnome-doc-utils | gnome-doc-utils |
| 72 | intltool | intltool |
| 73 | rarian | librarian0 |
| 74 | poppler-data | poppler-data |
| 75 | expat | expat |
| 76 | usbutils | usbutils |

## DaftarPaketTugas

Halaman ini memuat daftar paket dari Meego yang belum tersedia di Lumbung Paket BlankOn, diambil dari Daftar_Paket_Hulu

| No | Nama Paket Meego  |Tautan  |  status  |
|--------|--------|--------|
| 1 | Clutter-gesture  |​http://gitorious.org/mx-toolkit/clutter-gesture  |    |
| 2 | tumbler  |​http://git.xfce.org/apps/tumbler  |    |
| 3 | Maemo-video-thumbnailer  |​http://maemo.gitorious.org/maemo-af/maemo-video-thumbnailer  |    |
| 4 | cluttersmith  |​http://git.clutter-project.org/cluttersmith/  |    |
| 5 | libsocialweb  |​http://gitorious.org/meego-middleware/libsocialweb  |    |
| 6 | Meego-panel-devices  |​http://meego.gitorious.org/meego-netbook-ux/meego-panel-devices  |    |
| 7 | mutter-meego  |​http://meego.gitorious.org/meego-netbook-ux/mutter-meego  |    |
| 8 | Meego-panel-myzone  |​http://meego.gitorious.org/meego-netbook-ux/meego-panel-myzone  |    |
| 9 | Meego-panel-applications  |​http://meego.gitorious.org/meego-netbook-ux/meego-panel-applications  |    |
| 10 | Meego-panel-status  |​http://meego.gitorious.org/meego-netbook-ux/meego-panel-status  |    |
| 11 | Meego-panel-people  |​http://meego.gitorious.org/meego-netbook-ux/meego-panel-people  |    |
|  | moblin-  |​http://meego.gitorious.org/meego-netbook-ux/moblin-panel-  |    |
| 12 | Panel-pasteboard  |pasteboard  |    |
| 13 | Clutter-mozembedmozilla-  |​http://git.clutter-project.org/clutter-mozembed/  |    |
| 14 | Headless-services  |​http://git.moblin.org/cgit.cgi/mozilla-headless-services/  |    |
| 15 | Moblin-web-browser  |​http://git.moblin.org/cgit.cgi/moblin-web-browser/  |    |
| 16 | Srimubil-panelmeta-  |  |    |
| 17 | Srimubil-netbook  |  |    |
| 18 | Meta-srimubil-js  |  |    |
| 19 | Meego-gtk-engine  |​http://meego.gitorious.org/meego-netbook-ux/meego-gtk-engine  |    |



---
 



