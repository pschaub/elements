"use strict";(self.webpackChunk_db_ui_elements_monorepo=self.webpackChunk_db_ui_elements_monorepo||[]).push([[198],{"./packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{db_progress:()=>DbProgress});var _index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-60c9fafb.js"),_utils_e9a895fb_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js");function cov_2bz3elvcnw(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"ddfbf997be19c4eb3fbbe4c07edc0e4ab71765a1"===coverage[path].hash||(coverage[path]={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/db-progress.entry.js",statementMap:{0:{start:{line:4,column:22},end:{line:4,column:7321}},1:{start:{line:6,column:19},end:{line:21,column:1}},2:{start:{line:8,column:4},end:{line:8,column:36}},3:{start:{line:9,column:4},end:{line:9,column:27}},4:{start:{line:10,column:4},end:{line:10,column:25}},5:{start:{line:11,column:4},end:{line:11,column:33}},6:{start:{line:12,column:4},end:{line:12,column:30}},7:{start:{line:13,column:4},end:{line:13,column:28}},8:{start:{line:14,column:4},end:{line:14,column:31}},9:{start:{line:17,column:4},end:{line:19,column:220}},10:{start:{line:22,column:0},end:{line:22,column:33}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:7,column:2},end:{line:7,column:3}},loc:{start:{line:7,column:23},end:{line:15,column:3}},line:7},1:{name:"(anonymous_1)",decl:{start:{line:16,column:2},end:{line:16,column:3}},loc:{start:{line:16,column:11},end:{line:20,column:3}},line:16}},branchMap:{0:{loc:{start:{line:17,column:179},end:{line:19,column:22}},type:"cond-expr",locations:[{start:{line:18,column:10},end:{line:18,column:51}},{start:{line:19,column:10},end:{line:19,column:22}}],line:17},1:{loc:{start:{line:19,column:72},end:{line:19,column:217}},type:"binary-expr",locations:[{start:{line:19,column:72},end:{line:19,column:91}},{start:{line:19,column:96},end:{line:19,column:216}}],line:19}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ddfbf997be19c4eb3fbbe4c07edc0e4ab71765a1"});var actualCoverage=coverage[path];return cov_2bz3elvcnw=function(){return actualCoverage},actualCoverage}cov_2bz3elvcnw();var dbProgressCss=(cov_2bz3elvcnw().s[0]++,'@charset "UTF-8";.sc-db-progress:where(html){line-height:1.15}.sc-db-progress:where(h1){font-size:2em;margin-block-end:0.67em;margin-block-start:0.67em}.sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress .sc-db-progress:where(dl,ol.sc-db-progress,ul).sc-db-progress{margin-block-end:0;margin-block-start:0}.sc-db-progress:where(hr){box-sizing:content-box;color:inherit;height:0}.sc-db-progress:where(pre){font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(abbr[title]){text-decoration:underline;text-decoration:underline dotted}.sc-db-progress:where(b,strong).sc-db-progress{font-weight:bolder}.sc-db-progress:where(code,kbd.sc-db-progress,samp).sc-db-progress{font-family:monospace, monospace;font-size:1em}.sc-db-progress:where(small){font-size:80%}.sc-db-progress:where(table){border-color:currentColor;text-indent:0}.sc-db-progress:where(button,input.sc-db-progress,select).sc-db-progress{margin:0}.sc-db-progress:where(button){text-transform:none}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress{-webkit-appearance:button}.sc-db-progress:where(progress){vertical-align:baseline}.sc-db-progress:where(select){text-transform:none}.sc-db-progress:where(textarea){margin:0}.sc-db-progress:where(input[type=search i]){-webkit-appearance:textfield;outline-offset:-2px}.sc-db-progress::-webkit-inner-spin-button,.sc-db-progress::-webkit-outer-spin-button{height:auto}.sc-db-progress::-webkit-input-placeholder{color:inherit;opacity:0.54}.sc-db-progress::-webkit-search-decoration{-webkit-appearance:none}.sc-db-progress::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focus-inner{border-style:none;padding:0}.sc-db-progress:where(button,input.sc-db-progress:is([type=button i],[type=color i].sc-db-progress,[type=reset i].sc-db-progress,[type=submit i])).sc-db-progress::-moz-focusring{outline:1px dotted ButtonText}.sc-db-progress:where(:-moz-ui-invalid){box-shadow:none}.sc-db-progress:where(dialog){background-color:white;border:solid;color:black;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}.sc-db-progress:where(dialog:not([open])){display:none}.sc-db-progress:where(summary){display:list-item}html.sc-db-progress,.sc-db-progress-h{box-sizing:border-box}*.sc-db-progress,.sc-db-progress::before,.sc-db-progress::after{box-sizing:inherit}img.sc-db-progress,embed.sc-db-progress,iframe.sc-db-progress,object.sc-db-progress,video.sc-db-progress{height:auto;max-width:100%}iframe.sc-db-progress{border:0}nav.sc-db-progress ol.sc-db-progress,nav.sc-db-progress ul.sc-db-progress,[role=navigation].sc-db-progress ol.sc-db-progress,[role=navigation].sc-db-progress ul.sc-db-progress{list-style:none;margin:0;padding:0}.sc-db-progress:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress{--db-focus-outline-size:max(2px, 0.08em)}.sc-db-progress:is(a,button.sc-db-progress,input.sc-db-progress,textarea.sc-db-progress,summary).sc-db-progress:focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}.sc-db-progress:where(ul){list-style-type:"•   "}.sc-db-progress:where(ul) li.sc-db-progress::marker{color:#ec0016}body.sc-db-progress,.sc-db-progress-h,div.sc-db-progress,button.sc-db-progress,input.sc-db-progress,select.sc-db-progress,textarea.sc-db-progress{color:#282d37;font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;font-size:1rem;font-weight:400;line-height:1.5}a.sc-db-progress{color:inherit}.elm-progress.sc-db-progress progress.sc-db-progress{--progress-value--backgroundColor:#ec0016}.elm-progress.sc-db-progress progress.sc-db-progress{appearance:none;background-color:#fcfdfd;border:none;height:0.25rem;vertical-align:middle}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-bar{background-color:#fcfdfd}.elm-progress.sc-db-progress progress.sc-db-progress::-webkit-progress-value{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-moz-progress-bar{background-color:var(--progress-value--backgroundColor)}.elm-progress.sc-db-progress progress.sc-db-progress::-ms-fill{background-color:var(--progress-value--backgroundColor);border:none}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-webkit-progress-value{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-moz-progress-bar{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:not([style^="--progress-conic:"])::-ms-fill{border-radius:12px}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:2.1s;animation-iteration-count:infinite;animation-name:elmProgressMoveIndeterminate;animation-timing-function:linear;animation-timing-function:cubic-bezier(0.65, 0.815, 0.735, 0.395);background-color:#fcfdfd;background-image:linear-gradient(to right, #ec0016 100%, #fcfdfd 100%);background-position:top left;background-repeat:no-repeat;background-size:150% 150%}@media (prefers-reduced-motion: reduce){.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate{animation-duration:15s}}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-webkit-progress-bar{background-color:transparent}.elm-progress.sc-db-progress progress.sc-db-progress:indeterminate::-moz-progress-bar{background-color:transparent}@supports (background: conic-gradient(#000, #fff)){.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress{--fill:calc(var(--progress-conic) * 1%);background:conic-gradient(var(--progress-value--backgroundColor) var(--fill), #fff 0);border:0;border-radius:50%;height:4.6875rem;width:4.6875rem}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-inner-element,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-bar,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-webkit-progress-value{display:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress::-moz-progress-bar{background:none}.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress+output.sc-db-progress,.elm-progress.sc-db-progress progress[style^="--progress-conic:"].sc-db-progress+label.sc-db-progress{align-items:center;background:#fdfdfd;border-radius:50%;display:block;display:flex;height:3.4375rem;justify-content:center;position:absolute;transform:translate(0.625rem, -4.0625rem);width:3.4375rem}}@keyframes elmProgressMoveIndeterminate{0%{background-position:-35% 0;background-size:35% 100%}60%{background-position:101% 0;background-size:65% 100%}100%{background-position:101% 0;background-size:1% 100%}}');cov_2bz3elvcnw().s[1]++;var DbProgress=function(){function DbProgress(hostRef){cov_2bz3elvcnw().f[0]++,cov_2bz3elvcnw().s[2]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),cov_2bz3elvcnw().s[3]++,this.value=void 0,cov_2bz3elvcnw().s[4]++,this.max=void 0,cov_2bz3elvcnw().s[5]++,this.htmlid="db-"+(0,_utils_e9a895fb_js__WEBPACK_IMPORTED_MODULE_1__.u)(),cov_2bz3elvcnw().s[6]++,this.percentagesign="%",cov_2bz3elvcnw().s[7]++,this.circle=void 0,cov_2bz3elvcnw().s[8]++,this.indeterminate=!1}return DbProgress.prototype.render=function render(){var _ref,_ref2;return cov_2bz3elvcnw().f[1]++,cov_2bz3elvcnw().s[9]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"elm-progress"},(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("progress",Object.assign({value:this.value,max:this.max,id:this.htmlid},{indeterminate:this.indeterminate},{style:!0===this.circle?(cov_2bz3elvcnw().b[0][0]++,_ref={},_ref["--progress-conic"]=""+this.value,_ref):(cov_2bz3elvcnw().b[0][1]++,_ref2={},_ref2[""]="",_ref2),"aria-describedby":this.htmlid+"-label"})),(cov_2bz3elvcnw().b[1][0]++,!this.indeterminate&&(cov_2bz3elvcnw().b[1][1]++,(0,_index_60c9fafb_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.htmlid,id:this.htmlid+"-label","aria-hidden":"true"},this.value,this.percentagesign))))},DbProgress}();cov_2bz3elvcnw().s[10]++,DbProgress.style=dbProgressCss},"./packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_1y46wqqcfu(){var path="/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/home/runner/work/elements/elements/packages/db-ui-elements-stencil/dist/esm/utils-e9a895fb.js",statementMap:{0:{start:{line:1,column:13},end:{line:15,column:1}},1:{start:{line:2,column:2},end:{line:14,column:3}},2:{start:{line:5,column:4},end:{line:6,column:86}},3:{start:{line:5,column:73},end:{line:6,column:84}},4:{start:{line:10,column:4},end:{line:13,column:7}},5:{start:{line:11,column:16},end:{line:11,column:40}},6:{start:{line:11,column:46},end:{line:11,column:76}},7:{start:{line:12,column:6},end:{line:12,column:28}},8:{start:{line:16,column:27},end:{line:22,column:1}},9:{start:{line:17,column:2},end:{line:18,column:14}},10:{start:{line:18,column:4},end:{line:18,column:14}},11:{start:{line:19,column:2},end:{line:21,column:16}},12:{start:{line:20,column:19},end:{line:20,column:106}},13:{start:{line:28,column:44},end:{line:39,column:1}},14:{start:{line:29,column:2},end:{line:38,column:3}},15:{start:{line:30,column:4},end:{line:37,column:7}},16:{start:{line:31,column:6},end:{line:33,column:7}},17:{start:{line:32,column:8},end:{line:32,column:52}},18:{start:{line:34,column:6},end:{line:36,column:7}},19:{start:{line:35,column:8},end:{line:35,column:60}},20:{start:{line:44,column:18},end:{line:57,column:1}},21:{start:{line:45,column:2},end:{line:56,column:3}},22:{start:{line:46,column:4},end:{line:48,column:5}},23:{start:{line:47,column:6},end:{line:47,column:30}},24:{start:{line:49,column:4},end:{line:50,column:18}},25:{start:{line:50,column:6},end:{line:50,column:18}},26:{start:{line:51,column:4},end:{line:52,column:18}},27:{start:{line:52,column:6},end:{line:52,column:18}},28:{start:{line:55,column:4},end:{line:55,column:17}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:1,column:13},end:{line:1,column:14}},loc:{start:{line:1,column:19},end:{line:15,column:1}},line:1},1:{name:"(anonymous_1)",decl:{start:{line:5,column:66},end:{line:5,column:67}},loc:{start:{line:5,column:73},end:{line:6,column:84}},line:5},2:{name:"(anonymous_2)",decl:{start:{line:10,column:67},end:{line:10,column:68}},loc:{start:{line:10,column:80},end:{line:13,column:5}},line:10},3:{name:"(anonymous_3)",decl:{start:{line:16,column:27},end:{line:16,column:28}},loc:{start:{line:16,column:41},end:{line:22,column:1}},line:16},4:{name:"(anonymous_4)",decl:{start:{line:20,column:9},end:{line:20,column:10}},loc:{start:{line:20,column:19},end:{line:20,column:106}},line:20},5:{name:"(anonymous_5)",decl:{start:{line:28,column:44},end:{line:28,column:45}},loc:{start:{line:28,column:63},end:{line:39,column:1}},line:28},6:{name:"(anonymous_6)",decl:{start:{line:30,column:38},end:{line:30,column:39}},loc:{start:{line:30,column:49},end:{line:37,column:5}},line:30},7:{name:"(anonymous_7)",decl:{start:{line:44,column:18},end:{line:44,column:19}},loc:{start:{line:44,column:28},end:{line:57,column:1}},line:44}},branchMap:{0:{loc:{start:{line:11,column:46},end:{line:11,column:76}},type:"cond-expr",locations:[{start:{line:11,column:57},end:{line:11,column:58}},{start:{line:11,column:61},end:{line:11,column:76}}],line:11},1:{loc:{start:{line:17,column:2},end:{line:18,column:14}},type:"if",locations:[{start:{line:17,column:2},end:{line:18,column:14}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:17},2:{loc:{start:{line:29,column:2},end:{line:38,column:3}},type:"if",locations:[{start:{line:29,column:2},end:{line:38,column:3}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:29},3:{loc:{start:{line:31,column:6},end:{line:33,column:7}},type:"if",locations:[{start:{line:31,column:6},end:{line:33,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:31},4:{loc:{start:{line:34,column:6},end:{line:36,column:7}},type:"if",locations:[{start:{line:34,column:6},end:{line:36,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:34},5:{loc:{start:{line:46,column:4},end:{line:48,column:5}},type:"if",locations:[{start:{line:46,column:4},end:{line:48,column:5}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:46},6:{loc:{start:{line:49,column:4},end:{line:50,column:18}},type:"if",locations:[{start:{line:49,column:4},end:{line:50,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:49},7:{loc:{start:{line:51,column:4},end:{line:52,column:18}},type:"if",locations:[{start:{line:51,column:4},end:{line:52,column:18}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:51}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"993a6618e6a5de5627a7cb30bf74ee01c3d6ef78"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"993a6618e6a5de5627a7cb30bf74ee01c3d6ef78"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_1y46wqqcfu=function(){return actualCoverage},actualCoverage}__webpack_require__.d(__webpack_exports__,{a:()=>addIconVariantToAllDbLinksRecursive,g:()=>getDefaultLinkData,p:()=>parseData,u:()=>uuid}),cov_1y46wqqcfu(),cov_1y46wqqcfu().s[0]++;var uuid=function uuid(){cov_1y46wqqcfu().f[0]++,cov_1y46wqqcfu().s[1]++;try{return cov_1y46wqqcfu().s[2]++,([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(c){return cov_1y46wqqcfu().f[1]++,cov_1y46wqqcfu().s[3]++,(c^crypto.getRandomValues(new Uint8Array(1))[0]&15>>c/4).toString(16)}))}catch(_){return cov_1y46wqqcfu().s[4]++,"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){cov_1y46wqqcfu().f[2]++;var r=(cov_1y46wqqcfu().s[5]++,16*Math.random()|0),v=(cov_1y46wqqcfu().s[6]++,"x"==c?(cov_1y46wqqcfu().b[0][0]++,r):(cov_1y46wqqcfu().b[0][1]++,3&r|8));return cov_1y46wqqcfu().s[7]++,v.toString(16)}))}};cov_1y46wqqcfu().s[8]++;var getDefaultLinkData=function getDefaultLinkData(compData){return cov_1y46wqqcfu().f[3]++,cov_1y46wqqcfu().s[9]++,compData?(cov_1y46wqqcfu().b[1][1]++,cov_1y46wqqcfu().s[11]++,compData.map((function(data){return cov_1y46wqqcfu().f[4]++,cov_1y46wqqcfu().s[12]++,'<li><db-link href="'+data.href+'" target="'+data.target+'">'+data.label+"</db-link></li>"})).join("\n")):(cov_1y46wqqcfu().b[1][0]++,cov_1y46wqqcfu().s[10]++,"")};cov_1y46wqqcfu().s[13]++;var addIconVariantToAllDbLinksRecursive=function addIconVariantToAllDbLinksRecursive(host,variant){cov_1y46wqqcfu().f[5]++,cov_1y46wqqcfu().s[14]++,host.children?(cov_1y46wqqcfu().b[2][0]++,cov_1y46wqqcfu().s[15]++,Array.from(host.children).forEach((function(child){cov_1y46wqqcfu().f[6]++,cov_1y46wqqcfu().s[16]++,"db-link"===child.tagName.toLowerCase()?(cov_1y46wqqcfu().b[3][0]++,cov_1y46wqqcfu().s[17]++,child.setAttribute("icon-variant",variant)):cov_1y46wqqcfu().b[3][1]++,cov_1y46wqqcfu().s[18]++,child.children?(cov_1y46wqqcfu().b[4][0]++,cov_1y46wqqcfu().s[19]++,addIconVariantToAllDbLinksRecursive(child,variant)):cov_1y46wqqcfu().b[4][1]++}))):cov_1y46wqqcfu().b[2][1]++};cov_1y46wqqcfu().s[20]++;var parseData=function parseData(item){cov_1y46wqqcfu().f[7]++,cov_1y46wqqcfu().s[21]++;try{if(cov_1y46wqqcfu().s[22]++,"string"==typeof item)return cov_1y46wqqcfu().b[5][0]++,cov_1y46wqqcfu().s[23]++,JSON.parse(item);if(cov_1y46wqqcfu().b[5][1]++,cov_1y46wqqcfu().s[24]++,"object"==typeof item)return cov_1y46wqqcfu().b[6][0]++,cov_1y46wqqcfu().s[25]++,item;if(cov_1y46wqqcfu().b[6][1]++,cov_1y46wqqcfu().s[26]++,item instanceof Array)return cov_1y46wqqcfu().b[7][0]++,cov_1y46wqqcfu().s[27]++,item;cov_1y46wqqcfu().b[7][1]++}catch(error){return cov_1y46wqqcfu().s[28]++,!1}}}}]);