(this.webpackJsonpiwantit=this.webpackJsonpiwantit||[]).push([[4],{260:function(e,t,n){"use strict";var r=n(44),a=n(0),i=n.n(a),c=n(1),o=n(43);function l(){var e=Object(r.a)(["\n    width: 100%;\n    max-width: ",";\n  "]);return l=function(){return e},e}t.a=function(e){var t=Object(c.default)(e)(l(),(function(e){var t=e.theme,n=e.isSmall,r=e.maxSize,a=void 0===r?"xxlarge":r;return n?"100%":t.global.size[a]}));return function(e){var n=Object(o.b)().isSmall;return i.a.createElement(t,Object.assign({isSmall:n},e))}}},261:function(e,t,n){"use strict";var r=n(75),a=n(0),i=n.n(a),c=n(76),o=n(77),l=function(e){return e.slug};t.a=function(e){var t=e.id,n=Object(r.a)(e,["id"]),a=Object(o.d)(t,l);return i.a.createElement(c.a,Object.assign({to:"/category/".concat(t,"/").concat(a)},n))}},262:function(e,t,n){"use strict";var r=n(44),a=n(0),i=n.n(a),c=n(122),o=n(1);function l(){var e=Object(r.a)(["\n  animation: "," 2s ease-in-out infinite;\n  background-image: ",";\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n"]);return l=function(){return e},e}function u(){var e=Object(r.a)(["\n  0% {\n    background-position: -200px 0;\n  }\n  100% {\n    background-position: calc(200px + 100%) 0;\n  }\n"]);return u=function(){return e},e}var s=Object(o.keyframes)(u()),m=Object(o.default)(c.a)(l(),s,(function(e){var t=e.theme;return"linear-gradient(90deg, ".concat(t.global.colors["light-3"],", ").concat(t.global.colors["light-1"],", ").concat(t.global.colors["light-3"],")")}));t.a=function(e){return i.a.createElement(m,Object.assign({background:"light-3",width:"100%",height:"25px",round:"2px",margin:{vertical:"xsmall"}},e))}},271:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(304),c=n(122),o=n(245),l=n(244),u=n(76);t.a=function(e){var t=e.children;return a.a.createElement(c.a,null,a.a.createElement(o.a,null,t),a.a.createElement(l.a,null,a.a.createElement(i.a,{id:"notFound.title"})," ",a.a.createElement(u.a,{to:"/"},a.a.createElement(l.a,{color:"neutral-3"},a.a.createElement(i.a,{id:"notFound.link"})))))}},277:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(454),c=n(302),o=n.n(c);t.a=function(e){return a.a.createElement(i.a,Object.assign({fallback:o.a},e))}},278:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(244);t.a=Object(r.memo)((function(e){var t=e.children,n=e.short,r=t&&function(e,t){var n=document.createElement("div");n.innerHTML=e;var r=n.textContent.split(",").map((function(e){return e.trim()})).filter(Boolean);return(t?r.splice(1,6):r.splice(1)).join(", ")}(t,n);return r?a.a.createElement(i.a,{size:"small"},r):null}))},279:function(e,t,n){"use strict";var r=n(75),a=n(0),i=n.n(a),c=n(244),o=new Intl.NumberFormat("el",{style:"currency",currency:"EUR"});t.a=Object(a.memo)((function(e){var t=e.children,n=Object(r.a)(e,["children"]);return i.a.createElement(c.a,n,o.format(t/100))}))},280:function(e,t,n){"use strict";var r=n(75),a=n(0),i=n.n(a),c=n(304),o=n(76),l=n(261),u=n(244),s=n(122),m=n(77),g=function(e){return e.title},d=function(e){var t=e.id,n=Object(m.d)(t,g);return i.a.createElement(l.a,{id:t},i.a.createElement(u.a,{size:"small",color:"dark-3"},n))};t.a=function(e){var t=e.categoryId,n=Object(r.a)(e,["categoryId"]);return i.a.createElement(s.a,Object.assign({direction:"row"},n),i.a.createElement(o.a,{to:"/"},i.a.createElement(u.a,{size:"small",color:"dark-3"},i.a.createElement(c.a,{id:"breadcrumb.landing"}))),t&&i.a.createElement(a.Fragment,null,i.a.createElement(u.a,{alignSelf:"end",size:"small",color:"dark-3",margin:{horizontal:"xsmall"}},"/"),i.a.createElement(d,{id:t})))}},301:function(e,t,n){"use strict";var r=n(75),a=n(44),i=n(0),c=n.n(i),o=n(122),l=n(245),u=n(1),s=n(76),m=n(277),g=n(278),d=n(279),f=n(46);function p(){var e=Object(a.a)(["\n  height: 100%;\n"]);return p=function(){return e},e}var A=Object(u.default)(s.a)(p()),E=function(e){return{imageUrl:e.imageUrl,title:e.title,price:e.price,excerpt:e.excerpt,slugPath:e.slugPath}};t.a=function(e){var t=e.id,n=e.noExcerpt,a=Object(r.a)(e,["id","noExcerpt"]),i=Object(f.b)(t,E),u=i.imageUrl,p=i.title,b=i.price,h=i.excerpt,v=i.slugPath,j="/product/".concat(v);return c.a.createElement(o.a,Object.assign({background:"white",pad:"medium",gap:"small",round:"2px",title:p},a),c.a.createElement(o.a,{flex:"grow",basis:"0"},c.a.createElement(A,{to:j},c.a.createElement(m.a,{src:u,fill:!0,fit:"contain"}))),c.a.createElement(o.a,{flex:"grow",justify:"between",basis:"0"},c.a.createElement(o.a,null,c.a.createElement(s.a,{to:j},c.a.createElement(l.a,{level:"3",size:"small",margin:"none"},p)),h&&!n&&c.a.createElement(g.a,{short:!0},h)),c.a.createElement(s.a,{to:j},c.a.createElement(d.a,{weight:"bold"},b))))}},302:function(e,t){e.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE7SURBVHhe7dIxAQAwEAOh+pcbA18hx4AD3rajS4A4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIEiBMgToA4AeIESNt9g/FOXDys9s0AAAAASUVORK5CYII="},303:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(24),a=n(84),i=function(e){var t=e.categoryId,n=e.page,i=e.sort,c=e.order,o=e.priceMax,l=e.priceMin,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;return function(e,s,m){var g=m.api,d=m.notification,f=m.productsDispatch,p=Object(a.a)({categoryId:t,page:n,sort:i,order:c,priceMax:o,priceMin:l});return s(r.f(p)),g.getProductsByCategory(t,{page:n,sort:i,order:c,priceMax:o,priceMin:l,limit:u}).then((function(e){var t=e.data;f(r.a(t));var n=t.map((function(e){return e.id.toString()}));s(r.b(p,{ids:n}))})).catch((function(e){s(r.d(p,e)),d.server(e)}))}}},427:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(0),a=n.n(r),i=n(1),c=n(235),o=n(9),l={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},u=Object(i.css)(["align-items:",";"],(function(e){return l[e.align]})),s={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},m=Object(i.css)(["align-content:",";"],(function(e){return s[e.alignContent]})),g={center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},d=Object(i.css)(["justify-items:",";"],(function(e){return g[e.justify]})),f={around:"space-around",between:"space-between",center:"center",end:"flex-end",start:"flex-start",stretch:"stretch"},p=Object(i.css)(["justify-content:",";"],(function(e){return f[e.justifyContent]})),A={flex:"1fr",full:"100%","1/2":"50%","1/4":"25%","2/4":"50%","3/4":"75%","1/3":"33.33%","2/3":"66.66%"},E=function(e,t){return Array.isArray(e)?"minmax("+(t.global.size[e[0]]||e[0])+", "+(t.global.size[e[1]]||e[1])+")":"flex"===e?"1fr":"minmax("+(t.global.size[e]||e)+", 1fr)"},b=function(e,t,n){var r=A[e];return!n||!r||t.fillContainer&&"horizontal"!==t.fillContainer||console.warn("Grid needs `fill` when using fractional row sizes"),r||t.theme.global.size[e]||e},h=i.default.div.attrs((function(e){return{"aria-label":e.a11yTitleProp}})).withConfig({displayName:"StyledGrid",componentId:"sc-1wofa1l-0"})(["display:grid;box-sizing:border-box;"," "," "," "," "," "," "," "," "," "," "," ",""],c.f,(function(e){return e.fillContainer&&("horizontal"===(t=e.fillContainer)?"width: 100%;":"vertical"===t?"height: 100%;":t?"\n      width: 100%;\n      height: 100%;\n    ":void 0);var t}),(function(e){return e.align&&u}),(function(e){return e.alignContent&&m}),(function(e){return e.areas&&function(e){if(Array.isArray(e.rowsProp)&&Array.isArray(e.columns)||console.warn("Grid `areas` requires `rows` and `columns` to be arrays."),Array.isArray(e.areas)&&e.areas.every((function(e){return Array.isArray(e)})))return"grid-template-areas: "+e.areas.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";";var t=e.rowsProp.map((function(){return e.columns.map((function(){return"."}))}));return e.areas.forEach((function(e){for(var n=e.start[1];n<=e.end[1];n+=1)for(var r=e.start[0];r<=e.end[0];r+=1)t[n][r]=e.name})),"grid-template-areas: "+t.map((function(e){return'"'+e.join(" ")+'"'})).join(" ")+";"}(e)}),(function(e){return e.columns&&function(e){return Array.isArray(e.columns)?Object(i.css)(["grid-template-columns:",";"],e.columns.map((function(t){return Array.isArray(t)?"minmax("+b(t[0],e)+", "+b(t[1],e)+")":b(t,e)})).join(" ")):"object"===typeof e.columns?Object(i.css)(["grid-template-columns:repeat( ",","," );"],"number"===typeof(t=e.columns.count)?t:"auto-"+t,E(e.columns.size,e.theme)):Object(i.css)(["grid-template-columns:repeat( auto-fill,"," );"],E(e.columns,e.theme));var t}(e)}),(function(e){return e.gap&&function(e){if("string"===typeof e.gap){var t=e.theme.global.edgeSize[e.gap]||e.gap;return"grid-gap: "+t+" "+t+";"}return e.gap.row&&e.gap.column?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":e.gap.row?"\n      grid-row-gap: "+(e.theme.global.edgeSize[e.gap.row]||e.gap.row)+";\n    ":e.gap.column?"\n      grid-column-gap: "+(e.theme.global.edgeSize[e.gap.column]||e.gap.column)+";\n    ":""}(e)}),(function(e){return e.justify&&d}),(function(e){return e.justifyContent&&p}),(function(e){return e.pad&&Object(c.c)("padding",e.pad,e.responsive,e.theme.global.edgeSize.responsiveBreakpoint,e.theme)}),(function(e){return e.rowsProp&&function(e){return Array.isArray(e.rowsProp)?Object(i.css)(["grid-template-rows:",";"],e.rowsProp.map((function(t){return Array.isArray(t)?"minmax("+b(t[0],e,!0)+", "+b(t[1],e,!0)+")":b(t,e,!0)})).join(" ")):Object(i.css)(["grid-auto-rows:",";"],e.theme.global.size[e.rowsProp])}(e)}),(function(e){return e.theme.grid&&e.theme.grid.extend}));function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}h.defaultProps={},Object.setPrototypeOf(h.defaultProps,o.a);var j=function(e){var t=e.a11yTitle,n=e.fill,r=e.responsive,i=void 0===r||r,c=e.rows,o=e.tag,l=e.as,u=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["a11yTitle","fill","responsive","rows","tag","as"]);return a.a.createElement(h,v({a11yTitleProp:t,as:!l&&o?o:l,fillContainer:n,responsive:i,rowsProp:c},u))};j.available="undefined"!==typeof window&&window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid")},447:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(122),c=n(245),o=n(43),l=n(46),u=n(24),s=n(277),m=n(260),g=n(280),d=n(278),f=n(279),p=function(e){return{price:e.price,excerpt:e.excerpt}},A=function(e){var t=e.id,n=Object(l.b)(t,p),r=n.price,c=n.excerpt;return a.a.createElement(i.a,{gridArea:"info",gap:"medium"},c&&a.a.createElement(d.a,null,c),a.a.createElement(f.a,{gridArea:"price",weight:"bold"},r))},E=n(427),b={rows:["1fr"],columns:["1fr"],areas:[["details"],["image"],["info"],["description"],["related"]],gap:"medium"},h={rows:["medium","flex","medium"],columns:["1fr","1fr"],areas:[["image","details"],["description","description"],["related","related"]],gap:"large",fill:!0},v=function(e){var t=Object(o.b)().isSmall;return a.a.createElement(E.a,Object.assign({},t?b:h,e))},j=n(19),w=n(262),y=Object(j.a)(Array(4)).map((function(){return 100})),x=function(e){var t=e.isSmall;return a.a.createElement(i.a,{width:"100%",align:"center"},y.map((function(e,n){return a.a.createElement(w.a,{key:n,width:"".concat(t?e:e-20,"%")})})))},O=function(){var e=Object(o.b)().isSmall;return a.a.createElement(v,null,a.a.createElement(i.a,{gridArea:"image",align:"center"},a.a.createElement(w.a,{height:"370px",width:e?"50%":"240px"})),a.a.createElement(i.a,{gridArea:"details",gap:"small",justify:"center",width:e?null:{max:"medium"}},a.a.createElement(w.a,{height:"40px"}),!e&&a.a.createElement(w.a,{height:"24px",gridArea:"info"})),e&&a.a.createElement(w.a,{gridArea:"info"}),a.a.createElement(i.a,{gap:"medium",gridArea:"description"},a.a.createElement(x,{isSmall:e}),a.a.createElement(x,{isSmall:e}),a.a.createElement(x,{isSmall:e})))},I=n(304),M=n(271),B=function(e){return a.a.createElement(M.a,e,a.a.createElement(I.a,{id:"pages.categories.notFound"}))},T=n(75),S=n(301),z=function(e){var t=e.ids,n=Object(T.a)(e,["ids"]),r=Object(o.b)().isSmall;return a.a.createElement(i.a,Object.assign({gridArea:"related",gap:"small"},n),a.a.createElement(c.a,{margin:"none",level:"4"},a.a.createElement(I.a,{id:"pages.product.related"})),a.a.createElement(i.a,{direction:"row",gap:"small",wrap:!0},t.map((function(e){return a.a.createElement(S.a,{key:e,id:e,width:r?"100%":{max:"300px"},margin:{bottom:"small"},height:r?"200px":"280px",noExcerpt:!0})}))))},k=n(303),C=n(86),P=Object(m.a)(i.a),U=function(e){return{loading:e.loading,loaded:e.loaded,exists:e.exists,imageUrl:e.imageUrl,title:e.title,description:e.description,categoryId:e.categoryId}};t.default=function(e){var t=e.id,n=Object(o.b)().isSmall,m=Object(l.c)(),d=Object(l.b)(t,U),f=d.loading,p=d.loaded,E=d.exists,b=d.imageUrl,h=d.title,j=d.description,w=d.categoryId,y=function(e,t){var n=Object(l.d)(),a=n.ids,i=n.byId,c=Object(C.c)(),o=Object(r.useMemo)((function(){var n=a.filter((function(t){return t!==e})),r=n.filter((function(e){return i[e].categoryId===t})).slice(0,3);return r.length>0?r:n.slice(0,3)}),[a,i,e]);return Object(r.useEffect)((function(){if(t&&!o.length){var e={categoryId:t};c(k.a(e,3))}}),[e,t]),o}(t,w);return Object(r.useEffect)((function(){p||m(function(e){return function(t,n,r){var a=r.api,i=r.notification;return n(u.f(e)),a.getProduct(e).then((function(t){var r=t.data;return n(u.b(e,r))})).catch((function(t){n(u.d(e,t)),i.server(t)}))}}(t))}),[t]),a.a.createElement(P,{maxSize:"xlarge",gap:"medium"},a.a.createElement(g.a,{categoryId:w,margin:{bottom:"medium"}}),!p&&!E&&a.a.createElement(B,null),f&&!p&&a.a.createElement(O,null),p&&E&&a.a.createElement(v,null,a.a.createElement(i.a,{gridArea:"image",align:"center"},a.a.createElement(i.a,{height:{max:"400px"},width:n?"50%":null},b&&a.a.createElement(s.a,{src:b,fill:!0,fit:"contain"}))),a.a.createElement(i.a,{gridArea:"details",gap:"small",justify:"center",width:n?null:{max:"medium"}},a.a.createElement(c.a,{level:"3",margin:"none"},h),!n&&a.a.createElement(A,{id:t})),n&&a.a.createElement(A,{id:t}),j&&a.a.createElement(i.a,{gridArea:"description",align:"center"},a.a.createElement(i.a,{dangerouslySetInnerHTML:{__html:j},width:{max:"large"}})),y.length>0&&a.a.createElement(z,{ids:y})))}}}]);
//# sourceMappingURL=page.product.0216972a.chunk.js.map