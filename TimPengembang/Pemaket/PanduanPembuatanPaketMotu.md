# Panduan Pembuatan Paket
Revisi 2011
### Kesatu
sudo apt-get install devscripts build-essential fakeroot debhelper gnupg
pbuilder dh-make dpkg-dev ubuntu-dev-tools
### Kedua
nano ~/.bashrc
(Tulis pada akhir baris):
export DEBFULLNAME="Joe Hacker" (Sesuaikan dengan nama Anda)
export DEBEMAIL="joe.hacker@isp.com" (Sesuaikan dengan e-mail Anda)
### Ketiga
source ~/.bashrc
export | grep DEB
### Keempat
gpg --gen-key
(Buat)
Real name: Joe Hacker (Nama = Nama Anda)
E-mail address: joe.hacker@isp.com (e-mail= e-mail Anda)
Passphrase: paswordpercobaanjanganditiru
### Kelima
source ~/.bashrc
ls
nano .pbuilderrc
(Tulis)
COMPONENTS="main restricted extras extras-restricted"
### Keenam
sudo pbuilder create
### Ketujuh
wget ftp://ftp.gnu.org/pub/gnu/ed/ed-1.5.tar.gz
tar xzf ed-1.5.tar.gz
cd ed-1.5
ls
dh_make -c gpl -f ../ed-1.5.tar.gz
(Ada pertanyaan berikut):
Type of package: single binary, multiple binary, library, kernel module or
cdbs?
[s/m/l/k/b] s
(Pilih "s")
cd debian
ls
rm *.ex *.EX docs info README.*
ls
### Kedelapan
(Masih di direktori debian, tulis):
dch -e
(Lalu isi seperti berikut):
ed (1.5-0blankon1) rote; urgency=low
 * Initial release.
-- Joe Hacker <joe.hacker@isp.com>  Thu, 20 Oct 2011 21:35:47 +0700
### Kesembilan
nano control
(Lengkapi seperti berikut):
Source: ed
Section: editors
Priority: extra
Maintainer: Joe Hacker <joe.hacker@isp.com>
Build-Depends: debhelper (>= 8.0.0), autotools-dev
Standards-Version: 3.9.2
Homepage: http://www.gnu.org/software/ed/
Vcs-Git: git://github.com/joe/ed.git
Vcs-Browser: https://joe.hacker@github.com/joe/ed.git
Package: ed
Architecture: any
Depends: ${shlibs:Depends}, ${misc:Depends}
Description: classic UNIX line editor
 The ed is a line-oriented text editor.  It is used to
 create, display, modify and otherwise manipulate text
 files.
### Kesepuluh
nano copyright
(Lalu isi sebagai berikut):
Format: http://svn.debian.org/wsvn/dep/web/deps/dep5.mdwn?op=file&rev=174
Upstream-Name: ed
Source: http://www.gnu.org/software/ed/
Files: *
Copyright: 1993, 1994, 2006, 2007, 2008, 2009, 2010, 2011 Free Software
Foundation, Inc
 2006, 2007, 2008, 2009 Backus <ericb@lsid.hp.com>
 1993, Karl Berry <kb@cs.umb.edu>
 1994, 2011 Theo Deraadt <deraadt@newt.fsa.ca>
 2006, 2007 Kaveh R. Ghazi <ghazi@noc.rutgers.edu>
 2010, 2011 Mike Haertel <mike@ichips.intel.com>
 2011 Francois Pinard <pinard@iro.umontreal.ca>
 1993, 1994  Rodney Ruddock <rodney@snowhite.cis.uoguelph.ca>
License: GPL-3.0+
Files: debian/*
Copyright: 2011 Joe Hacker <joe.hacker@isp.com>
License: GPL-3.0+
License: GPL-3.0+
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 .
 This package is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 .
 You should have received a copy of the GNU General Public License
 along with this program. If not, see <http://www.gnu.org/licenses/>.
### Kesebelas
cd ..
debuild -S
(Akan ditanya passphrase): passwordpercobaanjanganditiru
cd
(Kembali ke direktori file dsc ditempatkan)
sudo pbuilder build ed_1.5-0blankon1.dsc
less /var/cache/pbuilder/result/ed_1.5-0blankon1_i386.deb
### Keduabelas
cd /var/cache/pbuilder/result
sudo dpkg -i ed_1.5-0blankon1_i386.deb
(Silakan coba:)
KategoriPemaket
Last modified on 11/10/2011 11:37:18 PM
#### 
    
 
 
 
 
 
---
 
