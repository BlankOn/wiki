(window.webpackJsonp=window.webpackJsonp||[]).push([[687],{1050:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),f=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},s=function(e){var n=f(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(r),m=t,b=s["".concat(i,".").concat(m)]||s[m]||l[m]||a;return r?o.a.createElement(b,u(u({ref:n},p),{},{components:r})):o.a.createElement(b,u({ref:n},p))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:t,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},757:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return u})),r.d(n,"toc",(function(){return c})),r.d(n,"default",(function(){return f}));var t=r(3),o=r(7),a=(r(0),r(1050)),i={},u={unversionedId:"TimPengembang/Infrastruktur/Konf",id:"TimPengembang/Infrastruktur/Konf",isDocsHomePage:!1,title:"Konf.boi",description:"Untuk memperaharui situs konf.boi dilakukan di",source:"@site/Wiki/TimPengembang/Infrastruktur/Konf.md",sourceDirName:"TimPengembang/Infrastruktur",slug:"/TimPengembang/Infrastruktur/Konf",permalink:"/TimPengembang/Infrastruktur/Konf",editUrl:"https://github.com/BlankOn/wiki/edit/master/Wiki/TimPengembang/Infrastruktur/Konf.md",version:"current",frontMatter:{}},c=[],p={toc:c};function f(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Untuk memperaharui situs konf.boi dilakukan di"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"bzr \u200bhttp://dev.blankonlinux.or.id/browser/infrastruktur/konfboi\n")),Object(a.b)("p",null,"login ke marya"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ sudo su - situs\n$ cd konf\n$ bzr pull\n$ exit\n$ sudo /etc/init.d/fastcgi restart\n$ cd /home/situs/run\n$ sudo ./restart.sh\n")))}f.isMDXComponent=!0}}]);