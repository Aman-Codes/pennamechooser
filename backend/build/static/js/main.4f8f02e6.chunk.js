(this.webpackJsonppennamechooser=this.webpackJsonppennamechooser||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),o=a.n(c),l=a(14),s=a(1);function i(){return Object(s.jsx)(l.a,{fixed:"top",bg:"info",variant:"dark",children:Object(s.jsxs)(l.a.Brand,{href:"#",className:"title",children:[Object(s.jsx)("img",{src:"../logo.svg",width:"30",height:"23",className:"d-inline-block align-bottom",alt:"Pen Name Chooser logo"})," Pen Name Chooser"]})})}var u=a(6),h=a.n(u),d=a(8),b=a(7),f=a(9),j=a.n(f),p=a(15),m=a(29);function v(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("Go"),o=Object(b.a)(c,2),l=o[0],i=o[1],u=Object(r.useState)("default"),f=Object(b.a)(u,2),v=f[0],O=f[1],x=Object(r.useState)("default"),w=Object(b.a)(x,2),g=w[0],k=w[1],N=Object(r.useState)("default"),y=Object(b.a)(N,2),G=y[0],A=y[1],E=Object(r.useState)("default"),S=Object(b.a)(E,2),T=S[0],_=S[1],C=Object(r.useState)("default"),P=Object(b.a)(C,2),B=P[0],D=P[1],I=Object(r.useState)("default"),J=Object(b.a)(I,2),L=J[0],M=J[1],H=Object(r.useState)("default"),q=Object(b.a)(H,2),z=q[0],F=q[1],K=Object(r.useState)("default"),Q=Object(b.a)(K,2),R=Q[0],U=Q[1],V=Object(r.useState)("default"),W=Object(b.a)(V,2),X=W[0],Y=W[1],Z=Object(r.useState)("default"),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ae=Object(r.useState)("default"),re=Object(b.a)(ae,2),ne=re[0],ce=re[1],oe=Object(r.useState)("default"),le=Object(b.a)(oe,2),se=le[0],ie=le[1],ue=Object(r.useState)("default"),he=Object(b.a)(ue,2),de=he[0],be=he[1],fe=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/medium?username=").concat(t)}).then((function(e){e.data.error?O("error"):e.data.usernameAvailable?O("available"):O("unavailable")})).catch((function(e){O("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),je=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/atcoder?username=").concat(t)}).then((function(e){e.data.error?k("error"):e.data.usernameAvailable?k("available"):k("unavailable")})).catch((function(e){k("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/codechef?username=").concat(t)}).then((function(e){e.data.error?A("error"):e.data.usernameAvailable?A("available"):A("unavailable")})).catch((function(e){A("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/gitlab?username=").concat(t)}).then((function(e){e.data.error?_("error"):e.data.usernameAvailable?_("available"):_("unavailable")})).catch((function(e){_("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/github?username=").concat(t)}).then((function(e){e.data.error?D("error"):e.data.usernameAvailable?D("available"):D("unavailable")})).catch((function(e){D("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/codeforces?username=").concat(t)}).then((function(e){e.data.error?M("error"):e.data.usernameAvailable?M("available"):M("unavailable")})).catch((function(e){M("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/hackerearth?username=").concat(t)}).then((function(e){e.data.error?F("error"):e.data.usernameAvailable?F("available"):F("unavailable")})).catch((function(e){F("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/a2oj?username=").concat(t)}).then((function(e){e.data.error?U("error"):e.data.usernameAvailable?U("available"):U("unavailable")})).catch((function(e){U("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ge=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/leetcode?username=").concat(t)}).then((function(e){e.data.error?Y("error"):e.data.usernameAvailable?Y("available"):Y("unavailable")})).catch((function(e){Y("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/behance?username=").concat(t)}).then((function(e){e.data.error?te("error"):e.data.usernameAvailable?te("available"):te("unavailable")})).catch((function(e){te("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/devto?username=").concat(t)}).then((function(e){e.data.error?ce("error"):e.data.usernameAvailable?ce("available"):ce("unavailable")})).catch((function(e){ce("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/instagram?username=").concat(t)}).then((function(e){e.data.error?ie("error"):e.data.usernameAvailable?ie("available"):ie("unavailable")})).catch((function(e){ie("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/pinterest?username=").concat(t)}).then((function(e){e.data.error?be("error"):e.data.usernameAvailable?be("available"):be("unavailable")})).catch((function(e){be("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),i("Processing ..."),O("default"),k("default"),A("default"),_("default"),D("default"),M("default"),F("default"),U("default"),Y("default"),te("default"),ce("default"),ie("default"),be("default"),Promise.all([fe(a),je(a),pe(a),me(a),ve(a),Oe(a),xe(a),we(a),ge(a),ke(a),Ne(a),ye(a),Ge(a)]).then((function(){i("Go")})).catch((function(){i("Go")}));case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"row mt-5",children:Object(s.jsxs)("div",{className:"col-lg-8 mx-auto my-2 form-body",children:[Object(s.jsx)("div",{className:"mt-2",children:Object(s.jsxs)(p.a,{children:[Object(s.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(p.a.Label,{children:Object(s.jsx)("h4",{className:"title",children:"Pen Name"})}),Object(s.jsx)(p.a.Control,{type:"text",placeholder:"Enter your pen name",onChange:function(e){n(e.target.value)},value:a})]}),Object(s.jsx)(m.a,{variant:"primary",type:"submit",onClick:Ae,children:l})]})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("a",{href:"https://medium.com/",target:"_blank",rel:"noreferrer noopener",className:v,children:Object(s.jsx)("div",{children:"Medium"})}),Object(s.jsx)("a",{href:"https://atcoder.jp/",target:"_blank",rel:"noreferrer noopener",className:g,children:Object(s.jsx)("div",{children:"AtCoder"})}),Object(s.jsx)("a",{href:"https://www.codechef.com/",target:"_blank",rel:"noreferrer noopener",className:G,children:Object(s.jsx)("div",{children:"CodeChef"})}),Object(s.jsx)("a",{href:"https://gitlab.com/",target:"_blank",rel:"noreferrer noopener",className:T,children:Object(s.jsx)("div",{children:"GitLab"})}),Object(s.jsx)("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer noopener",className:B,children:Object(s.jsx)("div",{children:"GitHub"})}),Object(s.jsx)("a",{href:"https://codeforces.com/",target:"_blank",rel:"noreferrer noopener",className:L,children:Object(s.jsx)("div",{children:"Codeforces"})}),Object(s.jsx)("a",{href:"https://www.hackerearth.com/",target:"_blank",rel:"noreferrer noopener",className:z,children:Object(s.jsx)("div",{children:"HackerEarth"})}),Object(s.jsx)("a",{href:"https://a2oj.com/",target:"_blank",rel:"noreferrer noopener",className:R,children:Object(s.jsx)("div",{children:"A\xb2 Online Judge"})}),Object(s.jsx)("a",{href:"https://leetcode.com/",target:"_blank",rel:"noreferrer noopener",className:X,children:Object(s.jsx)("div",{children:"LeetCode"})}),Object(s.jsx)("a",{href:"https://www.behance.net/",target:"_blank",rel:"noreferrer noopener",className:ee,children:Object(s.jsx)("div",{children:"Behance"})}),Object(s.jsx)("a",{href:"https://dev.to/",target:"_blank",rel:"noreferrer noopener",className:ne,children:Object(s.jsx)("div",{children:"Dev Community"})}),Object(s.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer noopener",className:se,children:Object(s.jsx)("div",{children:"Instagram"})}),Object(s.jsx)("a",{href:"https://in.pinterest.com/",target:"_blank",rel:"noreferrer noopener",className:de,children:Object(s.jsx)("div",{children:"Pinterest"})})]}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"legend-default inline",title:"legend-default",type:"button"}),Object(s.jsx)("span",{children:" Default"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"legend-available inline",title:"legend-available",type:"button"}),Object(s.jsx)("span",{children:" Pen name is available to choose "})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"legend-unavailable inline",title:"legend-unavailable",type:"button"}),Object(s.jsx)("span",{children:" Pen name is not available to choose"})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"legend-error inline",title:"legend-error",type:"button"}),Object(s.jsx)("span",{children:" Error occured while processing"})]})]})]})})}function O(){return Object(s.jsx)(l.a,{fixed:"bottom",bg:"info",variant:"dark",children:Object(s.jsxs)("p",{className:"text-center m-auto footer",children:["Made with ",Object(s.jsx)("span",{id:"heart",children:"\u2665"})," by ",Object(s.jsx)("a",{href:"https://github.com/Aman-Codes",id:"link",children:"Aman Dwivedi"})]})})}a(57),a(58);var x=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(i,{}),Object(s.jsx)(v,{}),Object(s.jsx)(O,{})]})};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.4f8f02e6.chunk.js.map