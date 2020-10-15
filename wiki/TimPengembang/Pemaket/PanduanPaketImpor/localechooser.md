## Panduan Paket Impor # localechooser
## Paket Localechooser
Agar pemilihan bahasa otomatis memilih ke Bahasa Indonesia
diff -Nurp -x .bzr -x 'changelog*' -x 'localechooser_2.*' jaunty/localechooser/
debian/localechooser.isinstallable nanggar/localechooser/debian/
localechooser.isinstallable
 jaunty/localechooser/debian/localechooser.isinstallable	2007-03-06 17:33:
12.000000000 +0700
+++ nanggar/localechooser/debian/localechooser.isinstallable	2009-10-11 16:14:
49.000000000 +0700
@@ -1,4 +1,5 @@
 #!/bin/sh
 . /usr/share/debconf/confmodule
 db_get auto-install/enable && [ "$RET" = true ] && exit 1
+db_get localechooser/skip && [ "$RET" = true ] && exit 1
 exit 0
diff -Nurp -x .bzr -x 'changelog*' -x 'localechooser_2.*' jaunty/localechooser/
debian/localechooser.templates-in nanggar/localechooser/debian/
localechooser.templates-in
 jaunty/localechooser/debian/localechooser.templates-in	2008-06-14 04:16:
27.000000000 +0700
+++ nanggar/localechooser/debian/localechooser.templates-in	2009-10-11 16:14:
49.000000000 +0700
@@ -159,3 +159,9 @@ _Description: Choose other locales to be
 Template: babelbox/info
 Type: title
 Description: Demo - ${LANGNAME}
+
+Template: localechooser/skip
+Type: boolean
+Default: false
+Description: True to skip
+ Skip localechooser?
diff -Nurp -x .bzr -x 'changelog*' -x 'localechooser_2.*' jaunty/localechooser/
localechooser nanggar/localechooser/localechooser
 jaunty/localechooser/localechooser	2009-02-26 05:42:26.000000000 +0700
+++ nanggar/localechooser/localechooser	2009-10-11 16:14:49.000000000 +0700
@@ -27,6 +27,7 @@ fi
 LANGUAGELISTFILE=/usr/share/localechooser/languagelist
 LANGUAGELISTDATA=/usr/share/localechooser/languagelist.data.gz
+LANGUAGELIST=id
 ORIG_IFS="$IFS"
 NL="
 "
Last modified on 10/11/2009 05:18:58 PM
#### 
    
 
 
 
 
 
---
 
