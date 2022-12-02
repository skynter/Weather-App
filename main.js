(()=>{"use strict";async function e(){const e=document.getElementById("myCity").value,t=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e}&appid=f47919da3b9f25258951e3c43233925a`),n=await t.json();return{myLat:n[0].lat,myLong:n[0].lon}}function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){return t(1,arguments),e instanceof Date||"object"===n(e)&&"[object Date]"===Object.prototype.toString.call(e)}function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e){t(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function o(e){if(t(1,arguments),!r(e)&&"number"!=typeof e)return!1;var n=i(e);return!isNaN(Number(n))}function u(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function s(e,n){t(2,arguments);var r=i(e).getTime(),a=u(n);return new Date(r+a)}function c(e,n){t(2,arguments);var r=u(n);return s(e,-r)}var d=864e5;function l(e){t(1,arguments);var n=1,r=i(e),a=r.getUTCDay(),o=(a<n?7:0)+a-n;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function m(e){t(1,arguments);var n=i(e),r=n.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var o=l(a),u=new Date(0);u.setUTCFullYear(r,0,4),u.setUTCHours(0,0,0,0);var s=l(u);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function h(e){t(1,arguments);var n=m(e),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var a=l(r);return a}var f=6048e5,y={};function g(){return y}function w(e,n){var r,a,o,s,c,d,l,m;t(1,arguments);var h=g(),f=u(null!==(r=null!==(a=null!==(o=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==a?a:null===(l=h.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==r?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var y=i(e),w=y.getUTCDay(),p=(w<f?7:0)+w-f;return y.setUTCDate(y.getUTCDate()-p),y.setUTCHours(0,0,0,0),y}function p(e,n){var r,a,o,s,c,d,l,m;t(1,arguments);var h=i(e),f=h.getUTCFullYear(),y=g(),p=u(null!==(r=null!==(a=null!==(o=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:y.firstWeekContainsDate)&&void 0!==a?a:null===(l=y.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(f+1,0,p),v.setUTCHours(0,0,0,0);var b=w(v,n),T=new Date(0);T.setUTCFullYear(f,0,p),T.setUTCHours(0,0,0,0);var M=w(T,n);return h.getTime()>=b.getTime()?f+1:h.getTime()>=M.getTime()?f:f-1}function v(e,n){var r,a,i,o,s,c,d,l;t(1,arguments);var m=g(),h=u(null!==(r=null!==(a=null!==(i=null!==(o=null==n?void 0:n.firstWeekContainsDate)&&void 0!==o?o:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==i?i:m.firstWeekContainsDate)&&void 0!==a?a:null===(d=m.locale)||void 0===d||null===(l=d.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==r?r:1),f=p(e,n),y=new Date(0);y.setUTCFullYear(f,0,h),y.setUTCHours(0,0,0,0);var v=w(y,n);return v}var b=6048e5;function T(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const M=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===t?r%100:r,t.length)},L=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):T(n+1,2)},S=function(e,t){return T(e.getUTCDate(),t.length)},H=function(e,t){return T(e.getUTCHours()%12||12,t.length)},C=function(e,t){return T(e.getUTCHours(),t.length)},D=function(e,t){return T(e.getUTCMinutes(),t.length)},q=function(e,t){return T(e.getUTCSeconds(),t.length)},k=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),t.length)};function x(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+T(i,2)}function $(e,t){return e%60==0?(e>0?"-":"+")+T(Math.abs(e)/60,2):P(e,t)}function P(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+T(Math.floor(a/60),2)+n+T(a%60,2)}const W={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return M(e,t)},Y:function(e,t,n,r){var a=p(e,r),i=a>0?a:1-a;return"YY"===t?T(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):T(i,t.length)},R:function(e,t){return T(m(e),t.length)},u:function(e,t){return T(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return L(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,r,a){var o=function(e,n){t(1,arguments);var r=i(e),a=w(r,n).getTime()-v(r,n).getTime();return Math.round(a/b)+1}(e,a);return"wo"===n?r.ordinalNumber(o,{unit:"week"}):T(o,n.length)},I:function(e,n,r){var a=function(e){t(1,arguments);var n=i(e),r=l(n).getTime()-h(n).getTime();return Math.round(r/f)+1}(e);return"Io"===n?r.ordinalNumber(a,{unit:"week"}):T(a,n.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):S(e,t)},D:function(e,n,r){var a=function(e){t(1,arguments);var n=i(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var a=n.getTime(),o=r-a;return Math.floor(o/d)+1}(e);return"Do"===n?r.ordinalNumber(a,{unit:"dayOfYear"}):T(a,n.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return T(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return T(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return T(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return H(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):C(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):T(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):T(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):D(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):q(e,t)},S:function(e,t){return k(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return $(a);case"XXXX":case"XX":return P(a);default:return P(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return $(a);case"xxxx":case"xx":return P(a);default:return P(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+x(a,":");default:return"GMT"+P(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+x(a,":");default:return"GMT"+P(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return T(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return T((r._originalDate||e).getTime(),t.length)}};var U=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},E=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},A={p:E,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return U(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",U(a,t)).replace("{{time}}",E(i,t))}};const Y=A;function F(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var j=["D","DD"],N=["YY","YYYY"];function O(e){return-1!==j.indexOf(e)}function I(e){return-1!==N.indexOf(e)}function z(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Q(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var G,_={date:Q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},R={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function X(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function J(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?K(s,(function(e){return e.test(u)})):V(s,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var d=t.slice(u.length);return{value:o,rest:d}}}function V(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function K(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}const Z={code:"en-US",formatDistance:function(e,t,n){var r,a=B[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:_,formatRelative:function(e,t,n,r){return R[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(G={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(G.matchPattern);if(!n)return null;var r=n[0],a=e.match(G.parsePattern);if(!a)return null;var i=G.valueCallback?G.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;var o=e.slice(r.length);return{value:i,rest:o}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var ee=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,te=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ne=/^'([^]*?)'?$/,re=/''/g,ae=/[a-zA-Z]/;function ie(e,n,r){var a,s,d,l,m,h,f,y,w,p,v,b,T,M,L,S,H,C;t(2,arguments);var D=String(n),q=g(),k=null!==(a=null!==(s=null==r?void 0:r.locale)&&void 0!==s?s:q.locale)&&void 0!==a?a:Z,x=u(null!==(d=null!==(l=null!==(m=null!==(h=null==r?void 0:r.firstWeekContainsDate)&&void 0!==h?h:null==r||null===(f=r.locale)||void 0===f||null===(y=f.options)||void 0===y?void 0:y.firstWeekContainsDate)&&void 0!==m?m:q.firstWeekContainsDate)&&void 0!==l?l:null===(w=q.locale)||void 0===w||null===(p=w.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==d?d:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var $=u(null!==(v=null!==(b=null!==(T=null!==(M=null==r?void 0:r.weekStartsOn)&&void 0!==M?M:null==r||null===(L=r.locale)||void 0===L||null===(S=L.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==T?T:q.weekStartsOn)&&void 0!==b?b:null===(H=q.locale)||void 0===H||null===(C=H.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==v?v:0);if(!($>=0&&$<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var P=i(e);if(!o(P))throw new RangeError("Invalid time value");var U=F(P),E=c(P,U),A={firstWeekContainsDate:x,weekStartsOn:$,locale:k,_originalDate:P},j=D.match(te).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Y[t])(e,k.formatLong):e})).join("").match(ee).map((function(t){if("''"===t)return"'";var a=t[0];if("'"===a)return oe(t);var i=W[a];if(i)return null!=r&&r.useAdditionalWeekYearTokens||!I(t)||z(t,n,String(e)),null!=r&&r.useAdditionalDayOfYearTokens||!O(t)||z(t,n,String(e)),i(E,t,k.localize,A);if(a.match(ae))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("");return j}function oe(e){var t=e.match(ne);return t?t[1].replace(re,"'"):e}function ue(e){t(1,arguments);var n=i(e),r=n.getHours();return r}async function se(){const t=await e(),n=t.myLat,r=t.myLong,a=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${n}&lon=${r}&units=metric&appid=f47919da3b9f25258951e3c43233925a`),i=await a.json();return{myHour:[ue(new Date(i.list[0].dt_txt)),ue(new Date(i.list[1].dt_txt)),ue(new Date(i.list[2].dt_txt)),ue(new Date(i.list[3].dt_txt)),ue(new Date(i.list[4].dt_txt)),ue(new Date(i.list[5].dt_txt)),ue(new Date(i.list[6].dt_txt))],myTemperature:[`${i.list[0].main.temp}°C`,`${i.list[1].main.temp}°C`,`${i.list[2].main.temp}°C`,`${i.list[3].main.temp}°C`,`${i.list[4].main.temp}°C`,`${i.list[5].main.temp}°C`,`${i.list[6].main.temp}°C`],myWindSpeed:[`${i.list[0].wind.speed} meter/sec`,`${i.list[1].wind.speed} meter/sec`,`${i.list[2].wind.speed} meter/sec`,`${i.list[3].wind.speed} meter/sec`,`${i.list[4].wind.speed} meter/sec`,`${i.list[5].wind.speed} meter/sec`,`${i.list[6].wind.speed} meter/sec`],myIcon:[i.list[0].weather[0].icon,i.list[1].weather[0].icon,i.list[2].weather[0].icon,i.list[3].weather[0].icon,i.list[4].weather[0].icon,i.list[5].weather[0].icon,i.list[6].weather[0].icon]}}async function ce(){const n=await e(),r=n.myLat,a=n.myLong,o=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${r}&lon=${a}&units=metric&appid=f47919da3b9f25258951e3c43233925a`),u=await o.json();function s(e){let n=function(e){return t(1,arguments),i(e).getDay()}(new Date(u.list[e].dt_txt)),r="";return 0==n?r="Sunday":1==n?r="Monday":2==n?r="Tuesday":3==n?r="Wednesday":4==n?r="Thirsday":5==n?r="Friday":6==n&&(r="Saturday"),r}return{myDay:[s(0),s(8),s(16),s(24),s(32),s(39)],myDayWindSpeed:[`${u.list[0].wind.speed} meter/sec`,`${u.list[8].wind.speed} meter/sec`,`${u.list[16].wind.speed} meter/sec`,`${u.list[24].wind.speed} meter/sec`,`${u.list[32].wind.speed} meter/sec`,`${u.list[39].wind.speed} meter/sec`],myDayTemperature:[`${u.list[0].main.temp}°C`,`${u.list[8].main.temp}°C`,`${u.list[16].main.temp}°C`,`${u.list[24].main.temp}°C`,`${u.list[32].main.temp}°C`,`${u.list[39].main.temp}°C`],myIcon:[u.list[0].weather[0].icon,u.list[8].weather[0].icon,u.list[16].weather[0].icon,u.list[24].weather[0].icon,u.list[32].weather[0].icon,u.list[39].weather[0].icon]}}function de(){document.querySelector(".main-heading1").innerHTML="Le projet",document.querySelector(".myspan").innerHTML="d'application Météo",document.querySelector(".main-heading2").innerHTML="TOP",document.querySelectorAll(".iswind").forEach((function(e){const t=`${e.innerHTML.slice(0,4)} mètre/sec`;e.innerHTML=t})),document.querySelector("label").innerHTML="Ville",document.getElementById("feelsLikeTemp").innerHTML="Temp Ressentie",document.getElementById("windSpeed").innerHTML="Vitesse du vent",document.getElementById("humidity").innerHTML="Humidité";for(let e=0;e<=5;e++){const t=document.querySelector(`.day${e}`);"Monday"==t.innerHTML?t.innerHTML="Lundi":"Tuesday"==t.innerHTML?t.innerHTML="Mardi":"Wednesday"==t.innerHTML?t.innerHTML="Mercredi":"Thirsday"==t.innerHTML?t.innerHTML="Jeudi":"Friday"==t.innerHTML?t.innerHTML="Vendredi":"Saturday"==t.innerHTML?t.innerHTML="Samedi":"Sunday"==t.innerHTML&&(t.innerHTML="Dimanche")}for(let e=0;e<=6;e++){const t=document.querySelector(`.myTime${e}`);"12 pm"==t.innerHTML?t.innerHTML="12h":"3 pm"==t.innerHTML?t.innerHTML="15h":"6 pm"==t.innerHTML?t.innerHTML="18h":"9 pm"==t.innerHTML?t.innerHTML="21h":"12 am"==t.innerHTML?t.innerHTML="24h":"3 am"==t.innerHTML?t.innerHTML="3h":"6 am"==t.innerHTML?t.innerHTML="6h":"9 am"==t.innerHTML&&(t.innerHTML="9h")}document.querySelector(".next-days").innerHTML="La météo pour les 5 prochains jours",document.querySelector(".next-hours").innerHTML="La météo pour les prochaines heures",async function(){const t=await e(),n=t.myLat,r=t.myLong,a=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${r}&lang=fr&appid=f47919da3b9f25258951e3c43233925a`),i=await a.json(),o=document.querySelector(".descp"),u=i.weather[0].description.charAt(0).toUpperCase()+i.weather[0].description.slice(1);o.innerHTML=u}(),function(){let e=ie(new Date,"EEEE"),t=ie(new Date,"d"),n=ie(new Date,"MMMM");"Monday"==e?e="Lundi":"Tuesday"==e?e="Mardi":"Wednesday"==e?e="Mercredi":"Thursday"==e?e="Jeudi":"Friday"==e?e="Vendredi":"Saturday"==e?e="Samedi":"Sunday"==e&&(e="Dimanche"),"December"==n?n="Décembre":"January"==n?n="Janvier":"February"==n?n="Février":"March"==n&&(n="Mars");let r=e+" "+t+" "+n+" 2022";document.querySelector(".todayDate").innerHTML=r}()}function le(){document.querySelectorAll(".istemp").forEach((function(e){if(7==e.innerHTML.length){const t=`${(1.8*+e.innerHTML.slice(0,5)+32).toFixed(2)}°F`;e.innerHTML=t}else if(6==e.innerHTML.length){const t=`${(1.8*+e.innerHTML.slice(0,4)+32).toFixed(2)}°F`;e.innerHTML=t}}))}!function(){const e=document.querySelector(".fa.fa-snowflake-o"),t=document.querySelector(".app-body"),n=document.querySelector(".block1"),r=document.querySelector(".block2"),a=document.querySelector(".block3");e.addEventListener("click",(function(){const i=document.querySelector(".side-bar");"side-bar disabled"==i.classList?(i.classList.remove("disabled"),e.classList.remove("disabled"),t.classList.remove("disabled"),n.classList.remove("disabled"),r.classList.remove("disabled"),a.classList.remove("disabled")):(i.classList.add("disabled"),e.classList.add("disabled"),t.classList.add("disabled"),n.classList.add("disabled"),r.classList.add("disabled"),a.classList.add("disabled"))}))}(),async function(){document.querySelector(".fa.fa-search").addEventListener("click",(async function(){const t=document.getElementById("myCity").value;0!=/^[a-zA-Z\s]*$/.test(t)?async function(){document.getElementById("myCity").removeAttribute("style"),document.querySelector(".error-message").innerHTML="";const t=await async function(){const t=await e(),n=t.myLat,r=t.myLong,a=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${r}&units=metric&appid=f47919da3b9f25258951e3c43233925a`),i=await a.json(),o=ie(new Date,"PPPP"),u=i.weather[0].description.charAt(0).toUpperCase()+i.weather[0].description.slice(1);return{myTemperature:`${i.main.temp}°C`,myDescription:u,myCity:i.name,myDate:o,myFeelsLikeTemp:`${i.main.feels_like}°C`,myWindSpeed:`${i.wind.speed} meter/sec`,myHumidity:`${i.main.humidity}%`,myWeatherIcon:i.weather[0].icon}}(),n=await se(),r=await ce();document.querySelector(".temp").innerHTML=t.myTemperature,document.querySelector(".descp").innerHTML=t.myDescription,document.querySelector(".theCity").innerHTML=t.myCity,document.querySelector(".todayDate").innerHTML=t.myDate,document.querySelector(".feels-like").innerHTML=t.myFeelsLikeTemp,document.querySelector(".wind-speed").innerHTML=t.myWindSpeed,document.querySelector(".humidity").innerHTML=t.myHumidity,document.querySelector(".weather-icon").setAttribute("src",`http://openweathermap.org/img/wn/${t.myWeatherIcon}@2x.png`);const a=document.querySelector(".weather-img"),i=document.querySelector(".block1");t.myDescription.includes("rain")||t.myDescription.includes("drizzle")||t.myDescription.includes("thunderstorm")?(a.setAttribute("src","images/rain.png"),i.setAttribute("style","background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-rain.jpg)")):t.myDescription.includes("Clear")?(a.setAttribute("src","images/cloudy.png"),i.setAttribute("style","background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/clear-weather.jpg)")):(t.myDescription.includes("clouds"),a.setAttribute("src","images/clouds.png"),i.setAttribute("style","background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-weather1.jpg)"));for(let e=0;e<=6;e++){const t=document.querySelector(`.myTime${e}`),r=n.myHour[e];let a="";0==r?a="12 am":3==r?a="3 am":6==r?a="6 am":9==r?a="9 am":12==r?a="12 pm":15==r?a="3 pm":18==r?a="6 pm":21==r&&(a="9 pm"),t.innerHTML=a,document.querySelector(`.temp${e}`).innerHTML=n.myTemperature[e],document.querySelector(`.wind${e}`).innerHTML=n.myWindSpeed[e],document.querySelector(`.hourlyIcon${e}`).setAttribute("src",`http://openweathermap.org/img/wn/${n.myIcon[e]}@2x.png`)}for(let e=0;e<=5;e++)document.querySelector(`.day${e}`).innerHTML=r.myDay[e],document.querySelector(`.daytemp${e}`).innerHTML=r.myDayTemperature[e],document.querySelector(`.daywind${e}`).innerHTML=r.myDayWindSpeed[e],document.querySelector(`.dailyIcon${e}`).setAttribute("src",`http://openweathermap.org/img/wn/${r.myIcon[e]}@2x.png`);"french active"==document.querySelector(".french").classList&&de(),"fahrenheit active"==document.querySelector(".fahrenheit").classList&&le()}():(document.getElementById("myCity").setAttribute("style","border: 2px solid red"),document.querySelector(".error-message").innerHTML="You did not insert a valid city ! ")}))}(),async function(){document.getElementById("myCity").value="Rabat";const e=await fetch("https://api.openweathermap.org/data/2.5/weather?lat=34.022405&lon=-6,834543&units=metric&appid=f47919da3b9f25258951e3c43233925a"),t=await e.json(),n=await se(),r=await ce(),a=ie(new Date,"PPPP");document.querySelector(".temp").innerHTML=`${t.main.temp}°C`;const i=document.querySelector(".descp"),o=t.weather[0].description.charAt(0).toUpperCase()+t.weather[0].description.slice(1);i.innerHTML=o,document.querySelector(".theCity").innerHTML=t.name,document.querySelector(".todayDate").innerHTML=a,document.querySelector(".feels-like").innerHTML=`${t.main.feels_like}°C`,document.querySelector(".wind-speed").innerHTML=`${t.wind.speed} meter/sec`,document.querySelector(".humidity").innerHTML=`${t.main.humidity}%`;const u=document.querySelector(".weather-icon"),s=t.weather[0].icon;u.setAttribute("src",`http://openweathermap.org/img/wn/${s}@2x.png`);const c=document.querySelector(".weather-img"),d=document.querySelector(".block1");t.weather[0].description.includes("rain")||t.weather[0].description.includes("drizzle")||t.weather[0].description.includes("thunderstorm")?(c.setAttribute("src","images/rain.png"),d.setAttribute("style","background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-rain.jpg)")):t.weather[0].description.includes("clear")?(c.setAttribute("src","images/cloudy.png"),d.setAttribute("style","background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/clear-weather.jpg)")):(t.weather[0].description.includes("clouds"),c.setAttribute("src","images/clouds.png"),d.setAttribute("style","background-image:linear-gradient(to bottom, rgba(0,0,0, 0.35), rgba(0,0,0, 0.35)), url(images/my-weather1.jpg)"));for(let e=0;e<=6;e++){const t=document.querySelector(`.myTime${e}`),r=n.myHour[e];let a="";0==r?a="12 am":3==r?a="3 am":6==r?a="6 am":9==r?a="9 am":12==r?a="12 pm":15==r?a="3 pm":18==r?a="6 pm":21==r&&(a="9 pm"),t.innerHTML=a,document.querySelector(`.temp${e}`).innerHTML=n.myTemperature[e],document.querySelector(`.wind${e}`).innerHTML=n.myWindSpeed[e],document.querySelector(`.hourlyIcon${e}`).setAttribute("src",`http://openweathermap.org/img/wn/${n.myIcon[e]}@2x.png`)}for(let e=0;e<=5;e++)document.querySelector(`.day${e}`).innerHTML=r.myDay[e],document.querySelector(`.daytemp${e}`).innerHTML=r.myDayTemperature[e],document.querySelector(`.daywind${e}`).innerHTML=r.myDayWindSpeed[e],document.querySelector(`.dailyIcon${e}`).setAttribute("src",`http://openweathermap.org/img/wn/${r.myIcon[e]}@2x.png`)}(),function(){const e=document.querySelector(".celcius"),t=document.querySelector(".fahrenheit");e.addEventListener("click",(function(){"celcius active"!=e.classList&&("celcius"==e.classList&&document.querySelectorAll(".istemp").forEach((function(e){const t=`${(5/9*(+e.innerHTML.slice(0,5)-32)).toFixed(2)}°C`;e.innerHTML=t})),e.classList.add("active"),t.classList.remove("active"))})),t.addEventListener("click",(function(){t.classList.add("active"),e.classList.remove("active"),le()}))}(),function(){const t=document.querySelector(".english"),n=document.querySelector(".french");t.addEventListener("click",(function(){"english active"!=t.classList&&("english"==t.classList&&function(){document.querySelector(".main-heading1").innerHTML="This is the Top",document.querySelector(".myspan").innerHTML="Weather App",document.querySelector(".main-heading2").innerHTML="Project",document.querySelectorAll(".iswind").forEach((function(e){const t=`${e.innerHTML.slice(0,4)} meter/sec`;e.innerHTML=t})),document.querySelector("label").innerHTML="City",document.getElementById("feelsLikeTemp").innerHTML="Feels Like Temp",document.getElementById("windSpeed").innerHTML="Wind Speed",document.getElementById("humidity").innerHTML="Humidity";for(let e=0;e<=5;e++){const t=document.querySelector(`.day${e}`);"Lundi"==t.innerHTML?t.innerHTML="Monday":"Mardi"==t.innerHTML?t.innerHTML="Tuesday":"Mercredi"==t.innerHTML?t.innerHTML="Wednesday":"Jeudi"==t.innerHTML?t.innerHTML="Thirsday":"Vendredi"==t.innerHTML?t.innerHTML="Friday":"Samedi"==t.innerHTML?t.innerHTML="Saturay":"Dimanche"==t.innerHTML&&(t.innerHTML="Sunday")}for(let e=0;e<=6;e++){const t=document.querySelector(`.myTime${e}`);"12h"==t.innerHTML?t.innerHTML="12 pm":"15h"==t.innerHTML?t.innerHTML="3 pm":"18h"==t.innerHTML?t.innerHTML="6 pm":"21h"==t.innerHTML?t.innerHTML="9 pm":"24h"==t.innerHTML?t.innerHTML="12 am":"3h"==t.innerHTML?t.innerHTML="3 am":"6h"==t.innerHTML?t.innerHTML="6 am":"9h"==t.innerHTML&&(t.innerHTML="9 am")}document.querySelector(".next-days").innerHTML="The weather For The Next 5 Days",document.querySelector(".next-hours").innerHTML="The Weather For The Next Hours",async function(){const t=await e(),n=t.myLat,r=t.myLong,a=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${r}&appid=f47919da3b9f25258951e3c43233925a`),i=await a.json(),o=document.querySelector(".descp"),u=i.weather[0].description.charAt(0).toUpperCase()+i.weather[0].description.slice(1);o.innerHTML=u}(),function(){const e=ie(new Date,"PPPP");document.querySelector(".todayDate").innerHTML=e}()}(),t.classList.add("active"),n.classList.remove("active"))})),n.addEventListener("click",(function(){n.classList.add("active"),t.classList.remove("active"),de()}))}()})();