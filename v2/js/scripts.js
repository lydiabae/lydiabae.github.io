/***************** Waypoints ******************/

function runWaypoints() {
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInUp');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
}

function resetWaypoints() {
  $('.wp1, .wp2, .wp3, .wp4, .wp5, .wp6').waypoint('destroy');
}

$(document).ready(function() {
  runWaypoints();
});

(function() {
	var app = {
		init: function() {
			app.filter.init();
		},
		filter: (function() {

			var	$container,
				$list,
				$filters,
				options;

			function init() {
				options = {
					itemSelector: '[class^=col]',
					layoutMode: 'masonry',
					masonry: {
						columnWidth: '.col-lg-1'
					}
				};
				$container = $('.isotope');
				$container.isotope(options);
				$list = $('.isotope [data-filter]');
				$filters = $('.work-filter li');
				$filters.on('click', setFilter);
			}

			function setFilter() {
				$container.isotope('destroy').isotope(options);
				var filterType = $(this).text().toLowerCase();
				$filters.removeClass('selected');
				$(this).addClass('selected');
				if (filterType !== 'all') {
					var selector = '[data-filter*="' + filterType + '"]';
					$container.isotope({ filter: selector });
				} else {
					$container.isotope({ filter: '*' });
				}
			}

			return { init: init };
		})()
	};

	$(document).ready(app.init);
})();

/***************** Slide-In Nav ******************/

$(window).load(function() {

	$('.nav_slide_button').click(function() {
		$('.pull').slideToggle();
	});

});

/***************** Smooth Scrolling ******************/

$(function() {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

// document.querySelector("#nav-toggle").addEventListener("click", function() {
// 	this.classList.toggle("active");
// });

/***************** Overlays ******************/

$(document).ready(function() {
	if (Modernizr.touch) {
		// show the close overlay button
		$(".close-overlay").removeClass("hidden");
		// handle the adding of hover class when clicked
		$(".img").click(function(e) {
			if (!$(this).hasClass("hover")) {
				$(this).addClass("hover");
			}
		});
		// handle the closing of the overlay
		$(".close-overlay").click(function(e) {
			e.preventDefault();
			e.stopPropagation();
			if ($(this).closest(".img").hasClass("hover")) {
				$(this).closest(".img").removeClass("hover");
			}
		});
	} else {
		// handle the mouseenter functionality
		$(".img").mouseenter(function() {
			$(this).addClass("hover");
		})
			// handle the mouseleave functionality
			.mouseleave(function() {
				$(this).removeClass("hover");
			});
	}
});

/***************** Flexsliders ******************/

$(window).load(function() {

	$('#portfolioSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: false,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#servicesSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

	$('#teamSlider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: true,
		touch: true,
		pauseOnHover: true,
		start: function() {
			$.waypoints('refresh');
		}
	});

});
