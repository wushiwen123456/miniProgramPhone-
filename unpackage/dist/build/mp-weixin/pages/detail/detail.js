(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"316e":function(t,n,e){},"3b53":function(t,n,e){"use strict";(function(t){e("33fb"),e("921b");a(e("66fd"));var n=a(e("48ed"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"48ed":function(t,n,e){"use strict";e.r(n);var a=e("c509"),i=e("a847");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("b1c5");var o=e("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"06151e80",null);n["default"]=c.exports},7015:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("0156"),i={data:function(){return{option:{mp3Src:""},num:"",imgUrl:""}},onShareAppMessage:function(t){return{title:"茶海棠",path:"/pages/index/index"}},onLoad:function(){this.num=this.$store.state.num,this.getDetailData(this.num),this.imgUrl="https://xcxys.17yunyin.com//public/uploads/".concat(this.num,".gif")},onShow:function(){this.$store.state.isPlayApp&&this.$store.state.bgAudio.paused&&this.$store.state.bgAudio.play()},methods:{getDetailData:function(t){var n=this;(0,a.getDetailData)(t).then(function(t){n.$store.commit("playApp",{url:t.data.data.yyurl})}),this.$store.state.bgAudio.onEnded(function(){n.$store.state.bgAudio.onPause(),n.getDetailData(n.num)})},back:function(){t.navigateBack()}},computed:{height:function(){return t.getSystemInfoSync().windowHeight+"px"}}};n.default=i}).call(this,e("543d")["default"])},a847:function(t,n,e){"use strict";e.r(n);var a=e("7015"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},b1c5:function(t,n,e){"use strict";var a=e("316e"),i=e.n(a);i.a},c509:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}},[["3b53","common/runtime","common/vendor"]]]);