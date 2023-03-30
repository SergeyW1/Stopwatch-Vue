(function(){"use strict";var e={8860:function(e,n,t){var a=t(9963),i=t(6252),l=(t(7658),t(3577)),u=t(2262);const v=e=>((0,i.dD)("data-v-f05aa7fc"),e=e(),(0,i.Cn)(),e),r={key:0},o=v((()=>(0,i._)("span",null,":",-1))),c={key:1},s=v((()=>(0,i._)("span",null,":",-1))),d={class:"btns-container"},f=v((()=>(0,i._)("svg",{width:"17",height:"20",viewBox:"0 0 17 20",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M0 20V0L17 10L0 20Z"})],-1))),w=[f],h=v((()=>(0,i._)("svg",{width:"10",height:"20",viewBox:"0 0 10 20",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("rect",{x:"7",width:"3",height:"20"}),(0,i._)("rect",{width:"3",height:"20"})],-1))),p=[h],_=v((()=>(0,i._)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("rect",{width:"20",height:"20"})],-1))),g=[_];var b={__name:"TimerItem",setup(e){const n=(0,u.iH)(59),t=(0,u.iH)(59),a=(0,u.iH)(12),v=(0,u.iH)(null),f=(0,u.iH)(!1);function h(){f.value=!0,v.value=setInterval((()=>{n.value>58&&(n.value=0,t.value++,t.value>59&&(t.value=0,a.value++)),n.value++}),1e3)}function _(){f.value=!1,clearInterval(v.value)}function b(){f.value=!1,clearInterval(v.value),n.value=0,t.value=0,a.value=0}return(e,u)=>((0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",{class:(0,l.C_)(["timer-display",{active:f.value}])},[a.value>0?((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("span",null,(0,l.zw)(a.value),1),o])):(0,i.kq)("",!0),t.value>0||a.value>0?((0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("span",null,(0,l.zw)(t.value),1),s])):(0,i.kq)("",!0),(0,i._)("div",null,[(0,i._)("span",null,(0,l.zw)(n.value),1)])],2),(0,i._)("div",d,[f.value?((0,i.wg)(),(0,i.iD)("div",{key:1,class:(0,l.C_)(["btn",{"active-btn":f.value}]),onClick:_},p,2)):((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,l.C_)(["btn",{"active-btn":f.value}]),onClick:h},w,2)),(0,i._)("div",{class:(0,l.C_)(["btn",{"active-btn":f.value}]),onClick:b},g,2)])],64))}},m=t(3744);const k=(0,m.Z)(b,[["__scopeId","data-v-f05aa7fc"]]);var y=k;const x={class:"container"},C={class:"timers"};var O={__name:"TimerItems",setup(e){const n=(0,u.iH)(0),t=(0,u.iH)([{id:n.value++},{id:n.value++},{id:n.value++},{id:n.value++}]),a=()=>{t.value.push({id:n.value++})};return(e,n)=>((0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("div",C,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.value,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"rectangle",key:e},[(0,i.Wm)(y)])))),128)),(0,i._)("div",{class:"rectangle"},[(0,i._)("div",{onClick:a,class:"addBtn"})])])]))}};const D=(0,m.Z)(O,[["__scopeId","data-v-112e12c9"]]);var H=D;const I={class:"app"};var j={__name:"App",setup(e){return(e,n)=>((0,i.wg)(),(0,i.iD)("div",I,[(0,i.Wm)(H)]))}};const B=j;var T=B;(0,a.ri)(T).mount("#app")}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var l=n[a]={exports:{}};return e[a](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,a,i,l){if(!a){var u=1/0;for(c=0;c<e.length;c++){a=e[c][0],i=e[c][1],l=e[c][2];for(var v=!0,r=0;r<a.length;r++)(!1&l||u>=l)&&Object.keys(t.O).every((function(e){return t.O[e](a[r])}))?a.splice(r--,1):(v=!1,l<u&&(u=l));if(v){e.splice(c--,1);var o=i();void 0!==o&&(n=o)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,i,l]}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var i,l,u=a[0],v=a[1],r=a[2],o=0;if(u.some((function(n){return 0!==e[n]}))){for(i in v)t.o(v,i)&&(t.m[i]=v[i]);if(r)var c=r(t)}for(n&&n(a);o<u.length;o++)l=u[o],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},a=self["webpackChunkstopwatch_vue"]=self["webpackChunkstopwatch_vue"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(8860)}));a=t.O(a)})();
//# sourceMappingURL=app.4d0ecc51.js.map