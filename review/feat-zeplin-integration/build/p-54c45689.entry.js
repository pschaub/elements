import{r as e,h as t,H as i,g as o}from"./p-fe3e10cc.js";import{p as n,g as a}from"./p-b5584080.js";const r=class{constructor(t){e(this,t)}get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=n(this.data):(this._children=Array.from(this.host.children),this.children.find((e=>"li"===e.tagName.toLowerCase()))?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return t(i,null,this.compData&&t("ul",{class:"cmp-metanavigation",innerHTML:a(this.compData)}),!this.compData&&t("ul",{class:"cmp-metanavigation"},!this.hasItemsWrapper&&this._children.map(((e,i)=>t("li",{key:`cmp-metanavigation-item-${i}`,innerHTML:e.outerHTML}))),this.hasItemsWrapper&&t("slot",null)))}get host(){return o(this)}};r.style=':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-metanavigation{display:flex;list-style:none;margin-bottom:0;margin-top:0;padding-left:0}.cmp-metanavigation li{padding-left:0.5rem;padding-right:0.5rem}.rea-footer .cmp-metanavigation li{padding-left:0.375rem;padding-right:0.375rem}.cmp-metanavigation li .elm-link{text-decoration:none}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link{font-size:0}.cmp-sitesearch:focus-within~.cmp-metanavigation li .elm-link::before{--icon-margin-after:0}@media screen and (max-width: 41rem){.rea-header .cmp-metanavigation li .elm-link{font-size:0}.rea-header .cmp-metanavigation li .elm-link::before{--icon-margin-after:0}}.rea-footer .cmp-metanavigation{justify-content:center;flex-wrap:wrap}@media screen and (max-width: 767px){.rea-footer .cmp-metanavigation{margin-bottom:1rem}}@media screen and (min-width: 768px){.rea-footer .cmp-metanavigation{float:right}}';export{r as db_metanavigation}