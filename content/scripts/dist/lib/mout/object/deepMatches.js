define(["./forOwn","../lang/isArray"],function(e,t){function n(e,t){var n=-1,r=e.length;while(++n<r)if(s(e[n],t))return!0;return!1}function r(e,t){var r=-1,i=t.length;while(++r<i)if(!n(e,t[r]))return!1;return!0}function i(t,n){var r=!0;return e(n,function(e,n){if(!s(t[n],e))return r=!1}),r}function s(e,n){return e&&typeof e=="object"?t(e)&&t(n)?r(e,n):i(e,n):e===n}return s});