"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[24333],{3905:function(a,n,e){e.d(n,{Zo:function(){return o},kt:function(){return d}});var t=e(67294);function r(a,n,e){return n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function i(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function l(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){r(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function u(a,n){if(null==a)return{};var e,t,r=function(a,n){if(null==a)return{};var e,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||(r[e]=a[e]);return r}(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)e=i[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var k=t.createContext({}),s=function(a){var n=t.useContext(k),e=n;return a&&(e="function"==typeof a?a(n):l(l({},n),a)),e},o=function(a){var n=s(a.components);return t.createElement(k.Provider,{value:n},a.children)},m={inlineCode:"code",wrapper:function(a){var n=a.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(a,n){var e=a.components,r=a.mdxType,i=a.originalType,k=a.parentName,o=u(a,["components","mdxType","originalType","parentName"]),p=s(e),d=r,g=p["".concat(k,".").concat(d)]||p[d]||m[d]||i;return e?t.createElement(g,l(l({ref:n},o),{},{components:e})):t.createElement(g,l({ref:n},o))}));function d(a,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof a||r){var i=e.length,l=new Array(i);l[0]=p;var u={};for(var k in n)hasOwnProperty.call(n,k)&&(u[k]=n[k]);u.originalType=a,u.mdxType="string"==typeof a?a:r,l[1]=u;for(var s=2;s<i;s++)l[s]=e[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,e)}p.displayName="MDXCreateElement"},72184:function(a,n,e){e.r(n),e.d(n,{assets:function(){return o},contentTitle:function(){return k},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return m}});var t=e(83117),r=e(80102),i=(e(67294),e(3905)),l=["components"],u={},k="InstallProgram",s={unversionedId:"Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgram",id:"Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgram",title:"InstallProgram",description:"Untuk menambah program ke dalam sistem BlankOn Anda, ada beberapa cara yang dapat ditempuh;",source:"@site/wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgram.md",sourceDirName:"Lainnya/Kadaluarsa/Dokumentasi/Draf",slug:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgram",permalink:"/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgram",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/Lainnya/Kadaluarsa/Dokumentasi/Draf/InstallProgram.md",tags:[],version:"current",frontMatter:{}},o={},m=[{value:"Melalui Repositori Paket",id:"melalui-repositori-paket",level:4},{value:"Instalasi manual paket biner program",id:"instalasi-manual-paket-biner-program",level:4}],p={toc:m};function d(a){var n=a.components,e=(0,r.Z)(a,l);return(0,i.kt)("wrapper",(0,t.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installprogram"},"InstallProgram"),(0,i.kt)("p",null,"Untuk menambah program ke dalam sistem BlankOn Anda, ada beberapa cara yang dapat ditempuh;"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Melalui repositori paket."),(0,i.kt)("li",{parentName:"ul"},"Melalui instalasi manual paket binary program."),(0,i.kt)("li",{parentName:"ul"},"Melalui kompilasi sumber program.")),(0,i.kt)("h4",{id:"melalui-repositori-paket"},"Melalui Repositori Paket"),(0,i.kt)("p",null,"Repositori adalah suatu tempat di mana Anda dapat mengunduh dan menginstal program melalui internet. Sejak rilis kedua BlankOn, Konde, BlankOn\nmenggunakan Ubuntu sebagai basis pengembangannya. Karena itu, paket-paket program di BlankOn menggunakan format yang mirip dengan paket-paket Ubuntu,\ntermasuk repositorinya. Seperti halnya Ubuntu, BlankOn menggunakan aplikasi manajer paket untuk menginstall paket-paket aplikasi. Manajer paket adalah\nsebuah program untuk menginstal dan menghilangkan aplikasi, dan mencatat setiap komponen-komponen yang dibutuhkan oleh masing-masing aplikasi. Manajer\npaket secara otomatis akan mengunduh aplikasi yang dibutuhkan beserta komponen-komponennya dari internet, dan sekaligus menginstalnya. Ada tiga\nmanajer paket utama yang dapat Anda gunakan di BlankOn:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add/Remove Programs - Cara termudah untuk menginstal dan menghilangkan aplikasi."),(0,i.kt)("li",{parentName:"ul"},"Synaptic - Memiliki kontrol yang lebih maju atas perangkat lunak dan komponen sistem yang lain."),(0,i.kt)("li",{parentName:"ul"},"Apt - Jika Anda lebih suka menggunakan Terminal")),(0,i.kt)("p",null,"Anda hanya perlu membuka salah satu dari program-program di atas untuk menginstal aplikasi yang diinginkan. Yang perlu diperhatikan adalah: Anda\nmembutuhkan akses internet yang memadai, seperti ADSL (Telkom Speedy), 3G/ HSDPA, CDMA/EVDO, dll. Sangat tidak disarankan untuk melakukan instalasi\naplikasi melalui repositori dengan koneksi dial-up (Telkomnet Instan, dll.)."),(0,i.kt)("h4",{id:"instalasi-manual-paket-biner-program"},"Instalasi manual paket biner program"),(0,i.kt)("p",null,"Jika instalasi menggunakan manajer paket, paket aplikasi yang diinginkan akan diunduh dan diinstal beserta komponen-komponen yang dibutuhkan secara\notomatis, maka Anda dapat melakukannya secara manual. Jika Anda memiliki koneksi internet yang terbatas, Anda dapat saja mengunduh berkas paket\naplikasi yang diinginkan dari tempat lain, lalu menginstalnya secara offline di komputer Anda. Anda cukup mengunduh berkas paket yang diinginkan,\nbeserta paket-paket lain yang merupakan ketergantungan dari paket tersebut. Yang terpenting adalah berkas paket yang akan Anda instal berasal dari\nsumber yang aman, dan cocok dengan sistem BlankOn Anda. Ada banyak macam berkas paket untuk Linux, antara lain berkas Paket Debian (berkas .deb),\nberkas Paket Manajer RPM (berkas .rpm), Tarball (berkas .tar), dan berkas .run. Berkas paket aplikasi untuk BlankOn memiliki format Debian, seperti\nhalnya Ubuntu, yang ditandai dengan akhiran .deb . Meski demikian, tidak semua berkas berakhiran .deb kompatibel dengan sistem BlankOn Anda. Sebaiknya\nAnda memilih berkas paket yang khusus diperuntukkan bagi BlankOn 5 (Nanggar) atau Ubuntu 9.04 (Jaunty Jackalope). Hal ini adalah demi kestabilan\nsistem Anda."),(0,i.kt)("p",null," Last modified on 10/07/2011 10:22:00 AM"),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);