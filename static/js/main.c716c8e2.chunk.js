(this.webpackJsonpsummerblog=this.webpackJsonpsummerblog||[]).push([[0],{55:function(e,t,n){},79:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(22),s=n.n(a),r=(n(54),n(55),n(23)),o=n(24),i=n(33),j=n(1);var l=function(e){return Object(j.jsxs)(o.a,{className:e.className+"",variant:"light",expand:"md",children:[Object(j.jsx)(o.a.Brand,{href:"#/home",children:Object(j.jsx)("h1",{children:"\u2600\u26f1Blog"})}),Object(j.jsx)(o.a.Toggle,{"aria-controls":"header-navbar"}),Object(j.jsx)(o.a.Collapse,{id:"header-navbar",children:Object(j.jsxs)(i.a,{className:"ml-auto main-navigation",children:[Object(j.jsx)(i.a.Link,{className:"px-3",href:"#/home",children:"Home"}),Object(j.jsx)(i.a.Link,{className:"px-3",href:"#/about",children:"About"})]})})]})},b=n(20),d=n.n(b),u=n(31),m=n(32),x=n.n(m),h="https://summer-blog-api.herokuapp.com/blog/post";function O(){return(O=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(h);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(h,"/").concat(t,"/comment"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(u.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("".concat(h,"/").concat(t,"/comment"),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(38),g=n(7);n(79);var N=function(){return Object(j.jsxs)("div",{className:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})},y=n(19),w=n(28);function S(e,t){e.preventDefault();var n=e.target.elements,c=n.owner,a=n.text;(function(e,t){return f.apply(this,arguments)})(t,{owner:c=c.value,text:a=a.value}).then((function(){window.location.reload()}))}var k=function(e){var t=e.id;return Object(j.jsxs)(y.a,{className:"border-bottom pb-3",onSubmit:function(e){S(e,t)},action:"http://localhost:3000/blog/post/".concat(t,"/comment"),method:"POST",children:[Object(j.jsxs)(y.a.Group,{controlId:"formName",children:[Object(j.jsx)(y.a.Label,{children:"Your name"}),Object(j.jsx)(y.a.Control,{name:"owner",type:"text",required:!0,maxLength:"20",autoComplete:"off"})]}),Object(j.jsxs)(y.a.Group,{controlId:"formMessage",children:[Object(j.jsx)(y.a.Label,{children:"Message"}),Object(j.jsx)(y.a.Control,{name:"text",className:"new-comment-textarea",as:"textarea",required:!0,maxLength:"255",autoComplete:"off"})]}),Object(j.jsx)(w.a,{variant:"primary",type:"submit",children:"Submit"})]})},L=n(16),C=n(21);var D=function(e){var t=Object(g.g)().id,n=Object(c.useState)([]),a=Object(r.a)(n,2),s=a[0],o=a[1],i=Object(c.useState)(!1),l=Object(r.a)(i,2),b=l[0],d=l[1];Object(c.useEffect)((function(){null!=t&&function(e){return p.apply(this,arguments)}(t).then((function(e){o(e.data)})).catch((function(e){e.response.status}))}),[t]);var u=e.posts,m=e.loading,x=u.find((function(e){return e._id===t}));return Object(j.jsx)(C.a,{className:"d-flex justify-content-center",fluid:!0,children:x?Object(j.jsxs)("div",{className:"post mt-4",children:[Object(j.jsx)("h1",{children:x.title}),Object(j.jsx)("p",{className:"text-muted",children:new Date(x.createdAt).toLocaleDateString()}),Object(j.jsx)("div",{className:"post-content",dangerouslySetInnerHTML:{__html:x.html}}),Object(j.jsxs)("section",{className:"comments my-5 pt-3 border-top",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h2",{children:"Comments"})}),Object(j.jsx)(w.a,{onClick:function(){d(!b)},className:"new-comment-btn my-3",children:"New Comment"}),b&&Object(j.jsx)(k,{id:t}),Object(j.jsx)("div",{children:s.length>0&&s.map((function(e){return Object(j.jsx)(L.a,{className:"post-summary my-3 w-100 position-relative",children:Object(j.jsxs)(L.a.Body,{className:"pb-4",children:[Object(j.jsx)(L.a.Title,{children:e.owner}),e.text,Object(j.jsx)("div",{className:"text-muted position-absolute comment-time",children:new Date(e.createdAt).toLocaleDateString()})]})},e._id)}))})]})]}):m?Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)(N,{})}):Object(j.jsx)("div",{className:"mt-4",children:"Post was not found."})})};var T=function(e){var t=e.posts;return Object(j.jsx)(j.Fragment,{children:t&&t.length>0&&t.map((function(e){return Object(j.jsx)("a",{className:"text-reset post-link",href:"#/post/".concat(e._id),children:Object(j.jsx)(L.a,{className:"post-summary my-3 mx-auto",children:Object(j.jsxs)(L.a.Body,{children:[Object(j.jsx)(L.a.Title,{children:e.title}),Object(j.jsx)(L.a.Subtitle,{className:"text-muted",children:new Date(e.createdAt).toLocaleDateString()})]})})},e._id)}))})};var _=function(e){var t=e.posts,n=e.loading;return Object(j.jsxs)(C.a,{fluid:!0,children:[Object(j.jsx)("h1",{className:"text-center mt-3",children:"Home"}),Object(j.jsxs)("div",{className:"posts-container d-flex flex-column align-items-center",children:[n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"mt-4",children:Object(j.jsx)(N,{})}),Object(j.jsx)("br",{})]}),t.length>0?Object(j.jsx)(T,{posts:t}):n?"":"Nothing here yet!"]})]})};var A=function(e){return Object(j.jsxs)(C.a,{className:"text-center mt-3",fluid:!0,children:[Object(j.jsx)("h1",{children:"About"}),Object(j.jsxs)("p",{children:["Well, what can I say? This is a blog and we're in the summer",Object(j.jsx)("br",{})," (yes, all year round\ud83d\ude1b)"]})]})};var B=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!0),o=Object(r.a)(s,2),i=o[0],b=o[1];return Object(c.useEffect)((function(){(function(){return O.apply(this,arguments)})().then((function(e){a(e.data)})).finally((function(){b(!1)}))}),[]),Object(j.jsxs)(v.a,{children:[Object(j.jsx)(l,{className:"bg-header"}),Object(j.jsxs)(g.d,{children:[Object(j.jsx)(g.b,{path:"/",exact:!0,children:Object(j.jsx)(g.a,{to:"/home"})}),Object(j.jsx)(g.b,{path:"/home",exact:!0,children:Object(j.jsx)(_,{posts:n,loading:i})}),Object(j.jsx)(g.b,{path:"/about",exact:!0,component:A}),Object(j.jsx)(g.b,{path:"/post/:id",exact:!0,children:Object(j.jsx)(D,{posts:n,loading:i})})]})]})};s.a.render(Object(j.jsx)(B,{}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.c716c8e2.chunk.js.map