"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[897],{"./packages/db-ui-elements-stencil/dist/esm/db-tab.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_tab:()=>DbTab});var _index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-96b5c21f.js"),_utils_e9a895fb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js");function cov_1hldd323fd(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tab.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f92b611e78d3896f90aa1d2f17f540608c3d186e"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-tab.entry.js",statementMap:{0:{start:{line:4,column:17},end:{line:4,column:4835}},1:{start:{line:6,column:14},end:{line:14,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:9,column:4},end:{line:9,column:21}},4:{start:{line:12,column:4},end:{line:12,column:267}},5:{start:{line:15,column:0},end:{line:15,column:23}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:10,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:11,column:2},end:{line:11,column:3}},loc:{start:{line:11,column:11},end:{line:13,column:3}},line:11}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f92b611e78d3896f90aa1d2f17f540608c3d186e"});var actualCoverage=coverage[path];return cov_1hldd323fd=function(){return actualCoverage},actualCoverage}cov_1hldd323fd();var dbTabCss=(cov_1hldd323fd().s[0]++,':where(html){line-height:1.15}:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}:where(dl,ol,ul) :where(dl,ol,ul){margin-block-end:0;margin-block-start:0}:where(hr){box-sizing:content-box;color:inherit;height:0}:where(pre){font-family:monospace, monospace;font-size:1em}:where(abbr[title]){text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}:where(b,strong){font-weight:bolder}:where(code,kbd,samp){font-family:monospace, monospace;font-size:1em}:where(small){font-size:80%}:where(table){border-color:currentColor;text-indent:0}:where(button,input,select){margin:0}:where(button){text-transform:none}:where(button,input:is([type=button i],[type=reset i],[type=submit i])){-webkit-appearance:button}:where(progress){vertical-align:baseline}:where(select){text-transform:none}:where(textarea){margin:0}:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focus-inner{border-style:none;padding:0}:where(button,input:is([type=button i],[type=color i],[type=reset i],[type=submit i]))::-moz-focusring{outline:1px dotted ButtonText}:where(:-moz-ui-invalid){box-shadow:none}:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}:where(dialog:not([open])){display:none}:where(summary){display:list-item}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}a{color:inherit}.cmp-tab-bar{display:flex;flex-wrap:wrap}.cmp-tab-bar label[role=tab],.cmp-tab-bar section[role=tabpanel]{background-color:#fdfdfd}.cmp-tab-bar>input[type=radio],.cmp-tab-bar>*>input[type=radio]{clip:rect(0, 0, 0, 0);height:1px;overflow:hidden;position:absolute !important;white-space:nowrap;width:1px}.cmp-tab-bar>input[type=radio]+label[role=tab],.cmp-tab-bar>*>input[type=radio]+label[role=tab]{border-top-left-radius:4px;border-top-right-radius:4px;cursor:pointer;display:inline-block;margin-left:0.5rem;padding:0.3125rem 2rem;position:relative;z-index:1}.cmp-tab-bar>input[type=radio]+label[role=tab]:first-of-type,.cmp-tab-bar>*>input[type=radio]+label[role=tab]:first-of-type{margin-left:1rem}.cmp-tab-bar>input[type=radio]:focus+label,.cmp-tab-bar>*>input[type=radio]:focus+label{outline:1px dotted #878c96}.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:not(:checked)+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:not(:checked)+label[role=tab]:focus{background-color:#f0f3f5}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab],.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]{color:#878c96}.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>input[type=radio]:disabled+label[role=tab]:focus,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:hover,.cmp-tab-bar>*>input[type=radio]:disabled+label[role=tab]:focus{background-color:unset}.cmp-tab-bar>input[type=radio]:checked+label[role=tab],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]{border:0.0625rem solid #646973;border-bottom:none;font-weight:700;padding-top:0.1875rem;transform:translateY(0.0625rem)}.cmp-tab-bar>input[type=radio]:checked+label[role=tab]+section[role=tabpanel],.cmp-tab-bar>*>input[type=radio]:checked+label[role=tab]+section[role=tabpanel]{display:initial}.cmp-tab-bar section[role=tabpanel]{border-top:0.0625rem solid #646973;box-shadow:0 2px 5px rgba(0, 0, 0, 0.08), 0 15px 30px rgba(0, 0, 0, 0.05);display:none;flex-basis:100%;order:1;padding:2.875rem 3.125rem}.cmp-db-tab{display:contents}');cov_1hldd323fd().s[1]++;var DbTab=function(){function DbTab(hostRef){cov_1hldd323fd().f[0]++,cov_1hldd323fd().s[2]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_1hldd323fd().s[3]++,this.id=(0,_utils_e9a895fb_js__WEBPACK_IMPORTED_MODULE_1__.u)()}return DbTab.prototype.render=function render(){return cov_1hldd323fd().f[1]++,cov_1hldd323fd().s[4]++,(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:"cmp-db-tab"},(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"radio",name:this.name,id:this.id,checked:this.active}),(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.id,role:"tab"},this.label),(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("section",{id:"content-"+this.id,role:"tabpanel"},(0,_index_96b5c21f_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))},DbTab}();cov_1hldd323fd().s[5]++,DbTab.style=dbTabCss},"./packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_1y46wqqcfu(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js",statementMap:{0:{start:{line:1,column:13},end:{line:15,column:1}},1:{start:{line:2,column:2},end:{line:14,column:3}},2:{start:{line:5,column:4},end:{line:6,column:86}},3:{start:{line:5,column:73},end:{line:6,column:84}},4:{start:{line:10,column:4},end:{line:13,column:7}},5:{start:{line:11,column:16},end:{line:11,column:40}},6:{start:{line:11,column:46},end:{line:11,column:76}},7:{start:{line:12,column:6},end:{line:12,column:28}},8:{start:{line:16,column:27},end:{line:22,column:1}},9:{start:{line:17,column:2},end:{line:18,column:14}},10:{start:{line:18,column:4},end:{line:18,column:14}},11:{start:{line:19,column:2},end:{line:21,column:16}},12:{start:{line:20,column:19},end:{line:20,column:106}},13:{start:{line:28,column:44},end:{line:39,column:1}},14:{start:{line:29,column:2},end:{line:38,column:3}},15:{start:{line:30,column:4},end:{line:37,column:7}},16:{start:{line:31,column:6},end:{line:33,column:7}},17:{start:{line:32,column:8},end:{line:32,column:52}},18:{start:{line:34,column:6},end:{line:36,column:7}},19:{start:{line:35,column:8},end:{line:35,column:60}},20:{start:{line:44,column:18},end:{line:57,column:1}},21:{start:{line:45,column:2},end:{line:56,column:3}},22:{start:{line:46,column:4},end:{line:48,column:5}},23:{start:{line:47,column:6},end:{line:47,column:30}},24:{start:{line:49,column:4},end:{line:50,column:18}},25:{start:{line:50,column:6},end:{line:50,column:18}},26:{start:{line:51,column:4},end:{line:52,column:18}},27:{start:{line:52,column:6},end:{line:52,column:18}},28:{start:{line:55,column:4},end:{line:55,column:17}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:13},end:{line:1,column:14}},loc:{start:{line:1,column:19},end:{line:15,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:5,column:66},end:{line:5,column:67}},loc:{start:{line:5,column:73},end:{line:6,column:84}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:10,column:67},end:{line:10,column:68}},loc:{start:{line:10,column:80},end:{line:13,column:5}},line:10},3:{name:"(anonymous_3)",decl:{start:{line:16,column:27},end:{line:16,column:28}},loc:{start:{line:16,column:41},end:{line:22,column:1}},line:16},4:{name:"(anonymous_4)",decl:{start:{line:20,column:9},end:{line:20,column:10}},loc:{start:{line:20,column:19},end:{line:20,column:106}},line:20},5:{name:"(anonymous_5)",decl:{start:{line:28,column:44},end:{line:28,column:45}},loc:{start:{line:28,column:63},end:{line:39,column:1}},line:28},6:{name:"(anonymous_6)",decl:{start:{line:30,column:38},end:{line:30,column:39}},loc:{start:{line:30,column:49},end:{line:37,column:5}},line:30},7:{name:"(anonymous_7)",decl:{start:{line:44,column:18},end:{line:44,column:19}},loc:{start:{line:44,column:28},end:{line:57,column:1}},line:44}},branchMap:{0:{loc:{start:{line:11,column:46},end:{line:11,column:76}},type:"cond-expr",locations:[{start:{line:11,column:57},end:{line:11,column:58}},{start:{line:11,column:61},end:{line:11,column:76}}],line:11},1:{loc:{start:{line:17,column:2},end:{line:18,column:14}},type:"if",locations:[{start:{line:17,column:2},end:{line:18,column:14}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:17},2:{loc:{start:{line:29,column:2},end:{line:38,column:3}},type:"if",locations:[{start:{line:29,column:2},end:{line:38,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:29},3:{loc:{start:{line:31,column:6},end:{line:33,column:7}},type:"if",locations:[{start:{line:31,column:6},end:{line:33,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:31},4:{loc:{start:{line:34,column:6},end:{line:36,column:7}},type:"if",locations:[{start:{line:34,column:6},end:{line:36,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:34},5:{loc:{start:{line:46,column:4},end:{line:48,column:5}},type:"if",locations:[{start:{line:46,column:4},end:{line:48,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:46},6:{loc:{start:{line:49,column:4},end:{line:50,column:18}},type:"if",locations:[{start:{line:49,column:4},end:{line:50,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:49},7:{loc:{start:{line:51,column:4},end:{line:52,column:18}},type:"if",locations:[{start:{line:51,column:4},end:{line:52,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:51}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"993a6618e6a5de5627a7cb30bf74ee01c3d6ef78"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"993a6618e6a5de5627a7cb30bf74ee01c3d6ef78"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1y46wqqcfu=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{a:()=>addIconVariantToAllDbLinksRecursive,g:()=>getDefaultLinkData,p:()=>parseData,u:()=>uuid}),cov_1y46wqqcfu(),cov_1y46wqqcfu().s[0]++;var uuid=function uuid(){cov_1y46wqqcfu().f[0]++,cov_1y46wqqcfu().s[1]++;try{return cov_1y46wqqcfu().s[2]++,([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(c){return cov_1y46wqqcfu().f[1]++,cov_1y46wqqcfu().s[3]++,(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16)}))}catch(_){return cov_1y46wqqcfu().s[4]++,"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){cov_1y46wqqcfu().f[2]++;var r=(cov_1y46wqqcfu().s[5]++,16*Math.random()|0),v=(cov_1y46wqqcfu().s[6]++,"x"==c?(cov_1y46wqqcfu().b[0][0]++,r):(cov_1y46wqqcfu().b[0][1]++,3&r|8));return cov_1y46wqqcfu().s[7]++,v.toString(16)}))}};cov_1y46wqqcfu().s[8]++;var getDefaultLinkData=function getDefaultLinkData(compData){return cov_1y46wqqcfu().f[3]++,cov_1y46wqqcfu().s[9]++,compData?(cov_1y46wqqcfu().b[1][1]++,cov_1y46wqqcfu().s[11]++,compData.map((function(data){return cov_1y46wqqcfu().f[4]++,cov_1y46wqqcfu().s[12]++,'<li><db-link href="'+data.href+'" target="'+data.target+'">'+data.label+"</db-link></li>"})).join("\n")):(cov_1y46wqqcfu().b[1][0]++,cov_1y46wqqcfu().s[10]++,"")};cov_1y46wqqcfu().s[13]++;var addIconVariantToAllDbLinksRecursive=function addIconVariantToAllDbLinksRecursive(host,variant){cov_1y46wqqcfu().f[5]++,cov_1y46wqqcfu().s[14]++,host.children?(cov_1y46wqqcfu().b[2][0]++,cov_1y46wqqcfu().s[15]++,Array.from(host.children).forEach((function(child){cov_1y46wqqcfu().f[6]++,cov_1y46wqqcfu().s[16]++,"db-link"===child.tagName.toLowerCase()?(cov_1y46wqqcfu().b[3][0]++,cov_1y46wqqcfu().s[17]++,child.setAttribute("icon-variant",variant)):cov_1y46wqqcfu().b[3][1]++,cov_1y46wqqcfu().s[18]++,child.children?(cov_1y46wqqcfu().b[4][0]++,cov_1y46wqqcfu().s[19]++,addIconVariantToAllDbLinksRecursive(child,variant)):cov_1y46wqqcfu().b[4][1]++}))):cov_1y46wqqcfu().b[2][1]++};cov_1y46wqqcfu().s[20]++;var parseData=function parseData(item){cov_1y46wqqcfu().f[7]++,cov_1y46wqqcfu().s[21]++;try{if(cov_1y46wqqcfu().s[22]++,"string"==typeof item)return cov_1y46wqqcfu().b[5][0]++,cov_1y46wqqcfu().s[23]++,JSON.parse(item);if(cov_1y46wqqcfu().b[5][1]++,cov_1y46wqqcfu().s[24]++,"object"==typeof item)return cov_1y46wqqcfu().b[6][0]++,cov_1y46wqqcfu().s[25]++,item;if(cov_1y46wqqcfu().b[6][1]++,cov_1y46wqqcfu().s[26]++,item instanceof Array)return cov_1y46wqqcfu().b[7][0]++,cov_1y46wqqcfu().s[27]++,item;cov_1y46wqqcfu().b[7][1]++}catch(error){return cov_1y46wqqcfu().s[28]++,!1}}}}]);