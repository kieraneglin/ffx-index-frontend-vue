(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ability-show"],{"55cf":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.ability?i("div",{staticClass:"m-b-md"},[i("section",[i("h1",{staticClass:"title"},[t._v(t._s(t.ability.name)),i("small",{staticClass:"subject-content__title--secondary"},[t._v("("+t._s(t.ability.ability_type)+")")])]),i("h2",{staticClass:"subtitle is-size-6-mobile"},[t._v(t._s(t.ability.effect))])]),i("hr"),t.ability.item?i("section",{staticClass:"content"},[i("strong",{staticClass:"subject-content__section-title"},[t._v("Customization Cost")]),i("span",{staticClass:"subject-content__section-subtitle"},[i("item-link",{attrs:{item:t.ability.item}},[t._v(t._s(t.ability.item.name)+" ")]),t._v("× "+t._s(t.ability.item_amount))],1)]):t._e(),t.ability.monster_drops.length?i("section",{staticClass:"content"},[i("strong",{staticClass:"subject-content__section-title"},[t._v("Dropped By")]),t._l(t.ability.monster_drops,function(e){return i("div",{key:e.id,staticClass:"subject-content__section-subtitle"},[i("monster-link",{attrs:{monster:e}},[t._v(t._s(e.name))])],1)})],2):t._e()]):t._e()},s=[],a=i("7547"),r={extends:a["a"],data:function(){return{stateKey:"ability",fetchKey:"fetchAbility"}},computed:{ability:function(){return this.record}}},c=r,o=i("2877"),u=Object(o["a"])(c,n,s,!1,null,null,null);u.options.__file="Show.vue";e["default"]=u.exports},7547:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},s=[],a=(i("96cf"),i("3b8d")),r=i("cebc"),c=(i("cadf"),i("551c"),i("097d"),i("2f62")),o={data:function(){return{stateKey:"",fetchKey:""}},computed:Object(r["a"])({},Object(c["b"])({record:function(t){return t[this.stateKey][this.$route.params.slug]}})),watch:{$route:function(){this.loadData()}},created:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.loadData();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),methods:{loadData:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch(this.fetchKey,this.$route.params.slug);case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},u=o,l=i("2877"),_=Object(l["a"])(u,n,s,!1,null,null,null);_.options.__file="ShowBase.vue";e["a"]=_.exports}}]);
//# sourceMappingURL=ability-show.6a93de40.js.map