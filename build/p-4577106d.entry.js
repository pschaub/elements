import{r as t,h as e,H as i,g as o}from"./p-16b4b82f.js";import{p as n,g as a}from"./p-aa321fb3.js";const r=class{constructor(e){t(this,e)}get children(){return this._children}set children(t){this._children=t}componentWillLoad(){this.data?this.compData=n(this.data):(this._children=Array.from(this.host.children),this.children.find((t=>"li"===t.tagName.toLowerCase()))?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return e(i,null,this.compData&&e("ul",{class:"cmp-metanavigation",innerHTML:a(this.compData)}),!this.compData&&e("ul",{class:"cmp-metanavigation"},!this.hasItemsWrapper&&this._children.map(((t,i)=>e("li",{key:`cmp-metanavigation-item-${i}`,innerHTML:t.outerHTML}))),this.hasItemsWrapper&&e("slot",null)))}get host(){return o(this)}};r.style='html,:host{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}h1{font-size:2em;margin:0.67em 0}dl dl,dl ol,dl ul,ol dl,ul dl{margin:0}ol ol,ol ul,ul ol,ul ul{margin:0}hr{box-sizing:content-box;color:inherit;height:0;overflow:visible}main{display:block}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-color:inherit;text-indent:0}button,input,select{margin:0}button{overflow:visible;text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}fieldset{padding:0.35em 0.75em 0.625em}input{overflow:visible}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}select{text-transform:none}textarea{margin:0;overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}details{display:block}dialog{background-color:white;border:solid;color:black;display:block;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}dialog:not([open]){display:none}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-metanavigation{display:flex;list-style:none;margin-bottom:0;margin-top:0;padding-left:0}.cmp-metanavigation li{padding-left:0.5rem;padding-right:0.5rem}.rea-footer .cmp-metanavigation li{padding-left:0.375rem;padding-right:0.375rem}.cmp-metanavigation li .elm-link{text-decoration:none}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link{font-size:0}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link::before{--icon-margin-right:0}@media screen and (max-width: 41rem){.rea-header .cmp-metanavigation li .elm-link{font-size:0}.rea-header .cmp-metanavigation li .elm-link::before{--icon-margin-right:0}}.rea-footer .cmp-metanavigation{justify-content:center;flex-wrap:wrap}@media screen and (max-width: 767px){.rea-footer .cmp-metanavigation{margin-bottom:1rem}}@media screen and (min-width: 768px){.rea-footer .cmp-metanavigation{float:right}}';export{r as db_metanavigation}