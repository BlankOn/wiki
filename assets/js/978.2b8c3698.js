(window.webpackJsonp=window.webpackJsonp||[]).push([[978,981],{1048:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1050),c=n(16),l=n(28),i=n(1068),s=n(1167),p=n(1055),u=n(3),d=n(1052),m={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},h={Prism:n(25).a,theme:m};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var g=/\r\n|\r|\n/,b=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},v=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},k=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=f({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=f({},n,{backgroundColor:null}),r};function j(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var O=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?k(e.theme,e.language):void 0;return t.themeDict=n})),y(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=f({},j(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?f({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),y(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),y(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=f({},j(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?f({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),y(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,p=t[c],u=n[c][o];if("string"==typeof u?(p=c>0?p:["plain"],s=u):(p=v(p,u.type),u.alias&&(p=v(p,u.alias)),s=u.content),"string"==typeof s){var d=s.split(g),m=d.length;l.push({types:p,content:d[0]});for(var h=1;h<m;h++)b(l),i.push(l=[]),l.push({types:p,content:d[h]})}else c++,t.push(p),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return b(l),i}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var E=n(1168),T=n.n(E),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},C=n(1071),x=n(1051),w=function(){var e=Object(x.useThemeConfig)().prism,t=Object(C.a)().isDarkTheme,n=e.theme||N,a=e.darkTheme||n;return t?a:n},P=n(1053),S=n(190),B=n.n(S),D=/{([\d,-]+)}/,L=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function A(e){var t=e.children,n=e.className,o=e.metastring,c=e.title,l=Object(x.useThemeConfig)().prism,i=Object(a.useState)(!1),s=i[0],p=i[1],m=Object(a.useState)(!1),y=m[0],f=m[1];Object(a.useEffect)((function(){f(!0)}),[]);var g=Object(x.parseCodeBlockTitle)(o)||c,b=Object(a.useRef)(null),v=[],k=w(),j=Array.isArray(t)?t.join(""):t;if(o&&D.test(o)){var E=o.match(D)[1];v=T()(E).filter((function(e){return e>0}))}var N=n&&n.replace(/language-/,"");!N&&l.defaultLanguage&&(N=l.defaultLanguage);var C=j.replace(/\n$/,"");if(0===v.length&&void 0!==N){for(var S,A="",I=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"]);case"jsx":case"tsx":return L(["js","jsBlock","jsx"]);case"html":return L(["js","jsBlock","html"]);case"python":case"py":return L(["python"]);default:return L()}}(N),R=j.replace(/\n$/,"").split("\n"),F=0;F<R.length;){var M=F+1,z=R[F].match(I);if(null!==z){switch(z.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":A+=M+",";break;case"highlight-start":S=M;break;case"highlight-end":A+=S+"-"+(M-1)+","}R.splice(F,1)}else F+=1}v=T()(A),C=R.join("\n")}var _=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(C),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.a.createElement(O,Object(u.a)({},h,{key:String(y),theme:k,code:C,language:N}),(function(e){var t,n=e.className,a=e.style,o=e.tokens,c=e.getLineProps,l=e.getTokenProps;return r.a.createElement("div",{className:B.a.codeBlockContainer},g&&r.a.createElement("div",{style:a,className:B.a.codeBlockTitle},g),r.a.createElement("div",{className:Object(d.a)(B.a.codeBlockContent,N)},r.a.createElement("div",{tabIndex:0,className:Object(d.a)(n,B.a.codeBlock,"thin-scrollbar",(t={},t[B.a.codeBlockWithTitle]=g,t))},r.a.createElement("div",{className:B.a.codeBlockLines,style:a},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=c({line:e,key:t});return v.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(u.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(u.a)({key:t},l({token:e,key:t})))})))})))),r.a.createElement("button",{ref:b,type:"button","aria-label":Object(P.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(d.a)(B.a.copyButton),onClick:_},s?r.a.createElement(P.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(P.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var I=n(7),R=(n(191),n(192)),F=n.n(R),M=function(e){return function(t){var n,a=t.id,o=Object(I.a)(t,["id"]),c=Object(x.useThemeConfig)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(d.a)("anchor",(n={},n[F.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+a,title:Object(P.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},z={code:function(e){var t=e.children;return Object(a.isValidElement)(t)?t:t.includes("\n")?r.a.createElement(A,e):r.a.createElement("code",e)},a:function(e){return r.a.createElement(p.a,e)},pre:function(e){var t,n=e.children;return Object(a.isValidElement)(null==n||null===(t=n.props)||void 0===t?void 0:t.children)?null==n?void 0:n.props.children:r.a.createElement(A,Object(a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:M("h1"),h2:M("h2"),h3:M("h3"),h4:M("h4"),h5:M("h5"),h6:M("h6")},_=n(1075),W=n(1092),$=n(23),V=n(193),H=n.n(V);function J(e){var t,n,l,p,u,m=e.currentDocRoute,h=e.versionMetadata,y=e.children,f=Object(c.default)(),g=f.siteConfig,b=f.isClient,v=h.pluginId,k=h.permalinkToSidebar,j=h.docsSidebars,O=h.version,E=k[m.path],T=j[E],N=Object(a.useState)(!1),C=N[0],w=N[1],S=Object(a.useState)(!1),B=S[0],D=S[1],L=Object(a.useCallback)((function(){B&&D(!1),w(!C)}),[B]);return r.a.createElement(i.a,{key:b,wrapperClassName:x.ThemeClassNames.wrapper.docPages,pageClassName:x.ThemeClassNames.page.docPage,searchMetadatas:{version:O,tag:Object(x.docVersionSearchTag)(v,O)}},r.a.createElement("div",{className:H.a.docPage},T&&r.a.createElement("div",{className:Object(d.a)(H.a.docSidebarContainer,(t={},t[H.a.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(H.a.docSidebarContainer)&&C&&D(!0)},role:"complementary"},r.a.createElement(s.a,{key:E,sidebar:T,path:m.path,sidebarCollapsible:null===(n=null===(l=g.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===n||n,onCollapse:L,isHidden:B}),B&&r.a.createElement("div",{className:H.a.collapsedDocSidebar,title:Object(P.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(P.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:L,onClick:L},r.a.createElement(W.a,{className:H.a.expandSidebarButtonIcon}))),r.a.createElement("main",{className:Object(d.a)(H.a.docMainContainer,(p={},p[H.a.docMainContainerEnhanced]=C||!T,p))},r.a.createElement("div",{className:Object(d.a)("container padding-vert--lg",H.a.docItemWrapper,(u={},u[H.a.docItemWrapperEnhanced]=C,u))},r.a.createElement(o.a,{components:z},y)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object($.matchPath)(a.pathname,e)}));return o?r.a.createElement(J,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(_.default,e)}},1050:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1075:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1068),c=n(1053);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},r.a.createElement(c.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),r.a.createElement("p",null,r.a.createElement(c.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},1092:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("svg",Object(a.a)({width:"20",height:"20",role:"img"},e),o.a.createElement("g",{fill:"#7a7a7a"},o.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},1168:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);