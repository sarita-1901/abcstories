(this.webpackJsonpabcstories=this.webpackJsonpabcstories||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},108:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(57),i=n.n(a),o=(n(105),n(5)),r=n(17),l=n(2),j=(n(106),n(0)),b=function(e){var t=e.label,n=e.searchTerm,c=e.handleInput;t[0].toUpperCase(),t.slice(1);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("form",{className:"search-box",children:Object(j.jsx)("input",{type:"text",name:t,value:n,onInput:c,className:"search-box__input"})})})},d=(n(108),n(9)),u=n(10),m=function(e){var t=e.contentArr,n=(e.content,e.setContent),c=e.openMenu,s=e.setOpenMenu,a=e.searchTerm,i=e.catglist,o=e.subcatglist,r=Object(j.jsxs)(j.Fragment,{children:["    ",Object(j.jsx)("p",{children:i})," ",Object(j.jsx)("p",{children:o})," "]}),l=i.map((function(e,a){var i=function(){s(e)},r=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"navbar__subcatg",onClick:i,children:[Object(j.jsx)(d.a,{icon:u.b,size:"1x",color:"white"}),Object(j.jsxs)("span",{className:"menutext",children:[e," "]})]}),o.filter((function(t){return t.startsWith(e)})).map((function(e,c){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"navbar__subcatg__item",children:[Object(j.jsx)("span",{children:"\xa0\xa0\xa0"})," ",e.substring(e.indexOf(">")+1)," "]}),t.filter((function(t){return e.includes(t.subcategoryId)})).map((function(e,t){return Object(j.jsx)("div",{className:"navbar__subcatg__itemtitle",onClick:function(){return n(e)},children:e.title})}))]})}))]}),l=Object(j.jsxs)("div",{className:"navbar__subcatg",onClick:i,children:[Object(j.jsx)(d.a,{icon:u.c,size:"1x",color:"white"})," ",Object(j.jsxs)("span",{className:"menutext",children:[e," "]})]});return Object(j.jsx)(j.Fragment,{children:c===e?r:l})}));return Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsxs)("div",{className:"bookmarked",children:[Object(j.jsx)("input",{type:"checkbox",id:"bookmarked",name:"bookmarked",value:"bookmarked",class:"checkbox"}),"Show bookmarked only   "]}),""==a?l:r]})},h=(n(113),function(e){var t=e.content,n=e.setContent,s=e.openMenu,a=e.setOpenMenu,i=e.catglist,l=e.subcatglist,h=Object(c.useState)(""),O=Object(o.a)(h,2),x=O[0],g=O[1],p=Object(c.useState)([]),f=Object(o.a)(p,2),v=f[0],N=f[1];Object(c.useEffect)((function(){console.log("In Use Effect of Nav"),fetch("http://localhost:8080/contents").then((function(e){return e.json()})).then((function(e){return N(e)})).then((function(){return console.log("In first")})).catch((function(e){return console.log("error1--"+e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"navcontainer",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)(d.a,{icon:u.e,size:"2x",color:"white"})}),Object(j.jsx)(b,{label:"contents",searchTerm:x,handleInput:function(e){var t=e.target.value.toLowerCase();g(t)}}),Object(j.jsx)(m,{contentArr:v,content:t,setContent:n,openMenu:s,setOpenMenu:a,searchTerm:x,catglist:i,subcatglist:l})]})})}),O=n(30),x=(n(114),n(100)),g=function(e){var t=e.content,n=Object(c.useState)(""),s=Object(o.a)(n,2),a=s[0],i=s[1],r=Object(c.useState)(),l=Object(o.a)(r,2),b=l[0],m=l[1],h=function(){fetch("http://localhost:8080/content/comments").then((function(e){return e.json()})).then((function(e){return m(e)})).then((function(){return console.log("In second")})).catch((function(e){return console.log("error2--"+e)}))};Object(c.useEffect)((function(){console.log("In Use Effect of ReadingPane"),h()}),[]),console.log("In Reading Pane"),console.log(t),console.log(b);var g=Object(x.a)(),p=g.register,f=(g.handleSubmit,Object(c.useState)("")),v=Object(o.a)(f,2),N=v[0],C=v[1],y=Object(j.jsx)(j.Fragment,{children:b&&b.filter((function(e){return e.contentid==t.contentId})).map((function(e){return Object(j.jsxs)("div",{className:"comment",children:[Object(j.jsx)("div",{className:"comment__left",children:Object(j.jsx)(d.a,{icon:u.d,size:"1x"})}),Object(j.jsxs)("div",{className:"comment__right",children:[Object(j.jsxs)("div",{className:"comment__right__about",children:[Object(j.jsx)("div",{className:"commentby",children:e.commentedBy}),Object(j.jsx)("div",{className:"commenton",children:e.commentedOn})]}),Object(j.jsx)("div",{className:"commenttext",children:e.commentText})]})," "]})}))}),E=Object(j.jsxs)("div",{className:"pane",children:[Object(j.jsxs)("div",{className:"pane__head",children:[Object(j.jsx)("div",{className:"pane__header",children:t.title}),Object(j.jsxs)("div",{className:"likes",children:[t.liked?Object(j.jsx)(d.a,{icon:u.f,size:"2x",color:"#676768"}):Object(j.jsx)(d.a,{icon:u.f,size:"2x",color:"#becee5",onClick:function(){t.likes=t.likes+1,t.like=!0,console.log("In likes")}}),t.likes]}),Object(j.jsx)("div",{children:t.bookmarked?Object(j.jsx)(d.a,{icon:u.a,size:"2x",color:"#676768"}):Object(j.jsx)(d.a,{icon:u.a,size:"2x",color:"#becee5"})})]}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:"pane__image",src:"data:image/png;base64,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",alt:"Image"})}),Object(j.jsx)("div",{className:"pane__text",dangerouslySetInnerHTML:{__html:t.text}}),Object(j.jsxs)("div",{className:"pane__author",children:["- Written by ",t.author]}),Object(j.jsxs)("div",{className:"comments__section",children:[Object(j.jsx)("h4",{className:"comments__section__header",children:"Discussion"}),Object(j.jsxs)("div",{className:"comment",children:[Object(j.jsx)("div",{className:"comment__left",children:Object(j.jsx)(d.a,{icon:u.d,size:"1x"})}),Object(j.jsx)("div",{className:"comment__right",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",Object(O.a)(Object(O.a)({ref:N,type:"textbox",className:"commentbox"},p("update")),{},{placeholder:"Write comment..",onInput:function(e){i(e.target.value)}})),Object(j.jsx)("input",{type:"button",className:"postbutton",value:"Post",id:"btnsubmit",onClick:function(e){e.preventDefault(),fetch("http://localhost:8080/content/comment",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({contentid:t.contentId,commentText:a,commentedBy:"Sarita Kalyani"})}).then((function(e){return console.log("comment posted")})).then((function(e){return h()})).then((function(e){return C("")})).catch((function(e){return console.log(" error"+e)}))}})]})})," "]})," ",y]})," "]}),A=Object(j.jsxs)("div",{className:"pane category__head",children:[Object(j.jsx)("div",{className:"pane__header category__header",children:t.title}),Object(j.jsx)("div",{className:"pane__text category__text",children:t.text})]});return Object(j.jsx)(j.Fragment,{children:"article"===t.type?E:A})},p=(n(116),n(117),function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("h1",{className:"header__main",children:"ABC Stories"}),Object(j.jsx)("h4",{className:"header__tagline",children:"Valuing shared experiences.."})]})}),f=function(e){var t=e.openMenu,n=e.setOpenMenu,c=e.content,s=e.setContent,a=e.catglist,i=e.subcatglist,o=e.contents;e.setContents;return console.log("read section called"),Object(j.jsxs)("div",{className:"readmain",children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"readsection",children:[Object(j.jsx)(h,{contentArr:o,content:c,setContent:s,openMenu:t,setOpenMenu:n,catglist:a,subcatglist:i}),c&&Object(j.jsx)(g,{contentArr:o,content:c,setContent:s})]})]})},v=n.p+"static/media/mainleft2.1ee3dad9.jpg",N=(n(118),function(e){var t=e.openMenu,n=e.setOpenMenu,c=(e.content,e.setContent,e.catglist),s=e.subcatglist,a=e.contents,i=(e.setContents,e.allComments),o=(e.setAllComments,c.map((function(e,o){var l=e.substring(0,4).toLowerCase();console.log(l);return Object(j.jsx)("div",{className:"category",onClick:function(){n(e)},children:Object(j.jsx)(r.b,{className:"link",to:"/readsection",openMenu:t,setOpenMenu:n,catglist:c,subcatglist:s,allComments:i,contents:a,children:Object(j.jsx)("div",{className:l,children:e})})})})));return Object(j.jsxs)("div",{className:"main",children:[Object(j.jsx)(p,{}),Object(j.jsxs)("div",{className:"main__body",children:[" ",Object(j.jsxs)("div",{className:"main__body__top",children:[Object(j.jsx)("div",{children:Object(j.jsx)(r.b,{to:"/new-article",catglist:c,subcatglist:s,children:Object(j.jsx)("img",{className:"main__img",src:v,alt:"mainimg"})})}),Object(j.jsx)("div",{className:"main__caption",children:Object(j.jsxs)("p",{className:"main__caption__text",children:["Sharing EXPERIENCES you EXPERIENCED ",Object(j.jsx)("br",{}),"In your life is a better EXPERIENCE to EXPERIENCE."]})})]}),"       ",Object(j.jsxs)("div",{className:"main__body__bottom",children:[Object(j.jsx)("h1",{className:"browsetitle",children:"Browse in the below categories to read what your colleagues have to say..."}),Object(j.jsx)("div",{className:"main__body__catgs",children:o})]})]})]})}),C=n(18),y=(n(59),n(119),n(47)),E=n(98),A=n(99),_=n.n(A),S=void 0,I=function(e){var t=e.catglist,n=e.subcatglist,s=Object(c.useState)(!1),a=Object(o.a)(s,2),i=a[0],l=a[1],b=Object(c.useState)([]),m=Object(o.a)(b,2),h=m[0],x=m[1],g=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{style:{textAlign:"right"},children:Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)(d.a,{icon:u.e,size:"2x",color:"grey"})})}),Object(j.jsx)("p",{className:"successtext",children:"Article has been submitted successfully!"})]}),f=Object(c.useState)({title:""}),v=Object(o.a)(f,2),N=v[0],A=v[1],I=function(e){A(Object(O.a)(Object(O.a)({},N),{},Object(C.a)({},e.target.name,e.target.value))),"category"===e.target.name&&x(n.filter((function(t){return t.startsWith(e.target.value)})))},M=y.EditorState.createEmpty(),k=Object(c.useState)(M),P=Object(o.a)(k,2),R=P[0],H=P[1],w=t.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}),S),Q=h.map((function(e,t){return Object(j.jsx)("option",{value:e,children:e},t)}),S);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{}),i?g:Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"editor",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),e.persist(),fetch("http://localhost:8080/content",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({title:N.title,type:"article",text:N.description.value,subcategoryId:N.subcategory,categoryId:N.category,author:"Sarita Kalyani"})}).then((function(e){return l(!0)})).catch((function(e){return console.log(" error"+e)}))},children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{textAlign:"right"},children:Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)(d.a,{icon:u.e,size:"2x",color:"grey"})})}),Object(j.jsxs)("div",{className:"fieldinput",children:[Object(j.jsx)("label",{className:"fieldname",children:" Title"}),Object(j.jsx)("input",{className:"inputbox",type:"text",name:"title",value:N.title,onChange:I})]}),Object(j.jsxs)("div",{className:"fieldinput",children:[Object(j.jsx)("label",{className:"fieldname",children:"Category"}),Object(j.jsxs)("select",{className:"inputbox",name:"category",id:"category",value:N.category,onChange:I,children:[Object(j.jsx)("option",{value:"",children:"Select Category"}),w]})]}),Object(j.jsxs)("div",{className:"fieldinput",children:[Object(j.jsx)("label",{className:"fieldname",children:"Subcategory"}),Object(j.jsxs)("select",{className:"inputbox",name:"subcategory",id:"subcategory",value:N.subcategory,onChange:I,children:[Object(j.jsx)("option",{value:"",children:"Select Subcategory"}),Q]})]}),Object(j.jsxs)("div",{className:"editor__section",children:[Object(j.jsx)(E.Editor,{editorState:R,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(e){H(e)}}),Object(j.jsx)("textarea",{style:{display:"none"},disabled:!0,ref:function(e){return N.description=e},value:_()(Object(y.convertToRaw)(R.getCurrentContent()))})]}),Object(j.jsx)("div",{className:"publishbutton",children:Object(j.jsx)("button",{type:"submit",className:"writesubmit",children:" Submit  "})})]})})})})})]})},M=(n(215),function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(null),i=Object(o.a)(a,2),b=i[0],d=i[1],u=Object(c.useState)(null),m=Object(o.a)(u,2),h=m[0],O=m[1],x=["Technology","Personal","Hobbies","Company Events/Programs"],g=["Technology > Cloud Migration","Technology > Java bug","Personal > Parenting","Personal > Relocation for Return to Office","Hobbies > Reading","Hobbies > Travelling","Company Events/Programs > Townhall 2021","Company Events/Programs > Tech Program Participation"];return Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(r.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(N,{openMenu:n,setOpenMenu:s,content:b,setContent:d,catglist:x,subcatglist:g,contents:h,setContents:O})}),Object(j.jsx)(l.a,{path:"/new-article",element:Object(j.jsx)(I,{catglist:x,subcatglist:g})}),Object(j.jsx)(l.a,{path:"/readsection",element:Object(j.jsx)(f,{openMenu:n,setOpenMenu:s,content:b,setContent:d,catglist:x,subcatglist:g,contents:h,setContents:O})})]})})})}),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,217)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),k()}},[[216,1,2]]]);
//# sourceMappingURL=main.cecce730.chunk.js.map