(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),l=a(1),s=a(8),m=a(4),d=a(17);var i=function(e){var t=e.addTodo,a=Object(n.useState)({id:"",task:"",completed:!1}),r=Object(m.a)(a,2),o=r[0],s=r[1];return c.a.createElement("form",{className:"todo__form",onSubmit:function(e){e.preventDefault(),o.task.trim()?(t(Object(l.a)(Object(l.a)({},o),{},{id:Object(d.a)()})),document.querySelector(".error-msg").style.display=""):(document.querySelector(".error-msg").style.display="block",document.querySelector("".concat(e.target.tagName," input")).style.borderColor="red"),s(Object(l.a)(Object(l.a)({},o),{},{task:""})),localStorage.setItem("task",o)}},c.a.createElement("input",{type:"text",name:"task",value:o.task,onChange:function(e){s(Object(l.a)(Object(l.a)({},o),{},{task:e.target.value})),document.querySelector(".error-msg").style.display="",e.target.style.borderColor=""},placeholder:"todo..."}),c.a.createElement("div",{className:"error-msg"},"This field can't be blank"),c.a.createElement("button",{type:"submit"},"+"))},u=a(7),p=a.n(u);var f=function(e){var t=e.todo,a=e.handleChecked,n=e.handleRemove;return c.a.createElement("div",null,c.a.createElement("li",{className:"todo__item"},c.a.createElement("input",{type:"checkbox",onChange:function(){return a(t.id)}}),c.a.createElement("span",null,t.task),c.a.createElement("button",{onClick:function(){return n(t.id)}},c.a.createElement("img",{src:p.a,alt:"Removing Todo"}))))};var b=function(e){var t=e.todos,a=e.handleChecked,n=e.handleRemove;return c.a.createElement("div",{className:"todo__list"},t.map((function(e){return c.a.createElement(f,{todo:e,key:e.id,handleRemove:n,handleChecked:a})})))};var v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-todo"));e&&r(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("react-todo",JSON.stringify(a))}),[a]),c.a.createElement("main",{className:"app"},c.a.createElement("h1",{className:"title"},"React Todo"),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"lines"}),c.a.createElement(i,{addTodo:function(e){r([e].concat(Object(s.a)(a)))}}),c.a.createElement(b,{todos:a,handleRemove:function(e){r(a.filter((function(t){return t.id!==e})))},handleChecked:function(e){r(a.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t})))}})))};a(14);o.a.render(c.a.createElement(v,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/trash.a3e4c2f7.svg"},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d1880cd7.chunk.js.map