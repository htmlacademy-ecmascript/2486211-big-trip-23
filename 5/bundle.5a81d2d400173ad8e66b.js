(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),a=n.n(i),s=n(645),r=n.n(s)()(a());r.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,s){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);i&&r[f[0]]||(void 0!==s&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=s),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(a," */");return[t].concat([s]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",a="minute",s="hour",r="day",o="week",c="month",d="quarter",f="year",l="date",p="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),a=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(a,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),a=t.clone().add(i,c),s=n-a<0,r=t.clone().add(i+(s?-1:1),c);return+(-(i+(n-a)/(s?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:o,d:r,D:l,h:s,m:a,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",_={};_[y]=h;var g=function(e){return e instanceof M},$=function e(t,n,i){var a;if(!t)return y;if("string"==typeof t){var s=t.toLowerCase();_[s]&&(a=s),n&&(_[s]=n,a=s);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var o=t.name;_[o]=t,a=o}return!i&&a&&(y=a),a||!i&&y},w=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new M(n)},T=v;T.l=$,T.i=g,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(u);if(i){var a=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return T},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,d=!!T.u(t)||t,p=T.p(e),u=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return d?i:i.endOf(r)},b=function(e,t){return T.w(n.toDate()[e].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,m=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case f:return d?u(1,0):u(31,11);case c:return d?u(1,m):u(0,m+1);case o:var _=this.$locale().weekStart||0,g=(h<_?h+7:h)-_;return u(d?v-g:v+(6-g),m);case r:case l:return b(y+"Hours",0);case s:return b(y+"Minutes",1);case a:return b(y+"Seconds",2);case i:return b(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,d=T.p(e),p="set"+(this.$u?"UTC":""),u=(o={},o[r]=p+"Date",o[l]=p+"Date",o[c]=p+"Month",o[f]=p+"FullYear",o[s]=p+"Hours",o[a]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[d],b=d===r?this.$D+(t-this.$W):t;if(d===c||d===f){var h=this.clone().set(l,1);h.$d[u](b),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](b);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[T.p(e)]()},m.add=function(n,d){var l,p=this;n=Number(n);var u=T.p(d),b=function(e){var t=w(p);return T.w(t.date(t.date()+Math.round(e*n)),p)};if(u===c)return this.set(c,this.$M+n);if(u===f)return this.set(f,this.$y+n);if(u===r)return b(1);if(u===o)return b(7);var h=(l={},l[a]=e,l[s]=t,l[i]=1e3,l)[u]||1,m=this.$d.getTime()+n*h;return T.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=T.z(this),s=this.$H,r=this.$m,o=this.$M,c=n.weekdays,d=n.months,f=function(e,n,a,s){return e&&(e[n]||e(t,i))||a[n].slice(0,s)},l=function(e){return T.s(s%12||12,e,"0")},u=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:T.s(o+1,2,"0"),MMM:f(n.monthsShort,o,d,3),MMMM:f(d,o),D:this.$D,DD:T.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,c,2),ddd:f(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:T.s(s,2,"0"),h:l(1),hh:l(2),a:u(s,r,!0),A:u(s,r,!1),m:String(r),mm:T.s(r,2,"0"),s:String(this.$s),ss:T.s(this.$s,2,"0"),SSS:T.s(this.$ms,3,"0"),Z:a};return i.replace(b,(function(e,t){return t||h[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,l,p){var u,b=T.p(l),h=w(n),m=(h.utcOffset()-this.utcOffset())*e,v=this-h,y=T.m(this,h);return y=(u={},u[f]=y/12,u[c]=y,u[d]=y/3,u[o]=(v-m)/6048e5,u[r]=(v-m)/864e5,u[s]=v/t,u[a]=v/e,u[i]=v/1e3,u)[b]||v,p?y:T.a(y)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return _[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return T.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),j=M.prototype;return w.prototype=j,[["$ms",n],["$s",i],["$m",a],["$H",s],["$W",r],["$M",c],["$y",f],["$D",l]].forEach((function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=_[y],w.Ls=_,w.p={},w}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var s={},r=[],o=0;o<e.length;o++){var c=e[o],d=i.base?c[0]+i.base:c[0],f=s[d]||0,l="".concat(d," ").concat(f);s[d]=f+1;var p=n(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var b=a(u,i);i.byIndex=o,t.splice(o,0,{identifier:l,updater:b,references:1})}r.push(l)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var s=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<s.length;r++){var o=n(s[r]);t[o].references--}for(var c=i(e,a),d=0;d<s.length;d++){var f=n(s[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}s=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var s=t[i]={id:i,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e,t,n="beforeend"){if(!(e instanceof y))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function t(e,t){if(!(e instanceof y&&t instanceof y))throw new Error("Can replace only components");const n=e.element,i=t.element,a=i.parentElement;if(null===a)throw new Error("Parent element doesn't exist");a.replaceChild(n,i)}var i=n(379),a=n.n(i),s=n(795),r=n.n(s),o=n(569),c=n.n(o),d=n(565),f=n.n(d),l=n(216),p=n.n(l),u=n(589),b=n.n(u),h=n(10),m={};m.styleTagTransform=b(),m.setAttributes=f(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=p(),a()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const v="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(v),setTimeout((()=>{this.element.classList.remove(v),e?.()}),600)}}class _ extends y{get template(){return'<ul class="trip-events__list"></ul>'}}var g=n(484),$=n.n(g);const w=e=>e[0].toUpperCase()+e.slice(1,e.length);class T extends y{#t=null;#n=null;#i=null;#a=null;constructor({point:e,offers:t,destination:n,onEditClick:i}){super(),this.#t=e,this.#n=t,this.#i=n,this.#a=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#s)}get template(){return((e,t,n)=>{const{basePrice:i,type:a,isFavorite:s,dateFrom:r}=e,o=(c=r)?$()(c).format("MMM D"):"";var c;const d=w(a),f=t.map((e=>`\n    <li class="event__offer">\n      <span class="event__offer-title">${e.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${e.price}</span>\n    </li>\n  `)).join(""),l=s?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn";return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="2019-03-18">${o}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${a}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${d} ${n.name}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n            &mdash;\n            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n          </p>\n          <p class="event__duration">30M</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${i}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${f}\n        </ul>\n        <button class="${l}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`})(this.#t,this.#n,this.#i)}#s=e=>{e.preventDefault(),this.#a()}}const M=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],j=["Everything","Future","Present","Past"],k=["Day","Event","Time","Price","Offers"];class C extends y{#t=null;#r=null;#o=null;#c=null;#d=null;constructor({point:e,allOffers:t,pointDestination:n,allDestination:i,onFormSubmit:a}){super(),this.#t=e,this.#r=t,this.#o=n,this.#c=i,this.#d=a,this.element.querySelector("form").addEventListener("submit",this.#f)}get template(){return((e,t,n,i)=>{const{basePrice:a,type:s}=e,r=w(s),{name:o,description:c}=n,d=t.offers.map((n=>{const i=e.offers.includes(n.id)?"checked":"";return((e,t,n,i)=>`\n  <div class="event__offer-selector">\n    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e}-1" type="checkbox" name="event-offer-${e}" ${i}>\n    <label class="event__offer-label" for="event-offer-${e}-1">\n      <span class="event__offer-title">${t}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${n}</span>\n    </label>\n  </div>\n`)(t.type,n.title,n.price,i)})).join(""),f=i.map((e=>`<option value="${e.name}"></option>`)).join("");return`<li class="trip-events__item">\n    <form class="event event--edit" action="#" method="post">\n      <header class="event__header">\n        <div class="event__type-wrapper">\n          <label class="event__type  event__type-btn" for="event-type-toggle-1">\n            <span class="visually-hidden">Choose event type</span>\n            <img class="event__type-icon" width="17" height="17" src="img/icons/${s}.png" alt="Event type icon">\n          </label>\n          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n          <div class="event__type-list">\n            <fieldset class="event__type-group">\n              <legend class="visually-hidden">Event type</legend>\n              ${M.map((e=>((e,t)=>`\n  <div class="event__type-item">\n    <input id="event-type-${e.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}" ${t}>\n    <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-1">${e}</label>\n  </div>\n`)(e,e===r?"checked":""))).join("")}\n            </fieldset>\n          </div>\n        </div>\n\n        <div class="event__field-group  event__field-group--destination">\n          <label class="event__label  event__type-output" for="event-destination-1">\n            ${r}\n          </label>\n          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${o}" list="destination-list-1">\n          <datalist id="destination-list-1">\n            ${f}\n          </datalist>\n        </div>\n\n        <div class="event__field-group  event__field-group--time">\n          <label class="visually-hidden" for="event-start-time-1">From</label>\n          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n          &mdash;\n          <label class="visually-hidden" for="event-end-time-1">To</label>\n          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n        </div>\n\n        <div class="event__field-group  event__field-group--price">\n          <label class="event__label" for="event-price-1">\n            <span class="visually-hidden">Price</span>\n            &euro;\n          </label>\n          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n        </div>\n\n        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n        <button class="event__reset-btn" type="reset">Delete</button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </header>\n      <section class="event__details">\n        <section class="event__section  event__section--offers">\n          <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n          <div class="event__available-offers">\n            ${d}\n          </div>\n        </section>\n\n        <section class="event__section  event__section--destination">\n          <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n          <p class="event__destination-description">${c}</p>\n        </section>\n      </section>\n    </form>\n  </li>`})(this.#t,this.#r,this.#o,this.#c)}#f=e=>{e.preventDefault(),this.#d()}}const F=[{id:"13478420-d6f6-4e7c-b5fc-4402e9db8062",basePrice:5973,dateFrom:"2024-04-22T07:42:07.283Z",dateTo:"2024-04-24T08:14:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["11c3773a-228d-47be-ae58-63961842c467","5187878e-9715-4dff-8b8a-c76ed11fe6c7","d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"0eb30cae-3d43-4d3d-b19f-1cc45d0a379b",basePrice:3690,dateFrom:"2024-04-25T20:03:07.283Z",dateTo:"2024-04-26T13:13:07.283Z",destination:"e4c577d2-a3f0-4750-b345-fb12ed7a881f",isFavorite:!1,offers:["f3fb10e2-5b45-422e-8080-9edb04453635","ef1a8bb1-c1ea-4daa-9967-c6b99f902986","f58e084e-1d11-4db2-9c17-0499ef5c8a24","db891858-8a2c-4afe-be6a-cd5eb5c10f7f"],type:"check-in"},{id:"9bba0c4b-2fd1-4d9d-b65f-4d82a1212ef8",basePrice:5261,dateFrom:"2024-04-27T17:47:07.283Z",dateTo:"2024-04-29T16:26:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["aa0c58a3-b51b-4fbe-affd-3eef397c65c3","af9b6c79-1078-4b6c-be27-0f8d02f1a2fd","e30252e9-7bcc-4c1f-a4b5-c62ef1fd1aa8","42796162-3fba-4dde-81d4-4db8ffd25f7e","c10af2af-6fc2-4c63-a3fc-7bafa8147d25","82b128ae-7358-44f7-9465-a213f536c4bc"],type:"ship"},{id:"d5cce924-c8d6-471b-83b4-b0eb9e3edbdb",basePrice:602,dateFrom:"2024-04-30T22:16:07.283Z",dateTo:"2024-05-02T16:02:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!1,offers:["d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"f3953904-97cc-4ed4-8937-33ed30a9a309",basePrice:1259,dateFrom:"2024-05-03T16:49:07.283Z",dateTo:"2024-05-04T23:46:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["0354fbfc-de2d-4b50-9da8-597ee5554ca9","afcbb72a-7b35-4b16-84e2-04cb078ffd70","205a1233-58bd-4cea-829e-0f48e0fc8de6","1180de3d-4e93-4d86-9b6b-eb30951ddf18","07fad9b8-76f2-42a8-826e-85d0e045a21b"],type:"flight"},{id:"c55d6856-d4af-475f-9638-c6caf27dfd69",basePrice:1086,dateFrom:"2024-05-06T19:45:07.283Z",dateTo:"2024-05-07T07:16:07.283Z",destination:"d38732da-b1dc-44ee-b139-541c722f9e13",isFavorite:!0,offers:[],type:"drive"},{id:"79b5abc9-976e-4b61-a45b-bc4c5f6632f9",basePrice:4090,dateFrom:"2024-05-08T10:03:07.283Z",dateTo:"2024-05-09T06:18:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!0,offers:["82009787-deca-4eee-a426-bc83b497a6e6","e0fd3848-6eed-4e81-9cd6-8b8108314f02"],type:"restaurant"},{id:"ed1b082c-a6c0-4f25-b79d-7c5b3270ea28",basePrice:7209,dateFrom:"2024-05-10T14:37:07.283Z",dateTo:"2024-05-12T02:34:07.283Z",destination:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",isFavorite:!0,offers:[],type:"drive"},{id:"f7bba54b-0479-4f87-855a-4a8110cda428",basePrice:874,dateFrom:"2024-05-13T09:05:07.283Z",dateTo:"2024-05-13T20:24:07.283Z",destination:"2857178d-6f63-48a3-8871-5e81577bc39a",isFavorite:!1,offers:[],type:"drive"},{id:"402a73dc-00a9-4fd8-b3b2-6e775f8edcc7",basePrice:4720,dateFrom:"2024-05-15T05:25:07.283Z",dateTo:"2024-05-16T02:31:07.283Z",destination:"5282e5ca-e345-4cd3-b34f-870599815323",isFavorite:!0,offers:[],type:"sightseeing"},{id:"eec67911-6234-4f26-8837-8f9905602973",basePrice:3307,dateFrom:"2024-05-16T13:01:07.283Z",dateTo:"2024-05-17T21:32:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!1,offers:[],type:"sightseeing"},{id:"ae9cf386-5021-4215-a2a9-b3cf90252cbb",basePrice:6309,dateFrom:"2024-05-19T03:57:07.283Z",dateTo:"2024-05-20T00:19:07.283Z",destination:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",isFavorite:!1,offers:["d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"8d92e94a-7e68-4ead-8822-7075125911a8",basePrice:7936,dateFrom:"2024-05-21T06:53:07.283Z",dateTo:"2024-05-22T22:22:07.283Z",destination:"e4c577d2-a3f0-4750-b345-fb12ed7a881f",isFavorite:!1,offers:["58063ad8-405d-4ff2-9e5d-d17820cfbcbd"],type:"drive"},{id:"4fe8b429-7e74-4622-903e-92b6d0022e2d",basePrice:8163,dateFrom:"2024-05-24T16:16:07.283Z",dateTo:"2024-05-25T05:30:07.283Z",destination:"ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09",isFavorite:!1,offers:[],type:"restaurant"},{id:"bf235c00-2026-4b6e-ab30-23d315888e0a",basePrice:4963,dateFrom:"2024-05-26T10:13:07.283Z",dateTo:"2024-05-28T07:56:07.283Z",destination:"d38732da-b1dc-44ee-b139-541c722f9e13",isFavorite:!1,offers:["f58e084e-1d11-4db2-9c17-0499ef5c8a24","db891858-8a2c-4afe-be6a-cd5eb5c10f7f"],type:"check-in"},{id:"2806f782-41b7-4f06-a1d9-3ac34074136b",basePrice:457,dateFrom:"2024-05-28T17:15:07.283Z",dateTo:"2024-05-29T02:54:07.283Z",destination:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",isFavorite:!0,offers:["1d6b077f-5ca8-4f77-9afb-14a405b1c5e4"],type:"train"},{id:"58597bd3-ccfd-49be-8a09-ad36aa7c4428",basePrice:3169,dateFrom:"2024-05-30T07:00:07.283Z",dateTo:"2024-05-31T23:34:07.283Z",destination:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",isFavorite:!1,offers:["82009787-deca-4eee-a426-bc83b497a6e6","e0fd3848-6eed-4e81-9cd6-8b8108314f02"],type:"restaurant"},{id:"31be6f48-88ed-4961-b9fc-897652dfc2af",basePrice:9350,dateFrom:"2024-06-01T17:22:07.283Z",dateTo:"2024-06-02T01:55:07.283Z",destination:"c0e3990d-f125-4866-a5c8-a1723b02c43c",isFavorite:!1,offers:[],type:"restaurant"},{id:"7e38c638-b6d9-4193-a7d6-cde5d1448630",basePrice:1813,dateFrom:"2024-06-02T13:23:07.283Z",dateTo:"2024-06-03T23:17:07.283Z",destination:"ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09",isFavorite:!0,offers:["f3fb10e2-5b45-422e-8080-9edb04453635","ef1a8bb1-c1ea-4daa-9967-c6b99f902986","f58e084e-1d11-4db2-9c17-0499ef5c8a24","db891858-8a2c-4afe-be6a-cd5eb5c10f7f"],type:"check-in"},{id:"3fc5a43a-aab2-47dd-bfd4-b7dff5a38380",basePrice:6340,dateFrom:"2024-06-05T11:45:07.283Z",dateTo:"2024-06-07T01:43:07.283Z",destination:"47016e78-d41a-40a9-986a-14f1b5630a6d",isFavorite:!0,offers:["5187878e-9715-4dff-8b8a-c76ed11fe6c7","d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"3c053bd6-4910-49ca-820a-e346d8549e8e",basePrice:9298,dateFrom:"2024-06-07T16:03:07.283Z",dateTo:"2024-06-09T05:33:07.283Z",destination:"efdc3a59-a5eb-425f-9fa0-f22204146e05",isFavorite:!0,offers:["11c3773a-228d-47be-ae58-63961842c467","5187878e-9715-4dff-8b8a-c76ed11fe6c7","d6f50303-e20a-4d5b-bb9c-754a1cff927b"],type:"bus"},{id:"36ad7eca-e869-4a8f-b86e-386d85736fc4",basePrice:6044,dateFrom:"2024-06-10T18:10:07.283Z",dateTo:"2024-06-12T18:40:07.283Z",destination:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",isFavorite:!0,offers:["58063ad8-405d-4ff2-9e5d-d17820cfbcbd"],type:"drive"},{id:"43dcbd1f-9948-49ce-a139-837b96553fa6",basePrice:3473,dateFrom:"2024-06-14T05:21:07.283Z",dateTo:"2024-06-15T12:34:07.283Z",destination:"2857178d-6f63-48a3-8871-5e81577bc39a",isFavorite:!1,offers:[],type:"sightseeing"},{id:"fbf65d1f-ec66-40a7-b9cb-3b0fcaabd5b2",basePrice:7852,dateFrom:"2024-06-17T08:59:07.283Z",dateTo:"2024-06-18T07:53:07.283Z",destination:"5282e5ca-e345-4cd3-b34f-870599815323",isFavorite:!1,offers:["3542e217-78bb-407c-a27a-4e0082634a0f","dbd7cb5c-d974-433e-a1e2-7498c143d296","64da6b2f-43e6-4aae-a52f-1503cf0e6f9a"],type:"taxi"},{id:"5328cfe2-c9f8-47b8-b958-ff35c7680d8d",basePrice:2921,dateFrom:"2024-06-19T13:19:07.283Z",dateTo:"2024-06-20T18:26:07.283Z",destination:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",isFavorite:!0,offers:["205a1233-58bd-4cea-829e-0f48e0fc8de6","1180de3d-4e93-4d86-9b6b-eb30951ddf18","07fad9b8-76f2-42a8-826e-85d0e045a21b"],type:"flight"}],D=()=>{return(e=F)[Math.floor(Math.random()*e.length)];var e},A=[{id:"ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09",description:"Kioto - middle-eastern paradise",name:"Kioto",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Kioto is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Kioto with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Kioto with an embankment of a mighty river as a centre of attraction"},{src:"https://23.objects.htmlacademy.pro/static/destinations/2.jpg",description:"Kioto famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Kioto a true asian pearl"}]},{id:"ad6c5c6a-9b1a-4666-a993-11e1e7096ba8",description:"Paris - famous for its crowded street markets with the best street food in Asia",name:"Paris",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Paris is a beautiful city"}]},{id:"e3141dc4-c08b-4a46-8f3c-ed52c1349f4a",description:"Monaco - is a beautiful city",name:"Monaco",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Monaco with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Monaco with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Monaco a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Monaco a perfect place to stay with a family"}]},{id:"5282e5ca-e345-4cd3-b34f-870599815323",description:"Rome - in a middle of Europe",name:"Rome",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Rome is a beautiful city"}]},{id:"2857178d-6f63-48a3-8871-5e81577bc39a",description:"Naples - in a middle of Europe",name:"Naples",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Naples full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://23.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Naples a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Naples with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Naples with crowded streets"}]},{id:"47016e78-d41a-40a9-986a-14f1b5630a6d",description:"Milan - middle-eastern paradise",name:"Milan",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Milan with an embankment of a mighty river as a centre of attraction"}]},{id:"e4c577d2-a3f0-4750-b345-fb12ed7a881f",description:"Nagasaki - middle-eastern paradise",name:"Nagasaki",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/9.jpg",description:"Nagasaki is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Nagasaki middle-eastern paradise"},{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Nagasaki famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Nagasaki is a beautiful city"}]},{id:"efdc3a59-a5eb-425f-9fa0-f22204146e05",description:"Kopenhagen - with crowded streets",name:"Kopenhagen",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Kopenhagen is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Kopenhagen with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Kopenhagen a true asian pearl"}]},{id:"c0e3990d-f125-4866-a5c8-a1723b02c43c",description:"Sochi - for those who value comfort and coziness",name:"Sochi",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/20.jpg",description:"Sochi in a middle of Europe"},{src:"https://23.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Sochi with crowded streets"}]},{id:"d38732da-b1dc-44ee-b139-541c722f9e13",description:"Helsinki - with a beautiful old town",name:"Helsinki",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/8.jpg",description:"Helsinki with an embankment of a mighty river as a centre of attraction"},{src:"https://23.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Helsinki with crowded streets"},{src:"https://23.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Helsinki a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Helsinki middle-eastern paradise"},{src:"https://23.objects.htmlacademy.pro/static/destinations/17.jpg",description:"Helsinki a true asian pearl"}]}],S=[{type:"taxi",offers:[{id:"36584776-4bbe-4d5e-92b7-b91a5db5dc21",title:"Upgrade to a business class",price:147},{id:"d131fb1d-0a02-4f3a-bcec-99da5a96aace",title:"Choose the radio station",price:185},{id:"3542e217-78bb-407c-a27a-4e0082634a0f",title:"Choose temperature",price:81},{id:"dbd7cb5c-d974-433e-a1e2-7498c143d296",title:"Drive quickly, I'm in a hurry",price:66},{id:"64da6b2f-43e6-4aae-a52f-1503cf0e6f9a",title:"Drive slowly",price:55}]},{type:"bus",offers:[{id:"11c3773a-228d-47be-ae58-63961842c467",title:"Infotainment system",price:139},{id:"5187878e-9715-4dff-8b8a-c76ed11fe6c7",title:"Order meal",price:130},{id:"d6f50303-e20a-4d5b-bb9c-754a1cff927b",title:"Choose seats",price:41}]},{type:"train",offers:[{id:"b322bbc8-afad-4ec6-b1e8-958f89f30adc",title:"Book a taxi at the arrival point",price:60},{id:"c83d8cc4-58c6-463c-bc1e-c993605af189",title:"Order a breakfast",price:31},{id:"1d6b077f-5ca8-4f77-9afb-14a405b1c5e4",title:"Wake up at a certain time",price:86}]},{type:"flight",offers:[{id:"e20018f0-a5e0-425d-b0b3-a6b1e7cb6309",title:"Choose meal",price:155},{id:"0354fbfc-de2d-4b50-9da8-597ee5554ca9",title:"Choose seats",price:152},{id:"afcbb72a-7b35-4b16-84e2-04cb078ffd70",title:"Upgrade to comfort class",price:193},{id:"205a1233-58bd-4cea-829e-0f48e0fc8de6",title:"Upgrade to business class",price:120},{id:"1180de3d-4e93-4d86-9b6b-eb30951ddf18",title:"Add luggage",price:37},{id:"07fad9b8-76f2-42a8-826e-85d0e045a21b",title:"Business lounge",price:66}]},{type:"check-in",offers:[{id:"ba842f44-c394-4f7d-bf40-1a63ef69b0eb",title:"Choose the time of check-in",price:47},{id:"f3fb10e2-5b45-422e-8080-9edb04453635",title:"Choose the time of check-out",price:98},{id:"ef1a8bb1-c1ea-4daa-9967-c6b99f902986",title:"Add breakfast",price:79},{id:"f58e084e-1d11-4db2-9c17-0499ef5c8a24",title:"Laundry",price:112},{id:"db891858-8a2c-4afe-be6a-cd5eb5c10f7f",title:"Order a meal from the restaurant",price:54}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"aa0c58a3-b51b-4fbe-affd-3eef397c65c3",title:"Choose meal",price:46},{id:"af9b6c79-1078-4b6c-be27-0f8d02f1a2fd",title:"Choose seats",price:150},{id:"e30252e9-7bcc-4c1f-a4b5-c62ef1fd1aa8",title:"Upgrade to comfort class",price:132},{id:"42796162-3fba-4dde-81d4-4db8ffd25f7e",title:"Upgrade to business class",price:141},{id:"c10af2af-6fc2-4c63-a3fc-7bafa8147d25",title:"Add luggage",price:162},{id:"82b128ae-7358-44f7-9465-a213f536c4bc",title:"Business lounge",price:153}]},{type:"drive",offers:[{id:"49fcdeea-6358-4143-88cb-52d52aef3263",title:"With automatic transmission",price:33},{id:"58063ad8-405d-4ff2-9e5d-d17820cfbcbd",title:"With air conditioning",price:185}]},{type:"restaurant",offers:[{id:"82009787-deca-4eee-a426-bc83b497a6e6",title:"Choose live music",price:38},{id:"e0fd3848-6eed-4e81-9cd6-8b8108314f02",title:"Choose VIP area",price:188}]}],Z=document.querySelector(".trip-main"),E=Z.querySelector(".trip-controls__filters"),x=document.querySelector(".trip-events"),O=new class{#l=Array.from({length:4},D);#p=A;#n=S;get points(){return this.#l}getDestinations(){return this.#p}getOffers(){return this.#n}getDestinationsById(e){return this.getDestinations().find((t=>t.id===e))}getOffersByType(e){return this.getOffers().find((t=>t.type===e))}getOffersById(e,t){return this.getOffersByType(e).offers.filter((e=>t.find((t=>e.id===t))))}},P=new class{#u=null;#b=null;#h=new _;#m=[];constructor({eventsListContainer:e,pointsModel:t}){this.#u=e,this.#b=t}init(){this.#m=[...this.#b.points],e(this.#h,this.#u);for(let e=1;e<this.#m.length;e++)this.#v(this.#m[e])}#v(n){const i=e=>{"Escape"===e.key&&(e.preventDefault(),r(),document.removeEventListener("keydown",i))},a=new T({point:n,offers:[...this.#b.getOffersById(n.type,n.offers)],destination:this.#b.getDestinationsById(n.destination),onEditClick:()=>{t(s,a),document.addEventListener("keydown",i)}}),s=new C({point:n,allOffers:this.#b.getOffersByType(n.type),pointDestination:this.#b.getDestinationsById(n.destination),allDestination:this.#b.getDestinations(),onFormSubmit:()=>{r(),document.removeEventListener("keydown",i)}});function r(){t(a,s)}e(a,this.#h.element)}}({eventsListContainer:x,pointsModel:O});e(new class extends y{get template(){return'\n    <section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>\n'}},Z,"afterbegin"),e(new class extends y{get template(){return`\n    <form class="trip-filters" action="#" method="get">\n      ${j.map((e=>(e=>`\n  <div class="trip-filters__filter">\n    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e}">\n    <label class="trip-filters__filter-label" for="filter-${e}">${e}</label>\n  </div>\n`)(e))).join("").toLowerCase()}\n      <button class="visually-hidden" type="submit">Accept filter</button>\n    </form>\n`}},E),e(new class extends y{get template(){return`\n    <form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    ${k.map((e=>(e=>`\n  <div class="trip-sort__item  trip-sort__item--${e}">\n    <input id="sort-${e}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e}" checked>\n    <label class="trip-sort__btn" for="sort-${e}">${e}</label>\n  </div>\n`)(e))).join("").toLowerCase()}\n    </form>\n`}},x),P.init()})()})();
//# sourceMappingURL=bundle.5a81d2d400173ad8e66b.js.map