"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[56319],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=d(t),c=r,k=m["".concat(l,".").concat(c)]||m[c]||s[c]||i;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21912:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return s}});var a=t(83117),r=t(80102),i=(t(67294),t(3905)),o=["components"],u={},l="Panduan Pemutahiran dari Intrepid Ke Meuligoe",d={unversionedId:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/IntrepidKeMeuligoe",id:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/IntrepidKeMeuligoe",title:"Panduan Pemutahiran dari Intrepid Ke Meuligoe",description:"Pindah dari Intrepid ke Meuligoe",source:"@site/wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/IntrepidKeMeuligoe.md",sourceDirName:"TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran",slug:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/IntrepidKeMeuligoe",permalink:"/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/IntrepidKeMeuligoe",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Dokumentasi/Panduan/PanduanPemutakhiran/IntrepidKeMeuligoe.md",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Pindah dari Intrepid ke Meuligoe",id:"pindah-dari-intrepid-ke-meuligoe",level:2}],m={toc:s};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"panduan-pemutahiran-dari-intrepid-ke-meuligoe"},"Panduan Pemutahiran dari Intrepid Ke Meuligoe"),(0,i.kt)("h2",{id:"pindah-dari-intrepid-ke-meuligoe"},"Pindah dari Intrepid ke Meuligoe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ambil dan masukkan keyring repositori BlankOn ke dalam apt-key:\n",(0,i.kt)("inlineCode",{parentName:"li"},"wget http://arsip.blankonlinux.or.id/blankon/project/blankon-archive-keyring.gpg -O - | sudo apt-key add -"),"\no Aktifkan komponen main restricted universe dan multiverse milik\nUbuntu yang ada di /etc/apt/sources.list\no Masukkan repositori BlankOn ke /etc/apt/sources.list\ndeb ",(0,i.kt)("a",{parentName:"li",href:"http://arsip.blankonlinux.or.id/blankon"},"http://arsip.blankonlinux.or.id/blankon")," meuligoe main\nrestricted\ndeb ",(0,i.kt)("a",{parentName:"li",href:"http://arsip.blankonlinux.or.id/blankon"},"http://arsip.blankonlinux.or.id/blankon")," meuligoe-updates main\nrestricted\ndeb ",(0,i.kt)("a",{parentName:"li",href:"http://security.blankonlinux.or.id/blankon"},"http://security.blankonlinux.or.id/blankon")," meuligoe-security\nmain restricted\no Perbarui basis data paket\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt-get update"),"\no Naikkan versi\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt-get upgrade"),"\no Install blankon-desktop untuk varian Standar dan jawab Ya untuk\nsemua pertanyaan.\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt-get install blankon-desktop"),"\no Install blankon-desktop-minimalist untuk varian Minimalis dan jawab\nYa untuk semua pertanyaan.\n",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt-get install blankon-desktop-minimalist"))),(0,i.kt)("p",null,"Last modified on 11/20/2008 10:42:35 PM"),(0,i.kt)("hr",null))}c.isMDXComponent=!0}}]);