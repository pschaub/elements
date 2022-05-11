"use strict";(self.webpackChunkangular_showcase=self.webpackChunkangular_showcase||[]).push([[831],{831:(n,o,t)=>{t.r(o),t.d(o,{db_tab:()=>a});var e=t(664),i=t(65);const a=class{constructor(l){(0,e.r)(this,l),this.id=(0,i.n)()}render(){return(0,e.h)(e.H,{class:"cmp-db-tab"},(0,e.h)("input",{type:"radio",name:this.name,id:this.id,checked:this.active}),(0,e.h)("label",{htmlFor:this.id,role:"tab"},this.label),(0,e.h)("section",{id:`content-${this.id}`,role:"tabpanel"},(0,e.h)("slot",null)))}};a.style='html,:host{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}h1{font-size:2em;margin:0.67em 0}dl dl,dl ol,dl ul,ol dl,ul dl{margin:0}ol ol,ol ul,ul ol,ul ul{margin:0}hr{box-sizing:content-box;color:inherit;height:0;overflow:visible}main{display:block}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-color:inherit;text-indent:0}button,input,select{margin:0}button{overflow:visible;text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}fieldset{padding:0.35em 0.75em 0.625em}input{overflow:visible}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}select{text-transform:none}textarea{margin:0;overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}details{display:block}dialog{background-color:white;border:solid;color:black;display:block;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}dialog:not([open]){display:none}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-tab-bar{display:flex;flex-wrap:wrap}.cmp-tab-bar label[role=tab],.cmp-tab-bar section[role=tabpanel]{background-color:#fdfdfd}.cmp-tab-bar>input[type=radio],.cmp-tab-bar>*>input[type=radio]{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-tab-bar>input[type=radio]+label[role=tab],.cmp-tab-bar>*>input[type=radio]+label[role=tab]{border-top-left-radius:4px;border-top-right-radius:4px;cursor:pointer;display:inline-block;margin-left:0.5rem;padding:0.3125rem 2rem;position:relative;z-index:1}.cmp-tab-bar>input[type=radio]+label[role=tab]:first-of-type,.cmp-tab-bar>*>input[type=radio]+label[role=tab]:first-of-type{margin-left:1rem}.cmp-tab-bar>input[type=radio]:focus+label,.cmp-tab-bar>*>input[type=radio]:focus+label{outline:1px dotted #878c96}.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:focus{background-color:#f0f3f5}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab],.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]{color:#878c96}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:focus{background-color:unset}.cmp-tab-bar>input[type=radio]:checked+label[role=tab],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]{border:0.0625rem solid #646973;border-bottom:none;font-weight:700;padding-top:0.1875rem;transform:translateY(0.0625rem)}.cmp-tab-bar>input[type=radio]:checked+label[role=tab]+section[role=tabpanel],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]+section[role=tabpanel]{display:initial}.cmp-tab-bar section[role=tabpanel]{border-top:0.0625rem solid #646973;box-shadow:0 2px 5px rgba(0, 0, 0, 0.08), 0 15px 30px rgba(0, 0, 0, 0.05);display:none;flex-basis:100%;order:1;padding:2.875rem 3.125rem}.cmp-db-tab{display:contents}'}}]);