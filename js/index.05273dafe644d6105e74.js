!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=118)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(54))},function(t,n,e){var r=e(0),o=e(10),i=e(25),c=e(51),u=r.Symbol,a=o("wks");t.exports=function(t){return a[t]||(a[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(5),o=e(30),i=e(7),c=e(18),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(5),o=e(6),i=e(17);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(32),o=e(55);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.4.1",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(0),o=e(20).f,i=e(8),c=e(15),u=e(21),a=e(47),s=e(42);t.exports=function(t,n){var e,f,l,p,v,h=t.target,d=t.global,y=t.stat;if(e=d?r:y?r[h]||u(h,{}):(r[h]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(d?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,f,p,t)}}},function(t,n,e){var r=e(29),o=e(23);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(48),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"c",(function(){return o})),e.d(n,"b",(function(){return i}));e(53);function r(){var t=new Date;return t.setDate(t.getDate()-6),t}function o(t){return new Date(t).toLocaleString("ru-RU",{year:"numeric",month:"long",day:"numeric"}).slice(0,-2)}function i(t){return t[0].toUpperCase()+t.slice(1)}},function(t,n,e){var r=e(0),o=e(10),i=e(8),c=e(4),u=e(21),a=e(33),s=e(34),f=s.get,l=s.enforce,p=String(a).split("toString");o("inspectSource",(function(t){return a.call(t)})),(t.exports=function(t,n,e,o){var a=!!o&&!!o.unsafe,s=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(a?!f&&t[n]&&(s=!0):delete t[n],s?t[n]=e:i(t,n,e)):s?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a.call(this)}))},function(t,n,e){var r=e(35),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return o})),e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return u}));var r=e(14),o=3,i=3,c="".concat("https://newsapi.org","/v2/everything?")+"pageSize=".concat(100,"&")+"from=".concat(Object(r.a)().toISOString(),"&")+"sortBy=publishedAt&",u="https://api.github.com/repos/NastyaBogdanova/newssearcher/commits?per_page=".concat(20)},function(t,n,e){var r=e(5),o=e(46),i=e(17),c=e(12),u=e(18),a=e(4),s=e(30),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(t,n){if(t=c(t),n=u(n,!0),s)try{return f(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n){t.exports={}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(9);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(22);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.d(n,"a",(function(){return o}));var o=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.blockName=n,this.hideClassName=e}var n,e,o;return n=t,(e=[{key:"open",value:function(){this.blockName.classList.remove(this.hideClassName)}},{key:"hide",value:function(){this.blockName.classList.add(this.hideClassName)}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){var r=e(2),o=e(9),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(5),o=e(2),i=e(31);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(10);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r,o,i,c=e(56),u=e(0),a=e(3),s=e(8),f=e(4),l=e(39),p=e(24),v=u.WeakMap;if(c){var h=new v,d=h.get,y=h.has,g=h.set;r=function(t,n){return g.call(h,t,n),n},o=function(t){return d.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return s(t,m,n),n},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(35),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n,e){var r=e(27),o=e(29),i=e(52),c=e(16),u=e(59),a=[].push,s=function(t){var n=1==t,e=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(v,h,d,y){for(var g,m,b=i(v),x=o(b),w=r(h,d,3),S=c(x.length),j=0,k=y||u,O=n?k(v,S):e?k(v,0):void 0;S>j;j++)if((p||j in x)&&(m=w(g=x[j],j,b),t))if(n)O[j]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return j;case 2:a.call(O,g)}else if(f)return!1;return l?-1:s||f?f:O}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,n,e){"use strict";var r=e(37).forEach,o=e(61);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,e){var r=e(10),o=e(25),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(49),o=e(41).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==s||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(2),o=e(1),i=e(44),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(0),c=e(45),u=i.process,a=u&&u.versions,s=a&&a.v8;s?o=(r=s.split("."))[0]+r[1]:c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(13);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(4),o=e(57),i=e(20),c=e(6);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,s=0;s<e.length;s++){var f=e[s];r(t,f)||u(t,f,a(n,f))}}},function(t,n,e){t.exports=e(0)},function(t,n,e){var r=e(4),o=e(12),i=e(58).indexOf,c=e(24);t.exports=function(t,n){var e,u=o(t),a=0,s=[];for(e in u)!r(c,e)&&r(u,e)&&s.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(s,e)||s.push(e));return s}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(23);t.exports=function(t){return Object(r(t))}},function(t,n,e){"use strict";var r=e(11),o=e(3),i=e(26),c=e(36),u=e(16),a=e(12),s=e(62),f=e(43),l=e(1)("species"),p=[].slice,v=Math.max;r({target:"Array",proto:!0,forced:!f("slice")},{slice:function(t,n){var e,r,f,h=a(this),d=u(h.length),y=c(t,d),g=c(void 0===n?d:n,d);if(i(h)&&("function"!=typeof(e=h.constructor)||e!==Array&&!i(e.prototype)?o(e)&&null===(e=e[l])&&(e=void 0):e=void 0,e===Array||void 0===e))return p.call(h,y,g);for(r=new(void 0===e?Array:e)(v(g-y,0)),f=0;y<g;y++,f++)y in h&&s(r,f,h[y]);return r.length=f,r}})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){var r=e(0),o=e(21),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(0),o=e(33),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(13),o=e(40),i=e(50),c=e(7);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(12),o=e(16),i=e(36),c=function(t){return function(n,e,c){var u,a=r(n),s=o(a.length),f=i(c,s);if(t&&e!=e){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(3),o=e(26),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){"use strict";var r=e(11),o=e(38);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){"use strict";var r=e(18),o=e(6),i=e(17);t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},function(t,n,e){var r=e(5),o=e(6).f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/;r&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},function(t,n,e){var r=e(0),o=e(65),i=e(38),c=e(8);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){var r=e(9),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,c=e(0),u=e(2),a=e(9),s=e(27),f=e(73),l=e(31),p=e(69),v=c.location,h=c.setImmediate,d=c.clearImmediate,y=c.process,g=c.MessageChannel,m=c.Dispatch,b=0,x={},w=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},S=function(t){return function(){w(t)}},j=function(t){w(t.data)},k=function(t){c.postMessage(t+"",v.protocol+"//"+v.host)};h&&d||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return x[++b]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(b),b},d=function(t){delete x[t]},"process"==a(y)?r=function(t){y.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:g&&!p?(i=(o=new g).port2,o.port1.onmessage=j,r=s(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(k)?r="onreadystatechange"in l("script")?function(t){f.appendChild(l("script")).onreadystatechange=function(){f.removeChild(this),w(t)}}:function(t){setTimeout(S(t),0)}:(r=k,c.addEventListener("message",j,!1))),t.exports={set:h,clear:d}},function(t,n,e){var r=e(45);t.exports=/(iphone|ipod|ipad).*applewebkit/i.test(r)},function(t,n,e){"use strict";var r=e(22),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.d(n,"a",(function(){return o}));var o=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=n}var n,e,o;return n=t,(e=[{key:"addCards",value:function(t){this.container.appendChild(t)}},{key:"removeCards",value:function(){for(;this.container.firstChild;)this.container.removeChild(this.container.firstChild)}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e.d(n,"a",(function(){return o}));var o=function(){function t(n,e,r,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.renderCallback=n,this.openCallback=e,this.buttonCallback=r,this.input=o}var n,e,o;return n=t,(e=[{key:"setItem",value:function(t,n){localStorage.setItem(t,JSON.stringify(n))}},{key:"getItem",value:function(t){var n=localStorage.getItem(t);return JSON.parse(n)}},{key:"clear",value:function(){localStorage.clear()}},{key:"checkLocalStorage",value:function(){return localStorage.newsList}}])&&r(n.prototype,e),o&&r(n,o),t}()},function(t,n,e){var r=e(13);t.exports=r("document","documentElement")},function(t,n,e){var r=e(6).f,o=e(4),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r,o,i=e(103),c=RegExp.prototype.exec,u=String.prototype.replace,a=c,s=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=void 0!==/()??/.exec("")[1];(s||f)&&(a=function(t){var n,e,r,o,a=this;return f&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),s&&(n=a.lastIndex),r=c.call(a,t),s&&r&&(a.lastIndex=a.global?r.index+r[0].length:n),f&&r&&r.length>1&&u.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=a},function(t,n,e){var r=e(15),o=e(77),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){"use strict";var r=e(66),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){"use strict";var r,o,i,c,u=e(11),a=e(32),s=e(0),f=e(13),l=e(79),p=e(15),v=e(80),h=e(10),d=e(74),y=e(81),g=e(3),m=e(22),b=e(82),x=e(9),w=e(83),S=e(87),j=e(88),k=e(68).set,O=e(89),_=e(90),E=e(91),L=e(70),T=e(92),C=e(34),P=e(42),I=e(1),M=e(44),N=I("species"),A="Promise",q=C.get,R=C.set,D=C.getterFor(A),F=l,V=s.TypeError,B=s.document,G=s.process,z=h("inspectSource"),H=f("fetch"),K=L.f,W=K,J="process"==x(G),U=!!(B&&B.createEvent&&s.dispatchEvent),$=P(A,(function(){var t=z(F)!==String(F);if(66===M)return!0;if(!t&&!J&&"function"!=typeof PromiseRejectionEvent)return!0;if(a&&!F.prototype.finally)return!0;if(M>=51&&/native code/.test(F))return!1;var n=F.resolve(1),e=function(t){t((function(){}),(function(){}))};return(n.constructor={})[N]=e,!(n.then((function(){}))instanceof e)})),Q=$||!S((function(t){F.all(t).catch((function(){}))})),Y=function(t){var n;return!(!g(t)||"function"!=typeof(n=t.then))&&n},X=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;O((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,a,s,f=r[c++],l=i?f.ok:f.fail,p=f.resolve,v=f.reject,h=f.domain;try{l?(i||(2===n.rejection&&et(t,n),n.rejection=1),!0===l?u=o:(h&&h.enter(),u=l(o),h&&(h.exit(),s=!0)),u===f.promise?v(V("Promise-chain cycle")):(a=Y(u))?a.call(u,p,v):p(u)):v(o)}catch(t){h&&!s&&h.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&tt(t,n)}))}},Z=function(t,n,e){var r,o;U?((r=B.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),s.dispatchEvent(r)):r={promise:n,reason:e},(o=s["on"+t])?o(r):"unhandledrejection"===t&&E("Unhandled promise rejection",e)},tt=function(t,n){k.call(s,(function(){var e,r=n.value;if(nt(n)&&(e=T((function(){J?G.emit("unhandledRejection",r,t):Z("unhandledrejection",t,r)})),n.rejection=J||nt(n)?2:1,e.error))throw e.value}))},nt=function(t){return 1!==t.rejection&&!t.parent},et=function(t,n){k.call(s,(function(){J?G.emit("rejectionHandled",t):Z("rejectionhandled",t,n.value)}))},rt=function(t,n,e,r){return function(o){t(n,e,o,r)}},ot=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,X(t,n,!0))},it=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw V("Promise can't be resolved itself");var o=Y(e);o?O((function(){var r={done:!1};try{o.call(e,rt(it,t,r,n),rt(ot,t,r,n))}catch(e){ot(t,r,e,n)}})):(n.value=e,n.state=1,X(t,n,!1))}catch(e){ot(t,{done:!1},e,n)}}};$&&(F=function(t){b(this,F,A),m(t),r.call(this);var n=q(this);try{t(rt(it,this,n),rt(ot,this,n))}catch(t){ot(this,n,t)}},(r=function(t){R(this,{type:A,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(F.prototype,{then:function(t,n){var e=D(this),r=K(j(this,F));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=J?G.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&X(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=q(t);this.promise=t,this.resolve=rt(it,t,n),this.reject=rt(ot,t,n)},L.f=K=function(t){return t===F||t===i?new o(t):W(t)},a||"function"!=typeof l||(c=l.prototype.then,p(l.prototype,"then",(function(t,n){var e=this;return new F((function(t,n){c.call(e,t,n)})).then(t,n)}),{unsafe:!0}),"function"==typeof H&&u({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return _(F,H.apply(s,arguments))}}))),u({global:!0,wrap:!0,forced:$},{Promise:F}),d(F,A,!1,!0),y(A),i=f(A),u({target:A,stat:!0,forced:$},{reject:function(t){var n=K(this);return n.reject.call(void 0,t),n.promise}}),u({target:A,stat:!0,forced:a||$},{resolve:function(t){return _(a&&this===i?F:this,t)}}),u({target:A,stat:!0,forced:Q},{all:function(t){var n=this,e=K(n),r=e.resolve,o=e.reject,i=T((function(){var e=m(n.resolve),i=[],c=0,u=1;w(t,(function(t){var a=c++,s=!1;i.push(void 0),u++,e.call(n,t).then((function(t){s||(s=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=K(n),r=e.reject,o=T((function(){var o=m(n.resolve);w(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(0);t.exports=r.Promise},function(t,n,e){var r=e(15);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){"use strict";var r=e(13),o=e(6),i=e(1),c=e(5),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(7),o=e(84),i=e(16),c=e(27),u=e(85),a=e(86),s=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,f,l){var p,v,h,d,y,g,m,b=c(n,e,f?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(h=0,d=i(t.length);d>h;h++)if((y=f?b(r(m=t[h])[0],m[1]):b(t[h]))&&y instanceof s)return y;return new s(!1)}p=v.call(t)}for(g=p.next;!(m=g.call(p)).done;)if("object"==typeof(y=a(p,b,m.value,f))&&y&&y instanceof s)return y;return new s(!1)}).stop=function(t){return new s(!0,t)}},function(t,n,e){var r=e(1),o=e(67),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(66),o=e(67),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(7);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(7),o=e(22),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r,o,i,c,u,a,s,f,l=e(0),p=e(20).f,v=e(9),h=e(68).set,d=e(69),y=l.MutationObserver||l.WebKitMutationObserver,g=l.process,m=l.Promise,b="process"==v(g),x=p(l,"queueMicrotask"),w=x&&x.value;w||(r=function(){var t,n;for(b&&(t=g.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},b?c=function(){g.nextTick(r)}:y&&!d?(u=!0,a=document.createTextNode(""),new y(r).observe(a,{characterData:!0}),c=function(){a.data=u=!u}):m&&m.resolve?(s=m.resolve(void 0),f=s.then,c=function(){f.call(s,r)}):c=function(){h.call(l,r)}),t.exports=w||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(7),o=e(3),i=e(70);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r=e(49),o=e(41);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){n.f=e(1)},function(t,n,e){t.exports=e.p+"./images/no-picture.png"},function(t,n,e){"use strict";var r=e(11),o=e(0),i=e(13),c=e(32),u=e(5),a=e(51),s=e(2),f=e(4),l=e(26),p=e(3),v=e(7),h=e(52),d=e(12),y=e(18),g=e(17),m=e(97),b=e(93),x=e(40),w=e(99),S=e(50),j=e(20),k=e(6),O=e(46),_=e(8),E=e(15),L=e(10),T=e(39),C=e(24),P=e(25),I=e(1),M=e(94),N=e(100),A=e(74),q=e(34),R=e(37).forEach,D=T("hidden"),F=I("toPrimitive"),V=q.set,B=q.getterFor("Symbol"),G=Object.prototype,z=o.Symbol,H=i("JSON","stringify"),K=j.f,W=k.f,J=w.f,U=O.f,$=L("symbols"),Q=L("op-symbols"),Y=L("string-to-symbol-registry"),X=L("symbol-to-string-registry"),Z=L("wks"),tt=o.QObject,nt=!tt||!tt.prototype||!tt.prototype.findChild,et=u&&s((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=K(G,n);r&&delete G[n],W(t,n,e),r&&t!==G&&W(G,n,r)}:W,rt=function(t,n){var e=$[t]=m(z.prototype);return V(e,{type:"Symbol",tag:t,description:n}),u||(e.description=n),e},ot=a&&"symbol"==typeof z.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},it=function(t,n,e){t===G&&it(Q,n,e),v(t);var r=y(n,!0);return v(e),f($,r)?(e.enumerable?(f(t,D)&&t[D][r]&&(t[D][r]=!1),e=m(e,{enumerable:g(0,!1)})):(f(t,D)||W(t,D,g(1,{})),t[D][r]=!0),et(t,r,e)):W(t,r,e)},ct=function(t,n){v(t);var e=d(n),r=b(e).concat(ft(e));return R(r,(function(n){u&&!ut.call(e,n)||it(t,n,e[n])})),t},ut=function(t){var n=y(t,!0),e=U.call(this,n);return!(this===G&&f($,n)&&!f(Q,n))&&(!(e||!f(this,n)||!f($,n)||f(this,D)&&this[D][n])||e)},at=function(t,n){var e=d(t),r=y(n,!0);if(e!==G||!f($,r)||f(Q,r)){var o=K(e,r);return!o||!f($,r)||f(e,D)&&e[D][r]||(o.enumerable=!0),o}},st=function(t){var n=J(d(t)),e=[];return R(n,(function(t){f($,t)||f(C,t)||e.push(t)})),e},ft=function(t){var n=t===G,e=J(n?Q:d(t)),r=[];return R(e,(function(t){!f($,t)||n&&!f(G,t)||r.push($[t])})),r};(a||(E((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=P(t),e=function(t){this===G&&e.call(Q,t),f(this,D)&&f(this[D],n)&&(this[D][n]=!1),et(this,n,g(1,t))};return u&&nt&&et(G,n,{configurable:!0,set:e}),rt(n,t)}).prototype,"toString",(function(){return B(this).tag})),O.f=ut,k.f=it,j.f=at,x.f=w.f=st,S.f=ft,u&&(W(z.prototype,"description",{configurable:!0,get:function(){return B(this).description}}),c||E(G,"propertyIsEnumerable",ut,{unsafe:!0})),M.f=function(t){return rt(I(t),t)}),r({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:z}),R(b(Z),(function(t){N(t)})),r({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(f(Y,n))return Y[n];var e=z(n);return Y[n]=e,X[e]=n,e},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(X,t))return X[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?m(t):ct(m(t),n)},defineProperty:it,defineProperties:ct,getOwnPropertyDescriptor:at}),r({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(h(t))}}),H)&&r({target:"JSON",stat:!0,forced:!a||s((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}))},{stringify:function(t,n,e){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=n,(p(n)||void 0!==t)&&!ot(t))return l(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ot(n))return n}),o[1]=n,H.apply(null,o)}});z.prototype[F]||_(z.prototype,F,z.prototype.valueOf),A(z,"Symbol"),C[D]=!0},function(t,n,e){var r=e(7),o=e(98),i=e(41),c=e(24),u=e(73),a=e(31),s=e(39)("IE_PROTO"),f=function(){},l=function(){var t,n=a("iframe"),e=i.length;for(n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;e--;)delete l.prototype[i[e]];return l()};t.exports=Object.create||function(t,n){var e;return null!==t?(f.prototype=r(t),e=new f,f.prototype=null,e[s]=t):e=l(),void 0===n?e:o(e,n)},c[s]=!0},function(t,n,e){var r=e(5),o=e(6),i=e(7),c=e(93);t.exports=r?Object.defineProperties:function(t,n){i(t);for(var e,r=c(n),u=r.length,a=0;u>a;)o.f(t,e=r[a++],n[e]);return t}},function(t,n,e){var r=e(12),o=e(40).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(r(t))}},function(t,n,e){var r=e(48),o=e(4),i=e(94),c=e(6).f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},function(t,n,e){"use strict";var r=e(11),o=e(5),i=e(0),c=e(4),u=e(3),a=e(6).f,s=e(47),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[n]=!0),n};s(p,f);var v=p.prototype=f.prototype;v.constructor=p;var h=v.toString,d="Symbol(test)"==String(f("test")),y=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=h.call(t);if(c(l,t))return"";var e=d?n.slice(7,-1):n.replace(y,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},function(t,n,e){"use strict";var r=e(11),o=e(75);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(7);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(105),o=e(7),i=e(23),c=e(106),u=e(107);r("search",1,(function(t,n,e){return[function(n){var e=i(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var i=o(t),a=String(this),s=i.lastIndex;c(s,0)||(i.lastIndex=0);var f=u(i,a);return c(i.lastIndex,s)||(i.lastIndex=s),null===f?-1:f.index}]}))},function(t,n,e){"use strict";var r=e(8),o=e(15),i=e(2),c=e(1),u=e(75),a=c("species"),s=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=!i((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var p=c(t),v=!i((function(){var n={};return n[p]=function(){return 7},7!=""[t](n)})),h=v&&!i((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[p]=/./[p]),e.exec=function(){return n=!0,null},e[p](""),!n}));if(!v||!h||"replace"===t&&!s||"split"===t&&!f){var d=/./[p],y=e(p,""[t],(function(t,n,e,r,o){return n.exec===u?v&&!o?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),g=y[0],m=y[1];o(String.prototype,t,g),o(RegExp.prototype,p,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)}),l&&r(RegExp.prototype[p],"sham",!0)}}},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){var r=e(9),o=e(75);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},function(t,n,e){},function(t,n,e){"use strict";var r=e(11),o=e(110);r({target:"String",proto:!0,forced:e(111)("link")},{link:function(t){return o(this,"a","href",t)}})},function(t,n,e){var r=e(23),o=/"/g;t.exports=function(t,n,e,i){var c=String(r(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(i).replace(o,"&quot;")+'"'),u+">"+c+"</"+n+">"}},function(t,n,e){var r=e(2);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},,,,,,,function(t,n,e){"use strict";e.r(n);e(96),e(101),e(60),e(53),e(63),e(102),e(104),e(64),e(108);var r=e(19),o=e(14);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(n,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=n,this.callback=e}var n,e,r;return n=t,(e=[{key:"_validate",value:function(t){var n=t.lastElementChild;t.checkValidity()?n.textContent=" ":n.textContent="Нужно ввести ключевое слово"}},{key:"setValidateListener",value:function(){var t=this;this.form.addEventListener("input",(function(){return t._validate(t.form)}))}},{key:"setSumbitListener",value:function(){var t=this;this.form.addEventListener("submit",(function(){return t.callback()}))}}])&&i(n.prototype,e),r&&i(n,r),t}(),u=(e(109),e(95)),a=e.n(u);function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(n,e,r,o,i,c,u){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=n,this.link=e,this.image=r,this.date=o,this.name=i,this.text=c,this.source=u}var n,e,r;return n=t,(e=[{key:"_createMarkup",value:function(){var t=document.createElement("div");return t.insertAdjacentHTML("afterbegin",'\n        <div class="news__element">\n        <a class="news__link" href="#" target="_blank"></a>\n        <div class="news__element-gradient"></div>\n        <div class="news__element-container">\n          <img class="news__image" src="" alt="Картинка новости">\n          <p class="news__date"></p>\n          <h3 class="news__name"></h3>\n          <p class="news__text"></p>\n        </div>\n        <p class="news__source"></p>\n      </div>\n      '),t.firstElementChild}},{key:"_fixImage",value:function(t){return null===t?a.a:t}},{key:"addData",value:function(){var t=this._createMarkup();return t.querySelector(".news__link").href=this.link,t.querySelector(".news__image").src=this._fixImage(this.image),t.querySelector(".news__date").textContent=this.callback(this.date),t.querySelector(".news__name").textContent=this.name,t.querySelector(".news__text").textContent=this.text,t.querySelector(".news__source").textContent=this.source,t}}])&&s(n.prototype,e),r&&s(n,r),t}(),l=e(71);e(76),e(78);function p(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(n,e,r,o){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.url=n,this.apiKey=e,this.callback=r,this.saveCallback=o}var n,e,r;return n=t,(e=[{key:"getNews",value:function(t){var n=this;return fetch(this.url+"q=".concat(t,"&")+this.apiKey).then((function(t){return t.ok?t.json():(n.callback(),Promise.reject("Ошибка: ".concat(t.status)))}))}},{key:"getNewsInTitles",value:function(t){var n=this;return fetch(this.url+"qInTitle=".concat(t,"&")+this.apiKey).then((function(t){return t.ok?t.json():(n.callback(),Promise.reject("Ошибка: ".concat(t.status)))})).then((function(t){n.saveCallback(t.totalResults)})).catch((function(t){console.log(t)}))}}])&&p(n.prototype,e),r&&p(n,r),t}(),h=e(72);function d(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(n,e,r){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.button=n,this.callback=e,this.className=r}var n,e,r;return n=t,(e=[{key:"hideButton",value:function(){this.button.classList.add(this.className)}},{key:"openButton",value:function(){this.button.classList.remove(this.className)}},{key:"setClickListener",value:function(){var t=this;this.button.addEventListener("click",(function(){return t.callback()}))}}])&&d(n.prototype,e),r&&d(n,r),t}(),g=e(28);!function(){var t=document.querySelector(".search__input"),n=document.querySelector(".search__button"),e=r.b,i=new g.a(document.querySelector(".preloader"),"root__hide"),u=new g.a(document.querySelector(".request-error"),"root__hide"),a=new g.a(document.querySelector(".news"),"root__hide"),s=new g.a(document.querySelector(".not-found"),"root__hide"),p=new c(document.forms.search,(function(){event.preventDefault(),document.forms.search.checkValidity()?(0!==m.container.children.length&&(b.clear(),a.hide(),x.openButton(),m.removeCards()),s.hide(),u.hide(),i.open(),w(!0),d.getNews(t.value).then((function(n){if(b.setItem("news",n.articles),b.setItem("input",t.value),b.setItem("totalResults",n.totalResults),i.hide(),w(!1),0!==n.articles.length){var o=b.getItem("news"),c=o.slice(0,r.b);e=r.b,b.setItem("newsList",c),j(c),O(o.length),k(),d.getNewsInTitles(t.value)}else s.open()})).catch((function(t){console.log(t),S(),w(!1)}))):console.log("Нужно ввести ключевое слово")})),d=new v(r.c,"apiKey=ead27f57ec814354b1e6703a20e7e9d7",S,(function(t){b.setItem("newsInTitles",t)})),m=new l.a(document.querySelector(".news__list")),b=new h.a,x=new y(document.querySelector(".news__show-more"),(function(){var t=b.getItem("news"),n=function(t){if(e<t.length-t.length%r.d){var n=[t[e],t[e+1],t[e+2]];return e+=r.d,n}if(t.length%r.d==2)return[t[e],t[e+1]];if(t.length%r.d==1)return[t[e]]}(t),i=b.getItem("newsList");n.forEach((function(t){var n=new f(o.c,t.url,t.urlToImage,t.publishedAt,t.title,t.description,t.source.name);return m.addCards(n.addData()),i.push(t)})),O(t.length),b.setItem("newsList",i)}),"news__show-more_is-closed");function w(e){t.disabled=e,n.disabled=e}function S(){i.hide(),w(!1),u.open()}function j(t){t.forEach((function(t){var n=new f(o.c,t.url,t.urlToImage,t.publishedAt,t.title,t.description,t.source.name);m.addCards(n.addData())}))}function k(){a.open()}function O(t){t===m.container.children.length&&x.hideButton()}!function(){if(b.checkLocalStorage()){var n=b.getItem("input");t.value=n,j(b.getItem("newsList")),k(),O(b.getItem("news").length)}}(),p.setValidateListener(),p.setSumbitListener(),x.setClickListener()}()}]);