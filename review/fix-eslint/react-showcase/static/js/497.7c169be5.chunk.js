"use strict";(self.webpackChunkreact_showcase=self.webpackChunkreact_showcase||[]).push([[497],{497:function(e,n,t){t.r(n),t.d(n,{db_pagination:function(){return c}});var i=t(3433),a=t(4506),o=t(5671),r=t(3144),l=t(4758),s=t(2094),c=function(){function e(n){(0,o.Z)(this,e),(0,l.r)(this,n),this.dbChange=(0,l.c)(this,"dbChange",7),this.ellipsisstart=void 0,this.ellipsisend=void 0,this.currentpage=1,this.pages=2,this.count=2,this.titleprevious="Goto previous page",this.titlenext="Goto next page",this.titlepagination="Page Number",this.textprevious="Previous",this.textnext="Next",this.arialabel="Pagination",this.ariaid="db-"+(0,s.u)()}return(0,r.Z)(e,[{key:"handleChange",value:function(e){this.dbChange.emit(e)}},{key:"watchHandler",value:function(){this.sliceAndSetDefaults()}},{key:"componentWillLoad",value:function(){this.sliceAndSetDefaults()}},{key:"sliceAndSetDefaults",value:function(){var e=Array.from(Array(this.pages+1).keys()).slice(1);this.pagesFull=e}},{key:"decorateChild",value:function(e){return e.setAttribute("class","elm-link"),e.getAttribute("data-currentpage")&&(e.setAttribute("aria-current","page"),e.setAttribute("aria-disabled","true")),(0,l.h)("li",{innerHTML:e.outerHTML})}},{key:"paginationButtonFragment",value:function(e){var n=this,t=e.page,i=e.curr,a=e.ariaCurrent,o=e.ariaDisabled,r=e.title,s=e.rel,c=e.tabindex,m=e.disabled,p=e.index;return(0,l.h)("li",{key:p},(0,l.h)("button",Object.assign({class:"elm-link","data-rel":"none"!==s&&"".concat(s),tabindex:!!c&&"-1",title:r+" ".concat(t||""),type:"button"},(t===i||m)&&a,(t===i||m)&&o,{onClick:function(e){return n.handleChange(e)}}),t))}},{key:"navElement",value:function(e){return(0,l.h)("nav",{class:"cmp-pagination",role:"navigation","aria-labelledby":this.ariaid},(0,l.h)("h2",{class:"elm-headline ",id:this.ariaid},this.arialabel.charAt(0).toUpperCase()+this.arialabel.slice(1)),(0,l.h)("ol",null,e))}},{key:"slotChildren",value:function(){var e=Array.from(this.hostElement.children);this.hostElement.innerHTML="";var n=e[0],t=e.slice(1),o=(0,i.Z)(t).reverse(),r=(0,a.Z)(o),s=r[0],c=r.slice(1).reverse(),m=c.findIndex((function(e){return e.getAttribute("data-currentpage")})),p=m>=0?c[m-1].cloneNode(!0):n.cloneNode(!0);p.setAttribute("rel","prev"),p.setAttribute("tabindex","-1");var g=m>=0&&c.length<=m?c[m+1].cloneNode(!0):s.cloneNode(!0);return g.setAttribute("rel","next"),this.navElement((0,l.h)(l.F,null,this.decorateChild(p),this.decorateChild(n),this.ellipsisstart&&(0,l.h)("li",null,"\u2026"),c.map(this.decorateChild),this.ellipsisend&&(0,l.h)("li",null,"\u2026"),this.decorateChild(s),this.decorateChild(g)))}},{key:"goToPreviousPage",value:function(){return this.paginationButtonFragment({page:1===this.currentpage?this.currentpage:this.currentpage-1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"prev",tabindex:!0,disabled:1===this.currentpage,index:"A"})}},{key:"goToNextPage",value:function(){return this.paginationButtonFragment({page:this.currentpage===this.pages+1?this.currentpage:this.currentpage+1,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlenext,rel:"next",tabindex:!0,disabled:this.currentpage===this.pages,index:"E"})}},{key:"goToFirstPage",value:function(){return this.paginationButtonFragment({page:this.pagesFull[0],curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:"B"})}},{key:"goToLastPage",value:function(){return this.paginationButtonFragment({page:this.pagesFull.slice(-1),curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:this.currentpage===this.pages,index:"C"})}},{key:"showMiddlePage",value:function(e){return this.paginationButtonFragment({page:e,curr:this.currentpage,ariaCurrent:{"aria-current":"page"},ariaDisabled:{"aria-disabled":"true"},title:this.titlepagination,rel:"none",tabindex:!1,disabled:!1,index:e})}},{key:"showEllipsis",value:function(e){return this.pagesFull.length<8||this.currentpage<4&&"front"===e||this.currentpage>this.pagesFull.length-5&&"back"===e?null:(0,l.h)("li",{key:e},"\u2026")}},{key:"sliceCenterPages",value:function(){if(this.pagesFull.length<8)return this.pagesFull.slice(1,-1);var e=this.currentpage<=3||this.currentpage>=this.pagesFull.length-3?this.count+1:this.count;if(this.currentpage+this.count>=this.pagesFull.length)return this.pagesFull.slice(-e-1,-1);if(this.pagesFull.length-2<=e)return this.pagesFull.slice(1,1+this.pagesFull.length-2);if(this.pagesFull.length-2>e&&this.currentpage<=3)return this.pagesFull.slice(1,1+e);if(this.pagesFull.length-2>this.count&&this.currentpage>3&&this.currentpage+this.count<this.pagesFull.length){var n=this.pagesFull.slice(this.currentpage-1,this.currentpage+e);return n.includes(this.pagesFull.length-1)?n:n.slice(0,-1)}return[]}},{key:"centerPages",value:function(){var e=this;return this.sliceCenterPages().map((function(n){return e.showMiddlePage(n)}))}},{key:"render",value:function(){return Array.from(this.hostElement.children).find((function(e){return"a"===e.tagName.toLowerCase()}))?this.slotChildren():this.navElement((0,l.h)(l.F,null,this.goToPreviousPage(),this.goToFirstPage(),this.showEllipsis("front"),this.pagesFull.length>=3?this.centerPages():null,this.showEllipsis("back"),this.goToLastPage(),this.goToNextPage()))}},{key:"hostElement",get:function(){return(0,l.g)(this)}}],[{key:"watchers",get:function(){return{pages:["watchHandler"],currentpage:["watchHandler"],count:["watchHandler"]}}}]),e}();c.style='@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"\u2022\xa0\xa0\xa0"}:where(ul) li::marker{color:#ec0016}body,:host,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.cmp-pagination{color:#282d37;font-size:0.875rem;user-select:none}.cmp-pagination>ol{display:flex}.cmp-pagination .elm-headline{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-pagination li,.cmp-pagination .elm-link{align-items:center;display:inline-flex;justify-content:center}.cmp-pagination li{height:2.25rem;width:2.25rem}.cmp-pagination .elm-link{color:inherit;height:100%;text-decoration:none;width:100%}.cmp-pagination .elm-link[rel=prev],.cmp-pagination .elm-link[rel=next]{padding:0;vertical-align:bottom}.cmp-pagination .elm-link[rel=prev]::before{margin-left:0.6875rem}.cmp-pagination .elm-link[rel=next]::before{margin-right:0.6875rem}.cmp-pagination .elm-link[rel=prev]{font-size:0}.cmp-pagination .elm-link[rel=prev]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"<";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[rel=prev]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=prev]::before{content:none}}.cmp-pagination .elm-link[rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[rel=next]{font-size:0}.cmp-pagination .elm-link[rel=next]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:">";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[rel=next]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[rel=next]::before{content:none}}.cmp-pagination .elm-link[rel=next]::before{--icon-margin-after:0}.cmp-pagination .elm-link[aria-current=page]{font-weight:700}.elm-link{border-radius:0.25rem;display:inline-block;text-underline-offset:0.1875rem;text-underline-position:under}@supports (text-underline-offset: 3px){.elm-link{text-underline-position:auto}}.elm-link:active{color:initial}.elm-link[aria-disabled=true]{opacity:0.4;pointer-events:none}.elm-link[aria-disabled=true]::before{color:initial}.elm-link[data-size=small]:not(.is-icon-text-replace){font-size:0.875rem}.elm-link[rel][data-size=small]::before,.elm-link[data-icon][data-size=small]::before,.elm-link[data-icon-before][data-size=small]::before{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-link[data-icon-after][data-size=small]::after::after{--icon-font-family:"icons-20-outline",\n  \t"missing-icons" !important;--icon-font-size:1.25rem}.elm-link[rel=configuration]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\u2699";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.elm-link[rel=configuration]::before{content:var(--icon-glyph)/""}}@media aural{.elm-link[rel=configuration]::before{content:none}}@media speech{.elm-link[rel=configuration]::before{content:none}}.elm-link[rel=messages]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\ud83d\udcac";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.elm-link[rel=messages]::before{content:var(--icon-glyph)/""}}@media aural{.elm-link[rel=messages]::before{content:none}}@media speech{.elm-link[rel=messages]::before{content:none}}.elm-link[rel=account]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"\ud83d\ude42";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.elm-link[rel=account]::before{content:var(--icon-glyph)/""}}@media aural{.elm-link[rel=account]::before{content:none}}@media speech{.elm-link[rel=account]::before{content:none}}.elm-link[rel=configuration]::before,.elm-link[rel=messages]::before,.elm-link[rel=account]::before{display:inline-block}.cmp-pagination button{border:none;font-size:0.875rem;background-color:inherit;cursor:pointer}.cmp-pagination .elm-link[data-rel=prev]{font-size:0}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:"<";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[data-rel=prev]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=prev]::before{content:none}}.cmp-pagination .elm-link[data-rel=prev]::before{--icon-margin-after:0}.cmp-pagination .elm-link[data-rel=next]{font-size:0}.cmp-pagination .elm-link[data-rel=next]::before{--icon-font-family:"icons-24-outline",\n  \t"missing-icons" !important;--icon-font-size:1.5rem;margin-inline-end:var(--icon-margin-after, 0.375rem);--icon-glyph:">";content:var(--icon-glyph);display:inline-block;font-family:var(--icon-font-family) !important;font-size:var(--icon-font-size);font-style:normal;font-variant:normal;font-weight:normal;font-weight:var(--icon-font-weight, normal);line-height:1;text-transform:none;vertical-align:middle;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-alt:"";alt:"";speak:none}@supports (content: ""/""){.cmp-pagination .elm-link[data-rel=next]::before{content:var(--icon-glyph)/""}}@media aural{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}@media speech{.cmp-pagination .elm-link[data-rel=next]::before{content:none}}.cmp-pagination .elm-link[data-rel=next]::before{--icon-margin-after:0}.elm-link[aria-disabled=true][aria-current=page]{opacity:1}'},2094:function(e,n,t){t.d(n,{a:function(){return o},g:function(){return a},p:function(){return r},u:function(){return i}});var i=function(){try{return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}catch(e){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)}))}},a=function(e){return e?e.map((function(e){return'<li><db-link href="'.concat(e.href,'" target="').concat(e.target,'">').concat(e.label,"</db-link></li>")})).join("\n"):""},o=function e(n,t){n.children&&Array.from(n.children).forEach((function(n){"db-link"===n.tagName.toLowerCase()&&n.setAttribute("icon-variant",t),n.children&&e(n,t)}))},r=function(e){try{if("string"===typeof e)return JSON.parse(e);if("object"===typeof e)return e;if(e instanceof Array)return e}catch(n){return!1}}}}]);
//# sourceMappingURL=497.7c169be5.chunk.js.map