(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1050:function(e,n,a){"use strict";a.d(n,"a",(function(){return s})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),d=function(e){var n=r.a.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},s=function(e){var n=d(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(a),p=t,m=s["".concat(o,".").concat(p)]||s[p]||b[p]||i;return a?r.a.createElement(m,c(c({ref:n},u),{},{components:a})):r.a.createElement(m,c({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},213:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return d}));var t=a(3),r=a(7),i=(a(0),a(1050)),o={},c={unversionedId:"TimPengembang/Pemaket/PanduanPembuatanPaketMotu",id:"TimPengembang/Pemaket/PanduanPembuatanPaketMotu",isDocsHomePage:!1,title:"Panduan Pembuatan Paket",description:"Revisi 2011",source:"@site/Wiki/TimPengembang/Pemaket/PanduanPembuatanPaketMotu.md",sourceDirName:"TimPengembang/Pemaket",slug:"/TimPengembang/Pemaket/PanduanPembuatanPaketMotu",permalink:"/TimPengembang/Pemaket/PanduanPembuatanPaketMotu",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/PanduanPembuatanPaketMotu.md",version:"current",frontMatter:{}},l=[{value:"Kesatu",id:"kesatu",children:[]},{value:"Kedua",id:"kedua",children:[]},{value:"Ketiga",id:"ketiga",children:[]},{value:"Keempat",id:"keempat",children:[]},{value:"Kelima",id:"kelima",children:[]},{value:"Keenam",id:"keenam",children:[]},{value:"Ketujuh",id:"ketujuh",children:[]},{value:"Kedelapan",id:"kedelapan",children:[]},{value:"Kesembilan",id:"kesembilan",children:[]},{value:"Kesepuluh",id:"kesepuluh",children:[]},{value:"Kesebelas",id:"kesebelas",children:[]},{value:"Keduabelas",id:"keduabelas",children:[]}],u={toc:l};function d(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Revisi 2011"),Object(i.b)("h3",{id:"kesatu"},"Kesatu"),Object(i.b)("p",null,"sudo apt-get install devscripts build-essential fakeroot debhelper gnupg\npbuilder dh-make dpkg-dev ubuntu-dev-tools"),Object(i.b)("h3",{id:"kedua"},"Kedua"),Object(i.b)("p",null,'nano ~/.bashrc\n(Tulis pada akhir baris):\nexport DEBFULLNAME="Joe Hacker" (Sesuaikan dengan nama Anda)\nexport DEBEMAIL="',Object(i.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),'" (Sesuaikan dengan e-mail Anda)'),Object(i.b)("h3",{id:"ketiga"},"Ketiga"),Object(i.b)("p",null,"source ~/.bashrc\nexport | grep DEB"),Object(i.b)("h3",{id:"keempat"},"Keempat"),Object(i.b)("p",null,"gpg --gen-key\n(Buat)\nReal name: Joe Hacker (Nama = Nama Anda)\nE-mail address: ",Object(i.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com")," (e-mail= e-mail Anda)\nPassphrase: paswordpercobaanjanganditiru"),Object(i.b)("h3",{id:"kelima"},"Kelima"),Object(i.b)("p",null,'source ~/.bashrc\nls\nnano .pbuilderrc\n(Tulis)\nCOMPONENTS="main restricted extras extras-restricted"'),Object(i.b)("h3",{id:"keenam"},"Keenam"),Object(i.b)("p",null,"sudo pbuilder create"),Object(i.b)("h3",{id:"ketujuh"},"Ketujuh"),Object(i.b)("p",null,"wget ftp://ftp.gnu.org/pub/gnu/ed/ed-1.5.tar.gz\ntar xzf ed-1.5.tar.gz\ncd ed-1.5\nls\ndh_make -c gpl -f ../ed-1.5.tar.gz\n(Ada pertanyaan berikut):\nType of package: single binary, multiple binary, library, kernel module or\ncdbs?\n","[s/m/l/k/b]",' s\n(Pilih "s")\ncd debian\nls\nrm ',Object(i.b)("em",{parentName:"p"},".ex "),".EX docs info README.*\nls"),Object(i.b)("h3",{id:"kedelapan"},"Kedelapan"),Object(i.b)("p",null,"(Masih di direktori debian, tulis):\ndch -e\n(Lalu isi seperti berikut):\ned (1.5-0blankon1) rote; urgency=low"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Initial release.\n-- Joe Hacker ",Object(i.b)("a",{parentName:"li",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"  Thu, 20 Oct 2011 21:35:47 +0700")),Object(i.b)("h3",{id:"kesembilan"},"Kesembilan"),Object(i.b)("p",null,"nano control\n(Lengkapi seperti berikut):\nSource: ed\nSection: editors\nPriority: extra\nMaintainer: Joe Hacker ",Object(i.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nBuild-Depends: debhelper (>= 8.0.0), autotools-dev\nStandards-Version: 3.9.2\nHomepage: ",Object(i.b)("a",{parentName:"p",href:"http://www.gnu.org/software/ed/"},"http://www.gnu.org/software/ed/"),"\nVcs-Git: git://github.com/joe/ed.git\nVcs-Browser: ",Object(i.b)("a",{parentName:"p",href:"https://joe.hacker@github.com/joe/ed.git"},"https://joe.hacker@github.com/joe/ed.git"),"\nPackage: ed\nArchitecture: any\nDepends: ${shlibs:Depends}, ${misc:Depends}\nDescription: classic UNIX line editor\nThe ed is a line-oriented text editor.  It is used to\ncreate, display, modify and otherwise manipulate text\nfiles."),Object(i.b)("h3",{id:"kesepuluh"},"Kesepuluh"),Object(i.b)("p",null,"nano copyright\n(Lalu isi sebagai berikut):\nFormat: ",Object(i.b)("a",{parentName:"p",href:"http://svn.debian.org/wsvn/dep/web/deps/dep5.mdwn?op=file&rev=174"},"http://svn.debian.org/wsvn/dep/web/deps/dep5.mdwn?op=file&rev=174"),"\nUpstream-Name: ed\nSource: ",Object(i.b)("a",{parentName:"p",href:"http://www.gnu.org/software/ed/"},"http://www.gnu.org/software/ed/"),"\nFiles: ",Object(i.b)("em",{parentName:"p"},"\nCopyright: 1993, 1994, 2006, 2007, 2008, 2009, 2010, 2011 Free Software\nFoundation, Inc\n2006, 2007, 2008, 2009 Backus ",Object(i.b)("a",{parentName:"em",href:"mailto:ericb@lsid.hp.com"},"ericb@lsid.hp.com"),"\n1993, Karl Berry ",Object(i.b)("a",{parentName:"em",href:"mailto:kb@cs.umb.edu"},"kb@cs.umb.edu"),"\n1994, 2011 Theo Deraadt ",Object(i.b)("a",{parentName:"em",href:"mailto:deraadt@newt.fsa.ca"},"deraadt@newt.fsa.ca"),"\n2006, 2007 Kaveh R. Ghazi ",Object(i.b)("a",{parentName:"em",href:"mailto:ghazi@noc.rutgers.edu"},"ghazi@noc.rutgers.edu"),"\n2010, 2011 Mike Haertel ",Object(i.b)("a",{parentName:"em",href:"mailto:mike@ichips.intel.com"},"mike@ichips.intel.com"),"\n2011 Francois Pinard ",Object(i.b)("a",{parentName:"em",href:"mailto:pinard@iro.umontreal.ca"},"pinard@iro.umontreal.ca"),"\n1993, 1994  Rodney Ruddock ",Object(i.b)("a",{parentName:"em",href:"mailto:rodney@snowhite.cis.uoguelph.ca"},"rodney@snowhite.cis.uoguelph.ca"),"\nLicense: GPL-3.0+\nFiles: debian/"),"\nCopyright: 2011 Joe Hacker ",Object(i.b)("a",{parentName:"p",href:"mailto:joe.hacker@isp.com"},"joe.hacker@isp.com"),"\nLicense: GPL-3.0+\nLicense: GPL-3.0+\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\n(at your option) any later version.\n.\nThis package is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU General Public License for more details.\n.\nYou should have received a copy of the GNU General Public License\nalong with this program. If not, see ",Object(i.b)("a",{parentName:"p",href:"http://www.gnu.org/licenses/"},"http://www.gnu.org/licenses/"),"."),Object(i.b)("h3",{id:"kesebelas"},"Kesebelas"),Object(i.b)("p",null,"cd ..\ndebuild -S\n(Akan ditanya passphrase): passwordpercobaanjanganditiru\ncd\n(Kembali ke direktori file dsc ditempatkan)\nsudo pbuilder build ed_1.5-0blankon1.dsc\nless /var/cache/pbuilder/result/ed_1.5-0blankon1_i386.deb"),Object(i.b)("h3",{id:"keduabelas"},"Keduabelas"),Object(i.b)("p",null,"cd /var/cache/pbuilder/result\nsudo dpkg -i ed_1.5-0blankon1_i386.deb\n(Silakan coba:)\nKategoriPemaket\nLast modified on 11/10/2011 11:37:18 PM"),Object(i.b)("h4",{id:""}),Object(i.b)("hr",null))}d.isMDXComponent=!0}}]);