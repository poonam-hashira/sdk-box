import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},e.apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}var r=/*#__PURE__*/function(){function n(t){this.authToken=void 0,this.baseUrl=void 0,this.authToken=t.authToken,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return n.prototype.request=function(n,o){var r=""+this.baseUrl+n,i=e({},o,{headers:{"Content-Type":"application/json","api-key":this.authToken}});return t(r,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},n}(),i="photos",s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.getById=function(t){return this.request("/"+i+"/"+t)},o.getAll=function(){return this.request("/"+i)},o.save=function(t){return this.request("/"+i,{method:"POST",body:JSON.stringify(t)})},e}(r),u="comments",c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var o=e.prototype;return o.getById=function(t){return this.request("/"+u+"/"+t)},o.getAll=function(){return this.request("/"+u)},o.save=function(t){return this.request("/"+u,{method:"POST",body:JSON.stringify(t)})},e}(r),h=function(t){this.photos=void 0,this.comments=void 0,this.photos=new s(t),this.comments=new c(t)};export{h as SDKApplication};