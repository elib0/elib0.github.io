(function(t){function e(e){for(var a,i,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);b&&b(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-295353d1":"a42293a6","chunk-592fd9b4":"112826ee","chunk-7feb96ee":"fc154250"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-295353d1":1,"chunk-592fd9b4":1,"chunk-7feb96ee":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-295353d1":"2ca2ccdb","chunk-592fd9b4":"1aded41b","chunk-7feb96ee":"917aa5d3"}[t]+".css",r=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[t],b.parentNode.removeChild(b),n(s)},b.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){i[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(b);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}r[t]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var b=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0f9d":function(t,e,n){},1166:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("2504"),l=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),skill_id:this.number(null),unitplan_id:this.number(null),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),skill:this.hasOne("","id"),unitplan:this.hasOne(u["a"],"id")}}}]),e}(c["a"]);l.entity="unit_plan_skills"},"13e3":function(t,e,n){},"14f0":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),oa_id:this.number(0),cod:this.string(""),name:this.string(""),rescheduled:this.number(0),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10))}}}]),e}(c["a"]);u.entity="ies"},"15ca":function(t,e,n){"use strict";var a=n("d893"),i=n.n(a);i.a},1771:function(t,e,n){var a={"./logo-roma-min.png":"2219","./logo-roma.png":"dbc0","./logo.svg":"9b19","./unprofile.png":"e40b","./wall-colors.svg":"f56e"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="1771"},"1e24":function(t,e,n){},"21bb":function(t,e,n){"use strict";var a=n("0f9d"),i=n.n(a);i.a},2219:function(t,e,n){t.exports=n.p+"img/logo-roma-min.a402592f.png"},2504:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("e841"),l=n("54a6"),d=n("9664"),b=n("5a01"),f=n("923c"),h=n("1166"),O=n("e6b7"),p=n("be64"),g=n("dde4"),m=n("cd29"),v=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,[{key:"duration",get:function(){}},{key:"oa_count",get:function(){return l["a"].query().where("unitplan_id",this.id).where("disabled",!1).count()}},{key:"activity_count",get:function(){return m["a"].query().where("unitplan_id",this.id).count()}}],[{key:"fields",value:function(){return{id:this.increment(),school_id:this.number(0),id_course:this.attr(""),name:this.string(""),startDate:this.string((new Date).toISOString().substr(0,10)),endDate:this.string((new Date).toISOString().substr(0,10)),id_level:this.number(0),year:this.number((new Date).getFullYear()),description:this.string("").nullable(),state:this.number(0),subject:this.attr(""),schoolLevel:this.attr(""),level:this.attr(""),course:this.attr(""),school:this.belongsTo(d["a"],"id"),oas:this.belongsToMany(u["a"],l["a"],"unitplan_id","oa_id"),details:this.hasMany(l["a"],"unitplan_id"),attitudes:this.belongsToMany(O["a"],b["a"],"unitplan_id","attitude_id"),preLearnings:this.belongsToMany(p["a"],f["a"],"unitplan_id","preLearning_id"),skills:this.belongsToMany(g["a"],h["a"],"unitplan_id","skill_id"),activities:this.hasMany(m["a"],"unitplan_id")}}}]),e}(c["a"]);v.entity="unit_plans"},"54a6":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("2504"),l=n("e841"),d=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),oa_id:this.number(null),unitplan_id:this.number(null),complement:this.boolean(!1),hours:this.string("00:00"),eje_id:this.number(0),rescheduled:this.number(null),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),selectedRows:this.attr([]),editing:this.boolean(!1),unitplan:this.hasOne(u["a"],"id"),oa:this.hasOne(l["a"],"id")}}}]),e}(c["a"]);d.entity="unitplan_oas"},"5a01":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("2504"),l=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),attitude_id:this.number(null),unitplan_id:this.number(null),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),attitude:this.hasOne("","id"),unitplan:this.hasOne(u["a"],"id")}}}]),e}(c["a"]);l.entity="unit_plan_attitudes"},"5c0b":function(t,e,n){"use strict";var a=n("13e3"),i=n.n(a);i.a},"808b":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),cod:this.string(""),name:this.string(""),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10))}}}]),e}(c["a"]);u.entity="duas"},8447:function(t){t.exports=JSON.parse('[{"id":1,"cod":2000,"name":"Roma Demo","logo":"logo.svg"},{"id":2,"cod":4856,"name":"Ejemplo 2","logo":"logo.svg"}]')},"850c":function(t,e,n){"use strict";var a=n("1e24"),i=n.n(a);i.a},"86fa":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("808b"),l=n("cd29"),d=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),dua_id:this.number(null),activity_id:this.number(null),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),activity:this.hasOne(l["a"],"id"),dua:this.hasOne(u["a"],"id")}}}]),e}(c["a"]);d.entity="unitplan_activity_duas"},"8ade":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("cd29"),l=n("e841"),d=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),oa_id:this.number(null),activity_id:this.number(null),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),activity:this.hasOne(u["a"],"id"),oa:this.hasOne(l["a"],"id")}}}]),e}(c["a"]);d.entity="unitplan_activity_oas"},"923c":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("2504"),l=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),preLearning_id:this.number(null),unitplan_id:this.number(null),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),preLearning:this.hasOne("","id"),unitplan:this.hasOne(u["a"],"id")}}}]),e}(c["a"]);l.entity="unit_plan_prelearnings"},9664:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("2504"),l=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.number(null),cod:this.number(null),name:this.string(""),logo:this.string("").nullable(),unitplans:this.hasMany(u["a"],"school_id")}}}]),e}(c["a"]);l.entity="schools"},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"},ace8:function(t){t.exports=JSON.parse('{"contact":{"phone":"+569 3458 0660","sac":"229293270","email":"sac@romacl.com","location":{"lat":"10.2099343","lon":"-68.0119684,12z"}},"social":[{"icon":"instagram","url":"http://instagram.com/"},{"icon":"facebook","url":"http://facebook.com/"},{"icon":"youtube","url":"http://youtube.com/"}]}')},acf0:function(t){t.exports=JSON.parse('[{"oa_id":1,"cod":"IE01","name":"LEEN CON PRECISIÓN PALABRAS QUE INCLUYEN LAS LETRAS APRENDIDAS"},{"oa_id":1,"cod":"IE02","name":"LEEN PALABRAS O FRASES CORTAS CON LECTURA SILÁBICA EN CONTADAS OCASIONES"},{"oa_id":1,"cod":"IE03","name":"LEEN ORACIONES DICIENDO PALABRAS DE CORRIDO SIN LECTURA SILÁBICA"},{"oa_id":1,"cod":"IE04","name":"LEEN RESPETANDO PUNTOS APARTE Y LA MAYORÍA DE LOS PUNTOS SEGUIDOS"},{"oa_id":1,"cod":"IE05","name":"LEEN ORACIONES DICIENDO AL MENOS DOS PALABRAS DE CORRIDO"},{"oa_id":1,"cod":"IE06","name":"LEEN EN VOZ ALTA PRONUNCIANDO CADA PALABRA CON PRECISIÓN"},{"oa_id":1,"cod":"IE07","name":"LEEN EN VOZ ALTA RESPETANDO LOS PUNTOS SEGUIDOS Y APARTE"},{"oa_id":1,"cod":"IE08","name":"LEEN ORACIONES, DETENIÉNDOSE EN ALGUNAS PALABRAS, SIN HACER LECTURA SILÁBICA"},{"oa_id":2,"cod":"IE01","name":"MENCIONAN UN ASPECTO DE SUS VIDAS QUE SE RELACIONA CON EL TEXTO"},{"oa_id":2,"cod":"IE02","name":"MENCIONAN INFORMACIÓN QUE CONOCEN Y QUE SE RELACIONA CON EL TEXTO"},{"oa_id":2,"cod":"IE03","name":"DESCRIBEN O DIBUJAN A PARTIR DE UN TEXTO LEÍDO O ESCUCHADO"},{"oa_id":3,"cod":"IE01","name":"MENCIONAN A PERSONAJES DE LAS OBRAS LEÍDAS"},{"oa_id":3,"cod":"IE02","name":"MENCIONAN TEXTOS QUE HAN LEÍDO"},{"oa_id":3,"cod":"IE03","name":"RELACIONAN ASPECTOS DE UN TEXTO LEÍDO CON OTROS TEXTOS"},{"oa_id":3,"cod":"IE04","name":"RELEEN LOS TEXTOS QUE CONOCEN"},{"oa_id":3,"cod":"IE05","name":"SELECCIONAN TEXTOS PARA LEER POR SU CUENTA"},{"oa_id":3,"cod":"IE06","name":"RECOMIENDAN TEXTOS A OTROS"},{"oa_id":3,"cod":"IE07","name":"MANIFIESTAN SU PREFERENCIA POR ALGÚN TEXTO"},{"oa_id":4,"cod":"IE01","name":"CONTESTAN PREGUNTAS QUE ALUDEN A INFORMACIÓN EXPLÍCITA O IMPLÍCITA DE TEXTOS"},{"oa_id":4,"cod":"IE02","name":"RESPONDEN PREGUNTAS SOBRE LA HISTORIA, COMO QUÉ SUCEDE, QUIÉN REALIZA CIERTA ACCIÓN, ENTRE OTRAS"},{"oa_id":4,"cod":"IE03","name":"CARACTERIZAN A LOS PERSONAJES POR MEDIO DE EXPRESIONES ARTÍSTICAS"},{"oa_id":4,"cod":"IE04","name":"DESCRIBEN ORALMENTE LAS ILUSTRACIONES PRESENTES EN TEXTOS NARRATIVOS"},{"oa_id":4,"cod":"IE05","name":"RELACIONAN LAS ILUSTRACIONES DE LOS TEXTOS LEÍDOS CON LOS PERSONAJES, LOS ACONTECIMIENTOS Y OTROS"},{"oa_id":4,"cod":"IE06","name":"MENCIONAN EXPERIENCIAS QUE SE RELACIONAN CON LO QUE LEYERON"},{"oa_id":4,"cod":"IE07","name":"FORMULAN UNA OPINIÓN SOBRE UN CUENTO, SOBRE UNA ACCIÓN O UN PERSONAJE"}]')},adce:function(t){t.exports=JSON.parse('[{"title":"Planificación","route":{"name":"organizer"}}]')},b75b:function(t){t.exports=JSON.parse('[{"cod":"OA05","name":"LEER TEXTOS BREVES EN VOZ ALTA PARA ADQUIRIR FLUIDEZ"},{"cod":"OA06","name":"COMPRENDER TEXTOS APLICANDO ESTRATEGIAS DE COMPRENSIÓN LECTORA"},{"cod":"OA07","name":"LEER PARA AUMENTAR SU CONOCIMIENTO DE MUNDO Y DESARROLLAR SU IMAGINACIÓN"},{"cod":"OA08","name":"DEMOSTRAR COMPRENSIÓN DE NARRACIONES QUE ABORDEN TEMAS QUE LES SEAN FAMILIARES"},{"cod":"OA09","name":"LEER HABITUALMENTE Y DISFRUTAR  POEMAS DE AUTOR Y DE LA TRADICIÓN ORAL ADECUADOS A SU EDAD"},{"cod":"OA10","name":"LEER Y COMPRENDER TEXTOS NO LITERARIOS ESCRITOS CON ORACIONES SIMPLES"},{"cod":"OA11","name":"DESARROLLAR EL GUSTO POR LA LECTURA"},{"cod":"OA12","name":"ASISTIR HABITUALMENTE A LA BIBLIOTECA"}]')},be64:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),text:this.string(""),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10))}}}]),e}(c["a"]);u.entity="master_prelearnings"},cd29:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("808b"),l=n("86fa"),d=n("2504"),b=n("8ade"),f=n("e841"),h=n("fe1a"),O=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),unitplan_id:this.number(null),name:this.string(""),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),unitplan:this.hasOne(d["a"],"id"),oas:this.belongsToMany(f["a"],b["a"],"activity_id","oa_id"),files:this.hasMany(h["a"],"activity_id"),duas:this.belongsToMany(u["a"],l["a"],"activity_id","dua_id")}}}]),e}(c["a"]);O.entity="unitplan_activities"},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("router-view",{attrs:{name:"header"}}),n("v-content",[n("router-view")],1),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{fixed:"",fab:"",large:"",bottom:"",right:"",color:"green",href:t.whatsappPhone,target:"_blank"}},a),[n("v-icon",{attrs:{large:""}},[t._v("fab fa-whatsapp")])],1)]}}])},[n("span",[n("div",[t._v("¿QUIERES CONVERSAR CON NOSOTROS?")]),n("div",[t._v("Escríbenos "),n("strong",[t._v("¡Estamos disponibles!")])])])]),n("router-view",{attrs:{name:"footer"}})],1)},r=[],s=a["a"].extend({name:"App",data:function(){return{info:{phone:"56934580660"}}},computed:{whatsappPhone:function(){return"https://wa.me/"+this.info.phone}}}),o=s,c=(n("5c0b"),n("2877")),u=n("6544"),l=n.n(u),d=n("7496"),b=n("8336"),f=n("a75b"),h=n("132d"),O=n("3a2f"),p=Object(c["a"])(o,i,r,!1,null,null,null),g=p.exports;l()(p,{VApp:d["a"],VBtn:b["a"],VContent:f["a"],VIcon:h["a"],VTooltip:O["a"]});var m=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-page"},[n("v-snackbar",{attrs:{color:t.snackbar.color,top:"",right:""},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n    "+t._s(t.snackbar.text)+"\n    "),n("v-btn",{attrs:{small:"",text:""},on:{click:function(e){t.snackbar.show=!1}}},[t._v("Cerrar")])],1),n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("router-view")],1)],1)},E=[],S=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),A=n("2f62");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach((function(e){Object(S["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=a["a"].extend({name:"HomePage",props:{},data:function(){return{}},computed:y({},Object(A["b"])(["snackbar"]))}),N=I,j=(n("21bb"),n("a523")),C=n("2db4"),R=Object(c["a"])(N,v,E,!1,null,null,null),D=R.exports;l()(R,{VBtn:b["a"],VContainer:j["a"],VSnackbar:C["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"roma-header"},[a("v-app-bar",{staticClass:"roma-header",attrs:{app:"",color:"grey lighten-2",elevation:"1"}},[a("div",{staticClass:"white v-toolbar__title d-none d-md-flex"},[a("router-link",{attrs:{to:{name:"home"}}},[a("img",{staticClass:"logo-image",attrs:{src:n("dbc0"),alt:"roma logo"}})])],1),a("v-row",{staticClass:"pt-2 ml-2"},[a("div",{staticClass:"text-center"},[a("v-avatar",{staticClass:"v-btn--outlined"},[a("v-img",{attrs:{src:n("1771")("./"+t.school.logo)}})],1)],1),a("div",[a("span",[t._v(t._s(t.school.id)+": "),a("strong",[t._v(t._s(t.school.name))])]),a("div",{staticClass:"overline mb-4"},[a("strong",[t._v("Año Académico:")]),t._v(" "+t._s(t.yearSelected))])])]),a("v-spacer"),a("div",[a("v-menu",{attrs:{bottom:"","offset-y":"","close-on-content-click":!1,"max-width":"360"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",t._g({directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"v-btn v-btn--outlined cursor-pointer"},i),[a("v-img",{attrs:{src:n("e40b")}})],1),a("v-icon",{attrs:{small:""}},[t._v("fa-caret-down")])]}}]),model:{value:t.openedMenu,callback:function(e){t.openedMenu=e},expression:"openedMenu"}},[a("v-list",[a("v-subheader",[t._v(t._s(t.$vuetify.lang.t("$vuetify.generals.schoolOptions")))]),t.school.unitplans.length>0?a("v-list-item",[a("v-list-item-title",[t._v("Año Académico: ")]),a("v-list-item-action",[a("v-select",{attrs:{"menu-props":{bottom:!0,offsetY:!0},"hide-details":"",dense:"",outlined:"","item-text":"period","item-value":"id","return-object":"",items:t.school.unitplans.map((function(t){return new Date(t.startDate).getFullYear()}))},model:{value:t.yearSelected,callback:function(e){t.yearSelected=e},expression:"yearSelected"}})],1)],1):t._e(),a("v-divider"),a("v-subheader",[t._v(t._s(t.$vuetify.lang.t("$vuetify.generals.userOptions")))]),t._l(t.menu,(function(e,n){return a("v-list-item",{key:n,on:{click:function(t){}}},[a("v-list-item-title",[t._v(t._s(e.title))])],1)}))],2)],1),a("v-btn",{staticClass:"d-none d-md-inline-flex",attrs:{text:""}},[t._v("\n          "+t._s(t.$vuetify.lang.t("$vuetify.generals.help"))+"\n          "),a("v-icon",{attrs:{large:"",color:"secondary"}},[t._v("far fa-question-circle")])],1)],1)],1),t.navigationMenu?a("v-toolbar",{staticClass:"navigation-menu",attrs:{dense:"",short:"",flat:""}},[a("v-toolbar-items",[t._l(t.navigation,(function(e){return[e.route?a("v-btn",{attrs:{text:"",to:e.route},domProps:{textContent:t._s(e.title)}}):a("v-menu",{attrs:{"open-on-hover":"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on;return[a("v-btn",t._g({attrs:{text:""}},i),[t._v("\n                "+t._s(e.title)+"\n                "),a("v-icon",{attrs:{small:""}},[t._v("fa-caret-down")])],1)]}}],null,!0)},[a("v-list",[t._l(e.submenu,(function(e,n){return[e.title&&e.route?a("v-list-item",{key:n,attrs:{to:e.route}},[a("v-list-item-title",[t._v(t._s(e.title))])],1):e.title&&!e.route?a("div",[a("v-subheader",[t._v(t._s(e.title))])],1):e.title||e.route?t._e():a("v-divider")]}))],2)],1)]}))],2)],1):t._e()],1)},w=[],L=(n("7514"),n("adce")),P=n("9664"),k=a["a"].extend({name:"RomaHeader",props:{navigationMenu:{type:Boolean,default:!0}},data:function(){return{yearSelected:(new Date).getFullYear(),openedMenu:!1,navigation:L}},computed:{menu:function(){return[{title:this.$vuetify.lang.t("$vuetify.generals.profile"),route:{}},{title:this.$vuetify.lang.t("$vuetify.generals.changePassword"),route:{}},{title:this.$vuetify.lang.t("$vuetify.generals.help"),route:{}},{title:this.$vuetify.lang.t("$vuetify.generals.closeSession"),route:{}}]},school:{get:function(){var t=this.$store.state.organizer.selectedSchool.id;return P["a"].find(t)},set:function(t){this.$store.commit("selectSchool",t)}},schools:function(){return P["a"].all()}}}),U=k,x=(n("15ca"),n("40dc")),M=n("8212"),V=n("ce7e"),B=n("adda"),F=n("8860"),$=n("da13"),X=n("1800"),Y=n("5d23"),H=n("e449"),Q=n("0fd9"),z=n("b974"),J=n("2fa4"),G=n("e0c7"),Z=n("71d9"),q=n("2a7f"),K=n("269a"),W=n.n(K),tt=n("5607"),et=Object(c["a"])(U,T,w,!1,null,null,null),nt=et.exports;l()(et,{VAppBar:x["a"],VAvatar:M["a"],VBtn:b["a"],VDivider:V["a"],VIcon:h["a"],VImg:B["a"],VList:F["a"],VListItem:$["a"],VListItemAction:X["a"],VListItemTitle:Y["b"],VMenu:H["a"],VRow:Q["a"],VSelect:z["a"],VSpacer:J["a"],VSubheader:G["a"],VToolbar:Z["a"],VToolbarItems:q["a"]}),W()(et,{Ripple:tt["b"]});var at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"roma-footer"},[a("v-footer",{attrs:{color:"grey lighten-2"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",md:"3"}},[a("img",{staticClass:"logo-image",attrs:{src:n("dbc0"),alt:"roma logo"}})]),a("v-col",{staticClass:"justify-sm-center align-sm-center text-center text-sm-center text-md-left",attrs:{cols:"12",sm:"12",md:"5"}},[t._l(t.contacts,(function(e){return[e.url?a("a",{staticClass:"body-1 d-block mb-2",attrs:{href:e.url,target:"_blank"}},[a("v-icon",{attrs:{color:"black"}},[t._v("fa-"+t._s(e.icon))]),a("span",{staticClass:"ml-2",domProps:{innerHTML:t._s(e.text)}})],1):a("div",{staticClass:"mb-2"},[a("v-icon",{attrs:{color:"black"}},[t._v("fa-"+t._s(e.icon))]),a("span",{staticClass:"ml-2",domProps:{innerHTML:t._s(e.text)}})],1)]}))],2),a("v-col",{staticClass:"justify-sm-center align-sm-center text-center text-sm-center text-md-left",attrs:{cols:"12",sm:"12",md:"4"}},[a("div",[t._v("¡Nuestras Redes Sociales!")]),a("div",t._l(t.social,(function(e){return a("v-btn",{key:e.icon,staticClass:"mr-2",attrs:{icon:"",outlined:"",href:e.url,target:"_blank"}},[a("v-icon",{attrs:{color:"black"}},[t._v("fab fa-"+t._s(e.icon))])],1)})),1),a("div",{staticClass:"mt-3"},[a("span",{staticClass:"caption"},[a("strong",[t._v("cambiar idioma:")])]),a("v-select",{staticClass:"d-inline-block language-selector",attrs:{"menu-props":{top:!0,offsetY:!0},"hide-details":"","item-text":"title","item-value":"i18n",dense:"",outlined:"",flat:"",items:t.languages},on:{change:t.selectLanguage},scopedSlots:t._u([{key:"selection",fn:function(t){var e=t.item;t.index;return[a("v-avatar",{attrs:{size:"20px"}},[a("v-img",{attrs:{src:e.icon,alt:e.title}})],1)]}}]),model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)])],1),a("v-row",[a("v-col",{staticClass:"text-center"},[t._v("\n          Desarrollado por: "),a("strong",[t._v("Alphas Technology")])])],1)],1)],1)],1)},it=[];function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(n,!0).forEach((function(e){Object(S["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ot=a["a"].extend({name:"RomaFooter",props:{},data:function(){return{language:this.$store.state.config.selectedLanguage}},computed:st({},Object(A["b"])({contacts:function(t){return[{icon:"phone-volume",text:"Teléfono SAC: ".concat(t.info.contact.sac)},{icon:"mobile",text:"Teléfono Mobil: ".concat(t.info.contact.phone)},{icon:"at",text:"Correo Electrónico: ".concat(t.info.contact.email),url:"mailto://".concat(t.info.contact.email)}]},social:function(t){return t.info.social},languages:function(t){return t.languages}})),methods:{selectLanguage:function(){this.$store.commit("selectLanguage",this.language)}}}),ct=ot,ut=(n("850c"),n("62ad")),lt=n("553a"),dt=Object(c["a"])(ct,at,it,!1,null,null,null),bt=dt.exports;l()(dt,{VAvatar:M["a"],VBtn:b["a"],VCol:ut["a"],VContainer:j["a"],VFooter:lt["a"],VIcon:h["a"],VImg:B["a"],VRow:Q["a"],VSelect:z["a"]}),a["a"].use(m["a"]);var ft=new m["a"]({mode:"history",base:"/",routes:[{path:"*",component:D},{path:"/",name:"home",components:{header:nt,default:D,footer:bt},children:[{path:"/organizer",name:"organizer",component:function(){return Promise.all([n.e("chunk-295353d1"),n.e("chunk-592fd9b4")]).then(n.bind(null,"3907"))},children:[{path:"unit/:id",name:"organizer-unit",component:function(){return Promise.all([n.e("chunk-295353d1"),n.e("chunk-7feb96ee")]).then(n.bind(null,"e9c4"))}}]},{path:"/tables",name:"tables"},{path:"/evaluations",name:"evaluations"},{path:"/results",name:"/results"},{path:"/polls",name:"polls"},{path:"/administration",name:"administration"}]}]}),ht=(n("96cf"),n("3b8d")),Ot=n("0937"),pt=n("7f37"),gt=n.n(pt),mt=n("e6b7"),vt=n("be64"),Et=n("dde4"),St=n("d225"),At=n("b0b4"),_t=n("308d"),yt=n("6bb5"),It=n("4e2b"),Nt=function(t){function e(){return Object(St["a"])(this,e),Object(_t["a"])(this,Object(yt["a"])(e).apply(this,arguments))}return Object(It["a"])(e,t),Object(At["a"])(e,null,[{key:"fields",value:function(){return{id:this.attr(null),name:this.attr(""),email:this.attr("")}}}]),e}(Ot["a"]);Nt.entity="user";var jt=n("e841"),Ct=n("14f0"),Rt=n("808b"),Dt=n("2504"),Tt=n("54a6"),wt=n("923c"),Lt=n("1166"),Pt=n("5a01"),kt=n("cd29"),Ut=n("fe1a"),xt=n("8ade"),Mt=n("86fa"),Vt=n("f309"),Bt=n("f950");function Ft(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function $t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ft(n,!0).forEach((function(e){Object(S["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ft(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Xt=$t({},Bt["a"],{generals:{accept:"Aceptar",cancel:"Cancelar",school:"Escuela",help:"Ayuda",userOptions:"Opciones de Usuario",schoolOptions:"Opciones del Colegio",profile:"Perfil",changePassword:"Cambiar contraseña",closeSession:"Cerrar Sesión",search:"Buscar"},component:{romaHeader:{},romaOrganizer:{title:'<span class="font-weight-regular">Planificación de </span> Unidad Didáctica',annualPlan:"Plan Anual",unit:"Unidad",subject:"Asignatura",course:"Curso",level:"Nivel",startDate:"Fecha Inicio",endDate:"Fecha Fin"},romaFooter:{}}}),Yt=n("4b41");function Ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Qt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ht(n,!0).forEach((function(e){Object(S["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ht(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var zt=Qt({},Yt["a"],{generals:{accept:"Accept",cancel:"Cancel",school:"School",help:"Help",userOptions:"User Options",schoolOptions:"School Options",profile:"Profile",changePassword:"Change Password",closeSession:"Close Session",search:"Search"},component:{romaHeader:{},romaOrganizer:{title:'<span class="font-weight-light">UNIT DIDACTIC</span> ORGANIZER',annualPlan:"Annual Plan",unit:"Unit",subject:"Subject",course:"Course",level:"Level",startDate:"Start Date",endDate:"End Date"},romaFooter:{}}});a["a"].use(Vt["a"]);var Jt={primary:"#e97c21",secondary:"#378ccc",roma_rcolor:"#81007e",roma_acolor:"#f9d912",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},Gt=new Vt["a"]({theme:{options:{customProperties:!0},themes:{light:Jt}},lang:{locales:{es:Xt,en:zt},current:sessionStorage.roma?JSON.parse(sessionStorage.roma).selectedLanguage:"es"},icons:{iconfont:"fa"}}),Zt=n("8447"),qt=n("b75b"),Kt=n("acf0"),Wt=n("ace8");a["a"].use(A["a"]);var te=new Ot["b"].Database;te.register(mt["a"]),te.register(vt["a"]),te.register(Et["a"]),te.register(Nt),te.register(P["a"]),te.register(Dt["a"]),te.register(Tt["a"]),te.register(jt["a"]),te.register(Ct["a"]),te.register(wt["a"]),te.register(Lt["a"]),te.register(Pt["a"]),te.register(Rt["a"]),te.register(kt["a"]),te.register(Ut["a"]),te.register(xt["a"]),te.register(Mt["a"]);var ee=new A["a"].Store({state:{config:{selectedLanguage:Gt.preset.lang.current},languages:[{title:"Español",i18n:"es",icon:"https://image.flaticon.com/icons/png/512/197/197593.png"},{title:"Ingles",i18n:"en",icon:"https://image.flaticon.com/icons/png/128/197/197484.png"}],snackbar:{show:!1,timeout:5e3,color:"info",text:""},roma:[{id:1,name:"Básica",subjects:[{name:"Lenguaje",levels:[1,2,3,4,5]},{name:"Matemáticas",levels:[1,2,3,4,5,6,7,8]},{name:"Ciencias Naturales",levels:[1,2,3]},{name:"Historia, Geografía y Ciencias Sociales",levels:[1,2]}]},{id:2,name:"Media",subjects:[{name:"Lenguaje",levels:[1,2,3]},{name:"Matemáticas",levels:[1,2,3,4,5,6]},{name:"Historia Geográfica / Ciencias Sociales",levels:[1,2]},{name:"Ciencias Naturales",levels:[1,2,3]}]}],organizer:{selectedSchool:{},selectedPeriod:(new Date).getFullYear()},info:Wt},mutations:{selectLanguage:function(t,e){Gt.framework.lang.current=e,t.config.selectedLanguage=e},selectSchool:function(t,e){t.organizer.selectedSchool=e},selectUnit:function(t,e){t.organizer.selectedSchool.selectedUnit=e}},actions:{login:function(){var t=Object(ht["a"])(regeneratorRuntime.mark((function t(e,n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit;try{Math.floor(9*Math.random())+1,a("login",user.data.data)}catch(n){console.log(n)}case 2:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},plugins:[Ot["b"].install(te),gt()({keys:["config","languages","organizer","entities.unit_plans","entities.unitplan_oas","entities.unit_plan_attitudes","entities.unit_plan_prelearnings","entities.unit_plan_skills","entities.master_attitudes","entities.master_prelearnings","entities.master_skills","entities.duas","entities.unitplan_activities","entities.unitplan_activity_duas","entities.unitplan_activity_files","entities.unitplan_activity_oas"],namespace:"roma",driver:gt.a.drivers.localStorage})]}),ne=ee;P["a"].insert({data:Zt}),jt["a"].insert({data:qt}),Ct["a"].insert({data:Kt}),ee.commit("selectSchool",P["a"].find(1));n("d5e8"),n("15f5");a["a"].config.productionTip=!1,new a["a"]({router:ft,store:ne,vuetify:Gt,render:function(t){return t(g)}}).$mount("#app")},d893:function(t,e,n){},dbc0:function(t,e,n){t.exports=n.p+"img/logo-roma.41b83d6b.png"},dde4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),text:this.string(""),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10))}}}]),e}(c["a"]);u.entity="master_skills"},e40b:function(t,e,n){t.exports=n.p+"img/unprofile.ff971a12.png"},e6b7:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),text:this.string(""),disabled:this.boolean(!1),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10))}}}]),e}(c["a"]);u.entity="master_attitudes"},e841:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("14f0"),l=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),cod:this.string(""),selectedRows:this.attr([]),disabled:this.boolean(!1),name:this.string(""),ies:this.hasMany(u["a"],"oa_id")}}}]),e}(c["a"]);l.entity="oas"},f56e:function(t,e,n){t.exports=n.p+"img/wall-colors.6d3e89d3.svg"},fe1a:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("d225"),i=n("b0b4"),r=n("308d"),s=n("6bb5"),o=n("4e2b"),c=n("0937"),u=n("cd29"),l=function(t){function e(){return Object(a["a"])(this,e),Object(r["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(o["a"])(e,t),Object(i["a"])(e,null,[{key:"fields",value:function(){return{id:this.increment(),activity_id:this.number(null),path:this.string("/"),name:this.string("unname"),created_at:this.string((new Date).toISOString().substr(0,10)),update_at:this.string((new Date).toISOString().substr(0,10)),activity:this.hasOne(u["a"],"id")}}}]),e}(c["a"]);l.entity="unitplan_activity_files"}});
//# sourceMappingURL=app.cbcf5a02.js.map