(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1167:function(e,t,a){"use strict";var n=a(3),i=a(7),c=a(0),l=a.n(c),s=a(1052),o=a(1051),r=a(1080),b=a(1086),u=a(1087),m=a(1085),d=a(1055),p=a(1070),f=a(1088),v=a(1092),O=a(1090),h=a(1053),j=a(189),k=a.n(j);var E=function e(t,a){return"link"===t.type?Object(o.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},C=Object(c.memo)((function(e){var t=e.items,a=Object(i.a)(e,["items"]);return t.map((function(e,t){return l.a.createElement(_,Object(n.a)({key:t,item:e},a))}))}));function _(e){switch(e.item.type){case"category":return l.a.createElement(g,e);case"link":default:return l.a.createElement(S,e)}}function g(e){var t,a,o,r=e.item,b=e.onItemClick,u=e.collapsible,m=e.activePath,d=Object(i.a)(e,["item","onItemClick","collapsible","activePath"]),p=r.items,f=r.label,v=E(r,m),O=(a=v,o=Object(c.useRef)(a),Object(c.useEffect)((function(){o.current=a}),[a]),o.current),h=Object(c.useState)((function(){return!!u&&(!v&&r.collapsed)})),j=h[0],_=h[1],g=Object(c.useRef)(null),S=Object(c.useState)(void 0),N=S[0],I=S[1],y=function(e){var t;void 0===e&&(e=!0),I(e?(null===(t=g.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(c.useEffect)((function(){v&&!O&&j&&_(!1)}),[v,O,j]);var w=Object(c.useCallback)((function(e){e.preventDefault(),N||y(),setTimeout((function(){return _((function(e){return!e}))}),100)}),[N]);return 0===p.length?null:l.a.createElement("li",{className:Object(s.a)("menu__list-item",{"menu__list-item--collapsed":j})},l.a.createElement("a",Object(n.a)({className:Object(s.a)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&v},t[k.a.menuLinkText]=!u,t)),onClick:u?w:void 0,href:u?"#!":void 0},d),f),l.a.createElement("ul",{className:"menu__list",ref:g,style:{height:N},onTransitionEnd:function(){j||y(!1)}},l.a.createElement(C,{items:p,tabIndex:j?"-1":"0",onItemClick:b,collapsible:u,activePath:m})))}function S(e){var t,a=e.item,c=e.onItemClick,o=e.activePath,r=(e.collapsible,Object(i.a)(e,["item","onItemClick","activePath","collapsible"])),b=a.href,u=a.label,m=E(a,o);if("README"===u){var f=b.split("/");u=f[f.length-2]}return l.a.createElement("li",{className:"menu__list-item",key:u},l.a.createElement(d.a,Object(n.a)({className:Object(s.a)("menu__link",(t={"menu__link--active":m},t[k.a.menuLinkExternal]=!Object(p.a)(b),t)),to:b},Object(p.a)(b)&&{isNavLink:!0,exact:!0,onClick:c},r),u))}function N(e){var t=e.onClick;return l.a.createElement("button",{type:"button",title:Object(h.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(h.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(s.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:t},l.a.createElement(v.a,{className:k.a.collapseSidebarButtonIcon}))}function I(e){var t=e.responsiveSidebarOpened,a=e.onClick;return l.a.createElement("button",{"aria-label":t?Object(h.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(h.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?l.a.createElement("span",{className:Object(s.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement(O.a,{className:k.a.sidebarMenuIcon,height:24,width:24}))}t.a=function(e){var t,a,n=e.path,i=e.sidebar,d=e.sidebarCollapsible,p=void 0===d||d,v=e.onCollapse,O=e.isHidden,h=function(){var e=Object(r.a)().isAnnouncementBarClosed,t=Object(c.useState)(!e),a=t[0],n=t[1];return Object(m.a)((function(t){var a=t.scrollY;e||n(0===a)})),a}(),j=Object(o.useThemeConfig)(),E=j.navbar.hideOnScroll,_=j.hideableSidebar,g=Object(r.a)().isAnnouncementBarClosed,S=function(){var e=Object(c.useState)(!1),t=e[0],a=e[1];Object(b.a)(t);var n=Object(u.a)();return Object(c.useEffect)((function(){n===u.b.desktop&&a(!1)}),[n]),{showResponsiveSidebar:t,closeResponsiveSidebar:Object(c.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:Object(c.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),y=S.showResponsiveSidebar,w=S.closeResponsiveSidebar,R=S.toggleResponsiveSidebar;return l.a.createElement("div",{className:Object(s.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=E,t[k.a.sidebarHidden]=O,t))},E&&l.a.createElement(f.a,{tabIndex:-1,className:k.a.sidebarLogo}),l.a.createElement("div",{className:Object(s.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,(a={"menu--show":y},a[k.a.menuWithAnnouncementBar]=!g&&h,a))},l.a.createElement(I,{responsiveSidebarOpened:y,onClick:R}),l.a.createElement("ul",{className:"menu__list"},l.a.createElement(C,{items:i,onItemClick:w,collapsible:p,activePath:n}))),_&&l.a.createElement(N,{onClick:v}))}}}]);