(()=>{"use strict";var e,v={},m={};function a(e){var t=m[e];if(void 0!==t)return t.exports;var d=m[e]={exports:{}};return v[e](d,d.exports,a),d.exports}a.m=v,e=[],a.O=(t,d,c,n)=>{if(!d){var r=1/0;for(f=0;f<e.length;f++){for(var[d,c,n]=e[f],u=!0,b=0;b<d.length;b++)(!1&n||r>=n)&&Object.keys(a.O).every(p=>a.O[p](d[b]))?d.splice(b--,1):(u=!1,n<r&&(r=n));if(u){e.splice(f--,1);var o=c();void 0!==o&&(t=o)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[d,c,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var d in t)a.o(t,d)&&!a.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((t,d)=>(a.f[d](e,t),t),[])),a.u=e=>(8592===e?"common":e)+"."+{58:"c7bfc6fdaf59a5aa",97:"09a03101cba622ef",176:"15b26eac0ed79c8c",464:"a75b34daaddd571a",1075:"e8d89ecf63a1d63c",1268:"ac56c49ab20ed066",1302:"369a19b17d552346",1519:"269abf59e0559f8f",1575:"e6a802f89d4c7190",1666:"cc22547f7a427ac7",1705:"ee55456e3a3f0dc9",1739:"2b4486b202fa7fe0",1874:"ee583fc553e79d96",2091:"e9450d079a15e9ae",2145:"4a8fea2ea14f8b26",2650:"7b30111bd1ae38f8",3041:"e569518ae6d6aeaf",3173:"07f9fe0d34f820cc",3598:"41e1ee188fd83bbc",4033:"25713296f26aaf08",4036:"28b67a41179b2cca",4132:"80c3780e174d17c6",4225:"e1b895ce430c9b71",4746:"2d34f0b48900e372",4956:"9f00aad79f0c95a9",4989:"6b18cec546e6f476",4998:"7023b9f07fe5aeb7",5013:"293f991ac8a3e372",5171:"233c741a6380dc9b",5315:"67c0360e43c0a942",5652:"55be6753d3d81ef3",5785:"fbcac419cf0614ed",6031:"e3af69d962f73f45",6056:"10704fd7e5d7d4d3",6208:"99398a450df39cb8",6526:"8efc7d42cb189327",6630:"939c352b5a58b856",6725:"6da4da1dc76d1b53",6818:"b5217a6b17f7189a",7010:"129691d33ca97f3c",7481:"0fee1dbc944c9498",7895:"5ac60a50c2b6cd37",8104:"7e1c7a9483f51c25",8205:"437691f5b13fb5bc",8276:"876d03f0e5901ae2",8356:"666ed51b1319f8f6",8592:"d6f49886c0519106",8761:"76d27ae9bdbcc557",8786:"db50083a277f1592",8878:"032866af041ab173",8952:"d900f092c8d57ad0",9685:"07479b1bba172308",9707:"938f644183ecb20d",9761:"f3d678a24ee5ff9a",9892:"42c03954040f897d"}[e]+".js",a.miniCssF=e=>{},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="sakai-ng:";a.l=(d,c,n,f)=>{if(e[d])e[d].push(c);else{var r,u;if(void 0!==n)for(var b=document.getElementsByTagName("script"),o=0;o<b.length;o++){var i=b[o];if(i.getAttribute("src")==d||i.getAttribute("data-webpack")==t+n){r=i;break}}r||(u=!0,(r=document.createElement("script")).type="module",r.charset="utf-8",r.timeout=120,a.nc&&r.setAttribute("nonce",a.nc),r.setAttribute("data-webpack",t+n),r.src=a.tu(d)),e[d]=[c];var l=(g,p)=>{r.onerror=r.onload=null,clearTimeout(s);var _=e[d];if(delete e[d],r.parentNode&&r.parentNode.removeChild(r),_&&_.forEach(h=>h(p)),g)return g(p)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),u&&document.head.appendChild(r)}}})(),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),a.tu=e=>a.tt().createScriptURL(e),a.p="",(()=>{var e={3666:0};a.f.j=(c,n)=>{var f=a.o(e,c)?e[c]:void 0;if(0!==f)if(f)n.push(f[2]);else if(3666!=c){var r=new Promise((i,l)=>f=e[c]=[i,l]);n.push(f[2]=r);var u=a.p+a.u(c),b=new Error;a.l(u,i=>{if(a.o(e,c)&&(0!==(f=e[c])&&(e[c]=void 0),f)){var l=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;b.message="Loading chunk "+c+" failed.\n("+l+": "+s+")",b.name="ChunkLoadError",b.type=l,b.request=s,f[1](b)}},"chunk-"+c,c)}else e[c]=0},a.O.j=c=>0===e[c];var t=(c,n)=>{var b,o,[f,r,u]=n,i=0;if(f.some(s=>0!==e[s])){for(b in r)a.o(r,b)&&(a.m[b]=r[b]);if(u)var l=u(a)}for(c&&c(n);i<f.length;i++)a.o(e,o=f[i])&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},d=self.webpackChunksakai_ng=self.webpackChunksakai_ng||[];d.forEach(t.bind(null,0)),d.push=t.bind(null,d.push.bind(d))})()})();