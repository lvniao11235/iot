(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/addDevice"],{"194c":function(t,e,n){"use strict";var r=n("7d67"),a=n.n(r);a.a},"236a":function(t,e,n){"use strict";n.r(e);var r=n("51ca"),a=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e["default"]=a.a},"51ca":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=n("3be5");function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={data:function(){return{currentBrand:null,brands:[],products:[]}},onLoad:function(){var t=this;(0,a.products)().then(function(e){e.data.data&&e.data.data.length>0?(t.brands=e.data.data,t.currentBrand=t.brands[0],t.$store.commit("setSelectBrand",t.brands[0])):(t.brands=[],t.currentBrand=null,t.$store.commit("setSelectBrand",null))})},watch:{currentBrand:function(e){var n=this;t.showLoading({title:"数据加载中"}),(0,a.product)(e.id).then(function(e){n.products=[],e.data.data&&e.data.data.length>0?(e.data.data.forEach(function(t){n.products.push(t)}),t.hideLoading()):t.hideLoading()})}},methods:c({},(0,r.mapMutations)(["setSelectBrand","setSelectProduct"]),{selectItem:function(t){this.currentBrand=t,this.$store.commit("setSelectBrand",t)},search:function(){t.navigateTo({url:"./searchDevice?brandid="+this.currentBrand.id})},selectProduct:function(e){this.$store.commit("setSelectProduct",e),t.navigateTo({url:"./settingDevice"})}})};e.default=o}).call(this,n("6e42")["default"])},"7d67":function(t,e,n){},a6c5:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},bde6:function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");r(n("66fd"));var e=r(n("bedf"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bedf:function(t,e,n){"use strict";n.r(e);var r=n("a6c5"),a=n("236a");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("194c");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports}},[["bde6","common/runtime","common/vendor"]]]);