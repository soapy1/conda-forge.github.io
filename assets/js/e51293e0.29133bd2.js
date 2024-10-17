"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[6679],{22061:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=i(74848),t=i(28453);const l={title:"2019-10-16"},o="2019-10-16 conda-forge core meeting",a={id:"minutes/2019-10-16",title:"2019-10-16",description:"Attendees",source:"@site/community/minutes/2019-10-16.md",sourceDirName:"minutes",slug:"/minutes/2019-10-16",permalink:"/community/minutes/2019-10-16",draft:!1,unlisted:!1,editUrl:"https://github.com/soapy1/conda-forge.github.io/tree/refs/heads/main/community/minutes/2019-10-16.md",tags:[],version:"current",lastUpdatedAt:1729165015e3,frontMatter:{title:"2019-10-16"},sidebar:"community",previous:{title:"2019-10-30",permalink:"/community/minutes/2019-10-30"},next:{title:"2019-10-02",permalink:"/community/minutes/2019-10-02"}},c={},d=[{value:"Attendees",id:"attendees",level:2},{value:"Agenda",id:"agenda",level:2},{value:"Your agenda items",id:"your-agenda-items",level:3},{value:"Subteam updates",id:"subteam-updates",level:3},{value:"Bot",id:"bot",level:4},{value:"ARM",id:"arm",level:4},{value:"Docs",id:"docs",level:4},{value:"staged-recipes",id:"staged-recipes",level:4},{value:"website",id:"website",level:4},{value:"CI infrastructure",id:"ci-infrastructure",level:3},{value:"Compiler upgrade",id:"compiler-upgrade",level:4},{value:"CFEP updates",id:"cfep-updates",level:3},{value:"cfep-03 Manual upload of builds",id:"cfep-03-manual-upload-of-builds",level:4},{value:"cfep-04 X11 and CDT policy",id:"cfep-04-x11-and-cdt-policy",level:4},{value:"cfep-05 dev/rc builds",id:"cfep-05-devrc-builds",level:4},{value:"cfep-06 Staged-recipes review lifecycle",id:"cfep-06-staged-recipes-review-lifecycle",level:4},{value:"cfep-08 Too Big To Fail",id:"cfep-08-too-big-to-fail",level:4},{value:"cfep-10 Feedstock statuses, unmaintained",id:"cfep-10-feedstock-statuses-unmaintained",level:4},{value:"Discussion",id:"discussion",level:2},{value:"Check in on previous action items",id:"check-in-on-previous-action-items",level:2},{value:"2 meeting",id:"2-meeting",level:3},{value:"3 meetings ago",id:"3-meetings-ago",level:3},{value:"3 meetings ago",id:"3-meetings-ago-1",level:3},{value:"New Action items",id:"new-action-items",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",input:"input",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2019-10-16-conda-forge-core-meeting",children:"2019-10-16 conda-forge core meeting"})}),"\n",(0,s.jsx)(n.h2,{id:"attendees",children:"Attendees"}),"\n",(0,s.jsx)(n.h2,{id:"agenda",children:"Agenda"}),"\n",(0,s.jsx)(n.h3,{id:"your-agenda-items",children:"Your agenda items"}),"\n",(0,s.jsx)(n.p,{children:"(Filipe) Should we try GSoC? If so, should we try under the NumFOCUS umbrella? Deadline is Monday, October 28 at 17:00 UTC!\nDiscussion:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ideas?\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Should be straightforward to get started"}),"\n",(0,s.jsx)(n.li,{children:"Should have a meaningful impact"}),"\n",(0,s.jsx)(n.li,{children:"Should have a meaningful endpoint"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Willing to mentor?"}),"\n",(0,s.jsx)(n.li,{children:"Start creating/tagging issues GSoC or maybe build a project of issues"}),"\n",(0,s.jsxs)(n.li,{children:["Need to find students\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CJ: Put out feelers"}),"\n",(0,s.jsx)(n.li,{children:"Can be undergrad or grad"}),"\n",(0,s.jsx)(n.li,{children:"Anthony: Tweet out we're looking for people who want to champion  GSOC?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"(CJ) Python 3.8 progress\nDiscussion:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Windows issue is pretty nasty. (",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/python-feedstock/pull/274#issuecomment-542331428",children:"https://github.com/conda-forge/python-feedstock/pull/274#issuecomment-542331428"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Something's up with macos (fixed if you don't build with LTO - Link Time Optimization - but that's more fun)"}),"\n",(0,s.jsx)(n.li,{children:"Jonathan has linux packages with py38 label on his anaconda.org channel."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"subteam-updates",children:"Subteam updates"}),"\n",(0,s.jsx)(n.h4,{id:"bot",children:"Bot"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["(CJ) License bot is operational.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Upstream to conda skeleton? Show Filipe that part of the code ",(0,s.jsx)(n.a,{href:"https://github.com/regro/cf-scripts/blob/master/conda_forge_tick/migrators.xsh#L99",children:"link"})]}),"\n",(0,s.jsxs)(n.li,{children:["List of all feedstocks that dont have a license: ",(0,s.jsx)(n.a,{href:"https://github.com/regro/cf-graph-countyfair/blob/master/status/unlicensed.json",children:"link"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"(CJ) libnetcdf and zstd migrations are up"}),"\n",(0,s.jsx)(n.li,{children:"(CJ) CFEP9 docs went up, seemed to help new users with issuing PRs"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"arm",children:"ARM"}),"\n",(0,s.jsx)(n.h4,{id:"docs",children:"Docs"}),"\n",(0,s.jsx)(n.h4,{id:"staged-recipes",children:"staged-recipes"}),"\n",(0,s.jsx)(n.h4,{id:"website",children:"website"}),"\n",(0,s.jsx)(n.h3,{id:"ci-infrastructure",children:"CI infrastructure"}),"\n",(0,s.jsx)(n.h4,{id:"compiler-upgrade",children:"Compiler upgrade"}),"\n",(0,s.jsx)(n.h3,{id:"cfep-updates",children:"CFEP updates"}),"\n",(0,s.jsx)(n.p,{children:"How do we start getting traction on these?"}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-03-manual-upload-of-builds",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/5",children:"cfep-03"})," Manual upload of builds"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Filipe to review, fix any text and merge it in."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-04-x11-and-cdt-policy",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/7",children:"cfep-04"})," X11 and CDT policy"]}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-05-devrc-builds",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/3",children:"cfep-05"})," dev/rc builds"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It seems that the ",(0,s.jsx)(n.code,{children:"conda install label::package"})," syntax gives some odd/unexpected results"]}),"\n",(0,s.jsx)(n.li,{children:"Maybe we should build a cron job that tests some expected environments?"}),"\n",(0,s.jsxs)(n.li,{children:["discussion:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"doesn't"}),"\n",(0,s.jsx)(n.li,{children:"automated dev builds: opt-in?"}),"\n",(0,s.jsx)(n.li,{children:"enable maintainers to ask for a new PR to be created for a dev release."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-06-staged-recipes-review-lifecycle",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/9",children:"cfep-06"})," Staged-recipes review lifecycle"]}),"\n",(0,s.jsx)(n.h4,{id:"cfep-08-too-big-to-fail",children:"cfep-08 Too Big To Fail"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tabled for the time being"}),"\n",(0,s.jsx)(n.li,{children:"CJ: Merge this in with the Deferred Status."}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"cfep-10-feedstock-statuses-unmaintained",children:[(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-enhancement-proposals/pull/15",children:"cfep-10"})," Feedstock statuses, unmaintained"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'How to handle being a collection of packages "which work" and/or an archival store.'}),"\n",(0,s.jsxs)(n.li,{children:["Epoching of the conda-forge channel\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Epoching in conda\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["two indexes ",(0,s.jsx)(n.code,{children:"current_repodata.json"})," and ",(0,s.jsx)(n.code,{children:"repodata.json"})]}),"\n",(0,s.jsx)(n.li,{children:"Build on this idea for more epochs"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Shallow graph thing"}),"\n",(0,s.jsx)(n.li,{children:"Put time slice repodata.json file on CDN?"}),"\n",(0,s.jsxs)(n.li,{children:["enable ",(0,s.jsx)(n.code,{children:"conda install package -date=Jan2019"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Purpose of conda-forge: Reproducibility vs replicability vs new stuff that just works\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ways in which we can help with reproducibility:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'label all packages with "reproducible" or "all"'}),"\n",(0,s.jsx)(n.li,{children:"lock/freeze your environment"}),"\n",(0,s.jsx)(n.li,{children:'conda create with locked environment pointing to the "all" channel of conda-forge'}),"\n",(0,s.jsx)(n.li,{children:"Best Practices on using conda, conda files, environment.yml, construct.yml, anaconda.org, local channels, etc."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsx)(n.h2,{id:"check-in-on-previous-action-items",children:"Check in on previous action items"}),"\n",(0,s.jsx)(n.p,{children:"Copy previous action items from last meeting agenda."}),"\n",(0,s.jsx)(n.h3,{id:"2-meeting",children:"2 meeting"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Email out to see if we can get more engagement on regular dev meetings."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Sophia) Set up meeting to talk about Condafile stuff."]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," (CJ) write blog post on bot work and compiler migration"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Filipe) Ping Bjorn to try and get Debian community more involved with conda-forge"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Eric) Scheduling Anaconda <-> conda-forge sync on anaconda.org requirements gathering"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Anthony) Reach out to NumFocus to figure out legal ramifications of not including licenses in files."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-meetings-ago",children:"3 meetings ago"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Filipe) Progress on setting up a self-hosted blog\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Medium seems to be generally downvoted"}),"\n",(0,s.jsx)(n.li,{children:"Host your own blog seems to be generally positive"}),"\n",(0,s.jsxs)(n.li,{children:["Can we mimic what Dask does for their dev blog? ",(0,s.jsx)(n.a,{href:"https://github.com/dask/dask-blog",children:"https://github.com/dask/dask-blog"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," (Needs Owner) Searching on our website is a little difficult"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0}),' (Filipe, Anthony) Improve docs on releasing conda-smithy. Currently says "use rever". Would be good to fill out more info there for those of us that are unfamiliar with rever.']}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-meetings-ago-1",children:"3 meetings ago"}),"\n",(0,s.jsx)(n.h2,{id:"new-action-items",children:"New Action items"}),"\n",(0,s.jsx)(n.p,{children:"Copy new action items to next meetings agenda so we can check in.\nMake sure each action item is assigned to someone or it will likely not get done."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},l=s.createContext(t);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);