(()=>{"use strict";var e,b={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={exports:{}};return b[e](t,t.exports,r),t.exports}r.m=b,e=[],r.O=(n,t,i,u)=>{if(!t){var a=1/0;for(o=0;o<e.length;o++){for(var[t,i,u]=e[o],d=!0,l=0;l<t.length;l++)(!1&u||a>=u)&&Object.keys(r.O).every(v=>r.O[v](t[l]))?t.splice(l--,1):(d=!1,u<a&&(a=u));if(d){e.splice(o--,1);var s=i();void 0!==s&&(n=s)}}return n}u=u||0;for(var o=e.length;o>0&&e[o-1][2]>u;o--)e[o]=e[o-1];e[o]=[t,i,u]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+".js",r.miniCssF=e=>"styles.css",r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="angular-showcase:";r.l=(t,i,u,o)=>{if(e[t])e[t].push(i);else{var a,d;if(void 0!==u)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==n+u){a=f;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+u),a.src=r.tu(t)),e[t]=[i];var c=(m,v)=>{a.onerror=a.onload=null,clearTimeout(p);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(v)),m)return m(v)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tu=n=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e.createScriptURL(n))})(),r.p="",(()=>{var e={666:0};r.f.j=(i,u)=>{var o=r.o(e,i)?e[i]:void 0;if(0!==o)if(o)u.push(o[2]);else if(666!=i){var a=new Promise((f,c)=>o=e[i]=[f,c]);u.push(o[2]=a);var d=r.p+r.u(i),l=new Error;r.l(d,f=>{if(r.o(e,i)&&(0!==(o=e[i])&&(e[i]=void 0),o)){var c=f&&("load"===f.type?"missing":f.type),p=f&&f.target&&f.target.src;l.message="Loading chunk "+i+" failed.\n("+c+": "+p+")",l.name="ChunkLoadError",l.type=c,l.request=p,o[1](l)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var n=(i,u)=>{var l,s,[o,a,d]=u,f=0;for(l in a)r.o(a,l)&&(r.m[l]=a[l]);if(d)var c=d(r);for(i&&i(u);f<o.length;f++)r.o(e,s=o[f])&&e[s]&&e[s][0](),e[o[f]]=0;return r.O(c)},t=self.webpackChunkangular_showcase=self.webpackChunkangular_showcase||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();