(window.webpackJsonp=window.webpackJsonp||[]).push([[546],{1043:function(e,n,r){"use strict";r.d(n,"a",(function(){return m}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),f=l(r),m=t,d=f["".concat(o,".").concat(m)]||f[m]||s[m]||i;return r?a.a.createElement(d,c(c({ref:n},p),{},{components:r})):a.a.createElement(d,c({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},613:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return u})),r.d(n,"default",(function(){return l}));var t=r(3),a=r(7),i=(r(0),r(1043)),o={},c={unversionedId:"TimPengembang/Infrastruktur/Administratif/Wiki",id:"TimPengembang/Infrastruktur/Administratif/Wiki",isDocsHomePage:!1,title:"Wiki",description:"Wiki BlankOn pada Trac",source:"@site/Wiki/TimPengembang/Infrastruktur/Administratif/Wiki.md",slug:"/TimPengembang/Infrastruktur/Administratif/Wiki",permalink:"/TimPengembang/Infrastruktur/Administratif/Wiki",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/Administratif/Wiki.md",version:"current"},u=[{value:"Menjalankan Trac",id:"menjalankan-trac",children:[]}],p={rightToc:u};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"wiki-blankon-pada-trac"},"Wiki BlankOn pada Trac"),Object(i.a)("h2",{id:"menjalankan-trac"},"Menjalankan Trac"),Object(i.a)("p",null,"Untuk menjalankan proses Trac :"),Object(i.a)("p",null,"Masuk ke mesin rani"),Object(i.a)("pre",null,Object(i.a)("code",Object(t.a)({parentName:"pre"},{}),"$ sudo su - wiki\n$ cd bin\n$ nohup ./run.sh &\n")))}l.isMDXComponent=!0}}]);