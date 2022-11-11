"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[41722],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return s}});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function k(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),u=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=k(e,["components","mdxType","originalType","parentName"]),d=u(n),s=i,g=d["".concat(o,".").concat(s)]||d[s]||m[s]||r;return n?t.createElement(g,l(l({ref:a},p),{},{components:n})):t.createElement(g,l({ref:a},p))}));function s(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var k={};for(var o in a)hasOwnProperty.call(a,o)&&(k[o]=a[o]);k.originalType=e,k.mdxType="string"==typeof e?e:i,l[1]=k;for(var u=2;u<r;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97305:function(e,a,n){n.r(a),n.d(a,{assets:function(){return p},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return k},metadata:function(){return u},toc:function(){return m}});var t=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],k={},o="Panduan patching paket non-native (quilt)",u={unversionedId:"TimPengembang/Pemaket/PanduanPatchingPaketNonNative",id:"TimPengembang/Pemaket/PanduanPatchingPaketNonNative",title:"Panduan patching paket non-native (quilt)",description:"Panduan ini dapat digunakan untuk menambal paket native yang difork menjadi paket non-native atau paket non-native",source:"@site/wiki/TimPengembang/Pemaket/PanduanPatchingPaketNonNative.md",sourceDirName:"TimPengembang/Pemaket",slug:"/TimPengembang/Pemaket/PanduanPatchingPaketNonNative",permalink:"/TimPengembang/Pemaket/PanduanPatchingPaketNonNative",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanPatchingPaketNonNative.md",tags:[],version:"current",frontMatter:{}},p={},m=[{value:"Dengan perkakas Quilt",id:"dengan-perkakas-quilt",level:2},{value:"Menyiapkan tarball orig",id:"menyiapkan-tarball-orig",level:3},{value:"Membuat tambalan",id:"membuat-tambalan",level:3},{value:"Dengan diff",id:"dengan-diff",level:2},{value:"Dengan debian/rules",id:"dengan-debianrules",level:2}],d={toc:m};function s(e){var a=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"panduan-patching-paket-non-native-quilt"},"Panduan patching paket non-native (quilt)"),(0,r.kt)("p",null,"Panduan ini dapat digunakan untuk menambal ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#2-paket-native-dengan-modifikasi"},"paket native yang difork menjadi paket non-native")," atau ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BlankOn/wiki/blob/master/TimPengembang/Pemaket/JenisPaket.md#3-paket-non-native"},"paket non-native")," "),(0,r.kt)("p",null,"Dalam contoh ini, kita akan menggunakan studi kasus dari paket ",(0,r.kt)("inlineCode",{parentName:"p"},"calamares-settings-blankon")),(0,r.kt)("h2",{id:"dengan-perkakas-quilt"},"Dengan perkakas Quilt"),(0,r.kt)("h3",{id:"menyiapkan-tarball-orig"},"Menyiapkan tarball orig"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kloning berkas source ke ",(0,r.kt)("inlineCode",{parentName:"li"},"source"),", ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:BlankOn/calamares-settings-blankon.git source\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Buat tarbal orig dengan pola nama berkas, ",(0,r.kt)("inlineCode",{parentName:"li"},"namapaket_nomorversi.orig.tar.gz"),". Di kasus ini nama paket adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"calamares-settings-blankon"),", versi paket adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"11.0.4"),", maka nama berkas adalah ",(0,r.kt)("inlineCode",{parentName:"li"},"calamares-settings-blankon_11.0.4.orig.tar.gz"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar -zcvf calamares-settings-blankon_11.0.4.orig.tar.gz source\n")),(0,r.kt)("h3",{id:"membuat-tambalan"},"Membuat tambalan"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kloning berkas spesifikasi Debian untuk paket ini,")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  git clone git@github.com:blankon-packages/calamares-settings-blankon.git package\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Letakkan berkas tarball ",(0,r.kt)("inlineCode",{parentName:"li"},"calamares-settings-blankon_11.0.4.orig.tar.gz")," tadi sejajar dengan direktori ",(0,r.kt)("inlineCode",{parentName:"li"},"package")),(0,r.kt)("li",{parentName:"ul"},"Jika versi spesifikasi debian ini belum sama dengan tarball orig-nya, naikkan versinya dengan ",(0,r.kt)("inlineCode",{parentName:"li"},"dch -i")," lalu commit perubahannya."),(0,r.kt)("li",{parentName:"ul"},"Masuk ke ",(0,r.kt)("inlineCode",{parentName:"li"},"package"),", jalankan ",(0,r.kt)("inlineCode",{parentName:"li"},"quilt refresh ")," untuk memasitkan perubahan terakhir disesuaikan dengan tarball orig ",(0,r.kt)("inlineCode",{parentName:"li"},"calamares-settings-blankon_11.0.4.orig.tar.gz"),"."),(0,r.kt)("li",{parentName:"ul"},"Jika ada perubahan dari ",(0,r.kt)("inlineCode",{parentName:"li"},"quilt refresh"),", lakukan commit git terlebih dahulu."),(0,r.kt)("li",{parentName:"ul"},"Buat patch baru dengan ",(0,r.kt)("inlineCode",{parentName:"li"},"quilt new namaTambalan.diff"),". Quilt akan menyiapkan berkas tambalannya:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"        modified:   .pc/applied-patches\n        modified:   debian/patches/series\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lakukan penambalan:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Tandai berkas yang mau disunting atau ditambahkan, ",(0,r.kt)("inlineCode",{parentName:"li"},"quilt add scripts/bootloader-config")),(0,r.kt)("li",{parentName:"ul"},"Lakukan perubahan/branding yang diperlukan, baik dengan menyunting maupun menambahkan berkas."),(0,r.kt)("li",{parentName:"ul"},"Simpan tambalan dengan ",(0,r.kt)("inlineCode",{parentName:"li"},"quilt refresh")))),(0,r.kt)("li",{parentName:"ul"},"Langkah di atas dapat dilakukan berulang kali untuk lebih dari 1 berkas."),(0,r.kt)("li",{parentName:"ul"},"Jika sudah cukup, lakukan commit git atas semua perubahan yang ada.")),(0,r.kt)("h2",{id:"dengan-diff"},"Dengan diff"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"apt-get source gdm3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cp gdm3 gdm3.orig")),(0,r.kt)("li",{parentName:"ul"},"Masuk ke ",(0,r.kt)("inlineCode",{parentName:"li"},"gmd3")," dan lakukan perubahan"),(0,r.kt)("li",{parentName:"ul"},"Keluar dari ",(0,r.kt)("inlineCode",{parentName:"li"},"gdm3")),(0,r.kt)("li",{parentName:"ul"},"Lakukan ",(0,r.kt)("inlineCode",{parentName:"li"},"diff")," antara 2 direktori tersebut"),(0,r.kt)("li",{parentName:"ul"},"Hasil ",(0,r.kt)("inlineCode",{parentName:"li"},"diff")," dimasukkan ke ",(0,r.kt)("inlineCode",{parentName:"li"},"debian/patches"))),(0,r.kt)("h2",{id:"dengan-debianrules"},"Dengan debian/rules"),(0,r.kt)("p",null,"Untuk berkas yang sifatnya binari (bukan teks) seperti berkas PNG atau ",(0,r.kt)("em",{parentName:"p"},"executable binary"),", ",(0,r.kt)("em",{parentName:"p"},"patching")," dilakukan lewat ",(0,r.kt)("inlineCode",{parentName:"p"},"debian/rules")," dengan menambahkan baris yang akan menyalin berkas tersebut ke ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," yang diinginkan, contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp debian/BlankonLogoBlank.png panels/info/BlankonLogoBlank.png\n")),(0,r.kt)("p",null,"Contoh lengkap pada paket ",(0,r.kt)("inlineCode",{parentName:"p"},"gnome-control-center")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$cat debian/rules\n#!/usr/bin/make -f\n\ninclude /usr/share/gnome-pkg-tools/1/rules/gnome-get-source.mk\n\nexport DEB_LDFLAGS_MAINT_APPEND = -Wl,-z,defs -Wl,-O1 -Wl,--as-needed\nexport DEB_CPPFLAGS_MAINT_APPEND = -DSSHD_SERVICE=\\"ssh.service\\"\n\n%:\n        dh $@ --with gnome\n\noverride_dh_autoreconf:\n        dh_autoreconf --as-needed\n\noverride_dh_auto_configure:\n        dh_auto_configure -- \\\n                --libexecdir=\\$${prefix}/lib/gnome-control-center \\\n                --with-gnome-session-libexecdir=\\$${prefix}/lib/gnome-session \\\n                --disable-update-mimedb\n\noverride_dh_auto_build:\n        cp debian/BlankonLogoBlank.png panels/info/BlankonLogoBlank.png\n        dh_auto_build\n\noverride_dh_missing:\n        dh_missing --fail-missing\n')))}s.isMDXComponent=!0}}]);