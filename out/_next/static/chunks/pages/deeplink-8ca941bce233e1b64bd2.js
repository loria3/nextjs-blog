_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(s.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},s=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,s=e.hasQuery,o=void 0!==s&&s;return n||i&&o}},"20a2":function(e,t,n){e.exports=n("nOHt")},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var r,i=n("q1tI");var s=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return s.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=o},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(n,i,s):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),s=(r=n("Xuae"))&&r.__esModule?r:{default:r},o=n("lwAK"),a=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var s=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var d=i.props[u],h=r[u]||new Set;"name"===u&&o||!h.has(d)?(h.add(d),r[u]=h):s=!1}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,i.useContext)(o.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var m=p;t.default=m},"8jnP":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deeplink",function(){return n("QdbV")}])},"8oxB":function(e,t){var n,r,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:s}catch(e){n=s}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&h())}function h(){if(!u){var e=a(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},Bjk4:function(e,t,n){"use strict";const r="src/index.tsx";function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return null!=e?e:t()}function o(e){let t,n=e[0],r=1;for(;r<e.length;){const i=e[r],s=e[r+1];if(r+=2,("optionalAccess"===i||"optionalCall"===i)&&null==n)return;"access"===i||"optionalAccess"===i?(t=n,n=s(n)):"call"!==i&&"optionalCall"!==i||(n=s(((...e)=>n.call(t,...e))),t=void 0)}return n}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("q1tI")),c=i(n("20a2")),l=i(n("g4pe"));t.default=(e,t)=>class extends a.default.Component{static async getInitialProps({res:n}){return o([n,"optionalAccess",e=>e.writeHead])&&(n.writeHead(s(o([t,"optionalAccess",e=>e.statusCode]),(()=>301)),{Location:e}),n.end()),{}}componentDidMount(){null!=o([t,"optionalAccess",e=>e.asUrl])?c.default.push(e,t.asUrl,{shallow:!0}):"/"===e[0]?c.default.push(e):window.location.href=e}render(){const n=s(o([t,"optionalAccess",e=>e.asUrl]),(()=>e));return a.default.createElement(a.default.Fragment,null,a.default.createElement(l.default,{__self:this,__source:{fileName:r,lineNumber:35}},a.default.createElement("noscript",{__self:this,__source:{fileName:r,lineNumber:37}},a.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n}`,__self:this,__source:{fileName:r,lineNumber:38}})),(void 0===o([t,"optionalAccess",e=>e.statusCode])||301===o([t,"optionalAccess",e=>e.statusCode]))&&a.default.createElement("link",{rel:"canonical",href:n,__self:this,__source:{fileName:r,lineNumber:42}})),this.props.children?this.props.children:a.default.createElement("p",{__self:this,__source:{fileName:r,lineNumber:49}},"Redirecting to ",a.default.createElement("a",{href:n,__self:this,__source:{fileName:r,lineNumber:50}},n),"\u2026"))}}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=i},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},MX0m:function(e,t,n){e.exports=n("3niX")},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QdbV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var r=n("nKUr"),i=n("MX0m"),s=n.n(i),o=n("g4pe"),a=n.n(o),c=n("b6Qr"),l=n("20a2"),u=n("Bjk4"),d=n.n(u),f=n("q1tI");function h(){var e=Object(l.useRouter)().query,t=e.articleid,n=e.catId,i=e.authorsBio,o=Object(f.useState)(null),u=o[0],h=o[1];if(t&&n&&!u?h("ibetterme://article/"+t+"/"+n):i&&!u&&h("ibetterme://authorsBio/"+i),!u)return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"v 2.0"}),Object(r.jsx)("br",{}),Object(r.jsx)("h1",{children:"Loading......."})]});var p=d()(u);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(p,{children:Object(r.jsxs)("div",{className:"jsx-1690062095 container",children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{className:"jsx-1690062095",children:"US.LY - Deeplinks"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-1690062095"})]}),Object(r.jsxs)("main",{className:"jsx-1690062095",children:[Object(r.jsx)("h1",{className:"jsx-1690062095 title",children:"\u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd"}),Object(r.jsx)(c.MobileView,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{className:"jsx-1690062095",children:"Mobile"}),Object(r.jsxs)("div",{className:"jsx-1690062095 grid",children:[Object(r.jsx)("div",{className:"jsx-1690062095 card",children:Object(r.jsx)("a",{href:"https://apps.apple.com/us/app/usly/id1546418617",className:"jsx-1690062095",children:Object(r.jsx)("img",{src:"/static/images/appstore.svg",style:{width:"5em"},className:"jsx-1690062095"})})}),Object(r.jsx)("div",{className:"jsx-1690062095 card",children:Object(r.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.magicgrowth",className:"jsx-1690062095",children:Object(r.jsx)("img",{src:"/static/images/google-play-badge.png",style:{width:"5em"},className:"jsx-1690062095"})})})]})]})}),Object(r.jsx)(c.BrowserView,{children:Object(r.jsxs)("div",{className:"jsx-1690062095 grid",children:[Object(r.jsx)("a",{href:"https://apps.apple.com/us/app/usly/id1546418617",className:"jsx-1690062095 card",children:Object(r.jsx)("img",{src:"/static/images/appstore.svg",style:{width:"10em"},className:"jsx-1690062095"})}),Object(r.jsx)("a",{href:"https://play.google.com/store/apps/details?id=com.magicgrowth",className:"jsx-1690062095 card",children:Object(r.jsx)("img",{src:"/static/images/google-play-badge.png",style:{width:"13em"},className:"jsx-1690062095"})})]})})]}),Object(r.jsxs)("footer",{className:"jsx-1690062095",children:[Object(r.jsx)("p",{className:"jsx-1690062095",children:" Powered by "}),Object(r.jsx)("img",{src:"static/images/logo1024.png",style:{width:"5em"},className:"jsx-1690062095"}),Object(r.jsx)("p",{className:"jsx-1690062095",children:" Version 2.1"})]}),Object(r.jsx)(s.a,{id:"2093473192",children:[".container.jsx-1690062095{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-1690062095{padding:5rem 0;margin:3rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-1690062095{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-1690062095 img.jsx-1690062095{margin-left:0.5rem;}","footer.jsx-1690062095 a.jsx-1690062095{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-1690062095{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-1690062095 a.jsx-1690062095{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-1690062095 a.jsx-1690062095:hover,.title.jsx-1690062095 a.jsx-1690062095:focus,.title.jsx-1690062095 a.jsx-1690062095:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-1690062095{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-1690062095,.description.jsx-1690062095{text-align:center;}",".description.jsx-1690062095{line-height:1.5;font-size:1.5rem;text-align:right;}","code.jsx-1690062095{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New, monospace;}",".grid.jsx-1690062095{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}",".card.jsx-1690062095{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:center;color:inherit;-webkit-text-decoration:none;text-decoration:none;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-1690062095:hover,.card.jsx-1690062095:focus,.card.jsx-1690062095:active{color:#0070f3;border-color:#0070f3;}",".card.jsx-1690062095 h3.jsx-1690062095{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-1690062095 p.jsx-1690062095{margin:0;font-size:1.25rem;line-height:1.5;}",".logo.jsx-1690062095{height:1em;}","@media (max-width:600px){.grid.jsx-1690062095{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),Object(r.jsx)(s.a,{id:"4007637198",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]})]})})})}},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),s=n("ZhPi"),o=n("Bnag");e.exports=function(e){return r(e)||i(e)||s(e)||o()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n("9kyW")),i=s(n("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),s=t+i;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var s=this.computeId(i,r);return{styleId:s,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),s=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),a=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),d=function(e){o(n,e);var t=l(n);function n(e){var s;return i(this,n),(s=t.call(this,e))._hasHeadManager=void 0,s.emitChange=function(){s._hasHeadManager&&s.props.headManager.updateHead(s.props.reduceComponentsToState(r(s.props.headManager.mountedInstances),s.props))},s._hasHeadManager=s.props.headManager&&s.props.headManager.mountedInstances,s}return s(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=d},a1gu:function(e,t,n){var r=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?i(e):t}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,s=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(s){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return n?s.insertBefore(r,n):s.appendChild(r),r},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,s),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,n("8oxB"))},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i}},[["8jnP",0,2,1,6]]]);