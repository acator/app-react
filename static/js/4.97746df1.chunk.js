(this.webpackJsonpreact_kabzda_1=this.webpackJsonpreact_kabzda_1||[]).push([[4],{382:function(e,t,s){"use strict";s.d(t,"a",(function(){return p}));var c=s(4),n=s(30),i=s(31),o=s(33),a=s(32),r=s(1),l=s.n(r),j=s(13),u=s(11),d=s(0),b=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(r,t);var s=Object(a.a)(r);function r(){return Object(n.a)(this,r),s.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return!1===this.props.isAuth?Object(d.jsx)(u.a,{to:"/login"}):Object(d.jsx)(e,Object(c.a)({},this.props))}}]),r}(l.a.Component);return Object(j.connect)(b)(t)}},384:function(e,t,s){},387:function(e,t,s){"use strict";s.r(t);var c=s(4),n=s(30),i=s(31),o=s(33),a=s(32),r=s(13),l=(s(384),s(1)),j=s.n(l),u=s(0),d=function(e){return Object(u.jsxs)("div",{className:"publ_posts",children:[Object(u.jsx)("div",{className:"user_photo",children:Object(u.jsx)("img",{alt:"users",src:"http://chundra.ru/uploads/posts/2009-07/sean-crane-46.jpg"})}),Object(u.jsxs)("div",{className:"block_post",children:[Object(u.jsx)("div",{className:"user_name",children:"\u041e\u043b\u0435\u0433 \u041e\u043b\u0435\u0433\u043e\u0432\u0438\u0447"}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{className:"user_text",children:e.message}),Object(u.jsxs)("div",{className:"box_like_dis",children:[Object(u.jsxs)("div",{className:"like",children:["Like ",e.like]}),Object(u.jsxs)("div",{className:"dislike",children:["DisLike ",e.dislike]})]})]})]})},b=s(53),p=s(45),h=s(133),O=function(e){var t=Object(l.useState)(!1),s=Object(p.a)(t,2),c=s[0],n=s[1],i=Object(l.useState)(e.status),o=Object(p.a)(i,2),a=o[0],r=o[1];Object(l.useEffect)((function(){r(e.status)}),[e.status]);return Object(u.jsxs)(u.Fragment,{children:[!c&&Object(u.jsx)("div",{children:Object(u.jsx)("span",{onDoubleClick:function(){n(!0)},children:""!==e.status?e.status:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"})}),c&&Object(u.jsx)("div",{children:Object(u.jsx)("input",{onChange:function(e){r(e.currentTarget.value)},onBlur:function(){n(!1),e.updateStatus(a)},autoFocus:!0,type:"text",value:a})})]})},x=s(171),f=s(40),m=s.n(f),v=s(124),g=function(e){var t=Object(l.useState)(!1),s=Object(p.a)(t,2),c=s[0],n=s[1],i=Object(l.useState)(!1),o=Object(p.a)(i,2),a=o[0],r=o[1];return Object(u.jsxs)("div",{className:"person",children:[Object(u.jsx)("div",{id:"userPhoto",className:"person_photo",children:Object(u.jsx)("img",{alt:"profile",src:e.profile.photos.large||h.a})}),Object(u.jsxs)("div",{className:"person_info",children:[Object(u.jsx)("div",{className:"size_font"})," ",Object(u.jsx)("div",{className:"Name padding ",children:Object(u.jsx)("span",{className:"info-person",children:e.profile.fullName})}),Object(u.jsx)("br",{})]}),e.status&&Object(u.jsx)("div",{className:"status",children:Object(u.jsx)(O,{status:e.status,updateStatus:e.updateStatus})}),Object(u.jsx)("button",{className:"button_edit",onClick:function(){return n(!0)},children:"Eddit Photo"}),c&&Object(u.jsx)("div",{className:"editPhotoContainer",children:Object(u.jsxs)("div",{className:"editPhoto",children:[Object(u.jsx)("div",{className:"choosePhoto",children:e.isOur&&Object(u.jsx)("input",{id:"file-upload-button",type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}})}),Object(u.jsx)("button",{className:"closeEdit",onClick:function(){return n(!1)},children:Object(u.jsx)("img",{alt:"close",src:x.a,height:"15px"})}),Object(u.jsx)("div",{className:"showPhoto",children:Object(u.jsx)("button",{onClick:function(){return r(!0)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0444\u043e\u0442\u043e"})})]})}),a&&m.a.createPortal(Object(u.jsx)(v.a,{children:Object(u.jsxs)("div",{className:"modalForPhoto",children:[Object(u.jsx)("img",{alt:"large",src:e.profile.photos.large||h.a}),Object(u.jsx)("button",{onClick:function(){return r(!1)},children:Object(u.jsx)("img",{alt:"close",src:x.a})})]})}),document.getElementById("portal"))]})},k=function(e){return Object(u.jsxs)("form",{className:"form_post_send",children:[Object(u.jsx)("h2",{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u043e\u0441\u0442"}),Object(u.jsx)("input",{value:e.newPost,onChange:function(t){e.setPostText(t.target.value)},name:"postText",type:"text"}),Object(u.jsx)("input",{type:"button",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",onClick:function(){e.addPost(e.newPost)}})]})},P=s(172),N=s(173),y=(s(183),Object(N.a)({form:"profile"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsxs)("div",{children:[" \u041e\u0431\u043e \u043c\u043de",Object(u.jsx)(P.a,{component:"input",type:"text",name:"aboutMe",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435"})]}),Object(u.jsxs)("div",{children:[" lookingForAJob:",Object(u.jsx)(P.a,{component:"input",type:"checkbox",name:"lookingForAJob"})]}),Object(u.jsxs)("div",{children:[" lookingForAJobDescription: ",Object(u.jsx)(P.a,{component:"textarea",type:"text",name:"lookingForAJobDescription",placeholder:"lookingForAJobDescription"})]}),Object(u.jsxs)("div",{children:[" fullName: ",Object(u.jsx)(P.a,{type:"text",component:"input",name:"fullName",placeholder:"fullName"})]}),Object.keys(e.profile.contacts).map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:e}),Object(u.jsx)(P.a,{type:"text",component:"input",placeholder:e,name:"contacts."+e})]},e)})),e.error&&Object(u.jsx)("div",{className:"summeryError",children:e.error}),Object(u.jsx)("button",{children:"\u041e\u0442\u0440\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}))),_=function(e){var t=e.contactTitle,s=e.contactValue;return Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:t}),":",Object(u.jsx)("span",{children:s})]})},C=function(e){return Object(u.jsxs)("div",{className:"popup",children:[e.isOur&&Object(u.jsx)("button",{onClick:e.goEditMode,children:"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(u.jsx)("button",{className:"close",onClick:e.goSetClose}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"\u041e\u0431\u043e \u043c\u043de: "}),Object(u.jsx)("span",{children:e.profile.aboutMe})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"lookingForAJob: "}),Object(u.jsx)("span",{children:e.profile.lookingForAJob?"yes":"no"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"lookingForAJobDescription: "}),e.profile.lookingForAJobDescription||"\u041d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",Object(u.jsx)("span",{})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"fullName: "}),Object(u.jsx)("span",{children:e.profile.fullName})]})]})},S=function(e){var t=Object(l.useState)(!1),s=Object(p.a)(t,2),c=s[0],n=s[1],i=Object(l.useState)(!1),o=Object(p.a)(i,2),a=o[0],r=o[1],j=Object(l.useState)(!1),d=Object(p.a)(j,2),b=d[0],h=d[1];return Object(u.jsxs)("div",{className:"mini_nav",children:[Object(u.jsx)("div",{className:"link_info",onClick:function(){r(!0)},id:"link_info",children:"\u041e\u0431\u043e \u043c\u043d\u0435 "}),a&&Object(u.jsx)("div",{id:"overlay",children:c?m.a.createPortal(Object(u.jsx)(v.a,{children:Object(u.jsx)(y,{initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){n(!1)}))},profile:e.profile,isOur:e.isOur,goEditMode:function(){n(!1)}})}),document.getElementById("portal")):m.a.createPortal(Object(u.jsx)(v.a,{children:Object(u.jsx)(C,{profile:e.profile,isOur:e.isOur,goEditMode:function(){n(!0)},goSetClose:function(){r(!1)}})}),document.getElementById("portal"))}),Object(u.jsx)("div",{className:"link_info",onClick:function(){h(!0)},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),b&&m.a.createPortal(Object(u.jsx)(v.a,{children:Object(u.jsx)("div",{id:"contact",children:Object(u.jsxs)("div",{className:"contactContainer",children:[Object(u.jsx)("button",{className:"close",onClick:function(){h(!1)},children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object.keys(e.profile.contacts).map((function(t){return Object(u.jsx)(_,{contactTitle:t,contactValue:e.profile.contacts[t]},t)}))]})})}),document.getElementById("portal")),Object(u.jsx)("div",{className:"link_info",children:"\u0414\u0440\u0443\u0437\u044c\u044f"})]})},A=function(e){var t=[];e.postDate.map((function(e){return t.unshift(e)}));var s=t.map((function(e){return Object(u.jsx)(d,{message:e.message,like:e.like,dislike:e.dislike},e.id)}));return e.profile?Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("div",{className:"container_info",children:[Object(u.jsx)(g,Object(c.a)({},e)),Object(u.jsx)(S,Object(c.a)({},e))]}),Object(u.jsx)("div",{className:"my_posts",children:Object(u.jsx)(k,{addPost:e.addPost,setPostText:e.setPostText,newPost:e.newPost})}),s]}):Object(u.jsx)(b.a,{})},w=s(156),D=s(11),F=s(382),E=s(10),I=function(e){Object(o.a)(s,e);var t=Object(a.a)(s);function s(){var e;Object(n.a)(this,s);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).componentDidMount=function(){e.refresh()},e.componentDidUpdate=function(t){e.props.match.params.userId!==t.match.params.userId&&e.refresh()},e}return Object(i.a)(s,[{key:"refresh",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId),this.props.getStatus(e),this.props.getProfile(e)}},{key:"render",value:function(){return Object(u.jsx)(A,Object(c.a)(Object(c.a)({saveProfile:this.props.saveProfile,savePhoto:this.savePhoto,setPostText:this.props.setPostText,isOur:!this.props.match.params.userId},this.props),{},{profile:this.props.profile,newPost:this.props.newPost,updateStatus:this.props.updateStatus,status:this.props.status}))}}]),s}(j.a.Component),J=Object(E.compose)(Object(r.connect)((function(e){return{newPost:e.postPage.newPostText,postDate:e.postPage.postDate,profile:e.postPage.profile,isAuth:e.auth.isAuth,status:e.postPage.status,userId:e.auth.userId}}),{setUserProfile:w.h,addPost:w.a,getProfile:w.c,getStatus:w.d,updateStatus:w.i,savePhoto:w.e,saveProfile:w.f,setPostText:w.g}),D.g,F.a)(I);t.default=J}}]);
//# sourceMappingURL=4.97746df1.chunk.js.map