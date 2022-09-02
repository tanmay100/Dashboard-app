"use strict";(self["webpackChunkdashboard_frontend"]=self["webpackChunkdashboard_frontend"]||[]).push([[26],{2026:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row mt-5"},[t("div",{staticClass:"card mx-auto"},[e._m(0),t("div",{staticClass:"card-body"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.registerUser.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"fw-strong fs-5 mt-1 text-white",attrs:{for:"username"}},[e._v("Username")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.username,expression:"user.username",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":e.isSubmitted&&e.$v.user.username.$error},attrs:{type:"text",id:"username",name:"username",placeholder:"Username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.isSubmitted&&!e.$v.user.username.required?t("div",{staticClass:"invalid-feedback"},[e._v("Username is required")]):e._e(),e.$v.user.username.minLength?e._e():t("span",{staticClass:"invalid-feedback"},[e._v("username should be unique and at least 6 characters long")])]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"fw-strong fs-5 mt-3 text-white",attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",class:{"is-invalid":e.isSubmitted&&e.$v.user.name.$error},attrs:{type:"text",id:"name",name:"name",placeholder:"name"},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}}),e.isSubmitted&&!e.$v.user.name.required?t("div",{staticClass:"invalid-feedback"},[e._v("Name field is required")]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"fw-strong fs-5 mt-3 text-white",attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",class:{"is-invalid":e.isSubmitted&&e.$v.user.email.$error},attrs:{type:"text",id:"email",name:"email",placeholder:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e.isSubmitted&&e.$v.user.email.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.email.required?e._e():t("span",[e._v("Email field is required")]),e.$v.user.email.email?e._e():t("span",[e._v("Please provide valid email")])]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"fw-strong fs-5 mt-3 text-white",attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",class:{"is-invalid":e.isSubmitted&&e.$v.user.password.$error},attrs:{type:"password",id:"password",name:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e.isSubmitted&&e.$v.user.password.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.password.required?e._e():t("span",[e._v("Password field is required")]),e.$v.user.password.minLength?e._e():t("span",[e._v("Password should be at least 6 characters long")])]):e._e()]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"fw-strong fs-5 mt-3 text-white",attrs:{for:"confirm_password"}},[e._v("Confirm Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.confirm_password,expression:"user.confirm_password"}],staticClass:"form-control",class:{"is-invalid":e.isSubmitted&&e.$v.user.confirm_password.$error},attrs:{type:"password",id:"confirm_password",name:"confirm_password",placeholder:"Confirm Password"},domProps:{value:e.user.confirm_password},on:{input:function(t){t.target.composing||e.$set(e.user,"confirm_password",t.target.value)}}}),e.isSubmitted&&e.$v.user.confirm_password.$error?t("div",{staticClass:"invalid-feedback"},[e.$v.user.confirm_password.required?e.$v.user.confirm_password.sameAsPassword?e._e():t("span",[e._v("Passwords should be matched")]):t("span",[e._v("Confirm Password field is required")])]):e._e()]),t("div",{staticClass:"mt-3"},[t("button",{staticClass:"btn btn-dark"},[e._v("Register")]),t("br"),t("span",{staticClass:"text-white mt-3"},[e._v("Already Have an account")]),t("router-link",{staticClass:"card-link ms-2 btn btn-primary",attrs:{to:"/login"}},[e._v("Login")])],1)])])])])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"card-header text-white"},[t("h4",{staticClass:"fw-bold fs-2 mt-2 text-center"},[e._v("Register")])])}],i=r(3822),s=r(5795),o={name:"registerUser",data(){return{user:{username:"",name:"",email:"",password:"",confirm_password:"",role:"Teacher"},isSubmitted:!1}},validations:{user:{username:{required:s.C1,minLength:(0,s.Ei)(6),maxLength:(0,s.BS)(10)},name:{required:s.C1},email:{required:s.C1,email:s.Do},password:{required:s.C1,minLength:(0,s.Ei)(6)},confirm_password:{required:s.C1,sameAsPassword:(0,s.sH)("password")}}},methods:{...(0,i.nv)(["register"]),registerUser(){if(this.isSubmitted=!0,this.$v.$touch(),this.$v.$invalid)return;let e={username:this.user.username,name:this.user.name,email:this.user.email,password:this.user.password,confirm_password:this.user.confirm_password,role:this.user.role};this.register(e).then((e=>{e.data.success?(this.$router.push("login"),this.$toasted.show("Registered Succesfully"),this.$toasted.show("Login to Access dashboard")):this.$toasted.show(`${e.data.error}`)}))}}},u=o,d=r(1001),l=(0,d.Z)(u,n,a,!1,null,"4435c0ec",null),f=l.exports},4689:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=a},3331:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=a},7673:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))};t["default"]=a},450:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t["default"]=a},4111:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return n.default}});var n=a(r(8751));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var s=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=s;var o=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=o;var u=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=u;var d=function(e,t){return(0,n.default)({type:e},(function(e){return!s(e)||t.test(e)}))};t.regex=d},3107:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=a},184:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,i=(0,n.regex)("email",a);t["default"]=i},5795:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"BS",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"sH",{enumerable:!0,get:function(){return y.default}});var a=S(r(4689)),i=S(r(3331)),s=S(r(8603)),o=S(r(450)),u=S(r(184)),d=S(r(2632)),l=S(r(837)),f=S(r(5136)),c=S(r(3795)),m=S(r(367)),v=S(r(2035)),p=S(r(310)),y=S(r(8612)),b=S(r(2009)),_=S(r(5208)),h=S(r(7673)),w=S(r(7850)),g=S(r(9935)),P=S(r(3134)),x=S(r(719)),$=S(r(3107)),C=O(r(4111));function j(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(j=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=j(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=i?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(a,s,o):a[s]=e[s]}return a.default=e,r&&r.set(e,a),a}function S(e){return e&&e.__esModule?e:{default:e}}},719:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=a},2632:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t["default"]=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},837:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(i)}))};t["default"]=a;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5136:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))};t["default"]=a},3134:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=a},3795:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))};t["default"]=a},9935:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=a},7850:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))};t["default"]=a},8603:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.regex)("numeric",/^[0-9]*$/);t["default"]=a},5208:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))};t["default"]=a},367:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=(0,n.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t["default"]=a},2035:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},310:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))};t["default"]=a},8612:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))};t["default"]=a},2009:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n=r(4111),a=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,n.regex)("url",a);t["default"]=i},8751:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var n="web"==={NODE_ENV:"production",BASE_URL:"/"}.BUILD?r(9886).R:r(7801).withParams,a=n;t["default"]=a},9886:function(e,t,r){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.R=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof r.g?r.g:{},i=function(e,t){return"object"===n(e)&&void 0!==t?t:e((function(){}))},s=a.vuelidate?a.vuelidate.withParams:i;t.R=s}}]);
//# sourceMappingURL=26.0f8e4b61.js.map