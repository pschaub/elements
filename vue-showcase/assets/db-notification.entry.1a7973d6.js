import{r as i,h as t}from"./index.03563be2.js";import"./vendor.c3ef50f6.js";const e=`html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}h1{font-size:2em;margin:0.67em 0}dl dl,dl ol,dl ul,ol dl,ul dl{margin:0}ol ol,ol ul,ul ol,ul ul{margin:0}hr{box-sizing:content-box;color:inherit;height:0;overflow:visible}main{display:block}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-color:inherit;text-indent:0}button,input,select{margin:0}button{overflow:visible;text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}fieldset{padding:0.35em 0.75em 0.625em}input{overflow:visible}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}select{text-transform:none}textarea{margin:0;overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}details{display:block}dialog{background-color:white;border:solid;color:black;display:block;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}dialog:not([open]){display:none}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}.cmp-notification{background-color:#282d37;padding:1rem;box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-bottom:1rem}section[data-variant=hovering] .cmp-notification{background-color:#fff}section[data-variant=alert] .cmp-notification{color:#fff}section[data-variant=hovering] .cmp-notification{border-radius:0.5rem;border:2px solid transparent;padding:0.875rem 1rem}.cmp-notification>em{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-notification[data-type=success]{background-color:#508b1b}section[data-variant=hovering] .cmp-notification[data-type=success]{border-color:#508b1b}.cmp-notification[data-type=warning]{background-color:#f75f00}section[data-variant=hovering] .cmp-notification[data-type=warning]{border-color:#f75f00}.cmp-notification[data-type=error]{background-color:#ec0016}section[data-variant=hovering] .cmp-notification[data-type=error]{border-color:#ec0016}.cmp-notification[data-type=informative]{background-color:#0087b9}section[data-variant=hovering] .cmp-notification[data-type=informative]{border-color:#0087b9}.cmp-notification[data-icon],.cmp-notification[data-icon-before],.cmp-notification[data-icon-after]{display:flex;align-items:center}.cmp-notification[data-icon]::before,.cmp-notification[data-icon-before]::before{--icon-margin-right:0.625rem}.cmp-notification[data-icon-after]{justify-content:space-between}.cmp-notification[data-icon-after]::after{--icon-margin-left:0.625rem}*[slot=prenotification]{padding-right:10px}*[slot=postnotification]{float:right}`,n=class{constructor(o){i(this,o),this.role=this.getRole()}getRole(){return this.type==="error"||this.type==="warning"?"alert":"status"}render(){return t("div",{class:"cmp-notification",role:this.role,"data-type":this.type?this.type:null},t("slot",{name:"prenotification"}),t("slot",null),t("slot",{name:"postnotification"}))}};n.style=e;export{n as db_notification};
