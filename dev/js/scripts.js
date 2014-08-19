/* @author: Kenneth Jackson */

(function() {

	var $body = $("body"),
		$intro = $(".intro"),
		$pillars = $(".pillars"),
		$team = $(".team"),
		$action = $(".action"),
		$more = $(".more"),
		$close = $(".close")

	var kj = {

		hideOverlay: function() {

			$body.removeClass("open");
			$(".overlay").removeClass("show");

		},

		showOverlay: function(target) {

			var $target = $(target);
			var $class = $target.parents("section").attr("class");
			var $overlay = $("[data-overlay='"+$class+"']");

			$body.addClass("open");
			$overlay.addClass("show");

		},

		init: function() {

			$(window).on("scroll", function(){



			});

			$more.on("click", function(event) {

				event.preventDefault();

				kj.showOverlay(this);

			});

			$close.on("click", function(event) {

				event.preventDefault();

				kj.hideOverlay();

			});

		}

	}


	kj.init();

}());