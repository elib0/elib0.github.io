(function(e){function t(t){for(var o,r,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-44c231f3":"1d3a7b0a"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-44c231f3":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-44c231f3":"a1d07ab3"}[e]+".css",a=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){l=p[i],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0f9d":function(e,t,n){},"13e3":function(e,t,n){},"15ca":function(e,t,n){"use strict";var o=n("d893"),r=n.n(o);r.a},1771:function(e,t,n){var o={"./logo-roma-min.png":"2219","./logo-roma.png":"dbc0","./logo.svg":"9b19","./unprofile.png":"e40b","./wall-colors.svg":"f56e"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="1771"},"1e24":function(e,t,n){},"21bb":function(e,t,n){"use strict";var o=n("0f9d"),r=n.n(o);r.a},2219:function(e,t,n){e.exports=n.p+"img/logo-roma-min.a402592f.png"},"5c0b":function(e,t,n){"use strict";var o=n("13e3"),r=n.n(o);r.a},"850c":function(e,t,n){"use strict";var o=n("1e24"),r=n.n(o);r.a},"9b19":function(e,t,n){e.exports=n.p+"img/logo.63a7d78d.svg"},adce:function(e){e.exports=JSON.parse('[{"title":"Organiza tu clase","route":{"name":"organizer"}},{"title":"Pautas y tablas","submenu":[{"title":"Crear tabla de especificaciones","route":"{}"},{"title":"Ver pautas y tablas","route":"{}"},{},{"title":"Especificaciones curriculares"},{"title":"Unidades","route":"{}"},{"title":"Ejes y objetivos de aprendizaje","route":"{}"},{"title":"Habilidades cognitivas","route":"{}"},{"title":"Habilidades de asignatura","route":"{}"}]},{"title":"Evaluaciones","submenu":[{"title":"Agendar evaluación","route":"{}"},{"title":"Calendario","route":"{}"},{"title":"Evaluaciones agendadas","route":"{}"},{"title":"Evaluaciones tomadas","route":"{}"},{},{"title":"Descarga de evaluaciones básicas"},{"title":"(A) - Evaluaciones DESEMPEÑO","route":"{}"}]},{"title":"Resultados","submenu":[{"title":"Resultados de establecimiento","route":"{}"},{"title":"Por evaluación","route":"{}"},{},{"title":"PME para Mineduc","route":"{}"},{"title":"Resultados de uso curso por evaluación","route":"{}"}]},{"title":"Encuestas","submenu":[{"title":"Crear pauta de encuestas","route":"{}"},{"title":"Pauta de encuestas","route":"{}"},{"title":"Encuestas agendadas","route":"{}"},{"title":"Encuestas realizadas","route":"{}"}]},{"title":"Administración","submenu":[{"title":"Establecimiento"},{"title":"Años académicos","route":"{}"},{"title":"Niveles y Asignaturas","route":"{}"},{"title":"Profesores","route":"{}"},{"title":"Cursos","route":"{}"},{},{"title":"Parámetros académicos"},{"title":"Tipos de evaluación","route":"{}"},{"title":"Necesidades educativas especiales (PIE)","route":"{}"},{"title":"Parámetros de evaluación","route":"{}"}]}]')},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view",{attrs:{name:"header"}}),n("v-content",[n("router-view")],1),n("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[n("v-btn",e._g({attrs:{fixed:"",fab:"",large:"",bottom:"",right:"",color:"green",href:e.whatsappPhone,target:"_blank"}},o),[n("v-icon",{attrs:{large:""}},[e._v("fab fa-whatsapp")])],1)]}}])},[n("span",[n("div",[e._v("¿QUIERES CONVERSAR CON NOSOTROS?")]),n("div",[e._v("Escríbenos "),n("strong",[e._v("¡Estamos disponibles!")])])])]),n("router-view",{attrs:{name:"footer"}})],1)},a=[],s=o["a"].extend({name:"App",data:function(){return{info:{phone:"56934580660"}}},computed:{whatsappPhone:function(){return"https://wa.me/"+this.info.phone}}}),i=s,c=(n("5c0b"),n("2877")),l=n("6544"),u=n.n(l),p=n("7496"),f=n("8336"),d=n("a75b"),v=n("132d"),m=n("3a2f"),g=Object(c["a"])(i,r,a,!1,null,null,null),b=g.exports;u()(g,{VApp:p["a"],VBtn:f["a"],VContent:d["a"],VIcon:v["a"],VTooltip:m["a"]});var h=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-page"},[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)},O=[],_=o["a"].extend({name:"HomePage",props:{},data:function(){return{}}}),j=_,w=(n("21bb"),n("a523")),P=Object(c["a"])(j,y,O,!1,null,null,null),C=P.exports;u()(P,{VContainer:w["a"]});var S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"roma-header"},[o("v-app-bar",{staticClass:"roma-header",attrs:{app:"",color:"grey lighten-2",elevation:"1"}},[o("div",{staticClass:"white v-toolbar__title d-none d-md-flex"},[o("router-link",{attrs:{to:{name:"home"}}},[o("img",{staticClass:"logo-image",attrs:{src:n("dbc0"),alt:"roma logo"}})])],1),o("div",[o("v-card",{staticClass:"d-inline-block pt-4 transparent",attrs:{flat:""}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-avatar",{staticClass:"d-none d-sm-inline-flex",attrs:{tile:""}},[o("v-avatar",e._g({directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"v-btn v-btn--outlined cursor-pointer"},e.menu),[o("v-img",{attrs:{src:n("1771")("./"+e.school.logo)}})],1)],1),o("v-list-item-content",[o("span",[e._v(e._s(e.school.id)+" - "+e._s(e.$vuetify.lang.t("$vuetify.generals.school"))+": "),o("strong",[e._v(e._s(e.school.name))])]),o("div",{staticClass:"overline mb-4"},[o("strong",[e._v("Año Académico:")]),e._v(" "+e._s(e.yearSelected))])])],1)],1)],1),o("v-spacer"),o("div",[o("v-menu",{attrs:{bottom:"","offset-y":"","close-on-content-click":!1,"max-width":"360"},scopedSlots:e._u([{key:"activator",fn:function(t){t.on;return[o("v-avatar",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"v-btn v-btn--outlined cursor-pointer",on:{click:function(t){t.stopPropagation(),e.openedMenu=!e.openedMenu}}},[o("v-img",{attrs:{src:n("e40b")}})],1),o("v-icon",{attrs:{small:""}},[e._v("fa-caret-down")])]}}]),model:{value:e.openedMenu,callback:function(t){e.openedMenu=t},expression:"openedMenu"}},[o("v-list",[o("v-subheader",[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.schoolOptions")))]),o("v-list-item",[o("v-list-item-title",[e._v("Año Académico: ")]),o("v-list-item-action",[o("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},"hide-details":"",dense:"",outlined:"",items:e.school.years},model:{value:e.yearSelected,callback:function(t){e.yearSelected=t},expression:"yearSelected"}})],1)],1),o("v-list-item",[o("v-list-item-title",[e._v("Cambiar Colegio:")]),o("v-list-item-action",[o("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},"hide-details":"","return-object":"","item-text":"name",dense:"",outlined:"",items:e.schools},on:{change:e.selectSchool},model:{value:e.school,callback:function(t){e.school=t},expression:"school"}})],1)],1),o("v-divider"),o("v-subheader",[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.userOptions")))]),e._l(e.menu,(function(t,n){return o("v-list-item",{key:n,on:{click:function(e){}}},[o("v-list-item-title",[e._v(e._s(t.title))])],1)}))],2)],1),o("v-btn",{staticClass:"d-none d-md-inline-flex",attrs:{text:""}},[e._v("\n          "+e._s(e.$vuetify.lang.t("$vuetify.generals.help"))+"\n          "),o("v-icon",{attrs:{large:"",color:"secondary"}},[e._v("far fa-question-circle")])],1)],1)],1),e.navigationMenu?o("v-toolbar",{staticClass:"navigation-menu",attrs:{dense:"",short:"",flat:""}},[o("v-toolbar-items",[e._l(e.navigation,(function(t){return[t.route?o("v-btn",{attrs:{text:"",to:t.route},domProps:{textContent:e._s(t.title)}}):o("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[o("v-btn",e._g({attrs:{text:""}},r),[e._v("\n                "+e._s(t.title)+"\n                "),o("v-icon",{attrs:{small:""}},[e._v("fa-caret-down")])],1)]}}],null,!0)},[o("v-list",[e._l(t.submenu,(function(t,n){return[t.title&&t.route?o("v-list-item",{key:n,attrs:{to:t.route}},[o("v-list-item-title",[e._v(e._s(t.title))])],1):t.title&&!t.route?o("div",[o("v-subheader",[e._v(e._s(t.title))])],1):t.title||t.route?e._e():o("v-divider")]}))],2)],1)]}))],2)],1):e._e()],1)},x=[],E=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),k=(n("6b54"),n("2f62")),D=n("adce");function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=o["a"].extend({name:"RomaHeader",props:{navigationMenu:{type:Boolean,default:!0}},data:function(){return{school:this.$store.state.selectedSchool,yearSelected:(new Date).getFullYear().toString(),openedMenu:!1,navigation:D}},computed:V({menu:function(){return[{title:this.$vuetify.lang.t("$vuetify.generals.profile"),route:{}},{title:this.$vuetify.lang.t("$vuetify.generals.changePassword"),route:{}},{title:this.$vuetify.lang.t("$vuetify.generals.help"),route:{}},{title:this.$vuetify.lang.t("$vuetify.generals.closeSession"),route:{}}]}},Object(k["b"])(["schools","user"])),methods:{selectSchool:function(){this.$store.commit("selectSchool",this.school),this.yearSelected=(new Date).getFullYear().toString()}}}),$=L,I=(n("15ca"),n("40dc")),T=n("8212"),M=n("b0af"),N=n("ce7e"),R=n("adda"),F=n("8860"),U=n("da13"),z=n("1800"),B=n("8270"),H=n("5d23"),Y=n("e449"),q=n("b974"),J=n("2fa4"),G=n("e0c7"),Z=n("71d9"),K=n("2a7f"),Q=n("269a"),W=n.n(Q),X=n("5607"),ee=Object(c["a"])($,S,x,!1,null,null,null),te=ee.exports;u()(ee,{VAppBar:I["a"],VAvatar:T["a"],VBtn:f["a"],VCard:M["a"],VDivider:N["a"],VIcon:v["a"],VImg:R["a"],VList:F["a"],VListItem:U["a"],VListItemAction:z["a"],VListItemAvatar:B["a"],VListItemContent:H["a"],VListItemTitle:H["b"],VMenu:Y["a"],VSelect:q["a"],VSpacer:J["a"],VSubheader:G["a"],VToolbar:Z["a"],VToolbarItems:K["a"]}),W()(ee,{Ripple:X["a"]});var ne=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"roma-footer"},[o("v-footer",{attrs:{color:"grey lighten-2"}},[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"3"}},[o("img",{staticClass:"logo-image",attrs:{src:n("dbc0"),alt:"roma logo"}})]),o("v-col",{staticClass:"justify-sm-center align-sm-center text-center text-sm-center text-md-left",attrs:{cols:"12",sm:"12",md:"5"}},[e._l(e.contacts,(function(t){return[t.url?o("a",{staticClass:"body-1 d-block mb-2",attrs:{href:t.url,target:"_blank"}},[o("v-icon",{attrs:{color:"black"}},[e._v("fa-"+e._s(t.icon))]),o("span",{staticClass:"ml-2",domProps:{innerHTML:e._s(t.text)}})],1):o("div",{staticClass:"mb-2"},[o("v-icon",{attrs:{color:"black"}},[e._v("fa-"+e._s(t.icon))]),o("span",{staticClass:"ml-2",domProps:{innerHTML:e._s(t.text)}})],1)]}))],2),o("v-col",{staticClass:"justify-sm-center align-sm-center text-center text-sm-center text-md-left",attrs:{cols:"12",sm:"12",md:"4"}},[o("div",[e._v("¡Nuestras Redes Sociales!")]),o("div",e._l(e.social,(function(t){return o("v-btn",{key:t.icon,staticClass:"mr-2",attrs:{icon:"",outlined:"",href:t.url,target:"_blank"}},[o("v-icon",{attrs:{color:"black"}},[e._v("fab fa-"+e._s(t.icon))])],1)})),1),o("div",{staticClass:"mt-3"},[o("span",{staticClass:"caption"},[o("strong",[e._v("cambiar idioma:")])]),o("v-select",{staticClass:"d-inline-block language-selector",attrs:{"menu-props":{top:!0,offsetY:!0},"hide-details":"","item-text":"title","item-value":"i18n",dense:"",outlined:"",flat:"",items:e.languages},on:{change:e.selectLanguage},scopedSlots:e._u([{key:"selection",fn:function(e){var t=e.item;e.index;return[o("v-avatar",{attrs:{size:"20px"}},[o("v-img",{attrs:{src:t.icon,alt:t.title}})],1)]}}]),model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1)])],1),o("v-row",[o("v-col",{staticClass:"text-center"},[e._v("\n          Desarrollado por: "),o("strong",[e._v("Alphas Technology")])])],1)],1)],1)],1)},oe=[];function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var se=o["a"].extend({name:"RomaFooter",props:{},data:function(){return{language:this.$store.state.selectedLanguage}},computed:ae({},Object(k["b"])({contacts:function(e){return[{icon:"phone-volume",text:"Teléfono SAC: ".concat(e.info.contact.sac)},{icon:"mobile",text:"Teléfono Mobil: ".concat(e.info.contact.phone)},{icon:"at",text:"Correo Electrónico: ".concat(e.info.contact.email),url:"mailto://".concat(e.info.contact.email)}]},social:function(e){return e.info.social},languages:function(e){return e.languages}})),methods:{selectLanguage:function(){this.$store.commit("selectLanguage",this.language)}}}),ie=se,ce=(n("850c"),n("62ad")),le=n("553a"),ue=n("0fd9"),pe=Object(c["a"])(ie,ne,oe,!1,null,null,null),fe=pe.exports;u()(pe,{VAvatar:T["a"],VBtn:f["a"],VCol:ce["a"],VContainer:w["a"],VFooter:le["a"],VIcon:v["a"],VImg:R["a"],VRow:ue["a"],VSelect:q["a"]}),o["a"].use(h["a"]);var de=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",components:{header:te,default:C,footer:fe},children:[{path:"/organizer",name:"organizer",component:function(){return n.e("chunk-44c231f3").then(n.bind(null,"3907"))}},{path:"/tables",name:"tables"},{path:"/evaluations",name:"evaluations"},{path:"/results",name:"/results"},{path:"/polls",name:"polls"},{path:"/administration",name:"administration"}]}]}),ve=(n("96cf"),n("3b8d")),me=n("bc3a"),ge=n.n(me),be=n("7f37"),he=n.n(be),ye=n("f309"),Oe=n("f950");function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var we=je({},Oe["a"],{generals:{accept:"Aceptar",cancel:"Cancelar",school:"Escuela",help:"Ayuda",userOptions:"Opciones de Usuario",schoolOptions:"Opciones del Colegio",profile:"Perfil",changePassword:"Cambiar contraseña",closeSession:"Cerrar Sesión",search:"Buscar"},component:{romaHeader:{},romaOrganizer:{title:'ORGANIZADOR <span class="font-weight-light">DIDÁCTICO DE UNIDAD</span> ',annualPlan:"Plan Anual",unit:"Unidad",subject:"Asignatura",course:"Curso",level:"Nivel",startDate:"Fecha Inicio",endDate:"Fecha Fin"},romaFooter:{}}}),Pe=n("4b41");function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=Se({},Pe["a"],{generals:{accept:"Accept",cancel:"Cancel",school:"School",help:"Help",userOptions:"User Options",schoolOptions:"School Options",profile:"Profile",changePassword:"Change Password",closeSession:"Close Session",search:"Search"},component:{romaHeader:{},romaOrganizer:{title:'<span class="font-weight-light">UNIT DIDACTIC</span> ORGANIZER',annualPlan:"Annual Plan",unit:"Unit",subject:"Subject",course:"Course",level:"Level",startDate:"Start Date",endDate:"End Date"},romaFooter:{}}});o["a"].use(ye["a"]);var Ee={primary:"#e97c21",secondary:"#378ccc",roma_rcolor:"#81007e",roma_acolor:"#f9d912",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},ke=new ye["a"]({theme:{options:{customProperties:!0},themes:{light:Ee}},lang:{locales:{es:we,en:xe},current:sessionStorage.roma?JSON.parse(sessionStorage.roma).selectedLanguage:"es"},icons:{iconfont:"fa"}});function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(n,!0).forEach((function(t){Object(E["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}o["a"].use(k["a"]);var Ve={baseURL:"https://reqres.in/api",timeout:15e3,responseType:"json"},Le=new k["a"].Store({state:{selectedLanguage:ke.preset.lang.current,selectedSchool:{id:2e3,name:"Roma Demo",logo:"logo.svg",years:["2018","2019"]},user:null,config:{},languages:[{title:"Español",i18n:"es",icon:"https://image.flaticon.com/icons/png/512/197/197593.png"},{title:"Ingles",i18n:"en",icon:"https://image.flaticon.com/icons/png/128/197/197484.png"}],schools:[{id:2e3,name:"Roma Demo",logo:"logo.svg",years:["2018","2019"]},{id:4856,name:"Ejemplo 2",logo:"logo.svg",years:["2019"]},{id:5178,name:"Ejemplo 3",logo:"logo.svg",years:["2017","2018","2019"]},{id:9874,name:"Ejemplo 4",logo:"logo.svg",years:["2016","2017","2018","2019"]},{id:1594,name:"Ejemplo 5",logo:"logo.svg",years:["2018","2019"]}],info:{contact:{phone:"+569 3458 0660",sac:"229293270",email:"sac@romacl.com",location:{lat:"10.2099343",lon:"-68.0119684,12z"}},social:[{icon:"instagram",url:"http://instagram.com/"},{icon:"facebook",url:"http://facebook.com/"},{icon:"youtube",url:"http://youtube.com/"}]}},getters:{},mutations:{login:function(e,t){e.user=t},selectLanguage:function(e,t){ke.framework.lang.current=t,e.selectedLanguage=t},selectSchool:function(e,t){e.selectedSchool=t}},actions:{login:function(){var e=Object(ve["a"])(regeneratorRuntime.mark((function e(t,n){var o,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,e.prev=1,r=Math.floor(9*Math.random())+1,e.next=5,ge()(Ae({},Ve,{url:"/users/"+r,method:"get",data:n}));case 5:a=e.sent,o("login",a.data.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t,n){return e.apply(this,arguments)}return t}()},plugins:[he()({keys:["selectedLanguage"],namespace:"roma",driver:he.a.drivers.localStorage})]});n("d5e8"),n("15f5");o["a"].config.productionTip=!1,new o["a"]({router:de,store:Le,vuetify:ke,render:function(e){return e(b)}}).$mount("#app")},d893:function(e,t,n){},dbc0:function(e,t,n){e.exports=n.p+"img/logo-roma.41b83d6b.png"},e40b:function(e,t,n){e.exports=n.p+"img/unprofile.ff971a12.png"},f56e:function(e,t,n){e.exports=n.p+"img/wall-colors.6d3e89d3.svg"}});
//# sourceMappingURL=app.e44bb9a4.js.map