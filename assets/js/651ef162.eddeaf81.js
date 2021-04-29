(window.webpackJsonp=window.webpackJsonp||[]).push([[387],{1050:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return k}));var t=n(0),i=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function b(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var a=i.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):b(b({},a),e)),n},d=function(e){var a=u(e.components);return i.a.createElement(p.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},c=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=t,k=d["".concat(l,".").concat(c)]||d[c]||s[c]||r;return n?i.a.createElement(k,b(b({ref:a},p),{},{components:n})):i.a.createElement(k,b({ref:a},p))}));function k(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,l=new Array(r);l[0]=c;var b={};for(var o in a)hasOwnProperty.call(a,o)&&(b[o]=a[o]);b.originalType=e,b.mdxType="string"==typeof e?e:t,l[1]=b;for(var p=2;p<r;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},457:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return l})),n.d(a,"metadata",(function(){return b})),n.d(a,"toc",(function(){return o})),n.d(a,"default",(function(){return u}));var t=n(3),i=n(7),r=(n(0),n(1050)),l={},b={unversionedId:"TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",id:"TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",isDocsHomePage:!1,title:"Mengenal Berkas-berkas Pada Direktori Debian",description:"Direktori debian merupakan direktori khas distro debian/turunannya yang ditambahkan pada file sumber sebagai metadata dalam pembuatan paket. Direktori debian terdiri dari banyak file, file yang wajib ada adalah: changelog, control, copyright dan rules.",source:"@site/Wiki/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian.md",sourceDirName:"TimPengembang/Dokumentasi/Kelas",slug:"/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",permalink:"/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Dokumentasi/Kelas/MengenalBerkasPadaDirektoriDebian.md",version:"current",frontMatter:{}},o=[],p={toc:o};function u(e){var a=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Direktori debian merupakan direktori khas distro debian/turunannya yang ditambahkan pada file sumber sebagai metadata dalam pembuatan paket. Direktori debian terdiri dari banyak file, file yang wajib ada adalah: changelog, control, copyright dan rules."),Object(r.b)("h4",{id:"persiapan"},"Persiapan"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Buat identitas pemaket\n$ vim .bashrc")),Object(r.b)("p",null,'(tambahkan pada akhir baris:)\nexport DEBFULLNAME="Joe Hacker" (sesuaikan dengan nama Anda)\nexport DEBEMAIL="',Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),'" (sesuaikan dengan e-mail Anda)'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    $ source .bashrc\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Install paket-paket yang dibutuhkan\n$ sudo apt-get install build-essential devscripts debhelper dh-make fakeroot lintian gnupg")),Object(r.b)("p",null,"build-essensial: paket meta yang akan menginstall paket-paket dasar yang dibutuhkan untuk development kaya gcc, make, libc6-dev, dpkg-dev, dll.\ndevscripts: kumpulan tools yang membuat hidup pemaket jadi lebih menyenangkan, seperti dch (tool edit changelog), debuild (bangun paket) dsb.\ndebhelper: kumpulan script2 yang digunakan di berkas debian/rules\ndh-make: tool untuk mendebiankan paket kode sumber (isinya template2 untuk direktori debian)\nlintian: nah ini nih si tukang ngecek paket apakah sudah sesuai tidak dengan\ngnupg: dibutuhkan untuk menandatangi paket debian\nfakeroot: biar bisa ngompail tanpa akses root sebenernya"),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Buat gpg key",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"$ gpg --gen-key")))),Object(r.b)("p",null,"Real name: Joe Hacker\nE-mail address: ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nPassphrase: paswordpercobaanjanganditiru"),Object(r.b)("p",null,"FYI di debian dan ubuntu setiap paket yang akan dikirim ke pabrik paket perlu ditandatangani oleh pemaket, nanti robot pabrik akan ngecek apakah tandatanganya benar2 milik anda. klo sudah beres HARAP BACKUP direktori .gnupg ke tempat yg aman karena kunci gpg adalah satu-satunya identitas Anda agar dapat dikenal oleh irgsh"),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Download paket yang akan dijadikan contoh pada lokakarya ini. letakkan pada direktori tertentu",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"$ mkdir -p lokakarya\n$ cd lokakarya\n$ wget ",Object(r.b)("a",{parentName:"p",href:"http://cecunguk.blankonlinux.or.id/~imtheface/lokakarya/jao-theme-1.8.tar.gz"},"http://cecunguk.blankonlinux.or.id/~imtheface/lokakarya/jao-theme-1.8.tar.gz"),"\n$ tar xzf jao-theme-1.8.tar.gz\n$ cd jao-theme-1.8\n$ ls")))),Object(r.b)("p",null,"Terlihat masih belum ada direktori debian. Untuk dapat membuat paket debian dari jao, maka kita perlu mendebiankan kode sumber jao-theme dengan menambahkan direktori debian beserta isi-isinya. File-file tersebut bisa dibuat manual tapi alangkah enaknya jika dibuat secara otomatis menggunakan bantuan dh-make."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Buat direktori debian dengan menggunakan dh_make\n")),Object(r.b)("p",null,"$ dh_make -c gpl -f ../jao-theme-1.8.tar.gz\nType of package: single binary, multiple binary, library, kernel module or cdbs?\n","[s/m/l/k/b]"," s"),Object(r.b)("p",null,"Maintainer name : Joe Hacker\nEmail-Address   : ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nDate            : Thu, 13 Nov 2008 05:37:17 +0700\nPackage Name    : jao-theme\nVersion         : 1.8\nLicense         : gpl\nType of Package : Single\nHit ",Object(r.b)("inlineCode",{parentName:"p"},"<enter>")," to confirm:\nDone. Please edit the files in the debian/ subdirectory now. jao-theme\nuses a configure script, so you probably don't have to edit the Makefiles."),Object(r.b)("p",null,"Proses ini akan membuat direktori debian beserta isinya dari template yang telah disediakan. Serta membuat file jao-theme_1.8.orig.tar.gz sejajar dengan direktori jao-theme-1.8.tar.gz"),Object(r.b)("p",null,"Di debian ada policy bahwa kode sumber dari upstream tidak boleh kita boleh kita ubah secara langsung, setiap perubahan yg kita lakukan akan dilakukan di dalam direktori debian. Nantinya isi dari direktori debian itu kalau paket sudah dibangun akan di kompres menjadi nama-paket.diff.gz\nFile control"),Object(r.b)("p",null,"Secara umum file ini berisi:"),Object(r.b)("p",null,"Source: jao-theme\nSection: unknown\nPriority: extra\nMaintainer: Joe Hacker ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nBuild-Depends: debhelper (>= 5), autotools-dev\nStandards-Version: 3.7.2"),Object(r.b)("p",null,"Package: jao-theme\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends}\nDescription: ",Object(r.b)("inlineCode",{parentName:"p"},"<insert up to 60 chars description>"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"<insert long description, indented with spaces>")),Object(r.b)("p",null,"Isi control itu terdiri dari 2 bagian:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Bagian source\n")),Object(r.b)("p",null,"Source: nama-paket"),Object(r.b)("p",null,"Section: itu entri dimana paket debian mau ditaro"),Object(r.b)("p",null,"klo di debian policy section itu terdiri dari beberapa: admin, comm, devel, doc, editors, electronics, embedded, games, gnome, graphics, hamradio, interpreters, kde, libs, libdevel, mail, math, misc, net, news, oldlibs, otherosfs, perl, python, science, shells, sound, tex, text, utils, web, x11. (\u200b",Object(r.b)("a",{parentName:"p",href:"http://www.debian.org/doc/debian-policy/ch-archive.html#s-subsections"},"http://www.debian.org/doc/debian-policy/ch-archive.html#s-subsections"),")"),Object(r.b)("p",null,'Priority: menunjukkan tingkat pentingnya paket. Dapat berisi: required, important, standard, optional, extra. Paket-paket biasanya sih menggunakan priority "optional" saja, di atas priority "optional" hanya digunakan paket-paket penting. Kalau di debian perlu mendapatkan persetujuan dari para bos untuk bisa menggunakan priority di atas "optional". (\u200b',Object(r.b)("a",{parentName:"p",href:"http://www.debian.org/doc/debian-policy/ch-archive.html#s-priorities"},"http://www.debian.org/doc/debian-policy/ch-archive.html#s-priorities"),")"),Object(r.b)("p",null,"Maintainer: nama orang yang memaketkan."),Object(r.b)("p",null,"Build-Depends: Paket yg dibutuhkan untuk membuat paket tersebut."),Object(r.b)("p",null,"Bagaimana cari tahu isinya build-depends?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"liat README\n\ntanya pengelola/pembuat\n\nliat Makefile.am\n")),Object(r.b)("p",null,"Standars-Version: Versi dari dh-make yang digunakan"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Bagian binary\n")),Object(r.b)("p",null,"Bagian binary bisa menghasilkan 1 macam paket atau lebih tergantung kebutuhan, kadang-kadang paket sumber kita perlu pecah jadi beberapa paket binary. contohnya seperti OpenOfficeorg?, kenapa harus dipecah OOo? agar kita bisa pilih paket2 mana saja yg ingin kita install sesuai kebutuhan. klo cuman butuh OOo writer aja buat apa harus install seluruh paket OOo, makanya lebih baik dipecah saja. klo jao-theme sih gak perlu dipecah2."),Object(r.b)("p",null,"Package: nama paket"),Object(r.b)("p",null,"Architecture: menunjukkan arsitektur yang akan dipakai"),Object(r.b)("p",null,"bisa menggunakan:"),Object(r.b)("p",null,"i386 = kalau ingin hanya arsitektur i386 saja"),Object(r.b)("p",null,"amd64 = kalau ingin hanya arsitektur i386 saja"),Object(r.b)("p",null,"i386, amd64 = kalau ingin kedua-duanya"),Object(r.b)("p",null,"any = semua arsitektur yang tersedia akan dibuat paketnya (i386, amd64, powerpc, sparc, dll)"),Object(r.b)("p",null,"all = untuk paket yg bisa diinstall di semua arsitektur (arsitektur independen)."),Object(r.b)("p",null,'Depends: paket-paket yg dibutuhkan agar paket kita dapat berjalan dengan baik. bagaimana menentukan "Depends" sebuah paket? hal ini dapat diketahui hanya dengan mengisinya dengan ${shlibs:Depends}, ${misc:Depends} nanti klo pas kita bangun paket parameter2 itu akan diganti sendiri oleh script debhelper menjadi paket-paket Dependencies paket tersebut. tapi kadang2 kita juga perlu tambah manual "Depends" itu. untuk jao-theme selain yg udah ada sekarang, silakan tambah Depends: rae-icon-theme'),Object(r.b)("p",null,"Description: berisi deskripsi singkat tentang paket (max 60 karakter). Baris selanjutya berisi deskkripsi panjang tentang paket (harus diawali dengan spasi dan tiap baris max 80 karakter)"),Object(r.b)("p",null,"Sehingga file control akan seperti:"),Object(r.b)("p",null,"Source: jao-theme\nSection: x11\nPriority: extra\nMaintainer: Joe Hacker ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nBuild-Depends: debhelper (>= 5), autotools-dev\nStandards-Version: 3.7.2"),Object(r.b)("p",null,"Package: jao-theme\nArchitecture: all\nDepends: ${shlibs:Depends}, ${misc:Depends}, rae-icon-theme\nDescription: jao theme, tema khusus untuk blankon\nquick brown fox jumps over the lazy dog\nquick brown fox jumps over the lazy dog\n.quick brown fox jumps over the lazy dog\nquick brown fox jumps over the lazy dog"),Object(r.b)("p",null,"File changelog"),Object(r.b)("p",null,"file changelog sangat penting bagi pemaket. file ini berisi versi paket, catatan sejarah perubahan paket, siapa yang merubah dan informasi penting lainya."),Object(r.b)("p",null,"file ini sudah digenerate otomatis pas kita jalankan dh_make tadi. atau jika ingin yang baru dapat menggunakan tools dch."),Object(r.b)("p",null,"hapus changelog lama, lalu generate yang baru"),Object(r.b)("p",null,"$ pwd\njao-theme-1.8\n$ rm -rf debian/changelog\n$ dch --create"),Object(r.b)("p",null,"akan dibuatkan file changelog baru dengan format:"),Object(r.b)("p",null,"PACKAGE (VERSION) UNRELEASED; urgency=low"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Initial release. (Closes: #XXXXXX)"),Object(r.b)("p",{parentName:"li"},"-- Joe Hacker ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"  Thu, 13 Nov 2008 06:32:18 +0700"))),Object(r.b)("p",null,"Secara umum file changelog terdiri dari 3 bagian:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Bagian atas\n")),Object(r.b)("p",null,"PACKAGE: isi dengan nama paket kode sumber (jao-theme)"),Object(r.b)("p",null,"VERSION: versi yang akan digunakan (1.8-1)"),Object(r.b)("p",null,"1.8-1 itu artinya 1.8 versi upstream -1 itu versi revisi debian"),Object(r.b)("p",null,"UNREALEASED: berisi distribusi yang akan digunakan"),Object(r.b)("p",null,"kalau di debian bisa diisi dengan: stable, unstable, testing, etch dll kalau di ubuntu bisa diisi dengan: gutsy, hardy, intrepid dll kalau di blankon bisa diisi dengan: konde, lontara, meulogoe dll"),Object(r.b)("p",null,"urgency: menunjukkan seberapa penting kan update yg kita lakukan"),Object(r.b)("p",null,"bisa diisi dengan: urgency: pilihannya low, medium, high, emergency, critical"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Bagian tengah\n")),Object(r.b)("p",null,"isinya ini deskripsi perubahan yg kita lakukan di paket tsb, isi deskripsi yg baik itu harus dapat menjelaskan apa-apa saja yg kita ubah dan alasannya kenapa? contoh yang baik lihat di: \u200b",Object(r.b)("a",{parentName:"p",href:"http://dev.blankonlinux.or.id/browser/meuligoe/gdm/debian/changelog.ubuntu"},"http://dev.blankonlinux.or.id/browser/meuligoe/gdm/debian/changelog.ubuntu")),Object(r.b)("p",null,"contoh: sekarang coba edit file AUTHORS lalu tambah authors di situ Tim Artis BlankOn ",Object(r.b)("a",{parentName:"p",href:"mailto:BlankOn@googlegroup.com"},"BlankOn@googlegroup.com")),Object(r.b)("p",null,"karena kita mengubah sesuatu di berkas debian, maka perubahan itu harus ditulis di changelog bagian tengah"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"AUTHORS: Tambah author Tim Artis BlankOn <BlankOn@googlegroup.com>\n\nBagian terakhir\n")),Object(r.b)("p",null,"bagian bawah isinya itu info tentang siapa yg mengubah paket ini, dan tanggal berapa diubahnya. nama (alamat email) itu diambil dari parameter DEBFULLNAME dan DEBEMAIL yg kita set tadi."),Object(r.b)("p",null,"sehingga changelog menjadi:"),Object(r.b)("p",null,"jao-theme (1.8-1) meuligoe; urgency=low"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Initial release.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"AUTHORS: Tambah author Tim Artis BlankOn ",Object(r.b)("a",{parentName:"p",href:"mailto:BlankOn@googlegroup.com"},"BlankOn@googlegroup.com")),Object(r.b)("p",{parentName:"li"},"-- Joe Hacker ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"  Wed, 13 Nov 2008 22:45:09 +0700"))),Object(r.b)("p",null,"File copyright"),Object(r.b)("p",null,"File copyright itu salah satu file terpenting di dir debian, isinya yah tentu saja yg berhubungan dengan hak cipta. di debian setiap paket yg masuk ke dalam pabrik paket akan di cek terlebih dahulu apakan lisensi yg digunakan sesuai tidak dengan Debian Free Software Guideline"),Object(r.b)("p",null,"File ini berisi keterangan tentang author, sumbernya didonwload dari mana, lisensinya apa dll. lisensi yang dituliskan dalam file ini cuma sebagian saja, selengkapnya bisa dibaca di file lain (biasanya di /usr/share/common-licenses/)."),Object(r.b)("p",null,"Untuk mengetahui lisensi suatu paket dapat di lihat file COPYING atau juga kode sumbernya, karena kadang-kadang satu paket terdiri dari beberapa lisensi."),Object(r.b)("p",null,"Contoh: paket blankon-sounds menggunakan 2 lisensi, 1 GPL untuk karya om blex dan 1 lagi CC untuk karya2 dari pengembang ubuntu. Yang CC karena gak ada di /usr/share/common-licenses/ maka perlu ditulis lengkap isi lisensinya. \u200b",Object(r.b)("a",{parentName:"p",href:"http://dev.blankonlinux.or.id/browser/meuligoe/blankon-sounds/debian/copyright"},"http://dev.blankonlinux.or.id/browser/meuligoe/blankon-sounds/debian/copyright")),Object(r.b)("p",null,"This package was debianized by Joe Hacker ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com")," on\nWed, 12 Nov 2008 13:24:36 +0700."),Object(r.b)("p",null,"It was downloaded from ",Object(r.b)("a",{parentName:"p",href:"http://dev.blankonlinux.or.id/"},"http://dev.blankonlinux.or.id/")),Object(r.b)("p",null,"Upstream Author(s):"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Farhan Perdana\n")),Object(r.b)("p",null,"Copyright:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"    (C) 2008 Farhan Perdana <blackdramon@gmail.com>\n    License: GPL Version 3\n")),Object(r.b)("p",null,"License:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"This package is free software; you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation; either version 2 of the License, or\n(at your option) any later version.\n\nThis package is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\n\nYou should have received a copy of the GNU General Public License\nalong with this package; if not, write to the Free Software\nFoundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301 USA\n")),Object(r.b)("p",null,"On Debian systems, the complete text of the GNU General\nPublic License can be found in `/usr/share/common-licenses/GPL'."),Object(r.b)("p",null,"The Debian packaging is (C) 2008, Joe Hacker ",Object(r.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com")," and\nis licensed under the GPL, see above."),Object(r.b)("h1",{id:"please-also-look-if-there-are-files-or-directories-which-have-a"},"Please also look if there are files or directories which have a"),Object(r.b)("h1",{id:"different-copyrightlicense-attached-and-list-them-here"},"different copyright/license attached and list them here."),Object(r.b)("p",null,"File rules"),Object(r.b)("p",null,"File rules itu file Makefile untuk paket debian kira2 fungsinya sama dengan file Makefile nya autoconf. Perintah-perintah untuk membangun paket kita tulis di sini, di debian sih cukup enak dah banyak tool & script untuk mempermudah membangun paket salah satunya debhelper. Kita tinggal tulis aja di rules script-script debhelper itu yg berawalan dh_*, ini otomatis dibuatkan saat kita menjalankan dh_make diawal."),Object(r.b)("p",null,"Selain menggunakan debhelper, ada juga script lain untuk membuat rules. namanya cdbs (common debian build system).\nMembangun paket"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Hapus file-file di direktori debian selain control, changelog, rules, copyright (tidak dihapus juga tidak apa-apa)\n")),Object(r.b)("p",null,"$ pwd\ndebian\n$ rm ",Object(r.b)("em",{parentName:"p"},".ex "),".EX"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Kembali ke direktori jao-theme, lalu jalankan:\n")),Object(r.b)("p",null,"$ pwd\njao-theme-1.8\n$ dpkg-buildpackage -rfakeroot\n...\n... (dipotong)\n...\ndpkg-genchanges\ndpkg-genchanges: including full source code in upload\ndpkg-buildpackage: full upload (original source is included)\n(WARNING: Failed to sign .dsc and .changes file)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Abaikan saja WARNING diatas. maka akan terbentuk file-file:\n")),Object(r.b)("p",null,"jao-theme_1.8-1_all.deb\njao-theme_1.8-1_amd64.changes\njao-theme_1.8-1.diff.gz\njao-theme_1.8-1.dsc"),Object(r.b)("p",null,"NOTE: berdasarkan lokakarya tanggal 12-11-08 di #blankon by imtheface"),Object(r.b)("p",null,"oiya...ada PRnya juga:"),Object(r.b)("p",null,"\u200b",Object(r.b)("a",{parentName:"p",href:"http://www.debian.org/doc/debian-policy/"},"http://www.debian.org/doc/debian-policy/")),Object(r.b)("p",null,"\u200b",Object(r.b)("a",{parentName:"p",href:"http://www.debian.org/doc/maint-guide/"},"http://www.debian.org/doc/maint-guide/")),Object(r.b)("p",null,"\u200b",Object(r.b)("a",{parentName:"p",href:"http://www.debian.org/doc/developers-reference/"},"http://www.debian.org/doc/developers-reference/")))}u.isMDXComponent=!0}}]);