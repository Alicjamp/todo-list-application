(this["webpackJsonptodo-list-application"]=this["webpackJsonptodo-list-application"]||[]).push([[0],{21:function(e,t,a){e.exports=a(52)},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(19),l=a.n(c),r=(a(26),a(20)),s=a(1),i=a(2),m=a(4),u=a(3),d=a(5),p=a(7),h=a.n(p),f=(a(44),a(45),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"title"}," G.Y.S.T.List "),o.a.createElement("p",null,"Get all your ",o.a.createElement("span",{role:"img","aria-label":"poo",className:"poo"},"\ud83d\udca9")," together by adding to your list of s*** to do \u2193"))}}]),t}(o.a.Component)),E=a(9),v=a.n(E),b=(a(49),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={task:"",important:!1,dueDate:v()().format("YYYY-MM-DD")},a.updateTask=function(e){console.log(e.target.value),a.setState({task:e.target.value})},a.updateDueDate=function(e){a.setState({dueDate:e.target.value})},a.setLowPriority=function(e){a.setState({important:!1})},a.setHighPriority=function(e){a.setState({important:!0})},a.addTodo=function(e){console.log(a.state),a.props.addTodoFunc(a.state.task,a.state.dueDate,a.state.important),a.setState({task:"",important:!1,dueDate:v()().format("YYYY-MM-DD")}),e.preventDefault()},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-4"},o.a.createElement("label",{htmlFor:"Todo"},"Todo"),o.a.createElement("br",null),o.a.createElement("input",{id:"Todo",type:"text",onChange:this.updateTask,value:this.state.task,placeholder:"E.g. Take over the world"}),o.a.createElement("br",null)),o.a.createElement("div",{className:"col-12 col-md-3"},o.a.createElement("label",{htmlFor:"Due by date"},"Due by date"),o.a.createElement("br",null),o.a.createElement("input",{type:"date",onChange:this.updateDueDate,value:this.state.dueDate}),o.a.createElement("br",null)),o.a.createElement("div",{className:"col-12 col-md-3"},o.a.createElement("label",{htmlFor:"Priority"},"Priority"),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"Low"},o.a.createElement("input",{onClick:this.setLowPriority,id:"Low",type:"radio",name:"Low-High",value:"Low",selected:!0})," Low"),o.a.createElement("label",{htmlFor:"High"},o.a.createElement("input",{onClick:this.setHighPriority,id:"High",type:"radio",name:"Low-High",value:"High"})," High")),o.a.createElement("div",{className:"col-12 col-md-1"},o.a.createElement("button",{type:"submit",className:"add",onClick:this.addTodo},"Add"))))))}}]),t}(o.a.Component)),k=a(8),y=a.n(k),g=(a(50),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDelete=function(){a.props.deleteTaskFunc(a.props.id)},a.handleUpdate=function(){a.props.completeTaskFunc(a.props.id)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row todos"},o.a.createElement("div",{className:"col-12 col-sm-6"},o.a.createElement("p",{className:"todo"},this.props.task)),o.a.createElement("div",{className:"col-12 col-sm-1"},!0===this.props.important&&o.a.createElement("p",null," ",o.a.createElement("span",{role:"img","aria-label":"flag"},"\ud83d\udea9"))),o.a.createElement("div",{className:"col-12 col-sm-3"},o.a.createElement("p",null,y()(this.props.dueDate).format("Do MMM YY"))),o.a.createElement("div",{className:"col-12 col-sm-1"},o.a.createElement("button",{type:"submit",onClick:this.handleDelete},o.a.createElement("i",{className:"fa fa-trash"}))),o.a.createElement("div",{className:"col-12 col-sm-1"},o.a.createElement("button",{type:"submit",onClick:this.handleUpdate},o.a.createElement("i",{className:"fa fa-check-square","aria-hidden":"true"}))))}}]),t}(o.a.Component)),j=(a(51),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleDelete=function(){a.props.deleteTaskFunc(a.props.id)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"row todones"},o.a.createElement("div",{className:"col-12 col-sm-11"},o.a.createElement("p",{className:"todone"},this.props.task)),o.a.createElement("div",{className:"col-12 col-sm-1"},o.a.createElement("button",{type:"submit",onClick:this.handleDelete},o.a.createElement("i",{className:"fa fa-trash"}))))}}]),t}(o.a.Component)),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("h3",null," ",o.a.createElement("span",{id:"sub"},"S*** I've got to get done: "),o.a.createElement("span",null," ",this.props.count," ")," ")}}]),t}(o.a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("h3",null," ",o.a.createElement("span",{id:"sub"},"S*** I got together: "),o.a.createElement("span",null," ",this.props.count," ")," ")}}]),t}(o.a.Component),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.addTodo=function(e,t,n){var o={text:e,important:n,completed:!1,dueDate:t};h.a.post("https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos",o).then((function(e){var t=e.data,n=a.state.todos.slice();n.push(t),a.setState({todos:n})})).catch((function(e){console.log(e)}))},a.deleteTask=function(e){h.a.delete("https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos/".concat(e)).then((function(){var t=a.state.todos.filter((function(t){return t.taskID!==e}));a.setState({todos:t})})).catch((function(e){console.log(e)}))},a.completeTask=function(e){console.log(e),h.a.put("https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos/".concat(e),{completed:!0}).then((function(){var t=a.state.todos.map((function(t){return t.taskID===e?Object(r.a)({},t,{completed:!0}):t}));a.setState({todos:t})})).catch((function(e){console.log(e)}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://qfsnx6z149.execute-api.eu-west-1.amazonaws.com/dev/todos").then((function(t){var a=t.data.todos;e.setState({todos:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.todos.filter((function(e){return!1===e.completed})),a=t.sort((function(e,t){return Number(t.important)-Number(e.important)})),n=this.state.todos.filter((function(e){return!0===e.completed}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement(b,{addTodoFunc:this.addTodo}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 col-md-7"},o.a.createElement(O,{count:t.length}),a.map((function(t){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(g,{deleteTaskFunc:e.deleteTask,completeTaskFunc:e.completeTask,key:t.taskID,complete:t.completed,task:t.text,important:t.important,dueDate:t.dueDate,id:t.taskID})))}))),o.a.createElement("div",{className:"col-12 col-md-5"},o.a.createElement(w,{count:n.length}),n.map((function(t){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(j,{deleteTaskFunc:e.deleteTask,key:t.taskID,complete:t.completed,task:t.text,important:t.important,dueDate:t.dueDate,id:t.taskID})))}))))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.6e944de3.chunk.js.map