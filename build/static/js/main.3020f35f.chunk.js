(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),i=o(7),s=o.n(i),a=(o(12),o(4)),r=o(5),d=o(0),l=function(t){var e=t.todos,o=t.removeTodo;return Object(d.jsx)(d.Fragment,{children:e.map((function(t,e){return Object(d.jsx)("div",{className:"todo",id:e,onClick:o,children:t.text},e)}))})},u=c.a.useState,j=function(t){var e=t.todos,o=t.setTodos,n=u(""),c=Object(r.a)(n,2),i=c[0],s=c[1];return Object(d.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),i){var n=[].concat(Object(a.a)(e),[{text:i,isCompleted:!1}]);o(n),s("")}},children:[Object(d.jsx)("label",{style:{marginTop:"20px",color:"white"},htmlFor:"todo",children:"Add to-do item"}),Object(d.jsx)("input",{type:"text",id:"todo",className:"input",value:i,placeholder:"Add Todo ...",onChange:function(t){return s(t.target.value)},autoFocus:!0}),Object(d.jsx)("button",{type:"submit",style:{marginTop:"20px"},children:"Submit"})]})},p=c.a.useState,b=function(){var t=p([{text:"learn react",isCompleted:!1},{text:"watch olympic recaps",isCompleted:!1},{text:"build todo app",isCompleted:!1}]),e=Object(r.a)(t,2),o=e[0],n=e[1];return Object(d.jsxs)("div",{className:"to-do-card",children:[Object(d.jsx)("h1",{children:"To-do List"}),Object(d.jsx)("p",{children:"Enter a new list item below. Click on a list item to delete it."}),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("div",{children:Object(d.jsx)(l,{todos:o,removeTodo:function(t){var e=Number(t.target.id),c=Object(a.a)(o);c.splice(e,1),n(c)}})}),Object(d.jsx)(j,{todos:o,setTodos:n})]})]})},m=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(e){var o=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,s=e.getTTFB;o(t),n(t),c(t),i(t),s(t)}))};o(14);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.3020f35f.chunk.js.map