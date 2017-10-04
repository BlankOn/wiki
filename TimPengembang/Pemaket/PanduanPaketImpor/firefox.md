## Panduan Paket Impor # firefox
Proses BlankOnisasi Pattimura:
### Motto:
Ubah sedikit mungkin, dokumentasikan sebanyak banyak nya!
### Peralatan
    * mozilla-devscripts
    * ubuntu-dev-tools
### Proses
   1. Ambil kode sumber
          o ambil sumber dari ubuntu
            $ pull-lp-source firefox
          o perintah diatas akan membuat direktory firefox-4.0~b7+nobinonly dan
            berkas upstream
          o buat direktori kerja
            $ mkdir firefox
            $ cd firefox
            $ bzr init
            $ bzr import-dsc ../firefox_3.6.8+build1+nobinonly-
            0ubuntu0.10.04.1+blankon1.dsc # blankon
            $ bzr import-dsc ../firefox_4.0~b7+nobinonly-0ubuntu3.dsc # dari
            ubuntu
            cek apakah sudah terimpor dengan perintah
            $ bzr tags
            3.6.8+build1+nobinonly-0ubuntu0.10.04.1+blankon1 2
            4.0~b7+nobinonly-0ubuntu3 3
            upstream-3.6.8+build1+nobinonly 1
            upstream-4.0~b7+nobinonly 1.1.1
          o salin changelog dari blankon dan gabung debian ubuntu
            $ cp debian/changelog debian/changelog.ubuntu
            $ merge-changelog ../firefox-3.6.8+build1+nobinonly/debian/
            changelog debian/changelog.ubuntu > debian/changelog
   2. Mengubah isi Bookmark milik Firefox 4. Perubahan dilakukan melalui patch
      yang tertulis dalam debian/patches/blankon_bookmarks.patch
   3. sunting berkas distribution.ini menjadi
      [Global]
      id=YPLI
      version=1.0
      about=Mozilla Firefox for BlankOn
      [Preferences]
      app.distributor = “ypli”
      app.distributor.channel = “blankon”
      app.partner.ubuntu = “blankon”
   1. Proses re-branding berikutnya (startup page, dsb) dilakukan melalui
      sebuah firefox extension bernama blankonfox
   2. Ubah Maintainer
      $ bzr diff debian/control.pp
      === modified file 'debian/control.pp'
       debian/control.pp	2011-01-12 09:00:16 +0000
      +++ debian/control.pp	2011-01-24 16:34:04 +0000
      @@ -1,7 +1,8 @@
       Source: @APPNAME@
       Section: web
       Priority: optional
      -Maintainer: Ubuntu Mozilla Team <ubuntu-mozillateam@lists.ubuntu.com>
      +Maintainer: BlankOn Developers <BlankOn-dev@googlegroups.com>
      +XSBC-Original-Maintainer: Ubuntu Mozilla Team <ubuntu-
      mozillateam@lists.ubuntu.com>
       Vcs-Bzr: https://code.launchpad.net/~mozillateam/firefox/firefox-
      4.0.head
       Build-Depends: cdbs,
       	debhelper (>= 5),
      @@ -50,7 +51,7 @@
       	${misc:Depends},
       	${shlibs:Depends},
       	@APPNAME@-branding | @APPNAME_OTHER@-branding
      -Recommends: ubufox
      +Recommends: blankonfox
       Provides: www-browser, iceweasel, gnome-www-browser
       Suggests: @APPNAME@-gnome-support | firefox-kde-support, latex-xft-
      fonts, libthai0
       XB-Xul-AppId: {ec8030f7-c20a-464f-9b0e-13a3a9e97384}
   3. Buat changelog dengan perintah dch -i, contoh
      $ bzr diff debian/changelog
      === modified file 'debian/changelog'
       debian/changelog    2011-01-12 09:00:16 +0000
      +++ debian/changelog    2011-01-24 16:39:39 +0000
      @@ -1,3 +1,18 @@
      +firefox (4.0~b9+build1+nobinonly-0ubuntu1+blankon1) natty; urgency=low
      +
      +  * New upstream release
      +  * Merge from ubuntu natty, remaining changes:
      +    - debian/patches/ubuntu_bookmarks.patch, removing ubuntu bookmarks
      +    - debian/patches/blankon_bookmarks.patch, adding blankon bookmarks
      +    - debian/patches/ubuntu_codes_amazon.patch, removed
      +    - debian/patches/install_ubuntu_prefs.patch. removed
      +    - debian/distribution.ini, change vendor to blankon style
      +    - debian/control.pp
      +      * change DebianMaintainerField
      +      * change ubufox -> blankonfox
      +
      + -- Mahyuddin Susanto <udienz@ubuntu.com>  Mon, 24 Jan 2011 16:39:23
      +0000
      +
       firefox (4.0~b9+build1+nobinonly-0ubuntu1) natty; urgency=low
   1. Lihat dan simpan perubahan anda
      $ bzr diff | diffstat
      $ bzr diff | less
      $ bzr commit
   2. Beri tag
      $ head -n1 debian/changelog
      firefox (4.0~b7+nobinonly-0ubuntu3+blankon1) pattimura; urgency=low
      $ bzr tag 4.0~b7+nobinonly-0ubuntu3+blankon1
      Created tag 4.0~b7+nobinonly-0ubuntu3+blankon1.
   3. Kirim ke irgsh
      bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/pattimura/firefox
Langkah selanjutnya silakan buka halaman ini: ​http://dev.blankonlinux.or.id/
wiki/Pemaket/PanduanMengirimPaketKePabrikPaketVersi1
### Bonus Point
   1. Buat debdiff dan upload di halaman ini.
      $ debdiff firefox_4.0~b9+build1+nobinonly-0ubuntu1.dsc
      firefox_4.0~b9+build1+nobinonly-0ubuntu1+blankon1.dsc > /tmp/
      firefox_4.0~b9+build1+nobinonly-0ubuntu1+blankon1.dsc.debdiff
   2. Bila membuat patch, sesuaikan dengan dep3 ​http://dep.debian.net/deps/
      dep3/
### Yang sangat tidak dianjurkan untuk diubah
sangat trivial.. sebagiknya di hindari
   1. Mengubah patch system (misal dari cdbs ke quilt)
   2. Menaikkan Version-Number di debian/control
   3. debian/changelog berisikan hanya beberapa patah kata atau smilies.
      contoh:
      * rilis terbaru, bisa di untuh nih :)
      atau
      impor ke pattimura
      kenapa? sangat tidak lengkap dan akan menyusahkan pengelola paket
      selanjutnya.
KategoriPemaket
Last modified on 01/25/2011 12:16:47 AM
#### Attachments (1)
    * firefox_4.0~b9+build1+nobinonly-0ubuntu1+blankon1.dsc.debdiff​ (36.8 KB)
      - added by mahyuddin susanto <udienz> 6 years ago.

---
 
