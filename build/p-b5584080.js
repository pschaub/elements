const x=()=>{try{return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(x=>(x^crypto.getRandomValues(new Uint8Array(1))[0]&15>>x/4).toString(16)))}catch(x){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(x){const r=16*Math.random()|0;return("x"==x?r:3&r|8).toString(16)}))}},r=x=>x?x.map((x=>`<li><db-link href="${x.href}" target="${x.target}">${x.label}</db-link></li>`)).join("\n"):"",t=(x,r)=>{x.children&&Array.from(x.children).forEach((x=>{"db-link"===x.tagName.toLowerCase()&&x.setAttribute("icon-variant",r),x.children&&t(x,r)}))},n=x=>{try{if("string"==typeof x)return JSON.parse(x);if("object"==typeof x)return x;if(x instanceof Array)return x}catch(x){return!1}};export{t as a,r as g,n as p,x as u}