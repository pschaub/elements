(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"./packages/db-ui-elements-stencil/dist/esm/db-card.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"db_card",(function(){return DbCard}));var _index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/db-ui-elements-stencil/dist/esm/index-c3ea6b1c.js");function cov_1kt7lhnrhc(){var path="/build/db-ui/elements/packages/db-ui-elements-stencil/dist/esm/db-card.entry.js",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f2b4afbf06a6305ea562be5122c053788726559b"===coverage[path].hash||(coverage[path]={path:"/build/db-ui/elements/packages/db-ui-elements-stencil/dist/esm/db-card.entry.js",statementMap:{0:{start:{line:3,column:18},end:{line:3,column:4256}},1:{start:{line:5,column:15},end:{line:20,column:1}},2:{start:{line:7,column:4},end:{line:7,column:36}},3:{start:{line:11,column:4},end:{line:11,column:57}},4:{start:{line:15,column:4},end:{line:15,column:28}},5:{start:{line:18,column:4},end:{line:18,column:603}},6:{start:{line:21,column:0},end:{line:21,column:25}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:6,column:2},end:{line:6,column:3}},loc:{start:{line:6,column:23},end:{line:16,column:3}},line:6},1:{name:"(anonymous_1)",decl:{start:{line:17,column:2},end:{line:17,column:3}},loc:{start:{line:17,column:11},end:{line:19,column:3}},line:17}},branchMap:{0:{loc:{start:{line:18,column:92},end:{line:18,column:328}},type:"binary-expr",locations:[{start:{line:18,column:92},end:{line:18,column:109}},{start:{line:18,column:114},end:{line:18,column:327}}],line:18},1:{loc:{start:{line:18,column:330},end:{line:18,column:439}},type:"binary-expr",locations:[{start:{line:18,column:330},end:{line:18,column:348}},{start:{line:18,column:352},end:{line:18,column:362}},{start:{line:18,column:367},end:{line:18,column:438}}],line:18},2:{loc:{start:{line:18,column:463},end:{line:18,column:504}},type:"binary-expr",locations:[{start:{line:18,column:463},end:{line:18,column:474}},{start:{line:18,column:478},end:{line:18,column:504}}],line:18},3:{loc:{start:{line:18,column:506},end:{line:18,column:548}},type:"binary-expr",locations:[{start:{line:18,column:506},end:{line:18,column:518}},{start:{line:18,column:522},end:{line:18,column:548}}],line:18},4:{loc:{start:{line:18,column:550},end:{line:18,column:598}},type:"binary-expr",locations:[{start:{line:18,column:550},end:{line:18,column:562}},{start:{line:18,column:566},end:{line:18,column:579}},{start:{line:18,column:583},end:{line:18,column:598}}],line:18}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0,0],2:[0,0],3:[0,0],4:[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f2b4afbf06a6305ea562be5122c053788726559b"});var actualCoverage=coverage[path];return cov_1kt7lhnrhc=function(){return actualCoverage},actualCoverage}cov_1kt7lhnrhc();var dbCardCss=(cov_1kt7lhnrhc().s[0]++,'html,:host{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}h1{font-size:2em;margin:0.67em 0}dl dl,dl ol,dl ul,ol dl,ul dl{margin:0}ol ol,ol ul,ul ol,ul ul{margin:0}hr{box-sizing:content-box;color:inherit;height:0;overflow:visible}main{display:block}pre{font-family:monospace, monospace;font-size:1em}a{background-color:transparent}abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em}small{font-size:80%}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}table{border-color:inherit;text-indent:0}button,input,select{margin:0}button{overflow:visible;text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}fieldset{padding:0.35em 0.75em 0.625em}input{overflow:visible}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;white-space:normal}progress{display:inline-block;vertical-align:baseline}select{text-transform:none}textarea{margin:0;overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-input-placeholder{color:inherit;opacity:0.54}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}::-moz-focus-inner{border-style:none;padding:0}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}details{display:block}dialog{background-color:white;border:solid;color:black;display:block;height:-moz-fit-content;height:fit-content;left:0;margin:auto;padding:1em;position:absolute;right:0;width:-moz-fit-content;width:fit-content}dialog:not([open]){display:none}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}html,:host{box-sizing:border-box}*,::before,::after{box-sizing:inherit}img,embed,iframe,object,video{height:auto;max-width:100%}iframe{border:0}nav ol,nav ul,[role=navigation] ol,[role=navigation] ul{list-style:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E");margin:0;padding:0}:root{--db-focus-outline-offset:1px;--db-focus-outline-color:#2c95c4}:is(a,button,input,textarea,summary){--db-focus-outline-size:max(2px, 0.08em)}:is(a,button,input,textarea,summary):focus-visible{outline:var(--db-focus-outline-size) var(--db-focus-outline-style, solid) var(--db-focus-outline-color, currentColor);outline-offset:var(--db-focus-outline-offset, var(--db-focus-outline-size))}body,:host,div,button,input,select,textarea{font-family:"DB Screen Sans", Helvetica, Arial, sans-serif;color:#282d37;font-size:1rem;font-weight:400;line-height:1.5}.cmp-card{box-shadow:0 0 5px rgba(0, 0, 0, 0.08), 0 5px 30px rgba(0, 0, 0, 0.05);border-radius:8px;background-color:#fff}.cmp-card>a{text-decoration:none}.cmp-card figure{margin:1rem 1rem 1rem 0.5rem}.cmp-card[data-variant=banner] figure{display:flex}.cmp-card[data-variant=banner] figcaption{margin-left:1rem}.cmp-card[data-variant=banner] figcaption h1,.cmp-card[data-variant=banner] figcaption h2,.cmp-card[data-variant=banner] figcaption h3,.cmp-card[data-variant=banner] figcaption h4,.cmp-card[data-variant=banner] figcaption h5,.cmp-card[data-variant=banner] figcaption h6{font-size:1.125rem}.cmp-card[data-variant=banner] figcaption h1,.cmp-card[data-variant=banner] figcaption h1~p,.cmp-card[data-variant=banner] figcaption h2,.cmp-card[data-variant=banner] figcaption h2~p,.cmp-card[data-variant=banner] figcaption h3,.cmp-card[data-variant=banner] figcaption h3~p,.cmp-card[data-variant=banner] figcaption h4,.cmp-card[data-variant=banner] figcaption h4~p,.cmp-card[data-variant=banner] figcaption h5,.cmp-card[data-variant=banner] figcaption h5~p,.cmp-card[data-variant=banner] figcaption h6,.cmp-card[data-variant=banner] figcaption h6~p{margin:0.125rem 0}.cmp-card[data-variant=banner] figcaption p{font-size:0.875rem;max-width:18.125rem}.cmp-card[data-variant=tile]{text-align:center}.cmp-card figcaption{max-width:60ch}.cmp-card{display:flex}');cov_1kt7lhnrhc().s[1]++;var DbCard=function(){function DbCard(hostRef){cov_1kt7lhnrhc().f[0]++,cov_1kt7lhnrhc().s[2]++,Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(this,hostRef),cov_1kt7lhnrhc().s[3]++,this.uiCoreIllustrationPath="./icons/illustration",cov_1kt7lhnrhc().s[4]++,this.variant="banner"}return DbCard.prototype.render=function render(){return cov_1kt7lhnrhc().f[1]++,cov_1kt7lhnrhc().s[5]++,Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("div",{class:"cmp-card","data-variant":this.variant},Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("figure",null,(cov_1kt7lhnrhc().b[0][0]++,this.illustration&&(cov_1kt7lhnrhc().b[0][1]++,Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64","aria-hidden":"true"},Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("use",{href:this.uiCoreIllustrationPath+"/db_ic_il_"+this.illustration+".svg#icon"})))),(cov_1kt7lhnrhc().b[1][0]++,!this.illustration&&(cov_1kt7lhnrhc().b[1][1]++,this.image)&&(cov_1kt7lhnrhc().b[1][2]++,Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("img",{src:this.image,height:"64",width:"64",alt:this.alt}))),Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("figcaption",null,(cov_1kt7lhnrhc().b[2][0]++,this.header&&(cov_1kt7lhnrhc().b[2][1]++,Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("h3",null,this.header))),(cov_1kt7lhnrhc().b[3][0]++,this.content&&(cov_1kt7lhnrhc().b[3][1]++,Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("p",null,this.content))),(cov_1kt7lhnrhc().b[4][0]++,!this.header&&(cov_1kt7lhnrhc().b[4][1]++,!this.content)&&(cov_1kt7lhnrhc().b[4][2]++,Object(_index_c3ea6b1c_js__WEBPACK_IMPORTED_MODULE_0__.f)("slot",null))))))},DbCard}();cov_1kt7lhnrhc().s[6]++,DbCard.style=dbCardCss}}]);