!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="./",e(e.s=8)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(i=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")}));return[e].concat(a).concat([r]).join("\n")}var i,s,c;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e})).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<n.length;i++){var s=n[i];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="(".concat(s[2],") and (").concat(e,")")),t.push(s))}},t}},function(n,t,e){(function(e){var o,r,a;r=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(n,t,e){var o=new XMLHttpRequest;o.open("GET",n),o.responseType="blob",o.onload=function(){i(o.response,t,e)},o.onerror=function(){console.error("could not download file")},o.send()}function o(n){var t=new XMLHttpRequest;t.open("HEAD",n,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function r(n){try{n.dispatchEvent(new MouseEvent("click"))}catch(e){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),n.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof e&&e.global===e?e:void 0,i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(n,e,i){var s=a.URL||a.webkitURL,c=document.createElement("a");e=e||n.name||"download",c.download=e,c.rel="noopener","string"==typeof n?(c.href=n,c.origin===location.origin?r(c):o(c.href)?t(n,e,i):r(c,c.target="_blank")):(c.href=s.createObjectURL(n),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(n,e,a){if(e=e||n.name||"download","string"!=typeof n)navigator.msSaveOrOpenBlob(function(n,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob(["\ufeff",n],{type:n.type}):n}(n,a),e);else if(o(n))t(n,e,a);else{var i=document.createElement("a");i.href=n,i.target="_blank",setTimeout((function(){r(i)}))}}:function(n,e,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof n)return t(n,e,o);var i="application/octet-stream"===n.type,s=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&s)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var n=l.result;n=c?n:n.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=n:location=n,r=null},l.readAsDataURL(n)}else{var u=a.URL||a.webkitURL,d=u.createObjectURL(n);r?r.location=d:location.href=d,r=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});a.saveAs=i.saveAs=i,n.exports=i})?o.apply(t,r):o)||(n.exports=a)}).call(this,e(7))},function(n,t,e){var o=e(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};e(6)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){(t=n.exports=e(0)(!1)).i(e(4),""),t.i(e(5),""),t.push([n.i,"\n",""])},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"  \n/* width */\n::-webkit-scrollbar {\n    width: 10px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n    background: #888;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n}",""])},function(n,t,e){(t=n.exports=e(0)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap);",""]),t.push([n.i,":root {\n    --min-canvas-width: 360px;\n    --button-spacing: 0.75rem;\n    --bg-color: #111111;\n    --bg-raised-color: #333333;\n    --primary-text-color: white;\n    --secondary-text-color: #babbba;\n\n    --button-grid-columns: 3;\n}\n\nhtml,\nbody {\n    margin: 0px;\n    padding: 0px;\n    height: 100%;\n    display: block;\n}\n\nbody {\n    overflow-y: auto;\n}\n\ninput,\nbutton {\n    outline: none;\n    border: none;\n}\n\n/* Remove arrows from input */\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\nbody {\n    color: var(--primary-text-color);\n    background-color: var(--bg-color);\n\n    display: grid;\n\n    grid-template-columns: repeat(\n        auto-fit,\n        minmax(var(--min-canvas-width), 1fr)\n    );\n}\n\nbody > * {\n    width: 100%;\n    height: 100%;\n    max-height: 100vh;\n}\n\ndiv#canvases {\n    position: relative;\n    background-color: var(--bg-raised-color);\n}\n\ndiv#canvases > * {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n\n    box-shadow: 3px 3px 4px 1px black;\n}\n\nbody,\ndiv#canvases > * {\n    padding: 1rem;\n    box-sizing: border-box;\n}\n\ndiv#menu {\n    font-family: 'Roboto Mono', monospace;\n    padding: 0.5rem;\n    box-sizing: border-box;\n\n    display: flex;\n    justify-content: start;\n    flex-direction: column;\n}\n\ndiv#menu-title {\n    font-size: 2rem;\n    font-weight: bold;\n    width: 100%;\n    text-align: center;\n}\n\ndiv.menu-card {\n    background-color: var(--bg-raised-color);\n    padding: 0.75rem;\n    margin: 1rem;\n    border-radius: 0.3rem;\n\n    box-shadow: 3px 3px 4px 1px black;\n}\n\ndiv#menu-controls {\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: repeat(1fr, var(--button-grid-columns));\n    grid-gap: var(--button-spacing);\n}\n\ndiv.control-card > * {\n    box-shadow: 1px 1px 3px 0.5px var(--bg-color);\n    transition: filter 0.2s;\n}\n\nbutton#find-star,\ninput#find-star-input {\n    grid-column: 1 / calc(var(--button-grid-columns) + 1);\n    width: 100%;\n    box-sizing: border-box;\n}\n\ninput#find-star-input {\n    background: var(--bg-raised-color);\n    color: var(--primary-text-color);\n\n    border: 1px solid gray;\n    padding: 0.5rem;\n}\n\ninput#find-star-input:focus {\n    filter: brightness(1.3);\n}\n\nbutton.menu-control-button {\n    color: var(--primary-text-color);\n    background-color: #777777;\n}\n\nbutton.menu-control-button:hover {\n    filter: brightness(1.15);\n    transition: filter 1s;\n}\n\nbutton.menu-control-button:active {\n    filter: brightness(0.75);\n}\n\ndiv#export-data-card {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 1rem;\n}\n\ndiv#export-data-card > button {\n    padding: var(--button-spacing);\n}\n\ndiv#menu-data {\n    display: flex;\n    flex-direction: column;\n}\n\ndiv.data-row {\n    padding: 1rem;\n    background-color: var(--bg-raised-color);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\ndiv.data-row:not(:first-child) {\n    border-top: 1px solid rgba(128, 128, 128, 0.5);\n}\n",""])},function(n,t,e){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}();function s(n,t){for(var e=[],o={},r=0;r<n.length;r++){var a=n[r],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):e.push(o[i]={id:i,parts:[s]})}return e}function c(n,t){for(var e=0;e<n.length;e++){var o=n[e],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(b(o.parts[i],t))}else{for(var s=[];i<o.parts.length;i++)s.push(b(o.parts[i],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function l(n){var t=document.createElement("style");if(void 0===n.attributes.nonce){var o=e.nc;o&&(n.attributes.nonce=o)}if(Object.keys(n.attributes).forEach((function(e){t.setAttribute(e,n.attributes[e])})),"function"==typeof n.insert)n.insert(t);else{var r=i(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function f(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=d(t,r);else{var a=document.createTextNode(r),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function p(n,t,e){var o=e.css,r=e.media,a=e.sourceMap;if(r&&n.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var v=null,m=0;function b(n,t){var e,o,r;if(t.singleton){var a=m++;e=v||(v=l(t)),o=f.bind(null,e,a,!1),r=f.bind(null,e,a,!0)}else e=l(t),o=p.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=s(n,t);return c(e,t),function(n){for(var o=[],a=0;a<e.length;a++){var i=e[a],l=r[i.id];l&&(l.refs--,o.push(l))}n&&c(s(n,t),t);for(var u=0;u<o.length;u++){var d=o[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete r[d.id]}}}}},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){"use strict";e.r(t);e(2);var o=function(n,t){return n+Math.random()*(t-n)};function r(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a,i,s,c,l=function(n){return{mass:o.apply(void 0,r(n.mass)),type:n.type}},u=function(n){var t=o(0,100),e=!0,r=!1,a=void 0;try{for(var i,s=n.bounds[Symbol.iterator]();!(e=(i=s.next()).done);e=!0){var c=i.value;if(t>c.value)return l(c)}}catch(n){r=!0,a=n}finally{try{e||null==s.return||s.return()}finally{if(r)throw a}}return l(n.defaultBound)},d=function(n,t){var e,o,r;do{r=(e=2*Math.random()-1)*e+(o=2*Math.random()-1)*o}while(r>=1);return n+t*(e*(r=Math.sqrt(-2*Math.log(r)/r)))},f=function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return o?n(t,e*Math.PI/180,!1):[t*Math.cos(e),t*Math.sin(e)]},p=(a=3e3,i=4e4,c=!1,function(){var n;if(c)n=s,c=!1;else{var t,e,o;do{o=(t=2*Math.random()-1)*t+(e=2*Math.random()-1)*e}while(o>=1);n=t*(o=Math.sqrt(-2*Math.log(o)/o)),s=e*o,c=!0}var r=a+i*n;return r>0?r:-r}),v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unknown object",t=arguments.length>1?arguments[1]:void 0,e=p(),r=[0,0];if(e<=t.coreRadius){var a=o(0,2*Math.PI);r=f(e,a,!1)}else r=f(e,360*Math.floor(Math.random()*t.sides)/t.sides+e/83e3*t.twirlfactor-t.twirlfactor+83e3*d(0,t.strictness)/e);return{position:r,name:n}},m=e(1),b=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"galaxy-map",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"json",o=new Blob([n]);Object(m.saveAs)(o,"".concat(t,".").concat(e))},h={canvases:{stars:document.getElementById("star-canvas"),circle:document.getElementById("circle-canvas")},buttons:{downloadJson:document.getElementById("download-json"),downloadCsv:document.getElementById("download-csv"),nextStar:document.getElementById("next-star"),previousStar:document.getElementById("previous-star"),findStar:document.getElementById("find-star"),randomStar:document.getElementById("random-star")},inputs:{starIndex:document.getElementById("find-star-input")},fields:{name:document.getElementById("star-name"),mass:document.getElementById("star-mass"),type:document.getElementById("star-type"),positionX:document.getElementById("star-position-x"),positionY:document.getElementById("star-position-y")}},g=function(n,t,e){for(var o=[],r=0;r<t;r++){var a=u(n);o.push({data:v("Random star ".concat(r),e),stats:a})}return o}({bounds:[{value:76.54,type:"M",mass:[.08,.45]},{value:12.1,type:"K",mass:[.45,.8]},{value:7.6,type:"G",mass:[.8,1.04]},{value:3,type:"F",mass:[1.04,1.4]},{value:.6,type:"A",mass:[1.4,2.1]},{value:.13,type:"B",mass:[2.1,16]}],defaultBound:{type:"O",mass:[16,100]}},5e5,{twirlfactor:300,coreRadius:3e4,strictness:30,sides:2}),y={stars:h.canvases.stars.getContext("2d"),circle:h.canvases.circle.getContext("2d")},w=h.canvases.circle.getBoundingClientRect(),x=w.width,M=w.height;h.canvases.circle.width=x,h.canvases.circle.height=M,h.canvases.stars.width=x,h.canvases.stars.height=M;!function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:500,a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];n.fillStyle="black",n.fillRect(0,0,t,e),n.save();var i=.7;n.translate(t/2,e/2),a&&(n.globalCompositeOperation="lighter"),n.fillStyle=a?"#333333":"white";var s=!0,c=!1,l=void 0;try{for(var u,d=o[Symbol.iterator]();!(s=(u=d.next()).done);s=!0){var f=u.value;n.fillRect(f.data.position[0]/r,f.data.position[1]/r,i,i)}}catch(n){c=!0,l=n}finally{try{s||null==d.return||d.return()}finally{if(c)throw l}}n.restore()}(y.stars,x,M,g,500,!1),h.buttons.downloadJson.onclick=function(){b(JSON.stringify(g))},h.buttons.downloadCsv.onclick=function(){b(function(n){var t="Name,Type,Mass,X,Y\r\n",e=!0,o=!1,r=void 0;try{for(var a,i=n[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var s=a.value;t+='"'.concat(s.data.name,'",').concat(s.stats.type,",").concat(s.stats.mass,",").concat(s.data.position[0],",").concat(s.data.position[1],"\n")}}catch(n){o=!0,r=n}finally{try{e||null==i.return||i.return()}finally{if(o)throw r}}return t}(g),"galaxy-map","csv")};var k,S,j,E,R=function(n,t,e,o,r){return function(a){n.fillStyle="black",n.strokeStyle="red",n.lineWidth="5",n.clearRect(0,0,t,e),n.save(),n.translate(t/2,e/2),n.beginPath(),n.arc(a[0]/r,a[1]/r,o,0,2*Math.PI),n.stroke(),n.restore()}}(y.circle,x,M,20,500),B=(j=function(n,t,e){var o=t.fields;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=n[t];return o.name.innerHTML=r.data.name,o.positionX.innerHTML=r.data.position[0],o.positionY.innerHTML=r.data.position[1],o.mass.innerHTML=r.stats.mass,o.type.innerHTML=r.stats.type,e(r.data.position),t}}(k=g,S=h,R),E=j(),{increase:function(){E=j((E+1)%k.length)},decrease:function(){E=j((k.length+E-1)%k.length)},find:function(){try{var n=(Number(S.inputs.starIndex.value)%k.length+k.length)%k.length;E=j(n)}catch(n){}},random:function(){var n,t;E=j((n=0,t=k.length,Math.floor(o(n,t))))}});h.buttons.nextStar.onclick=B.increase,h.buttons.previousStar.onclick=B.decrease,h.buttons.findStar.onclick=B.find,h.buttons.randomStar.onclick=B.random}]);