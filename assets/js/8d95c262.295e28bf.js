"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[22729],{3905:function(a,e,n){n.d(e,{Zo:function(){return u},kt:function(){return b}});var t=n(67294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function p(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var k=t.createContext({}),o=function(a){var e=t.useContext(k),n=e;return a&&(n="function"==typeof a?a(e):p(p({},e),a)),n},u=function(a){var e=o(a.components);return t.createElement(k.Provider,{value:e},a.children)},l={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,k=a.parentName,u=m(a,["components","mdxType","originalType","parentName"]),d=o(n),b=r,s=d["".concat(k,".").concat(b)]||d[b]||l[b]||i;return n?t.createElement(s,p(p({ref:e},u),{},{components:n})):t.createElement(s,p({ref:e},u))}));function b(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,p=new Array(i);p[0]=d;var m={};for(var k in e)hasOwnProperty.call(e,k)&&(m[k]=e[k]);m.originalType=a,m.mdxType="string"==typeof a?a:r,p[1]=m;for(var o=2;o<i;o++)p[o]=n[o];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89286:function(a,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return k},default:function(){return b},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return l}});var t=n(83117),r=n(80102),i=(n(67294),n(3905)),p=["components"],m={},k="MenanganiPaketImpor",o={unversionedId:"TimPengembang/Pemaket/MenanganiPaketImpor",id:"TimPengembang/Pemaket/MenanganiPaketImpor",title:"MenanganiPaketImpor",description:"Mengimpor paket pertama kali",source:"@site/wiki/TimPengembang/Pemaket/MenanganiPaketImpor.md",sourceDirName:"TimPengembang/Pemaket",slug:"/TimPengembang/Pemaket/MenanganiPaketImpor",permalink:"/TimPengembang/Pemaket/MenanganiPaketImpor",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/MenanganiPaketImpor.md",tags:[],version:"current",frontMatter:{}},u={},l=[{value:"Mengimpor paket pertama kali",id:"mengimpor-paket-pertama-kali",level:2},{value:"Bila ada perubahan di Ubuntu",id:"bila-ada-perubahan-di-ubuntu",level:2}],d={toc:l};function b(a){var e=a.components,n=(0,r.Z)(a,p);return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"menanganipaketimpor"},"MenanganiPaketImpor"),(0,i.kt)("h2",{id:"mengimpor-paket-pertama-kali"},"Mengimpor paket pertama kali"),(0,i.kt)("p",null,"Berikut adalah langkah-langkah melakukan impor paket dari Ubuntu."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Dapatkan URL paket di Launchpad "),(0,i.kt)("p",{parentName:"li"},"Bentuk URL umumnya adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"\u200bhttps://\n   launchpad.net/ubuntu/+source/<nama-paket\\>"),'. Kunjungi halaman tersebut dan\nklik pada versi terakhir (ada paling atas). Di halaman versi tersebut\ndapat Anda jumpai bagian "Download". Salin URL patch Ubuntu (dengan\nakhiran nama diff.gz)\n')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Siapkan direktori kerja di komputer Anda, misalnya /tmp. Unduh dan\nekstrak berkas patch tersebut."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd /tmp\nwget <url-diff.gz-barusan\\>\ngunzip -c <nama-berkas-diff.gz\\> | patch -p0\n")),(0,i.kt)("p",{parentName:"li"},"Yang kita butuhkan hanyalah patch dari Ubuntu saja, dan bukan isi kode\nsumber paket aslinya (dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"<nama-paket.orig.tar.gz\\>"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Anda akan dapatkan direktori baru bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"<nama-paket_nomor-versi-ubuntu\\>/"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Inisialisasikan bazaar di dalam direktori itu, masukkan semua berkas yang\nada, dan lakukan commit."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'cd <nama-paket_nomor-versi-ubuntu\\>/\nbzr init --format=dirstate-tags\nbzr add *\nbzr commit -m "Impor awal"\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ganti nama berkas debian/changelog menjadi debian/changelog.ubuntu dan\nmasukkan ke dalam gudang kode juga"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"bzr mv debian/changelog debian/changelog.ubuntu\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sunting ",(0,i.kt)("inlineCode",{parentName:"p"},"debian/changelog")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"   dch --create\n")),(0,i.kt)("p",{parentName:"li"},'   Gunakan penomoran versi yang benar. Lihat bagian "Penomoran Versi" pada\ndokumen Prosedur Pembuatan Paket?. Konfirmasikan kepada koordinator bila\nAnda ragu. Ganti nomor versi dan nama distro yang ada di dalam debian/\nchangelog. Sebagai contoh pada paket gnome-desktop:'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"gnome-desktop (1:2.19.6-0ubuntu1) gutsy; urgency=low\n  * New upstream version\n -- Sebastien Bacher <seb128@canonical.com\\>  Mon, 30 Jul 2007 23:21:46\n+0200\n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"}," ... dan seterusnya hingga akhir berkas diganti dan dipotong hingga menjadi ini saja:\n \n")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"gnome-desktop (1:2.19.6-0ubuntu1-0blankon1) konde; urgency=low\n  * Impor dari 1:2.19.6-0ubuntu1.\n -- Mohammad DAMT <mdamt@gnome.org\\>  Thu,  9 Aug 2007 03:07:32 +0300\n ```\n \nPerhatikan bahwa semua entri yang lama tidak perlu\ndisimpan. Juga pastikan bahwa nomor versi Ubuntu aslinya\njangan diubah (Dalam contoh tetap 1:2.19.6-0ubuntu1).\n    \n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Simpan berkas tersebut dan lakukan commit."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'bzr add debian/changelog\nbzr commit -m "Memperbarui sejarah paket"\nbzr tag nama_tag\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Kirim ke gudang kode. Perhatikan bahwa tidak perlu mencantumkan nomor\nversi saat mengirim ke gudang kode."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/<nama_kode\\>/\n<nama_paket/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Daftarkan nama Anda sesuai dengan paket yang dikelola di sini: ",(0,i.kt)("inlineCode",{parentName:"p"},"\u200bhttp://\ndev.blankonlinux.or.id/wiki/<versi\\>/DaftarPaketImpor?"),". Ini sangat penting\nkarena bila ada paket baru di Ubuntu maka Anda akan segera diberitahu."))),(0,i.kt)("h2",{id:"bila-ada-perubahan-di-ubuntu"},"Bila ada perubahan di Ubuntu"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Siapkan kode sumber paket Anda yang sudah diimpor sebelumnya di direktori\n/tmp"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"bzr branch <url-paket-anda-di-gudang-kode\\>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ambil dan ekstrak patch Ubuntu di /tmp, mirip seperti langkah impor baru\ndi atas"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"wget <url-patch-diff.gz\\>\ngunzip -c <nama-berkas-diff.gz\\> | patch -p0\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ganti nama debian/changelog di dalam direktori paket ubuntu menjadi\ndebian/changelog.ubuntu"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"mv <direktori-paket-ubuntu_versi-sekian-sekian\\>/debian/changelog\n<direktori-paket-ubuntu_versi-sekian-sekian\\>/debian/changelog.ubuntu\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lakukan perbandingan dengan kode sumber paket Anda"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"diff -urN -x .bzr <direktori-paket-anda\\> <direktori-paket-ubuntu_versi-sekian-sekian\\> > perbedaan.txt\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sunting berkas perbedaan.txt dan hapus bagian yang tidak perlu diubah,\nmisalnya semua perubahan yang telah Anda lakukan sebelumnya.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Gelar berkas perbedaan.txt yang telah Anda sunting tersebut pada kode\nsumber Anda"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd <direktori-paket-anda\\>\ncat ../perbedaan.txt | patch -p1\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Catat nomor versi asli paket Ubuntu tersebut:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"   head -1 debian/changelog.ubuntu\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sunting debian/changelog Anda:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"   dch -i\n")),(0,i.kt)("p",{parentName:"li"},"   Pastikan bahwa versi paket Anda juga mencantumkan nomor versi Ubuntunya.\n")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tes paketnya dan bila sudah puas dengan paket ini, silakan dilepas ke\npabrik paket."))),(0,i.kt)("p",null,"Last modified on 08/08/2010 02:45:02 PM"),(0,i.kt)("h4",{id:""}),(0,i.kt)("hr",null))}b.isMDXComponent=!0}}]);