webpackJsonp([5],{"/TYz":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("niuF"),o=e("/XJO"),a=!1;var s=function(t){a||e("4ppk")},r=e("VU/8")(n.a,o.a,!1,s,null,null);r.options.__file="pages\\index.vue",i.default=r.exports},"/XJO":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"login"},[e("div",{staticClass:"main"},[e("a",{attrs:{href:"https://gitee.com/Dream_bin",target:"_blank"}},[t._v("https://gitee.com/Dream_bin")]),e("fieldset",[e("legend",[t._v("登录系统")]),e("div",{staticClass:"login_box"},[e("p",[t._v("用户名: "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user,expression:"user",modifiers:{trim:!0}}],attrs:{type:"text"},domProps:{value:t.user},on:{input:function(i){i.target.composing||(t.user=i.target.value.trim())},blur:function(i){t.$forceUpdate()}}})]),e("p",[t._v("密   码: "),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.pwd,expression:"pwd",modifiers:{trim:!0}}],attrs:{type:"password"},domProps:{value:t.pwd},on:{input:function(i){i.target.composing||(t.pwd=i.target.value.trim())},blur:function(i){t.$forceUpdate()}}})]),e("p",[e("button",{on:{click:t.login}},[t._v("登录")])]),e("p",{staticClass:"tip"},[t._v("用户名：admin")]),e("p",{staticClass:"tip"},[t._v("密码：123456")])])])])])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};i.a=o},"4ppk":function(t,i,e){var n=e("LbPT");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("20a6b948",n,!1,{sourceMap:!1})},LbPT:function(t,i,e){(t.exports=e("FZ+f")(!1)).push([t.i,".login,.login .main{width:100%;height:100%}.login .main{margin:20px auto}.login .main a{display:block;text-align:center;font-size:26px;color:blue}.login .main fieldset{width:50%;height:50%;min-height:380px;min-width:650px;margin:50px auto;background:rgba(0,0,0,.5);color:#000;border:none;font-size:36px;font-weight:700}.login .main fieldset .login_box{margin:0 auto;width:80%;text-align:center}.login .main fieldset .login_box .tip{color:#ff0}.login .main fieldset .login_box button,.login .main fieldset .login_box input{height:36px;line-height:36px;width:50%;font-size:24px}.login .main fieldset .login_box button{width:65%;height:40px;line-height:40px;font-size:24px}",""])},niuF:function(t,i,e){"use strict";i.a={data:function(){return{user:"",pwd:""}},methods:{login:function(){"admin"==this.user&&"123456"==this.pwd?(localStorage.token="this token is my test",this.$router.push({name:"home"})):alert("请正确输入用户名与密码！")}},mounted:function(){var t=this;window.onkeydown=function(i){13==i.keyCode&&t.login()}}}}});