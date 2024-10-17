"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[6756],{43826:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(74848),s=t(28453);const a={title:"2016-05-09"},r="2016-05-09 Exceptional meeting regarding build customization",o={id:"minutes/2016-05-09",title:"2016-05-09",description:"14:00 UTC",source:"@site/community/minutes/2016-05-09.md",sourceDirName:"minutes",slug:"/minutes/2016-05-09",permalink:"/community/minutes/2016-05-09",draft:!1,unlisted:!1,editUrl:"https://github.com/soapy1/conda-forge.github.io/tree/refs/heads/main/community/minutes/2016-05-09.md",tags:[],version:"current",lastUpdatedAt:1729165015e3,frontMatter:{title:"2016-05-09"},sidebar:"community",previous:{title:"2016-05-13",permalink:"/community/minutes/2016-05-13"},next:{title:"2016-04-29",permalink:"/community/minutes/2016-04-29"}},l={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",u:"u",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"2016-05-09-exceptional-meeting-regarding-build-customization",children:"2016-05-09 Exceptional meeting regarding build customization"})}),"\n",(0,i.jsx)(n.p,{children:"14:00 UTC"}),"\n",(0,i.jsx)(n.p,{children:"Hangout link: ???"}),"\n",(0,i.jsx)(n.p,{children:"Attendees: Michael Sarahan, Ray Donnelly, Kale Franz, Michael Grant, Ullrich Koethe, Stuart Berg, Phil Elson, Mark Wiebe"}),"\n",(0,i.jsx)(n.p,{children:"Agenda/Minutes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Version parameterization:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*   MichaelS:  proposing to have dependency resolution become part of meta.yaml  rendering.  May require extra (3rd) jinja rendering pass.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Need to know dependencies before Jinja templates can be fully expressed (main issue in #747)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Phil: not good, because you can\x19t differentiate between a manual entry of a value, and a templated entry of a value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    *   Don\x19t know which ones are important for build string\n\n            *   Build strings only matter when we have a build matrix; there to disambiguate\n*   MichaelS proposes manual specification of entries in build string\n*   Ullrich: if build strings just disambiguate, why not use hash?\n\n                    *   MichaelS: hash fine, but needs to be reproducible.\n\n    *   Heart of issue is that matrix build tools need some way to understand what parameterizes the build matrix.\n\n            *   MichaelS  offered that no matter what solution we settle on, there will be  something readily inspectable.  Maybe this can feed into automatically  creating the build string.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If recipe-local config.yaml is needed, Kale asks why not include it directly in meta.yaml"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*   Not  sure what use case necessitates recipe-local config.yaml (global one is  agreed upon by all).  MichaelS OK with meta.yaml modifications if need  be.\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Phil points out that global config.yaml might still need code changes for new versions of, say, Python."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*   MichaelS  says no, there\x19s surely ways we can express things like \x1clatest 2  versions\x1d - just question of how to technically achieve.\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ray:  filter things out of global config.yaml when they are not used in a  recipe (so that matrix dimensions are not needlessly added)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*   Ullrich:  However, one must be careful to not filter out indirect dependencies  that are not explicitly named in meta.yaml, but were intentionally added  to config.yaml. (example: meta.yaml lists h5py as a requirement, and  config.yaml restricts the indirect hdf5 dependency to a particular  variant of the hdf5 package). It is safer to err on the \x1ctoo much\x1d side.\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Build environment specification:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*   Conda-build 848 has \x1cbootstrap\x1d environment: user creates an env, that env is captured as build requirements for another recipe.\n\n        *   Phil: this ruins reproducibility, since it depends on the setup of the user\x19s system at build time.\n\n                *   Stuart: we\x19re already not reproducible, and this bootstrap doesn\x19t make things worse.\n    *   MichaelS:  if this is used to hard-pin build-time dependencies, it may actually  help reproducibility.  Hard-pinnning at build time is orthogonal to this  PR, but may be easier to achieve with it.\n    *   Ullrich:  if the contents of the build environment are recorded in index.json,  one can recreate the bootstrap environment at any time (or equivalently,  create config.yaml from that information), subject to the degree of  accuracy of the recorded data (e.g. are the source channels recorded, or  only version numbers and build strings?)\n\n        *   MichaelS,  Kale concerned that people may include too many unnecessary packages in  build requirements this way, out of carelessness or ignorance\n\n                *   Ullrich: not a big deal - runtime dependencies are what really matter.\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compiler customization:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*   Mark: 848 is OK, but how does it address compiler and build flags?\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.u,{children:(0,i.jsx)(n.a,{href:"https://github.com/conda/conda/issues/1959",children:"Conda 1959"})}),"  is example of build flags.  Uses bat/sh script at beginning of  bld.bat/build.sh.  Similar to Mark\x19s effort.  Don\x19t like having to add  that extra shell script, though - want native support"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    *   MichaelS  offered integration with conda-build, when use cases are better  understood.  Some kind of hook to call standardized setup script.\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ullrich:  The important aspect is that it should be easy for the conda-build user  to specify which setup script to use. Having specialized build packages  installed in a bootstrap environment seems to be an easy solution (e.g.  \x18conda create -n my_bootstrap_env visual-studio-build=12.0\x19 or \x18conda  create -n my_bootstrap_env visual-studio-build=12.0.debug\x19)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ullrich points out that these packages also need to exclude use with other packages, as they are not compatible"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Mark: would like to create easy to use instance of ",(0,i.jsx)(n.a,{href:"http://vfxplatform.com/"}),(0,i.jsx)(n.u,{children:(0,i.jsx)(n.a,{href:"http://vfxplatform.com/",children:"http://vfxplatform.com/"})})," using conda.  Wants to be in the loop as we get that functionality worked out."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ullrich: Critical requirements for the final solution (whatever it will be):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    *   Build dependency customization must be possible for _any_  package, although it would be OK if it were a bit more complicated for  the less common situations. It is crucial to support two cases:\n\n            *   Customize _indirect _dependencies not specified in meta.yaml.\n*   Narrow dependencies listed in meta.yaml (e.g. \x18python 3.*\x19 => \x18python 3.5.*\x19).\n\n    *   Run  requirements must be specialized during the build such that version  resolution will only select compatible variants, even if active channels  offer newer, yet incompatible variants (right now I usually use \x18-c  ukoethe --override-channels\x19, but this is a pain).\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);