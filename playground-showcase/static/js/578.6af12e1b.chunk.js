"use strict";(self.webpackChunkplayground_showcase=self.webpackChunkplayground_showcase||[]).push([[578],{3578:function(e,n,i){i.r(n),i.d(n,{db_sidenavi:function(){return l}});var o=i(5671),t=i(3144),a=i(9919),r=i(7458),l=function(){function e(n){(0,o.Z)(this,e),(0,a.r)(this,n)}return(0,t.Z)(e,[{key:"children",get:function(){return this._children},set:function(e){this._children=e}},{key:"componentWillLoad",value:function(){this.data?this.compData=(0,r.p)(this.data):((0,r.a)(this.host,"32-outline"),this._children=Array.from(this.host.children),this.children.find((function(e){return"li"===e.tagName.toLowerCase()}))?this.hasItemsWrapper=!0:this.host.innerHTML="")}},{key:"render",value:function(){return(0,a.h)("nav",{class:"cmp-sidenavi"},this.compData&&(0,a.h)("ol",{innerHTML:(e=this.compData,e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'" icon-variant="').concat(!!e.icon&&"32-outline",'" icon="').concat(e.icon,'" current="').concat(e.ariaCurrent,'">').concat(e.label,"</db-link></li>")})).join("\n"):"")}),!this.compData&&(0,a.h)("ol",null,!this.hasItemsWrapper&&this._children.map((function(e,n){return(0,a.h)("li",{key:"sidenavi-item-".concat(n),innerHTML:e.outerHTML})})),this.hasItemsWrapper&&(0,a.h)("slot",null)));var e}},{key:"host",get:function(){return(0,a.g)(this)}}]),e}();l.style='@charset "UTF-8";html,:host{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}h1{font-size:2em;margin:0.67em 0}dl dl,dl ol,dl ul,ol dl,ul dl{margin:0}ol ol,ol ul,ul ol,ul ul{margin:0}hr{box-sizing:content-box;color:inherit;height:0;overflow:visible}main{display:block}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-color:inherit;text-indent:0}button,input,select{margin:0}button{overflow:visible;text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}fieldset{padding:0.35em 0.75em 0.625em}input{overflow:visible}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}select{text-transform:none}textarea{margin:0;overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}details{display:block}dialog{background-color:white;border:solid;color:black;display:block;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}dialog:not([open]){display:none}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-sidenavi{background-color:#3c414b;box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);display:inline-block}.cmp-sidenavi .elm-link,.cmp-sidenavi a{color:#d7dce1;display:block;padding:1.25rem 1rem;text-decoration:none;border-radius:initial}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus,.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{color:#3c414b}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus{background-color:#afb4bb}.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{background-color:#d7dce1;font-weight:700}.cmp-sidenavi .elm-link[rel],.cmp-sidenavi a[rel]{padding-left:1.3125rem}.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{--icon-font-family:"icons-32-outline", "missing-icons" !important;--icon-font-size:2rem;--icon-margin-right:0.375rem;--icon-glyph:"\u2302";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{--icon-font-family:"icons-32-outline", "missing-icons" !important;--icon-font-size:2rem;--icon-margin-right:0.375rem;--icon-glyph:"\ud83d\uddb9";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{--icon-font-family:"icons-32-enterprise-outline", "missing-icons" !important;--icon-font-size:2rem;--icon-margin-right:0.375rem;--icon-glyph:"";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{--icon-font-family:"icons-32-enterprise-outline", "missing-icons" !important;--icon-font-size:2rem;--icon-margin-right:0.375rem;--icon-glyph:"";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{--icon-font-family:"icons-32-outline", "missing-icons" !important;--icon-font-size:2rem;--icon-margin-right:0.375rem;--icon-glyph:"\ud83d\udcc6";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{--icon-font-family:"icons-32-outline", "missing-icons" !important;--icon-font-size:2rem;--icon-margin-right:0.375rem;--icon-glyph:"?";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;margin-right:var(--icon-margin-right);margin-left:var(--icon-margin-left);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}'},7458:function(e,n,i){i.d(n,{a:function(){return t},g:function(){return o},p:function(){return a}});var o=function(e){return e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")})).join("\n"):""},t=function e(n,i){n.children&&Array.from(n.children).forEach((function(n){"db-link"===n.tagName.toLowerCase()&&n.setAttribute("icon-variant",i),n.children&&e(n,i)}))},a=function(e){try{if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;if(e instanceof Array)return e}catch(n){return!1}}}}]);
//# sourceMappingURL=578.6af12e1b.chunk.js.map