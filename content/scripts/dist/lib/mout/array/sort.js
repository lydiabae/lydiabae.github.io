define([],function(){function e(r,i){if(r==null)return[];if(r.length<2)return r;i==null&&(i=t);var s,o,u;return s=~~(r.length/2),o=e(r.slice(0,s),i),u=e(r.slice(s,r.length),i),n(o,u,i)}function t(e,t){return e<t?-1:e>t?1:0}function n(e,t,n){var r=[];while(e.length&&t.length)n(e[0],t[0])<=0?r.push(e.shift()):r.push(t.shift());return e.length&&r.push.apply(r,e),t.length&&r.push.apply(r,t),r}return e});