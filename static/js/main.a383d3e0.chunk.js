(this.webpackJsonpsocial_web_ts=this.webpackJsonpsocial_web_ts||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/green.97a73095.png"},109:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Field is required"},a=function(e){return function(t){return t&&t.length>e?"Must be ".concat(e," characters or less"):void 0}}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(72),a=n(73),c=n(75),o=n(74),u=n(0),s=n.n(u),i=n(54),l=n(23),p=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){Object(c.a)(u,t);var n=Object(o.a)(u);function u(){return Object(r.a)(this,u),n.apply(this,arguments)}return Object(a.a)(u,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(i.a,{to:"/login"})}}]),u}(s.a.Component);return Object(l.b)(p)(t)}},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return O})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return w}));var r=n(13),a=n.n(r),c=n(28),o=n(53),u=n(8),s=n(52),i=n(69),l=n(16),p=function(e){return l.c.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return l.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},m=function(e){return l.c.put("profile/status",{status:e}).then((function(e){return e.data}))},d=function(e){var t=new FormData;return t.append("image",e),l.c.put("profile/photo",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){return e.data}))},g=function(e){return l.c.put("profile",e).then((function(e){return e.data}))},h={posts:[{id:Object(s.a)(),message:"Hello, What are you doing?",likeCount:"5"},{id:Object(s.a)(),message:"Hi, I am learning TypeScript now.",likeCount:"13"}],profile:null,status:""},b={addPostAC:function(e){return{type:"profile/ADD-POST",value:e}},deleteAC:function(e){return{type:"profile/DELETE-POST",postId:e}},setUserProfile:function(e){return{type:"profile/SET-USER-PROFILE",profile:e}},setUserStatus:function(e){return{type:"profile/SET-USER-STATUS",status:e}},savePhotoSuccess:function(e){return{type:"profile/SET-PHOTO-SUCCESS",profile:e}}},E=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:r=t.sent,n(b.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n(b.setUserStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:0===t.sent.resultCode&&n(b.setUserStatus(e)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d(e);case 3:0===(c=t.sent).resultCode&&(o=r().profilePage.profile)&&n(b.savePhotoSuccess(Object(u.a)(Object(u.a)({},o),{},{photos:c.data.photos}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.name);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=String(r().auth.id),t.prev=1,t.next=4,g(e);case 4:if(0!==(o=t.sent).resultCode){t.next=9;break}n(E(c)),t.next=11;break;case 9:return n(Object(i.a)("edit-profile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0.name);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n=Object(u.a)(Object(u.a)({},e),{},{posts:Object(o.a)(e.posts)}),r={id:Object(s.a)(),message:t.value,likeCount:"0"};return n.posts.push(r),n;case"profile/DELETE-POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"profile/SET-USER-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"profile/SET-PHOTO-SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});default:return e}}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r,a,c=n(204),o=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"api-key":"d957613d-94bb-4388-aef0-47e775e83ac5"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(53),a=n(8),c=n(52),o={dialogs:[{id:Object(c.a)(),name:"Alex",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvTQmV6oI5wUAiXdI6JjvFjPAUm7iq2AeNR45ffjomO1zLtmik&usqp=CAU"},{id:Object(c.a)(),name:"Gor",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT1zZkQjtBjyYp5uq1qhmdpmoRkTFws1hL54z8U40EQv08o06Q&usqp=CAU"},{id:Object(c.a)(),name:"Jora",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK9DkWY2BgUcJMNZXyAz6Cpmiq-AhC098wtOnBL-3foioVeyaI&usqp=CAU"},{id:Object(c.a)(),name:"Anyfriy",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqX1EK98tD5uSgn72MKv-2pEhDAPiiiIgXH7LMYAe982_CtbRN&usqp=CAU"},{id:Object(c.a)(),name:"Sveta",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb0QBmlGsym_SIuH6d-OrApu0iX0j8K4bxOufsI9D9GeKv7h1i&usqp=CAU"},{id:Object(c.a)(),name:"ergey",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_yhvGXHtP8leB8fhWCAOke-8h5gRG1Wxo6fS814OFjX_g1qOl&usqp=CAU"}],messages:[{id:Object(c.a)(),message:"Hello"},{id:Object(c.a)(),message:"How are you?"},{id:Object(c.a)(),message:"I am good!"}]},u={addMessAC:function(e){return{type:"dialogs/ADD-MESSAGE",value:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n={id:Object(c.a)(),message:t.value};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},197:function(e,t,n){e.exports={dialogs:"news_dialogs__1Dv6-"}},198:function(e,t,n){},199:function(e,t,n){},201:function(e,t,n){e.exports=n.p+"static/media/oval.9e9dc538.svg"},202:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3HUGP"}},248:function(e,t,n){e.exports=n(394)},253:function(e,t,n){},394:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n.n(r),c=n(0),o=n.n(c),u=n(72),s=n(73),i=n(75),l=n(74),p=(n(253),n(197)),f=n.n(p),m=function(){return o.a.createElement("div",{className:f.a.music},"News")},d=n(198),g=n.n(d),h=function(){return o.a.createElement("div",{className:g.a.music},"Music")},b=n(199),E=n.n(b),v=function(){return o.a.createElement("div",{className:E.a.settings},"Settings")},O=n(33),S=n(54),w=n(23),j=n(87),y=n(202),P=n.n(y),C=function(e){for(var t=Math.ceil(e.totalItemsCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var a=Math.ceil(t/e.portionSize),c=(e.portionNumber-1)*e.portionSize+1,u=e.portionNumber*e.portionSize;return o.a.createElement("div",null,e.portionNumber>1&&o.a.createElement("button",{onClick:function(){e.setPortionNumber(e.portionNumber-1)}},"\u043d\u0430\u0437\u0430\u0434"),n.filter((function(e){return e>=c&&e<=u})).map((function(t){return o.a.createElement("span",{key:t,className:e.currentPage===t?P.a.selectedPage:"",onClick:function(n){e.changedPage(t)}},t)})),a>e.portionNumber&&o.a.createElement("button",{onClick:function(){e.setPortionNumber(e.portionNumber+1)}},"\u0432\u043f\u0435\u0440\u0435\u0434"))},U=n(100),A=n.n(U),T=function(e){var t=e.user,n=e.unfollow,r=e.follow;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(O.b,{to:"/profile/"+t.id},o.a.createElement("img",{src:null!==t.photos.small?t.photos.small:A.a,alt:"user-avatar",width:100,height:100}))),t.followed?o.a.createElement("button",{onClick:function(){n(t.id)}},"unfollow"):o.a.createElement("button",{onClick:function(){r(t.id)}},"follow")),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("span",null,t.name),o.a.createElement("span",null,t.status)),o.a.createElement("div",null,o.a.createElement("span",null,"user.location.country"),o.a.createElement("span",null,"user.location.city"))))},I=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={portionNumber:1},e.changedPage=function(t){e.props.getUsers(t,e.props.pageSize)},e.setPortionNumber=function(t){e.setState({portionNumber:t})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.props.isFetching?o.a.createElement(j.a,null):o.a.createElement(k,{changedPage:this.changedPage,currentPage:this.props.currentPage,followSuccess:this.props.followSuccess,unFollowSuccess:this.props.unFollowSuccess,pageSize:this.props.pageSize,usersPage:this.props.users,totalUsersCount:this.props.totalUsersCount,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow,portionNumber:this.state.portionNumber,setPortionNumber:this.setPortionNumber}))}}]),n}(o.a.Component),k=function(e){var t=e.pageSize,n=e.totalUsersCount,r=e.currentPage,a=e.changedPage,c=e.portionNumber,u=e.setPortionNumber;return o.a.createElement("div",null,o.a.createElement(C,{portionNumber:c,pageSize:t,totalItemsCount:n,currentPage:r,changedPage:a,portionSize:10,setPortionNumber:u}),e.usersPage.map((function(t){return o.a.createElement(T,{user:t,follow:function(){e.follow(t.id)},unfollow:function(){e.unfollow(t.id)},key:t.id})})))},N=n(13),F=n.n(N),x=n(28),L=n(53),_=n(8),R=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)({},e),r):e}))},G=n(16),z={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return G.c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return G.c.post("follow/".concat(e),{}).then((function(e){return e.data}))},unFollow:function(e){return G.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},D={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},q={followSuccess:function(e){return{type:"FOLLOW",userId:e}},unFollowSuccess:function(e){return{type:"UNFOLLOW",userId:e}},setUsers:function(e){return{type:"SET-USERS",users:e}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},setUsersTotalCount:function(e){return{type:"SET-TOTAL-COUNT",totalCount:e}},toggleIsFetching:function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},toggleFollowingInProgress:function(e,t){return{type:"TOGGLE-FOLLOWING-IN-PROGRESS",isFetching:e,userId:t}}},M=function(){var e=Object(x.a)(F.a.mark((function e(t,n,r,a){var c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(q.toggleFollowingInProgress(!0,n)),e.next=3,r(n);case 3:c=e.sent,t(q.toggleFollowingInProgress(!1,n)),0===c.resultCode&&t(a(n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(_.a)(Object(_.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-COUNT":return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE-IS-FETCHING":return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-FOLLOWING-IN-PROGRESS":return Object(_.a)(Object(_.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(L.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},W=n(151),K=n(205),X=function(e){return e.usersPage.isFetching},Q=Object(K.a)((function(e){return e.usersPage.users}),X,(function(e,t){return e.filter((function(e){return!0}))})),B=function(e){return e.usersPage.pageSize},J=function(e){return e.usersPage.totalUsersCount},V=function(e){return e.usersPage.currentPage},Z=function(e){return e.usersPage.followingInProgress},Y=Object(W.a)(Object(w.b)((function(e){return{users:Q(e),pageSize:B(e),totalUsersCount:J(e),currentPage:V(e),isFetching:X(e),followingInProgress:Z(e)}}),{followSuccess:q.followSuccess,unFollowSuccess:q.unFollowSuccess,setCurrentPage:q.setCurrentPage,setUsersTotalCount:q.setUsersTotalCount,toggleFollowingInProgress:q.toggleFollowingInProgress,getUsers:function(e,t){return function(){var n=Object(x.a)(F.a.mark((function n(r){var a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(q.toggleIsFetching(!0)),r(q.setCurrentPage(e)),n.next=4,z.getUsers(e,t);case 4:a=n.sent,r(q.toggleIsFetching(!1)),r(q.setUsers(a.items)),r(q.setUsersTotalCount(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(x.a)(F.a.mark((function t(n){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=z.follow.bind(z),M(n,e,r,q.followSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(x.a)(F.a.mark((function t(n){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=z.unFollow.bind(z),M(n,e,r,q.unFollowSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(I)),$=n(192),ee=n(193),te=n(85),ne=n(109),re=n(69),ae=function(){return G.c.get("auth/me").then((function(e){return e.data}))},ce=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return G.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},oe=function(){return G.c.delete("auth/login").then((function(e){return e.data}))},ue=function(){return G.c.get("security/get-captcha-url").then((function(e){return e.data}))},se={id:null,email:null,login:null,isAuth:!1,authUser:null,captchaUrl:null},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET-USER-DATA":case"auth/GET-CAPTCHA-URL":return Object(_.a)(Object(_.a)({},e),t.payload);case"auth/SET-AUTH-USER":return Object(_.a)(Object(_.a)({},e),{},{authUser:t.authUser});default:return e}},le=function(e,t,n,r){return{type:"auth/SET-USER-DATA",payload:{id:e,email:t,login:n,isAuth:r}}},pe=function(e){return{type:"auth/GET-CAPTCHA-URL",payload:{captchaUrl:e}}},fe=function(){return function(){var e=Object(x.a)(F.a.mark((function e(t){var n,r,a,c,o;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae();case 2:(n=e.sent).resultCode===G.a.Success&&(r=n.data,a=r.id,c=r.email,o=r.login,t(le(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){return function(){var e=Object(x.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe();case 2:e.sent.resultCode===G.a.Success&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},de=function(){return function(){var e=Object(x.a)(F.a.mark((function e(t){var n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue();case 3:n=e.sent,t(pe(n.url)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.name);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},ge=n(88),he=n.n(ge),be=Object(ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return o.a.createElement("form",{onSubmit:t},o.a.createElement("div",null,o.a.createElement($.a,{name:"login",placeholder:"Login",component:te.a,validate:[ne.b]})),o.a.createElement("div",null,o.a.createElement($.a,{name:"password",placeholder:"Password",type:"password",component:te.a,validate:[ne.b]})),o.a.createElement("div",null,o.a.createElement($.a,{name:"checkbox",type:"checkbox",component:te.a})),r&&o.a.createElement("img",{src:r,alt:"captcha"}),r&&o.a.createElement($.a,{name:"captcha",placeholder:"captcha",component:te.a,validate:[ne.b]}),n&&o.a.createElement("div",{className:he.a.commonErrorField},n),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"Login")))})),Ee=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,r){return function(){var a=Object(x.a)(F.a.mark((function a(c){var o,u;return F.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ce(e,t,n,r);case 2:(o=a.sent).resultCode===G.a.Success?c(fe()):(o.resultCode===G.b.CaptchaIsRequired&&c(de()),u=o.messages.length>0?o.messages[0]:"some error occurred",c(Object(re.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:me})((function(e){if(e.isAuth)return o.a.createElement(S.a,{to:"/profile"});return o.a.createElement("div",null,o.a.createElement("h1",null,"Login"),o.a.createElement(be,{onSubmit:function(t){e.login(t.login,t.password,t.checkbox,t.captcha)},captchaUrl:e.captchaUrl,initialValues:{login:"free@samuraijs.com",password:"free"}}))})),ve=n(15),Oe=n(152),Se=n(183),we="SW/FRIENDS/SET-USERS",je="SW/FRIENDS/SET-STATUS",ye={users:[],status:"NOT_INITIALIZED"},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(_.a)(Object(_.a)({},e),{},{status:t.status});case we:return Object(_.a)(Object(_.a)({},e),{},{users:[].concat(Object(L.a)(e.users),Object(L.a)(t.users))});default:return e}},Ce=n(195),Ue=n(207),Ae={initialized:!1},Te=function(){return{type:"APP/SET_INITIALIZED"}},Ie=Object(ve.c)({profilePage:Oe.b,dialogsPage:Se.b,sidebar:Pe,usersPage:H,auth:ie,form:Ce.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_INITIALIZED":return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}}}),ke=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d,Ne=Object(ve.e)(Ie,ke(Object(ve.a)(Ue.a)));window.store=Ne;var Fe=Ne,xe=(n(371),n(402)),Le=n(397),_e=n(403),Re=n(404),Ge=n(405),ze=n(398),De=n(399),qe=n(400),Me=n(401),He=function(e){return e.auth.isAuth},We=function(e){return e.auth.login},Ke=function(e){return e.auth.authUser},Xe=function(e){var t=Le.a.Header,n=Object(w.d)(He),r=(Object(w.d)(We),Object(w.d)(Ke),Object(w.d)((function(e){var t;return null===(t=e.profilePage.profile)||void 0===t?void 0:t.photos.small}))),a=Object(w.c)();return o.a.createElement(t,{className:"header"},o.a.createElement("div",{className:"logo"}),o.a.createElement(ze.a,null,o.a.createElement(De.a,{span:18},o.a.createElement(xe.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"]},o.a.createElement(xe.a.Item,{key:"1"},o.a.createElement(O.b,{to:"/users"},"Users")))),n?o.a.createElement(o.a.Fragment,null,o.a.createElement(De.a,{span:1},r?o.a.createElement(qe.a,{src:r}):o.a.createElement(qe.a,{src:A.a})),o.a.createElement(De.a,{span:5},o.a.createElement(Me.a,{onClick:function(){a(me())}},"logOut"))):o.a.createElement(De.a,{span:6},o.a.createElement(Me.a,null,o.a.createElement(O.b,{to:"/login"},"login")))))},Qe=xe.a.SubMenu,Be=Le.a.Content,Je=Le.a.Footer,Ve=Le.a.Sider,Ze=o.a.lazy((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,540))})),Ye=o.a.lazy((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,539))})),$e=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){if(!this.props.initialized)return o.a.createElement(j.a,null);var e=this.props,t=(e.match,e.location);e.history;return o.a.createElement(Le.a,null,o.a.createElement(Xe,null),o.a.createElement(Be,{style:{padding:"0 50px"}},o.a.createElement(Le.a,{className:"site-layout-background",style:{padding:"24px 0"}},o.a.createElement(Ve,{className:"site-layout-background",width:200},o.a.createElement(xe.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},selectedKeys:[t.pathname]},o.a.createElement(Qe,{key:"sub1",icon:o.a.createElement(_e.a,null),title:"My Profile"},o.a.createElement(xe.a.Item,{key:"/profile"}," ",o.a.createElement(O.b,{to:"/profile"},"Profile")),o.a.createElement(xe.a.Item,{key:"/dialogs"}," ",o.a.createElement(O.b,{to:"/dialogs"},"Messages"))),o.a.createElement(Qe,{key:"sub2",icon:o.a.createElement(Re.a,null),title:"News"},o.a.createElement(xe.a.Item,{key:"/news"}," ",o.a.createElement(O.b,{to:"/news"},"News"))),o.a.createElement(Qe,{key:"sub3",icon:o.a.createElement(Ge.a,null),title:"Music"},o.a.createElement(xe.a.Item,{key:"/music"}," ",o.a.createElement(O.b,{to:"/music"},"Music"))),o.a.createElement(Qe,{key:"sub4",icon:o.a.createElement(Ge.a,null),title:"Users"},o.a.createElement(xe.a.Item,{key:"/users"}," ",o.a.createElement(O.b,{to:"/users"},"Users"))))),o.a.createElement(Be,{style:{padding:"0 24px",minHeight:280}},o.a.createElement(c.Suspense,{fallback:o.a.createElement(j.a,null)},o.a.createElement(S.d,null,o.a.createElement(S.b,{exact:!0,path:"/"},o.a.createElement(S.a,{to:"/profile"})),o.a.createElement(S.b,{path:"/profile/:userId?",render:function(){return o.a.createElement(Ye,null)}}),o.a.createElement(S.b,{path:"/dialogs",render:function(){return o.a.createElement(Ze,null)}}),o.a.createElement(S.b,{path:"/music",render:function(){return o.a.createElement(h,null)}}),o.a.createElement(S.b,{path:"/news",component:m}),o.a.createElement(S.b,{path:"/settings",component:v}),o.a.createElement(S.b,{path:"/users",render:function(){return o.a.createElement(Y,null)}}),o.a.createElement(S.b,{path:"/login",render:function(){return o.a.createElement(Ee,null)}}),o.a.createElement(S.b,{path:"*",render:function(){return o.a.createElement("div",null,"404 - NOT FOUND ")}})))))),o.a.createElement(Je,{style:{textAlign:"center"}}," Social network \xa92020"))}}]),n}(o.a.Component),et=Object(ve.d)(S.g,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(fe());Promise.all([t]).then((function(){e(Te())})).catch((function(){e(Te())}))}}}))($e),tt=function(){return o.a.createElement(w.a,{store:Fe},o.a.createElement(O.a,null,o.a.createElement(et,null)))};a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(tt,null)),document.getElementById("root"))},85:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var r=n(217),a=n(0),c=n.n(a),o=n(88),u=n.n(o),s=function(e){return function(t){var n=t.input,a=t.meta,o=Object(r.a)(t,["input","meta"]),s=a.touched&&a.error;return c.a.createElement("div",{className:"".concat(u.a.formControl," ").concat(s?u.a.error:"")},c.a.createElement("div",null,c.a.createElement(e,Object.assign({},n,o))),s&&c.a.createElement("span",null,a.error))}},i=s("textarea"),l=s("input")},87:function(e,t,n){"use strict";var r=n(201),a=n.n(r),c=n(0),o=n.n(c);t.a=function(){return o.a.createElement("img",{src:a.a,alt:"preloader",style:{margin:"300px 300px"}})}},88:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3ScpV",error:"FormsControls_error__2YSjM",commonErrorField:"FormsControls_commonErrorField__3aTah"}}},[[248,1,2]]]);
//# sourceMappingURL=main.a383d3e0.chunk.js.map