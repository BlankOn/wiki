(window.webpackJsonp=window.webpackJsonp||[]).push([[871],{1050:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function b(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),c=function(e){var n=a.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):b(b({},n),e)),r},p=function(e){var n=c(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(r),s=t,d=p["".concat(u,".").concat(s)]||p[s]||m[s]||i;return r?a.a.createElement(d,b(b({ref:n},l),{},{components:r})):a.a.createElement(d,b({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,u=new Array(i);u[0]=s;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:t,u[1]=b;for(var l=2;l<i;l++)u[l]=r[l];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},943:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return u})),r.d(n,"metadata",(function(){return b})),r.d(n,"toc",(function(){return o})),r.d(n,"default",(function(){return c}));var t=r(3),a=r(7),i=(r(0),r(1050)),u={},b={unversionedId:"TimPengembang/Infrastruktur/MembuatCerminBlankOn",id:"TimPengembang/Infrastruktur/MembuatCerminBlankOn",isDocsHomePage:!1,title:"Membuat Cermin BlankOn",description:"berikut ini adalah langkah untuk membuat cermin BlankOn,",source:"@site/Wiki/TimPengembang/Infrastruktur/MembuatCerminBlankOn.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/MembuatCerminBlankOn",permalink:"/TimPengembang/Infrastruktur/MembuatCerminBlankOn",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/MembuatCerminBlankOn.md",version:"current",frontMatter:{}},o=[],l={toc:o};function c(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"berikut ini adalah langkah untuk membuat cermin BlankOn,"),Object(i.b)("p",null,"pertama siapkan reprepro"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"$ sudo apt-get install reprepro\n")),Object(i.b)("p",null,"kemudian buat distribusi BlankOn, pasang konfigurasi untuk melakukan pembaruan dari arsip.boi"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"$ mkdir ~/repo/bulangkon\n$ cd ~/repo/bulangkon\n")),Object(i.b)("p",null,"trus bikin berkas2 berikut:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ vim conf/updates\n")),Object(i.b)("p",null,"isinya"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"-----------------awal----------\nName: mergeblankon\nSuite: ombilin\nMethod: http://arsip.blankonlinux.or.id/blankon\nArchitectures: i386 amd64 source\nComponents: main restricted\n-----------------akhir----------\n")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ vim conf/distributions\n")),Object(i.b)("p",null,"isinya"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"-----------------awal----------\nOrigin: BlankOn\nLabel: BlankOn\nVersion: 6.0\nSuite: ombilin\nCodename: ombilin\nArchitectures: i386 amd64 source\nComponents: main restricted\nDescription: Ombilin\nUpdate: - mergeblankon\n-----------------akhir----------\n")),Object(i.b)("p",null,"kemudian jalankan reprepro"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"$ reprepro -v -v -v update\n")),Object(i.b)("p",null,"lakukan setiap hari/atau jika ingin ada perubahan, kemudian pasang skrip pabrik-cd rujukan ",Object(i.b)("a",{parentName:"p",href:"http://dev.blankonlinux.or.id/browser/infrastruktur/pabrik-cd"},"http://dev.blankonlinux.or.id/browser/infrastruktur/pabrik-cd")),Object(i.b)("p",null,"Untuk membuat cabang:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"$ bzr branch http://dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/\n")),Object(i.b)("p",null,"Untuk memperbaharui:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"$ bzr push bzr+ssh://bzr@dev.blankonlinux.or.id/bzr/infrastruktur/pabrik-cd/\n")),Object(i.b)("p",null,"kemudian di profil pasang repo lokal"),Object(i.b)("p",null,"kemudian Jahit"),Object(i.b)("hr",null))}c.isMDXComponent=!0}}]);