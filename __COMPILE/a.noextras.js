/*
 MIT License (c) copyright Egor Halimonenko (termi1uc1@gmail.com | github.com/termi) */
var i=void 0,j=!0,k=null,l=!1,n=window;function aa(a){var b=a.cloneNode;delete a.cloneNode;a.cloneNode=function(a){a===i&&(a=j);return b.call(this,a)}}function ba(a){(a=a.__proto__||a.constructor.prototype)&&a!==Array.prototype&&ca.forEach(function(b){a[b]||(a[b]=Array.prototype[b])})}
var o,p=Object.prototype,q=Function.prototype.apply,r=Array.prototype.slice,s=String.prototype.split,da=Array.prototype.splice,t,ea,u=Function.prototype.bind||function(a,b){var c=this,d=r.call(arguments,1);return function(){return q.call(c,a,d.concat(r.call(arguments)))}},v=u.call(Function.prototype.call,p.hasOwnProperty);function w(a,b,c){return q.call(a,b,r.call(arguments,2))}
function x(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)v(d,e)&&!v(a,e)&&(a[e]=d[e])}return a}var fa="a"!=Object("a")[0]||!(0 in Object("a"));function y(a,b){if(a==k&&!b)throw new TypeError;return fa&&"string"==typeof a&&a?s.call(a,""):Object(a)}var ga=p.toString;function ha(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;}function z(){return l}function A(a){return a}
var ca="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),B=n.Element&&n.Element.prototype||{},ia=u.call(document.__orig__createElement__||document.createElement,document),C=ia("p"),D,ja=/\\s+$/g,ka=/\\s+/g,F=1,G,la=/^(\w+)?((?:\.(?:[\w\-]+))+)?$|^#([\w\-]+$)/,ma=/\s*([,>+~ ])\s*/g,H,I,J,L,M,N,O,na,oa,pa,qa,P,ra,Q,R="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
sa,ta,ua,va,S,T,wa,za,U,W=n.Date,X,Aa,Y,Z;o=(o=/msie (\d+)/i.exec(navigator.userAgent))&&+o[1]||i;n.HTMLDocument||(n.HTMLDocument=n.Document);n.Document||(n.Document=n.HTMLDocument);
Function.prototype.bind||(Function.prototype.bind=function(a,b){function c(){return q.call(d,this instanceof c?this:a,e.concat(r.call(arguments)))}if("function"!=typeof this&&(!o||0!==Q.call(this+"").indexOf("function")))throw new TypeError("Function.prototype.bind called on incompatible "+this);var d=this,e=r.call(arguments,1);d.prototype&&(c.prototype=Object.create(d.prototype));return c});
var $="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),Ba=!{toString:k}.propertyIsEnumerable($[0]),Ca=$.length;
x(Object,{keys:function(a){if(typeof a!="object"&&typeof a!="function"||a===k)throw new TypeError("Object.keys called on a non-object");var b=[],c;for(c in a)v(a,c)&&b.push(c);if(Ba)for(c=0;c<Ca;c++)v(a,$[c])&&b.push($[c]);return b},getOwnPropertyNames:function(a){return Object.keys(a)},seal:A,freeze:A,preventExtensions:A,isSealed:z,isFrozen:z,isExtensible:function(a){if(Object(a)!==a)throw new TypeError;for(var b="";v(a,b);)b=b+"?";a[b]=j;var c=v(a,b);delete a[b];return c},getPrototypeOf:function(a){return a.__proto__||
(a.constructor?a.constructor.prototype:p)},create:function(a,b){var c;if(a===k)c={__proto__:k};else{if(typeof a!="object")throw new TypeError("typeof prototype["+typeof a+"] != 'object'");c=function(){};c.prototype=a;c=new c;c.__proto__=a}b&&Object.defineProperties(c,b);return c},is:function(a,b){return a===b?a===0?1/a===1/b:j:a!==a&&b!==b},isnt:function(a,b){return!Object.is(a,b)}});function Da(a){try{Object.defineProperty(a,"sentinel",{});return"sentinel"in a}catch(b){}}
if(Object.defineProperty&&(ua=Da({}),va=Da(C),!ua||!va))S=Object.defineProperty,T=Object.defineProperties;
if(!Object.defineProperty||S)Object.defineProperty=function(a,b,c){if(typeof a!="object"&&typeof a!="function"||a===k)throw new TypeError("Object.defineProperty called on non-object: "+a);if(typeof c!="object"&&typeof c!="function"||c===k)throw new TypeError("Property description must be an object: "+c);if(S)try{return S.call(Object,a,b,c)}catch(d){if(d.number===-2146823252){c.enumerable=l;try{return S.call(Object,a,b,c)}catch(e){}}}if(c.value!==i)if(a.__defineGetter__&&(a.__lookupGetter__(b)||a.__lookupSetter__(b))){var f=
a.__proto__;a.__proto__=p;delete a[b];a[b]=c.value;a.__proto__=f}else a[b]=c.value;else if(a.__defineGetter__){c.get!==i&&a.__defineGetter__(b,c.get);c.set!==i&&a.__defineSetter__(b,c.set)}else if(Object.defineProperty.ielt8){c.get!==i&&(a["get"+b]=c.get);c.set!==i&&(a["set"+b]=c.set)}else throw new TypeError("getters & setters not supported");return a};B.ie&&8>o&&(B.ielt8=Object.defineProperty.ielt8=j);
if(!Object.defineProperties||T)Object.defineProperties=function(a,b){if(T)try{return T.call(Object,a,b)}catch(c){}for(var d in b)v(b,d)&&Object.defineProperty(a,d,b[d]);return a};function Ea(a){try{a.sentinel2=0;return Object.getOwnPropertyDescriptor(a,"sentinel2").value===0}catch(b){}}if(Object.getOwnPropertyDescriptor&&(wa=Ea({}),za=Ea(C),!za||!wa))U=Object.getOwnPropertyDescriptor;
if(!Object.getOwnPropertyDescriptor||U)Object.getOwnPropertyDescriptor=function(a,b){if(typeof a!="object"&&typeof a!="function"||a===k)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a);if(U)try{return U.call(Object,a,b)}catch(c){}if(v(a,b)){var d={enumerable:j,configurable:j},e,f;if(a.__defineGetter__){var h=a.__proto__;a.__proto__=p;e=a.__lookupGetter__(b);f=a.__lookupSetter__(b);a.__proto__=h}else if(Object.defineProperty.ielt8){e=a["get"+b];f=a["set"+b]}if(e||f){if(e)d.get=
e;if(f)d.set=f;return d}d.value=a[b];return d}};2!=[1,2].splice(0).length&&(Array.prototype.splice=function(a,b){return a===i&&b===i?[]:da.apply(this,[a===i?0:a,b===i?this.length-a:b].concat(r.call(arguments,2)))});
x(Array,{isArray:function(a){return ga.call(a)=="[object Array]"},from:function(a){if(a instanceof Array||Array.isArray(a))return a;if(a.i)return a.i();var a=y(a,j),b=a.length>>>0,c;try{c=r.call(a)}catch(d){}if(c&&c.length===b)return c;c=[];for(var e=0;e<b;e++)e in a&&(c[e]=a[e]);return c},of:function(a){return r.call(arguments)}});
x(Array.prototype,{reduce:function(a,b){var c=y(this),d=c.length>>>0,e=0;if(d===0&&arguments.length<=1)throw new TypeError("Array length is 0 and no second argument");for(b===i&&(b=(++e,c[0]));e<d;++e)e in c&&(b=w(a,i,b,c[e],e,c));return b},reduceRight:function(a,b){var c=y(this),d=c.length>>>0;if(d===0&&arguments.length<=1)throw new TypeError("Array length is 0 and no second argument");--d;for(b===i&&(b=(--d,c[d+1]));d>=0;--d)d in c&&(b=w(a,i,b,c[d],d,c));return b},forEach:function(a,b){for(var c=
y(this),d=c.length>>>0,e=-1;++e<d;)e in c&&w(a,b,c[e],e,c)},indexOf:function(a,b){var c=y(this),d=c.length>>>0;if((b=~~b)>d)return-1;for(b=(d+b)%d;b<d&&(!(b in c)||c[b]!==a);b++);return b^d?b:-1},lastIndexOf:function(a,b){var c=y(this),d=c.length>>>0,e;if(!d)return-1;e=d-1;b!==i&&(e=Math.min(e,Number.toInteger(b)));for(e=e>=0?e:d-Math.abs(e);e>=0;e--)if(e in c&&c[e]===a)return e;return-1},every:function(a,b,c){c===i&&(c=j);var d=c;P(this,function(e,f){d==c&&(d=!!w(a,b,e,f,this))},this);return d},
some:function(a,b){return ra.call(this,a,b,l)},filter:function(a,b){for(var c=y(this),d=c.length>>>0,e=[],f,h=0;h<d;h++)if(h in c){f=c[h];w(a,b,f,h,c)&&e.push(f)}return e},map:function(a,b){for(var c=y(this),d=c.length>>>0,e=[],f=0;f<d;f++)f in c&&(e[f]=w(a,b,c[f],f,this));return e},contains:function(a){return!!~this.indexOf(a)}});P=u.call(Function.prototype.call,Array.prototype.forEach);ea=Array.prototype.map;ra=Array.prototype.every;
if(!String.prototype.trim||R.trim())R="["+R+"]",sa=RegExp("^"+R+R+"*"),ta=RegExp(R+R+"*$"),String.prototype.trim=function(){return String(this).replace(sa,"").replace(ta,"")};Q=String.prototype.trim;"0".split(i,0).length&&(String.prototype.split=function(a,b){return a===i&&b===0?[]:s.call(this,a,b)});t=function(a,b){return!!~this.indexOf(a,b)};
x(String.prototype,{repeat:function(a){return Array(++a).join(this+"")},startsWith:function(a,b){return this.lastIndexOf(a,b)===(b||0)},endsWith:function(a,b){a=a+"";return this.substr(-a.length-(b||0),b)==a},contains:t,toArray:function(){return s.call(this,"")},reverse:function(){return Array.prototype.reverse.call(s.call(this+"","")).join("")}});
x(Number,{isFinite:function(a){return typeof a==="number"&&n.g(a)},isInteger:function(a){return Number.isFinite(a)&&a>=-9007199254740992&&a<=9007199254740992&&Math.floor(a)===a},isNaN:function(a){return Object.is(a,NaN)},toInteger:function(a){a=+a;return Number.isNaN(a)?0:a===0||!n.g(a)?a:(a<0?-1:1)*Math.floor(Math.abs(a))}});I=function(a,b){var c=document.createEvent("Events"),b=b||{};c.initEvent(a,b.bubbles||l,b.cancelable||l);if(!("isTrusted"in c))c.h=l;return c};
try{L=Event.prototype,new Event("click")}catch(Fa){n.Event=I,L&&(I.prototype=L)}J=function(a,b){var c,d;try{c=document.createEvent("CustomEvent")}catch(e){c=document.createEvent("Event")}b=b||{};d=b.detail!==i?b.detail:k;(c.initCustomEvent||(c.detail=d,c.initEvent)).call(c,a,b.bubbles||l,b.cancelable||l,d);if(!("isTrusted"in c))c.h=l;return c};try{M=(n.CustomEvent||Event).prototype,new CustomEvent("magic")}catch(Ga){if(n.CustomEvent=J,M||L)J.prototype=M||L}
L.stopImmediatePropagation||(N=function(a){var b=this.e,c=this.f;if(typeof b!=="function")if("handleEvent"in b){c=b;b=b.handleEvent}else return;if(a.__stopNow)a.stopPropagation();else return b.apply(c,arguments)},L.stopImmediatePropagation=function(){this.__stopNow=j});
if("addEventListener"in C&&!C.addEventListener.__shim__){G=0;try{D=function(){G++},C.addEventListener("click",D),C.addEventListener("click",D),C.click?C.click():C.dispatchEvent(new I("click"))}catch(Ha){}finally{if(0==G||2==G||N){var Ia=2==G;P([n.HTMLDocument&&n.HTMLDocument.prototype||n.document,n.Window&&n.Window.prototype||n,B],function(a){if(a){var b=a.addEventListener,c=a.removeEventListener;if(b){a.addEventListener=function(a,c,f){var h,g,f=f||l;if(Ia||N){g="_e_8vj"+(f?"-":"")+(c.__UUID__||
(c.__UUID__=++F))+a;if(!(h=this._))h=this._={};if(g in h)return;c=N?h[g]=u.call(N,{e:c,f:this}):h[g]=i;c}return b.call(this,a,c,f)};if(c)a.removeEventListener=function(a,b,f){var h,g,f=f||l;if(Ia||N)if((h=this._)&&h[g="_e_8vj"+(f?"-":"")+b.__UUID__+a]){b=h[g];delete h[g]}return c.call(this,a,b,f)}}}})}}}O=function(a,b,c){this.d=a;this.a=b;this.c=c;this.length=0;this.value="";this.b("1")};
na=function(a,b){var c=b||"",d=!!a.length;if(d){for(;a.length>0;)delete a[--a.length];a.value=""}if(c){(c=Q.call(c))&&s.call(c,ka).forEach(oa,a);a.value=b}d&&a.a&&a.a.call(a.c,a.value)};oa=function(a){this[this.length++]=a};
x(O.prototype,{b:function(a){var b=this.d.call(this.c);b!=this.value&&na(this,b);a===""&&ha("SYNTAX_ERR");t.call(a+""," ")&&ha("INVALID_CHARACTER_ERR")},add:function(a){var b=this.value;if(!this.contains(a)){this.value=this.value+((b&&!b.match(ja)?" ":"")+a);this[this.length++]=a;this.a&&this.a.call(this.c,this.value)}},remove:function(a){this.b(a);var b;this.value=this.value.replace(RegExp("((?: +|^)"+a+"(?: +|$))","g"),function(a,b,e,f){return e&&a.length+e<f.length?" ":""});b=s.call(this.value,
" ");for(a=this.length-1;a>0;--a)if(!(this[a]=b[a])){this.length--;delete this[a]}this.a&&this.a.call(this.c,this.value)},contains:function(a){this.b(a);return t.call(" "+this.value+" "," "+a+" ")},item:function(a){this.b("1");return this[a]||k},toggle:function(a){var b=thisObj.contains(a);this[b?"add":"remove"](a);return b}});O.prototype.toString=function(){return this.value||""};qa=function(a){this.className=a};pa=function(){return this.className};
L.AT_TARGET||(L.AT_TARGET=2,L.BUBBLING_PHASE=3,L.CAPTURING_PHASE=1);Event.AT_TARGET||(Event.AT_TARGET=2,Event.BUBBLING_PHASE=3,Event.CAPTURING_PHASE=1);try{n.getComputedStyle(C)}catch(Ja){n.getComputedStyle=u(function(a,b){return this.call(n,a,b||k)},n.getComputedStyle)}"classList"in C||Object.defineProperty(B,"classList",{get:function(){if(this.tagName){var a=this._||(this._={});a._ccl_||(a._ccl_=new O(pa,qa,this));return a._ccl_}}});
"parentElement"in C||Object.defineProperty(B,"parentElement",{get:function(){var a=this.parentNode;return a&&a.nodeType===1?a:k}});"contains"in C||(n.Node.prototype.contains=function(a){return!!(this.compareDocumentPosition(a)&16)});
"insertAdjacentHTML"in C||(n.HTMLElement.prototype.insertAdjacentHTML=function(a,b){var c=this.ownerDocument.createElement("_"),d={beforebegin:"before",afterbegin:"prepend",beforeend:"append",afterend:"after"},e;c.innerHTML=b;(c=c.childNodes)&&(c.length&&(e=this[d[a]]))&&e.apply(this,c)});if(document.importNode&&!document.importNode.shim)try{document.importNode(C)}catch(Ka){var La=document.importNode;delete document.importNode;document.importNode=function(a,b){b===i&&(b=j);return La.call(this,a,b)}}
try{C.cloneNode()}catch(Ma){[Node.prototype,B,Document.prototype,DocumentFragment.prototype].forEach(aa)}
C.prepend||(D=function(a){var b=k,c=0,d=a.length,e,a=ea.call(a,function(a){return typeof a==="string"?document.createTextNode(a):a});if(d===1)b=a[0];else{b=document.createDocumentFragment();c=0;for(d=a.length;c<(e=a.length);++c){c=c-(d-e);b.appendChild(a[c])}}return b},B.after=function(){this.parentNode&&this.parentNode.insertBefore(D(arguments),this.nextSibling)},B.before=function(){this.parentNode&&this.parentNode.insertBefore(D(arguments),this)},B.append=function(){this.appendChild(D(arguments))},
B.prepend=function(){this.insertBefore(D(arguments),this.firstChild)},B.replace=function(){this.parentNode&&this.parentNode.replaceChild(D(arguments),this)},B.remove=function(){this.parentNode&&this.parentNode.removeChild(this)},"prepend"in document||(document.prepend=function(){B.prepend.apply(this.documentElement,arguments)},document.append=function(){B.append.apply(this.documentElement,arguments)}));
B.matchesSelector||(B.matchesSelector=B.webkitMatchesSelector||B.mozMatchesSelector||B.msMatchesSelector||B.oMatchesSelector||function(a,b){if(!a)return l;if(a==="*")return j;var c,d,e,f=0,h,g,m;if(b)if("length"in b)c=b[0];else{c=b;b=i}else c=this;do{m=l;c===document.documentElement?m=a===":root":c===document.body&&(m=a.toUpperCase()==="BODY");if(!m){a=Q.call(a.replace(ma,"$1"));if(h=a.match(la))switch(a.charAt(0)){case "#":m=c.id===a.slice(1);break;default:if((m=!h[1]||!("tagName"in c)||c.tagName.toUpperCase()===
h[1].toUpperCase())&&h[2]){e=-1;g=h[2].slice(1).split(".");for(h=" "+c.className+" ";g[++e]&&m;)m=t.call(h," "+g[e]+" ")}}if(!/([,>+~ ])/.test(a)&&(d=c.parentNode)&&d.querySelector)m=d.querySelector(a)===c;if(!m&&(d=c.ownerDocument)){g=d.querySelectorAll(a);for(e=-1;!m&&g[++e];)m=g[e]===c}}}while(m&&b&&(c=b[++f]));return b&&"length"in b?m&&b.length==f:m});document.documentElement.matchesSelector||(document.documentElement.matchesSelector=B.matchesSelector);
"matches"in B||(B.matches=document.documentElement.matches=B.matchesSelector);
"find"in document||(H=/(\:scope)(?=[ >~+])/,document.find=DocumentFragment.prototype.find=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c,d=0,e=b.length,f;do{f=b[d];a=a.replace(H,f.nodeType==9?":root":document_find_scopedreplacer=function(){return"#"+(f.id||(f.id="find"+ ++F))});c=f.querySelector(a)}while(!c&&++d<e);return c||k},document.findAll=DocumentFragment.prototype.findAll=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c=[],d=0,e=b.length,f,h,g,m,V,K={},E;do{f=b[d];a=a.replace(H,
f.nodeType==9?":root":document_find_scopedreplacer=function(){return"#"+(f.id||(f.id="find"+ ++F))});h=f.querySelectorAll(a);m=0;for(V=h.length;m<V;++m){g=h[m];g=(E=l,g.__UUID__)||(E=j,g.__UUID__=++F);if(E||!(g in K)){K[g]=i;c.push(h[m])}}}while(++d<e);return c});"find"in B||(B.find=B.querySelector,B.findAll=B.querySelectorAll);document.getElementsByClassName&&ba(document.getElementsByClassName(""));document.querySelectorAll&&ba(document.querySelectorAll("#z"));
if(!W.prototype.toISOString||t.call((new W(-621987552E5)).toISOString(),"-000001")||"1969-12-31T23:59:59.999Z"!==(new W(-1)).toISOString())W.prototype.toISOString=function(){var a,b,c,d;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");d=this.getUTCFullYear();a=this.getUTCMonth();d=d+~~(a/12);a=[(a%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];d=(d<0?"-":d>9999?"+":"")+("00000"+Math.abs(d)).slice(0<=d&&d<=
9999?-4:-6);for(b=a.length;b--;){c=a[b];c<10&&(a[b]="0"+c)}return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};W.now||(W.now=function(){return(new W).getTime()});var Na;if(!(Na=!W.prototype.toJSON)){var Oa;if(!(Oa=t.call((new W(-621987552E5)).toJSON(),"-000001"))){var Pa;a:{try{Pa=W.prototype.toJSON.call({toISOString:function(){return-1}});break a}catch(Qa){}Pa=i}Oa=~Pa}Na=Oa}
Na&&(W.prototype.toJSON=function(){return w(this.toISOString,this)});
if(!W.parse){X=function(a,b,c,d,e,f,h){var g=arguments.length;if(this instanceof W){g=g==1&&String(a)===a?new W(X.parse(a)):g>=7?new W(a,b,c,d,e,f,h):g>=6?new W(a,b,c,d,e,f):g>=5?new W(a,b,c,d,e):g>=4?new W(a,b,c,d):g>=3?new W(a,b,c):g>=2?new W(a,b):g>=1?new W(a):new W;g.constructor=X;return g}return W.apply(this,arguments)};Aa=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");Y=[0,31,59,90,120,151,181,
212,243,273,304,334,365];Z=function(a){return Math.ceil(a/4)-Math.ceil(a/100)+Math.ceil(a/400)};for(G in W)X[G]=W[G];X.now=W.now;X.UTC=W.UTC;X.prototype=W.prototype;X.prototype.constructor=X;X.parse=function(a){var b=Aa.exec(a);if(b){var c=Number(b[1]),d=Number(b[2]||1),e=Number(b[3]||1),f=Number(b[4]||0),h=Number(b[5]||0),g=Number(b[6]||0),m=Number(b[7]||0),V=b[8]?0:Number(new Date(1970,0)),K=b[9]==="-"?1:-1,E=Number(b[10]||0),b=Number(b[11]||0),xa=Z(c),ya=Z(c+1);if(f<(h>0||g>0||m>0?24:25)&&h<60&&
g<60&&m<1E3&&E<24&&b<60&&d>0&&d<13&&e>0&&e<1+Y[d]-Y[d-1]+(d===2?ya-xa:0)){c=365*(c-1970)+(d>2?ya:xa)-Z(1970)+Y[d-1]+e-1;c=(((c*24+f+E*K)*60+h+b*K)*60+g)*1E3+m+V;if(-864E13<=c&&c<=864E13)return c}return NaN}return W.parse.apply(this,arguments)};n.Date=X}if((G=n._)&&G.ielt9shims)G.ielt9shims.forEach(w),n._=G.orig_;x=G=C=ca=ia=I=J=L=M=B=X=z=i;ua||(Object.defineProperty=k,delete Object.defineProperty);