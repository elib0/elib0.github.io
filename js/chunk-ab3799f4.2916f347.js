(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ab3799f4"],{"0766":function(e,t,a){"use strict";var n=a("302c"),s=a.n(n);s.a},"0c14":function(e,t,a){"use strict";var n=a("8065"),s=a.n(n);s.a},"302c":function(e,t,a){},3907:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"organizer-page"},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",[a("roma-organizer",{directives:[{name:"show",rawName:"v-show",value:"organizer-unit"!==e.$route.name&&"organizer-advance"!==e.$route.name,expression:"$route.name !== 'organizer-unit' && $route.name !== 'organizer-advance'"}],attrs:{expanded:!1,school:e.school}})],1)],1),a("roma-unit-list",{directives:[{name:"show",rawName:"v-show",value:"organizer"===e.$route.name,expression:"$route.name === 'organizer'"}],attrs:{school:e.school}}),a("router-view")],1)],1)},s=[],r=a("2b0e"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"roma-organizer"},[a("v-expansion-panels",{attrs:{accordion:"",elevation:"0"},model:{value:e.isExpanded,callback:function(t){e.isExpanded=t},expression:"isExpanded"}},[a("v-expansion-panel",[a("v-expansion-panel-header",{staticClass:"text-center",attrs:{"expand-icon":"fa-caret-down"}},[a("h2",{staticClass:"text-uppercase",domProps:{innerHTML:e._s(e.$vuetify.lang.t("$vuetify.component.romaOrganizer.title"))}})]),a("v-expansion-panel-content",[a("v-row",{staticClass:"filters"},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-card",{attrs:{color:"grey lighten-4 px-4"}},[a("v-row",{staticClass:"advanced-filters"},[a("v-col",{attrs:{cols:"12",sm:"6",md:"2"}},[a("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},"item-color":"primary",color:"primary","prepend-inner-icon":"far fa-calendar-check",dense:"",items:e.planeFilters,label:e.$vuetify.lang.t("$vuetify.component.romaOrganizer.annualPlan")},model:{value:e.selectedPlan,callback:function(t){e.selectedPlan=t},expression:"selectedPlan"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"2"}},[a("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},"item-color":"primary",color:"primary","prepend-inner-icon":"far fa-file-excel",dense:"",items:e.school.unitplans,"item-text":"name",label:e.$vuetify.lang.t("$vuetify.component.romaOrganizer.unit")},model:{value:e.selectedUnit,callback:function(t){e.selectedUnit=t},expression:"selectedUnit"}})],1),a("v-col",{attrs:{cols:"12",sm:"12",md:"2"}},[a("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},color:"roma_rcolor","prepend-inner-icon":"fa-book",dense:"",items:e.subjectFilters,"item-text":"name",label:e.$vuetify.lang.t("$vuetify.component.romaOrganizer.subject")},model:{value:e.selectedSubject,callback:function(t){e.selectedSubject=t},expression:"selectedSubject"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"2"}},[a("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},color:"secondary","prepend-inner-icon":"fa-sort-alpha-up-alt",dense:"",items:e.courseFilters,label:e.$vuetify.lang.t("$vuetify.component.romaOrganizer.course")},model:{value:e.selectedCurse,callback:function(t){e.selectedCurse=t},expression:"selectedCurse"}})],1),a("v-col",{attrs:{sm:"6",md:"2"}},[a("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},color:"roma_acolor","prepend-inner-icon":"fa-sort-numeric-up-alt",dense:"",items:e.levelFilters,label:e.$vuetify.lang.t("$vuetify.component.romaOrganizer.level")},model:{value:e.selectedLevel,callback:function(t){e.selectedLevel=t},expression:"selectedLevel"}})],1),a("v-col",{attrs:{sm:"6",md:"2"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"mask"}],attrs:{label:"Avance",suffix:"%"}})],1)],1)],1)],1)],1),a("v-row",[a("v-col",{staticClass:"text-center"},[a("v-btn",{attrs:{small:"",color:"primary"}},[e._v("\n                "+e._s(e.$vuetify.lang.t("$vuetify.generals.search"))+"\n              ")])],1)],1)],1)],1)],1)],1)},i=[],o=a("3a60"),c=r["a"].extend({name:"RomaOrganizer",props:{school:{type:Object,required:!0},expanded:{type:Boolean,default:!1}},data:function(){return{mask:"###",expand:this.expanded,menuStartDate:!1,menuEndDate:!1,startDate:(new Date).toISOString().substr(0,10),endDate:(new Date).toISOString().substr(0,10),selectedPlan:"",selectedUnit:"",selectedSubject:"",selectedCurse:"",selectedLevel:""}},computed:{isExpanded:{get:function(){return this.expanded&&this.school.unitplans.length>0?0:-1},set:function(e){this.expand=e}},planeFilters:function(){return this.school.unitplans.map((function(e){return new Date(e.startDate).getFullYear()}))},subjectFilters:function(){return this.school.unitplans.map((function(e){return e.subject}))},courseFilters:function(){return this.school.unitplans.map((function(e){return e.course}))},levelFilters:function(){return this.school.unitplans.map((function(e){return e.level}))}},directives:{mask:o["mask"]}}),u=c,d=(a("814d"),a("2877")),v=a("6544"),m=a.n(v),f=a("8336"),p=a("b0af"),h=a("62ad"),b=a("cd55"),g=a("49e2"),x=a("c865"),q=a("0393"),y=a("0fd9"),_=a("b974"),w=a("8654"),k=Object(d["a"])(u,l,i,!1,null,null,null),D=k.exports;m()(k,{VBtn:f["a"],VCard:p["a"],VCol:h["a"],VExpansionPanel:b["a"],VExpansionPanelContent:g["a"],VExpansionPanelHeader:x["a"],VExpansionPanels:q["a"],VRow:y["a"],VSelect:_["a"],VTextField:w["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"roma-unit-list"},[a("roma-confirm-dialog",{attrs:{"action-btn-ok":e.delUnit},model:{value:e.dialogDeleteUnit,callback:function(t){e.dialogDeleteUnit=t},expression:"dialogDeleteUnit"}},[e._v("\n    ¿Realmente deseas eliminar la unidad seleccionada?\n  ")]),a("roma-unit-modal-form",{ref:"unitModalForm",attrs:{school:e.school},model:{value:e.showUnitModalForm,callback:function(t){e.showUnitModalForm=t},expression:"showUnitModalForm"}}),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[a("v-btn",{staticClass:"grey--text text--darken-2",attrs:{small:"",text:""},on:{click:function(t){e.showUnitModalForm=!0}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[e._v("fa-plus")]),e._v(" Agregar Unidad\n      ")],1)],1)],1),a("v-row",{staticClass:"unit-list"},[a("my-transition",{attrs:{group:""}},e._l(e.school.unitplans,(function(t,n){return a("v-col",{key:n,staticClass:"pa-1",attrs:{cols:"12"}},[a("roma-unit",{attrs:{unit:t,index:t.id},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.unit;return[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"text-center"},[a("h3",[e._v("% OAs Planificados")])]),a("div",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{rotate:360,size:80,width:15,value:0,color:"roma_rcolor"}},[e._v("\n                    0%\n                  ")])],1),a("div",{staticClass:"subtitle-2 text-center"},[e._v("\n                  avance curricular:"),a("span",{staticClass:"primary--text"},[e._v(" 0%")])])]),a("v-col",{staticClass:"ml-auto",attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"buttons",attrs:{align:"end"}},[a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[a("v-btn",{attrs:{block:"",small:"",color:"white"}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-print")]),e._v(" Generar Reporte\n                      ")],1)],1)],1),a("v-row",[a("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-btn",e._g({attrs:{block:"",small:"",color:"secondary"}},n),[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("fa-cog")]),e._v(" Opciones\n                          ")],1)]}}],null,!0)},[a("v-list",[a("v-list-item",{on:{click:function(t){return e.editUnit(n)}}},[a("v-list-item-title",[e._v("Editar Unidad")])],1),a("v-list-item",{on:{click:function(t){return e.goDelUnit(n)}}},[a("v-list-item-title",[e._v("Eliminar")])],1),a("v-list-item",{attrs:{to:{name:"organizer-unit",params:{id:n.id}}}},[a("v-list-item-title",[e._v("Detalles/Edición OAs/IEs")])],1),a("v-list-item",{directives:[{name:"show",rawName:"v-show",value:n.coverage.length>0,expression:"unit.coverage.length > 0"}],attrs:{to:{name:"organizer-advance",params:{id:n.id}}}},[a("v-list-item-title",[e._v("Registrar Avance")])],1)],1)],1)],1)],1)],1)])],1)]}}],null,!0)})],1)})),1),a("v-col",{directives:[{name:"show",rawName:"v-show",value:e.school.unitplans&&e.school.unitplans.length<=0,expression:"school.unitplans && school.unitplans.length <= 0"}]},[a("h4",{staticClass:"text-center"},[e._v("\n        ¡No hay Unidades agregadas en este momento o con ese criterio de búsqueda por favor usa el botón\n        "),a("v-btn",{staticClass:"grey--text text--darken-2",attrs:{small:"",text:""},on:{click:function(t){e.showUnitModalForm=!0}}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[e._v("fa-plus")]),e._v(" Agregar Unidad\n        ")],1),e._v("\n        para agregar una nueva unidad!\n      ")],1)])],1)],1)},$=[],C=a("5e42"),O=a("6741"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"roma-unit-modal-form"},[a("input",{attrs:{type:"hidden"},domProps:{value:e.showing}}),a("v-dialog",{attrs:{persistent:e.persistent,"overlay-color":"black","max-width":e.maxWidth,"overlay-opacity":e.overlayOpacity},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("\n        Agregar Nueva Unidad\n      ")]),a("v-card-text",[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{required:"",items:e.unitNames,rules:[function(e){return!!e||"La Unidad es requerida"}],label:"Unidad",clearable:"",dense:""},model:{value:e.request.name,callback:function(t){e.$set(e.request,"name",t)},expression:"request.name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{required:"",dense:"",clearable:"",counter:"100",rules:[function(e){return!!e||"La descripción es requerida"},function(e){return e&&e.length<=100&&e.length>2||"La descripción debe contener entre 3 a 100 caracteres"}],label:"Descripción Unidad"},model:{value:e.request.name2,callback:function(t){e.$set(e.request,"name2",t)},expression:"request.name2"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{required:"",items:e.roma,"return-object":"",rules:[function(e){return!!e||"El nivel de Educación es requerido"}],label:"Seleccione el nivel de Educación","item-text":"name","item-value":"subjects",clearable:"",dense:""},model:{value:e.request.schoolLevel,callback:function(t){e.$set(e.request,"schoolLevel",t)},expression:"request.schoolLevel"}})],1),a("v-fade-transition",[e.request.schoolLevel?a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-autocomplete",{attrs:{required:"",items:e.request.schoolLevel.subjects,"return-object":"",rules:[function(e){return!!e||"La Asignatura es requerida"}],label:"Seleccione la Asignatura","item-text":"name",clearable:"",dense:""},model:{value:e.request.subject,callback:function(t){e.$set(e.request,"subject",t)},expression:"request.subject"}})],1):e._e()],1)],1),a("v-fade-transition",[e.request.schoolLevel&&e.request.subject?a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:e.request.subject.levels,rules:[function(e){return!!e||"El nivel de Asignatura es requerido"}],label:"Seleccione el nivel de Asignatura",clearable:"",dense:""},scopedSlots:e._u([{key:"selection",fn:function(t){var a=t.item;return[e._v("\n                    "+e._s(a+"° "+e.request.schoolLevel.name)+"\n                  ")]}},{key:"item",fn:function(t){var a=t.item;return[e._v("\n                    "+e._s(a+"° "+e.request.schoolLevel.name)+"\n                  ")]}}],null,!1,2149837820),model:{value:e.request.level,callback:function(t){e.$set(e.request,"level",t)},expression:"request.level"}})],1),a("v-fade-transition",[e.request.level?a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:e.courses,rules:[function(e){return!!e||"El Curso es requerido"}],label:"Seleccione el Curso",clearable:"",dense:""},scopedSlots:e._u([{key:"selection",fn:function(t){var a=t.item;return[e._v("\n                      "+e._s(e.request.level+"° "+a)+"\n                    ")]}},{key:"item",fn:function(t){var a=t.item;return[e._v("\n                      "+e._s(e.request.level+"° "+a)+"\n                    ")]}}],null,!1,2889903676),model:{value:e.request.course,callback:function(t){e.$set(e.request,"course",t)},expression:"request.course"}})],1):e._e()],1)],1):e._e()],1),a("v-fade-transition",{attrs:{group:""}},[e.request.schoolLevel&&e.request.subject?a("v-row",{key:0},[a("v-col",{attrs:{sm:"12"}},[a("h3",{staticClass:"text-center"},[e._v("Plan anual")])]),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-menu",{ref:"startDate",attrs:{"close-on-content-click":!1,"return-value":e.request.startDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.request,"startDate",t)},"update:return-value":function(t){return e.$set(e.request,"startDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{required:"",rules:[function(e){return!!e||"La fecha de inicio es requerida"}],label:"Inicio","prepend-icon":"far fa-calendar-alt",clearable:"",readonly:""},model:{value:e.request.startDate,callback:function(t){e.$set(e.request,"startDate",t)},expression:"request.startDate"}},n))]}}],null,!1,3049149416),model:{value:e.startDateMenu,callback:function(t){e.startDateMenu=t},expression:"startDateMenu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.request.startDate,callback:function(t){e.$set(e.request,"startDate",t)},expression:"request.startDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.startDateMenu=!1}}},[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.cancel")))]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.startDate.save(e.request.startDate)}}},[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.accept")))])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-menu",{ref:"endtDate",attrs:{"close-on-content-click":!1,"return-value":e.request.endDate,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.request,"endDate",t)},"update:return-value":function(t){return e.$set(e.request,"endDate",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({attrs:{required:"",rules:[function(e){return!!e||"La fecha final es requerida"}],label:"Fin","prepend-icon":"far fa-calendar-alt",clearable:"",readonly:""},model:{value:e.request.endDate,callback:function(t){e.$set(e.request,"endDate",t)},expression:"request.endDate"}},n))]}}],null,!1,3162755531),model:{value:e.endDateMenu,callback:function(t){e.endDateMenu=t},expression:"endDateMenu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.request.endDate,callback:function(t){e.$set(e.request,"endDate",t)},expression:"request.endDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.endDateMenu=!1}}},[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.cancel")))]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.endtDate.save(e.request.endDate)}}},[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.accept")))])],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"####",expression:"'####'"}],attrs:{autofocus:"",label:"Duración (Horas)"},model:{value:e.request.hours,callback:function(t){e.$set(e.request,"hours",t)},expression:"request.hours"}})],1)],1):e._e()],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:e.units.length>0&&!e.request.id,expression:"units.length > 0 && !request.id"}]},[a("v-col",{attrs:{cols:"12"}},[a("v-autocomplete",{attrs:{items:e.units,"return-object":"",label:"Duplicar de unidad ya existente","item-text":"name",clearable:"",dense:""},on:{change:e.cloneUnit},model:{value:e.selectedUnit,callback:function(t){e.selectedUnit=t},expression:"selectedUnit"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"red",text:""},on:{click:function(t){return e.show(!1)}}},[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.cancel")))]),a("v-btn",{attrs:{color:"secondary",disabled:!e.valid},on:{click:e.setUnit}},[e._v(e._s(e.$vuetify.lang.t("$vuetify.generals.accept")))])],1)],1)],1)],1)},V=[],S=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),L=a("2f62"),F=a("e841"),E=a("2504"),M=a("54a6");function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(S["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function R(){return{school_id:null,name:"Unidad 1",name2:"",hours:"00",subject:null,schoolLevel:null,level:null,course:null,year:(new Date).getFullYear(),startDate:(new Date).toISOString().substr(0,10),endDate:(new Date).toISOString().substr(0,10),oas:[]}}var A=r["a"].extend({name:"RomaUnitModalForm",updated:function(){},props:{value:Boolean,unit:Object,school:{type:Object,required:!0},maxWidth:{type:String,default:"800"},overlayOpacity:{type:String,default:"0.8"},persistent:{type:Boolean,default:!0}},data:function(){return{request:R(),selectedUnit:null,valid:!1,loading:!1,showing:this.value,startDateMenu:!1,endDateMenu:!1,courses:["A","B","C","D","E","F"]}},computed:z({units:function(){return E["a"].all()},unitNames:function(){for(var e=[],t=1;t<=7;t++)e.push("Unidad "+t);return e}},Object(L["b"])(["roma"])),methods:{show:function(e){this.$emit("input",e),this.request=R(),console.log(this.request),this.selectedUnit=null},setUnit:function(){this.request.school_id=this.school.id,this.request.id&&delete this.request.oas;var e=this.request;E["a"].insertOrUpdate({data:this.request}).then((function(t){if(!e.id){var a=F["a"].all();a=a.map((function(e){return{unitplan_id:t.unit_plans[0].id,oa_id:e.id}})),M["a"].insert({data:a})}})),this.show(!1),this.request=R()},cloneUnit:function(){this.request.name2=this.selectedUnit.name2,this.request.subject=this.selectedUnit.subject,this.request.schoolLevel=this.selectedUnit.schoolLevel,this.request.level=this.selectedUnit.level,this.request.course=this.selectedUnit.course,this.request.year=this.selectedUnit.year,this.request.startDate=this.selectedUnit.startDate,this.request.endDate=this.selectedUnit.endDate}},directives:{mask:o["mask"]}}),N=A,I=(a("0766"),a("c6a6")),B=a("99d9"),T=a("2e4b"),Y=a("169a"),H=a("0789"),J=a("4bd4"),W=a("e449"),G=a("2fa4"),K=Object(d["a"])(N,j,V,!1,null,"4a2cd44c",null),Q=K.exports;m()(K,{VAutocomplete:I["a"],VBtn:f["a"],VCard:p["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VCol:h["a"],VDatePicker:T["a"],VDialog:Y["a"],VFadeTransition:H["c"],VForm:J["a"],VMenu:W["a"],VRow:y["a"],VSelect:_["a"],VSpacer:G["a"],VTextField:w["a"]});var X=a("41c7"),Z=a("cd29"),ee=a("5a01"),te=Object(C["b"])("unit-list-transition");r["a"].component("my-transition",te);var ae=r["a"].extend({name:"RomaUnitList",props:{school:{type:Object,required:!0}},data:function(){return{dialogDeleteUnit:!1,selectedUnit:null,showUnitModalForm:!1}},methods:{editUnit:function(e){this.$refs.unitModalForm.request=e,this.showUnitModalForm=!0},goDelUnit:function(e){this.dialogDeleteUnit=!0,this.selectUnit(e)},delUnit:function(){var e=this;E["a"].delete(this.selectedUnit.id),M["a"].delete((function(t){return t.unitplan_id===e.selectedUnit.id})),Z["a"].delete((function(t){return t.unitplan_id===e.selectedUnit.id})),ee["a"].delete((function(t){return t.unitplan_id===e.selectedUnit.id})),this.dialogDeleteUnit=!1},selectUnit:function(e){this.selectedUnit=e}},components:{RomaUnit:O["a"],RomaConfirmDialog:X["a"],RomaUnitModalForm:Q}}),ne=ae,se=(a("7312"),a("132d")),re=a("8860"),le=a("da13"),ie=a("5d23"),oe=a("490a"),ce=Object(d["a"])(ne,U,$,!1,null,null,null),ue=ce.exports;m()(ce,{VBtn:f["a"],VCol:h["a"],VIcon:se["a"],VList:re["a"],VListItem:le["a"],VListItemTitle:ie["c"],VMenu:W["a"],VProgressCircular:oe["a"],VRow:y["a"]});var de=a("9664"),ve=r["a"].extend({name:"OrganizerPage",props:{},data:function(){return{}},computed:{school:function(){var e=this.$store.state.organizer.selectedSchool.id;return de["a"].query().whereId(e).with("unitplans",(function(e){e.with("coverage")})).first()}},beforeRouteEnter:function(e,t,a){a((function(e){return!!e.school||{name:"home"}}))},components:{RomaOrganizer:D,RomaUnitList:ue}}),me=ve,fe=(a("0c14"),a("a523")),pe=Object(d["a"])(me,n,s,!1,null,null,null);t["default"]=pe.exports;m()(pe,{VCol:h["a"],VContainer:fe["a"],VRow:y["a"]})},7312:function(e,t,a){"use strict";var n=a("bd71"),s=a.n(n);s.a},8065:function(e,t,a){},"814d":function(e,t,a){"use strict";var n=a("a194"),s=a.n(n);s.a},a194:function(e,t,a){},bd71:function(e,t,a){}}]);
//# sourceMappingURL=chunk-ab3799f4.2916f347.js.map