(function(t){function e(e){for(var r,i,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return c.p+"js/andriawan."+({about:"about"}[t]||t)+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var l=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("58ca"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("ProjectList")],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"flex items-center justify-between bg-blue-500 p-3"},[n("div",{staticClass:"flex items-center flex-shrink-0 text-white mr-6"},[n("atom-spinner",{attrs:{"animation-duration":1e3,size:40,color:"#ffff"}}),n("span",{staticClass:"font-semibold text-xl pl-2 tracking-tight"},[t._v(t._s(t.app_name))])],1)])},u=[],p=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),f=n("2f62"),m=n("4583");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={components:{AtomSpinner:m["a"]},data:function(){return{}},computed:h({},Object(f["b"])({app_name:"app_name"}))},g=b,v=n("2877"),w=Object(v["a"])(g,l,u,!1,null,null,null),_=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap mx-auto p-3 sm:p-8"},t._l(t.list_portofolio,(function(e,r){return n("div",{key:r,staticClass:"w-full lg:w-1/4 xl:w-1/5 md:w-1/3 px-3 py-3"},[n("div",{staticClass:"rounded overflow-hidden shadow hover:shadow-lg border-box"},[n("div",{staticClass:"relative h-64 sm:h-48"},[n("div",{staticClass:"absolute flex items-center w-full h-full bg-gray-600"},[n("div",{staticClass:"flex-1 text-center w-1"},[n("div",[n("half-circle-spinner",{staticClass:"inline-block",attrs:{"animation-duration":1e3,size:30,color:"#ffff"}})],1)]),n("img",{staticClass:"w-full h-full object-contain absolute",attrs:{src:t.logo_project+e.name+".png",alt:e.name},on:{error:t.alternative_img}})])]),n("div",{staticClass:"text-sm sm:text-md mt-3 pr-3 pl-3"},[t._v("Project Name : "+t._s(e.name))]),n("div",{staticClass:"px-3"},[n("a",{attrs:{href:""+t.base_url+e.name}},[n("button",{staticClass:"w-full bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 rounded mt-3 mb-3 border-box"},[t._v("Open project")])])])])])})),0)},y=[],O=(n("7f7f"),n("6762"),n("2fdb"),n("96cf"),n("3b8d")),x={methods:{get_app_setting:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}},P=x;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(p["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var A={mixins:[P],components:{HalfCircleSpinner:m["b"]},data:function(){return{list_portofolio:[],local_env:"prod"}},methods:{generate_sample_data:function(){for(var t=0;t<100;t++)this.list_portofolio.push({name:"name"+t})},get_folder_project:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.get_app_setting(this.my_setting);case 3:return e=t.sent,t.next=6,this.get_all_folder_project();case 6:return n=t.sent,r=this.filter_folder_project(n,e),t.abrupt("return",r);case 11:t.prev=11,t.t0=t["catch"](0),window.alert(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(){return t.apply(this,arguments)}return e}(),get_all_folder_project:function(){var t=Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url_home);case 2:return t.abrupt("return",t.sent.json());case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),filter_folder_project:function(t,e){return t.filter((function(t){return"dir"==t.type&&!e.excluded_folder.includes(t.name)}))},alternative_img:function(t){t.target.src=this.vue_logo,t.target.classList.remove("object-contain"),t.target.classList.add("object-cover")}},mounted:function(){var t=this;"prod"==this.local_env?this.get_folder_project().then((function(e){t.list_portofolio=e})):this.generate_sample_data()},computed:k({},Object(f["b"])({url_home:"url_home_portofolio",base_url:"base_url",vue_logo:"vue_logo",logo_project:"logo_project_url",my_setting:"my_setting"}))},S=A,E=Object(v["a"])(S,j,y,!1,null,null,null),D=E.exports,L={name:"home",components:{Navbar:_,ProjectList:D}},R=L,V=Object(v["a"])(R,c,s,!1,null,null,null),T=V.exports,$={title:"Andriawan Vue Collection",meta:[{name:"description",content:"All collection of andriawan vue personal projects"},{name:"keywords",content:"vue,andriawan,personal projects"},{property:"og:title",content:"Andriawan Vue Collection"},{property:"og:site_name",content:"Andriawan Vue Collection"},{property:"og:type",content:"website"},{property:"og:url",content:"https://vue.andriawan.com"},{property:"og:image",content:"https://cdn2.auth0.com/blog/vuejs/logo.png"},{property:"og:description",content:"All collection of andriawan vue personal projects."},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"https://vue.andriawan.com"},{name:"twitter:title",content:"Andriawan Vue Collection"},{name:"twitter:description",content:"All collection of andriawan vue personal projects."},{name:"twitter:creator",content:"@irwan2andriawan"},{name:"twitter:image:src",content:"https://cdn2.auth0.com/blog/vuejs/logo.png"},{itemprop:"name",content:"Andriawan Vue Collection"},{itemprop:"description",content:"All collection of andriawan vue personal projects."},{itemprop:"image",content:"https://cdn2.auth0.com/blog/vuejs/logo.png"}]},M={components:{Home:T},metaInfo:$},H=M,N=Object(v["a"])(H,a,i,!1,null,null,null),z=N.exports;r["a"].use(f["a"]);var J=new f["a"].Store({state:{version:"0.1",app_name:"Andriawan Vue Collection",author:"Andriawan",vue_logo:"https://cdn2.auth0.com/blog/vuejs/logo.png",logo_project_url:"https://raw.githubusercontent.com/andriawan/my-vue-portofolio/master/assets/icon/",base_url:"https://vue.andriawan.com/",my_setting:"https://raw.githubusercontent.com/andriawan/my-vue-portofolio/master/docs/my_setting.json",url_home_portofolio:"https://api.github.com/repos/andriawan/my-vue-portofolio/contents/docs"},mutations:{},actions:{}}),q=n("8c4f");r["a"].use(q["a"]);var I=new q["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("def6");r["a"].config.productionTip=!1,r["a"].use(o["a"]),new r["a"]({store:J,router:I,render:function(t){return t(z)}}).$mount("#app")},def6:function(t,e,n){}});
//# sourceMappingURL=andriawan.app.js.map