(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"20a2":function(e,i,n){e.exports=n("nOHt")},Bjk4:function(e,i,n){"use strict";const s="src/index.tsx";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,i){return null!=e?e:i()}function t(e){let i,n=e[0],s=1;for(;s<e.length;){const r=e[s],o=e[s+1];if(s+=2,("optionalAccess"===r||"optionalCall"===r)&&null==n)return;"access"===r||"optionalAccess"===r?(i=n,n=o(n)):"call"!==r&&"optionalCall"!==r||(n=o(((...e)=>n.call(i,...e))),i=void 0)}return n}Object.defineProperty(i,"__esModule",{value:!0});var a=r(n("q1tI")),l=r(n("20a2")),d=r(n("g4pe"));i.default=(e,i)=>class extends a.default.Component{static async getInitialProps({res:n}){return t([n,"optionalAccess",e=>e.writeHead])&&(n.writeHead(o(t([i,"optionalAccess",e=>e.statusCode]),(()=>301)),{Location:e}),n.end()),{}}componentDidMount(){null!=t([i,"optionalAccess",e=>e.asUrl])?l.default.push(e,i.asUrl,{shallow:!0}):"/"===e[0]?l.default.push(e):window.location.href=e}render(){const n=o(t([i,"optionalAccess",e=>e.asUrl]),(()=>e));return a.default.createElement(a.default.Fragment,null,a.default.createElement(d.default,{__self:this,__source:{fileName:s,lineNumber:35}},a.default.createElement("noscript",{__self:this,__source:{fileName:s,lineNumber:37}},a.default.createElement("meta",{httpEquiv:"refresh",content:`0;url=${n}`,__self:this,__source:{fileName:s,lineNumber:38}})),(void 0===t([i,"optionalAccess",e=>e.statusCode])||301===t([i,"optionalAccess",e=>e.statusCode]))&&a.default.createElement("link",{rel:"canonical",href:n,__self:this,__source:{fileName:s,lineNumber:42}})),this.props.children?this.props.children:a.default.createElement("p",{__self:this,__source:{fileName:s,lineNumber:49}},"Redirecting to ",a.default.createElement("a",{href:n,__self:this,__source:{fileName:s,lineNumber:50}},n),"\u2026"))}}},b6Qr:function(e,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,r=n("q1tI"),o=(s=r)&&"object"===typeof s&&"default"in s?s.default:s,t=new(n("peHP")),a=t.getBrowser(),l=(t.getCPU(),t.getDevice()),d=t.getEngine(),u=t.getOS(),c=t.getUA(),w=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},f=function(e){var i=m();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,i){for(var n=0;n<i.length;n++){var s=i[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function h(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function g(){return(g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e}).apply(this,arguments)}function v(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);i&&(s=s.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,s)}return n}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,i){return(E=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e})(e,i)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N="mobile",O="tablet",k="smarttv",S="console",_="wearable",C=void 0,A="Chrome",T="Firefox",P="Opera",V="Yandex",M="Safari",F="Internet Explorer",B="Edge",j="Chromium",L="IE",W="Mobile Safari",I="MIUI Browser",z="iOS",R="Android",D="Windows Phone",U="Windows",q="Mac OS",G={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},H=function(e,i,n,s){return function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?v(n,!0).forEach((function(i){h(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}({},e,{vendor:w(i.vendor),model:w(i.model),os:w(n.name),osVersion:w(n.version),ua:w(s)})},X=function(e){switch(e){case N:return{isMobile:!0};case O:return{isTablet:!0};case k:return{isSmartTV:!0};case S:return{isConsole:!0};case _:return{isWearable:!0};case C:return{isBrowser:!0};default:return G}}(l.type);var $=function(){return"string"===typeof c&&-1!==c.indexOf("Edg/")},Q=function(){return a.name===B},Y=function(){return f("iPad")},Z=l.type===k,J=l.type===S,K=l.type===_,ee=a.name===W||Y(),ie=a.name===j,ne=function(){switch(l.type){case N:case O:return!0;default:return!1}}()||Y(),se=l.type===N,re=l.type===O||Y(),oe=l.type===C,te=u.name===R,ae=u.name===D,le=u.name===z||Y(),de=a.name===A,ue=a.name===T,ce=a.name===M||a.name===W,we=a.name===P,me=a.name===F||a.name===L,fe=w(u.version),pe=w(u.name),be=w(a.version),he=w(a.major),ge=w(a.name),ve=w(l.vendor),ye=w(l.model),Ee=w(d.name),xe=w(d.version),Ne=w(c),Oe=Q()||$(),ke=a.name===V,Se=w(l.type,"browser"),_e=function(){var e=m();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),Ce=Y(),Ae=f("iPhone"),Te=f("iPod"),Pe=function(){var e=m(),i=e&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),Ve=$(),Me=Q()&&!$(),Fe=u.name===U,Be=u.name===q,je=a.name===I;i.AndroidView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return te?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.BrowserView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return oe?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.ConsoleView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return J?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.CustomView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return e.condition?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.IEView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return me?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.IOSView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return le?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return se?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.MobileView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return ne?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.SmartTVView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return Z?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.TabletView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return re?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.WearableView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return K?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,n=e.children,s=e.viewClassName,t=e.style;return ae?i?o.createElement(r.Fragment,null,n):o.createElement("div",{className:s,style:t},n):null},i.browserName=ge,i.browserVersion=he,i.deviceDetect=function(){var e=X.isBrowser,i=X.isMobile,n=X.isTablet,s=X.isSmartTV,r=X.isConsole,o=X.isWearable;return e?function(e,i,n,s,r){return{isBrowser:e,browserMajorVersion:w(i.major),browserFullVersion:w(i.version),browserName:w(i.name),engineName:w(n.name),engineVersion:w(n.version),osName:w(s.name),osVersion:w(s.version),userAgent:w(r)}}(e,a,d,u,c):s?function(e,i,n,s){return{isSmartTV:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}}(s,d,u,c):r?function(e,i,n,s){return{isConsole:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}}(r,d,u,c):i||n?H(X,l,u,c):o?function(e,i,n,s){return{isWearable:e,engineName:w(i.name),engineVersion:w(i.version),osName:w(n.name),osVersion:w(n.version),userAgent:w(s)}}(o,d,u,c):void 0},i.deviceType=Se,i.engineName=Ee,i.engineVersion=xe,i.fullBrowserVersion=be,i.getUA=Ne,i.isAndroid=te,i.isBrowser=oe,i.isChrome=de,i.isChromium=ie,i.isConsole=J,i.isEdge=Oe,i.isEdgeChromium=Ve,i.isElectron=Pe,i.isFirefox=ue,i.isIE=me,i.isIOS=le,i.isIOS13=_e,i.isIPad13=Ce,i.isIPhone13=Ae,i.isIPod13=Te,i.isLegacyEdge=Me,i.isMIUI=je,i.isMacOs=Be,i.isMobile=ne,i.isMobileOnly=se,i.isMobileSafari=ee,i.isOpera=we,i.isSafari=ce,i.isSmartTV=Z,i.isTablet=re,i.isWearable=K,i.isWinPhone=ae,i.isWindows=Fe,i.isYandex=ke,i.mobileModel=ye,i.mobileVendor=ve,i.osName=pe,i.osVersion=fe,i.withOrientationChange=function(e){return function(i){function n(e){var i,s,r;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),s=this,(i=!(r=y(n).call(this,e))||"object"!==typeof r&&"function"!==typeof r?x(s):r).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(x(i)),i.onOrientationChange=i.onOrientationChange.bind(x(i)),i.onPageLoad=i.onPageLoad.bind(x(i)),i.state={isLandscape:!1,isPortrait:!1},i}var s,r,t;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&E(e,i)}(n,i),s=n,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":p(window))&&ne&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return o.createElement(e,g({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&b(s.prototype,r),t&&b(s,t),n}(o.Component)}},peHP:function(e,i,n){var s;!function(r,o){"use strict";var t="function",a="undefined",l="object",d="model",u="name",c="type",w="vendor",m="version",f="architecture",p="console",b="mobile",h="tablet",g="smarttv",v="wearable",y={extend:function(e,i){var n={};for(var s in e)i[s]&&i[s].length%2===0?n[s]=i[s].concat(e[s]):n[s]=e[s];return n},has:function(e,i){return"string"===typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"===typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:o},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},E={rgx:function(e,i){for(var n,s,r,a,d,u,c=0;c<i.length&&!d;){var w=i[c],m=i[c+1];for(n=s=0;n<w.length&&!d;)if(d=w[n++].exec(e))for(r=0;r<m.length;r++)u=d[++s],typeof(a=m[r])===l&&a.length>0?2==a.length?typeof a[1]==t?this[a[0]]=a[1].call(this,u):this[a[0]]=a[1]:3==a.length?typeof a[1]!==t||a[1].exec&&a[1].test?this[a[0]]=u?u.replace(a[1],a[2]):o:this[a[0]]=u?a[1].call(this,u,a[2]):o:4==a.length&&(this[a[0]]=u?a[3].call(this,u.replace(a[1],a[2])):o):this[a]=u||o;c+=2}},str:function(e,i){for(var n in i)if(typeof i[n]===l&&i[n].length>0){for(var s=0;s<i[n].length;s++)if(y.has(i[n][s],e))return"?"===n?o:n}else if(y.has(i[n],e))return"?"===n?o:n;return e}},x={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},N={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[u,m],[/(opios)[\/\s]+([\w\.]+)/i],[[u,"Opera Mini"],m],[/\s(opr)\/([\w\.]+)/i],[[u,"Opera"],m],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[u,m],[/(konqueror)\/([\w\.]+)/i],[[u,"Konqueror"],m],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[u,"IE"],m],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[u,"Edge"],m],[/(yabrowser)\/([\w\.]+)/i],[[u,"Yandex"],m],[/(Avast)\/([\w\.]+)/i],[[u,"Avast Secure Browser"],m],[/(AVG)\/([\w\.]+)/i],[[u,"AVG Secure Browser"],m],[/(puffin)\/([\w\.]+)/i],[[u,"Puffin"],m],[/(focus)\/([\w\.]+)/i],[[u,"Firefox Focus"],m],[/(opt)\/([\w\.]+)/i],[[u,"Opera Touch"],m],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[u,"UCBrowser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],m],[/(windowswechat qbcore)\/([\w\.]+)/i],[[u,"WeChat(Win) Desktop"],m],[/(micromessenger)\/([\w\.]+)/i],[[u,"WeChat"],m],[/(brave)\/([\w\.]+)/i],[[u,"Brave"],m],[/(whale)\/([\w\.]+)/i],[[u,"Whale"],m],[/(qqbrowserlite)\/([\w\.]+)/i],[u,m],[/(QQ)\/([\d\.]+)/i],[u,m],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[u,m],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[u,m],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[u,m],[/(MetaSr)[\/\s]?([\w\.]+)/i],[u],[/(LBBROWSER)/i],[u],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[u,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[m,[u,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[u,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[u,m],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[u,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[u,/(.+)/,"$1 WebView"],m],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[u,/(.+(?:g|us))(.+)/,"$1 $2"],m],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[m,[u,"Android Browser"]],[/(coc_coc_browser)\/([\w\.]+)/i],[[u,"Coc Coc"],m],[/(sailfishbrowser)\/([\w\.]+)/i],[[u,"Sailfish Browser"],m],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[u,m],[/(dolfin)\/([\w\.]+)/i],[[u,"Dolphin"],m],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[u,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[u,"Chrome"],m],[/(coast)\/([\w\.]+)/i],[[u,"Opera Coast"],m],[/fxios\/([\w\.-]+)/i],[m,[u,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[u,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,u],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[u,"GSA"],m],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[u,[m,E.str,x.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[u,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[u,"Netscape"],m],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[u,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,y.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[f,/ower/,"",y.lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[f,y.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[d,w,[c,h]],[/applecoremedia\/[\w\.]+ \((ipad)/],[d,[w,"Apple"],[c,h]],[/(apple\s{0,1}tv)/i],[[d,"Apple TV"],[w,"Apple"],[c,g]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[w,d,[c,h]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[d,[w,"Amazon"],[c,h]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[d,E.str,x.device.amazon.model],[w,"Amazon"],[c,b]],[/android.+aft([\w])(\sbuild\/|\))/i],[d,[w,"Amazon"],[c,g]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[d,w,[c,b]],[/\((ip[honed|\s\w*]+);/i],[d,[w,"Apple"],[c,b]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[w,d,[c,b]],[/\(bb10;\s(\w+)/i],[d,[w,"BlackBerry"],[c,b]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[d,[w,"Asus"],[c,h]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[w,"Sony"],[d,"Xperia Tablet"],[c,h]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[d,[w,"Sony"],[c,b]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[w,d,[c,p]],[/android.+;\s(shield)\sbuild/i],[d,[w,"Nvidia"],[c,p]],[/(playstation\s[34portablevi]+)/i],[d,[w,"Sony"],[c,p]],[/(sprint\s(\w+))/i],[[w,E.str,x.device.sprint.vendor],[d,E.str,x.device.sprint.model],[c,b]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[w,[d,/_/g," "],[c,b]],[/(nexus\s9)/i],[d,[w,"HTC"],[c,h]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[d,[w,"Huawei"],[c,b]],[/android.+(bah2?-a?[lw]\d{2})/i],[d,[w,"Huawei"],[c,h]],[/(microsoft);\s(lumia[\s\w]+)/i],[w,d,[c,b]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[d,[w,"Microsoft"],[c,p]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[w,"Microsoft"],[c,b]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[d,[w,"Motorola"],[c,b]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[w,"Motorola"],[c,h]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[w,y.trim],[d,y.trim],[c,g]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[w,"Samsung"],[c,g]],[/\(dtv[\);].+(aquos)/i],[d,[w,"Sharp"],[c,g]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[w,"Samsung"],d,[c,h]],[/smart-tv.+(samsung)/i],[w,[c,g],d],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[w,"Samsung"],d,[c,b]],[/sie-(\w*)/i],[d,[w,"Siemens"],[c,b]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[w,"Nokia"],d,[c,b]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[d,[w,"Acer"],[c,h]],[/android.+([vl]k\-?\d{3})\s+build/i],[d,[w,"LG"],[c,h]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[w,"LG"],d,[c,h]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[w,"LG"],d,[c,g]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[d,[w,"LG"],[c,b]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[w,d,[c,h]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[d,[w,"Lenovo"],[c,h]],[/(lenovo)[_\s-]?([\w-]+)/i],[w,d,[c,b]],[/linux;.+((jolla));/i],[w,d,[c,b]],[/((pebble))app\/[\d\.]+\s/i],[w,d,[c,v]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[w,d,[c,b]],[/crkey/i],[[d,"Chromecast"],[w,"Google"],[c,g]],[/android.+;\s(glass)\s\d/i],[d,[w,"Google"],[c,v]],[/android.+;\s(pixel c)[\s)]/i],[d,[w,"Google"],[c,h]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[d,[w,"Google"],[c,b]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[d,/_/g," "],[w,"Xiaomi"],[c,b]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[d,/_/g," "],[w,"Xiaomi"],[c,h]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[d,[w,"Meizu"],[c,b]],[/(mz)-([\w-]{2,})/i],[[w,"Meizu"],d,[c,b]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[d,[w,"OnePlus"],[c,b]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[d,[w,"RCA"],[c,h]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[d,[w,"Dell"],[c,h]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[d,[w,"Verizon"],[c,h]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],[[w,"Barnes & Noble"],d,[c,h]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[d,[w,"NuVision"],[c,h]],[/android.+;\s(k88)\sbuild/i],[d,[w,"ZTE"],[c,h]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[d,[w,"Swiss"],[c,b]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[d,[w,"Swiss"],[c,h]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[d,[w,"Zeki"],[c,h]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[w,"Dragon Touch"],d,[c,h]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[d,[w,"Insignia"],[c,h]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[d,[w,"NextBook"],[c,h]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[w,"Voice"],d,[c,b]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[w,"LvTel"],d,[c,b]],[/android.+;\s(PH-1)\s/i],[d,[w,"Essential"],[c,b]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[d,[w,"Envizen"],[c,h]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[w,d,[c,h]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[d,[w,"MachSpeed"],[c,h]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[w,d,[c,h]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[d,[w,"Rotor"],[c,h]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[w,d,[c,h]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[d,[c,b]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[d,[c,h]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,y.lowerize],w,d],[/[\s\/\(](smart-?tv)[;\)]/i],[[c,g]],[/(android[\w\.\s\-]{0,9});.+build/i],[d,[w,"Generic"]],[/(phone)/i],[[c,b]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[u,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,m],[/rv\:([\w\.]{1,9}).+(gecko)/i],[m,u]],os:[[/(xbox);\s+xbox\s([^\);]+)/i,/microsoft\s(windows)\s(vista|xp)/i],[u,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[m,E.str,x.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[m,E.str,x.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],m],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[u,m],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[u,"Symbian"],m],[/\((series40);/i],[u],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],m],[/crkey\/([\d\.]+)/i],[m,[u,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[u,m],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],m],[/(sunos)\s?([\w\.\d]*)/i],[[u,"Solaris"],m],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[u,m],[/(haiku)\s(\w+)/i],[u,m],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[m,/_/g,"."],[u,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[u,"Mac OS"],[m,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[u,m]]},O=function(e,i){if("object"===typeof e&&(i=e,e=o),!(this instanceof O))return new O(e,i).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),s=i?y.extend(N,i):N;return this.getBrowser=function(){var e={name:o,version:o};return E.rgx.call(e,n,s.browser),e.major=y.major(e.version),e},this.getCPU=function(){var e={architecture:o};return E.rgx.call(e,n,s.cpu),e},this.getDevice=function(){var e={vendor:o,model:o,type:o};return E.rgx.call(e,n,s.device),e},this.getEngine=function(){var e={name:o,version:o};return E.rgx.call(e,n,s.engine),e},this.getOS=function(){var e={name:o,version:o};return E.rgx.call(e,n,s.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};O.VERSION="0.7.24",O.BROWSER={NAME:u,MAJOR:"major",VERSION:m},O.CPU={ARCHITECTURE:f},O.DEVICE={MODEL:d,VENDOR:w,TYPE:c,CONSOLE:p,MOBILE:b,SMARTTV:g,TABLET:h,WEARABLE:v,EMBEDDED:"embedded"},O.ENGINE={NAME:u,VERSION:m},O.OS={NAME:u,VERSION:m},typeof i!==a?(typeof e!==a&&e.exports&&(i=e.exports=O),i.UAParser=O):(s=function(){return O}.call(i,n,i,e))===o||(e.exports=s);var k=r&&(r.jQuery||r.Zepto);if(k&&!k.ua){var S=new O;k.ua=S.getResult(),k.ua.get=function(){return S.getUA()},k.ua.set=function(e){S.setUA(e);var i=S.getResult();for(var n in i)k.ua[n]=i[n]}}}("object"===typeof window?window:this)}}]);