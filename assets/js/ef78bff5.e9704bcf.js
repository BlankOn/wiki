"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[34890],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),c=s(a),d=n,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return a?r.createElement(g,o(o({ref:t},m),{},{components:a})):r.createElement(g,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},71737:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=a(83117),n=a(80102),i=(a(67294),a(3905)),o=["components"],u={},l=void 0,s={unversionedId:"TimPengembang/Infrastruktur/PbuilderBaseTgz",id:"TimPengembang/Infrastruktur/PbuilderBaseTgz",title:"PbuilderBaseTgz",description:"Memperbarui daftar paket di dalam chroot",source:"@site/wiki/TimPengembang/Infrastruktur/PbuilderBaseTgz.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/PbuilderBaseTgz",permalink:"/TimPengembang/Infrastruktur/PbuilderBaseTgz",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Infrastruktur/PbuilderBaseTgz.md",tags:[],version:"current",frontMatter:{}},m={},p=[{value:"Memperbarui daftar paket di dalam chroot",id:"memperbarui-daftar-paket-di-dalam-chroot",level:3},{value:"Login ke dalam base.tgz",id:"login-ke-dalam-basetgz",level:3},{value:"Login ke dalam base.tgz, kemudian simpan saat logout",id:"login-ke-dalam-basetgz-kemudian-simpan-saat-logout",level:3},{value:"Login ke dalam base.tgz spesifik, kemudian simpan saat logout",id:"login-ke-dalam-basetgz-spesifik-kemudian-simpan-saat-logout",level:3}],c={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"memperbarui-daftar-paket-di-dalam-chroot"},"Memperbarui daftar paket di dalam chroot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# sudo pbuilder update\n")),(0,i.kt)("h3",{id:"login-ke-dalam-basetgz"},"Login ke dalam base.tgz"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# sudo pbuilder login\n")),(0,i.kt)("h3",{id:"login-ke-dalam-basetgz-kemudian-simpan-saat-logout"},"Login ke dalam base.tgz, kemudian simpan saat logout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# sudo pbuilder login --save-after-login\n")),(0,i.kt)("h3",{id:"login-ke-dalam-basetgz-spesifik-kemudian-simpan-saat-logout"},"Login ke dalam base.tgz spesifik, kemudian simpan saat logout"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# sudo pbuilder login --save-after-login --basetgz /path/to/base.tgz\n")))}d.isMDXComponent=!0}}]);