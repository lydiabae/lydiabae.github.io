define(["./clone","../object/forOwn","./kindOf","./isPlainObject"],function(e,t,n,r){function i(t,r){switch(n(t)){case"Object":return s(t,r);case"Array":return o(t,r);default:return e(t)}}function s(e,n){if(r(e)){var s={};return t(e,function(e,t){this[t]=i(e,n)},s),s}return n?n(e):e}function o(e,t){var n=[],r=-1,s=e.length,o;while(++r<s)n[r]=i(e[r],t);return n}return i});