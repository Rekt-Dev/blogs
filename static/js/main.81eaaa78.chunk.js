(this.webpackJsonpblogs=this.webpackJsonpblogs||[]).push([[0],{13:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(14),j=c.n(s),a=(c(22),c(23),c(32)),r=c(1),l=function(){return Object(r.jsxs)(a.a,{className:"firstNavItem",variant:"tabs",defaultActiveKey:"/home",children:[Object(r.jsx)(a.a.Item,{className:"navItem",children:Object(r.jsx)(a.a.Link,{href:"/",children:"Home"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"Portfolio"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"About"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"Blogging"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"Node.js"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"DevOps"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"Read more"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"Node.js"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"DevOps"})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{href:"/home",children:"Read more"})})]})},o=function(){return Object(r.jsxs)(a.a,{variant:"tabs",defaultActiveKey:"/home",children:[Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{eventKey:"link-1",href:"/home",children:Object(r.jsx)("i",{class:"fab fa-twitter"})})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{className:"navitems",eventKey:"link-2",children:Object(r.jsx)("i",{class:"fab fa-github"})})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{eventKey:"link-3",children:Object(r.jsx)("i",{class:"fab fa-youtube"})})}),Object(r.jsx)(a.a.Item,{children:Object(r.jsx)(a.a.Link,{eventKey:"link-4",children:Object(r.jsx)("i",{class:"fab fa-linkedin"})})})]})},b=c.p+"static/media/mine.62c7d69a.jpg",h=function(){return Object(r.jsxs)("div",{className:"introContainer",children:[Object(r.jsxs)("div",{id:"aboutme",children:[Object(r.jsx)("h1",{children:"Tushar Rajpoot"}),Object(r.jsx)("p",{children:"I'm a web/software developer with strong interest in DevOps and cloud native technologies. I love to build projects and sharing my experience as tips and learn new technologies."})]}),Object(r.jsx)("img",{alt:"",src:b}),Object(r.jsx)("hr",{})]})},d=(c(28),function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("header",{className:"headercss",children:[Object(r.jsx)(l,{}),Object(r.jsx)(o,{})]}),Object(r.jsx)(h,{})]})}),O=c(3),x=(c(13),function(e){var t=e.title,c=e.content,n=e.image,i=e.blogid,s="/#/".concat(i),j=c.slice(0,200);return Object(r.jsxs)("a",{href:s,className:"imageCard card2",children:[Object(r.jsx)("h1",{children:t}),Object(r.jsx)("img",{alt:"",src:n}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:j}})]})}),m=(c(29),function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!1),j=Object(O.a)(s,2),a=j[0],l=j[1];return Object(n.useEffect)((function(){l(!0),fetch("https://tush-tr.github.io/vanilla-js-projects/index.json").then((function(e){return e.json()})).then((function(e){var t=e.blogs.map((function(e){return{blogid:e.id,key:e.id,title:e.title,content:e.content,image:e.image}}));i(t),l(!1)}))}),[]),a?Object(r.jsx)("h1",{children:"Loading..."}):(console.log(c),Object(r.jsx)("div",{className:"imageCards ",children:c.map((function(e){return Object(r.jsx)(x,{blogid:e.blogid,image:e.image,content:e.content,title:e.title},e.key)}))}))});function u(){return Object(r.jsxs)("div",{className:"ImageSection",children:[Object(r.jsx)(d,{}),Object(r.jsx)(m,{})]})}var f=c(2),g=(c(30),function(){var e=Object(f.g)().blogId;console.log(typeof e);var t=Object(n.useState)([]),c=Object(O.a)(t,2),i=c[0],s=c[1],j=Object(n.useState)(!1),a=Object(O.a)(j,2),l=a[0],o=a[1];return Object(n.useEffect)((function(){o(!0),fetch("https://tush-tr.github.io/vanilla-js-projects/index.json").then((function(e){return e.json()})).then((function(t){var c;t.blogs.forEach((function(t){console.log(e),t.id===e&&(console.log(t),c=t)})),console.log(c);var n={key:c.id,title:c.title,content:c.content,image:c.image};s(n),o(!1)}))}),[e]),l?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)("div",{className:"blogPostPage",children:[Object(r.jsx)("h1",{className:"BlogTitle",children:i.title}),Object(r.jsx)("div",{className:"blogImageContainer",children:Object(r.jsx)("img",{className:"blogImage",src:i.image,alt:""})}),Object(r.jsx)("div",{dangerouslySetInnerHTML:{__html:i.content}})]})}),v=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{}),Object(r.jsx)(g,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Check some other blogs"}),Object(r.jsx)(m,{})]})]})},I=c(10);var k=function(){return Object(r.jsx)(I.a,{children:Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{exact:!0,path:"/",element:Object(r.jsx)(u,{})}),Object(r.jsx)(f.a,{path:"/:blogId",element:Object(r.jsx)(v,{})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,j=t.getTTFB;c(e),n(e),i(e),s(e),j(e)}))};j.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),p()}},[[31,1,2]]]);
//# sourceMappingURL=main.81eaaa78.chunk.js.map