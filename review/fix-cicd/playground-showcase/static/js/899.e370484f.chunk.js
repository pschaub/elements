"use strict";(self.webpackChunkplayground_showcase=self.webpackChunkplayground_showcase||[]).push([[899],{6899:function(n,t,e){e.r(t),e.d(t,{github_version_switcher:function(){return c}});var r=e(5671),a=e(3144),i=e(5122),c=function(){function n(t){(0,r.Z)(this,n),(0,i.r)(this,t),this.defaultBranch="main",this.groups=[],this.currentBranch=this.defaultBranch,this.stripString=function(n){return n.replace(/[^a-zA-Z0-9-]/g,"")}}return(0,a.Z)(n,[{key:"componentWillLoad",value:function(){var n=this,t=this.stripString(this.owner);this.cleanOwner=t;var e=this.stripString(this.repo);this.cleanRepo=e,fetch("https://api.github.com/repos/".concat(t,"/").concat(e,"/branches")).then((function(n){return n.json()})).then((function(t){if(t){var e=t.map((function(n){return n.name})).filter((function(n){return"gh-pages"!==n&&!n.includes("dependabot")})),r=[{name:"Versions",branches:[]},{name:"Features",branches:[]},{name:"Bugfixes",branches:[]}];e.forEach((function(n){n.startsWith("feat")||n.startsWith("feature")?r[1].branches.push(n):n.startsWith("fix")||n.startsWith("bugfix")?r[2].branches.push(n):r[0].branches.push(n)})),console.log(r),n.groups=r;var a=window.location.href,i=e.find((function(n){return a.includes(n)}));i&&(n.currentBranch=i)}}))}},{key:"handleChange",value:function(n,t,e){if(t&&e){var r=top.location.href.split("?"),a=r[r.length-1];top.location="https://".concat(t,".github.io/").concat(e).concat(this.defaultBranch===n?"":"/review/".concat(n),"/?").concat(a)}}},{key:"render",value:function(){var n,t=this;return(0,i.h)(i.H,null,(null===(n=this.groups)||void 0===n?void 0:n.length)>0&&(0,i.h)("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:function(n){return t.handleChange(n.target.value,t.cleanOwner,t.cleanRepo)}},this.groups.filter((function(n){var t;return(null===(t=n.branches)||void 0===t?void 0:t.length)>0})).map((function(n){return(0,i.h)("optgroup",{key:n.name,label:n.name},n.branches.map((function(e,r){return(0,i.h)("option",{key:"".concat(n.name,"-").concat(e,"-").concat(r),value:e,selected:t.currentBranch===e},e)})))}))))}}]),n}();c.style=".gh-version-switcher select{max-width:196px}"}}]);
//# sourceMappingURL=899.e370484f.chunk.js.map