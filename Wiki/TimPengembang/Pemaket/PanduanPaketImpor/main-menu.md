## Panduan Paket Impor # main-menu
### paket main-menu
    * ambil paket main-menu dari ubuntu dan ubah kata-kata Ubuntu di berkas
      debian/*.po
      #. Type: text
      #. Description
      #. :sl1:
      #: ../main-menu.templates:1001
      msgid "Ubuntu installer main menu"
      msgstr "Menu Utama Instalasi Ubuntu"
tips, gnakan bash/shell untuk mempercepat penyuntingan. contoh script yang
digunakan
#!/bin/bash
BASE=/home/udienz/devel/main-menu/main-menu/debian/
PO=$BASE/po
tmp=/tmp/po.txt
#cd $PO
find . $PO -name *.po > $tmp
cat $tmp | while read teks
	do
        "processing $teks file"
	cat $teks | sed -e 's/Ubuntu/BlankOn/g' > $teks.tmp
	rm $teks
	mv $teks.tmp $teks
	done
Last modified on 10/11/2009 04:22:36 PM
#### 
    
 
 
 
 
 
---
 
