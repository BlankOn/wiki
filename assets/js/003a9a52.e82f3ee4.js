"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[20022],{3905:function(a,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var k=t.createContext({}),p=function(a){var e=t.useContext(k),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},u=function(a){var e=p(a.components);return t.createElement(k.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,k=a.parentName,u=o(a,["components","mdxType","originalType","parentName"]),s=p(n),m=i,g=s["".concat(k,".").concat(m)]||s[m]||d[m]||r;return n?t.createElement(g,l(l({ref:e},u),{},{components:n})):t.createElement(g,l({ref:e},u))}));function m(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var k in e)hasOwnProperty.call(e,k)&&(o[k]=e[k]);o.originalType=a,o.mdxType="string"==typeof a?a:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},41224:function(a,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return k},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var t=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],o={},k="Mengenal Berkas-berkas Pada Direktori Debian",p={unversionedId:"TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",id:"TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",title:"Mengenal Berkas-berkas Pada Direktori Debian",description:"Direktori debian merupakan direktori khas distro debian/turunannya yang ditambahkan pada file sumber sebagai metadata dalam pembuatan paket. Direktori debian terdiri dari banyak file, file yang wajib ada adalah: changelog, control, copyright dan rules.",source:"@site/wiki/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian.md",sourceDirName:"TimPengembang/Dokumentasi/Kelas",slug:"/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",permalink:"/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian.md",tags:[],version:"current",frontMatter:{}},u={},d=[{value:"Persiapan",id:"persiapan",level:4}],s={toc:d};function m(a){var e=a.components,n=(0,i.Z)(a,l);return(0,r.kt)("wrapper",(0,t.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mengenal-berkas-berkas-pada-direktori-debian"},"Mengenal Berkas-berkas Pada Direktori Debian"),(0,r.kt)("p",null,"Direktori debian merupakan direktori khas distro debian/turunannya yang ditambahkan pada file sumber sebagai metadata dalam pembuatan paket. Direktori debian terdiri dari banyak file, file yang wajib ada adalah: changelog, control, copyright dan rules."),(0,r.kt)("h4",{id:"persiapan"},"Persiapan"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Buat identitas pemaket\n$ vim .bashrc")),(0,r.kt)("p",null,'(tambahkan pada akhir baris:)\nexport DEBFULLNAME="Joe Hacker" (sesuaikan dengan nama Anda)\nexport DEBEMAIL="',(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),'" (sesuaikan dengan e-mail Anda)'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    $ source .bashrc\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install paket-paket yang dibutuhkan\n$ sudo apt-get install build-essential devscripts debhelper dh-make fakeroot lintian gnupg")),(0,r.kt)("p",null,"build-essensial: paket meta yang akan menginstall paket-paket dasar yang dibutuhkan untuk development kaya gcc, make, libc6-dev, dpkg-dev, dll.\ndevscripts: kumpulan tools yang membuat hidup pemaket jadi lebih menyenangkan, seperti dch (tool edit changelog), debuild (bangun paket) dsb.\ndebhelper: kumpulan script2 yang digunakan di berkas debian/rules\ndh-make: tool untuk mendebiankan paket kode sumber (isinya template2 untuk direktori debian)\nlintian: nah ini nih si tukang ngecek paket apakah sudah sesuai tidak dengan\ngnupg: dibutuhkan untuk menandatangi paket debian\nfakeroot: biar bisa ngompail tanpa akses root sebenernya"),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Buat gpg key",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"$ gpg --gen-key")))),(0,r.kt)("p",null,"Real name: Joe Hacker\nE-mail address: ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nPassphrase: paswordpercobaanjanganditiru"),(0,r.kt)("p",null,"FYI di debian dan ubuntu setiap paket yang akan dikirim ke pabrik paket perlu ditandatangani oleh pemaket, nanti robot pabrik akan ngecek apakah tandatanganya benar2 milik anda. klo sudah beres HARAP BACKUP direktori .gnupg ke tempat yg aman karena kunci gpg adalah satu-satunya identitas Anda agar dapat dikenal oleh irgsh"),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Download paket yang akan dijadikan contoh pada lokakarya ini. letakkan pada direktori tertentu",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"$ mkdir -p lokakarya\n$ cd lokakarya\n$ wget ",(0,r.kt)("a",{parentName:"p",href:"http://cecunguk.blankonlinux.or.id/~imtheface/lokakarya/jao-theme-1.8.tar.gz"},"http://cecunguk.blankonlinux.or.id/~imtheface/lokakarya/jao-theme-1.8.tar.gz"),"\n$ tar xzf jao-theme-1.8.tar.gz\n$ cd jao-theme-1.8\n$ ls")))),(0,r.kt)("p",null,"Terlihat masih belum ada direktori debian. Untuk dapat membuat paket debian dari jao, maka kita perlu mendebiankan kode sumber jao-theme dengan menambahkan direktori debian beserta isi-isinya. File-file tersebut bisa dibuat manual tapi alangkah enaknya jika dibuat secara otomatis menggunakan bantuan dh-make."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Buat direktori debian dengan menggunakan dh_make\n")),(0,r.kt)("p",null,"$ dh_make -c gpl -f ../jao-theme-1.8.tar.gz\nType of package: single binary, multiple binary, library, kernel module or cdbs?\n","[s/m/l/k/b]"," s"),(0,r.kt)("p",null,"Maintainer name : Joe Hacker\nEmail-Address   : ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nDate            : Thu, 13 Nov 2008 05:37:17 +0700\nPackage Name    : jao-theme\nVersion         : 1.8\nLicense         : gpl\nType of Package : Single\nHit ",(0,r.kt)("inlineCode",{parentName:"p"},"<enter>")," to confirm:\nDone. Please edit the files in the debian/ subdirectory now. jao-theme\nuses a configure script, so you probably don't have to edit the Makefiles."),(0,r.kt)("p",null,"Proses ini akan membuat direktori debian beserta isinya dari template yang telah disediakan. Serta membuat file jao-theme_1.8.orig.tar.gz sejajar dengan direktori jao-theme-1.8.tar.gz"),(0,r.kt)("p",null,"Di debian ada policy bahwa kode sumber dari upstream tidak boleh kita boleh kita ubah secara langsung, setiap perubahan yg kita lakukan akan dilakukan di dalam direktori debian. Nantinya isi dari direktori debian itu kalau paket sudah dibangun akan di kompres menjadi nama-paket.diff.gz\nFile control"),(0,r.kt)("p",null,"Secara umum file ini berisi:"),(0,r.kt)("p",null,"Source: jao-theme\nSection: unknown\nPriority: extra\nMaintainer: Joe Hacker ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nBuild-Depends: debhelper (>= 5), autotools-dev\nStandards-Version: 3.7.2"),(0,r.kt)("p",null,"Package: jao-theme\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends}\nDescription: ",(0,r.kt)("inlineCode",{parentName:"p"},"<insert up to 60 chars description>"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"<insert long description, indented with spaces>")),(0,r.kt)("p",null,"Isi control itu terdiri dari 2 bagian:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Bagian source\n")),(0,r.kt)("p",null,"Source: nama-paket"),(0,r.kt)("p",null,"Section: itu entri dimana paket debian mau ditaro"),(0,r.kt)("p",null,"klo di debian policy section itu terdiri dari beberapa: admin, comm, devel, doc, editors, electronics, embedded, games, gnome, graphics, hamradio, interpreters, kde, libs, libdevel, mail, math, misc, net, news, oldlibs, otherosfs, perl, python, science, shells, sound, tex, text, utils, web, x11. (\u200b",(0,r.kt)("a",{parentName:"p",href:"http://www.debian.org/doc/debian-policy/ch-archive.html#s-subsections"},"http://www.debian.org/doc/debian-policy/ch-archive.html#s-subsections"),")"),(0,r.kt)("p",null,'Priority: menunjukkan tingkat pentingnya paket. Dapat berisi: required, important, standard, optional, extra. Paket-paket biasanya sih menggunakan priority "optional" saja, di atas priority "optional" hanya digunakan paket-paket penting. Kalau di debian perlu mendapatkan persetujuan dari para bos untuk bisa menggunakan priority di atas "optional". (\u200b',(0,r.kt)("a",{parentName:"p",href:"http://www.debian.org/doc/debian-policy/ch-archive.html#s-priorities"},"http://www.debian.org/doc/debian-policy/ch-archive.html#s-priorities"),")"),(0,r.kt)("p",null,"Maintainer: nama orang yang memaketkan."),(0,r.kt)("p",null,"Build-Depends: Paket yg dibutuhkan untuk membuat paket tersebut."),(0,r.kt)("p",null,"Bagaimana cari tahu isinya build-depends?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"liat README\n\ntanya pengelola/pembuat\n\nliat Makefile.am\n")),(0,r.kt)("p",null,"Standars-Version: Versi dari dh-make yang digunakan"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Bagian binary\n")),(0,r.kt)("p",null,"Bagian binary bisa menghasilkan 1 macam paket atau lebih tergantung kebutuhan, kadang-kadang paket sumber kita perlu pecah jadi beberapa paket binary. contohnya seperti OpenOfficeorg?, kenapa harus dipecah OOo? agar kita bisa pilih paket2 mana saja yg ingin kita install sesuai kebutuhan. klo cuman butuh OOo writer aja buat apa harus install seluruh paket OOo, makanya lebih baik dipecah saja. klo jao-theme sih gak perlu dipecah2."),(0,r.kt)("p",null,"Package: nama paket"),(0,r.kt)("p",null,"Architecture: menunjukkan arsitektur yang akan dipakai"),(0,r.kt)("p",null,"bisa menggunakan:"),(0,r.kt)("p",null,"i386 = kalau ingin hanya arsitektur i386 saja"),(0,r.kt)("p",null,"amd64 = kalau ingin hanya arsitektur i386 saja"),(0,r.kt)("p",null,"i386, amd64 = kalau ingin kedua-duanya"),(0,r.kt)("p",null,"any = semua arsitektur yang tersedia akan dibuat paketnya (i386, amd64, powerpc, sparc, dll)"),(0,r.kt)("p",null,"all = untuk paket yg bisa diinstall di semua arsitektur (arsitektur independen)."),(0,r.kt)("p",null,'Depends: paket-paket yg dibutuhkan agar paket kita dapat berjalan dengan baik. bagaimana menentukan "Depends" sebuah paket? hal ini dapat diketahui hanya dengan mengisinya dengan ${shlibs:Depends}, ${misc:Depends} nanti klo pas kita bangun paket parameter2 itu akan diganti sendiri oleh script debhelper menjadi paket-paket Dependencies paket tersebut. tapi kadang2 kita juga perlu tambah manual "Depends" itu. untuk jao-theme selain yg udah ada sekarang, silakan tambah Depends: rae-icon-theme'),(0,r.kt)("p",null,"Description: berisi deskripsi singkat tentang paket (max 60 karakter). Baris selanjutya berisi deskkripsi panjang tentang paket (harus diawali dengan spasi dan tiap baris max 80 karakter)"),(0,r.kt)("p",null,"Sehingga file control akan seperti:"),(0,r.kt)("p",null,"Source: jao-theme\nSection: x11\nPriority: extra\nMaintainer: Joe Hacker ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nBuild-Depends: debhelper (>= 5), autotools-dev\nStandards-Version: 3.7.2"),(0,r.kt)("p",null,"Package: jao-theme\nArchitecture: all\nDepends: ${shlibs:Depends}, ${misc:Depends}, rae-icon-theme\nDescription: jao theme, tema khusus untuk blankon\nquick brown fox jumps over the lazy dog\nquick brown fox jumps over the lazy dog\n.quick brown fox jumps over the lazy dog\nquick brown fox jumps over the lazy dog"),(0,r.kt)("p",null,"File changelog"),(0,r.kt)("p",null,"file changelog sangat penting bagi pemaket. file ini berisi versi paket, catatan sejarah perubahan paket, siapa yang merubah dan informasi penting lainya."),(0,r.kt)("p",null,"file ini sudah digenerate otomatis pas kita jalankan dh_make tadi. atau jika ingin yang baru dapat menggunakan tools dch."),(0,r.kt)("p",null,"hapus changelog lama, lalu generate yang baru"),(0,r.kt)("p",null,"$ pwd\njao-theme-1.8\n$ rm -rf debian/changelog\n$ dch --create"),(0,r.kt)("p",null,"akan dibuatkan file changelog baru dengan format:"),(0,r.kt)("p",null,"PACKAGE (VERSION) UNRELEASED; urgency=low"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Initial release. (Closes: #XXXXXX)"),(0,r.kt)("p",{parentName:"li"},"-- Joe Hacker ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"  Thu, 13 Nov 2008 06:32:18 +0700"))),(0,r.kt)("p",null,"Secara umum file changelog terdiri dari 3 bagian:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Bagian atas\n")),(0,r.kt)("p",null,"PACKAGE: isi dengan nama paket kode sumber (jao-theme)"),(0,r.kt)("p",null,"VERSION: versi yang akan digunakan (1.8-1)"),(0,r.kt)("p",null,"1.8-1 itu artinya 1.8 versi upstream -1 itu versi revisi debian"),(0,r.kt)("p",null,"UNREALEASED: berisi distribusi yang akan digunakan"),(0,r.kt)("p",null,"kalau di debian bisa diisi dengan: stable, unstable, testing, etch dll kalau di ubuntu bisa diisi dengan: gutsy, hardy, intrepid dll kalau di blankon bisa diisi dengan: konde, lontara, meulogoe dll"),(0,r.kt)("p",null,"urgency: menunjukkan seberapa penting kan update yg kita lakukan"),(0,r.kt)("p",null,"bisa diisi dengan: urgency: pilihannya low, medium, high, emergency, critical"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Bagian tengah\n")),(0,r.kt)("p",null,"isinya ini deskripsi perubahan yg kita lakukan di paket tsb, isi deskripsi yg baik itu harus dapat menjelaskan apa-apa saja yg kita ubah dan alasannya kenapa? contoh yang baik lihat di: \u200b",(0,r.kt)("a",{parentName:"p",href:"http://dev.blankonlinux.or.id/browser/meuligoe/gdm/debian/changelog.ubuntu"},"http://dev.blankonlinux.or.id/browser/meuligoe/gdm/debian/changelog.ubuntu")),(0,r.kt)("p",null,"contoh: sekarang coba edit file AUTHORS lalu tambah authors di situ Tim Artis BlankOn ",(0,r.kt)("a",{parentName:"p",href:"mailto:BlankOn@googlegroup.com"},"BlankOn@googlegroup.com")),(0,r.kt)("p",null,"karena kita mengubah sesuatu di berkas debian, maka perubahan itu harus ditulis di changelog bagian tengah"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"AUTHORS: Tambah author Tim Artis BlankOn <BlankOn@googlegroup.com>\n\nBagian terakhir\n")),(0,r.kt)("p",null,"bagian bawah isinya itu info tentang siapa yg mengubah paket ini, dan tanggal berapa diubahnya. nama (alamat email) itu diambil dari parameter DEBFULLNAME dan DEBEMAIL yg kita set tadi."),(0,r.kt)("p",null,"sehingga changelog menjadi:"),(0,r.kt)("p",null,"jao-theme (1.8-1) meuligoe; urgency=low"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Initial release.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AUTHORS: Tambah author Tim Artis BlankOn ",(0,r.kt)("a",{parentName:"p",href:"mailto:BlankOn@googlegroup.com"},"BlankOn@googlegroup.com")),(0,r.kt)("p",{parentName:"li"},"-- Joe Hacker ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"  Wed, 13 Nov 2008 22:45:09 +0700"))),(0,r.kt)("p",null,"File copyright"),(0,r.kt)("p",null,"File copyright itu salah satu file terpenting di dir debian, isinya yah tentu saja yg berhubungan dengan hak cipta. di debian setiap paket yg masuk ke dalam pabrik paket akan di cek terlebih dahulu apakan lisensi yg digunakan sesuai tidak dengan Debian Free Software Guideline"),(0,r.kt)("p",null,"File ini berisi keterangan tentang author, sumbernya didonwload dari mana, lisensinya apa dll. lisensi yang dituliskan dalam file ini cuma sebagian saja, selengkapnya bisa dibaca di file lain (biasanya di /usr/share/common-licenses/)."),(0,r.kt)("p",null,"Untuk mengetahui lisensi suatu paket dapat di lihat file COPYING atau juga kode sumbernya, karena kadang-kadang satu paket terdiri dari beberapa lisensi."),(0,r.kt)("p",null,"Contoh: paket blankon-sounds menggunakan 2 lisensi, 1 GPL untuk karya om blex dan 1 lagi CC untuk karya2 dari pengembang ubuntu. Yang CC karena gak ada di /usr/share/common-licenses/ maka perlu ditulis lengkap isi lisensinya. \u200b",(0,r.kt)("a",{parentName:"p",href:"http://dev.blankonlinux.or.id/browser/meuligoe/blankon-sounds/debian/copyright"},"http://dev.blankonlinux.or.id/browser/meuligoe/blankon-sounds/debian/copyright")),(0,r.kt)("p",null,"This package was debianized by Joe Hacker ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com")," on\nWed, 12 Nov 2008 13:24:36 +0700."),(0,r.kt)("p",null,"It was downloaded from ",(0,r.kt)("a",{parentName:"p",href:"http://dev.blankonlinux.or.id/"},"http://dev.blankonlinux.or.id/")),(0,r.kt)("p",null,"Upstream Author(s):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Farhan Perdana\n")),(0,r.kt)("p",null,"Copyright:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    (C) 2008 Farhan Perdana <blackdramon@gmail.com>\n    License: GPL Version 3\n")),(0,r.kt)("p",null,"License:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"This package is free software; you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation; either version 2 of the License, or\n(at your option) any later version.\n\nThis package is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License\nalong with this package; if not, write to the Free Software\nFoundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA\n")),(0,r.kt)("p",null,"On Debian systems, the complete text of the GNU General\nPublic License can be found in `/usr/share/common-licenses/GPL'."),(0,r.kt)("p",null,"The Debian packaging is (C) 2008, Joe Hacker ",(0,r.kt)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com")," and\nis licensed under the GPL, see above."),(0,r.kt)("h1",{id:"please-also-look-if-there-are-files-or-directories-which-have-a"},"Please also look if there are files or directories which have a"),(0,r.kt)("h1",{id:"different-copyrightlicense-attached-and-list-them-here"},"different copyright/license attached and list them here."),(0,r.kt)("p",null,"File rules"),(0,r.kt)("p",null,"File rules itu file Makefile untuk paket debian kira2 fungsinya sama dengan file Makefile nya autoconf. Perintah-perintah untuk membangun paket kita tulis di sini, di debian sih cukup enak dah banyak tool & script untuk mempermudah membangun paket salah satunya debhelper. Kita tinggal tulis aja di rules script-script debhelper itu yg berawalan dh_*, ini otomatis dibuatkan saat kita menjalankan dh_make diawal."),(0,r.kt)("p",null,"Selain menggunakan debhelper, ada juga script lain untuk membuat rules. namanya cdbs (common debian build system).\nMembangun paket"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Hapus file-file di direktori debian selain control, changelog, rules, copyright (tidak dihapus juga tidak apa-apa)\n")),(0,r.kt)("p",null,"$ pwd\ndebian\n$ rm ",(0,r.kt)("em",{parentName:"p"},".ex "),".EX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Kembali ke direktori jao-theme, lalu jalankan:\n")),(0,r.kt)("p",null,"$ pwd\njao-theme-1.8\n$ dpkg-buildpackage -rfakeroot\n...\n... (dipotong)\n...\ndpkg-genchanges\ndpkg-genchanges: including full source code in upload\ndpkg-buildpackage: full upload (original source is included)\n(WARNING: Failed to sign .dsc and .changes file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Abaikan saja WARNING diatas. maka akan terbentuk file-file:\n")),(0,r.kt)("p",null,"jao-theme_1.8-1_all.deb\njao-theme_1.8-1_amd64.changes\njao-theme_1.8-1.diff.gz\njao-theme_1.8-1.dsc"),(0,r.kt)("p",null,"NOTE: berdasarkan lokakarya tanggal 12-11-08 di #blankon by imtheface"),(0,r.kt)("p",null,"oiya...ada PRnya juga:"),(0,r.kt)("p",null,"\u200b",(0,r.kt)("a",{parentName:"p",href:"http://www.debian.org/doc/debian-policy/"},"http://www.debian.org/doc/debian-policy/")),(0,r.kt)("p",null,"\u200b",(0,r.kt)("a",{parentName:"p",href:"http://www.debian.org/doc/maint-guide/"},"http://www.debian.org/doc/maint-guide/")),(0,r.kt)("p",null,"\u200b",(0,r.kt)("a",{parentName:"p",href:"http://www.debian.org/doc/developers-reference/"},"http://www.debian.org/doc/developers-reference/")))}m.isMDXComponent=!0}}]);