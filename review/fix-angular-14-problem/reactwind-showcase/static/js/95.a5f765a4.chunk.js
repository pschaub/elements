"use strict";(self.webpackChunkreactwind_showcase=self.webpackChunkreactwind_showcase||[]).push([[95],{2095:function(e,t,i){i.r(t),i.d(t,{db_language_switcher:function(){return l}});var a=i(5671),n=i(3144),r=i(1734),o=i(2094),l=function(){function e(t){(0,a.Z)(this,e),(0,r.r)(this,t),this.ariaSelectedIndex=void 0,this.data=void 0}return(0,n.Z)(e,[{key:"children",get:function(){return this._children},set:function(e){this._children=e}},{key:"componentWillLoad",value:function(){var e=this;this.data?this.compData=(0,o.p)(this.data):(this._children=Array.from(this.host.children),this.children.find((function(e){return"li"===e.tagName.toLowerCase()}))?(this.hasItemsWrapper=!0,this._children.filter((function(e){return"li"===e.tagName.toLowerCase()})).forEach((function(t,i){i===e.ariaSelectedIndex&&t.setAttribute("aria-selected","true"),t.setAttribute("role","option")}))):this.host.innerHTML="")}},{key:"render",value:function(){var e,t,i=this;return(0,r.h)(r.H,null,this.compData&&(0,r.h)("ul",{class:"cmp-language-switcher",role:"listbox",innerHTML:(e=this.compData,t=this.ariaSelectedIndex,e?e.map((function(e,i){return'<li role="option" '.concat(t===i?"aria-selected":"",' ><db-link title="').concat(e.title,'"  href="').concat(e.href,'">').concat(e.label,"</db-link></li>")})).join("\n"):"")}),!this.compData&&(0,r.h)("ul",{class:"cmp-language-switcher",role:"listbox"},!this.hasItemsWrapper&&this._children.map((function(e,t){return(0,r.h)("li",{key:"cmp-language-switcher-item-".concat(t),role:"option","aria-selected":t===i.ariaSelectedIndex,innerHTML:e.outerHTML})})),this.hasItemsWrapper&&(0,r.h)("slot",null)))}},{key:"host",get:function(){return(0,r.g)(this)}}]),e}();l.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-language-switcher{list-style:none;margin-right:1rem;position:relative}.cmp-language-switcher:hover li:not([aria-selected]),.cmp-language-switcher:focus li:not([aria-selected]){visibility:visible}.cmp-language-switcher:hover li[aria-selected=true],.cmp-language-switcher:focus li[aria-selected=true]{color:#ec0016}.cmp-language-switcher li{background-color:#fdfdfd;position:absolute;top:1.625rem}.rea-header .cmp-language-switcher li{top:3.4375rem;z-index:40}.rea-header .cmp-language-switcher li:not([aria-selected=true])~li:not([aria-selected=true]){top:6.75rem}.rea-header .cmp-language-switcher li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true]){top:10.125rem}.rea-header .cmp-language-switcher li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true]){top:13.5rem}.rea-header .cmp-language-switcher li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true]){top:16.875rem}.rea-header .cmp-language-switcher li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true])~li:not([aria-selected=true]){top:20.25rem}@media screen and (min-width: 1024px){.rea-header .cmp-language-switcher li{top:3.5rem}}.cmp-language-switcher li .elm-link,.cmp-language-switcher li a{color:inherit;text-decoration:none}.cmp-language-switcher li:not([aria-selected]){visibility:hidden}.cmp-language-switcher li:not([aria-selected]) .elm-link,.cmp-language-switcher li:not([aria-selected]) a{padding-bottom:0.9375rem;padding-right:2.125rem;padding-top:0.9375rem}.cmp-language-switcher li:not([aria-selected]) .elm-link:hover,.cmp-language-switcher li:not([aria-selected]) a:hover,.cmp-language-switcher li:not([aria-selected]) .elm-link:focus,.cmp-language-switcher li:not([aria-selected]) a:focus{background-color:#d7dce1}.cmp-language-switcher li[aria-selected]{position:initial}.cmp-language-switcher li[aria-selected] .elm-link,.cmp-language-switcher li[aria-selected] a{padding-bottom:1.375rem}.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-start:var(--icon-margin-before, 0.375rem);--icon-glyph:"\u2304";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after{content:var(--icon-glyph)/""}}@media aural{.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after{content:none}}@media speech{.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after{content:none}}.cmp-language-switcher li[aria-selected] .elm-link:hover,.cmp-language-switcher li[aria-selected] a:hover{color:#ec0016}.cmp-language-switcher li[aria-selected] .elm-link::after,.cmp-language-switcher li[aria-selected] a::after{float:right;margin-left:0.3125rem}.cmp-language-switcher li .elm-link,.cmp-language-switcher li a{display:inline-block;padding-left:1.125rem}.cmp-language-switcher li .elm-link:hover,.cmp-language-switcher li a:hover,.cmp-language-switcher li .elm-link:focus,.cmp-language-switcher li a:focus{color:initial}'},2094:function(e,t,i){i.d(t,{a:function(){return r},g:function(){return n},p:function(){return o},u:function(){return a}});var a=function(){try{return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}catch(e){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},n=function(e){return e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")})).join("\n"):""},r=function e(t,i){t.children&&Array.from(t.children).forEach((function(t){"db-link"===t.tagName.toLowerCase()&&t.setAttribute("icon-variant",i),t.children&&e(t,i)}))},o=function(e){try{if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;if(e instanceof Array)return e}catch(t){return!1}}}}]);
//# sourceMappingURL=95.a5f765a4.chunk.js.map