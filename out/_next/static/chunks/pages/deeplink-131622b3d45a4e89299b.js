_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"20a2":function(e,i,n){e.exports=n("nOHt")},"8jnP":function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deeplink",function(){return n("QdbV")}])},Bjk4:function(e,i,n){"use strict";const s="src/index.tsx";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,i){return null!=e?e:i()}function o(e){let i,n=e[0],s=1;for(;s<e.length;){const t=e[s],r=e[s+1];if(s+=2,("optionalAccess"===t||"optionalCall"===t)&&null==n)return;"access"===t||"optionalAccess"===t?(i=n,n=r(n)):"call"!==t&&"optionalCall"!==t||(n=r(((...e)=>n.call(i,...e))),i=void 0)}return n}Object.defineProperty(i,"__esModule",{value:!0});var a=t(n("q1tI")),l=t(n("20a2")),c=t(n("g4pe"));i.default=(e,i)=>class extends a.default.Component{static async getInitialProps({res:n}){return o([n,"optionalAccess",e=>e.writeHead])&&(n.writeHead(r(o([i,"optionalAccess",e=>e.statusCode]),(()=>301)),{Location:e}),n.end()),{}}componentDidMount(){null!=o([i,"optionalAccess",e=>e.asUrl])?l.default.push(e,i.asUrl,{shallow:!0}):"/"===e[0]?l.default.push(e):window.location.href=e}render(){const n=r(o([i,"optionalAccess",e=>e.asUrl]),(()=>e));return a.default.createElement(a.default.Fragment,null,a.default.createElement(c.default,{__self:this,__source:{fileName:s,lineNumber:35}},a.default.createElement("noscript",{__self:this,__source:{fileName:s,lineNumber:37}},a.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n}`,__self:this,__source:{fileName:s,lineNumber:38}})),(void 0===o([i,"optionalAccess",e=>e.statusCode])||301===o([i,"optionalAccess",e=>e.statusCode]))&&a.default.createElement("link",{rel:"canonical",href:n,__self:this,__source:{fileName:s,lineNumber:42}})),this.props.children?this.props.children:a.default.createElement("p",{__self:this,__source:{fileName:s,lineNumber:49}},"Redirecting to ",a.default.createElement("a",{href:n,__self:this,__source:{fileName:s,lineNumber:50}},n),"\u2026"))}}},QdbV:function(e,i,n){"use strict";n.r(i),n.d(i,"default",(function(){return d}));var s=n("nKUr"),t=n("MX0m"),r=n.n(t),o=n("g4pe"),a=n.n(o),l=n("b6Qr"),c=n("20a2");n("Bjk4");function d(){var e=Object(c.useRouter)().query,i="ibetterMe://article/"+e.articleid+"/"+e.catId;return Object(s.jsxs)("div",{className:"jsx-145984398 container",children:[Object(s.jsxs)(a.a,{children:[Object(s.jsx)("title",{className:"jsx-145984398",children:"USLY - Deeplinks"}),Object(s.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-145984398"})]}),Object(s.jsxs)("main",{className:"jsx-145984398",children:[Object(s.jsx)("h1",{className:"jsx-145984398 title",children:"\u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd"}),Object(s.jsxs)(l.MobileView,{children:[Object(s.jsx)("p",{className:"jsx-145984398",children:"Mobile"}),Object(s.jsxs)("div",{className:"jsx-145984398 grid",children:[Object(s.jsx)("a",{href:i,className:"jsx-145984398 card",children:Object(s.jsx)("img",{src:"/static/images/appstore.svg",style:{width:"5em"},className:"jsx-145984398"})}),Object(s.jsx)("a",{href:i,className:"jsx-145984398 card",children:Object(s.jsx)("img",{src:"/static/images/google-play-badge.png",style:{width:"5em"},className:"jsx-145984398"})})]})]}),Object(s.jsx)(l.BrowserView,{children:Object(s.jsxs)("div",{className:"jsx-145984398 grid",children:[Object(s.jsx)("a",{href:"https://google.com",className:"jsx-145984398 card",children:Object(s.jsx)("img",{src:"/static/images/appstore.svg",style:{width:"10em"},className:"jsx-145984398"})}),Object(s.jsx)("a",{href:"https://itunes.com",className:"jsx-145984398 card",children:Object(s.jsx)("img",{src:"/static/images/google-play-badge.png",style:{width:"13em"},className:"jsx-145984398"})})]})})]}),Object(s.jsxs)("footer",{className:"jsx-145984398",children:[Object(s.jsx)("p",{className:"jsx-145984398",children:" Powered by "}),Object(s.jsx)("img",{src:"static/images/logo1024.png",style:{width:"5em"},className:"jsx-145984398"})]}),Object(s.jsx)(r.a,{id:"3787287116",children:[".container.jsx-145984398{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","main.jsx-145984398{padding:5rem 0;margin:3rem;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-145984398{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","footer.jsx-145984398 img.jsx-145984398{margin-left:0.5rem;}","footer.jsx-145984398 a.jsx-145984398{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","a.jsx-145984398{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-145984398 a.jsx-145984398{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}",".title.jsx-145984398 a.jsx-145984398:hover,.title.jsx-145984398 a.jsx-145984398:focus,.title.jsx-145984398 a.jsx-145984398:active{-webkit-text-decoration:underline;text-decoration:underline;}",".title.jsx-145984398{margin:0;line-height:1.15;font-size:4rem;}",".title.jsx-145984398,.description.jsx-145984398{text-align:center;}",".description.jsx-145984398{line-height:1.5;font-size:1.5rem;text-align:right;}","code.jsx-145984398{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}",".grid.jsx-145984398{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}",".card.jsx-145984398{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:center;color:inherit;-webkit-text-decoration:none;text-decoration:none;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}",".card.jsx-145984398:hover,.card.jsx-145984398:focus,.card.jsx-145984398:active{color:#0070f3;border-color:#0070f3;}",".card.jsx-145984398 h3.jsx-145984398{margin:0 0 1rem 0;font-size:1.5rem;}",".card.jsx-145984398 p.jsx-145984398{margin:0;font-size:1.25rem;line-height:1.5;}",".logo.jsx-145984398{height:1em;}","@media (max-width:600px){.grid.jsx-145984398{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}"]}),Object(s.jsx)(r.a,{id:"3379920139",children:["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}","*{box-sizing:border-box;}"]})]})}},b6Qr:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,t=n("q1tI"),r=(s=t)&&"object"===typeof s&&"default"in s?s.default:s,o=new(n("peHP")),a=o.getBrowser(),l=(o.getCPU(),o.getDevice()),c=o.getEngine(),d=o.getOS(),u=o.getUA(),m=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},w=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},b=function(e){var i=w();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,i){for(var n=0;n<i.length;n++){var s=i[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function g(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function h(){return(h=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function x(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,s)}return n}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,i){return(y=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k="mobile",N="tablet",O="smarttv",E="console",S="wearable",_=void 0,C="Chrome",A="Firefox",M="Opera",P="Yandex",T="Safari",V="Internet Explorer",F="Edge",B="Chromium",L="IE",z="Mobile Safari",I="MIUI Browser",W="iOS",R="Android",D="Windows Phone",U="Windows",q="Mac OS",G={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},H=function(e,i,n,s){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?x(n,!0).forEach((function(i){g(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:m(i.vendor),model:m(i.model),os:m(n.name),osVersion:m(n.version),ua:m(s)})},X=function(e){switch(e){case k:return{isMobile:!0};case N:return{isTablet:!0};case O:return{isSmartTV:!0};case E:return{isConsole:!0};case S:return{isWearable:!0};case _:return{isBrowser:!0};default:return G}}(l.type);var Q=function(){return"string"===typeof u&&-1!==u.indexOf("Edg/")},$=function(){return a.name===F},Y=function(){return b("iPad")},K=l.type===O,Z=l.type===E,J=l.type===S,ee=a.name===z||Y(),ie=a.name===B,ne=function(){switch(l.type){case k:case N:return!0;default:return!1}}()||Y(),se=l.type===k,te=l.type===N||Y(),re=l.type===_,oe=d.name===R,ae=d.name===D,le=d.name===W||Y(),ce=a.name===C,de=a.name===A,ue=a.name===T||a.name===z,me=a.name===M,we=a.name===V||a.name===L,be=m(d.version),fe=m(d.name),pe=m(a.version),ge=m(a.major),he=m(a.name),xe=m(l.vendor),ve=m(l.model),ye=m(c.name),je=m(c.version),ke=m(u),Ne=$()||Q(),Oe=a.name===P,Ee=m(l.type,"browser"),Se=function(){var e=w();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),_e=Y(),Ce=b("iPhone"),Ae=b("iPod"),Me=function(){var e=w(),i=e&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),Pe=Q(),Te=$()&&!Q(),Ve=d.name===U,Fe=d.name===q,Be=a.name===I;i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return oe?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return re?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return Z?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return e.condition?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return we?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return le?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return se?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return ne?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return K?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return te?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return J?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,o=e.style;return ae?i?r.createElement(t.Fragment,null,n):r.createElement("div",{className:s,style:o},n):null},i.browserName=he,i.browserVersion=ge,i.deviceDetect=function(){var e=X.isBrowser,i=X.isMobile,n=X.isTablet,s=X.isSmartTV,t=X.isConsole,r=X.isWearable;return e?function(e,i,n,s,t){return{isBrowser:e,browserMajorVersion:m(i.major),browserFullVersion:m(i.version),browserName:m(i.name),engineName:m(n.name),engineVersion:m(n.version),osName:m(s.name),osVersion:m(s.version),userAgent:m(t)}}(e,a,c,d,u):s?function(e,i,n,s){return{isSmartTV:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(s)}}(s,c,d,u):t?function(e,i,n,s){return{isConsole:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(s)}}(t,c,d,u):i||n?H(X,l,d,u):r?function(e,i,n,s){return{isWearable:e,engineName:m(i.name),engineVersion:m(i.version),osName:m(n.name),osVersion:m(n.version),userAgent:m(s)}}(r,c,d,u):void 0},i.deviceType=Ee,i.engineName=ye,i.engineVersion=je,i.fullBrowserVersion=pe,i.getUA=ke,i.isAndroid=oe,i.isBrowser=re,i.isChrome=ce,i.isChromium=ie,i.isConsole=Z,i.isEdge=Ne,i.isEdgeChromium=Pe,i.isElectron=Me,i.isFirefox=de,i.isIE=we,i.isIOS=le,i.isIOS13=Se,i.isIPad13=_e,i.isIPhone13=Ce,i.isIPod13=Ae,i.isLegacyEdge=Te,i.isMIUI=Be,i.isMacOs=Fe,i.isMobile=ne,i.isMobileOnly=se,i.isMobileSafari=ee,i.isOpera=me,i.isSafari=ue,i.isSmartTV=K,i.isTablet=te,i.isWearable=J,i.isWinPhone=ae,i.isWindows=Ve,i.isYandex=Oe,i.mobileModel=ve,i.mobileVendor=xe,i.osName=fe,i.osVersion=be,i.withOrientationChange=function(e){return function(i){function n(e){var i,s,t;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),s=this,(i=!(t=v(n).call(this,e))||"object"!==typeof t&&"function"!==typeof t?j(s):t).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(j(i)),i.onOrientationChange=i.onOrientationChange.bind(j(i)),i.onPageLoad=i.onPageLoad.bind(j(i)),i.state={isLandscape:!1,isPortrait:!1},i}var s,t,o;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&y(e,i)}(n,i),s=n,(t=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":f(window))&&ne&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return r.createElement(e,h({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&p(s.prototype,t),o&&p(s,o),n}(r.Component)}},peHP:function(e,i,n){var s;!function(t,r){"use strict";var o="function",a="undefined",l="object",c="model",d="name",u="type",m="vendor",w="version",b="architecture",f="console",p="mobile",g="tablet",h="smarttv",x="wearable",v={extend:function(e,i){var n={};for(var s in e)i[s]&&i[s].length%2===0?n[s]=i[s].concat(e[s]):n[s]=e[s];return n},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:r},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},y={rgx:function(e,i){for(var n,s,t,a,c,d,u=0;u<i.length&&!c;){var m=i[u],w=i[u+1];for(n=s=0;n<m.length&&!c;)if(c=m[n++].exec(e))for(t=0;t<w.length;t++)d=c[++s],typeof(a=w[t])===l&&a.length>0?2==a.length?typeof a[1]==o?this[a[0]]=a[1].call(this,d):this[a[0]]=a[1]:3==a.length?typeof a[1]!==o||a[1].exec&&a[1].test?this[a[0]]=d?d.replace(a[1],a[2]):r:this[a[0]]=d?a[1].call(this,d,a[2]):r:4==a.length&&(this[a[0]]=d?a[3].call(this,d.replace(a[1],a[2])):r):this[a]=d||r;u+=2}},str:function(e,i){for(var n in i)if(typeof i[n]===l&&i[n].length>0){for(var s=0;s<i[n].length;s++)if(v.has(i[n][s],e))return"?"===n?r:n}else if(v.has(i[n],e))return"?"===n?r:n;return e}},j={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},k={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[d,w],[/(opios)[\/\s]+([\w\.]+)/i],[[d,"Opera Mini"],w],[/\s(opr)\/([\w\.]+)/i],[[d,"Opera"],w],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[d,w],[/(konqueror)\/([\w\.]+)/i],[[d,"Konqueror"],w],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[d,"IE"],w],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[d,"Edge"],w],[/(yabrowser)\/([\w\.]+)/i],[[d,"Yandex"],w],[/(Avast)\/([\w\.]+)/i],[[d,"Avast Secure Browser"],w],[/(AVG)\/([\w\.]+)/i],[[d,"AVG Secure Browser"],w],[/(puffin)\/([\w\.]+)/i],[[d,"Puffin"],w],[/(focus)\/([\w\.]+)/i],[[d,"Firefox Focus"],w],[/(opt)\/([\w\.]+)/i],[[d,"Opera Touch"],w],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[d,"UCBrowser"],w],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],w],[/(windowswechat qbcore)\/([\w\.]+)/i],[[d,"WeChat(Win) Desktop"],w],[/(micromessenger)\/([\w\.]+)/i],[[d,"WeChat"],w],[/(brave)\/([\w\.]+)/i],[[d,"Brave"],w],[/(whale)\/([\w\.]+)/i],[[d,"Whale"],w],[/(qqbrowserlite)\/([\w\.]+)/i],[d,w],[/(QQ)\/([\d\.]+)/i],[d,w],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[d,w],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[d,w],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[d,w],[/(MetaSr)[\/\s]?([\w\.]+)/i],[d],[/(LBBROWSER)/i],[d],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[w,[d,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[w,[d,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[d,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[d,w],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[w,[d,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[d,/(.+)/,"$1 WebView"],w],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[d,/(.+(?:g|us))(.+)/,"$1 $2"],w],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[w,[d,"Android Browser"]],[/(coc_coc_browser)\/([\w\.]+)/i],[[d,"Coc Coc"],w],[/(sailfishbrowser)\/([\w\.]+)/i],[[d,"Sailfish Browser"],w],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[d,w],[/(dolfin)\/([\w\.]+)/i],[[d,"Dolphin"],w],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[d,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[d,"Chrome"],w],[/(coast)\/([\w\.]+)/i],[[d,"Opera Coast"],w],[/fxios\/([\w\.-]+)/i],[w,[d,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[w,[d,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[w,d],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[d,"GSA"],w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[d,[w,y.str,j.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[d,w],[/(navigator|netscape)\/([\w\.-]+)/i],[[d,"Netscape"],w],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[d,w]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,v.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[b,/ower/,"",v.lowerize]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[b,v.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[c,m,[u,g]],[/applecoremedia\/[\w\.]+ \((ipad)/],[c,[m,"Apple"],[u,g]],[/(apple\s{0,1}tv)/i],[[c,"Apple TV"],[m,"Apple"],[u,h]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[m,c,[u,g]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[c,[m,"Amazon"],[u,g]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[c,y.str,j.device.amazon.model],[m,"Amazon"],[u,p]],[/android.+aft([\w])(\sbuild\/|\))/i],[c,[m,"Amazon"],[u,h]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[c,m,[u,p]],[/\((ip[honed|\s\w*]+);/i],[c,[m,"Apple"],[u,p]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[m,c,[u,p]],[/\(bb10;\s(\w+)/i],[c,[m,"BlackBerry"],[u,p]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[c,[m,"Asus"],[u,g]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[m,"Sony"],[c,"Xperia Tablet"],[u,g]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[m,"Sony"],[u,p]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[m,c,[u,f]],[/android.+;\s(shield)\sbuild/i],[c,[m,"Nvidia"],[u,f]],[/(playstation\s[34portablevi]+)/i],[c,[m,"Sony"],[u,f]],[/(sprint\s(\w+))/i],[[m,y.str,j.device.sprint.vendor],[c,y.str,j.device.sprint.model],[u,p]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[m,[c,/_/g," "],[u,p]],[/(nexus\s9)/i],[c,[m,"HTC"],[u,g]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[c,[m,"Huawei"],[u,p]],[/android.+(bah2?-a?[lw]\d{2})/i],[c,[m,"Huawei"],[u,g]],[/(microsoft);\s(lumia[\s\w]+)/i],[m,c,[u,p]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[c,[m,"Microsoft"],[u,f]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[m,"Microsoft"],[u,p]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[c,[m,"Motorola"],[u,p]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[c,[m,"Motorola"],[u,g]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,v.trim],[c,v.trim],[u,h]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[m,"Samsung"],[u,h]],[/\(dtv[\);].+(aquos)/i],[c,[m,"Sharp"],[u,h]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[m,"Samsung"],c,[u,g]],[/smart-tv.+(samsung)/i],[m,[u,h],c],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[m,"Samsung"],c,[u,p]],[/sie-(\w*)/i],[c,[m,"Siemens"],[u,p]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[m,"Nokia"],c,[u,p]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[c,[m,"Acer"],[u,g]],[/android.+([vl]k\-?\d{3})\s+build/i],[c,[m,"LG"],[u,g]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[m,"LG"],c,[u,g]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[m,"LG"],c,[u,h]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[c,[m,"LG"],[u,p]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[m,c,[u,g]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[c,[m,"Lenovo"],[u,g]],[/(lenovo)[_\s-]?([\w-]+)/i],[m,c,[u,p]],[/linux;.+((jolla));/i],[m,c,[u,p]],[/((pebble))app\/[\d\.]+\s/i],[m,c,[u,x]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,c,[u,p]],[/crkey/i],[[c,"Chromecast"],[m,"Google"],[u,h]],[/android.+;\s(glass)\s\d/i],[c,[m,"Google"],[u,x]],[/android.+;\s(pixel c)[\s)]/i],[c,[m,"Google"],[u,g]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[c,[m,"Google"],[u,p]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[c,/_/g," "],[m,"Xiaomi"],[u,p]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[c,/_/g," "],[m,"Xiaomi"],[u,g]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[c,[m,"Meizu"],[u,p]],[/(mz)-([\w-]{2,})/i],[[m,"Meizu"],c,[u,p]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[c,[m,"OnePlus"],[u,p]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[c,[m,"RCA"],[u,g]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[c,[m,"Dell"],[u,g]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[c,[m,"Verizon"],[u,g]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],[[m,"Barnes & Noble"],c,[u,g]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[c,[m,"NuVision"],[u,g]],[/android.+;\s(k88)\sbuild/i],[c,[m,"ZTE"],[u,g]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[c,[m,"Swiss"],[u,p]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[c,[m,"Swiss"],[u,g]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[c,[m,"Zeki"],[u,g]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[m,"Dragon Touch"],c,[u,g]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[c,[m,"Insignia"],[u,g]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[c,[m,"NextBook"],[u,g]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[m,"Voice"],c,[u,p]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[m,"LvTel"],c,[u,p]],[/android.+;\s(PH-1)\s/i],[c,[m,"Essential"],[u,p]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[c,[m,"Envizen"],[u,g]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[m,c,[u,g]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[c,[m,"MachSpeed"],[u,g]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[m,c,[u,g]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[c,[m,"Rotor"],[u,g]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[m,c,[u,g]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[c,[u,p]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[c,[u,g]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[u,v.lowerize],m,c],[/[\s\/\(](smart-?tv)[;\)]/i],[[u,h]],[/(android[\w\.\s\-]{0,9});.+build/i],[c,[m,"Generic"]],[/(phone)/i],[[u,p]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[w,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[w,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[d,w],[/rv\:([\w\.]{1,9}).+(gecko)/i],[w,d]],os:[[/(xbox);\s+xbox\s([^\);]+)/i,/microsoft\s(windows)\s(vista|xp)/i],[d,w],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[d,[w,y.str,j.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[d,"Windows"],[w,y.str,j.os.windows.version]],[/\((bb)(10);/i],[[d,"BlackBerry"],w],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[d,w],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[d,"Symbian"],w],[/\((series40);/i],[d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[d,"Firefox OS"],w],[/crkey\/([\d\.]+)/i],[w,[d,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[d,w],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[d,"Chromium OS"],w],[/(sunos)\s?([\w\.\d]*)/i],[[d,"Solaris"],w],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[d,w],[/(haiku)\s(\w+)/i],[d,w],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[w,/_/g,"."],[d,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[d,"Mac OS"],[w,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[d,w]]},N=function(e,i){if("object"===typeof e&&(i=e,e=r),!(this instanceof N))return new N(e,i).getResult();var n=e||(t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:""),s=i?v.extend(k,i):k;return this.getBrowser=function(){var e={name:r,version:r};return y.rgx.call(e,n,s.browser),e.major=v.major(e.version),e},this.getCPU=function(){var e={architecture:r};return y.rgx.call(e,n,s.cpu),e},this.getDevice=function(){var e={vendor:r,model:r,type:r};return y.rgx.call(e,n,s.device),e},this.getEngine=function(){var e={name:r,version:r};return y.rgx.call(e,n,s.engine),e},this.getOS=function(){var e={name:r,version:r};return y.rgx.call(e,n,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};N.VERSION="0.7.24",N.BROWSER={NAME:d,MAJOR:"major",VERSION:w},N.CPU={ARCHITECTURE:b},N.DEVICE={MODEL:c,VENDOR:m,TYPE:u,CONSOLE:f,MOBILE:p,SMARTTV:h,TABLET:g,WEARABLE:x,EMBEDDED:"embedded"},N.ENGINE={NAME:d,VERSION:w},N.OS={NAME:d,VERSION:w},typeof i!==a?(typeof e!==a&&e.exports&&(i=e.exports=N),i.UAParser=N):(s=function(){return N}.call(i,n,i,e))===r||(e.exports=s);var O=t&&(t.jQuery||t.Zepto);if(O&&!O.ua){var E=new N;O.ua=E.getResult(),O.ua.get=function(){return E.getUA()},O.ua.set=function(e){E.setUA(e);var i=E.getResult();for(var n in i)O.ua[n]=i[n]}}}("object"===typeof window?window:this)}},[["8jnP",0,1,2,3]]]);