(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ca64c0c"],{"02aa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-detail"},[r("a-steps",{staticClass:"product-steps",attrs:{current:t.current}},t._l(t.steps,(function(t){return r("a-step",{key:t.title,attrs:{title:t.title}})})),1),r("div",{staticClass:"steps-content"},[0===t.current?r("basic-info",{attrs:{form:t.form},on:{next:t.next}}):1===t.current?r("sale-info",{attrs:{form:t.form},on:{next:t.next,prev:t.prev}}):t._e()],1)],1)},o=[],i=r("5530"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"basic-detail"},[r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{attrs:{label:"标题",prop:"title",required:""}},[r("a-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("a-form-model-item",{attrs:{label:"商品描述",prop:"desc"}},[r("a-input",{model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("a-form-model-item",{attrs:{label:"商品类目",required:"",prop:"category"}},[r("a-select",{attrs:{placeholder:"请选择商品类别"},on:{change:t.changeCategory},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryList,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1),r("a-select",{attrs:{placeholder:"请添加子类目"},model:{value:t.form.c_item,callback:function(e){t.$set(t.form,"c_item",e)},expression:"form.c_item"}},t._l(t.categoryItems,(function(e){return r("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"商品标签",prop:"tags",required:""}},[r("a-select",{attrs:{mode:"tags",placeholder:"Please select","default-value":["包邮，最晚次日达"]},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},[r("a-select-option",{attrs:{value:"包邮，最晚次日达"}},[t._v("包邮，最晚次日达")])],1)],1),r("a-form-model-item",{staticClass:"next-btn",attrs:{label:"",wrapperCol:{span:24}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步")])],1)],1)],1)},s=[],c=r("c405"),l={data:function(){return{rules:{},categoryList:[],categoryItems:[]}},props:["form"],created:function(){var t=this;c["a"].list().then((function(e){t.categoryList=e.data}))},methods:{changeCategory:function(t){for(var e=0;e<this.categoryList.length;e+=1)this.categoryList[e].id===t&&(this.categoryItems=this.categoryList[e].c_items)},next:function(){var t=this;this.$refs.ruleForm.validate((function(e){return e?(t.$emit("next",t.form),console.log(t.form),!0):(console.log("error submit!!"),!1)}))}}},u=l,f=(r("9b18"),r("2877")),p=Object(f["a"])(u,a,s,!1,null,null,null),m=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sale-detail"},[r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{attrs:{label:"商品售价",prop:"price",required:""}},[r("a-input",{model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),r("a-form-model-item",{attrs:{label:"折扣价格",prop:"price_off"}},[r("a-input",{model:{value:t.form.price_off,callback:function(e){t.$set(t.form,"price_off",e)},expression:"form.price_off"}})],1),r("a-form-model-item",{attrs:{label:"商品库存",required:"",prop:"inventory"}},[r("a-input",{model:{value:t.form.inventory,callback:function(e){t.$set(t.form,"inventory",e)},expression:"form.inventory"}})],1),r("a-form-model-item",{attrs:{label:"计量单位",prop:"unit",required:""}},[r("a-input",{model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),r("a-form-model-item",{attrs:{label:"商品相册",prop:"images"}},[r("a-upload",{attrs:{action:"http://mallapi.duyiedu.com/upload/images?appkey="+t.$store.state.user.appkey,"list-type":"picture-card","file-list":t.fileList,name:"avatar"},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<8?r("div",[r("a-icon",{attrs:{type:t.loading?"loading":"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("Upload")])],1):t._e(),r("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1)],1),r("a-form-model-item",{staticClass:"next-btn",attrs:{label:"",wrapperCol:{span:24}}},[r("a-button",{attrs:{type:"default"},on:{click:t.prev}},[t._v("上一步")]),r("a-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("提交")])],1)],1)],1)},d=[],v=(r("4de4"),r("d81d"),r("d3b7"),r("96cf"),r("1da1"));function g(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var y={data:function(){return{rules:{},fileList:[],loading:!1,previewVisible:!1,previewImage:""}},props:["form"],created:function(){this.form.images.length>0&&(this.fileList=this.form.images.map((function(t,e){return{uid:e,name:"image-".concat(e,".png"),status:"done",url:t}})))},methods:{handleChange:function(t){var e=t.file,r=t.fileList;if("done"===e.status)this.form.images.push(e.response.data.url);else if("removed"===e.status){var n=e.response.data.url;this.form.images=this.form.images.filter((function(t){return t!==n}))}this.fileList=r},next:function(){var t=this;this.$refs.ruleForm.validate((function(e){return e?(t.$emit("next",t.form),!0):(console.log("error submit!!"),!1)}))},prev:function(){console.log("prev"),this.$emit("prev")},handlePreview:function(t){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t,t.url||t.preview){r.next=5;break}return r.next=4,g(t.originFileObj);case 4:n.preview=r.sent;case 5:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 7:case"end":return r.stop()}}),r)})))()},handleCancel:function(){this.previewVisible=!1}}},w=y,b=Object(f["a"])(w,h,d,!1,null,null,null),x=b.exports,_=r("4c79"),L={data:function(){return{current:0,form:{title:"",desc:"",category:"",c_items:[],tags:[],price:0,price_off:0,unit:"",inventory:0,images:[]},steps:[{title:"填写商品基本信息"},{title:"填写商品销售信息"}]}},components:{BasicInfo:m,SaleInfo:x},created:function(){var t=this,e=this.$route.params.id;e&&_["a"].detail(e).then((function(e){t.form=e}))},methods:{next:function(t){var e=this;this.form=Object(i["a"])(Object(i["a"])({},this.form),{},{form:t}),1===this.current?this.$route.params.id?_["a"].edit(this.form).then((function(t){console.log(t),e.$message.success("修改成功"),e.$router.push({name:"ProductList"})})):_["a"].add(this.form).then((function(t){console.log(t),e.$message.success("新增成功"),e.$router.push({name:"ProductList"})})):this.current+=1},prev:function(){this.current-=1}}},k=L,E=(r("fb8a"),Object(f["a"])(k,n,o,!1,null,"6d527744",null));e["default"]=E.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},"4c79":function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/products/all",{params:t})},remove:function(t){return n["a"].delete("/products/".concat(t.id))},add:function(t){return n["a"].post("/products/add",t)},detail:function(t){return n["a"].get("/products/".concat(t))},edit:function(t){return console.log(t),n["a"].put("/products/edit",t)}}},"7c7d":function(t,e,r){},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=b;var f="suspendedStart",p="suspendedYield",m="executing",h="completed",d={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(I([])));y&&y!==n&&o.call(y,a)&&(v=y);var w=k.prototype=_.prototype=Object.create(v);L.prototype=w.constructor=k,k.constructor=L,k[c]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},u.awrap=function(t){return{__await:t}},E($.prototype),$.prototype[s]=function(){return this},u.AsyncIterator=$,u.async=function(t,e,r,n){var o=new $(b(t,e,r,n));return u.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(w),w[c]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},u.values=I,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return s.type="throw",s.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new F(n||[]);return i._invoke=j(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function L(){}function k(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function $(t){function e(r,n,i,a){var s=x(t[r],t,n);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(l).then((function(t){c.value=t,i(c)}),a)}a(s.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function j(t,e,r){var n=f;return function(o,i){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return G()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var c=x(t,e,r);if("normal"===c.type){if(n=r.done?h:p,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:G}}function G(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"96dc":function(t,e,r){},"9b18":function(t,e,r){"use strict";r("7c7d")},c405:function(t,e,r){"use strict";var n=r("bb36");e["a"]={list:function(t){return n["a"].get("/category/all",t)}}},fb8a:function(t,e,r){"use strict";r("96dc")}}]);
//# sourceMappingURL=chunk-2ca64c0c.d7722fb4.js.map