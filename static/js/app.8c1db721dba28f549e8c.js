webpackJsonp([1],{0:function(t,e){},"3TcT":function(t,e){},"6nfk":function(t,e){},"8Ozm":function(t,e){},BCfr:function(t,e){},Dlyp:function(t,e){},FbEL:function(t,e){},"HNa/":function(t,e){},JLzs:function(t,e){},LGiM:function(t,e){},MjAo:function(t,e){},NHnr:function(t,e,s){"use strict";function a(t){s("j2ze")}function n(t){s("8Ozm")}function i(t){s("MjAo")}function o(t){s("TPe9")}function r(t){s("RNzR")}function l(t){s("WkYz")}function c(t){s("Dlyp")}Object.defineProperty(e,"__esModule",{value:!0});var v=s("7+uW"),u=s("NYxO"),d=s("8+8L"),m=s("mjDs"),f=s.n(m),p=s("//Fk"),_=s.n(p),h=s("N4Mj"),g=s.n(h);v.a.use(u.a),v.a.use(d.a),v.a.use(g.a);var b=new u.a.Store({state:{user:{full_name:"Edgar Messia",email:"edgar.m1986@gmail.com",photo:"https://i.ytimg.com/vi/jTL_sJycQAA/maxresdefault.jpg",role:"manager",promoter:"Daniel Perez",config:{notification_promoter:!0,notification_manager:!0,notification_events:!0,notification_promotions:!0}},disco:{name:"G Disco & Drinks",logo:"https://graffiatobymic.com/assets/sites/7/2016/12/G-icon-rotated10-bw.png"}},mutations:{login:function(t,e){t.user=e},logout:function(t){t.user={}},role:function(t,e){t.user.role=e}},getters:{logued:function(t){return t.user.api_token&&t.user.api_token.length>0},userIsManager:function(t){return"manager"===t.user.role},userIsPromoter:function(t){return"promoter"===t.user.role},userIsReferred:function(t){return"referred"===t.user.role}},actions:{login:function(t,e){v.a.http.post("/login",{email:e.email,password:e.password}).then(function(e){return new _.a(function(s,a){e.ok&&e.data.api_token?(t.commit("login",e.data),s(e.data)):t.commit("logout")})})}},plugins:[g()({namespace:"eventos",storage:window.localStorage})]}),x=s("M+UZ"),w=s("IcMm"),j=s("rPQa"),V=s("fYhH"),k=s("7Q1V"),y=s("7M7f"),C=s("JUsQ"),z=s("+9ps"),R=s("6VHA"),P=(s("s6ZO"),{data:function(){return{user:null}}}),T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",[s("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[s("router-view")],1)],1)],1)},F=[],N={render:T,staticRenderFns:F},M=N,D=s("VU/8"),O=D(P,M,!1,null,null,null),A=O.exports,E=s("/ocq"),L=s("/yi5"),S={data:function(){return{txtVisible:!1,email:"",password:""}},components:{VTextField:L.a}},q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"login-page"},[s("v-layout",{staticClass:"pa-3",attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h1",{staticClass:"text-xs-center"},[t._v("Logo")])]),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{name:"email",label:"Correo Electrónico",type:"email","prepend-icon":"email","single-line":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("v-text-field",{attrs:{name:"password",label:"Contraseña",hint:"Al menos 8 caracteres",min:"8","append-icon":t.txtVisible?"visibility":"visibility_off","append-icon-cb":function(){return t.txtVisible=!t.txtVisible},type:t.txtVisible?"password":"text","prepend-icon":"vpn_key",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("div",{staticClass:"text-xs-right"},[s("v-btn",{attrs:{to:{name:"Register"}}},[t._v("Registro")]),t._v(" "),s("v-btn",{attrs:{color:"primary",to:{name:"Main"}}},[t._v("Entrar")])],1)],1)],1)],1)},B=[],I={render:q,staticRenderFns:B},H=I,U=s("VU/8"),$=a,X=U(S,H,!1,$,"data-v-0faed900",null),G=X.exports,W=s("XRgG"),J=s("r+QJ"),Y={data:function(){return{step:null,full_name:null,email:null,phone:null,password:null,email_confirmation:null,password_confirmation:null,photo:null,e1:!1,e2:!1,loading:!1}},computed:{stepOneValid:function(){return this.email&&this.email.length>5&&this.email_confirmation&&this.email_confirmation.length>5&&this.email===this.email_confirmation},stepTwoValid:function(){return this.full_name&&this.full_name.length>3&&this.phone&&this.phone.length>7},stepTreeValid:function(){return!0},stepFourValid:function(){return this.password&&this.password.length>7&&this.password_confirmation&&this.password_confirmation.length>7&&this.password===this.password_confirmation},formValid:function(){return this.stepOneValid&&this.stepTwoValid&&this.stepFourValid},stepOneRules:function(){var t=this;return[function(){return t.stepOneValid}]},stepTwoRules:function(){var t=this;return[function(){return t.stepTwoValid}]},stepFourRules:function(){var t=this;return[function(){return t.stepFourValid}]}},components:{VStepper:J.a,VStepperHeader:J.c,VStepperStep:J.e,VStepperItems:J.d,VStepperContent:J.b,VDivider:W.a,VTextField:L.a}},Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"register-page"},[s("v-layout",{staticClass:"pa-3",attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h1",{staticClass:"text-xs-center"},[t._v("Logo")])]),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("h4",{staticClass:"text-xs-center"},[t._v("Registro de nuevo referido")]),t._v(" "),s("v-stepper",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("v-stepper-header",[s("v-stepper-step",{attrs:{step:"1",complete:t.stepOneValid,rules:t.stepOneRules}},[t._v("\n            Correo electrónico\n            "),s("small",{directives:[{name:"show",rawName:"v-show",value:!t.stepOneValid,expression:"!stepOneValid"}]},[t._v("correo electrónico invalido")])]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{step:"2",complete:t.full_name&&t.full_name.length>0&&t.phone&&t.phone.length>0,rules:t.stepTwoRules}},[t._v("\n            Datos Personales\n            "),s("small",{directives:[{name:"show",rawName:"v-show",value:!t.stepTwoValid,expression:"!stepTwoValid"}]},[t._v("nombre o teléfono celular invalido")])]),t._v(" "),s("v-divider"),t._v(" "),s("v-stepper-step",{attrs:{step:"3",complete:t.password&&t.password.length>0&&t.password_confirmation&&t.password_confirmation.length>0,rules:t.stepFourRules}},[t._v("\n            Seguridad\n            "),s("small",{directives:[{name:"show",rawName:"v-show",value:!t.stepFourValid,expression:"!stepFourValid"}]},[t._v("contraseña invalida")])])],1),t._v(" "),s("v-stepper-items",[s("v-stepper-content",{attrs:{step:"1"}},[s("v-text-field",{attrs:{label:"Correo Electrónico",min:"10",max:"100",type:"email",counter:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),s("v-text-field",{attrs:{label:"Repite tu Correo Electrónico",min:"10",max:"100",type:"email",counter:""},model:{value:t.email_confirmation,callback:function(e){t.email_confirmation=e},expression:"email_confirmation"}}),t._v(" "),s("p",[t._v("el correo electrónico no sera visible para nadie, solo con fines de seguridad.")]),t._v(" "),s("v-btn",{attrs:{primary:""},nativeOn:{click:function(e){t.step++}}},[s("v-icon",[t._v("navigate_next")])],1)],1),t._v(" "),s("v-stepper-content",{attrs:{step:"2"}},[s("v-text-field",{attrs:{label:"Nombre completo",min:"10",max:"30",counter:""},model:{value:t.full_name,callback:function(e){t.full_name=e},expression:"full_name"}}),t._v(" "),s("v-text-field",{attrs:{label:"Numero de Teléfono",min:"10",max:"30",type:"phone",counter:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),s("p",[t._v("tu numero de teléfono solo sera usado por tu anfitrión.")]),t._v(" "),s("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){--t.step}}},[s("v-icon",[t._v("navigate_before")])],1),t._v(" "),s("v-btn",{attrs:{primary:""},nativeOn:{click:function(e){t.step++}}},[s("v-icon",[t._v("navigate_next")])],1)],1),t._v(" "),s("v-stepper-content",{attrs:{step:"3"}},[s("v-text-field",{attrs:{label:"Introduce tu contraseña",hint:"Al menos 8 caracteres",min:"8","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"password":"text",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("v-text-field",{attrs:{label:"Repite tu contraseña",hint:"Al menos 8 caracteres",min:"8","append-icon":t.e2?"visibility":"visibility_off","append-icon-cb":function(){return t.e2=!t.e2},type:t.e2?"password":"text",counter:""},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}}),t._v(" "),s("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){--t.step}}},[s("v-icon",[t._v("navigate_before")])],1),t._v(" "),s("v-btn",{attrs:{info:"",to:{name:"Main"},disabled:!t.formValid||t.loading,loading:t.loading}},[s("v-icon",[t._v("check")])],1)],1)],1)],1),t._v(" "),s("v-btn",{attrs:{block:"",warning:"",to:{name:"Login"}}},[t._v("Cancelar")])],1)],1)],1)},K=[],Z={render:Q,staticRenderFns:K},tt=Z,et=s("VU/8"),st=et(Y,tt,!1,null,null,null),at=st.exports,nt=s("RWpw"),it={props:{logoSize:{type:String,default:"80px"},title:{type:String,default:null},showDiscoLogo:{type:Boolean,default:!0},showDiscoName:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!1},showDate:{type:Boolean,default:!0}},computed:{disco:function(){return this.$store.state.disco}},components:{VAvatar:nt.a}},ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"text-xs-center"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showDiscoLogo,expression:"showDiscoLogo"}]},[s("v-avatar",{staticClass:"grey lighten-4",attrs:{size:t.logoSize}},[s("img",{attrs:{src:t.disco.logo,alt:"Logo"}})])],1),t._v(" "),s("h3",{directives:[{name:"show",rawName:"v-show",value:t.showDiscoName,expression:"showDiscoName"}]},[t._v(t._s(t.disco.name))]),t._v(" "),s("h4",{directives:[{name:"show",rawName:"v-show",value:t.showTitle,expression:"showTitle"}],domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t._t("default"),t._v(" "),s("h6",{directives:[{name:"show",rawName:"v-show",value:t.showDate,expression:"showDate"}]},[t._v(t._s(t._f("moment")(new Date,"DD/MM/YYYY")))])],2)},rt=[],lt={render:ot,staticRenderFns:rt},ct=lt,vt=s("VU/8"),ut=vt(it,ct,!1,null,null,null),dt=ut.exports,mt=s("oB7h"),ft=s("MPXs"),pt=s("f/u0"),_t={mounted:function(){this.getAssistants()},data:function(){return{fab:!1,dialog:!1,search:"",selectedPerson:null,assistants:[]}},computed:{filteredAssistants:function(){var t=this;return""!==this.search?this.assistants.filter(function(e){return(e.name.first+e.name.last).toLowerCase().indexOf(t.search.toLowerCase())>0}):this.assistants}},methods:{getAssistants:function(){var t=this,e={params:{results:Math.floor(30*Math.random()+1),seed:"assistants",nat:"es",exc:"login, id, location"}};this.$http.get("https://randomuser.me/api",e).then(function(e){e.ok&&(t.assistants=e.data.results),console.log(e)}).catch(function(t){console.log(t)})},showDialog:function(t){this.selectedPerson=t,this.dialog=!0},confirmAssistance:function(t){this.selectedPerson.status=t,this.dialog=!1}},components:{DiscoHeader:dt,VSpeedDial:mt.a,VTextField:L.a,VAvatar:nt.a,VDialog:ft.a,VCard:pt.a,VCardTitle:pt.d,VCardText:pt.c,VCardActions:pt.b}},ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"assistants-tab"},[t.selectedPerson?s("v-dialog",{attrs:{"min-width":"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"title"},[t._v("Detalles de asistencia")]),t._v(" "),s("v-card-text",[s("h5",[t._v("Nombre completo: "+t._s(t.selectedPerson.name.last+" "+t.selectedPerson.name.first))]),t._v(" "),s("h5",[t._v("Invitado por: xxxxx")])]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{warning:"",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cancelar")]),t._v(" "),s("v-speed-dial",{attrs:{direction:"top",transition:"slide-y-reverse-transition"}},[s("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.selectedPerson.status,expression:"!selectedPerson.status"}],staticClass:"elevation-16",attrs:{slot:"activator",primary:""},slot:"activator"},[t._v("\n            Marcar\n          ")]),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"green"},on:{click:function(e){t.confirmAssistance("e")}}},[t._v("\n            entrada\n          ")]),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"blue"},on:{click:function(e){t.confirmAssistance("c")}}},[t._v("\n            consumo\n          ")])],1)],1)],1)],1):t._e(),t._v(" "),s("v-layout",{staticClass:"pa-3"},[s("v-flex",[s("disco-header",{attrs:{"show-title":!1}},[s("h4",{staticClass:"text-xs-center"},[t._v("Asistentes de hoy ("+t._s(t.assistants.length)+")")])]),t._v(" "),s("v-text-field",{attrs:{placeholder:"Buscar asistente por nombre..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.assistants.length>0?s("v-list",{attrs:{"two-line":""}},[t._l(t.filteredAssistants,function(e){return[s("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(s){t.showDialog(e)}}},[s("v-list-tile-avatar",[s("img",{attrs:{src:e.picture.thumbnail}})]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[s("strong",[t._v(t._s(e.name.last)+" "+t._s(e.name.first))])]),t._v(" "),s("v-list-tile-sub-title",["e"===e.status?s("strong",[t._v("asistio ● "),s("span",{staticClass:"text--green"},[t._v("entrada")])]):"c"===e.status?s("strong",[t._v("asistio ● "),s("span",{staticClass:"text--indigo"},[t._v("consumo")])]):s("span",[t._v("esperando...")])])],1),t._v(" "),s("v-list-tile-avatar",[s("v-btn",{staticClass:"elevation-0",attrs:{fab:"",info:"c"===e.status,success:"e"===e.status,warning:!e.status,small:""}},[s("v-icon",[t._v(t._s(e.status?"thumb_up":"thumb_down"))])],1)],1)],1)]}),t._v(" "),s("h1",[t._v(" ")]),t._v(" "),s("h1",[t._v(" ")])],2):s("h5",{staticClass:"text-xs-center"},[t._v("¡No hay invitados para este evento!")])],1)],1),t._v(" "),s("v-speed-dial",{attrs:{fixed:"",right:"",direction:"top",transition:"slide-y-reverse-transition"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[s("v-btn",{staticClass:"elevation-16",attrs:{slot:"activator",primary:"",dark:"",fab:""},slot:"activator",model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[s("v-icon",[t._v("person_add")]),t._v(" "),s("v-icon",[t._v("close")])],1),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"green"}},[t._v("\n      entrada\n    ")]),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"blue"}},[t._v("\n      consumo\n    ")])],1)],1)},gt=[],bt={render:ht,staticRenderFns:gt},xt=bt,wt=s("VU/8"),jt=n,Vt=wt(_t,xt,!1,jt,"data-v-1b754036",null),kt=Vt.exports,yt={mounted:function(){this.getPromoters()},data:function(){return{fab:!1,dialog:!1,search:"",selectedPerson:null,promoters:[]}},computed:{filteredPromoters:function(){var t=this;return""!==this.search?this.promoters.filter(function(e){return(e.name.first+e.name.last).toLowerCase().indexOf(t.search.toLowerCase())>0}):this.promoters}},methods:{getPromoters:function(){var t=this,e={params:{results:Math.floor(30*Math.random()+1),seed:"promoters",nat:"es",exc:"login, id, location"}};this.$http.get("https://randomuser.me/api",e).then(function(e){e.ok&&(t.promoters=e.data.results),console.log(e)}).catch(function(t){console.log(t)})},showDialog:function(t){this.selectedPerson=t,this.dialog=!0}},components:{DiscoHeader:dt,VTextField:L.a,VAvatar:nt.a,VDialog:ft.a,VCard:pt.a,VCardTitle:pt.d,VCardText:pt.c,VCardActions:pt.b}},Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"commissions-tab"},[t.selectedPerson?s("v-dialog",{attrs:{"min-width":"300"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",{staticClass:"title"},[t._v("Detalles Comisiones")]),t._v(" "),s("v-card-text",[t._v(t._s(t.selectedPerson.name.first))]),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{warning:"",flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Cerrar")])],1)],1)],1):t._e(),t._v(" "),s("v-layout",{staticClass:"pa-3"},[s("v-flex",[s("disco-header",{attrs:{"show-title":!0,title:"Comisiones de los promotores"}}),t._v(" "),s("v-text-field",{attrs:{placeholder:"Buscar promotor por nombre..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.promoters.length>0?s("v-list",{attrs:{"three-line":""}},[t._l(t.filteredPromoters,function(e){return[s("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:function(s){t.showDialog(e)}}},[s("v-list-tile-avatar",[s("img",{attrs:{src:e.picture.thumbnail}})]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[s("strong",[t._v(t._s(e.name.last)+" "+t._s(e.name.first))])]),t._v(" "),s("v-list-tile-sub-title",[t._v("comision: "+t._s(Math.floor(1e6*Math.random()+1))+"Bs.")]),t._v(" "),s("v-list-tile-sub-title",[s("small",[t._v("invitados: "+t._s(Math.floor(50*Math.random()+1))+" ● asistidos: "+t._s(Math.floor(49*Math.random()+1)))])])],1)],1)]}),t._v(" "),s("h1",[t._v(" ")]),t._v(" "),s("h1",[t._v(" ")])],2):s("h5",{staticClass:"text-xs-center"},[t._v("¡No hay promotores para este evento!")])],1)],1)],1)},zt=[],Rt={render:Ct,staticRenderFns:zt},Pt=Rt,Tt=s("VU/8"),Ft=i,Nt=Tt(yt,Pt,!1,Ft,"data-v-5e0457ee",null),Mt=Nt.exports,Dt=s("t9Tm"),Ot={date:function(){return{}},components:{DiscoHeader:dt,VChip:Dt.a,VAvatar:nt.a,VDivider:W.a}},At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"my-commissions-tab"},[s("v-layout",{staticClass:"pa-3",attrs:{column:"","align-center":""}},[s("v-flex",[s("disco-header"),t._v(" "),s("div",{staticClass:"text-xs-center"},[s("h1",[t._v("Asistencias")]),t._v(" "),s("v-chip",[s("v-avatar",{staticClass:"green"},[t._v("3")]),t._v("\n          entrada\n        ")],1),t._v(" "),s("v-chip",[s("v-avatar",{staticClass:"blue"},[t._v("17")]),t._v("\n          consumo\n        ")],1)],1),t._v(" "),s("v-divider")],1),t._v(" "),s("div",{staticClass:"text-xs-center total-amount"},[s("h3",[t._v("Total de comision:")]),t._v(" "),s("h2",[s("strong",[t._v("300.000Bs")])])])],1)],1)},Et=[],Lt={render:At,staticRenderFns:Et},St=Lt,qt=s("VU/8"),Bt=o,It=qt(Ot,St,!1,Bt,"data-v-92b419a2",null),Ht=It.exports,Ut={mounted:function(){this.getInvitations()},data:function(){return{fab:!1,search:"",selectedPerson:null,invitations:[]}},computed:{filteredInvitations:function(){var t=this;return""!==this.search?this.invitations.filter(function(e){return(e.name.first+e.name.last).toLowerCase().indexOf(t.search.toLowerCase())>0}):this.invitations}},methods:{getInvitations:function(){var t=this,e={params:{results:Math.floor(30*Math.random()+1),seed:"invitations",nat:"es",exc:"login, id, location"}};this.$http.get("https://randomuser.me/api",e).then(function(e){e.ok&&(t.invitations=e.data.results),console.log(e)}).catch(function(t){console.log(t)})}},components:{DiscoHeader:dt,VSpeedDial:mt.a,VTextField:L.a,VAvatar:nt.a}},$t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"my-invitations-tab"},[s("v-layout",{staticClass:"pa-3"},[s("v-flex",[s("disco-header",{attrs:{"show-title":!1}},[s("h4",{staticClass:"text-xs-center"},[t._v("Invitados de hoy ("+t._s(t.invitations.length)+")")])]),t._v(" "),s("v-text-field",{attrs:{placeholder:"Buscar invitado por nombre..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),t.invitations.length>0?s("v-list",{attrs:{"two-line":""}},[t._l(t.filteredInvitations,function(e){return[s("v-list-tile",{key:e.title,attrs:{avatar:""}},[s("v-list-tile-avatar",[s("img",{attrs:{src:e.picture.thumbnail}})]),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[s("strong",[t._v(t._s(e.name.last)+" "+t._s(e.name.first))])]),t._v(" "),s("v-list-tile-sub-title",["e"===e.status?s("strong",[t._v("asistio ● "),s("span",{staticClass:"text--green"},[t._v("entrada")])]):"c"===e.status?s("strong",[t._v("asistio ● "),s("span",{staticClass:"text--indigo"},[t._v("consumo")])]):s("span",[t._v("esperando...")])])],1),t._v(" "),s("v-list-tile-avatar",[s("v-btn",{staticClass:"elevation-0",attrs:{fab:"",info:"c"===e.status,success:"e"===e.status,warning:!e.status,small:""}},[s("v-icon",[t._v(t._s(e.status?"thumb_up":"thumb_down"))])],1)],1)],1)]}),t._v(" "),s("h1",[t._v(" ")]),t._v(" "),s("h1",[t._v(" ")])],2):s("h5",{staticClass:"text-xs-center"},[t._v("¡No hay invitados para este evento!")])],1)],1),t._v(" "),s("v-speed-dial",{attrs:{fixed:"",right:"",direction:"top",transition:"slide-y-reverse-transition"},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[s("v-btn",{staticClass:"elevation-16",attrs:{slot:"activator",primary:"",dark:"",fab:""},slot:"activator",model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[s("v-icon",[t._v("person_add")]),t._v(" "),s("v-icon",[t._v("close")])],1),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"green"}},[t._v("\n      sms\n    ")]),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"blue"}},[t._v("\n      email\n    ")]),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"black"}},[t._v("\n      codigo qr\n    ")]),t._v(" "),s("v-btn",{attrs:{dark:"",small:"",color:"red"}},[t._v("\n      url\n    ")])],1)],1)},Xt=[],Gt={render:$t,staticRenderFns:Xt},Wt=Gt,Jt=s("VU/8"),Yt=r,Qt=Jt(Ut,Wt,!1,Yt,"data-v-8ca1e620",null),Kt=Qt.exports,Zt=s("6/SM"),te=s("0TZ1"),ee=s("DBae"),se=s("7gKz"),ae={data:function(){return{activeTab:null,roles:{manager:{tabs:[{label:"Asistencias",icon:"people",component:kt},{label:"Comisiones",icon:"attach_money",component:Mt}]},promoter:{tabs:[{label:"Invitados",icon:"group_add",component:Kt},{label:"Comisiones",icon:"attach_money",component:Ht}]},referred:{tabs:[{label:"Información",icon:"info",component:null}]}}}},computed:{user:function(){return this.$store.state.user},selectedRole:{get:function(){return this.$store.state.user.role},set:function(t){this.$store.commit("role",t),window.location.reload()}}},components:{VTabs:Zt.a,VTabsBar:Zt.b,VTabsSlider:Zt.f,VTabsItems:Zt.e,VTabsItem:Zt.d,VTabsContent:Zt.c,VCard:pt.a,VCardText:pt.c,VMenu:ee.a,VDivider:W.a,VRadioGroup:te.b,VRadio:te.a,VSubheader:se.a}},ne=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"main-page"},[s("v-toolbar",{staticClass:"grey lighten-3",attrs:{flat:""}},[s("v-toolbar-title",[t._v("logo promotora")]),t._v(" "),s("v-spacer"),t._v(" "),s("v-menu",{attrs:{bottom:"",left:""}},[s("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[s("v-icon",[t._v("more_vert")])],1),t._v(" "),s("v-list",{attrs:{subheader:""}},[s("v-list-tile",{attrs:{to:{name:"Profile"}}},[s("v-list-tile-title",[t._v("Mi Perfil")])],1),t._v(" "),s("v-list-tile",{attrs:{to:{name:"Config"}}},[s("v-list-tile-title",[t._v("Configurar Notificaciones")])],1),t._v(" "),s("v-list-tile",{attrs:{to:{name:"Login"}}},[s("v-list-tile-title",[t._v("Salir")])],1),t._v(" "),s("v-divider"),t._v(" "),s("v-subheader",[t._v("Solo para pruebas del app")]),t._v(" "),s("v-radio-group",{attrs:{mandatory:!1},model:{value:t.selectedRole,callback:function(e){t.selectedRole=e},expression:"selectedRole"}},[s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-action",[s("v-radio",{attrs:{value:"manager"}})],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Gerente")]),t._v(" "),s("v-list-tile-sub-title",[t._v("role gerente")])],1)],1),t._v(" "),s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-action",[s("v-radio",{attrs:{value:"promoter"}})],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Promotor")]),t._v(" "),s("v-list-tile-sub-title",[t._v("role promotor")])],1)],1),t._v(" "),s("v-list-tile",{attrs:{avatar:""}},[s("v-list-tile-action",[s("v-radio",{attrs:{value:"referred"}})],1),t._v(" "),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Referido")]),t._v(" "),s("v-list-tile-sub-title",[t._v("role referido")])],1)],1)],1)],1)],1)],1),t._v(" "),s("v-tabs",{attrs:{fixed:"",centered:"",icons:"",grow:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("v-tabs-items",t._l(t.roles[t.user.role].tabs,function(t){return s("v-tabs-content",{key:t.label,attrs:{id:"tab-"+t.label}},[s(t.component,{tag:"component"})],1)})),t._v(" "),s("v-tabs-bar",{staticClass:"grey lighten-3"},[s("v-tabs-slider",{attrs:{color:"primary"}}),t._v(" "),t._l(t.roles[t.user.role].tabs,function(e){return s("v-tabs-item",{key:e.label,attrs:{href:"#tab-"+e.label}},[s("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.label)+"\n      ")],1)})],2)],1)],1)},ie=[],oe={render:ne,staticRenderFns:ie},re=oe,le=s("VU/8"),ce=l,ve=le(ae,re,!1,ce,"data-v-519fd9ee",null),ue=ve.exports,de=s("8QWG"),me={data:function(){return{}},computed:{config:function(){return this.$store.state.user.config}},components:{VSwitch:de.a}},fe=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"config-page"},[s("v-layout",{staticClass:"pa-3",attrs:{wrap:"",row:"","justify-space-between":""}},[s("v-flex",{attrs:{xs12:""}},[s("h4",{staticClass:"text-xs-center"},[t._v("Configurar Notificaciones")]),t._v(" "),s("h4",{staticClass:"text-xs-center"},[s("small",[t._v("aquí podrás configurar las notificaciones que quieres recibir en el app")])])]),t._v(" "),s("v-flex",[s("v-switch",{attrs:{label:"Notificaciones del promotor"},model:{value:t.config.notification_promoter,callback:function(e){t.$set(t.config,"notification_promoter",e)},expression:"config.notification_promoter"}}),t._v(" "),s("v-switch",{attrs:{label:"Notificaciones del gerente"},model:{value:t.config.notification_manager,callback:function(e){t.$set(t.config,"notification_manager",e)},expression:"config.notification_manager"}}),t._v(" "),s("v-switch",{attrs:{label:"Notificaciones de nuevos eventos"},model:{value:t.config.notification_events,callback:function(e){t.$set(t.config,"notification_events",e)},expression:"config.notification_events"}}),t._v(" "),s("v-switch",{attrs:{label:"Notificaciones de promociones"},model:{value:t.config.notification_promotions,callback:function(e){t.$set(t.config,"notification_promotions",e)},expression:"config.notification_promotions"}})],1),t._v(" "),s("v-btn",{attrs:{warning:"",fixed:"",bottom:"",right:"",to:{name:"Main"}}},[t._v("Volver")])],1)],1)},pe=[],_e={render:fe,staticRenderFns:pe},he=_e,ge=s("VU/8"),be=ge(me,he,!1,null,null,null),xe=be.exports,we={data:function(){return{}},computed:{user:function(){return this.$store.state.user}}},je=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"profile-page text-xs-center"},[s("v-layout",{staticClass:"pa-0",attrs:{wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h4",[t._v("Mi Perfil")]),t._v(" "),s("div",{staticClass:"portrait",style:{"background-image":"url("+t.user.photo+")"}},[s("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[s("h1",[s("v-icon",{attrs:{dark:""}},[t._v("perm_identity")]),t._v(" "+t._s(t.user.full_name))],1),t._v(" "),s("h4",[s("v-icon",{attrs:{dark:""}},[t._v("email")]),t._v(" "+t._s(t.user.email))],1)])],1),t._v(" "),s("v-btn",{attrs:{small:""}},[t._v("Editar Perfil")])],1),t._v(" "),s("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.userIsReferred,expression:"$store.getters.userIsReferred"}],attrs:{xs12:""}},[s("h4",[s("strong",[t._v("Mi promotor:")]),t._v(" "+t._s(t.user.promoter))])]),t._v(" "),s("v-btn",{attrs:{warning:"",fixed:"",bottom:"",right:"",to:{name:"Main"}}},[t._v("Volver")])],1)],1)},Ve=[],ke={render:je,staticRenderFns:Ve},ye=ke,Ce=s("VU/8"),ze=c,Re=Ce(we,ye,!1,ze,"data-v-d6b97a6a",null),Pe=Re.exports;v.a.use(E.a);var Te=new E.a({routes:[{path:"/",name:"Login",component:G},{path:"/register",name:"Register",component:at},{path:"/main",name:"Main",component:ue,meta:{requiresAuth:!0}},{path:"/config",name:"Config",component:xe,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:Pe,meta:{requiresAuth:!0}}]});v.a.use(x.a,{components:{VApp:w.a,VNavigationDrawer:j.a,VList:V.a,VBtn:k.a,VIcon:y.a,VGrid:C.a,VToolbar:z.a,transitions:R.e},theme:{primary:"#ee44aa",secondary:"#424242",accent:"#ff87d3",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#424242"}}),v.a.use(u.a),v.a.use(f.a),v.a.use(d.a),v.a.config.productionTip=!1,new v.a({el:"#app",store:b,router:Te,template:"<App/>",components:{App:A}})},NOHZ:function(t,e){},P0ba:function(t,e){},RNzR:function(t,e){},TPe9:function(t,e){},VscV:function(t,e){},WkYz:function(t,e){},"X05+":function(t,e){},XC5Q:function(t,e){},acBN:function(t,e){},bVJk:function(t,e){},fgGy:function(t,e){},j2ze:function(t,e){},kP4z:function(t,e){},kVeV:function(t,e){},lThp:function(t,e){},oHt9:function(t,e){},pu2v:function(t,e){},"q/9b":function(t,e){},qRVk:function(t,e){},rzhv:function(t,e){},s6ZO:function(t,e){},sBiC:function(t,e){},uslO:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.8c1db721dba28f549e8c.js.map