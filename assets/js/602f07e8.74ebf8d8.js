(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1050:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=b(n),s=r,d=m["".concat(a,".").concat(s)]||m[s]||p[s]||i;return n?o.a.createElement(d,l(l({ref:t},u),{},{components:n})):o.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(1050)),a={},l={unversionedId:"TimPengembang/Pemaket/BibitPaket/Boot",id:"TimPengembang/Pemaket/BibitPaket/Boot",isDocsHomePage:!1,title:"Boot",description:"Bibit Paket - Boot",source:"@site/Wiki/TimPengembang/Pemaket/BibitPaket/Boot.md",sourceDirName:"TimPengembang/Pemaket/BibitPaket",slug:"/TimPengembang/Pemaket/BibitPaket/Boot",permalink:"/TimPengembang/Pemaket/BibitPaket/Boot",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Pemaket/BibitPaket/Boot.md",version:"current",frontMatter:{}},c=[{value:"Bibit Paket - Boot",id:"bibit-paket---boot",children:[]}],u={toc:c};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"bibit-paket---boot"},"Bibit Paket - Boot"),Object(i.b)("h1",{id:"kernels-and-bootloaders"},"Kernels and Bootloaders"),Object(i.b)("p",null,"The default kernels and bootloaders are not to be installed by debootstrap,\nand *-minimal metapackages should not depend on them; however, they do need\nto end up on CD images and in live filesystems. We therefore put them in a\nseparate seed."),Object(i.b)("p",null,"We seed both linux-",Object(i.b)("em",{parentName:"p"}," and linux-image-")," so that it's easier to build CD\nimages without the restricted component. The linux-* kernels include\nrestricted modules."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Kernel-Stem: linux linux-image\n== i386 =="),Object(i.b)("li",{parentName:"ul"},"grub ","[amd64 i386]","                      # lilo will be in supported"),Object(i.b)("li",{parentName:"ul"},"${Kernel-Stem}-generic ","[i386]","          # our chosen default install kernel")),Object(i.b)("p",null,"Last modified on 06/16/2008 10:54:22 AM"),Object(i.b)("hr",null))}b.isMDXComponent=!0}}]);