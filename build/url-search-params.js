/*! (C) WebReflection Mit Style License */
var URLSearchParams=URLSearchParams||function(){"use strict";function e(e){return encodeURIComponent(e).replace(i,u)}function t(e){return decodeURIComponent(e.replace(s," "))}function n(e){this[a]=Object.create(null);if(!e)return;for(var n,r,i=(e||"").split("&"),s=0,o=i.length;s<o;s++)r=i[s],n=r.indexOf("="),-1<n&&this.append(t(r.slice(0,n)),t(r.slice(n+1)))}var r=n.prototype,i=/[!'\(\)~]|%20|%00/g,s=/\+/g,o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},u=function(e){return o[e]},a="__URLSearchParams__:"+Math.random();r.append=function(t,n){var r=this[a];t in r?r[t].push(""+n):r[t]=[""+n]},r.delete=function(t){delete this[a][t]},r.get=function(t){var n=this[a];return t in n?n[t][0]:null},r.getAll=function(t){var n=this[a];return t in n?n[t].slice(0):[]},r.has=function(t){return t in this[a]},r.set=function(t,n){this[a][t]=[""+n]},r.toJSON=function(){return{}},r.toString=function w(){var t=this[a],n=[],r,i,s,o;for(i in t){s=e(i);for(r=0,o=t[i];r<o.length;r++)n.push(s+"="+e(o[r]))}return n.join("&")};var f=HTMLAnchorElement,l=f.prototype,c=Object.defineProperty,h=Object.getOwnPropertyDescriptor,p=h(l,"searchParams"),d=h(l,"href"),v=h(l,"search"),m=function(){function e(e,t){r.append.call(this,e,t),e=this.toString(),v.set.call(this._a,e?"?"+e:"")}function t(e){r.delete.call(this,e),e=this.toString(),v.set.call(this._a,e?"?"+e:"")}function n(e,t){r.set.call(this,e,t),e=this.toString(),v.set.call(this._a,e?"?"+e:"")}return function(r,i){return r.append=e,r.delete=t,r.set=n,c(r,"_a",{configurable:!0,writable:!0,value:i})}}(),g=function(e,t){return c(e,"_searchParams",{configurable:!0,writable:!0,value:m(t,e)}),t},y=function(e){var t=e.append;e.append=r.append,n.call(e,e._a.search.slice(1)),e.append=t},b=function(e){if(!(e instanceof f))throw new TypeError("'searchParams' accessed on an object that does not implement interface HTMLAnchorElement.")};return!p&&v&&Object.defineProperties(l,{href:{get:function(){return d.get.call(this)},set:function(e){var t=this._searchParams;d.set.call(this,e),t&&y(t)}},search:{get:function(){return v.get.call(this)},set:function(e){var t=this._searchParams;v.set.call(this,e),t&&y(t)}},searchParams:{get:function(){return b(this),this._searchParams||g(this,new n(this.search.slice(1)))},set:function(e){b(this),g(this,e)}}}),n}();