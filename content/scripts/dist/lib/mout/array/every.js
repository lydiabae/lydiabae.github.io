define(["../function/makeIterator_"],function(e){function t(t,n,r){n=e(n,r);var i=!0;if(t==null)return i;var s=-1,o=t.length;while(++s<o)if(!n(t[s],s,t)){i=!1;break}return i}return t});