## Panduan Paket Impor # Kernel
Source berada di git rani
git clone git@rani/pattimura/linux
Cara merge dengan beberapa Pohon
     Menambahkan pohon
     git remote add <nama-pemilik-pohon> <tautan-pohon>
Misal
git remote add linus git://git.kernel.org/pub/scm/linux/kernel/git/torvalds/
linux-2.6.git
     Menarik dari pohon
git fetch nama-pemilik-pohon
git reberse nama-pemilik-pohon
Perawatan BlankOn
Bermain di debian.master
dan jika ada perubahan di linus maka dan ini disimpan di debian.master/config/
fakeroot debian/rules updateconfigs
Pemaketan
fakeroot debian/rules clean
fakeroot debian/rules startnewrelease
JIka ingin membuat linux-image saja
fakeroot debian/rules binary-generic
Membuat KOmplit untuk masuk repo
CONCURENCY_LEVEL=<jumlah-prosesor> skipabi=true dpkg-buildpackage -rfakeroot  -
I.git -I.gitignore -i'\.git.*'
Last modified on 06/20/2011 10:26:41 AM
#### 
    
 
 
 
 
 
---
 
