"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[61],{7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(6540);var a=t(4164),l=t(1213),s=t(7559),i=t(781),r=t(5533),o=t(7763),c=t(996),d=t(4336);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(4848);function f(e){const{content:n}=e,{metadata:{title:t,editUrl:f,description:v,frontMatter:g,unlisted:h,lastUpdatedBy:x,lastUpdatedAt:p},assets:L}=n,{keywords:N,wrapperClassName:C,hide_table_of_contents:H}=g,b=L.image??g.image,A=!!(f||p||x);return(0,u.jsx)(l.e3,{className:(0,a.A)(C??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(i.A,{children:[(0,u.jsx)(l.be,{title:t,description:v,keywords:N,image:b}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.A)("col",!H&&"col--8"),children:[h&&(0,u.jsx)(c.A,{}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(n,{})})}),A&&(0,u.jsx)(d.A,{className:(0,a.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:f,lastUpdatedAt:p,lastUpdatedBy:x})]}),!H&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(o.A,{toc:n.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},7763:(e,n,t)=>{t.d(n,{A:()=>c});t(6540);var a=t(4164),l=t(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=t(4848);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,i.jsx)(l.A,{...t,linkClassName:r,linkActiveClassName:o})})}},5195:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(6540),l=t(6342);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...l}=e;t>=0?n[t].children.push(l):a.push(l)})),a}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:s,maxHeadingLevel:i}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let l=n;l<=t;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:i}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(l),e.classList.add(l),n.current=e):e.classList.remove(l)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(8774),u=t(4848);function f(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?(0,u.jsx)("ul",{className:l?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const v=a.memo(f);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...f}=e;const g=(0,l.p)(),h=c??g.tableOfContents.minHeadingLevel,x=m??g.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>i({toc:s(n),minHeadingLevel:t,maxHeadingLevel:l})),[n,t,l])}({toc:n,minHeadingLevel:h,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:h,maxHeadingLevel:x}}),[r,o,h,x])),(0,u.jsx)(v,{toc:p,className:t,linkClassName:r,...f})}}}]);