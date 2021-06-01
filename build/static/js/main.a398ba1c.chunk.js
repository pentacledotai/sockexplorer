(this["webpackJsonpsock-explorer"]=this["webpackJsonpsock-explorer"]||[]).push([[0],{31:function(e,t,n){e.exports=n.p+"static/media/twitter.6eb4304b.svg"},35:function(e,t,n){e.exports=n(47)},40:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),i=n(30),l=n.n(i),c=(n(40),n(10)),s=n(7),u=n(9),d=n(13),f=n(14),m=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("article",{className:"footer-content flex-group space-between flex-align-center"},o.a.createElement("div",null,"\xa9 ",(new Date).getFullYear()," pentacle dot ai",o.a.createElement("a",{href:"https://github.com/pentacledotai/sockexplorer",target:"_blank",rel:"noopener noreferrer"},"GitHub"),o.a.createElement(c.b,{to:"/terms"},"Terms"))))}}]),n}(r.Component),h=n(2),p=function(e){var t=e.children;return o.a.createElement("main",null,t)},b=n(31),v=n.n(b),g=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("nav",null,o.a.createElement("ul",{className:"nav-content"},o.a.createElement("li",null,o.a.createElement(c.b,{to:"/socks"},"SOCKS")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://twitter.com/pentacleai",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:v.a,className:"width-1-5",alt:"twitter"})))))}}]),n}(r.Component),E=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"header-content flex-align-center flex-group space-between"},o.a.createElement(c.b,{className:"logo",to:"/"},"Sock Explorer"),o.a.createElement(g,null)))}}]),n}(r.Component),y=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement(p,null,o.a.createElement("section",{className:"editorial-content one-col"},o.a.createElement("article",{className:"box feature box-padding"},o.a.createElement("h1",null,"Terms of use"),o.a.createElement("h2",null,"Links to other sites"),o.a.createElement("p",null,'This Site may contain links to other independent third-party Web sites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. '),o.a.createElement("p",null,"Such Linked Sites are not under Pentacle\u2019s control, and Pentacle is not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.")),o.a.createElement("article",{className:"box feature box-padding"},o.a.createElement("h2",null,"Disclaimers"),o.a.createElement("p",null,"Pentacle does not promise that the site or any content of the site, will be error-free, or that any defects will be corrected, or that your use of the site will provide specific results. The site and its content are delivered on an as-is basis. Pentacle disclaims all warranties, express or implied, including warranties of accuracy, non-infringement, or fitness for a particular purpose."),o.a.createElement("p",null,"Pentacle disclaims any and all liability for the acts, omissions or conduct of any third parties in connection with or related to your use of the site. You assume total responsibility for your use of the site and any Linked Sites."),o.a.createElement("p",null,"Your sole remedy against Pentacle for your use of this site and any Linked Sites is to stop using the site or any such content. This limitation of relief is a part of the bargain between the parties.")),o.a.createElement("article",{className:"box feature box-padding"},o.a.createElement("h2",null,"Affiliate links"),o.a.createElement("ul",null,o.a.createElement("li",null,"Links to exchanges on Pentacle.ai are affiliate links, which generate commission from new sign-ups for Pentacle"),o.a.createElement("li",null,"Where possible Pentacle has selected an even split of commission and trading discount for any person using our affiliate link"))))))},k=n(25),w=n(34);function x(e,t){var n=e.module(),r=new Map([["socks-holders.csv","/socks-holders.csv"]]);return n.builtin("FileAttachment",e.fileAttachments((function(e){return r.get(e)}))),n.variable(t()).define(["md"],(function(e){return e(a||(a=Object(w.a)(["SOCK explorer"])))})),n.variable(t("chart")).define("chart",["pack","data","d3","width","height","DOM","color","invalidation"],(function(e,t,n,a,r,o,i,l){var c=e(t),s=n.forceSimulation(c.leaves()).velocityDecay(.5).force("x",n.forceX(a/2).strength(.001)).force("y",n.forceY(r/2).strength(.001)).force("charge",n.forceManyBody().strength(.9)).force("collision",n.forceCollide().radius((function(e){return e.r+.1})).strength(.8)),u=n.select(".wallet-info").append("div").style("opacity",0).style("color","black"),d=n.create("svg").attr("viewBox",[0,0,a,r]).attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor","middle");d.append("rect").attr("width","100%").attr("height","100%").attr("fill","#1c252c");var f=d.append("g"),m=f.selectAll("g").data(c.leaves()).join("g").attr("transform",(function(e){return"translate(".concat(e.x+1,",").concat(e.y+1,")")}));return m.append("circle").attr("id",(function(e){return(e.leafUid=o.uid("leaf")).id})).attr("r",(function(e){return e.r})).attr("stroke","#1c252c").attr("stroke-width",.1).attr("fill-opacity",1).attr("fill",(function(e){return i(e.value)})).attr("xlink:href",(function(e){return e.url})).on("mouseover",(function(e){u.style("opacity",1).style("background-color","pink").style("border","solid").style("border-radius",".5rem").style("padding",".75rem").html((function(e){return e.data.wallet}))})).on("mouseleave",(function(e){u.style("opacity",0),n.select(this).style("stroke","none").style("opacity",1)})).on("click",(function(e){window.open(e.url,"_blank")})),s.on("tick",(function(){console.log(c.leaves()),m.attr("transform",(function(e){return"translate(".concat(e.x+1,",").concat(e.y+1,")")}))})),d.call(n.zoom().extent([[0,0],[a,r]]).scaleExtent([1,50]).on("zoom",(function(e){var t=e.transform;f.attr("transform",t)}))),l.then((function(){return s.stop()})),d.node()})),n.variable(t("data")).define("data",["FileAttachment"],(function(e){return e("socks-holders.csv").text()})),n.variable(t("pack")).define("pack",["d3","width","height"],(function(e,t,n){return function(a){return e.pack().size([t-2,n-2]).padding(3)(e.hierarchy({children:a}).sum((function(e){return e.value})))}})),n.variable(t("width")).define("width",(function(){return 900})),n.variable(t("height")).define("height",["width"],(function(e){return e})),n.variable(t("format")).define("format",["d3"],(function(e){return e.format(",d")})),n.variable(t("color")).define("color",["d3","data"],(function(e,t){return e.scaleSequential().domain(t.map((function(e){return e.group}))).range(e.quantize((function(t){return e.interpolateRdPu(t)}),121))})),n.variable(t("d3")).define("d3",["require"],(function(e){return e("d3@6")})),n}function O(){var e=Object(r.useRef)();return Object(r.useEffect)((function(){var t=new k.b;return t.module(x,(function(t){if("chart"===t)return new k.a(e.current)})),function(){return t.dispose()}}),[]),o.a.createElement("main",{className:"ecosystem"},o.a.createElement("div",{className:"wallet-info"}),o.a.createElement("div",{ref:e}))}var j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement(O,null))},S=function(){return o.a.createElement(h.c,null,o.a.createElement(h.a,{path:"/",element:o.a.createElement(j,null)}),o.a.createElement(h.a,{path:"/terms",element:o.a.createElement(y,null)}))};var N=function(){return o.a.createElement(c.a,null,o.a.createElement(S,null),o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.a398ba1c.chunk.js.map