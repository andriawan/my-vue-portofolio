(function(t){function e(e){for(var r,s,c=e[0],i=e[1],o=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&d.push(l[s][0]),l[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==l[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},l={app:0},a=[];function s(t){return c.p+"js/andriawan-and-calc."+({about:"about"}[t]||t)+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=l[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=l[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(t);var o=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(u);var n=l[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}l[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/and-calc/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var f=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-600",attrs:{id:"app"}},[n("Home")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:container md:mx-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-screen"},[n("div",{staticClass:"h-full md:py-6 lg:py-6 xl:py-6"},[n("div",{staticClass:"rounded shadow-lg h-full md:h-auto bg-white px-2 py-2"},[n("div",{staticClass:"flex flex-col h-full"},[n("Screen",{staticClass:"h-64 md:h-auto"}),n("Key",{staticClass:"h-full"})],1)])])])},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{staticClass:"appearance-none h-full text-right text-5xl md:text-4xl bg-black text-green-400 border rounded w-full py-2 px-3 md:h-20 text-gray-700 leading-tight focus:outline-none",attrs:{id:"screen",type:"text",placeholder:"0"},domProps:{value:t.display}})])},o=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),f=n("2f62");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={computed:h({},Object(f["c"])({display:function(t){return t.final_display}}))},p=b,v=n("2877"),_=Object(v["a"])(p,i,o,!1,null,null,null),g=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"text-gray-700 h-full text-center"},[n("div",{staticClass:"flex h-full"},[n("div",{staticClass:"w-1/4 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold",class:t.active_arithmetic_state("multi"),on:{click:function(e){return t.change_op_state("multi")}}},[t._v("X")])]),n("div",{staticClass:"w-1/4 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold",class:t.active_arithmetic_state("divi"),on:{click:function(e){return t.change_op_state("divi")}}},[t._v("/")])]),n("div",{staticClass:"w-1/4 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold",class:t.active_arithmetic_state("add"),on:{click:function(e){return t.change_op_state("add")}}},[t._v("+")])]),n("div",{staticClass:"w-1/4 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold",class:t.active_arithmetic_state("subtract"),on:{click:function(e){return t.change_op_state("subtract")}}},[t._v("-")])])])]),n("div",{staticClass:"text-gray-700 h-full"},[n("div",{staticClass:"flex h-full"},[n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(1)}}},[t._v("1")])]),n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(2)}}},[t._v("2")])]),n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(3)}}},[t._v("3")])])])]),n("div",{staticClass:"text-gray-700 h-full"},[n("div",{staticClass:"flex h-full"},[n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(4)}}},[t._v("4")])]),n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(5)}}},[t._v("5")])]),n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(6)}}},[t._v("6")])])])]),n("div",{staticClass:"text-gray-700 h-full"},[n("div",{staticClass:"flex h-full"},[n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(7)}}},[t._v("7")])]),n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(8)}}},[t._v("8")])]),n("div",{staticClass:"w-1/3 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(9)}}},[t._v("9")])])])]),n("div",{staticClass:"text-gray-700 h-full"},[n("div",{staticClass:"flex h-full"},[n("div",{staticClass:"w-full text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-green-500 hover:bg-green-400 text-white font-bold",on:{click:function(e){return t.set_screen(0)}}},[t._v("0")])])])]),n("div",{staticClass:"text-gray-700 h-full"},[n("div",{staticClass:"flex h-full"},[n("div",{staticClass:"w-1/2 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-blue-500 hover:bg-blue-400 text-white font-bold",on:{click:t.set_result}},[t._v("=")])]),n("div",{staticClass:"w-1/2 text-center"},[n("button",{staticClass:"w-full h-full md:h-16 text-4xl bg-red-600 hover:bg-red-400 text-white font-bold",on:{click:t.clear_screen}},[t._v("C")])])])])])},m=[];function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){Object(u["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y,O={methods:C({active_arithmetic_state:function(t){if(this.operation_state==t)return{"bg-blue-700":!0}}},Object(f["b"])({change_op_state:"change_op_state",clear_screen:"clear_screen",set_screen:"set_screen",set_result:"set_result"})),computed:C({},Object(f["c"])({operation_state:function(t){return t.active_arithmetic_state}}))},E=O,j=Object(v["a"])(E,x,m,!1,null,null,null),S=j.exports,P={name:"home",components:{Screen:g,Key:S}},T=P,k=Object(v["a"])(T,s,c,!1,null,null,null),R=k.exports,A={components:{Home:R}},N=A,L=Object(v["a"])(N,l,a,!1,null,null,null),D=L.exports,$={OPERATION_STATE:"OPERATION_STATE",CLEAR_SCREEN:"CLEAR_SCREEN",SET_SCREEN:"SET_SCREEN",SET_RESULT:"SET_RESULT"};r["a"].use(f["a"]);var F=new f["a"].Store({state:{version:"0.1",app_name:"Andriawan Projects",author:"Andriawan",final_display:"0",temp_data:"",result:"",active_arithmetic_state:"init"},mutations:(y={},Object(u["a"])(y,$.OPERATION_STATE,(function(t,e){t.active_arithmetic_state=e,""!==t.result&&(t.temp_data=parseFloat(t.result),t.result="")})),Object(u["a"])(y,$.SET_RESULT,(function(t){if(null!=t.result){switch(t.active_arithmetic_state){case"multi":t.result=t.result*t.temp_data;break;case"divi":t.result=t.temp_data/t.result;break;case"add":t.result=t.temp_data+parseFloat(t.result);break;case"subtract":t.result=t.temp_data-parseFloat(t.result);break;default:t.result=""}t.final_display=t.result,t.temp_data=parseFloat(t.result),t.result="",t.active_arithmetic_state="init"}})),Object(u["a"])(y,$.CLEAR_SCREEN,(function(t){t.final_display="0",t.temp_data=0,t.result="",t.active_arithmetic_state="init"})),Object(u["a"])(y,$.SET_SCREEN,(function(t,e){t.result=t.result+e,t.final_display=t.result})),y),actions:{change_op_state:function(t,e){var n=t.commit;n($.OPERATION_STATE,e)},clear_screen:function(t){var e=t.commit;e($.CLEAR_SCREEN)},set_screen:function(t,e){var n=t.commit;n($.SET_SCREEN,e)},set_result:function(t){var e=t.commit;e($.SET_RESULT)}}}),I=n("8c4f");r["a"].use(I["a"]);var M=new I["a"]({mode:"history",base:"/and-calc/",routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("def6");r["a"].config.productionTip=!1,new r["a"]({store:F,router:M,render:function(t){return t(D)}}).$mount("#app")},def6:function(t,e,n){}});
//# sourceMappingURL=andriawan-and-calc.app.js.map