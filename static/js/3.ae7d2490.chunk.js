(this.webpackJsonpsocial_web_ts=this.webpackJsonpsocial_web_ts||[]).push([[3],{298:function(t,e,a){t.exports={content:"profile_content__3R0x5"}},299:function(t,e,a){t.exports={description:"profileInfo_description__N-3QO"}},300:function(t,e,a){},301:function(t,e,a){t.exports={postsBlock:"myPosts_postsBlock__3b2mG",posts:"myPosts_posts__3l4I5"}},302:function(t,e,a){t.exports={item:"post_item__XC1dh"}},303:function(t,e,a){"use strict";a.r(e);var s=a(28),n=a(29),o=a(31),r=a(30),i=a(0),l=a.n(i),u=a(298),c=a.n(u),p=a(299),d=a.n(p),m=a(46),f=a(96),h=a.n(f),g=a(300),v=a.n(g),b=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={editMode:!1,status:t.props.status},t.activateEditMode=function(){t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.props.updateUserStatus(t.state.status)},t.onChangeStatus=function(e){t.setState({status:e.currentTarget.value})},t}return Object(n.a)(a,[{key:"componentDidUpdate",value:function(t,e,a){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return l.a.createElement("div",{className:v.a.profileStatusBlock},this.state.editMode&&l.a.createElement("input",{type:"text",value:this.state.status,autoFocus:!0,onBlur:this.deactivateEditMode,onChange:this.onChangeStatus}),!this.state.editMode&&l.a.createElement("div",null,l.a.createElement("span",{onDoubleClick:this.activateEditMode},this.props.status||"No status")))}}]),a}(l.a.Component),E=function(t){var e=t.profile;return e?l.a.createElement("div",{className:d.a.profileInfo},l.a.createElement("div",null,l.a.createElement("img",{src:"https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",alt:"main-fon"})),l.a.createElement("div",{className:d.a.description},l.a.createElement("div",null,l.a.createElement("img",{src:null!==e.photos.small?e.photos.small:h.a,alt:"user avator",width:100})),l.a.createElement(b,{status:t.status,updateUserStatus:t.updateUserStatus}),l.a.createElement("div",null,l.a.createElement("p",null,"Name : ",e.fullName),l.a.createElement("p",null,"Description : ",e.aboutMe),l.a.createElement("p",null,"lookingForAJobDescription : ",e.lookingForAJobDescription)),"ava + description")):l.a.createElement(m.a,null)},S=a(93),k=a(301),_=a.n(k),y=a(302),O=a.n(y),U=function(t){var e=t.message,a=t.likeCount;return l.a.createElement("div",{className:O.a.item},l.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmHvlQey7sRB-lIKvwZQHlY-Gwi0TIDWloz6LZcCYwdubZ5-nV&usqp=CAU",alt:"user"}),e,l.a.createElement("span",null,a," - like"))},j=a(127),M=a(128),P=a(73),w=a(65),C=Object(P.a)(30),N=l.a.memo((function(t){var e=t.profilePage,a=t.addPost;return l.a.createElement("div",{className:_.a.postsBlock},"My Posts",l.a.createElement("div",null,l.a.createElement(B,{onSubmit:function(t){a(t.newMessageBody)}})),l.a.createElement("div",{className:_.a.posts},e.posts.map((function(t){var e=t.id,a=t.message,s=t.likeCount;return l.a.createElement(U,{message:a,likeCount:s,key:e})}))))})),B=Object(M.a)({form:"addPostMessageForm"})((function(t){return l.a.createElement("form",{onSubmit:t.handleSubmit},l.a.createElement("div",null,l.a.createElement(j.a,{name:"newMessageBody",placeholder:"Enter you Post message",component:w.b,validate:[P.b,C]})),l.a.createElement("div",null,l.a.createElement("button",null,"Send")))})),I=N,A=a(10),D=Object(A.b)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(S.a)(e))}}}))(I),x=function(t){return l.a.createElement("section",{className:c.a.content},l.a.createElement(E,{profile:t.profile,status:t.status,updateUserStatus:t.updateUserStatus}),l.a.createElement(D,null))},F=a(25),G=a(7),J=function(t){Object(o.a)(a,t);var e=Object(r.a)(a);function a(){return Object(s.a)(this,a),e.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(this.props.logginedUserId&&(t=String(this.props.logginedUserId)),t||this.props.history.push("/login")),this.props.getUserProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return l.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),a}(l.a.Component);e.default=Object(G.d)(Object(A.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,logginedUserId:t.auth.id}}),{getUserProfile:S.c,getUserStatus:S.d,updateUserStatus:S.e}),F.g)(J)}}]);
//# sourceMappingURL=3.ae7d2490.chunk.js.map