(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);f&&f(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,s=1;s<o.length;s++){var l=o[s];0!==n[l]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},n={app:0},r=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"138e5931"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=n[t]=[e,a]}));e.push(o[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(t);var c=new Error;r=function(e){l.onerror=l.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,o[1](c)}n[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},"0113":function(t,e,o){"use strict";var a=o("9355"),n=o.n(a);n.a},"15ca":function(t,e,o){"use strict";var a=o("d893"),n=o.n(a);n.a},9355:function(t,e,o){},"9b19":function(t,e,o){t.exports=o.p+"img/logo.63a7d78d.svg"},cd49:function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("roma-header"),o("v-content",[o("router-view")],1),o("roma-footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{staticClass:"roma-header",attrs:{app:"",color:"grey lighten-2",elevation:"1"}},[a("div",{staticClass:"mr-4 white v-toolbar__title"},[a("img",{staticClass:"logo-image",attrs:{src:o("dbc0"),alt:"roma logo"}})]),a("div",[a("div",{staticClass:"d-inline-block ml-4"},[a("v-btn",{attrs:{outlined:"",icon:"",large:""}},[a("v-avatar",{attrs:{size:"32px",item:""}},[a("v-img",{attrs:{src:o("cf05")}})],1)],1),a("v-btn",{attrs:{text:""}},[t._v("Colegio "),a("strong",[t._v(t._s(t.school.name))])])],1)]),a("v-spacer"),a("div",[a("v-menu",{attrs:{bottom:"","offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mx-1",attrs:{icon:"",large:"",outlined:""}},o),[a("v-avatar",{attrs:{size:"32px",item:""}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/logo.svg"}})],1)],1)]}}]),model:{value:t.openedMenu,callback:function(e){t.openedMenu=e},expression:"openedMenu"}},[a("v-list",[a("v-subheader",[t._v("Opciones del Colegio")]),a("v-list-item",[a("v-list-item-title",[t._v("Año Académico: ")]),a("v-list-item-action",[a("v-select",{staticClass:"year-selector",attrs:{"menu-props":{bottom:!0,offsetY:!0},"hide-details":"",dense:"",solo:"",items:["2019"]},model:{value:t.yearSelected,callback:function(e){t.yearSelected=e},expression:"yearSelected"}})],1)],1),a("v-list-item",[a("v-list-item-title",[t._v("Cambiar Colegio:")]),a("v-list-item-action",[a("v-select",{staticClass:"year-selector",attrs:{"menu-props":{bottom:!0,offsetY:!0},"hide-details":"","item-text":"title",dense:"",solo:"",items:t.schoolList},model:{value:t.shchoolSelected,callback:function(e){t.shchoolSelected=e},expression:"shchoolSelected"}})],1)],1),a("v-divider"),a("v-subheader",[t._v("Opciones del Usuario")]),t._l(t.menu,(function(e,o){return a("v-list-item",{key:o,on:{click:function(t){}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)}))],2)],1),a("v-btn",{staticClass:"mr-4",attrs:{text:""}},[t._v("Ayuda "),a("v-icon",{attrs:{large:"",color:"secondary"}},[t._v("far fa-question-circle")])],1)],1)],1)},i=[],l=a["a"].extend({name:"RomaHeader",data:function(){return{yearSelected:"2019",shchoolSelected:"Colegio 1",school:{logo:"logo.png",name:"Roma Demo"},openedMenu:!1,schoolList:[{title:"Colegio 1"},{title:"Colegio 2"},{title:"Colegio 3"},{title:"Colegio 4"},{title:"Colegio 5"}],menu:[{title:"Perfil"},{title:"Cambiar contraseña"},{title:"Ayuda"},{title:"Cerrar Sesión"}]}}}),c=l,u=(o("15ca"),o("2877")),f=o("6544"),m=o.n(f),v=o("40dc"),d=o("8212"),p=o("8336"),h=o("ce7e"),g=o("132d"),b=o("adda"),y=o("8860"),x=o("da13"),_=o("1800"),C=o("5d23"),w=o("e449"),j=o("b974"),k=o("2fa4"),V=o("e0c7"),S=Object(u["a"])(c,s,i,!1,null,null,null),O=S.exports;m()(S,{VAppBar:v["a"],VAvatar:d["a"],VBtn:p["a"],VDivider:h["a"],VIcon:g["a"],VImg:b["a"],VList:y["a"],VListItem:x["a"],VListItemAction:_["a"],VListItemTitle:C["b"],VMenu:w["a"],VSelect:j["a"],VSpacer:k["a"],VSubheader:V["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"roma-footer"},[a("v-footer",{attrs:{color:"grey lighten-2",elevation:"1",padless:""}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{md:"3"}},[a("img",{staticClass:"logo-image",attrs:{src:o("dbc0"),alt:"roma logo"}})]),a("v-col",t._l(t.contacts,(function(e){return a("div",{key:e.icon,staticClass:"mb-2"},[a("v-icon",{attrs:{color:"black"}},[t._v("fa-"+t._s(e.icon))]),a("span",{staticClass:"ml-2",domProps:{innerHTML:t._s(e.text)}})],1)})),0),a("v-col",[a("div",[t._v("\n                        ¡Nuestras Redes sociales!\n                    ")]),a("div",t._l(t.social,(function(e){return a("v-btn",{key:e.icon,staticClass:"mr-2",attrs:{icon:"",outlined:""}},[a("v-icon",{attrs:{color:"black"}},[t._v("fab fa-"+t._s(e.icon))])],1)})),1)])],1),a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{md:"3"}}),a("v-col",{staticClass:"text-center"},[t._v("\n                    Desarrollado por: "),a("strong",[t._v("Alphas Technology")])])],1)],1)],1)],1)},L=[],F=a["a"].extend({name:"RomaHeader",props:{info:{default:{phone:"+569 3458 0660",sac:"229293270",email:"sac@romacl.com",location:{lat:"",lon:""}},type:Object}},data:function(){return{selectedLanguage:{title:"Español",short:"es",icon:"https://image.flaticon.com/icons/png/512/197/197593.png"},languages:[{title:"Español",short:"es",icon:"https://image.flaticon.com/icons/png/512/197/197593.png"}],contacts:[{icon:"phone-volume",text:"Teléfono: - SAC: "},{icon:"at",text:"Correo electrónico:"},{icon:"map-marked-alt",text:"Ver Ubicación"}],social:[{icon:"instagram",url:""},{icon:"facebook",url:""},{icon:"youtube",url:""},{icon:"twitter",url:""}]}}}),E=F,P=(o("0113"),o("62ad")),M=o("a523"),T=o("553a"),I=o("0fd9"),R=Object(u["a"])(E,A,L,!1,null,"3b8d323c",null),$=R.exports;m()(R,{VBtn:p["a"],VCol:P["a"],VContainer:M["a"],VFooter:T["a"],VIcon:g["a"],VRow:I["a"]});var q=a["a"].extend({name:"App",data:function(){return{}},components:{RomaHeader:O,RomaFooter:$}}),D=q,H=o("7496"),B=o("a75b"),N=Object(u["a"])(D,n,r,!1,null,null,null),W=N.exports;m()(N,{VApp:H["a"],VContent:B["a"]});var z=o("8c4f"),J=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},U=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"text-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-img",{staticClass:"my-3",attrs:{src:o("9b19"),contain:"",height:"200"}})],1),a("v-flex",{attrs:{"mb-4":""}},[a("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),a("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),a("br"),t._v("please join our online\n        "),a("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),a("v-flex",{attrs:{"mb-5":"",xs12:""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),a("v-flex",{attrs:{xs12:"","mb-5":""}},[a("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),a("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,o){return a("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},Q=[],G=a["a"].extend({data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),K=G,X=o("0e8f"),Z=o("a722"),tt=Object(u["a"])(K,Y,Q,!1,null,null,null),et=tt.exports;m()(tt,{VContainer:M["a"],VFlex:X["a"],VImg:b["a"],VLayout:Z["a"]});var ot=a["a"].extend({components:{HelloWorld:et}}),at=ot,nt=Object(u["a"])(at,J,U,!1,null,null,null),rt=nt.exports;a["a"].use(z["a"]);var st=new z["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),it=o("2f62");a["a"].use(it["a"]);var lt=new it["a"].Store({state:{},mutations:{},actions:{}}),ct=o("f309"),ut=o("f950");a["a"].use(ct["a"]);var ft={primary:"#e97c21",secondary:"#378ccc",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},mt=new ct["a"]({theme:{options:{customProperties:!0},themes:{light:ft}},lang:{locales:{es:ut["a"]},current:"es"},icons:{iconfont:"fa"}});o("d5e8"),o("15f5");a["a"].config.productionTip=!1,new a["a"]({router:st,store:lt,vuetify:mt,render:function(t){return t(W)}}).$mount("#app")},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},d893:function(t,e,o){},dbc0:function(t,e,o){t.exports=o.p+"img/logo-roma.41b83d6b.png"}});
//# sourceMappingURL=app.2f7fd8a9.js.map