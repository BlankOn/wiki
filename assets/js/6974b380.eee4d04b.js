"use strict";(self.webpackChunkdocusaurus_wiki=self.webpackChunkdocusaurus_wiki||[]).push([[44943],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,m=s["".concat(l,".").concat(f)]||s[f]||k[f]||i;return t?r.createElement(m,u(u({ref:n},c),{},{components:t})):r.createElement(m,u({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,u=new Array(i);u[0]=s;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var p=2;p<i;p++)u[p]=t[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},68173:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return k}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),u=["components"],o={},l="Menghidupkan Pelayan V1",p={unversionedId:"TimPengembang/Infrastruktur/PabrikPaket/MenghidupkanPelayanV1",id:"TimPengembang/Infrastruktur/PabrikPaket/MenghidupkanPelayanV1",title:"Menghidupkan Pelayan V1",description:"Menghidupkan Pabrik Paket Pelayan ini jika mesin setelah dilakukan restart atau",source:"@site/wiki/TimPengembang/Infrastruktur/PabrikPaket/MenghidupkanPelayanV1.md",sourceDirName:"TimPengembang/Infrastruktur/PabrikPaket",slug:"/TimPengembang/Infrastruktur/PabrikPaket/MenghidupkanPelayanV1",permalink:"/TimPengembang/Infrastruktur/PabrikPaket/MenghidupkanPelayanV1",draft:!1,editUrl:"https://github.com/BlankOn/wiki/edit/master/wiki/TimPengembang/Infrastruktur/PabrikPaket/MenghidupkanPelayanV1.md",tags:[],version:"current",frontMatter:{}},c={},k=[],s={toc:k};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"menghidupkan-pelayan-v1"},"Menghidupkan Pelayan V1"),(0,i.kt)("p",null,"Menghidupkan Pabrik Paket Pelayan ini jika mesin setelah dilakukan restart atau\nmati. Pabrik Paket Pelayan ini berada di marya. Tanda-tanda jika pabrik paket\npelayan tidak bekerja adalah halaman \u200b",(0,i.kt)("a",{parentName:"p",href:"http://irgsh.blankonlinux.or.id/"},"http://irgsh.blankonlinux.or.id/")," akan\nselalu berstatus new, untuk itu perlu dibangkitkan pabrik paket pekerja ini."),(0,i.kt)("p",null,"Caranya :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo su - irgsh`\ncd web-interfaces/task-init/\nnohup ./task-init.sh &\n")),(0,i.kt)("p",null,"Demikian"))}f.isMDXComponent=!0}}]);