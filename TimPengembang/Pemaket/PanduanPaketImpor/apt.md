# Panduan BlankOnisasi apt
Berkas yang diubah
   1. apt-pkg/deb/debversion.cc
   2. cmdline/apt-key
   3. debian/apt.postinst
   4. debian/rules
   5. debian/control
Berkas yang ditambahkan
   1. debian/share/blankon-keyring.gpg
Contoh revisi: ​http://bazaar.launchpad.net/~blankon-pemaket/blankon/apt/
revision/13
### Perubahan berkas
#### apt-pkg/deb/debversion.cc
Patch agar paket BlankOn tidak selalu ketinggalan. Informasi: ​https://
bugs.launchpad.net/blankon/+bug/184476
#### cmdline/apt-key
   1. archive keyring
@@ -10,8 +10,8 @@
 MASTER_KEYRING=/usr/share/keyrings/ubuntu-master-keyring.gpg
-ARCHIVE_KEYRING=/usr/share/keyrings/ubuntu-archive-keyring.gpg
-REMOVED_KEYS=/usr/share/keyrings/ubuntu-archive-removed-keys.gpg
+ARCHIVE_KEYRING=/usr/share/keyrings/blankon-archive-keyring.gpg
+REMOVED_KEYS=/usr/share/keyrings/blankon-archive-removed-keys.gpg
 ARCHIVE_KEYRING_URI=http://archive.ubuntu.com/ubuntu/project/ubuntu-archive-
keyring.gpg
 add_keys_with_verify_against_master_keyring() {
   1. Pesan error
@@ -77,7 +77,7 @@
 update() {
     if [ ! -f $ARCHIVE_KEYRING ]; then
 	echo >&2 "ERROR: Can't find the archive-keyring"
-	echo >&2 "Is the ubuntu-keyring package installed?"
+	echo >&2 "Is the blankon-keyring package installed?"
 	exit 1
     fi
#### debian/apt.postinst
Masukkan blankon-archive.gpg ke dalam keyring
@@ -17,7 +17,8 @@
     configure)
         if ! test -f /etc/apt/trusted.gpg; then
-                cp /usr/share/apt/ubuntu-archive.gpg /etc/apt/trusted.gpg
+            apt-key add /usr/share/apt/blankon-archive.gpg
+            apt-key add /usr/share/apt/ubuntu-archive.gpg
         fi
     ;;
#### debian/control
   1. Maintainer
-Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
-XSBC-Original-Maintainer: APT Development Team <deity@lists.debian.org>
+Maintainer: BlankOn Developers <BlankOn@googlegroups.com>
+XSBC-Original-Maintainer: APT Development Team <deity@lists.debian.org>,
Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
   1. Recommends
@@ -15,7 +15,7 @@
 Priority: important
 Replaces: libapt-pkg-doc (<< 0.3.7), libapt-pkg-dev (<< 0.3.7)
 Provides: ${libapt-pkg:provides}
-Recommends: ubuntu-keyring
+Recommends: blankon-keyring
 Suggests: aptitude | synaptic | gnome-apt | wajig, dpkg-dev, apt-doc, bzip2,
lzma, gnupg
 Section: admin
 Description: Advanced front-end for dpkg
#### debian/rules
Tambahkan blankon-archive.gpg
@@ -213,6 +213,7 @@
 	cp debian/bugscript debian/$@/usr/share/bug/apt/script
 	cp debian/apt.logrotate debian/$@/etc/logrotate.d/apt
+	cp share/blankon-archive.gpg debian/$@/usr/share/$@
 	cp share/ubuntu-archive.gpg debian/$@/usr/share/$@
 	sed 's/^_//' share/apt-auth-failure.note > debian/$@/usr/share/$@/apt-auth-
failure.note
 	cp debian/apt.conf.autoremove debian/$@/etc/apt/apt.conf.d/01autoremove
### Penambahan berkas
#### blankon-archive.gpg
Diletakkan di debian/share/blankon-archive.gpg.
KategoriPemaket
Last modified on 06/19/2008 10:59:19 AM
#### 
    
 
 
 
 
 
---
 
