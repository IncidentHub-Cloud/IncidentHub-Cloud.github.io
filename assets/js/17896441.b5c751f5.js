"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[401],{2447:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var s=n(6540),a=n(1213),o=n(9532),i=n(4848);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(l);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,i.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var m=n(4164),u=n(4581),h=n(1312),v=n(9022);function b(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(v.A,{...t,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(v.A,{...n,subLabel:(0,i.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=c();return(0,i.jsx)(b,{previous:e.previous,next:e.next})}var f=n(4586),p=n(8774),g=n(4070),j=n(7559),L=n(5597),C=n(2252);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function A(e){const t=N[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function _(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(p.A,{to:n,onClick:s,children:(0,i.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,f.A)(),{pluginId:a}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,L.g1)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,g.HW)(a),c=l??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,i.jsxs)("div",{className:(0,m.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(A,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>o(r.name)})})]})}function T(e){let{className:t}=e;const n=(0,C.r)();return n.banner?(0,i.jsx)(k,{className:t,versionMetadata:n}):null}function H(e){let{className:t}=e;const n=(0,C.r)();return n.badge?(0,i.jsx)("span",{className:(0,m.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var M=n(2053),I=n(4336);function E(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,tags:a}=e,o=a.length>0,l=!!(t||n||s);return o||l?(0,i.jsxs)("footer",{className:(0,m.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,i.jsx)("div",{className:(0,m.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(M.A,{tags:a})})}),l&&(0,i.jsx)(I.A,{className:(0,m.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s})]}):null}var w=n(1422),y=n(5195);const B={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function O(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,m.A)("clean-btn",B.tocCollapsibleButton,!t&&B.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const V={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,w.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,m.A)(V.tocCollapsible,!o&&V.tocCollapsibleExpanded,n),children:[(0,i.jsx)(O,{collapsed:o,onClick:l}),(0,i.jsx)(w.N,{lazy:!0,className:V.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(y.A,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const S={tocMobile:"tocMobile_ITEo"};function G(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(P,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(j.G.docs.docTocMobile,S.tocMobile)})}var R=n(7763);function U(){const{toc:e,frontMatter:t}=c();return(0,i.jsx)(R.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var D=n(1107),F=n(5533);function z(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,m.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(D.A,{as:"h1",children:n})}),(0,i.jsx)(F.A,{children:t})]})}var q=n(1754),$=n(9169),W=n(6025);function Y(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Z={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function J(){const e=(0,W.A)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(Y,{className:Z.breadcrumbHomeIcon})})})}const K={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Q(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(p.A,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function X(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,m.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,q.OF)(),t=(0,$.Dt)();return e?(0,i.jsx)("nav",{className:(0,m.A)(j.G.docs.docBreadcrumbs,K.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(J,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,i.jsx)(X,{active:s,index:n,addMicrodata:!!a,children:(0,i.jsx)(Q,{href:a,isLast:s,children:t.label})},n)}))]})}):null}var te=n(996);const ne={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,u.l)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(G,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(U,{})}}(),{metadata:{unlisted:s}}=c();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,m.A)("col",!n.hidden&&ne.docItemCol),children:[s&&(0,i.jsx)(te.A,{}),(0,i.jsx)(T,{}),(0,i.jsxs)("div",{className:ne.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(ee,{}),(0,i.jsx)(H,{}),n.mobile,(0,i.jsx)(z,{children:t}),(0,i.jsx)(E,{})]}),(0,i.jsx)(x,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function ae(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(r,{content:e.content,children:(0,i.jsxs)(a.e3,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(se,{children:(0,i.jsx)(n,{})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var s=n(4164),a=n(5195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(4848);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(a.A,{...n,linkClassName:l,linkActiveClassName:r})})}},5195:(e,t,n)=>{n.d(t,{A:()=>b});var s=n(6540),a=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),c=r(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(8774),u=n(4848);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const b=(0,a.p)(),x=c??b.tableOfContents.minHeadingLevel,f=m??b.tableOfContents.maxHeadingLevel,p=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:f}}),[l,r,x,f])),(0,u.jsx)(v,{toc:p,className:n,linkClassName:l,...h})}}}]);