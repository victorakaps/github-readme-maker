(this["webpackJsonpgithub-readme-maker"]=this["webpackJsonpgithub-readme-maker"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=(a(14),a(3)),i=a(4),u=a(8),m=a(7),s=a(5),d=a.n(s),h=a(6),p=a.n(h),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={inputText:""},e.updateTextArea=function(){e.textarea.focus(),p()(e.textarea)},e.updateOutput=function(){e.handleChange();var t=document.getElementById("output").clientHeight;document.getElementById("input").style.height="".concat(t,"px")},e.addProfile=function(){fetch("profile1.txt").then((function(e){return e.text()})).then((function(t){document.getElementById("input").value=t,e.updateOutput()}))},e.sampleOne=function(){fetch("sample1.txt").then((function(e){return e.text()})).then((function(t){document.getElementById("input").value=t,e.updateOutput()}))},e.sampleTwo=function(){fetch("sample2.txt").then((function(e){return e.text()})).then((function(t){document.getElementById("input").value=t,e.updateOutput()}))},e.downloadReadMeFile=function(){var t=document.createElement("a"),a=new Blob([e.state.inputText],{type:"text/plain"});t.href=URL.createObjectURL(a),t.download="README.md",document.body.appendChild(t),t.click()},e.handleChange=function(){var t=document.getElementById("input");e.setState({inputText:t.value})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.updateTextArea()}},{key:"getMarkdownText",value:function(){return{__html:d()(this.state.inputText,{sanitize:!0})}}},{key:"render",value:function(){var e=this,t=this.state.inputText;return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("nav",{className:"nav-wrapper transparent"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"https://github.com/victorakaps/github-readme-maker",className:"brand-logo"},l.a.createElement("h4",null,"Github Readme Maker")),l.a.createElement("ul",{className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement("button",{className:"btn-color",onClick:this.sampleOne},"TEMPLATE-1")),l.a.createElement("li",null,l.a.createElement("button",{className:"btn-color",onClick:this.sampleTwo},"TEMPLATE-2")),l.a.createElement("li",null,l.a.createElement("button",{className:"btn-color",onClick:this.addProfile},"PROFILE-1")))))),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 l6"},l.a.createElement("textarea",{id:"input",value:t,onChange:this.handleChange,placeholder:"Write MarkDown Here...",ref:function(t){return e.textarea=t}})),l.a.createElement("div",{className:"col s12 l6",id:"output"},l.a.createElement("p",{dangerouslySetInnerHTML:this.getMarkdownText()})))),l.a.createElement("center",null,l.a.createElement("button",{className:"btn-color btn-main center",onClick:this.downloadReadMeFile},"Download README.MD")))}}]),a}(l.a.Component);function f(){return l.a.createElement("footer",{className:"page-footer grey darken-3"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s12 l6"},l.a.createElement("h5",null,"About Github Readme Maker"),l.a.createElement("p",null,"Github Readme Maker provides very handy formatting buttons and shortcuts, based on the WYSIWYG-style Markdown editor used by Stack Overflow.")),l.a.createElement("div",{className:"col s12 l4 offset-l2"},l.a.createElement("h5",null,"Features"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("p",{className:"grey-text text-lighten-3"},"Inbuilt Templates")),l.a.createElement("li",null,l.a.createElement("p",{className:"grey-text text-lighten-3"},"GitHub Flavored Markdown")),l.a.createElement("li",null,l.a.createElement("p",{className:"grey-text text-lighten-3"},"Live preview with Scroll Sync")),l.a.createElement("li",null,l.a.createElement("p",{className:"grey-text text-lighten-3"},"Emojis Support")))))),l.a.createElement("div",{className:"footer-copyright grey darken-4"},l.a.createElement("div",{className:"container center-align"},"\xa9 2020 ",l.a.createElement("a",{href:"https://github.com/victorakaps"},"Victorakaps"))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null),l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.00f27e76.chunk.js.map