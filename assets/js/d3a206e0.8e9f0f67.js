"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[17455],{3905:function(e,n,a){a.d(n,{Zo:function(){return s},kt:function(){return d}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),p=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),k=p(a),d=r,b=k["".concat(o,".").concat(d)]||k[d]||c[d]||i;return a?t.createElement(b,l(l({ref:n},s),{},{components:a})):t.createElement(b,l({ref:n},s))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61431:function(e,n,a){a.r(n),a.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var t=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],u={},o="Panduan BlankOnisasi apt",p={unversionedId:"TimPengembang/Pemaket/PanduanPaketImpor/apt",id:"TimPengembang/Pemaket/PanduanPaketImpor/apt",title:"Panduan BlankOnisasi apt",description:"Berkas yang diubah",source:"@site/wiki/TimPengembang/Pemaket/PanduanPaketImpor/apt.md",sourceDirName:"TimPengembang/Pemaket/PanduanPaketImpor",slug:"/TimPengembang/Pemaket/PanduanPaketImpor/apt",permalink:"/TimPengembang/Pemaket/PanduanPaketImpor/apt",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanPaketImpor/apt.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Perubahan berkas",id:"perubahan-berkas",level:3},{value:"apt-pkg/deb/debversion.cc",id:"apt-pkgdebdebversioncc",level:4},{value:"cmdline/apt-key",id:"cmdlineapt-key",level:4},{value:"debian/apt.postinst",id:"debianaptpostinst",level:4},{value:"debian/control",id:"debiancontrol",level:4},{value:"debian/rules",id:"debianrules",level:4},{value:"Penambahan berkas",id:"penambahan-berkas",level:3},{value:"blankon-archive.gpg",id:"blankon-archivegpg",level:4}],k={toc:c};function d(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"panduan-blankonisasi-apt"},"Panduan BlankOnisasi apt"),(0,i.kt)("p",null,"Berkas yang diubah"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"apt-pkg/deb/debversion.cc"),(0,i.kt)("li",{parentName:"ol"},"cmdline/apt-key"),(0,i.kt)("li",{parentName:"ol"},"debian/apt.postinst"),(0,i.kt)("li",{parentName:"ol"},"debian/rules"),(0,i.kt)("li",{parentName:"ol"},"debian/control\nBerkas yang ditambahkan"),(0,i.kt)("li",{parentName:"ol"},"debian/share/blankon-keyring.gpg\nContoh revisi: \u200b",(0,i.kt)("a",{parentName:"li",href:"http://bazaar.launchpad.net/~blankon-pemaket/blankon/apt/"},"http://bazaar.launchpad.net/~blankon-pemaket/blankon/apt/"),"\nrevision/13")),(0,i.kt)("h3",{id:"perubahan-berkas"},"Perubahan berkas"),(0,i.kt)("h4",{id:"apt-pkgdebdebversioncc"},"apt-pkg/deb/debversion.cc"),(0,i.kt)("p",null,"Patch agar paket BlankOn tidak selalu ketinggalan. Informasi: \u200bhttps://\nbugs.launchpad.net/blankon/+bug/184476"),(0,i.kt)("h4",{id:"cmdlineapt-key"},"cmdline/apt-key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"archive keyring\n@@ -10,8 +10,8 @@\nMASTER_KEYRING=/usr/share/keyrings/ubuntu-master-keyring.gpg\n-ARCHIVE_KEYRING=/usr/share/keyrings/ubuntu-archive-keyring.gpg\n-REMOVED_KEYS=/usr/share/keyrings/ubuntu-archive-removed-keys.gpg\n+ARCHIVE_KEYRING=/usr/share/keyrings/blankon-archive-keyring.gpg\n+REMOVED_KEYS=/usr/share/keyrings/blankon-archive-removed-keys.gpg\nARCHIVE_KEYRING_URI=",(0,i.kt)("a",{parentName:"li",href:"http://archive.ubuntu.com/ubuntu/project/ubuntu-archive-"},"http://archive.ubuntu.com/ubuntu/project/ubuntu-archive-"),"\nkeyring.gpg\nadd_keys_with_verify_against_master_keyring() {"),(0,i.kt)("li",{parentName:"ol"},"Pesan error\n@@ -77,7 +77,7 @@\nupdate() {\nif ","[ ! -f $ARCHIVE_KEYRING ]",'; then\necho >&2 "ERROR: Can\'t find the archive-keyring"')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'echo >&2 "Is the ubuntu-keyring package installed?"')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'echo >&2 "Is the blankon-keyring package installed?"\nexit 1\nfi')),(0,i.kt)("h4",{id:"debianaptpostinst"},"debian/apt.postinst"),(0,i.kt)("p",null,"Masukkan blankon-archive.gpg ke dalam keyring\n@@ -17,7 +17,8 @@\nconfigure)\nif ! test -f /etc/apt/trusted.gpg; then"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"           cp /usr/share/apt/ubuntu-archive.gpg /etc/apt/trusted.gpg\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"       apt-key add /usr/share/apt/blankon-archive.gpg\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"       apt-key add /usr/share/apt/ubuntu-archive.gpg\n   fi\n")),"   ;;")),(0,i.kt)("h4",{id:"debiancontrol"},"debian/control"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Maintainer\n-Maintainer: Ubuntu Core Developers ",(0,i.kt)("a",{parentName:"li",href:"mailto:ubuntu-devel-discuss@lists.ubuntu.com"},"ubuntu-devel-discuss@lists.ubuntu.com"),"\n-XSBC-Original-Maintainer: APT Development Team ",(0,i.kt)("a",{parentName:"li",href:"mailto:deity@lists.debian.org"},"deity@lists.debian.org"),"\n+Maintainer: BlankOn Developers ",(0,i.kt)("a",{parentName:"li",href:"mailto:BlankOn@googlegroups.com"},"BlankOn@googlegroups.com"),"\n+XSBC-Original-Maintainer: APT Development Team ",(0,i.kt)("a",{parentName:"li",href:"mailto:deity@lists.debian.org"},"deity@lists.debian.org"),",\nUbuntu Core Developers ",(0,i.kt)("a",{parentName:"li",href:"mailto:ubuntu-devel-discuss@lists.ubuntu.com"},"ubuntu-devel-discuss@lists.ubuntu.com")),(0,i.kt)("li",{parentName:"ol"},"Recommends\n@@ -15,7 +15,7 @@\nPriority: important\nReplaces: libapt-pkg-doc (<< 0.3.7), libapt-pkg-dev (<< 0.3.7)\nProvides: ${libapt-pkg:provides}\n-Recommends: ubuntu-keyring\n+Recommends: blankon-keyring\nSuggests: aptitude | synaptic | gnome-apt | wajig, dpkg-dev, apt-doc, bzip2,\nlzma, gnupg\nSection: admin\nDescription: Advanced front-end for dpkg")),(0,i.kt)("h4",{id:"debianrules"},"debian/rules"),(0,i.kt)("p",null,"Tambahkan blankon-archive.gpg\n@@ -213,6 +213,7 @@\ncp debian/bugscript debian/$@/usr/share/bug/apt/script\ncp debian/apt.logrotate debian/$@/etc/logrotate.d/apt"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"cp share/blankon-archive.gpg debian/$@/usr/share/$@\ncp share/ubuntu-archive.gpg debian/$@/usr/share/$@\nsed 's/^_//' share/apt-auth-failure.note > debian/$@/usr/share/$@/apt-auth-\nfailure.note\ncp debian/apt.conf.autoremove debian/$@/etc/apt/apt.conf.d/01autoremove")),(0,i.kt)("h3",{id:"penambahan-berkas"},"Penambahan berkas"),(0,i.kt)("h4",{id:"blankon-archivegpg"},"blankon-archive.gpg"),(0,i.kt)("p",null,"Diletakkan di debian/share/blankon-archive.gpg.\nKategoriPemaket\nLast modified on 06/19/2008 10:59:19 AM"),(0,i.kt)("h4",{id:""}),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);