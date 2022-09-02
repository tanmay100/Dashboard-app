(function(){"use strict";var t={86:function(t,e){e["Z"]={apiBaseUrl:"http://127.0.0.1:5000"}},8082:function(t,e,s){var n=s(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("SideNavbar"),e("div",{staticClass:"container"},[e("router-view")],1)],1)},i=[],r=function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("div",{staticClass:"container-fluid"},[e("span",{staticClass:"navbar-brand text-info fs-4 fw-bold me-3"},[t._v("DashBoard App")]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[t.isLoggedIn&&t.isTeacher()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/home"}},[t._v("Dashboard ")])],1):t._e(),t.isLoggedIn&&t.isTeacher()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/add-student"}},[t._v("Add Student ")])],1):t._e(),t.isLoggedIn&&t.isTeacher()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/add-assignment"}},[t._v("Add Assignment ")])],1):t._e(),t.isLoggedIn&&t.isTeacher()?e("li",{staticClass:"nav-link text-white"},[e("router-link",{attrs:{to:"/assignment-status"}},[t._v("Assignment Status")])],1):t._e(),t.isLoggedIn&&t.isTeacher()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/add-notice"}},[t._v("Add Notice ")])],1):t._e(),t.isLoggedIn&&t.isTeacher()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/profile"}},[t._v("View Profile")])],1):t._e(),t.isLoggedIn&&t.isStudent()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/student-dashboard"}},[t._v("Student Dashboard")])],1):t._e(),t.isLoggedIn&&t.isStudent()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/view-assignment"}},[t._v("View Assignment")])],1):t._e(),t.isLoggedIn&&t.isStudent()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/submitted-assignment"}},[t._v("Submitted Assignment")])],1):t._e(),t.isLoggedIn&&t.isStudent()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/view-notice"}},[t._v("View Notice")])],1):t._e(),t.isLoggedIn&&t.isStudent()?e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/profile"}},[t._v("View Profile")])],1):t._e(),t.isLoggedIn?t._e():e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/login"}},[t._v("Login ")])],1),t.isLoggedIn?t._e():e("li",{staticClass:"nav-link"},[e("router-link",{attrs:{to:"/register-student"}},[t._v("Register")])],1),t.isLoggedIn?e("li",{staticClass:"nav-link"},[e("a",{attrs:{to:"/logout"},on:{click:function(e){return e.preventDefault(),t.logoutUser.apply(null,arguments)}}},[t._v("Logout")])]):t._e()])])])])])},o=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],u=s(3822),d={name:"SideNavbar",data(){return{}},computed:{...(0,u.Se)(["isLoggedIn","user"])},methods:{...(0,u.nv)(["logout","getProfile"]),logoutUser(){this.logout()},isTeacher(){return"Teacher"==localStorage.role},isStudent(){return"student"==localStorage.role}},created(){},beforeUpdate(){this.getProfile()}},l=d,c=s(1001),g=(0,c.Z)(l,r,o,!1,null,"56900200",null),m=g.exports,f={name:"App",components:{SideNavbar:m}},h=f,p=(0,c.Z)(h,a,i,!1,null,null,null),v=p.exports,b=s(2631),_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Dashboard"},[e("div",{staticClass:"row mt-3"},[e("div",{staticClass:"col-sm-6"},[e("router-link",{attrs:{to:"/add-student"}},[e("div",{staticClass:"card count-card"},[e("p",{staticClass:"fs-2"},[t._v("Total Students")]),e("p",{staticClass:"fs-1 fw-semibold"},[t._v(t._s(t.StudentCount))])])])],1),e("div",{staticClass:"col-sm-6"},[e("router-link",{attrs:{to:"/add-assignment"}},[e("div",{staticClass:"card count-card"},[e("p",{staticClass:"fs-2"},[t._v("Assignments Added ")]),e("p",{staticClass:"fs-1 fw-semibold"},[t._v(t._s(t.AssignmentCount))])])])],1)]),e("router-link",{attrs:{to:"/add-assignment"}},[e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"card count-card"},[e("p",{staticClass:"fs-2 fw-semibold"},[t._v("Last Assignment Added")]),e("p",{staticClass:"fs-5"},[t._v("Assignment Code: "+t._s(t.LastAssignmentAdded.acode))]),e("p",{staticClass:"fs-5"},[t._v("Assignment Name: "+t._s(t.LastAssignmentAdded.aheading))]),e("p",{staticClass:"fs-5"},[t._v("Assignment Done by students: "+t._s(t.SubmittedDataCount))])])])]),e("router-link",{attrs:{to:"/add-notice"}},[e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"card count-card"},[e("p",{staticClass:"h3"},[t._v("Last Notification")]),e("p",{staticClass:"fs-5"},[t._v(t._s(t.LastNotificationAdded.ntitle))])])])])],1)},A=[],C=s(6265),k=s.n(C),y=s(86),S={name:"HomeView",components:{},data(){return{students:[],StudentCount:"",Assignments:[],AssignmentCount:"",LastAssignmentAdded:"",acode:"",aheading:"",SubmittedData:[],SubmittedDataCount:"",Ascode:this.acode,LastNotificationAdded:""}},methods:{async getStudents(){try{let{data:t}=await k().get(`${y.Z.apiBaseUrl}/api/users/get-student`);this.students=t,this.StudentCount=t.length}catch(t){console.error(t)}},async getAssignments(){let{data:t}=await k().get(`${y.Z.apiBaseUrl}/api/assignments/get-assignments`);this.Assignments=t,this.AssignmentCount=t.length,this.LastAssignmentAdded=t[t.length-1]},async getAssignmentsByCode(){let t=this.LastAssignmentAdded.acode,{data:e}=await k().get(`${y.Z.apiBaseUrl}/api/submissions/get-students-by-acode?acode=${t}`);this.SubmittedData=e,this.SubmittedDataCount=e.length},async getNotifications(){let{data:t}=await k().get(`${y.Z.apiBaseUrl}/api/notifications/get-notification`);this.Notifications=t,this.LastNotificationAdded=t[t.length-1]}},created(){this.getStudents(),this.getAssignments(),this.getNotifications()},beforeUpdate(){this.getAssignmentsByCode()}},w=S,L=(0,c.Z)(w,_,A,!1,null,null,null),q=L.exports;const I={token:localStorage.getItem("token")||"",user:{},status:"",role:localStorage.getItem("role")||""},P={isLoggedIn:t=>!!t.token,authState:t=>t.status,user:t=>t.user,role:t=>t.role},T={async login({commit:t},e){t("auth_request");let s=await k().post(`${y.Z.apiBaseUrl}/api/users/login`,e);if(s.data.success){const e=s.data.token,n=s.data.user,a=s.data.user.role;console.log(`${a} form auth js`),localStorage.setItem("token",e),localStorage.setItem("role",a),k().defaults.headers.common.Authorization=e,t("auth_success",e,n)}return s},async register({commit:t},e){t("register_request");let s=await k().post(`${y.Z.apiBaseUrl}/api/users/register-teacher`,e);return void 0!=s.data.success&&t("register-success"),s},async getProfile({commit:t}){t("profile_request");let e=await k().get(`${y.Z.apiBaseUrl}/api/users/profile`);return t("user_profile",e.data.user),e},async logout({commit:t}){await localStorage.removeItem("token"),t("logout"),delete k().defaults.headers.common.Authorization,x.push("/login")},async addstudent({commit:t},e){t("add_request");let s=await k().post(`${y.Z.apiBaseUrl}/api/users/add-student`,e);return void 0!=s.data.success&&t("add_success"),s}},Z={auth_request(t){t.status="loading"},auth_success(t,e,s){t.token=e,t.user=s,t.status="success"},register_request(t){t.status="loading"},register_success(t){t.status="success"},add_request(t){t.status="loading"},add_success(t){t.status="success"},logout(t){t.status="",t.token="",t.user=""},profile_request(t){t.status="loading"},user_profile(t,e){t.user=e}};var N={state:I,actions:T,mutations:Z,getters:P};n.ZP.use(u.ZP);var O=new u.ZP.Store({modules:{Auth:N},state:{},getters:{},mutations:{},actions:{}});n.ZP.use(b.Z);const U=[{path:"/home",name:"home",component:q,meta:{requiresAuth:!0,role:["Teacher"]}},{path:"/register-teacher",name:"registerUser",component:()=>s.e(26).then(s.bind(s,2026)),meta:{requiresGuest:!0}},{path:"/register-student",name:"StudentRegister",component:()=>s.e(850).then(s.bind(s,6850)),meta:{requiresGuest:!0}},{path:"/login",name:"LoginUser",component:()=>s.e(482).then(s.bind(s,5482)),meta:{requiresGuest:!0}},{path:"/profile",name:"EditProfile",component:()=>s.e(201).then(s.bind(s,5201)),meta:{requiresAuth:!0}},{path:"/add-notice",name:"AddNotice",component:()=>s.e(299).then(s.bind(s,7299)),meta:{requiresAuth:!0,role:["Teacher"]}},{path:"/add-student",name:"AddStudent",component:()=>s.e(232).then(s.bind(s,7232)),meta:{requiresAuth:!0,role:["Teacher"]}},{path:"/add-assignment",name:"AddAssignment",component:()=>s.e(103).then(s.bind(s,4103)),meta:{requiresAuth:!0,role:["Teacher"]}},{path:"/assignment-status",name:"AssignmentStatus",component:()=>s.e(105).then(s.bind(s,1105)),meta:{requiresAuth:!0,role:["Teacher"]}},{path:"/student-dashboard",name:"StudentDashboard",component:()=>s.e(688).then(s.bind(s,5688)),meta:{requiresAuth:!0,role:["student"]}},{path:"/view-assignment",name:"ViewAssignment",component:()=>s.e(571).then(s.bind(s,7571)),meta:{requiresAuth:!0,role:["student"]}},{path:"/submitted-assignment",name:"SubmittedAssignment",component:()=>s.e(879).then(s.bind(s,9879)),meta:{requiresAuth:!0,role:["student"]}},{path:"/view-notice",name:"ViewNotice",component:()=>s.e(101).then(s.bind(s,5101)),meta:{requiresAuth:!0,role:["student"]}},{path:"*",name:"ErrorPage",component:()=>s.e(840).then(s.bind(s,9840)),meta:{requiresAuth:!0}}],B=new b.Z({mode:"history",base:"/",routes:U});B.beforeEach(((t,e,s)=>{t.matched.some((t=>t.meta.requiresAuth))?O.getters.isLoggedIn?s():s("/login"):t.matched.some((t=>t.meta.requiresGuest))&&(O.getters.isLoggedIn?s("/"):s())}));var x=B,D=s(8735),E=s.n(D),j=s(4659);s(6744);n.ZP.config.productionTip=!1,n.ZP.use(E(),{duration:5e3,position:"bottom-right",theme:"toasted-primary",action:{text:"Okay",onClick:(t,e)=>{e.goAway(0)}}}),n.ZP.use(j.ZP),n.ZP.prototype.$http=k();const $=localStorage.getItem("token");$&&(n.ZP.prototype.$http.defaults.headers.common.Authorization=$),new n.ZP({router:x,store:O,render:t=>t(v)}).$mount("#app")}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,i){if(!n){var r=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],i=t[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&i||r>=i)&&Object.keys(s.O).every((function(t){return s.O[t](n[u])}))?n.splice(u--,1):(o=!1,i<r&&(r=i));if(o){t.splice(l--,1);var d=a();void 0!==d&&(e=d)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[n,a,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,n){return s.f[n](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{26:"0f8e4b61",101:"1e925029",103:"e6f61180",105:"88f8b70c",201:"878c847c",232:"c3e61e87",299:"5344435d",482:"dc121a54",571:"a7da6a26",688:"7fe3b889",840:"658c39df",850:"b978601d",879:"6815b318"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{26:"c6bd47a4",103:"0578ebea",105:"ac581938",201:"ae7fa2fc",232:"5380f9f5",299:"9ec17bb9",482:"20f5beee",571:"2a50f72c",688:"104fc7d7",840:"073528a1",850:"2416ee11"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="dashboard-frontend:";s.l=function(n,a,i,r){if(t[n])t[n].push(a);else{var o,u;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==e+i){o=c;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+i),o.src=n),t[n]=[a];var g=function(e,s){o.onerror=o.onload=null,clearTimeout(m);var a=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(g.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=g.bind(null,o.onerror),o.onload=g.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t=function(t,e,s,n){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)s();else{var r=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=o,a.parentNode.removeChild(a),n(u)}};return a.onerror=a.onload=i,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var s=document.getElementsByTagName("link"),n=0;n<s.length;n++){var a=s[n],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var r=document.getElementsByTagName("style");for(n=0;n<r.length;n++){a=r[n],i=a.getAttribute("data-href");if(i===t||i===e)return a}},n=function(n){return new Promise((function(a,i){var r=s.miniCssF(n),o=s.p+r;if(e(r,o))return a();t(n,o,a,i)}))},a={143:0};s.f.miniCss=function(t,e){var s={26:1,103:1,105:1,201:1,232:1,299:1,482:1,571:1,688:1,840:1,850:1};a[t]?e.push(a[t]):0!==a[t]&&s[t]&&e.push(a[t]=n(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,n){var a=s.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise((function(s,n){a=t[e]=[s,n]}));n.push(a[2]=i);var r=s.p+s.u(e),o=new Error,u=function(n){if(s.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",o.name="ChunkLoadError",o.type=i,o.request=r,a[1](o)}};s.l(r,u,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,r=n[0],o=n[1],u=n[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(u)var l=u(s)}for(e&&e(n);d<r.length;d++)i=r[d],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(l)},n=self["webpackChunkdashboard_frontend"]=self["webpackChunkdashboard_frontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(8082)}));n=s.O(n)})();
//# sourceMappingURL=app.dd29af63.js.map