webpackJsonp([6],{fxEx:function(t,e,n){"use strict";var s=n("Dd8w"),o=n.n(s),a=n("NYxO");e.a={data:function(){return{title:this.$route.params.title,id:this.$route.params.contId}},computed:o()({},Object(a.mapState)({counter:function(t){return t.counter},todoStatus:function(t){return console.log(t),t.todos.todoStatus}})),methods:o()({},Object(a.mapMutations)({changeStatus:"changeStatus",toggle:"todos/toggle",add:"todos/add"})),created:function(){this.changeStatus()},validate:function(t){var e=t.params;return/^\d+$/.test(e.contId)},head:function(){return{title:"news"+this.id,meta:[{hid:"description",name:"news123",content:"This is news"+this.id+" page"}]}}}},lq54:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("News-Content-> "+t._s(t.$route.params.contId))]),n("nuxt-link",{attrs:{to:{name:"home"}}},[t._v("本来要进home页面的，但是被middleware拦截打回/目录")]),n("h1",[t._v(t._s(t.$store.state.status))]),n("h1",[t._v(t._s(t.$store.state.todos.list))]),n("h1",[t._v(t._s(t.counter))]),n("h1",[t._v(t._s(t.todoStatus))])],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},nXjZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("fxEx"),o=n("lq54"),a=n("VU/8")(s.a,o.a,!1,null,null,null);a.options.__file="pages\\news\\_contId.vue",e.default=a.exports}});