"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[287],{"./packages/db-ui-elements-stencil/dist/esm/db-notification.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_notification:()=>DbNotification});var _index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-60c9fafb.js");function cov_1r04oom6oe(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-notification.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"990a5ca41c08653c3a1f0cd31b6987bc5f679787"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-notification.entry.js",statementMap:{0:{start:{line:3,column:26},end:{line:3,column:4201}},1:{start:{line:5,column:23},end:{line:19,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:8,column:4},end:{line:8,column:37}},4:{start:{line:9,column:4},end:{line:9,column:26}},5:{start:{line:12,column:4},end:{line:14,column:17}},6:{start:{line:17,column:4},end:{line:17,column:214}},7:{start:{line:20,column:0},end:{line:20,column:41}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:10,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:11,column:2},end:{line:11,column:3}},loc:{start:{line:11,column:15},end:{line:15,column:3}},line:11},2:{name:"(anonymous_2)",decl:{start:{line:16,column:2},end:{line:16,column:3}},loc:{start:{line:16,column:11},end:{line:18,column:3}},line:16}},branchMap:{0:{loc:{start:{line:12,column:11},end:{line:14,column:16}},type:"cond-expr",locations:[{start:{line:13,column:8},end:{line:13,column:15}},{start:{line:14,column:8},end:{line:14,column:16}}],line:12},1:{loc:{start:{line:12,column:11},end:{line:12,column:59}},type:"binary-expr",locations:[{start:{line:12,column:11},end:{line:12,column:32}},{start:{line:12,column:36},end:{line:12,column:59}}],line:12},2:{loc:{start:{line:17,column:83},end:{line:17,column:111}},type:"cond-expr",locations:[{start:{line:17,column:95},end:{line:17,column:104}},{start:{line:17,column:107},end:{line:17,column:111}}],line:17}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0],2:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"990a5ca41c08653c3a1f0cd31b6987bc5f679787"});var actualCoverage=coverage[path];return cov_1r04oom6oe=function(){return actualCoverage},actualCoverage}cov_1r04oom6oe();var dbNotificationCss=(cov_1r04oom6oe().s[0]++,'@charset "UTF-8";:where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:none;margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}:where(ul){list-style-type:"•   "}:where(ul) li::marker{color:#ec0016}body,div,button,input,select,textarea{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}.cmp-notification{background-color:#282d37;box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-bottom:1rem;padding:1rem}section[data-variant=hovering] .cmp-notification{background-color:#fff}section[data-variant=alert] .cmp-notification{color:#fff}section[data-variant=hovering] .cmp-notification{border:2px solid transparent;border-radius:0.5rem;padding:0.875rem 1rem}.cmp-notification>em{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-notification[data-type=success]{background-color:#508b1b}section[data-variant=hovering] .cmp-notification[data-type=success]{border-color:#508b1b}.cmp-notification[data-type=warning]{background-color:#f75f00}section[data-variant=hovering] .cmp-notification[data-type=warning]{border-color:#f75f00}.cmp-notification[data-type=error]{background-color:#ec0016}section[data-variant=hovering] .cmp-notification[data-type=error]{border-color:#ec0016}.cmp-notification[data-type=informative]{background-color:#0087b9}section[data-variant=hovering] .cmp-notification[data-type=informative]{border-color:#0087b9}.cmp-notification[data-icon],.cmp-notification[data-icon-before],.cmp-notification[data-icon-after]{align-items:center;display:flex}.cmp-notification[data-icon]::before,.cmp-notification[data-icon-before]::before{--icon-margin-after:0.625rem}.cmp-notification[data-icon-after]{justify-content:space-between}.cmp-notification[data-icon-after]::after{--icon-margin-before:0.625rem}*[slot=prenotification]{padding-right:10px}*[slot=postnotification]{float:right}');cov_1r04oom6oe().s[1]++;var DbNotification=function(){function DbNotification(hostRef){cov_1r04oom6oe().f[0]++,cov_1r04oom6oe().s[2]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_1r04oom6oe().s[3]++,this.variant=this.getVariant(),cov_1r04oom6oe().s[4]++,this.type=void 0}var _proto=DbNotification.prototype;return _proto.getVariant=function getVariant(){return cov_1r04oom6oe().f[1]++,cov_1r04oom6oe().s[5]++,cov_1r04oom6oe().b[1][0]++,"error"===this.type||(cov_1r04oom6oe().b[1][1]++,"warning"===this.type)?(cov_1r04oom6oe().b[0][0]++,"alert"):(cov_1r04oom6oe().b[0][1]++,"status")},_proto.render=function render(){return cov_1r04oom6oe().f[2]++,cov_1r04oom6oe().s[6]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"cmp-notification",role:this.variant,"data-type":this.type?(cov_1r04oom6oe().b[2][0]++,this.type):(cov_1r04oom6oe().b[2][1]++,null)},(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"prenotification"}),(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null),(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"postnotification"}))},DbNotification}();cov_1r04oom6oe().s[7]++,DbNotification.style=dbNotificationCss}}]);