define([],function(){function e(e,t,n){e=e||"";var r=new RegExp("(\\?|&)"+t+"=[^&]*"),i=t+"="+encodeURIComponent(n);return r.test(e)?e.replace(r,"$1"+i):(e.indexOf("?")===-1&&(e+="?"),e.indexOf("=")!==-1&&(e+="&"),e+i)}return e});