(function(e){var t=e("<b/>");e.subscribe=function(n,r){function i(){return r.apply(this,Array.prototype.slice.call(arguments,1))}i.guid=r.guid=r.guid||(e.guid?e.guid++:e.event.guid++),t.bind(n,i)},e.unsubscribe=function(){t.unbind.apply(t,arguments)},e.publish=function(){t.trigger.apply(t,arguments)}})(jQuery);