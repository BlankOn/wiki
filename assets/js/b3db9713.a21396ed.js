"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[618],{3905:function(a,e,n){n.d(e,{Zo:function(){return m},kt:function(){return s}});var t=n(67294);function r(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var u=t.createContext({}),k=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},m=function(a){var e=k(a.components);return t.createElement(u.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(a,e){var n=a.components,r=a.mdxType,i=a.originalType,u=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),p=k(n),s=r,b=p["".concat(u,".").concat(s)]||p[s]||d[s]||i;return n?t.createElement(b,o(o({ref:e},m),{},{components:n})):t.createElement(b,o({ref:e},m))}));function s(a,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=a,l.mdxType="string"==typeof a?a:r,o[1]=l;for(var k=2;k<i;k++)o[k]=n[k];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},65362:function(a,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return l},metadata:function(){return k},toc:function(){return d}});var t=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},u="PANDUAN PEMAKETAN MALEO MENGGUNAKAN KOMPUTER LOKAL",k={unversionedId:"TimPengembang/Pemaket/PanduanPaketKhasMaleo",id:"TimPengembang/Pemaket/PanduanPaketKhasMaleo",title:"PANDUAN PEMAKETAN MALEO MENGGUNAKAN KOMPUTER LOKAL",description:"1. Sebelum melakukan pemaketan Maleo silahkan persiapkan alatnya. Bisa",source:"@site/wiki/TimPengembang/Pemaket/PanduanPaketKhasMaleo.md",sourceDirName:"TimPengembang/Pemaket",slug:"/TimPengembang/Pemaket/PanduanPaketKhasMaleo",permalink:"/TimPengembang/Pemaket/PanduanPaketKhasMaleo",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Pemaket/PanduanPaketKhasMaleo.md",tags:[],version:"current",frontMatter:{}},m={},d=[],p={toc:d};function s(a){var e=a.components,n=(0,r.Z)(a,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"panduan-pemaketan-maleo-menggunakan-komputer-lokal"},"PANDUAN PEMAKETAN MALEO MENGGUNAKAN KOMPUTER LOKAL"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sebelum melakukan pemaketan Maleo silahkan persiapkan alatnya. Bisa\ndibaca di Wiki atau \u200bBuku_Panduan_Pemaketan. Pada proses persiapan alat,\nbaca panduan sampai pada pembuatan kunci."),(0,i.kt)("li",{parentName:"ol"},"Buka terminal, buat folder Paket di home dan masuk ke folder Paket/\ndengan ketik perintah\n$mkdir Paket/\n$cd Paket/\ndan kemudian ketik\n$bzr branch ",(0,i.kt)("a",{parentName:"li",href:"http://dev.blankonlinux.or.id/browser/tambora/maleo"},"http://dev.blankonlinux.or.id/browser/tambora/maleo"),"\nuntuk mengunduh folder kode sumber dari Maleo dari bzr BlankOn.\n","[No",(0,i.kt)("em",{parentName:"li"},"image"),'"#"_attached_to_Pemaket/PanduanPaketKhasMaleo]'),(0,i.kt)("li",{parentName:"ol"},"Di folder Paket, masuk ke folder maleo, ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda.\nUntuk versi")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pada berkas format difolder debian/source isikan 3.0 (native)"),(0,i.kt)("li",{parentName:"ol"},"Lakukan\n$debuild -S"),(0,i.kt)("li",{parentName:"ol"},"Ketik\n$cd ..\n$sudo pbuilder build namapaket.dsc"),(0,i.kt)("li",{parentName:"ol"},"Untuk melihat hasil pemaketan berupa file dapat dilihat di cd /var/cache/\npbuilder/result/"),(0,i.kt)("li",{parentName:"ol"},"Selanjutnya bisa dilanjutkan ke IRSGH.\nPEMAKETAN DI IRGSH"),(0,i.kt)("li",{parentName:"ol"},"Ketik\n$bzr branch ",(0,i.kt)("a",{parentName:"li",href:"http://dev.blankonlinux.or.id/browser/tambora/maleo"},"http://dev.blankonlinux.or.id/browser/tambora/maleo"),"\nuntuk mengunduh kode sumber dari Maleo dari bzr BlankOn."),(0,i.kt)("li",{parentName:"ol"},"Masuk ke folder maleo dan lakukan pemversian. Ketik\n$dch -i\nlalu sesuakan dengan kebutuhan mulai dari pemversian, komen, nama dan email\nanda. Untuk versi")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"* 1.33 adalah versi upstream (akan berubah versi setiap upstream merilis\n  versi terbaru)\n* -0 adalah versi dari debian\n* blankon1 adalah versi yang digunakan blankon, apabila ada penambahan\n  patch maka versi akan naik.\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Kirim berkas maleo ke bzr\n$bzr init (apabila belum ada folder .bzr atau belom dilakukan initiasi\nbzr)\n$bzr add *\n$bzr commit -m \u201cisikan pesan perubahan\u201d\n$bzr push bzr+ssh://",(0,i.kt)("a",{parentName:"li",href:"mailto:bzr@dev.blankonlinux.or.id"},"bzr@dev.blankonlinux.or.id"),":2222/bzr/tambora/nama-\npaket\n","[No",(0,i.kt)("em",{parentName:"li"},"image"),'"irgsh.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]'),(0,i.kt)("li",{parentName:"ol"},"Buka IRGSH \u200b",(0,i.kt)("a",{parentName:"li",href:"http://irgsh.blankonlinux.or.id"},"http://irgsh.blankonlinux.or.id"),", login menggunakan akun\naku.blankonlinux.or.id anda (hubungi system adminitrator untuk\nmendaftarkan akun anda sebagai team pemaket).\n","[No",(0,i.kt)("em",{parentName:"li"},"image"),'"login.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]',"\nKlik Login"),(0,i.kt)("li",{parentName:"ol"},"Klik New Build, maka akan muncul halaman Submit Build job\n","[No",(0,i.kt)("em",{parentName:"li"},"image"),'"build.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]',"\n6, Isikan")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"* Distribution = Tambora (sesuai dengan nama kode rilis).\n* Source URL = Alamat source yang ada di bzr blankon.\n* Source Type = Bazar repository\n* Source Option = Last version\n* Original Source = Alamat source code upstream bisa dari github ataupun\n  akun pendekar (file berbentuk .tar.gz)\n* Additional Original Source = menambahkan source code upstream jika\n  diperlukan.\n")),(0,i.kt)("p",null,"[No",(0,i.kt)("em",{parentName:"p"},"image"),'"submit.png"_attached_to_Pemaket/PanduanPaketKhasMaleo]',"\n7.Klik Submit\nLast_modified 7 months ago Last modified on 10/11/2016 02:20:20 PM"),(0,i.kt)("h4",{id:""}),(0,i.kt)("hr",null))}s.isMDXComponent=!0}}]);