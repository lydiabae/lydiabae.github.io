define(["socket-io"],function(e){(function(){var t=localStorage&&console&&console.log&&!0;t&&localStorage.getItem("/docpad-livereload/reloaded")==="yes"&&(localStorage.removeItem("/docpad-livereload/reloaded"),console.log("LiveReloaded at",new Date));var n=function(){var n=e.connect("/docpad-livereload");n.on("regenerated",function(){t&&localStorage.setItem("/docpad-livereload/reloaded","yes"),document.location.reload()})};typeof e!="undefined"?n():console.log("io is undefined")})()});