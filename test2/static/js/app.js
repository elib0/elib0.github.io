webpackJsonp([1],{"/626":function(e,t){},"6nfk":function(e,t){},"90VL":function(e,t){},EqHB:function(e,t,n){"use strict";var r=n("n6yH"),a=n.n(r),s=n("XRIO"),o=n("VU/8")(a.a,s.a,!1,null,null,null);t.default=o.exports},FbEL:function(e,t){},"HNa/":function(e,t){},"N+IJ":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},name:"App",components:{VClock:n("EqHB").default}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("v-content",[t("div",{staticClass:"clock-block"},[t("v-clock",{attrs:{blink:!0}})],1),this._v(" "),t("router-view")],1),this._v(" "),t("v-footer",{attrs:{fixed:this.fixed,app:""}},[t("span",[this._v("Sistema de registro de compresores ROY C.A © 2018 ")])])],1)},staticRenderFns:[]},o=n("VU/8")(a,s,!1,null,null,null).exports,i=n("/ocq"),l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[r("section",{staticClass:"home-page"},[r("div",{staticClass:"text-xs-center"},[r("h1",[e._v("Sistema de control de compresores")]),e._v(" "),r("img",{attrs:{src:n("iQH9"),alt:"logo",width:"300px"}})]),e._v(" "),r("div",{staticClass:"menu"},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-btn",{staticClass:"black",attrs:{fab:"",large:"",to:{name:"Register"},dark:""}},[r("v-icon",[e._v("note_add")])],1)],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-btn",{staticClass:"black",attrs:{fab:"",large:"",to:{name:"List"},dark:""}},[r("v-icon",[e._v("find_in_page")])],1)],1),e._v(" "),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-btn",{staticClass:"black",attrs:{fab:"",to:{name:"Chart"},dark:""}},[r("v-icon",[e._v("show_chart")])],1)],1)],1)],1)])])],1)},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{}}},l,!1,function(e){n("Z90s")},"data-v-5143befa",null).exports;function u(e){return[function(t){return!!t||e}]}var d=[function(e){return e&&e.length>4||"El correo electrónico debe contener al menos 5 caracteres"},function(e){return e&&e.length<=80||"El correo electrónico debe contener un máximo de 80 caracteres"},function(e){return/[^@]+@.+\.\w{2,4}$/.test(e)||"El correo electrónico debe ser valido"}];var v=[function(e){return!!e||"La Cédula de identidad es obligatoria"},function(e){return/^[0-9]*$/.test(e)||"La cédula de identidad solo puede contener numeros"},function(e){return e&&e.length>3||"La Cédula de identidad debe contener al menos 4 caracteres"},function(e){return e&&e.length<=22||"La Cédula de identidad debe contener menos de 22 caracteres"}],p=[function(e){return!!e||"El Nombre es obligatorio"},function(e){return e&&e.length>3||"El Nombre debe contener al menos 4 caracteres"},function(e){return e&&e.length<=60||"El Nombre debe contener menos de 60 caracteres"},function(e){return/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]*\s+[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(e)||"Debes introducir al menos un apellido"}],m=[function(e){return!!e||"El numero de teléfono es obligatorio"},function(e){return/^[0-9-+]*$/.test(e)||"El numero de teléfono debe contener numeros, guiones o signo mas(+)"}],f=n("DDBM"),_=n.n(f),b=n("/yi5"),h=n.n(b),x=n("0TZ1"),k={data:function(){return{RequiredRules:u,EmailRules:d,IdentificationRules:v,FullNameRules:p,PhoneRules:m,loading:!1,valid:!1,productTypes:[{label:"Compresor",value:"c"},{label:"Valvula",value:"v"},{label:"Serro",value:"s"}],request:{productType:null,customer:{indentification:null,full_name:null,phone:null,email:null},company:{name:null,rif:null}}}},methods:{add:function(){console.log("guardar compresor")}},components:{VForm:_.a,VTextField:h.a,VRadioGroup:x.VRadioGroup,VRadio:x.VRadio}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.add(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-toolbar",{staticClass:"black",attrs:{dark:""}},[n("v-btn",{attrs:{icon:"",to:{name:"Home"}}},[n("v-icon",[e._v("arrow_back")])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-title",{staticClass:"text-xs-center"},[e._v("Recepción de compresor")]),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-layout",{staticClass:"pa-3",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs5:""}},[n("h3",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"black"}},[e._v("person_add")]),e._v(" Datos del responsable")],1),e._v(" "),n("v-text-field",{attrs:{required:"",rules:e.IdentificationRules,label:"Cédula de identidad",placeholder:"Ej: 18055214"},model:{value:e.request.customer.indentification,callback:function(t){e.$set(e.request.customer,"indentification",t)},expression:"request.customer.indentification"}}),e._v(" "),n("v-text-field",{attrs:{required:"",rules:e.FullNameRules,label:"Nombre completo",placeholder:"Ej: Jonh Doe"},model:{value:e.request.customer.full_name,callback:function(t){e.$set(e.request.customer,"full_name",t)},expression:"request.customer.full_name"}}),e._v(" "),n("v-text-field",{attrs:{required:"",rules:e.PhoneRules,label:"Nº Teléfono",placeholder:"Ej: 04145555555"},model:{value:e.request.customer.phone,callback:function(t){e.$set(e.request.customer,"phone",t)},expression:"request.customer.phone"}}),e._v(" "),n("v-text-field",{attrs:{required:"",rules:e.EmailRules,label:"Correo electrónico",placeholder:"Ej: jonhdot@gmail.com"},model:{value:e.request.customer.email,callback:function(t){e.$set(e.request.customer,"email",t)},expression:"request.customer.email"}}),e._v(" "),n("h3",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"black"}},[e._v("business")]),e._v(" Datos de la empresa")],1),e._v(" "),n("v-text-field",{attrs:{required:"",rules:e.RequiredRules("El nombre de la compañia es obligatorio"),label:"Nombre",placeholder:"Ej: Epa C.A"},model:{value:e.request.company.name,callback:function(t){e.$set(e.request.company,"name",t)},expression:"request.company.name"}}),e._v(" "),n("v-text-field",{attrs:{required:"",label:"R.I.F",placeholder:"Ej: J1234567892"},model:{value:e.request.company.rif,callback:function(t){e.$set(e.request.company,"rif",t)},expression:"request.company.rif"}})],1),e._v(" "),n("v-flex",{attrs:{xs7:""}},[n("h3",{staticClass:"text-xs-center"},[n("v-icon",{attrs:{color:"black"}},[e._v("settings")]),e._v(" Datos de la pieza")],1),e._v(" "),n("v-radio-group",{attrs:{label:"Tipo de producto",required:"",row:""},model:{value:e.request.productType,callback:function(t){e.$set(e.request,"productType",t)},expression:"request.productType"}},e._l(e.productTypes,function(e,t){return n("v-radio",{key:t,attrs:{label:e.label,value:e.value,color:"primary"}})}))],1)],1),e._v(" "),n("v-btn",{attrs:{fab:"",large:"",fixed:"",bottom:"",right:"",loading:e.loading,disabled:!e.valid||e.loading,type:"submit"}},[n("v-icon",[e._v("save")])],1)],1)],1)},staticRenderFns:[]},q=n("VU/8")(k,g,!1,null,null,null).exports,C={data:function(){return{showSearch:!1,request:{search:null}}},components:{VTextField:h.a}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[n("v-toolbar",{staticClass:"black",attrs:{dark:""}},[n("v-btn",{attrs:{icon:"",to:{name:"Home"}}},[n("v-icon",[e._v("arrow_back")])],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-toolbar-title",{staticClass:"text-xs-center"},[e._v("Registros")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-slide-x-reverse-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],attrs:{label:"Buscar registro"},model:{value:e.request.search,callback:function(t){e.$set(e.request,"search",t)},expression:"request.search"}})],1),e._v(" "),n("v-btn",{staticClass:"hidden-xs-only",attrs:{icon:""},nativeOn:{click:function(t){e.showSearch=!e.showSearch}}},[n("v-icon",[e._v("search")])],1)],1),e._v(" "),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}})],1)],1)},staticRenderFns:[]},w=n("VU/8")(C,y,!1,null,null,null).exports,R={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[t("v-toolbar",{staticClass:"black",attrs:{dark:""}},[t("v-btn",{attrs:{icon:"",to:{name:"Home"}}},[t("v-icon",[this._v("arrow_back")])],1),this._v(" "),t("v-spacer"),this._v(" "),t("v-toolbar-title",{staticClass:"text-xs-center"},[this._v("Graficas")]),this._v(" "),t("v-spacer")],1),this._v(" "),t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:""}})],1)],1)},staticRenderFns:[]},V=n("VU/8")(null,R,!1,null,null,null).exports;r.a.use(i.a);var E=new i.a({routes:[{path:"/",name:"Home",component:c},{path:"/register",name:"Register",component:q},{path:"/list",name:"List",component:w},{path:"/charts",name:"Chart",component:V}]}),F=n("M+UZ"),H=n.n(F),$=n("IcMm"),N=n.n($),T=n("rPQa"),S=n.n(T),D=n("TWha"),I=n.n(D),A=n("fYhH"),j=n.n(A),B=n("7Q1V"),L=n.n(B),Z=n("7M7f"),O=n.n(Z),U=n("JUsQ"),M=n.n(U),P=n("+9ps"),Q=n.n(P),J=n("6VHA"),W=n.n(J),z=(n("s6ZO"),n("WlsB"),n("mtWM")),G=n.n(z);r.a.use(H.a,{components:{VApp:N.a,VNavigationDrawer:S.a,VFooter:I.a,VList:j.a,VBtn:L.a,VIcon:O.a,VGrid:M.a,VToolbar:Q.a,transitions:W.a},theme:{primary:"#fe0000",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),r.a.prototype.$http=G.a.create(),r.a.config.productionTip=!1,new r.a({el:"#app",router:E,components:{App:o},template:"<App/>"})},NOHZ:function(e,t){},P0ba:function(e,t){},WlsB:function(e,t){},"X05+":function(e,t){},XC5Q:function(e,t){},XRIO:function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("time",{staticClass:"clock"},[n("span",{staticClass:"clock__hour"},[e._v(e._s(e.hours))]),e.blink&&e.seconds%2!=0?n("span",[e._v(" ")]):n("span",[e._v(":")]),n("span",{staticClass:"clock__minutes"},[e._v(e._s(e.minutes))]),!e.blink||e.seconds%2==0&&e.displaySeconds?n("span",[e._v(":")]):e.displaySeconds?n("span",[e._v(" ")]):e._e(),e.displaySeconds?n("span",{staticClass:"clock__seconds"},[e._v(e._s(e.seconds))]):e._e()])},staticRenderFns:[]};t.a=r},Z90s:function(e,t){},acBN:function(e,t){},iQH9:function(e,t,n){e.exports=n.p+"test2/static/img/logo.png"},kP4z:function(e,t){},kVeV:function(e,t){},n6yH:function(e,t){function n(e){return e<10?"0"+e:e}function r(){return new Date}function a(){return n(r().getSeconds())}function s(){return n(r().getMinutes())}function o(){return n(r().getHours())}e.exports={name:"clock",props:["blink","displaySeconds"],data:function(){return{ticker:null,minutes:s(),hours:o(),seconds:a()}},created:function(){var e=this;this.ticker=setInterval(function(){e.minutes=s(),e.hours=o(),e.seconds=a()},1e3)},destroyed:function(){clearInterval(this.ticker)}}},oHt9:function(e,t){},pu2v:function(e,t){},"q/9b":function(e,t){},qRVk:function(e,t){},s6ZO:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.316608a0607e709203d1.js.map