(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20ce76f0"],{"345f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wap-wrap"},[a("div",{staticClass:"wrap-title"},[t._m(0),a("div",{staticClass:"title-text"},[a("div",[t._v(t._s(t.vipCardAmount))]),a("div",[t._v("我的余额")])]),t._m(1)]),a("div",{staticClass:"wrap-content"},[a("van-list",{attrs:{finished:t.page.finished,"finished-text":""},on:{load:t.loadList},model:{value:t.page.loading,callback:function(e){t.$set(t.page,"loading",e)},expression:"page.loading"}},t._l(t.page.list,function(e,i){return a("div",{key:i,staticClass:"content-list"},[a("div",{staticClass:"content-item"},[a("div",{staticClass:"item-name"},[t._v("\n                        "+t._s(e.consumeType)+"\n                    ")]),a("div",{staticClass:"item-time"},[t._v("\n                        "+t._s(e.updateTime)+"\n                    ")]),1===e.flag?a("div",{staticClass:"item-num plus"},[t._v("\n                        +"+t._s(e.amount)+"\n                    ")]):t._e(),0===e.flag?a("div",{staticClass:"item-num minus"},[t._v("\n                        "+t._s(e.amount)+"\n                    ")]):t._e()]),a("div",{staticClass:"line"})])}),0)],1)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title-bg"},[i("img",{attrs:{src:a("9a5e")}}),i("img",{attrs:{src:a("7d8c")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-head"},[a("div",[t._v("\n                会员卡记录\n            ")])])}],s=a("ca41"),c={name:"membership",components:{},props:{},data:function(){return{vipCardAmount:"0",page:{loading:!1,finished:!1,page:1,total:1,limit:10,list:[]}}},computed:{},watch:{},created:function(){},mounted:function(){this.loadRemainder(),this.loadList()},destroyed:function(){},methods:{loadRemainder:function(){var t=this,e={userId:this.$route.query.userId||"U235675",access_token:this.$route.query.access_token||"a0d5a0dd-dedc-4127-909f-a80f41e6a335",globalUid:this.$route.query.globalUid||"386093980229713923",simt_token:this.$route.query.simt_token||"a0d5a0dd-dedc-4127-909f-a80f41e6a335"};Object(s["i"])(e).then(function(e){0===e.tag?t.vipCardAmount=e.data.result.vipCardAmount:t.$toast(e.errMsg)}).catch(function(t){console.log(t)})},loadList:function(){var t=this,e=this.page,a={page:e.page,limit:e.limit,userId:this.$route.query.userId||"U235675",access_token:this.$route.query.access_token||"a0d5a0dd-dedc-4127-909f-a80f41e6a335",globalUid:this.$route.query.globalUid||"386093980229713923",simt_token:this.$route.query.simt_token||"a0d5a0dd-dedc-4127-909f-a80f41e6a335"};Object(s["h"])(a).then(function(a){0===a.tag?(a.data.page<=1?e.list=a.data.result:e.list=e.list.concat(a.data.result),e.page=a.data.page+1,e.total=a.data.total,e.loading=!1,a.data.page>=a.data.total/a.data.limit&&(e.finished=!0)):(e.loading=!1,e.finished=!0,t.$toast(a.errMsg))}).catch(function(t){console.log(t)})}}},r=c,o=(a("4925"),a("2877")),u=Object(o["a"])(r,i,n,!1,null,"0a6b7504",null);e["default"]=u.exports},4925:function(t,e,a){"use strict";var i=a("f364"),n=a.n(i);n.a},"7d8c":function(t,e,a){t.exports=a.p+"img/tuoyuan.18c2c819.png"},"9a5e":function(t,e,a){t.exports=a.p+"img/juxing.96d3f345.png"},ca41:function(t,e,a){"use strict";a.d(e,"b",function(){return r}),a.d(e,"a",function(){return o}),a.d(e,"c",function(){return u}),a.d(e,"d",function(){return d}),a.d(e,"h",function(){return l}),a.d(e,"i",function(){return f}),a.d(e,"e",function(){return p}),a.d(e,"f",function(){return h}),a.d(e,"g",function(){return v});var i=a("c7a1"),n=a("db49"),s=a("bc3a"),c=a.n(s),r=function(t){var e=n["h"]+"sacy/api/health/activity/goods/list/ubfdke";return Object(i["c"])(e,t)},o=function(t){var e=n["h"]+"sacy/api/health/activity/send/ubfdke";return Object(i["c"])(e,t)},u=function(t){var e=n["h"]+"sacy/api/health/activity/get/count/ubfdke";return Object(i["c"])(e,t)},d=function(t){var e=n["h"]+"sacy/api/health/activity/receive/list/ubfdke";return Object(i["c"])(e,t)},l=function(t){var e=n["h"]+"use/api/user/vipcard/queryVipAllRecord";return Object(i["a"])(e,t)},f=function(t){var e=n["h"]+"use/api/user/vipcard/queryVipRemainder";return Object(i["a"])(e,t)},p=function(t){var e="https://devjbq.meetao.com/sort.php?url="+t;e=encodeURI(e);var a=c.a.create({headers:{"Content-Type":"application/json; charset=utf-8"},responseType:"json"});return a.get(e,{})},h=function(t){var e=n["h"]+"sacy/api/health/activity/gift/info/select";return Object(i["a"])(e,t)},v=function(t){var e=n["h"]+"sacy/api/health/activity/user/receive/gift";return Object(i["a"])(e,t)}},f364:function(t,e,a){}}]);