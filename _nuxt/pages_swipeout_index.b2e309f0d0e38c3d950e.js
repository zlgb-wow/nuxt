webpackJsonp([3],{"/a04":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Ao74"),o=n("v+Ag"),s=!1;var a=function(t){s||n("mgkO")},r=n("VU/8")(i.a,o.a,!1,a,"data-v-15137b70",null);r.options.__file="pages\\swipeout\\index.vue",e.default=r.exports},Ao74:function(t,e,n){"use strict";var i=[{url:"javascript:",img:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg",title:"送你一朵fua"},{url:"javascript:",img:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg",title:"送你一辆车"},{url:"javascript:",img:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg",title:"送你一次旅行"}],o=(i.map(function(t,e){return{url:"http://m.baidu.com",img:t.img,fallbackImg:t.fallbackImg,title:"(可点击)"+t.title}}),i.slice(0,2).map(function(t){return t.url="http://m.baidu.com",t}));e.a={methods:{onButtonClick:function(t){alert("on button click "+t)},handleEvents:function(t){console.log("event: ",t)},onSwiperItemIndexChange:function(t){console.log("demo item change",t)},demo07_onIndexChange:function(t){this.demo07_index=t}},data:function(){return{disabled:!1,swiperItemIndex:1,demo07_list:o,demo07_index:0,baseList:i}}}},e93w:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".demo-content[data-v-15137b70]{padding:10px}",""])},mgkO:function(t,e,n){var i=n("e93w");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("155ef07e",i,!1,{sourceMap:!1})},"v+Ag":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("swipeout")]),n("swipeout",[n("swipeout-item",{attrs:{"transition-mode":"follow"},on:{"on-close":function(e){t.handleEvents("on-close")},"on-open":function(e){t.handleEvents("on-open")}}},[n("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[n("swipeout-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.onButtonClick("Yes")}}},[t._v("Yes")]),n("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.onButtonClick("No")}}},[t._v("No")])],1),n("div",{staticClass:"demo-content vux-1px-t",attrs:{slot:"content"},slot:"content"},[t._v("\n              JavaScript is the best language\n          ")])]),n("swipeout-item",{attrs:{"transition-mode":"follow"},on:{"on-close":function(e){t.handleEvents("on-close")},"on-open":function(e){t.handleEvents("on-open")}}},[n("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[n("swipeout-button",{attrs:{type:"primary"},nativeOn:{click:function(e){t.onButtonClick("Yes")}}},[t._v("Yes")]),n("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(e){t.onButtonClick("No")}}},[t._v("No")])],1),n("div",{staticClass:"demo-content vux-1px-t",attrs:{slot:"content"},slot:"content"},[t._v("\n              Node is the best language\n          ")])])],1),n("br"),n("h2",[t._v("swipe")]),n("swiper",{attrs:{"aspect-ratio":.375}},t._l(t.baseList,function(t,e){return n("swiper-item",{key:e,staticClass:"swiper-demo-img"},[n("img",{attrs:{src:t.img}})])})),n("h2",[t._v("垂直方向文字滚动")]),n("swiper",{staticClass:"text-scroll",attrs:{auto:"",height:"30px",direction:"vertical",interval:2e3,"show-dots":!1}},[n("swiper-item",[n("p",[t._v("义务爱了 完成传奇世界H5-王者归来任务 获得20金币")])]),n("swiper-item",[n("p",[t._v("基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币")])]),n("swiper-item",[n("p",[t._v("零哥章魚 完成传奇世界H5-王者归来任务 获得30金币")])]),n("swiper-item",[n("p",[t._v("做迎而為 兑换【饿了么】畅享美食红包 消耗20金币")])]),n("swiper-item",[n("p",[t._v("只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币")])]),n("swiper-item",[n("p",[t._v("基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币")])])],1),n("h2",[t._v("循环模式（只有两个且可点击）")]),n("swiper",{attrs:{loop:"",auto:"",list:t.demo07_list,index:t.demo07_index},on:{"on-index-change":t.demo07_onIndexChange}})],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o}});