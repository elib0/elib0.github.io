webpackJsonp([1],{127:function(t,e,i){var n=i(11)(i(136),i(376),null,null,null);t.exports=n.exports},128:function(t,e,i){var n=i(11)(i(138),i(381),null,null,null);t.exports=n.exports},129:function(t,e,i){var n=i(11)(i(141),i(379),null,null,null);t.exports=n.exports},130:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(350),a=(i.n(n),i(349)),s=(i.n(a),i(64)),l=i(385),o=i(388),r=i.n(o),c=i(362),v=i.n(c),u=i(133),d=(i(132),i(134));s.a.use(l.a),s.a.use(r.a),s.a.config.productionTip=!1,new s.a({el:"#app",store:d.default,router:u.a,template:"<App/>",components:{App:v.a}})},132:function(t,e,i){"use strict";i(64).a.directive("long-press",{bind:function(t,e,i){var n=void 0;t.addEventListener("touchstart",function(t){function i(){t.preventDefault(),e.value(t)}n=setTimeout(i,1300)},!0),t.addEventListener("touchend",function(t){clearTimeout(n)})}})},133:function(t,e,i){"use strict";var n=i(64),a=i(386),s=i(364),l=i.n(s),o=i(366),r=i.n(o),c=i(365),v=i.n(c),u=i(368),d=i.n(u),p=i(363),f=i.n(p),m=i(367),_=i.n(m),h=i(129),b=i.n(h),g=i(128),x=i.n(g),y=i(127),w=i.n(y);n.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"login",component:l.a},{path:"/register",name:"register",component:r.a},{path:"/main",name:"Main",component:v.a},{path:"/friend",name:"Friend",component:x.a},{path:"/policy",name:"Policy",component:b.a},{path:"/accident",name:"Accident",component:w.a},{path:"/wallet",name:"Wallet",component:d.a},{path:"/account",name:"Account",component:f.a},{path:"/support",name:"Support",component:_.a}]})},134:function(t,e,i){"use strict";var n=i(64),a=i(389);n.a.use(a.a);new a.a.Store({state:{user:{first_name:"Admin",first_last:"Panel"}}})},135:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{user:null}}}},136:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{editable:!1}},props:{accident:Object}}},137:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{user:function(){return this.$store.state.user()}}}},138:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mutableEditable:this.editable}},props:{friend:{type:Object,default:function(){return{firstName:"",lastName:"",fullName:"",phone:"",email:""}}},editable:!1}}},139:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{email:null,password:null,e1:!0,loading:!1}}}},140:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(371),a=i.n(n),s=i(370),l=i.n(s),o=i(369),r=i.n(o);e.default={data:function(){return{title:"Guia Seguro App",activeTab:null,stickyTab:!1,tabs:[{title:"Mis Pólizas",component:a.a,icon:"fa-list-alt"},{title:"Mis Amigos",component:l.a,icon:"fa-users"},{title:"Mis Siniestros",component:r.a,icon:"fa-wheelchair"}],showOptions:!1,options:[{title:"Mi Cartera",route:"Wallet"},{title:"Mi cuenta",route:"Account"},{title:"Soporte",route:"Support"},{title:"Salir",route:"Exit"}]}},methods:{openDialog:function(){for(var t=0;t<this.tabs.length&&this.tabs[t].title!==this.activeTab;t++);this.$refs.tabPage[t].dialog=!0},onScroll:function(t){var e=window.pageYOffset||document.documentElement.scrollTop;e>=40&&!this.stickyTab?this.stickyTab=!0:e<40&&this.stickyTab&&(this.stickyTab=!1)}},computed:{activeFab:function(){switch(this.activeTab){case"Mis Pólizas":return{class:"indigo",icon:"/static/new-policy.png",color:"green accent-3"};case"Mis Amigos":return{class:"red",icon:"/static/new-friend.png",color:"indigo darken-3"};case"Mis Siniestros":return{class:"green",icon:"/static/new-accident.png",color:"red accent-3"};default:return{}}}}}},141:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{editable:!1}},props:{policy:Object}}},142:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{email:null,phone:null,password:null,e1:!0,step:0,loading:!1}}}},143:function(t,e){},144:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{subMenu:{x:0,y:0,show:!1,items:[{title:"Editar",method:"deleteBank"},{title:"Eliminar",method:"deleteBank"}]},selectedBank:null,banks:[{name:"Banco Mercantil",number:"01050670111670107264",email:"elijose.c",account:"Ahorro"}]}},methods:{selectBank:function(t){this.selectedBank=t},deleteBank:function(){this.$delete(this.banks,this.selectedBank),this.selectedBank=null}}}},145:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(92),a=i.n(n),s=i(127),l=i.n(s);e.default={mixins:[a.a],data:function(){return{selectedDay:null,selectedAccident:null,editableAccident:!1,items:[{date:"Hoy",accidents:[{hour:"16:50",policy:"Seguros Caracas",description:"descripcion breve del sinistro, blah blah blah, etc etc etc"}]}]}},methods:{selectAccident:function(t,e){this.selectedDay=t,this.selectedAccident=e},deleteData:function(){this.$delete(this.items[this.selectedDay].accidents,this.selectedAccident),this.items[this.selectedDay].accidents<=0&&this.$delete(this.items,this.selectedDay),this.selectedAccident=null},editData:function(){this.editableAccident=!0,this.dialog=!0}},computed:{getSelectedAccident:function(){return this.selectedAccident?this.items[this.selectedDay].accidents[this.selectedAccident]:null}},components:{Accident:l.a}}},146:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(92),a=i.n(n),s=i(128),l=i.n(s);e.default={mixins:[a.a],data:function(){return{editableFriend:!1,selectedFriend:null,friends:[{avatar:"http://www.inbodyyogaacademy.com/wp-content/uploads/adam-288x300.jpg",fullName:"Ali Connors",email:"alicon28@hotmail.com",phone:"+58 4144720780"},{avatar:"https://s-media-cache-ak0.pinimg.com/originals/05/17/4a/05174a03d7aa00497c12cd3d313b2deb.jpg",fullName:"Alex Scott",email:"alex.scott@gmail.com",phone:""},{avatar:"http://tanzfabrik-production.s3.amazonaws.com/images/59/people_hires.jpg",fullName:"Sandra Adams",email:"sanbad@hotmail.com",phone:""},{avatar:"http://1.bp.blogspot.com/-KVb69cSq3WQ/TijheGWwUaI/AAAAAAAACUY/NA5m8ho9DLQ/s1600/nathan1.jpg",fullName:"Trevor Hansen",email:"trev1985@gmail.com",phone:""},{avatar:"http://thecheezymac.studio34productions.com/uploads/Winners/winnerphoto.jpg",fullName:"Britta Holt",email:"bakchik@outlook.com",phone:""}]}},methods:{selectFriend:function(t){this.selectedFriend=t},deleteData:function(){this.$delete(this.friends,this.selectedFriend),this.selectedFriend=null},editData:function(){this.editableFriend=!0,this.dialog=!0}},components:{Friend:l.a}}},147:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{subMenu:{x:0,y:0,show:!1,items:[{title:"Editar",method:"editData"},{title:"Eliminar",method:"deleteData"}]},dialog:!1}},methods:{subMenuAction:function(t){this[t]()},toggleSubMenu:function(t){t.preventDefault(),this.subMenu.x=t.clientX,this.subMenu.y=t.clientY,this.subMenu.show=!this.subMenu.show}}}},148:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(92),a=i.n(n),s=i(129),l=i.n(s);e.default={mixins:[a.a],data:function(){return{selectedPolicy:null,editablePolicy:!1,polices:[{action:"15 min",headline:"Brunch this weekend?",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{action:"2 hr",headline:"Summer BBQ",title:"me, Scrott, Jennifer",subtitle:"Wish I could come, but I'm out of town this weekend."},{action:"6 hr",headline:"Oui oui",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{action:"12 hr",headline:"Birthday gift",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{action:"15 min",headline:"Brunch this weekend?",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{action:"2 hr",headline:"Summer BBQ",title:"me, Scrott, Jennifer",subtitle:"Wish I could come, but I'm out of town this weekend."},{action:"6 hr",headline:"Oui oui",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{action:"12 hr",headline:"Birthday gift",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{action:"18hr",headline:"Recipe to try",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."},{action:"18hr",headline:"Recipe to try",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}},methods:{selectPolicy:function(t){this.selectedPolicy=t},deleteData:function(){this.$delete(this.polices,this.selectedPolicy),this.selectedPolicy=null},editData:function(){this.editablePolicy=!0,this.dialog=!0}},components:{Policy:l.a}}},349:function(t,e){},350:function(t,e){},351:function(t,e){},352:function(t,e){},353:function(t,e){},354:function(t,e){},355:function(t,e){},356:function(t,e){},357:function(t,e){},362:function(t,e,i){function n(t){i(354)}var a=i(11)(i(135),i(378),n,null,null);t.exports=a.exports},363:function(t,e,i){function n(t){i(353)}var a=i(11)(i(137),i(377),n,null,null);t.exports=a.exports},364:function(t,e,i){var n=i(11)(i(139),i(375),null,null,null);t.exports=n.exports},365:function(t,e,i){var n=i(11)(i(140),i(374),null,null,null);t.exports=n.exports},366:function(t,e,i){var n=i(11)(i(142),i(383),null,null,null);t.exports=n.exports},367:function(t,e,i){function n(t){i(357)}var a=i(11)(i(143),i(384),n,null,null);t.exports=a.exports},368:function(t,e,i){function n(t){i(356)}var a=i(11)(i(144),i(382),n,null,null);t.exports=a.exports},369:function(t,e,i){function n(t){i(355)}var a=i(11)(i(145),i(380),n,null,null);t.exports=a.exports},370:function(t,e,i){function n(t){i(351)}var a=i(11)(i(146),i(372),n,null,null);t.exports=a.exports},371:function(t,e,i){function n(t){i(352)}var a=i(11)(i(148),i(373),n,null,null);t.exports=a.exports},372:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("friend",{attrs:{friend:t.friends[t.selectedFriend],editable:t.editableFriend},on:{"close-dialog":function(e){t.dialog=arguments[0],t.selectedFriend=null}}})],1),t._v(" "),i("v-menu",{attrs:{"offset-y":"","position-absolutely":!0,"position-x":t.subMenu.x,"position-y":t.subMenu.y},model:{value:t.subMenu.show,callback:function(e){t.$set(t.subMenu,"show",e)},expression:"subMenu.show"}},[i("v-list",t._l(t.subMenu.items,function(e){return i("v-list-tile",{key:e.title,nativeOn:{click:function(i){t.subMenuAction(e.method)}}},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1),t._v(" "),i("p",{staticClass:"hidden-sm-and-down text-center caption"},[t._v("Aquí podrás invitar amigos")]),t._v(" "),t.friends.length>0?i("v-list",{attrs:{"three-line":""}},[i("v-layout",[i("v-flex",{staticClass:"text-center",attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:"","offset-md3":""}},[i("img",{staticClass:"img-responsive",attrs:{src:"/static/friends-top.png",alt:"friends"}})])],1),t._v(" "),t._l(t.friends,function(e,n){return[i("v-list-tile",{key:e.email,attrs:{ripple:!1,avatar:""},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!0},mousedown:function(e){t.selectFriend(n)},touchend:function(e){t.selectFriend(n)}}},[i("v-list-tile-avatar",[i("img",{attrs:{src:e.avatar}})]),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.fullName)}}),t._v(" "),i("v-list-tile-sub-title",{directives:[{name:"show",rawName:"v-show",value:e.email,expression:"friend.email"}],domProps:{textContent:t._s(e.email)}}),t._v(" "),i("v-list-tile-sub-title",{directives:[{name:"show",rawName:"v-show",value:e.phone,expression:"friend.phone"}],domProps:{textContent:t._s(e.phone)}})],1)],1),t._v(" "),n+1<t.friends.length?i("v-divider"):t._e()]})],2):i("h4",{staticClass:"text-center"},[t._v("¡No tienes amigos agregados!")])],1)},staticRenderFns:[]}},373:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("policy",{attrs:{policy:t.polices[t.selectedPolicy]},on:{"close-dialog":function(e){t.dialog=arguments[0],t.selectedPolicy=null}}})],1),t._v(" "),i("v-menu",{attrs:{"offset-y":"","position-absolutely":!0,"position-x":t.subMenu.x,"position-y":t.subMenu.y},model:{value:t.subMenu.show,callback:function(e){t.$set(t.subMenu,"show",e)},expression:"subMenu.show"}},[i("v-list",t._l(t.subMenu.items,function(e){return i("v-list-tile",{key:e.title,nativeOn:{click:function(i){t.subMenuAction(e.method)}}},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1),t._v(" "),i("p",{staticClass:"hidden-sm-and-down text-center caption"},[t._v("Aqui podras registrar tus polizas para llevar el control de vencimiento y pagos de las mismas")]),t._v(" "),t.polices.length>0?i("v-list",{attrs:{"two-line":""}},[i("v-layout",[i("v-flex",{staticClass:"text-center",attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:"","offset-md3":""}},[i("img",{staticClass:"img-responsive",attrs:{src:"/static/policies-top.png",alt:"policies"}})])],1),t._v(" "),t._l(t.polices,function(e,n){return[i("v-list-tile",{key:e.title,attrs:{ripple:!1},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!0},mousedown:function(e){t.selectPolicy(n)},touchend:function(e){t.selectPolicy(n)}}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v(t._s(e.title))]),t._v(" "),i("v-list-tile-sub-title",{staticClass:"grey--text text--darken-4"},[t._v(t._s(e.headline))]),t._v(" "),i("v-list-tile-sub-title",[t._v(t._s(e.subtitle))])],1),t._v(" "),i("v-list-tile-action",[i("v-list-tile-action-text",[t._v(t._s(e.action))])],1)],1),t._v(" "),n+1<t.polices.length?i("v-divider"):t._e()]})],2):i("h4",{staticClass:"text-center"},[t._v("¡No tienes polizas agregadas!")])],1)},staticRenderFns:[]}},374:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-tabs",{attrs:{scrollable:!1,dark:"",fixed:"",icons:"",centered:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("v-toolbar",{staticClass:"grey darken-4"},[i("v-toolbar-title",[i("img",{attrs:{src:"/static/logo-white.png",alt:"logo",height:"62px"}})]),t._v(" "),i("v-spacer"),t._v(" "),i("v-icon",{attrs:{dark:""}},[t._v("fa-bell")]),t._v(" "),i("v-menu",{attrs:{bottom:"",right:""}},[i("v-btn",{attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[i("v-icon",[t._v("more_vert")])],1),t._v(" "),i("v-list",t._l(t.options,function(e){return i("v-list-tile",{key:e.title,attrs:{to:e.route}},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),t._v(" "),i("v-tabs-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"grey darken-4",class:{"sticky-tab":t.stickyTab},attrs:{slot:"activators"},slot:"activators"},[i("v-tabs-slider",{staticClass:"grey lighten-4"}),t._v(" "),t._l(t.tabs,function(e){return i("v-tabs-item",{key:e.title,attrs:{href:e.title}},[i("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)})],2),t._v(" "),t._l(t.tabs,function(t){return i("v-tabs-content",{key:t.title,attrs:{id:t.title}},[i("v-card",[i("v-card-text",[i(t.component,{ref:"tabPage",refInFor:!0,tag:"component"})],1)],1)],1)})],2),t._v(" "),i("v-footer",{staticClass:"text-md-center text-xl-center text-lg-center hidden-xs-only"},[t._v("© 2017, Guia Seguro C.A")]),t._v(" "),i("v-fab-transition",[i("v-btn",{key:t.activeFab.icon,attrs:{primary:"",fixed:"",bottom:"",right:"",fab:""},nativeOn:{click:function(e){e.stopPropagation(),t.openDialog(e)}}},[i("img",{attrs:{src:t.activeFab.icon,height:"34px"}})])],1)],1)},staticRenderFns:[]}},375:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",[i("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:"","offset-md3":""}},[i("img",{staticClass:"img-responsive",attrs:{src:"static/logo-slogan.png",alt:"logo",height:"100px"}}),t._v(" "),i("v-text-field",{attrs:{label:"Correo Electrónico",min:"10",max:"100",required:"",value:t.email,counter:""}}),t._v(" "),i("v-text-field",{attrs:{label:"Introduce tu contraseña",hint:"Al menos 8 caracteres",min:"8",required:"","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"password":"text",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),i("v-btn",{attrs:{to:"Main"}},[t._v("\n          Entrar\n          "),i("span",{staticClass:"custom-loader",attrs:{slot:"loader"},slot:"loader"},[i("v-icon",{attrs:{light:""}},[t._v("cached")])],1)]),t._v(" "),i("v-btn",{attrs:{primary:"",dark:"",to:"Register"}},[t._v("\n          Registrarse\n        ")]),t._v(" "),i("img",{staticClass:"img-responsive",attrs:{src:"static/login.png",alt:"logo",height:"100px"}})],1)],1)],1)],1)},staticRenderFns:[]}},376:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-toolbar",{staticClass:"grey darken-4 white--text",attrs:{dark:""}},[i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.$emit("close-dialog",!1)}}},[i("v-icon",[t._v("close")])],1),t._v(" "),t.accident?i("v-toolbar-title",[t._v("Siniestro")]):i("v-toolbar-title",[t._v("Agregar Siniestro")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",{directives:[{name:"show",rawName:"v-show",value:t.editable,expression:"editable"}]},[i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.$emit("close-dialog",!1)}}},[t._v("Save")])],1)],1),t._v(" "),!t.editable&&t.accident?i("div",[i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[t._v("User Controls")]),t._v(" "),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Content filtering")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Set the content filtering level to restrict appts that can be downloaded")])],1)],1),t._v(" "),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Password")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1)],1):i("div")],1)},staticRenderFns:[]}},377:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-toolbar",{staticClass:"grey darken-4 white--text"},[i("v-btn",{attrs:{icon:"",to:"Main"}},[i("v-icon",{staticClass:"white--text"},[t._v("arrow_back")])],1),t._v(" "),i("v-toolbar-title",[t._v("Mi Cuenta")]),t._v(" "),i("v-spacer"),t._v(" "),i("div",{staticClass:"text-xs-right"},[i("img",{attrs:{src:"/static/logo-min.png",alt:"logo min",height:"44px"}})])],1),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",[i("v-card",[i("v-card-media",{attrs:{src:"https://facesofbellingham.files.wordpress.com/2010/09/3795.jpg",height:"300px"}},[i("v-layout",{staticClass:"media",attrs:{column:""}},[i("v-card-title",[i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"mr-3",attrs:{dark:"",icon:""}},[i("v-icon",[t._v("edit")])],1),t._v(" "),i("v-btn",{attrs:{dark:"",icon:""}},[i("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-card-title",{staticClass:"white--text pl-5 pt-5"},[i("div",{staticClass:"display-1 pl-5 pt-5"},[t._v("Ali Conners")])])],1)],1),t._v(" "),i("v-list",{attrs:{"two-line":""}},[i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{staticClass:"indigo--text"},[t._v("phone")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("(650) 555-1234")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Movile")])],1),t._v(" "),i("v-list-tile-action",[i("v-icon",{attrs:{dark:""}},[t._v("chat")])],1)],1),t._v(" "),i("v-list-tile",[i("v-list-tile-action"),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("(323) 555-6789")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Trabajo")])],1),t._v(" "),i("v-list-tile-action",[i("v-icon",{attrs:{dark:""}},[t._v("chat")])],1)],1),t._v(" "),i("v-divider",{attrs:{inset:""}}),t._v(" "),i("v-list-tile",[i("v-list-tile-action",[i("v-icon",{staticClass:"indigo--text"},[t._v("mail")])],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("aliconnors@example.com")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Personal")])],1)],1),t._v(" "),i("v-list-tile",[i("v-list-tile-action"),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[t._v("ali_connors@example.com")]),t._v(" "),i("v-list-tile-sub-title",[t._v("Trabajo")])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},378:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{light:""}},[i("router-view")],1)},staticRenderFns:[]}},379:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-toolbar",{staticClass:"grey darken-4",attrs:{dark:""}},[i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.$emit("close-dialog",!1)}}},[i("v-icon",[t._v("close")])],1),t._v(" "),t.policy?i("v-toolbar-title",[t._v("Póliza")]):i("v-toolbar-title",[t._v("Agregar Póliza")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",{directives:[{name:"show",rawName:"v-show",value:t.editable,expression:"editable"}]},[i("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.$emit("close-dialog",!1)}}},[t._v("Guardar")])],1)],1),t._v(" "),i(!t.editable&&t.policy?"div":"div")],1)},staticRenderFns:[]}},380:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:!1},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("accident",{attrs:{accident:t.getSelectedAccident,editable:t.editableAccident},on:{"close-dialog":function(e){t.dialog=arguments[0],t.editableAccident=null}}})],1),t._v(" "),i("v-menu",{attrs:{"offset-y":"","position-absolutely":!0,"position-x":t.subMenu.x,"position-y":t.subMenu.y},model:{value:t.subMenu.show,callback:function(e){t.$set(t.subMenu,"show",e)},expression:"subMenu.show"}},[i("v-list",t._l(t.subMenu.items,function(e){return i("v-list-tile",{key:e.title,nativeOn:{click:function(i){t.subMenuAction(e.method)}}},[i("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1),t._v(" "),i("p",{staticClass:"hidden-sm-and-down text-center caption"},[t._v("Aquí podas registrar los siniestros que hayan ocurrido")]),t._v(" "),i("v-list",{attrs:{"two-line":""}},[i("v-layout",[i("v-flex",{staticClass:"text-center",attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:"","offset-md3":""}},[i("img",{staticClass:"img-responsive",attrs:{src:"/static/accidents-top.png",alt:"accidents"}})])],1),t._v(" "),t._l(t.items,function(e,n){return[i("v-subheader",{domProps:{textContent:t._s(e.date)}}),t._v(" "),t._l(e.accidents,function(a,s){return[i("v-list-tile",{key:a.id,attrs:{ripple:!1},nativeOn:{click:function(e){e.stopPropagation(),t.dialog=!0},mousedown:function(e){t.selectAccident(n,s)},touchend:function(e){t.selectAccident(n,s)}}},[i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(a.policy)}}),t._v(" "),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(a.description)}})],1)],1),t._v(" "),s+1<e.accidents.length?i("v-divider"):t._e()]})]}),t._v(" "),i("h4",{directives:[{name:"show",rawName:"v-show",value:t.items.length<=0,expression:"items.length <= 0"}],staticClass:"text-center"},[t._v("¡No tienes siniestros agregados!")])],2)],1)},staticRenderFns:[]}},381:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-toolbar",{staticClass:"grey darken-4",attrs:{dark:""}},[i("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.$emit("close-dialog",!1)}}},[i("v-icon",[t._v("close")])],1),t._v(" "),t.friend?i("v-toolbar-title",[t._v(t._s(t.friend.fullName))]):i("v-toolbar-title",[t._v("Agregar Amigo")]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.friend.fullName&&!t.mutableEditable,expression:"friend.fullName && !mutableEditable"}],attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.mutableEditable=!0}}},[t._v("Editar")]),t._v(" "),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.mutableEditable,expression:"mutableEditable"}],attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.$emit("close-dialog",!1)}}},[t._v("Guardar")])],1)],1),t._v(" "),!t.mutableEditable&&t.friend.fullName?i("div",[i("v-flex",{attrs:{xs12:"",sm12:"",md12:"","align-center":"","justify-center":""}},[i("v-avatar",{staticClass:"mt-3",attrs:{size:"200px"}},[i("img",{attrs:{src:t.friend.avatar,alt:"avatar"}})])],1),t._v(" "),i("v-list",{attrs:{"three-line":"",subheader:""}},[i("v-subheader",[t._v("Datos de Contacto")]),t._v(" "),i("v-list-tile",{directives:[{name:"show",rawName:"v-show",value:t.friend.phone,expression:"friend.phone"}],attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Numero de Telefono")]),t._v(" "),i("v-list-tile-sub-title",[t._v(t._s(t.friend.phone))])],1)],1),t._v(" "),i("v-list-tile",{directives:[{name:"show",rawName:"v-show",value:t.friend.email,expression:"friend.email"}],attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Correo Electrónico")]),t._v(" "),i("v-list-tile-sub-title",[t._v(t._s(t.friend.email))])],1)],1)],1),t._v(" "),i("v-list",{attrs:{subheader:""}},[i("v-subheader",[t._v("Datos Adicionales")]),t._v(" "),i("v-list-tile",{attrs:{avatar:""}},[i("v-list-tile-content",[i("v-list-tile-title",[t._v("Estado de amistad")]),t._v(" "),i("v-list-tile-sub-title",{staticClass:"text--green"},[t._v("solicitud aceptada")])],1)],1)],1)],1):i("div",[i("v-container",[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",sm6:""}},[i("v-text-field",{attrs:{label:"Nombres",required:""},model:{value:t.friend.fullName,callback:function(e){t.$set(t.friend,"fullName",e)},expression:"friend.fullName"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:"",sm6:""}},[i("v-text-field",{attrs:{label:"Apellidos",required:""},model:{value:t.friend.fullName,callback:function(e){t.$set(t.friend,"fullName",e)},expression:"friend.fullName"}})],1)],1),t._v(" "),i("v-layout",[i("v-flex",[i("v-text-field",{attrs:{label:"Numero telefónico"},model:{value:t.friend.phone,callback:function(e){t.$set(t.friend,"phone",e)},expression:"friend.phone"}})],1)],1),t._v(" "),i("v-layout",[i("v-flex",[i("v-text-field",{attrs:{label:"Correo electrónico"},model:{value:t.friend.email,callback:function(e){t.$set(t.friend,"email",e)},expression:"friend.email"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:"","justify-space-between":""}},[i("v-flex",[i("v-btn",{staticClass:"black--text",attrs:{primary:""}},[i("v-icon",{attrs:{medium:"",left:""}},[t._v("fa-mobile")]),t._v("Agenda Telefónica")],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},382:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-toolbar",{staticClass:"grey darken-4 white--text"},[i("v-btn",{attrs:{icon:"",to:"Main"}},[i("v-icon",{staticClass:"white--text"},[t._v("arrow_back")])],1),t._v(" "),i("v-toolbar-title",[t._v("Mi Cartera")]),t._v(" "),i("v-spacer"),t._v(" "),i("div",{staticClass:"text-xs-right"},[i("img",{attrs:{src:"/static/logo-min.png",alt:"logo min",height:"44px"}})])],1),t._v(" "),i("main",[i("v-container",[i("v-layout",[i("v-flex",{attrs:{md7:""}},[i("v-card",{staticClass:"blue-grey darken-2 white--text"},[i("v-card-title",{attrs:{"primary-title":""}},[i("h4",{staticClass:"white--text"},[t._v("Titular: Ali Conners.")]),t._v(" "),i("p",{staticClass:"c"},[t._v("Los datos básicos de beneficiario son tomados de tus datos de registro.")])]),t._v(" "),i("v-card-actions",[i("v-btn",{attrs:{flat:"",dark:"",to:"Account"}},[t._v("Ir a mi cuenta")])],1)],1)],1)],1),t._v(" "),i("v-layout",[t.banks.length>0?i("v-flex",{attrs:{md12:""}},[i("span",{staticClass:"text-md-center"},[t._v("Mis cuentas bancarias")]),t._v(" "),i("v-list",{attrs:{"two-line":""}},t._l(t.banks,function(e,n){return i("v-list-tile",{directives:[{name:"long-press",rawName:"v-long-press",value:t.toggleSubMenu,expression:"toggleSubMenu"}],key:e.title,attrs:{ripple:!1},on:{contextmenu:t.toggleSubMenu},nativeOn:{mousedown:function(e){t.selectPolicy(n)}}},[i("v-list-tile-avatar",[i("img",{attrs:{src:"http://laguiadeldia.com/static/uploads/logos/logo_mercantil_11.png"}})]),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",[i("span",{staticClass:"hidden-md-and-down"},[t._v("Nº Cuenta: ")]),t._v(t._s(e.number))]),t._v(" "),i("v-list-tile-sub-title",[t._v(t._s(e.account))])],1),t._v(" "),n+1<t.banks.length?i("v-divider"):t._e()],1)}))],1):t._e()],1)],1)],1),t._v(" "),i("v-btn",{staticClass:"green accent-4",attrs:{fixed:"",bottom:"",right:"",fab:""}},[i("v-icon",[t._v("fa-credit-card")])],1)],1)},staticRenderFns:[]}},383:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",[i("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:"","offset-md3":""}},[i("h4",[t._v("Crear nueva cuenta")]),t._v(" "),i("v-stepper",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[i("v-stepper-header",[i("v-stepper-step",{attrs:{step:"1",complete:t.step>1}},[t._v("Correo electrónico")]),t._v(" "),i("v-divider"),t._v(" "),i("v-stepper-step",{attrs:{step:"2",complete:t.step>2}},[t._v("Datos Personales")]),t._v(" "),i("v-divider"),t._v(" "),i("v-stepper-step",{attrs:{step:"3"}},[t._v("Seguridad")])],1),t._v(" "),i("v-stepper-content",{attrs:{step:"1"}},[i("v-card",{staticClass:"mb-5",attrs:{height:"200px"}},[i("v-text-field",{attrs:{label:"Correo Electronico",min:"10",max:"100",value:t.email,counter:""}})],1),t._v(" "),i("v-btn",{attrs:{primary:""},nativeOn:{click:function(e){t.step=2}}},[t._v("Continuar")]),t._v(" "),i("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Cancelar")])],1),t._v(" "),i("v-stepper-content",{attrs:{step:"2"}},[i("v-card",{staticClass:"mb-5",attrs:{height:"200px"}},[i("v-text-field",{attrs:{label:"Numero de Telefono",min:"10",max:"30",value:t.phone,type:"phone",counter:""}})],1),t._v(" "),i("v-btn",{attrs:{primary:""},nativeOn:{click:function(e){t.step=3}}},[t._v("Continuar")]),t._v(" "),i("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Cancelar")])],1),t._v(" "),i("v-stepper-content",{attrs:{step:"3"}},[i("v-card",{staticClass:"mb-5",attrs:{height:"200px"}},[i("v-text-field",{attrs:{label:"Introduce tu contraseña",hint:"Al menos 8 caracteres",min:"8","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"password":"text",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),i("v-text-field",{attrs:{label:"Repite tu contraseña",hint:"Al menos 8 caracteres",min:"8","append-icon":t.e1?"visibility":"visibility_off","append-icon-cb":function(){return t.e1=!t.e1},type:t.e1?"password":"text",counter:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),i("v-btn",{attrs:{success:"",to:"/main"}},[t._v("Finalizar")]),t._v(" "),i("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Cancelar")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},384:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-toolbar",{staticClass:"grey darken-4  white--text"},[i("v-btn",{attrs:{icon:"",to:"Main"}},[i("v-icon",{staticClass:"white--text"},[t._v("arrow_back")])],1),t._v(" "),i("v-toolbar-title",[t._v("Soporte")])],1)],1)},staticRenderFns:[]}},390:function(t,e){},391:function(t,e,i){i(131),t.exports=i(130)},92:function(t,e,i){var n=i(11)(i(147),null,null,null,null);t.exports=n.exports}},[391]);