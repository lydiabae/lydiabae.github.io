define(["jquery","throttledebounce","colorbox"],function(e){var t,n,r,i,s,o,u,a;return{init:function(){t=this,this._setVars(),this._initEvents()},_initEvents:function(){e(window).on("resize",e.throttle(250,function(){e.colorbox.close()})),r.on("click",".btn-block, btn-icon",this._lightboxButtonClick)},onLoadProcessing:function(){t._addDescription.call(this)},onCompleteProcessing:function(){t._addButtons.call(this),t._adjustContent.call(this),t._adjustWindow.call(this)},_lightboxButtonClick:function(t){t.preventDefault();var n=e(this);if(n.is(".btn-next")){e("#cboxNext").trigger("click");return}if(n.is(".btn-previous")){e("#cboxPrevious").trigger("click");return}e("#cboxClose").trigger("click")},setTitle:function(){return e(this).nextAll(".figure-caption").text()},_addDescription:function(){var t,r=e(this).find("img").first().attr("alt");r&&(a=e("#cboxDescription"),t='<p id="cboxDescription">'+r+"</span>",a.length&&a.remove(),n.append(t)),a=e("#cboxDescription")},_adjustContent:function(){var t=e("#cboxContent"),n=t.outerHeight()+20;i=e("#cboxWrapper"),u=e("#cboxLoadedContent"),i.css({height:n})},_adjustWindow:function(){var e=u.outerHeight(),t=o.outerHeight(),n=a.outerHeight(!0),i=e+t+n,s=r.height(),f=r.css("top"),l=(i-s)/2,c=parseFloat(f)-l;r.css({top:c+"px"})},_addButtons:function(){var n=94,r=e(this).parent("li").length?e(this).closest("li"):e(this),i=t._getItem(r,"next"),s=t._getItem(r,"previous"),o=t._getImage(i),u=t._getImage(s),a=e("#cboxContent"),f='<div class="btn-block btn-next"><div class="cboxBtnViewport"></div><span aria-hidden="true" class="iconf-arrow-right"></span><span class="visuallyhidden">Next</span></div>',l='<div class="btn-block btn-previous"><div class="cboxBtnViewport"></div><span aria-hidden="true" class="iconf-arrow-left"></span><span class="visuallyhidden">Previous</span></div>',c='<div class="btn-block btn-icon btn-close"><span aria-hidden="true" class="iconf-close"></span><span class="visuallyhidden">Next</span></div>';o.height=94,u.height=94,o.width=n,u.width=n,a.find(".btn-icon").length||a.append(c),a.find(".btn-next").length||a.append(f),a.find(".btn-next").find(".cboxBtnViewport").html(o),a.find(".btn-previous").length||a.append(l),a.find(".btn-previous").find(".cboxBtnViewport").html(u)},_getItem:function(e,t){var n;return t==="next"?e.is("li")?(n=e.next().length?e.next():e.closest(".js-lightbox-gallery").find("a:first"),n):(n=e.closest(".js-lightbox-gallery").find("li:first"),n):e.is("li")?(n=e.prev().length?e.prev():e.closest(".js-lightbox-gallery").find("a:first"),n):(n=e.closest(".js-lightbox-gallery").find("li:last"),n)},_getImage:function(t){var n,r,i,s=t.find("img");return s.length?s.clone().attr("class",""):(i=t.find("a:first")[0].href,n=i.toLowerCase().indexOf("flickr")===-1?this._generateCropUrl(i,"_SquareCrop"):this._generateFlickrThumbUrl(i),r=document.createElement("img"),r.src=n,e(r))},_generateCropUrl:function(e,t){e=e.toLowerCase();var n,r,i=/\.(gif|bmp|png|jpg|jpeg)/,s=e.match(i);return s?(n=s[0],r=e.substring(0,e.indexOf(n))+t+n+".width.107.ashx",r):""},_generateFlickrThumbUrl:function(e){e=e.toLowerCase();var t,n,r,i=/_b\.(gif|bmp|png|jpg|jpeg)/,s=e.match(i);return s?(t=s[0],n=t.substring(2),r=e.substring(0,e.indexOf(t))+"_m"+n,r):""},_setVars:function(){n=n||e("#cboxContent"),r=r||e("#colorbox"),i=i||e("#cboxWrapper"),s=s||e("#cboxClose"),o=o||e("#cboxTitle"),u=u||e("#cboxLoadedContent")}}});