(this.webpackJsonppennamechooser=this.webpackJsonppennamechooser||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(12),o=a.n(c),l=a(14),i=a(1);function s(){return Object(i.jsx)(l.a,{fixed:"top",bg:"info",variant:"dark",children:Object(i.jsxs)(l.a.Brand,{href:"#",className:"title",children:[Object(i.jsx)("img",{src:"../logo.svg",width:"30",height:"23",className:"d-inline-block align-bottom",alt:"Pen Name Chooser logo"})," Pen Name Chooser"]})})}var u=a(4),h=a.n(u),b=a(8),d=a(7),f=a(9),j=a.n(f),p=a(15),m=a(29);function v(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("Go"),o=Object(d.a)(c,2),l=o[0],s=o[1],u=Object(r.useState)("default"),f=Object(d.a)(u,2),v=f[0],O=f[1],x=Object(r.useState)("default"),w=Object(d.a)(x,2),k=w[0],g=w[1],N=Object(r.useState)("default"),y=Object(d.a)(N,2),G=y[0],E=y[1],A=Object(r.useState)("default"),S=Object(d.a)(A,2),T=S[0],_=S[1],C=Object(r.useState)("default"),P=Object(d.a)(C,2),B=P[0],D=P[1],I=Object(r.useState)("default"),L=Object(d.a)(I,2),M=L[0],q=L[1],H=Object(r.useState)("default"),J=Object(d.a)(H,2),F=J[0],Q=J[1],z=Object(r.useState)("default"),K=Object(d.a)(z,2),R=K[0],U=K[1],V=Object(r.useState)("default"),W=Object(d.a)(V,2),X=W[0],Y=W[1],Z=Object(r.useState)("default"),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ae=Object(r.useState)("default"),re=Object(d.a)(ae,2),ne=re[0],ce=re[1],oe=Object(r.useState)("default"),le=Object(d.a)(oe,2),ie=le[0],se=le[1],ue=Object(r.useState)("default"),he=Object(d.a)(ue,2),be=he[0],de=he[1],fe=Object(r.useState)("default"),je=Object(d.a)(fe,2),pe=je[0],me=je[1],ve=Object(r.useState)("default"),Oe=Object(d.a)(ve,2),xe=Oe[0],we=Oe[1],ke=Object(r.useState)("default"),ge=Object(d.a)(ke,2),Ne=ge[0],ye=ge[1],Ge=Object(r.useState)("default"),Ee=Object(d.a)(Ge,2),Ae=Ee[0],Se=Ee[1],Te=Object(r.useState)("default"),_e=Object(d.a)(Te,2),Ce=_e[0],Pe=_e[1],Be=Object(r.useState)("default"),De=Object(d.a)(Be,2),Ie=De[0],Le=De[1],Me=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/medium?username=").concat(t)}).then((function(e){e.data.error?O("error"):e.data.usernameAvailable?O("available"):O("unavailable")})).catch((function(e){O("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),qe=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/atcoder?username=").concat(t)}).then((function(e){e.data.error?g("error"):e.data.usernameAvailable?g("available"):g("unavailable")})).catch((function(e){g("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),He=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/codechef?username=").concat(t)}).then((function(e){e.data.error?E("error"):e.data.usernameAvailable?E("available"):E("unavailable")})).catch((function(e){E("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Je=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/gitlab?username=").concat(t)}).then((function(e){e.data.error?_("error"):e.data.usernameAvailable?_("available"):_("unavailable")})).catch((function(e){_("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/github?username=").concat(t)}).then((function(e){e.data.error?D("error"):e.data.usernameAvailable?D("available"):D("unavailable")})).catch((function(e){D("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/codeforces?username=").concat(t)}).then((function(e){e.data.error?q("error"):e.data.usernameAvailable?q("available"):q("unavailable")})).catch((function(e){q("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/hackerearth?username=").concat(t)}).then((function(e){e.data.error?Q("error"):e.data.usernameAvailable?Q("available"):Q("unavailable")})).catch((function(e){Q("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/leetcode?username=").concat(t)}).then((function(e){e.data.error?U("error"):e.data.usernameAvailable?U("available"):U("unavailable")})).catch((function(e){U("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/behance?username=").concat(t)}).then((function(e){e.data.error?Y("error"):e.data.usernameAvailable?Y("available"):Y("unavailable")})).catch((function(e){Y("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/devto?username=").concat(t)}).then((function(e){e.data.error?te("error"):e.data.usernameAvailable?te("available"):te("unavailable")})).catch((function(e){te("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/instagram?username=").concat(t)}).then((function(e){e.data.error?ce("error"):e.data.usernameAvailable?ce("available"):ce("unavailable")})).catch((function(e){ce("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),We=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/pinterest?username=").concat(t)}).then((function(e){e.data.error?se("error"):e.data.usernameAvailable?se("available"):se("unavailable")})).catch((function(e){se("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/bitbucket?username=").concat(t)}).then((function(e){e.data.error?de("error"):e.data.usernameAvailable?de("available"):de("unavailable")})).catch((function(e){de("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/interviewbit?username=").concat(t)}).then((function(e){e.data.error?me("error"):e.data.usernameAvailable?me("available"):me("unavailable")})).catch((function(e){me("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/facebook?username=").concat(t)}).then((function(e){e.data.error?we("error"):e.data.usernameAvailable?we("available"):we("unavailable")})).catch((function(e){we("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$e=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/codewars?username=").concat(t)}).then((function(e){e.data.error?ye("error"):e.data.usernameAvailable?ye("available"):ye("unavailable")})).catch((function(e){ye("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),et=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/freecodecamp?username=").concat(t)}).then((function(e){e.data.error?Se("error"):e.data.usernameAvailable?Se("available"):Se("unavailable")})).catch((function(e){Se("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),tt=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/twitter?username=").concat(t)}).then((function(e){e.data.error?Pe("error"):e.data.usernameAvailable?Pe("available"):Pe("unavailable")})).catch((function(e){Pe("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),at=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j()({method:"GET",url:"".concat("http://localhost:5000/api","/qoura?username=").concat(t)}).then((function(e){e.data.error?Le("error"):e.data.usernameAvailable?Le("available"):Le("unavailable")})).catch((function(e){Le("error")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rt=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s("Processing ..."),O("default"),g("default"),E("default"),_("default"),D("default"),q("default"),Q("default"),U("default"),Y("default"),te("default"),ce("default"),se("default"),de("default"),me("default"),we("default"),ye("default"),Se("default"),Pe("default"),Le("default"),Promise.all([Me(a),qe(a),He(a),Je(a),Fe(a),Qe(a),ze(a),Ke(a),Re(a),Ue(a),Ve(a),We(a),Xe(a),Ye(a),Ze(a),$e(a),et(a),tt(a),at(a)]).then((function(){s("Go")})).catch((function(){s("Go")}));case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.jsx)("div",{className:"row mt-5",children:Object(i.jsxs)("div",{className:"col-lg-8 mx-auto my-2 form-body",children:[Object(i.jsx)("div",{className:"mt-2",children:Object(i.jsxs)(p.a,{children:[Object(i.jsxs)(p.a.Group,{controlId:"formBasicEmail",children:[Object(i.jsx)(p.a.Label,{children:Object(i.jsx)("h4",{className:"title",children:"Pen Name"})}),Object(i.jsx)(p.a.Control,{type:"text",placeholder:"Enter your pen name",onChange:function(e){n(e.target.value)},value:a})]}),Object(i.jsx)(m.a,{variant:"primary",type:"submit",onClick:rt,children:l})]})}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("a",{href:"https://medium.com/",target:"_blank",rel:"noreferrer noopener",className:v,children:Object(i.jsx)("div",{children:"Medium"})}),Object(i.jsx)("a",{href:"https://atcoder.jp/",target:"_blank",rel:"noreferrer noopener",className:k,children:Object(i.jsx)("div",{children:"AtCoder"})}),Object(i.jsx)("a",{href:"https://www.codechef.com/",target:"_blank",rel:"noreferrer noopener",className:G,children:Object(i.jsx)("div",{children:"CodeChef"})}),Object(i.jsx)("a",{href:"https://gitlab.com/",target:"_blank",rel:"noreferrer noopener",className:T,children:Object(i.jsx)("div",{children:"GitLab"})}),Object(i.jsx)("a",{href:"https://github.com/",target:"_blank",rel:"noreferrer noopener",className:B,children:Object(i.jsx)("div",{children:"GitHub"})}),Object(i.jsx)("a",{href:"https://codeforces.com/",target:"_blank",rel:"noreferrer noopener",className:M,children:Object(i.jsx)("div",{children:"Codeforces"})}),Object(i.jsx)("a",{href:"https://www.hackerearth.com/",target:"_blank",rel:"noreferrer noopener",className:F,children:Object(i.jsx)("div",{children:"HackerEarth"})}),Object(i.jsx)("a",{href:"https://leetcode.com/",target:"_blank",rel:"noreferrer noopener",className:R,children:Object(i.jsx)("div",{children:"LeetCode"})}),Object(i.jsx)("a",{href:"https://www.behance.net/",target:"_blank",rel:"noreferrer noopener",className:X,children:Object(i.jsx)("div",{children:"Behance"})}),Object(i.jsx)("a",{href:"https://dev.to/",target:"_blank",rel:"noreferrer noopener",className:ee,children:Object(i.jsx)("div",{children:"Dev Community"})}),Object(i.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer noopener",className:ne,children:Object(i.jsx)("div",{children:"Instagram"})}),Object(i.jsx)("a",{href:"https://in.pinterest.com/",target:"_blank",rel:"noreferrer noopener",className:ie,children:Object(i.jsx)("div",{children:"Pinterest"})}),Object(i.jsx)("a",{href:"https://bitbucket.org/",target:"_blank",rel:"noreferrer noopener",className:be,children:Object(i.jsx)("div",{children:"Bitbucket"})}),Object(i.jsx)("a",{href:"https://www.interviewbit.com/",target:"_blank",rel:"noreferrer noopener",className:pe,children:Object(i.jsx)("div",{children:"Interviewbit"})}),Object(i.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer noopener",className:xe,children:Object(i.jsx)("div",{children:"Facebook"})}),Object(i.jsx)("a",{href:"https://in.pinterest.com/",target:"_blank",rel:"noreferrer noopener",className:ie,children:Object(i.jsx)("div",{children:"Pinterest"})}),Object(i.jsx)("a",{href:"https://forum.freecodecamp.org/",target:"_blank",rel:"noreferrer noopener",className:Ae,children:Object(i.jsx)("div",{children:"freeCodeCamp"})}),Object(i.jsx)("a",{href:"https://www.codewars.com",target:"_blank",rel:"noreferrer noopener",className:Ne,children:Object(i.jsx)("div",{children:"Codewars"})}),Object(i.jsx)("a",{href:"https://twitter.com/",target:"_blank",rel:"noreferrer noopener",className:Ce,children:Object(i.jsx)("div",{children:"Twitter"})}),Object(i.jsx)("a",{href:"https://quora.com/",target:"_blank",rel:"noreferrer noopener",className:Ie,children:Object(i.jsx)("div",{children:"Quora"})})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"legend-default inline",title:"legend-default",type:"button"}),Object(i.jsx)("span",{children:" Default"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"legend-available inline",title:"legend-available",type:"button"}),Object(i.jsx)("span",{children:" Pen name is available to choose "})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"legend-unavailable inline",title:"legend-unavailable",type:"button"}),Object(i.jsx)("span",{children:" Pen name is not available to choose"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{className:"legend-error inline",title:"legend-error",type:"button"}),Object(i.jsx)("span",{children:" Error occured while processing"})]})]})]})})}function O(){return Object(i.jsx)(l.a,{fixed:"bottom",bg:"info",variant:"dark",children:Object(i.jsxs)("p",{className:"text-center m-auto footer",children:["Made with ",Object(i.jsx)("span",{id:"heart",children:"\u2665"})," by ",Object(i.jsx)("a",{href:"https://github.com/Aman-Codes",id:"link",children:"Aman Dwivedi"})]})})}a(57),a(58);var x=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(s,{}),Object(i.jsx)(v,{}),Object(i.jsx)(O,{})]})};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ae0fb049.chunk.js.map