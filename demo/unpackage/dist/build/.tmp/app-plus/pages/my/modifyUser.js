(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/modifyUser"],{"147c":function(e,t,a){"use strict";(function(e){a("b52e"),a("921b");n(a("66fd"));var t=n(a("b20d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"3f3c":function(e,t,a){"use strict";a.r(t);var n=a("841a"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=r.a},"49a9":function(e,t,a){},"841a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("2f62");function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){i(e,t,a[t])})}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={data:function(){return{showDialog:!1,showImageDialog:!1,showNameDialog:!1,showGenderDialog:!1,showBirthdayDialog:!1,avatarUrl:"",nickName:"",gender:1,birthday:""}},computed:r({},(0,n.mapState)(["currentUser"])),onLoad:function(){this.avatarUrl=this.currentUser.avatarUrl,this.nickName=this.currentUser.nickName,this.gender=this.currentUser.gender,this.birthday=this.currentUser.birthday},methods:{jumpTo:function(e){switch(this.showDialog=!0,e){case 1:this.showImageDialog=!0;break;case 2:this.showNameDialog=!0;break;case 3:this.showGenderDialog=!0;break;case 4:this.showBirthdayDialog=!0;break}},modifyNameCancel:function(){this.showDialog=!1,this.showNameDialog=!1,this.nickName=this.currentUser.nickName},modifyNameOk:function(){this.showDialog=!1,this.showNameDialog=!1}}};t.default=o},abc2:function(e,t,a){"use strict";var n=a("49a9"),r=a.n(n);r.a},b20d:function(e,t,a){"use strict";a.r(t);var n=a("ef85"),r=a("3f3c");for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);a("abc2");var o=a("2877"),c=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},ef85:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})}},[["147c","common/runtime","common/vendor"]]]);