(function(){"use strict";var n={96334:function(n,t,e){var o=e(49963),r=(e(54415),e(49666));const i=[r.miu,r.lyj,r.nHx,r.EZB,r.rhU,r.UbY,r.p8k,r.Xb5,r.E27];function u(n){for(const t of i)n.component(t.name,t)}function a(n){n.use(u)}var c=e(9669),f=e.n(c);f().defaults.baseURL="http://httpbin.org",f().defaults.timeout=5e3,f().get("http://123.207.32.32:8000/home/multidata").then((n=>{console.log(n.data)})),f().interceptors.request.use((n=>n),(n=>(console.log("请求发生错误"),n))),f().interceptors.response.use((n=>(console.log("响应成功的拦截"),n)),(n=>(console.log("响应失败"),n)));var s=e(66252),l=e(3577);const d=(0,s.Uk)("登录"),p=(0,s.Uk)("首页");function v(n,t,e,o,r,i){const u=(0,s.up)("router-link"),a=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h2",null,(0,l.toDisplayString)(n.$store.state.name),1),(0,s.Wm)(u,{to:"/login"},{default:(0,s.w5)((()=>[d])),_:1}),(0,s.Wm)(u,{to:"/main"},{default:(0,s.w5)((()=>[p])),_:1}),(0,s.Wm)(a)])}var h=(0,s.aZ)({name:"App"}),m=e(83744);const g=(0,m.Z)(h,[["render",v]]);var b=g,y=e(42119);const k=[{path:"/",redirect:"/login"},{path:"/login",component:()=>e.e(658).then(e.bind(e,59658))},{path:"/main",component:()=>e.e(882).then(e.bind(e,67882))}],w=(0,y.p7)({routes:k,history:(0,y.r5)()});var j=w,O=e(33907);const _=(0,O.MT)({state:()=>({name:"登录页面"})});var E=_;const T=(0,o.ri)(b);T.use(a),T.use(j),T.use(E),T.mount("#app"),console.log("http://coding.org/prod"),console.log("james")}},t={};function e(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return n[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}e.m=n,function(){var n=[];e.O=function(t,o,r,i){if(!o){var u=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],i=n[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(e.O).every((function(n){return e.O[n](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){n.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[o,r,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,o){return e.f[o](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{658:"d70776a8",882:"56347beb"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="vue3-ts:";e.l=function(o,r,i,u){if(n[o])n[o].push(r);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",t+i),a.src=o),n[o]=[r];var d=function(t,e){a.onerror=a.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){e.p="/"}(),function(){var n={143:0};e.f.j=function(t,o){var r=e.o(n,t)?n[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(e,o){r=n[t]=[e,o]}));o.push(r[2]=i);var u=e.p+e.u(t),a=new Error,c=function(o){if(e.o(n,t)&&(r=n[t],0!==r&&(n[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};e.l(u,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,o){var r,i,u=o[0],a=o[1],c=o[2],f=0;if(u.some((function(t){return 0!==n[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(c)var s=c(e)}for(t&&t(o);f<u.length;f++)i=u[f],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(s)},o=self["webpackChunkvue3_ts"]=self["webpackChunkvue3_ts"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(96334)}));o=e.O(o)})();
//# sourceMappingURL=app.27066553.js.map