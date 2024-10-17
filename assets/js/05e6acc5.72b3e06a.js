"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[919],{21385:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var o=t(74848),r=t(28453);const a={},i="Default branch migration from master to main",s={permalink:"/news/2022/02/13/default-branch-migration-from-master-to-main",source:"@site/news/2022-02-13-default-branch-migration-from-master-to-main.md",title:"Default branch migration from master to main",description:"We will be migrating the default branches of all feedstocks and other",date:"2022-02-13T00:00:00.000Z",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"Travis CI Usage Deprecated for win_*, osx_*, and linux_64 Platforms",permalink:"/news/2022/03/06/travis-ci-usage-deprecated-for-win-osx-and-linux64-platforms"},nextItem:{title:"CentOS 7 docker images are now the default",permalink:"/news/2021/12/02/centos-7-docker-images-are-now-the-default"}},c={authorsImageUrls:[]},m=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["We will be migrating the default branches of all feedstocks and other\nconda-forge repos from ",(0,o.jsx)(n.code,{children:"master"})," to ",(0,o.jsx)(n.code,{children:"main"}),". We do expect some minor\nhiccups while this migration is going on. You will need to change to the\n",(0,o.jsx)(n.code,{children:"main"})," branch from ",(0,o.jsx)(n.code,{children:"master"})," on any local clones via the following git\ncommands:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"git branch -m master main\ngit fetch origin\ngit branch -u origin/main main\ngit remote set-head origin -a\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you encounter any problems, please comment on this Github\n",(0,o.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/1162",children:"issue"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var o=t(96540);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);