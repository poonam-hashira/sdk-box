!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("isomorphic-unfetch")):"function"==typeof define&&define.amd?define(["exports","isomorphic-unfetch"],e):e((t||self).sdkTscMain={},t.isomorphicUnfetch)}(this,function(t,e){function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/n(e);function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r.apply(this,arguments)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}var u=/*#__PURE__*/function(){function t(t){this.authToken=void 0,this.baseUrl=void 0,this.authToken=t.authToken,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return t.prototype.request=function(t,e){var n=""+this.baseUrl+t,i=r({},e,{headers:{"Content-Type":"application/json","api-key":this.authToken}});return o.default(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},t}(),c="photos",f=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.getById=function(t){return this.request("/"+c+"/"+t)},n.getAll=function(){return this.request("/"+c)},n.save=function(t){return this.request("/"+c,{method:"POST",body:JSON.stringify(t)})},e}(u),p="comments",h=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}i(e,t);var n=e.prototype;return n.getById=function(t){return this.request("/"+p+"/"+t)},n.getAll=function(){return this.request("/"+p)},n.save=function(t){return this.request("/"+p,{method:"POST",body:JSON.stringify(t)})},e}(u);t.SDKApplication=function(t){this.photos=void 0,this.comments=void 0,this.photos=new f(t),this.comments=new h(t)}});
