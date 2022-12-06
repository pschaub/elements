import{r as e,h as n,g as i}from"./p-bdb96413.js";import{p as o,a as t}from"./p-b5584080.js";const a=class{constructor(n){e(this,n)}get children(){return this._children}set children(e){this._children=e}componentWillLoad(){this.data?this.compData=o(this.data):(t(this.host,"32-outline"),this._children=Array.from(this.host.children),this.children.find((e=>"li"===e.tagName.toLowerCase()))?this.hasItemsWrapper=!0:this.host.innerHTML="")}render(){return n("nav",{class:"cmp-sidenavi"},this.compData&&n("ol",{innerHTML:(e=this.compData,e?e.map((e=>`<li><db-link href="${e.href}" target="${e.target}" icon-variant="${!!e.icon&&"32-outline"}" icon="${e.icon}" current="${e.ariaCurrent}">${e.label}</db-link></li>`)).join("\n"):"")}),!this.compData&&n("ol",null,!this.hasItemsWrapper&&this._children.map(((e,i)=>n("li",{key:`sidenavi-item-${i}`,innerHTML:e.outerHTML}))),this.hasItemsWrapper&&n("slot",null)));var e}get host(){return i(this)}};a.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-sidenavi{background-color:#3c414b;box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);display:inline-block}.cmp-sidenavi .elm-link,.cmp-sidenavi a{color:#d7dce1;display:block;padding:1.25rem 1rem;text-decoration:none;border-radius:initial}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus,.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{color:#3c414b}.cmp-sidenavi .elm-link:hover,.cmp-sidenavi a:hover,.cmp-sidenavi .elm-link:focus,.cmp-sidenavi a:focus{background-color:#afb4bb}.cmp-sidenavi .elm-link[aria-current=page],.cmp-sidenavi a[aria-current=page]{background-color:#d7dce1;font-weight:700}.cmp-sidenavi .elm-link[rel],.cmp-sidenavi a[rel]{padding-left:1.3125rem}.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;--icon-font-size:2rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"⌂";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=index]::before,.cmp-sidenavi a[rel=index]::before{content:none}}.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;--icon-font-size:2rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"🖹";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=documents]::before,.cmp-sidenavi a[rel=documents]::before{content:none}}.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{--icon-font-family:"icons-32-enterprise-outline",\n  \t"missing-icons" !important;--icon-font-size:2rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=dashboard]::before,.cmp-sidenavi a[rel=dashboard]::before{content:none}}.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{--icon-font-family:"icons-32-enterprise-outline",\n  \t"missing-icons" !important;--icon-font-size:2rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=cloud]::before,.cmp-sidenavi a[rel=cloud]::before{content:none}}.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;--icon-font-size:2rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"📆";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=calendar]::before,.cmp-sidenavi a[rel=calendar]::before{content:none}}.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{--icon-font-family:"icons-32-outline",\n  \t"missing-icons" !important;--icon-font-size:2rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"?";font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);vertical-align:middle;content:var(--icon-glyph);font-style:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);font-variant:normal;text-transform:none;line-height:1;display:inline-block;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}@media speech{.cmp-sidenavi .elm-link[rel=help]::before,.cmp-sidenavi a[rel=help]::before{content:none}}';export{a as db_sidenavi}