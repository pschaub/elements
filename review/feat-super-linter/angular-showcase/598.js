"use strict";(self.webpackChunkangular_showcase=self.webpackChunkangular_showcase||[]).push([[598],{598:(d,i,h)=>{h.r(i),h.d(i,{github_version_switcher:()=>o});var c=h(239),r=h(898);const o=class{constructor(n){(0,r.r)(this,n),this._defaultBranch="latest",this.groups=[{name:"Versions",branches:[]},{name:"Features",branches:[]},{name:"Bugfixes",branches:[]},{name:"Other",branches:[]}],this.currentBranch=this._defaultBranch,this.stripString=e=>e.replace(/[^a-zA-Z0-9-]/g,""),this.fetchFromGitHubApi=function(){var e=(0,c.Z)(function*(t){return yield(yield fetch(t)).json()});return function(t){return e.apply(this,arguments)}}(),this.setCurrentBranch=e=>{const t=window.location.href,s=e.find(a=>t.includes(a));s&&(this.currentBranch=s)},this.setBranches=e=>{const t=e.map(s=>s.name).filter(s=>"gh-pages"!==s&&!s.includes("dependabot"));t.forEach(s=>{s.startsWith("feat")||s.startsWith("feature")?this.groups[1].branches.push(s):s.startsWith("fix")||s.startsWith("bugfix")?this.groups[2].branches.push(s):this.groups[3].branches.push(s)}),this.setCurrentBranch(t)},this.setTags=e=>{const t=e.map(s=>s.name);t.forEach(s=>{this.groups[0].branches.push(s)}),this.setCurrentBranch(t)}}get defaultBranch(){return this._defaultBranch}set defaultBranch(n){this._defaultBranch=n}componentWillLoad(){var n=this;return(0,c.Z)(function*(){const e=n.stripString(n.owner);n.cleanOwner=e;const t=n.stripString(n.repo);n.cleanRepo=t;const s=yield n.fetchFromGitHubApi(`https://api.github.com/repos/${e}/${t}/branches`);n.setBranches(s);const a=yield n.fetchFromGitHubApi(`https://api.github.com/repos/${e}/${t}/tags`);n.setTags(a)})()}handleChange(n,e,t){if(e&&t){const a=top.location.href.split("?"),l=a[a.length-1],p=3===n.split(".").length&&n.startsWith("v");top.location=`https://${e}.github.io/${t}${this._defaultBranch===n?"":`${p?"/version":"/review"}/${n}`}/?${l}`}}render(){var n;return(0,r.h)(r.H,null,(null===(n=this.groups)||void 0===n?void 0:n.length)>0&&(0,r.h)("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:e=>this.handleChange(e.target.value,this.cleanOwner,this.cleanRepo)},(0,r.h)("option",{value:this._defaultBranch,selected:this.currentBranch===this._defaultBranch},this._defaultBranch),this.groups.filter(e=>{var t;return(null===(t=e.branches)||void 0===t?void 0:t.length)>0}).map(e=>(0,r.h)("optgroup",{key:e.name,label:e.name},e.branches.map((t,s)=>(0,r.h)("option",{key:`${e.name}-${t}-${s}`,value:t,selected:this.currentBranch===t},t))))))}};o.style=".gh-version-switcher select{max-width:196px}"}}]);