(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a52162f"],{"1beb":function(t,e,a){},"34fc":function(t,e,a){},4131:function(t,e,a){"use strict";var n=a("1beb"),s=a.n(n);s.a},6741:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"roma-unit"},[a("v-row",{staticClass:"pa-4"},[a("v-col",{attrs:{cols:"12",md:t.md}},[a("h3",{staticClass:"title"},[t._v("\n        "+t._s(t.unit.name)+" -\n        "),a("span",{staticClass:"text-uppercase font-weight-regular"},[t._v(t._s(t.unit.subject.name))]),t._v(" -\n        "),a("span",{staticClass:"subtitle-1"},[t._v("\n          "+t._s(t.unit.level+t.appendToLevel(t.unit.level))+" "+t._s(t.unit.schoolLevel.name)+"\n          "),a("span",{staticClass:"text-uppercase"},[t._v('"'+t._s(t.unit.course)+'"')])])]),t._t("details",null,{unit:t.unit}),a("v-row",[a("v-col",{attrs:{cols:"12"}},[t._v("\n          Total: "),a("span",{staticClass:"primary--text"},[t._v("0h")]),t._v(" |\n          OAs: "),a("span",{staticClass:"primary--text"},[t._v("0")]),t._v(" |\n          Actividades: "),a("span",{staticClass:"primary--text"},[t._v("0")]),t._v(" |\n          Comentarios: "),a("span",{staticClass:"primary--text"},[t._v("0")]),t._v(" |\n          Estado: "),a("span",{staticClass:"primary--text"},[t._v("Cerrado")])])],1),a("v-row",{staticClass:"caption"},[a("v-col",[t._v("Fecha inicio: "+t._s(t.unit.startDate)+" | fin: "+t._s(t.unit.endDate))])],1)],2),a("v-col",{attrs:{cols:"12",md:12-t.md}},[t._t("default",null,{unit:t.unit})],2)],1)],1)},s=[],r=(a("c5f6"),a("2b0e")),i={1:"ero",2:"do",3:"ero",4:"to",5:"to",6:"to",7:"mo",8:"vo",9:"no"},o=r["a"].extend({name:"RomaUnit",props:{md:{type:Number,default:6},unit:{type:Object,required:!0},menu:{type:Array,default:function(){return[{label:"Editar",action:null,route:null},{label:"Eliminar",action:null,route:null},{label:"Vista detalles",action:null,route:null}]}},index:Number},data:function(){return{}},methods:{appendToLevel:function(t){return i[t]}}}),l=o,c=(a("df9c"),a("2877")),u=a("6544"),d=a.n(u),p=a("b0af"),v=a("62ad"),f=a("0fd9"),h=Object(c["a"])(l,n,s,!1,null,null,null);e["a"]=h.exports;d()(h,{VCard:p["a"],VCol:v["a"],VRow:f["a"]})},b0af:function(t,e,a){"use strict";a("8e6e"),a("ac6a"),a("456d");var n=a("bd86"),s=(a("c5f6"),a("615b"),a("10d2")),r=a("297c"),i=a("1c87"),o=a("58df");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(a,!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(o["a"])(r["a"],i["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return c({"v-card":!0},i["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.loading||this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},s["a"].options.computed.classes.call(this))},styles:function(){var t=c({},s["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},df9c:function(t,e,a){"use strict";var n=a("34fc"),s=a.n(n);s.a},e9c4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"organizer-unit"},[t._m(0),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("roma-unit",{attrs:{unit:t.unit,md:10}},[void 0],2)],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"text-center"},[a("span",{staticClass:"font-weight-regular"},[t._v("Detalles")])])}],r=a("2b0e"),i=a("6741"),o=r["a"].extend({name:"OrganizerUnit",beforeRouteEnter:function(t,e,a){a()},props:{},data:function(){return{}},computed:{unit:function(){return this.$store.getters.getUnitBy("id",this.$route.params.id)}},components:{RomaUnit:i["a"]}}),l=o,c=(a("4131"),a("2877")),u=a("6544"),d=a.n(u),p=a("62ad"),v=a("0fd9"),f=Object(c["a"])(l,n,s,!1,null,null,null);e["default"]=f.exports;d()(f,{VCol:p["a"],VRow:v["a"]})}}]);
//# sourceMappingURL=chunk-3a52162f.f075d8eb.js.map