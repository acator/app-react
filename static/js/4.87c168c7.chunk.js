(this.webpackJsonpreact_kabzda_1=this.webpackJsonpreact_kabzda_1||[]).push([[4],{290:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var c=s(5),i=s(33),n=s(34),a=s(37),r=s(36),l=s(0),o=s.n(l),j=s(13),d=s(11),u=s(1),b=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(a.a)(l,t);var s=Object(r.a)(l);function l(){return Object(i.a)(this,l),s.apply(this,arguments)}return Object(n.a)(l,[{key:"render",value:function(){return!1===this.props.isAuth?Object(u.jsx)(d.a,{to:"/login"}):Object(u.jsx)(e,Object(c.a)({},this.props))}}]),l}(o.a.Component);return Object(j.b)(b)(t)}},291:function(e,t,s){},294:function(e,t,s){"use strict";s.r(t);var c=s(5),i=s(33),n=s(34),a=s(37),r=s(36),l=s(13),o=(s(291),s(0)),j=s.n(o),d=s(1),u=function(e){return Object(d.jsxs)("div",{className:"publ_posts",children:[Object(d.jsx)("div",{className:"user_photo",children:Object(d.jsx)("img",{alt:"users",src:"http://chundra.ru/uploads/posts/2009-07/sean-crane-46.jpg"})}),Object(d.jsxs)("div",{className:"block_post",children:[Object(d.jsx)("div",{className:"user_name",children:"\u041e\u043b\u0435\u0433 \u041e\u043b\u0435\u0433\u043e\u0432\u0438\u0447"}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"user_text",children:e.message}),Object(d.jsxs)("div",{className:"box_like_dis",children:[Object(d.jsxs)("div",{className:"like",children:["Like ",e.like]}),Object(d.jsxs)("div",{className:"dislike",children:["DisLike ",e.dislike]})]})]})]})},b=(s(97),s(39)),p=s(46),O=s(122),h=s(123),x=s(63),f=s(124),v=function(e){var t=Object(o.useState)(!1),s=Object(f.a)(t,2),c=s[0],i=s[1],n=Object(o.useState)(e.status),a=Object(f.a)(n,2),r=a[0],l=a[1];Object(o.useEffect)((function(){l(e.status)}),[e.status]);return Object(d.jsxs)(d.Fragment,{children:[!c&&Object(d.jsx)("div",{children:Object(d.jsx)("span",{onDoubleClick:function(){i(!0)},children:""!==e.status?e.status:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"})}),c&&Object(d.jsx)("div",{children:Object(d.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){i(!1),e.updateStatus(r)},autoFocus:!0,type:"text",value:r})})]})},m=Object(p.a)(10),k=Object(h.a)({form:"post"})((function(e){return Object(d.jsxs)("form",{className:"form_post_send",onSubmit:e.handleSubmit,children:[Object(d.jsx)(O.a,{component:x.b,name:"postText",validate:[p.b,m]}),Object(d.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})),y=function(e){var t=e.postDate.map((function(e){return Object(d.jsx)(u,{message:e.message,like:e.like,dislike:e.dislike})}));if(!e.profile)return Object(d.jsx)(b.a,{});return Object(d.jsxs)("div",{className:"content",children:[Object(d.jsxs)("div",{className:"container_info",children:[Object(d.jsxs)("div",{className:"person",children:[Object(d.jsx)("div",{className:"status",children:Object(d.jsx)(v,{status:e.status,updateStatus:e.updateStatus})}),Object(d.jsx)("div",{className:"person_photo",children:Object(d.jsx)("img",{alt:"profile",src:e.profile.photos.large=e.profile.photos.large})}),Object(d.jsxs)("div",{className:"person_info",children:[Object(d.jsx)("div",{className:"size_font"})," ",Object(d.jsx)("div",{className:"Name padding ",children:Object(d.jsx)("span",{className:"info-person",children:e.profile.fullName})}),Object(d.jsx)("br",{})]})]}),Object(d.jsxs)("div",{className:"mini_nav",children:[Object(d.jsx)("div",{className:"link_info",onClick:e.swa,id:"link_info",children:"\u041e\u0431\u043e \u043c\u043d\u0435"}),Object(d.jsx)("div",{id:"overlay",children:Object(d.jsxs)("div",{className:"popup",children:[Object(d.jsx)("button",{className:"close",onClick:e.swa2,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"lookingForAJob: "}),e.profile.aboutMe,Object(d.jsx)("span",{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"lookingForAJob: "}),e.profile.lookingForAJobDescription,Object(d.jsx)("span",{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"fullName: "}),Object(d.jsx)("span",{children:e.profile.fullName})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),Object(d.jsx)("span",{children:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"\u0413\u043e\u0440\u043e\u0434: "}),Object(d.jsx)("span",{children:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"\u0421\u0442\u0440\u0430\u043d\u0430: "}),Object(d.jsx)("span",{children:" \u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435: "}),Object(d.jsx)("span",{children:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]})]})}),Object(d.jsx)("div",{className:"link_info",onClick:e.swa3,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(d.jsx)("div",{id:"contact",children:Object(d.jsxs)("div",{className:"contactContainer",children:[Object(d.jsx)("button",{className:"close",onClick:e.swa4,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"facebook: "}),null!=e.profile.contacts.facebook?e.profile.contacts.facebook:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d",Object(d.jsx)("span",{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"website: "}),Object(d.jsx)("span",{children:null!=e.profile.contacts.website?e.profile.contacts.website:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"vk: "}),Object(d.jsx)("span",{children:null!=e.profile.contacts.vk?e.profile.contacts.vk:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"twitter: "}),Object(d.jsx)("span",{children:null!=e.profile.contacts.twitter?e.profile.contacts.twitter:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"instagram: "}),Object(d.jsx)("span",{children:null!=e.profile.contacts.instagram?e.profile.contacts.instagram:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:"youtube: "}),Object(d.jsx)("span",{children:null!=e.profile.contacts.youtube?e.profile.contacts.youtube:"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d"})]})]})}),Object(d.jsx)("div",{className:"link_info",children:"\u0414\u0440\u0443\u0437\u044c\u044f"})]})]}),Object(d.jsx)("div",{className:"my_posts",children:Object(d.jsx)(k,{onSubmit:function(t){e.addPost(t.postText)}})}),t]})},N=s(121),g=s(11),w=s(290),_=s(10),S=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(){var e;Object(i.a)(this,s);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){var t=e.props.match.params.userId;t||(t=e.props.userId),e.props.getStatus(t),e.props.getProfile(t)},e}return Object(n.a)(s,[{key:"swa",value:function(){var e=document.querySelector("#overlay");e.style.visibility="visible",e.style.opacity="1",e.style.transition="all 0.7s ease-out 0s"}},{key:"swa2",value:function(){var e=document.querySelector("#overlay");e.style.visibility="hidden",e.style.opacity="0"}},{key:"swa3",value:function(){var e=document.querySelector("#contact");e.style.visibility="visible",e.style.opacity="1",e.style.transition="all 0.7s ease-out 0s"}},{key:"swa4",value:function(){var e=document.querySelector("#contact");e.style.visibility="hidden",e.style.opacity="0"}},{key:"render",value:function(){return Object(d.jsx)(y,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,swa:this.swa,swa2:this.swa2,swa3:this.swa3,swa4:this.swa4,updateStatus:this.props.updateStatus,status:this.props.status}))}}]),s}(j.a.Component),P=Object(_.d)(Object(l.b)((function(e){return{newPost:e.postPage.newPostText,postDate:e.postPage.postDate,profile:e.postPage.profile,isAuth:e.auth.isAuth,status:e.postPage.status,userId:e.auth.userId}}),{setUserProfile:N.e,addPost:N.a,getProfile:N.c,getStatus:N.d,updateStatus:N.f}),g.f,w.a)(S);t.default=P}}]);
//# sourceMappingURL=4.87c168c7.chunk.js.map