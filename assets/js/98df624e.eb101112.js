"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[6295],{30387:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=i(74848),t=i(28453);const o={title:"2016-06-03"},r="2016-06-03",a={id:"minutes/2016-06-03",title:"2016-06-03",description:"Time00 UTC",source:"@site/community/minutes/2016-06-03.md",sourceDirName:"minutes",slug:"/minutes/2016-06-03",permalink:"/community/minutes/2016-06-03",draft:!1,unlisted:!1,editUrl:"https://github.com/soapy1/conda-forge.github.io/tree/refs/heads/main/community/minutes/2016-06-03.md",tags:[],version:"current",lastUpdatedAt:1729165015e3,frontMatter:{title:"2016-06-03"},sidebar:"community",previous:{title:"2016-06-09",permalink:"/community/minutes/2016-06-09"},next:{title:"2016-05-13",permalink:"/community/minutes/2016-05-13"}},l={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",s:"s",strong:"strong",u:"u",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"2016-06-03",children:"2016-06-03"})}),"\n",(0,s.jsx)(n.p,{children:"Time: 14:00 UTC"}),"\n",(0,s.jsxs)(n.p,{children:["Hangout link: ",(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"})," ",(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie",children:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Attendees"})}),"\n",(0,s.jsxs)(n.p,{children:["Ray, Matt, Jonathan, Phil, Jonas, Michael, Philippe, John, ",(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/DMmBLyb21HK",children:"Bjorn Gruning"}),", Jan"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Standing items"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How many repos?"}),"\n",(0,s.jsx)(n.li,{children:"How many contributors?"}),"\n",(0,s.jsx)(n.li,{children:"New core devs?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Agenda"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"PyPI metadata redundancy"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Python3 vs Python==3"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"How to depend (inc build depend) on applications which require Python 3, from a Python==2 env"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"'Subenvironment dependencies' are a possible alternative"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"adding soname implies cohabitation.  This is not always possible.  Add soname in these cases?"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"bootstrapping:  sometimes an older dependency is needed to build a current thing  (circular dependencies may require subenvironments also)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Conda build to get split builds"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   runtime packages will have sonames\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"dev  packages will not - they will have versions.  This enforce mutual  exclusivity.  Given version of dev package then appropriately determines  runtime dependency soname."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Subenvironments hackathon proposed at SciPy 2016 (July 11-17)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Low level packaging"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["NetCDF (",(0,s.jsx)(n.s,{children:"also curl/ca-certificates and Perl packages"}),") - Done?"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   curl and ca-certificates are done and available. \n"})}),"\n",(0,s.jsx)(n.p,{children:"*"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Perl is no longer relevant as part of this process"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"GitHub rate limiting. How can we further mitigate these?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{className:"taskdone",children:[(0,s.jsx)(n.li,{children:"Add namespace to packages `node-`, `ruby-`, `perl-`, `why not python-` ;-)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"'Practicality beats purity' ;-)"}),"\n",(0,s.jsx)(n.li,{children:"At least at first, but i don't find this generally true."}),"\n",(0,s.jsx)(n.li,{children:"One    of the things proposed at continuum is the notion of primary    namespaces  - ones that effectively defined a default prefix of the    namespaced for  the package. This might be the best of both worlds.  You   could have  ordered priority, too: search python-* first, then  node-*    next, then finally the full package name with no prefix.   This  priority  would be defined by per-environment condarc perhaps,  with  initial   saying  depending on what packages get installed. For  example,  creating  an env with python installed first would make python  primary  env."}),"\n",(0,s.jsx)(n.li,{children:"I    can understand the attraction of that, but it seems like a potential    source of considerable confusion (e.g. why does installing x work    differently in this environment to that one?). Maybe this would be  more   workable if namespaces were actually part of a new syntax, rather  than   just prefixes on package names."}),"\n",(0,s.jsx)(n.li,{children:"Sure,    that's reasonable - have the namespace search thing be a user-defined    convenience thing, rather than an automatically determined thing."}),"\n",(0,s.jsx)(n.li,{children:"It    is worth keeping in mind that the Python naming change would be a big   break from existing Continuum packages. So, this decision should not be   taken lightly."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Another   thing to consider here might be a new piece of metadata. For instance,   we could specify the primary language of a package. We could then   specify to ",(0,s.jsx)(n.code,{children:"conda install"}),"    that we want this language of a package. Possible syntax might include   something that looks like that of the above. Not sure how we want to   handled conflicts if we want to error, warn and install everything, or   something else."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["A simpler idea that we might consider that includes some of the ideas ",(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/yHQTJXZ4gyS",children:"Michael"})," mentioned above, but could be implemented without changes to ",(0,s.jsx)(n.code,{children:"conda"})," or package metadata would be to place packages in labeled channels. That way all Python packages would be in ",(0,s.jsx)(n.code,{children:"conda-forge/label/python"}),". This way one could simply add this labeled channel and get all the ",(0,s.jsx)(n.code,{children:"python"}),"  packages one wants. It's still a little fragile when enabling multiple  labels, but maybe this can leverage the channel resolution stuff that  Michael Grant has worked on."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"PR reviews"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Treat every PR as a Work in Progress. At least let PRs sit for a few hours before merging them.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Wait for answers when we ask clarification questions and avoid acting before we have them."}),"\n",(0,s.jsx)(n.li,{children:"Respect   the first reviewer by not repeating her/his review comments with   another words. That is also bad for the person submitting the PR as it   is confusing."}),"\n",(0,s.jsx)(n.li,{children:'Avoid the death by a thousand cuts: Many small "nit" comments that might scare new contributors ( ping Mike S ;-)'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Notifications (how do we stay on top of them)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"More compiler fun:"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"MSYS2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Discussing Ray Donnelly's work on MSYS2 packages and how we want to use and integrate these into conda-forge.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Some use cases to consider OpenBLAS, FFTW, build tools, others?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Binary data"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Do we include it in recipes?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"What kinds do we allow if any (e.g. icons)?"}),"\n",(0,s.jsx)(n.li,{children:"How do we verify the licensing?"}),"\n",(0,s.jsx)(n.li,{children:"How do we verify that they are safe?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"OpenBLAS (on Windows)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Dev releases: Where do they happen?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Do we do them at conda-forge?\n\n        *   Maybe add a label.\n\n*   Do we let others do them with a feedstock on their own repo?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How do we enforce whatever we decide?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Conda-forge installer"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   We have Python 3.5 now\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Still need ",(0,s.jsx)(n.code,{children:"conda"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"New repo?"}),"\n",(0,s.jsx)(n.li,{children:"Where do we host the installers? Git tags?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"GitHub rate limitations. How can we further mitigate these?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   GitHub letter ( [](https://docs.google.com/document/d/19HLtYPwg6IKAwmxPwL7Vd3AX0n47ANP-ZTpZROn-Cwc/edit?pref=2&pli=1)[https://docs.google.com/document/d/19HLtYPwg6IKAwmxPwL7Vd3AX0n47ANP-ZTpZROn-Cwc/edit?pref=2&pli=1](https://docs.google.com/document/d/19HLtYPwg6IKAwmxPwL7Vd3AX0n47ANP-ZTpZROn-Cwc/edit?pref=2&pli=1) ).\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Channel mirroring."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Feedstock history"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Is it sacred?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Do we rebase/force push?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    *   If so, under what conditions?\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How do we avoid multiple people doing this simultaneously?"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Consider applying to be a Numfocus sponsored project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["name native lib packages after SONAME -> ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/issues/157",children:"conda forge/conda forge.github.io#157"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Continuum metadata request: can we add these to linter?"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   example metadata: [](https://github.com/ContinuumIO/anaconda-recipes/blob/master/anaconda-build/meta.yaml#L36-L44)[https://github.com/ContinuumIO/anaconda-recipes/blob/master/anaconda-build/meta.yaml#L36-L44](https://github.com/ContinuumIO/anaconda-recipes/blob/master/anaconda-build/meta.yaml#L36-L44)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Also, distinguish summary (limit of 77 or 80 chars) from description (unlimited)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Google  hangouts has a max capacity of 10. Is it worth considering other  methods of communication so everyone who wants to participate can?"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes"})}),"\n",(0,s.jsx)(n.p,{children:"3 weeks since last meeting"}),"\n",(0,s.jsx)(n.p,{children:"587 repos, 105 contributors (but some bots)"}),"\n",(0,s.jsx)(n.p,{children:"Suggestion that Patrick Snape be added as a core dev"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.u,{children:"PyPI metadata redundancy"})}),"\n",(0,s.jsx)(n.p,{children:"Jinja template may be suitable to fill in this data from PyPI metadata"}),"\n",(0,s.jsx)(n.p,{children:"Related to question on how to maintain conda packages for pure Python packages, suggest to use existing feedstock setup. Seems everyone present agrees on this."}),"\n",(0,s.jsx)(n.p,{children:"PyPI RSS/Twitter to check for new versions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://pypi.python.org/pypi?%3Aaction=rss"}),(0,s.jsx)(n.a,{href:"https://pypi.python.org/pypi?%3Aaction=rss",children:"https://pypi.python.org/pypi?%3Aaction=rss"})," (only shows top 40 newest)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Atom feeds of GitHub of releases"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"http://stackoverflow.com/questions/20839622/notifications-for-new-github-project-releases"}),(0,s.jsx)(n.a,{href:"http://stackoverflow.com/questions/20839622/notifications-for-new-github-project-releases",children:"http://stackoverflow.com/questions/20839622/notifications-for-new-github-project-releases"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.u,{children:"Naming library packages by soname"})}),"\n",(0,s.jsx)(n.p,{children:"libpng16/17, pinning must be updated and recompiled can cause issues."}),"\n",(0,s.jsx)(n.p,{children:"Suggestions to change packages names to sonames (libpng16, libpng17, ...) then multiple versions change"}),"\n",(0,s.jsx)(n.p,{children:"What about headers, they are un-versioned."}),"\n",(0,s.jsx)(n.p,{children:"Can we install multiple versions of the same library in a single environments?"}),"\n",(0,s.jsx)(n.p,{children:"Split dev package (with headers) from libraries?"}),"\n",(0,s.jsx)(n.p,{children:"Can we track headers by version numbers?"}),"\n",(0,s.jsx)(n.p,{children:"What happens when we load multiple versions of a library into memory, does symbol resolution work? -- possibly no"}),"\n",(0,s.jsx)(n.p,{children:"Shadowing system libraries can cause issues"}),"\n",(0,s.jsx)(n.p,{children:"devel packages would be mutually exclusive, versioned"}),"\n",(0,s.jsx)(n.p,{children:"library packages named by soname"}),"\n",(0,s.jsx)(n.p,{children:"Need  to be sure that two versions of same libraries headers cannot be  brought into the same build environment which would cause issues"}),"\n",(0,s.jsx)(n.p,{children:"conda build needs to support split packages, good test cases"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Discussion about splitting packages: ",(0,s.jsx)(n.a,{href:"https://github.com/conda/conda/issues/793",children:"conda/conda#793"}),"#issuecomment-174446435"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Decisions:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Add soname to runtime packages"}),"\n",(0,s.jsx)(n.li,{children:"dev packages will be versioned but not include sonames"}),"\n",(0,s.jsxs)(n.li,{children:["Task: Jan will write down proposal for libpng soname naming -> ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/libpng-feedstock/issues/7",children:"conda forge/libpng feedstock#7"})]}),"\n",(0,s.jsx)(n.li,{children:"Task: split packages in conda-build, open issue in repo"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.u,{children:"Python 3 vs python==3"})}),"\n",(0,s.jsx)(n.p,{children:'"sub-environments", to allow for access to Python 2 and 3 in same environment.'}),"\n",(0,s.jsx)(n.p,{children:"Do we want to be able to have multiple runtimes in same enviroment"}),"\n",(0,s.jsx)(n.p,{children:"Do not really want to do this, conda environments are cheap"}),"\n",(0,s.jsx)(n.p,{children:"sub-environments have been needed for boot-strapping self-hosting compilers.  Perhaps discuss/work on this at SciPy"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.u,{children:"Association with NumFocus"})}),"\n",(0,s.jsx)(n.p,{children:"Requires three members without shared affiliation"}),"\n",(0,s.jsx)(n.p,{children:"Could get non-profit status"}),"\n",(0,s.jsx)(n.p,{children:"Funding for larger/longer build services"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.u,{children:"Qt build and other long builds"})}),"\n",(0,s.jsx)(n.p,{children:"Can also Travis/other to have longer build times"}),"\n",(0,s.jsx)(n.p,{children:"Would be nice to have some of our own servers"}),"\n",(0,s.jsx)(n.p,{children:"Rackspace works with NumFocus and provides free VM times"}),"\n",(0,s.jsx)(n.p,{children:"Asking broader community for help, servers, package hosting, etc"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.u,{children:"Adding namespaces to packages"})}),"\n",(0,s.jsx)(n.p,{children:"Should this be a requirements?"}),"\n",(0,s.jsx)(n.p,{children:"Prefix with language"}),"\n",(0,s.jsx)(n.p,{children:"Folders?"}),"\n",(0,s.jsx)(n.p,{children:"How about numpy, should it be python-numpy"}),"\n",(0,s.jsx)(n.p,{children:"How about when installing?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"conda install python-numpy python-scipy?"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Would require a change in conda"}),"\n",(0,s.jsx)(n.p,{children:"Warning"}),"\n",(0,s.jsx)(n.p,{children:"Prefix all non-python packages"}),"\n",(0,s.jsx)(n.p,{children:"Dependency only packages, pandas depends on python-pandas"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.u,{children:"GCC"})}),"\n",(0,s.jsx)(n.p,{children:"Should recipes be annotated with compilers and version"}),"\n",(0,s.jsx)(n.p,{children:"gcc package which only checks the version"}),"\n",(0,s.jsx)(n.p,{children:"gcc dev-packages are really magic"}),"\n",(0,s.jsxs)(n.p,{children:["conda-forge docker image ( ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/docker-images/tree/fbde090bd608caa720d5caad861aa382a8bf3f5c/linux-anvil"}),(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/docker-images/tree/fbde090bd608caa720d5caad861aa382a8bf3f5c/linux-anvil",children:"https://github.com/conda-forge/docker-images/tree/fbde090bd608caa720d5caad861aa382a8bf3f5c/linux-anvil"})," )"]}),"\n",(0,s.jsx)(n.p,{children:"Special meeting to discuss compilers (MSYS2 too?)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"14:00 UTC next Thursday (Thursday June 9)"}),"\n",(0,s.jsx)(n.li,{children:"Look at each others docker images"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Next general meeting three weeks from now"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"14:00 UTC (Friday June 24th)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"SciPy, BOFs, Sprints, Lighting talk on first day"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'I  would like to prepare a quick intro "how to conda-forge" showing the  work-flow from staged-recipes to updating a feedstock. Either in the  both or as another lightning talk. (Preferably after Jonathan\'s LT.)'}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var s=i(96540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);