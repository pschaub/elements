import{r as s,h as t,H as i}from"./p-5f545e05.js";const h=class{constructor(t){s(this,t),this.defaultBranch="main",this.branches=[],this.currentBranch=this.defaultBranch,this.stripString=s=>s.replace(/[^a-zA-Z0-9-]/g,"")}componentWillLoad(){const s=this.stripString(this.owner);this.cleanOwner=s;const t=this.stripString(this.repo);this.cleanRepo=t,fetch(`https://api.github.com/repos/${s}/${t}/branches`).then((s=>s.json())).then((s=>{if(s){this.branches=s.map((s=>s.name)).filter((s=>"gh-pages"!==s));const t=window.location.href,i=this.branches.find((s=>t.includes(s)));i&&(this.currentBranch=i)}}))}handleChange(s,t,i){if(t&&i){const h=top.location.href.split("?");top.location=`https://${t}.github.io/${i}${this.defaultBranch===s?"":`/review/${s}`}/?${h[h.length-1]}`}}render(){var s;return t(i,null,(null===(s=this.branches)||void 0===s?void 0:s.length)>0&&t("db-select",{class:"gh-version-switcher",label:"Version",name:"Theme",onDbChange:s=>this.handleChange(s.target.value,this.cleanOwner,this.cleanRepo)},this.branches.map(((s,i)=>t("option",{key:`${s}-${i}`,value:s,selected:this.currentBranch===s},s)))))}};h.style=".gh-version-switcher select{max-width:196px}";export{h as github_version_switcher}