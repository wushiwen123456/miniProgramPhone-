(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1255:function(t,e,n){"use strict";n.r(e);var i=n("be0a"),o=n("b782");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("91ee");var u=n("2877"),a=Object(u["a"])(o["default"],i["a"],i["b"],!1,null,"54fbce8a",null);e["default"]=a.exports},"423a":function(t,e,n){"use strict";(function(t){n("33fb"),n("921b");i(n("66fd"));var e=i(n("1255"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"4c9e":function(t,e,n){},"91ee":function(t,e,n){"use strict";var i=n("4c9e"),o=n.n(i);o.a},b782:function(t,e,n){"use strict";n.r(e);var i=n("c2e6"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},be0a:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},c2e6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isOpen:!0,bgMp3Url:"",number:1,time:""}},onShareAppMessage:function(t){return{title:"茶海棠",path:"/pages/index/index"}},onLoad:function(e){var n=this;this.$store.commit("stop"),wx.vibrateShort(),t.stopAccelerometer(),e.num?this.$store.commit("setNum",e.num):this.$store.commit("randomNum"),this.number=this.$store.state.num,clearTimeout(this.time),this.time=setTimeout(function(){n.openClick()},9e3)},onShow:function(){this.$store.state.bgAudio.paused||this.$store.state.bgAudio.pause(),this.$store.state.isRandom&&this.$store.commit("randomNum"),this.$store.state.audioCtx.paused&&this.$store.commit("play",{url:"/static/27.mp3",loop:!0})},onHide:function(){this.$store.commit("stop")},methods:{openClick:function(){clearTimeout(this.time),this.$store.commit("stop"),6!=this.number?t.navigateTo({url:"../detail/detail"}):t.reLaunch({url:"../shake/shake"})},refuse:function(){this.isOpen=this.isOpen},mytouchmove:function(){wx.vibrateShort()}}};e.default=n}).call(this,n("543d")["default"])}},[["423a","common/runtime","common/vendor"]]]);