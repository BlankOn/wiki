(window.webpackJsonp=window.webpackJsonp||[]).push([[835],{1043:function(e,a,r){"use strict";r.d(a,"a",(function(){return l}));var n=r(0),t=r.n(n);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function u(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?u(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=t.a.createContext({}),b=function(e){var a=t.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},d=t.a.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=b(r),l=n,k=d["".concat(u,".").concat(l)]||d[l]||c[l]||i;return r?t.a.createElement(k,p(p({ref:a},s),{},{components:r})):t.a.createElement(k,p({ref:a},s))}));function l(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,u=new Array(i);u[0]=d;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,u[1]=p;for(var s=2;s<i;s++)u[s]=r[s];return t.a.createElement.apply(null,u)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},904:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return u})),r.d(a,"metadata",(function(){return p})),r.d(a,"rightToc",(function(){return o})),r.d(a,"default",(function(){return b}));var n=r(3),t=r(7),i=(r(0),r(1043)),u={},p={unversionedId:"TimPengembang/Infrastruktur/Repositori",id:"TimPengembang/Infrastruktur/Repositori",isDocsHomePage:!1,title:"Repositori",description:"Repositori",source:"@site/Wiki/TimPengembang/Infrastruktur/Repositori.md",slug:"/TimPengembang/Infrastruktur/Repositori",permalink:"/TimPengembang/Infrastruktur/Repositori",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/Repositori.md",version:"current"},o=[{value:"Administratif",id:"administratif",children:[{value:"Memperbarui konfigurasi dari bzr",id:"memperbarui-konfigurasi-dari-bzr",children:[]},{value:"Memperbarui paket dari Ubuntu",id:"memperbarui-paket-dari-ubuntu",children:[]},{value:"Membuat berkas index Packages.gz Sources.gz",id:"membuat-berkas-index-packagesgz-sourcesgz",children:[]},{value:"Memasukkan berkas paket .deb/.udeb + kode sumber menggunakan berkas",id:"memasukkan-berkas-paket-debudeb--kode-sumber-menggunakan-berkas",children:[]},{value:"Memasukkan berkas paket .deb",id:"memasukkan-berkas-paket-deb",children:[]},{value:"Memasukkan berkas paket debian-installer (.udeb)",id:"memasukkan-berkas-paket-debian-installer-udeb",children:[]},{value:"Memasukkan berkas kode sumber saja",id:"memasukkan-berkas-kode-sumber-saja",children:[]},{value:"Menghapus paket dari repositori",id:"menghapus-paket-dari-repositori",children:[]},{value:"Inisialisasi repositori saat membuat rilis baru",id:"inisialisasi-repositori-saat-membuat-rilis-baru",children:[]},{value:"Perawatan",id:"perawatan",children:[]},{value:"Membekukan rilis",id:"membekukan-rilis",children:[]}]}],s={rightToc:o};function b(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,r,{components:a,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"repositori"},"Repositori"),Object(i.a)("p",null,"Repositori BlankOn dibuat menggunakan program \u200breprepro"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Lokasi konfigurasi dan log di rani: /home/arsipdev/reprepro ($CONF)"),Object(i.a)("li",{parentName:"ul"},"Lokasi konfigurasi di bzr: \u200b",Object(i.a)("a",Object(n.a)({parentName:"li"},{href:"http://dev.blankonlinux.or.id/browser/infrastruktur/reprepro-config-rani"}),"http://dev.blankonlinux.or.id/browser/infrastruktur/reprepro-config-rani")),Object(i.a)("li",{parentName:"ul"},"Bawa .gnupg-archive simpan di home arsipdev"),Object(i.a)("li",{parentName:"ul"},"Jangan lupa untuk lakukan bzr pull di $CONF/conf setiap kali membuat perubahan di bzr"),Object(i.a)("li",{parentName:"ul"},"Lokasi repositori di rani: /home/arsipdev/repo/blankon"),Object(i.a)("li",{parentName:"ul"},"Sinkronisasi dengan Ubuntu dilakukan via crontab pada pengguna arsipdev")),Object(i.a)("h2",{id:"administratif"},"Administratif"),Object(i.a)("h3",{id:"memperbarui-konfigurasi-dari-bzr"},"Memperbarui konfigurasi dari bzr"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd $CONF/conf\nbzr pull\n")),Object(i.a)("h3",{id:"memperbarui-paket-dari-ubuntu"},"Memperbarui paket dari Ubuntu"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd $CONF\nreprepro -v -v -v -v -v update DIST\n")),Object(i.a)("p",null,"Perintah di atas akan melakukan apa yang dituliskan pada berkas conf/updates. Paket-paket yang terdaftar dalam berkas $DISTRO.blacklist tidak akan diperbarui."),Object(i.a)("h3",{id:"membuat-berkas-index-packagesgz-sourcesgz"},"Membuat berkas index Packages.gz Sources.gz"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd $CONF\nreprepro export DIST\n")),Object(i.a)("h3",{id:"memasukkan-berkas-paket-debudeb--kode-sumber-menggunakan-berkas"},"Memasukkan berkas paket .deb/.udeb + kode sumber menggunakan berkas"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),".changes\ncd CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION include DIST /PATH/TO/PACKAGE.changes\n")),Object(i.a)("h3",{id:"memasukkan-berkas-paket-deb"},"Memasukkan berkas paket .deb"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION includedeb DIST /PATH/TO/PACKAGE.deb\n")),Object(i.a)("h3",{id:"memasukkan-berkas-paket-debian-installer-udeb"},"Memasukkan berkas paket debian-installer (.udeb)"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION includeudeb DIST /PATH/TO/PACKAGE.udeb\n")),Object(i.a)("h3",{id:"memasukkan-berkas-kode-sumber-saja"},"Memasukkan berkas kode sumber saja"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd $CONF\nreprepro -C COMPONENT -P PRIORITY -S SECTION includedsc DIST /PATH/TO/PACKAGE.dsc\n")),Object(i.a)("h3",{id:"menghapus-paket-dari-repositori"},"Menghapus paket dari repositori"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd $CONF\nreprepro remove DIST NAMA_PAKET\n")),Object(i.a)("h3",{id:"inisialisasi-repositori-saat-membuat-rilis-baru"},"Inisialisasi repositori saat membuat rilis baru"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd $CONF\nreprepro pull <nama-distro-asal\\>\n")),Object(i.a)("h3",{id:"perawatan"},"Perawatan"),Object(i.a)("p",null,"Digunakan untuk menjaga/mengecek repository"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"cd $CONF\nreprepro dumpunreferenced\n")),Object(i.a)("p",null,"Gunakan opsi --keepunreferenced untuk simulasi"),Object(i.a)("h3",{id:"membekukan-rilis"},"Membekukan rilis"),Object(i.a)("p",null,"Tambahkan opsi ReadOnly? dan hilangkan tiffany.py , contoh"),Object(i.a)("pre",null,Object(i.a)("code",Object(n.a)({parentName:"pre"},{}),"Origin: BlankOn\nLabel: BlankOn\nCodename: nanggar\nSuite: nanggar\n....\nReadOnly: Yes  <----------\n")))}b.isMDXComponent=!0}}]);