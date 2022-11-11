"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[86847],{3905:function(a,e,n){n.d(e,{Zo:function(){return o},kt:function(){return d}});var t=n(67294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function u(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var l=t.createContext({}),m=function(a){var e=t.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):u(u({},e),a)),n},o=function(a){var e=m(a.components);return t.createElement(l.Provider,{value:e},a.children)},p={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,l=a.parentName,o=s(a,["components","mdxType","originalType","parentName"]),c=m(n),d=r,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?t.createElement(g,u(u({ref:e},o),{},{components:n})):t.createElement(g,u({ref:e},o))}));function d(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,u=new Array(i);u[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=a,s.mdxType="string"==typeof a?a:r,u[1]=s;for(var m=2;m<i;m++)u[m]=n[m];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89224:function(a,e,n){n.r(e),n.d(e,{assets:function(){return o},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var t=n(83117),r=n(80102),i=(n(67294),n(3905)),u=["components"],s={},l="Pengaturan Desktop Virtualisasi",m={unversionedId:"Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopVirtualisasi",id:"Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopVirtualisasi",title:"Pengaturan Desktop Virtualisasi",description:"Aplikasi Virtualisasi",source:"@site/wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopVirtualisasi.md",sourceDirName:"Lainnya/Kadaluarsa/Dokumentasi/Draf",slug:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopVirtualisasi",permalink:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopVirtualisasi",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/PengaturanDesktopVirtualisasi.md",tags:[],version:"current",frontMatter:{}},o={},p=[{value:"Aplikasi Virtualisasi",id:"aplikasi-virtualisasi",level:2},{value:"Bagaimana memasang vmware-server",id:"bagaimana-memasang-vmware-server",level:3},{value:"Bagaimana memasang VirtualBox",id:"bagaimana-memasang-virtualbox",level:3},{value:"Bagaimana memasang qemu",id:"bagaimana-memasang-qemu",level:3},{value:"Bagaimana memasang tampilan grafis pada qemu",id:"bagaimana-memasang-tampilan-grafis-pada-qemu",level:4}],c={toc:p};function d(a){var e=a.components,n=(0,r.Z)(a,u);return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pengaturan-desktop-virtualisasi"},"Pengaturan Desktop Virtualisasi"),(0,i.kt)("h2",{id:"aplikasi-virtualisasi"},"Aplikasi Virtualisasi"),(0,i.kt)("h3",{id:"bagaimana-memasang-vmware-server"},"Bagaimana memasang vmware-server"),(0,i.kt)("p",null,"VMware merupakan aplikasi virtual mesin yang dapat digunakan untuk membuat mesin vitual dalam mesin utama, sehingga Anda mempunyai banyak mesin dalam\nsatu sistem anda. Untuk instalasinya anda harus menambahkan repository Canonical ",(0,i.kt)("inlineCode",{parentName:"p"},"gksudo gedit /etc/apt/sources.list")," Tambah baris berikut di akhir\nberkas"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\\# Repository Canonical\ndeb http://archive.canonical.com gutsy partner\n")),(0,i.kt)("p",null,"Simpan berkas sources.list anda, dan masukkan perintah"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt-get update\napt-get install vmware-server\n")),(0,i.kt)("p",null,"ingat, VMware merupakan aplikasi berbayar. Anda membutuhkan Serial Number untuk pemasangan di mesin anda"),(0,i.kt)("h3",{id:"bagaimana-memasang-virtualbox"},"Bagaimana memasang VirtualBox"),(0,i.kt)("p",null,"VirtualBox adalah aplikasi open source dan tidak berbayar yang dapat digunakan sebagai aplikasi virtualisasi. VirtualBox mendukung virtualisasi\nWindows, Linux, FreeBSD, OpenBSD, DOS dan lainya. Untuk pemasanganya adalah sebagai berikut: ",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get install virtualbox-ose")),(0,i.kt)("h3",{id:"bagaimana-memasang-qemu"},"Bagaimana memasang qemu"),(0,i.kt)("p",null,"Qemu adalah aplikasi virtual yang ringan, open-source dan gratis. Kegunaanya mirip dengan VirtualBox. Untuk pemasanganya adalah sebagai berikut:\n",(0,i.kt)("inlineCode",{parentName:"p"},"apt-get install qemu")),(0,i.kt)("h4",{id:"bagaimana-memasang-tampilan-grafis-pada-qemu"},"Bagaimana memasang tampilan grafis pada qemu"),(0,i.kt)("p",null,"Secara default qemu tersedia dalam mode teks, namun bisa juga ditampilkan\ndalam tampilan grafis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"apt-get install qemulator\napt-get install qemu-launcher\n")),(0,i.kt)("p",null,"Last modified on 09/23/2008 08:19:13 PM"),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);