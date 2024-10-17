"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[7731],{27293:(e,n,t)=>{t.d(n,{A:()=>M});var r=t(96540),a=t(74848);function s(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=r.Children.toArray(e),t=n.find((e=>r.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),s=n.filter((e=>e!==t)),i=t?.props.children;return{mdxAdmonitionTitle:i,rest:s.length>0?(0,a.jsx)(a.Fragment,{children:s}):null}}(e.children),s=e.title??n;return{...e,...s&&{title:s},children:t}}var i=t(34164),o=t(21312),c=t(17559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){let{type:n,className:t,children:r}=e;return(0,a.jsx)("div",{className:(0,i.A)(c.G.common.admonition,c.G.common.admonitionType(n),l.admonition,t),children:r})}function h(e){let{icon:n,title:t}=e;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function f(e){let{children:n}=e;return n?(0,a.jsx)("div",{className:l.admonitionContent,children:n}):null}function m(e){const{type:n,icon:t,title:r,children:s,className:i}=e;return(0,a.jsxs)(d,{type:n,className:i,children:[r||t?(0,a.jsx)(h,{title:r,icon:t}):null,(0,a.jsx)(f,{children:s})]})}function u(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const x={icon:(0,a.jsx)(u,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function j(e){return(0,a.jsx)(m,{...x,...e,className:(0,i.A)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const p={icon:(0,a.jsx)(g,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(m,{...p,...e,className:(0,i.A)("alert alert--success",e.className),children:e.children})}function b(e){return(0,a.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const k={icon:(0,a.jsx)(b,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function w(e){return(0,a.jsx)(m,{...k,...e,className:(0,i.A)("alert alert--info",e.className),children:e.children})}function N(e){return(0,a.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const y={icon:(0,a.jsx)(N,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function A(e){return(0,a.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const C={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const _={icon:(0,a.jsx)(N,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const z={...{note:j,tip:v,info:w,warning:function(e){return(0,a.jsx)(m,{...y,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,a.jsx)(m,{...C,...e,className:(0,i.A)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,a.jsx)(j,{title:"secondary",...e}),important:e=>(0,a.jsx)(w,{title:"important",...e}),success:e=>(0,a.jsx)(v,{title:"success",...e}),caution:function(e){return(0,a.jsx)(m,{..._,...e,className:(0,i.A)("alert alert--warning",e.className),children:e.children})}}};function M(e){const n=s(e),t=(r=n.type,z[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),z.info));var r;return(0,a.jsx)(t,{...n})}},85062:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var r=t(96540),a=t(12921),s=t(27293),i=t(74848);function o(e,n){const t=e.length,r=n.length,a=Array.from(Array(t+1),(()=>Array(r+1).fill(0)));for(let i=0;i<=t;i++)a[i][0]=i;for(let i=0;i<=r;i++)a[0][i]=i;for(let i=1;i<=t;i++)for(let t=1;t<=r;t++)e[i-1]===n[t-1]?a[i][t]=a[i-1][t-1]:a[i][t]=Math.min(a[i-1][t-1]+1,a[i][t-1]+1,a[i-1][t]+1);const s=Math.max(t,r);return a[t][r]/s}function c(e,n){const t=n.toLowerCase(),r=e.toLowerCase().indexOf(t);if(-1===r)return e;const a=r+n.length;return(0,i.jsxs)("span",{children:[e.substring(0,r),(0,i.jsx)("strong",{children:e.substring(r,a)}),e.substring(a)]})}const l=()=>{const[e,n]=(0,r.useState)({}),[t,a]=(0,r.useState)([]),[l,d]=(0,r.useState)("");(0,r.useEffect)((()=>{(async()=>{try{const n=await fetch(`https://conda.anaconda.org/conda-forge/rss.xml?bustcache=${Date.now()}`),t=await n.text(),r=(new DOMParser).parseFromString(t,"text/xml"),s=r.querySelectorAll("title"),i=r.querySelectorAll("pubDate");var e=[];s.forEach(((n,t)=>t&&e.push({name:n.textContent.split(" ")[0],date:i[t-1].textContent}))),a(e)}catch(n){console.error("Error fetching latest packages:",n)}})(),(async()=>{try{const e=await fetch("https://raw.githubusercontent.com/conda-forge/feedstock-outputs/single-file/feedstock-outputs.json"),t=await e.json();"object"==typeof t&&null!==t?n(Object.fromEntries(Object.entries(t).map((e=>{let[n,t]=e;return[n.toLowerCase(),t]})))):console.error("Invalid data format. Expected an object.")}catch(e){console.error("Error fetching packages:",e)}})()}),[]);const h=l.toLowerCase();var f,m=[];if(l.length>0){f=l.length>=3?e=>e.includes(h):e=>e.startsWith(h);for(const n in e)f(n)&&m.push(n)}m.sort(((e,n)=>o(e,h)-o(n,h)));const u=n=>(e[n.toLowerCase()]||[]).map(((e,t)=>(0,i.jsxs)("span",{children:[(0,i.jsxs)("a",{href:`https://github.com/conda-forge/${e}-feedstock`,target:"_blank",rel:"noopener noreferrer",title:`View ${e}-feedstock on GitHub`,children:[e,"-feedstock"]}),(0,i.jsx)("br",{})]},`${n}-${t}-${e}`)))||(0,i.jsx)("span",{children:"No feedstock found"}),x=e=>(0,i.jsx)("a",{href:`https://conda-metadata-app.streamlit.app/?q=conda-forge/${e}`,target:"_blank",rel:"noopener noreferrer",title:`Explore ${e} metadata`,children:"Browse"});var j,g;return l.length?(j=(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Package"}),(0,i.jsx)("th",{children:"Feedstock(s)"}),(0,i.jsx)("th",{children:"Metadata"})]})}),(0,i.jsx)("tbody",{children:m.length&&m.map((e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:`https://anaconda.org/conda-forge/${e}`,target:"_blank",title:`View ${e} on anaconda.org`,children:c(e,h)})}),(0,i.jsx)("td",{children:u(e)}),(0,i.jsx)("td",{children:(0,i.jsx)("center",{children:x(e)})})]},e)))||(0,i.jsx)("tr",{children:(0,i.jsx)("td",{colSpan:"3",children:"No packages found"})})})]}),g=(0,i.jsxs)("span",{className:"badge badge--secondary margin-left--sm",children:[m.length," package(s) found"]})):(j=(0,i.jsxs)("div",{children:[(0,i.jsx)(s.A,{type:"tip",coll:!0,children:(0,i.jsxs)("p",{children:["The following packages have recently received updates in"," ",(0,i.jsx)("a",{href:"https://anaconda.org/conda-forge",target:"_blank",rel:"noopener noreferrer",children:"Anaconda.org"}),". Check"," ",(0,i.jsx)("a",{href:"https://github.com/conda-forge/feedstocks/commits",target:"_blank",rel:"noopener noreferrer",children:"conda-forge/feedstocks"})," ","for an overview of the latest commits in our feedstocks."]})}),(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"#"}),(0,i.jsx)("th",{children:"Package"}),(0,i.jsx)("th",{children:"Feedstock(s)"}),(0,i.jsx)("th",{children:"Metadata"}),(0,i.jsx)("th",{children:"Last updated"})]})}),(0,i.jsx)("tbody",{children:t.map(((e,n)=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:n+1}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:`https://anaconda.org/conda-forge/${e.name}`,target:"_blank",rel:"noopener noreferrer",children:e.name})}),(0,i.jsx)("td",{children:u(e.name)}),(0,i.jsx)("td",{children:(0,i.jsx)("center",{children:x(e.name)})}),(0,i.jsx)("td",{children:e.date})]},e.name)))})]})]}),g=(0,i.jsxs)("span",{className:"badge badge--secondary margin-left--sm",children:[Object.keys(e).length," packages loaded"]})),(0,i.jsx)("div",{className:["container","margin-vert--lg"].join(" "),children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("main",{className:"col col--12",children:[(0,i.jsx)("h1",{children:"Packages in conda-forge"}),(0,i.jsx)("form",{id:"filterPackages",className:"margin-vert--md",children:(0,i.jsx)("div",{className:"navbar__search",children:(0,i.jsxs)("label",{htmlFor:"filterPackagesInput",children:[(0,i.jsx)("input",{id:"filterPackagesInput",type:"text",placeholder:"Filter items...",value:l,onChange:e=>{d(e.target.value)},className:"navbar__search-input"}),g]})})}),j]})})})};function d(){return(0,i.jsx)(a.A,{title:"Packages",description:"Search conda-forge for packages and their feedstocks",children:(0,i.jsx)(l,{})})}}}]);