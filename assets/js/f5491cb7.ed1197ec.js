"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[4210],{3905:function(a,n,e){e.d(n,{Zo:function(){return m},kt:function(){return s}});var t=e(67294);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function u(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function i(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?u(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):u(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function l(a,n){if(null==a)return{};var e,t,r=function(a,n){if(null==a)return{};var e,t,r={},u=Object.keys(a);for(t=0;t<u.length;t++)e=u[t],n.indexOf(e)>=0||(r[e]=a[e]);return r}(a,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(a);for(t=0;t<u.length;t++)e=u[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var p=t.createContext({}),o=function(a){var n=t.useContext(p),e=n;return a&&(e="function"==typeof a?a(n):i(i({},n),a)),e},m=function(a){var n=o(a.components);return t.createElement(p.Provider,{value:n},a.children)},k={inlineCode:"code",wrapper:function(a){var n=a.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(a,n){var e=a.components,r=a.mdxType,u=a.originalType,p=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),d=o(e),s=r,g=d["".concat(p,".").concat(s)]||d[s]||k[s]||u;return e?t.createElement(g,i(i({ref:n},m),{},{components:e})):t.createElement(g,i({ref:n},m))}));function s(a,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof a||r){var u=e.length,i=new Array(u);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=a,l.mdxType="string"==typeof a?a:r,i[1]=l;for(var o=2;o<u;o++)i[o]=e[o];return t.createElement.apply(null,i)}return t.createElement.apply(null,e)}d.displayName="MDXCreateElement"},75913:function(a,n,e){e.r(n),e.d(n,{assets:function(){return m},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return k}});var t=e(83117),r=e(80102),u=(e(67294),e(3905)),i=["components"],l={},p="Lumbung Paket",o={unversionedId:"Panduan/LumbungPaket",id:"Panduan/LumbungPaket",title:"Lumbung Paket",description:"Di BlankOn, hampir semua perangkat lunak berasal dari suatu tempat yang bernama lumbung paket (package repository). Saat Anda ingin memasang suatu perangkat lunak, Anda tidak perlu mengunduh sendiri paket perangkat lunak yang ingin Anda pasang. Anda hanya perlu menentukan sumber paket atau lumbung paket perangkat lunak tersebut melalui APT. APT adalah program yang berfungsi untuk mengunduh (download) paket yang Anda pilih dari lumbung dan memasangnya di komputer. Lumbung paket bisa berada dari empat sumber, yaitu:",source:"@site/wiki/Panduan/LumbungPaket.md",sourceDirName:"Panduan",slug:"/Panduan/LumbungPaket",permalink:"/Panduan/LumbungPaket",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/Panduan/LumbungPaket.md",tags:[],version:"current",frontMatter:{}},m={},k=[],d={toc:k};function s(a){var n=a.components,e=(0,r.Z)(a,i);return(0,u.kt)("wrapper",(0,t.Z)({},d,e,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"lumbung-paket"},"Lumbung Paket"),(0,u.kt)("p",null,"Di ",(0,u.kt)("a",{parentName:"p",href:"/BlankOn"},"BlankOn"),", hampir semua perangkat lunak berasal dari suatu tempat yang bernama lumbung paket (",(0,u.kt)("em",{parentName:"p"},"package repository"),"). Saat Anda ingin memasang suatu perangkat lunak, Anda tidak perlu mengunduh sendiri paket perangkat lunak yang ingin Anda pasang. Anda hanya perlu menentukan sumber paket atau lumbung paket perangkat lunak tersebut melalui APT. APT adalah program yang berfungsi untuk mengunduh (",(0,u.kt)("em",{parentName:"p"},"download"),") paket yang Anda pilih dari lumbung dan memasangnya di komputer. Lumbung paket bisa berada dari empat sumber, yaitu:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Server Web"),(0,u.kt)("li",{parentName:"ul"},"Jaringan Lokal, misalnya dari server NFS,"),(0,u.kt)("li",{parentName:"ul"},"CD/DVD-ROM,"),(0,u.kt)("li",{parentName:"ul"},"Folder lokal.")),(0,u.kt)("p",null,"Komunitas ",(0,u.kt)("a",{parentName:"p",href:"/BlankOn"},"BlankOn")," memiliki lumbung paket resmi yang berada di situs ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("a",{parentName:"strong",href:"http://arsip.blankonlinux.or.id/blankon"},"http://arsip.blankonlinux.or.id/blankon")),". Lumbung paket BlankOn sudah berisikan berbagai koleksi perangkat lunak yang lengkap dan siap untuk digunakan. Selain lumbung paket resmi, juga terdapat lumbung paket-lumbung paket lainnya yang isinya sama, namun hanya berbeda letak servernya. Sebagian besar dari lumbung paket yang ada disediakan oleh penyedia jasa cermin (mirror) dan beberapa perguruan tinggi di Indonesia."),(0,u.kt)("p",null,"Berikut adalah beberapa alamat lumbung paket yang ada di Indonesia:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"http://dl2.foss-id.web.id/blankon"},"http://dl2.foss-id.web.id/blankon")," (FOSS-ID, Telkom Indonesia)"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"http://kambing.ui.ac.id/blankon/"},"http://kambing.ui.ac.id/blankon/")," (Universitas Indonesia)"),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"http://pandawa.ipb.ac.id/blankon"},"http://pandawa.ipb.ac.id/blankon")," (Institut Pertanian Bogor)")))}s.isMDXComponent=!0}}]);