$(document).ready(function() {
	$('.ui.sidebar').sidebar('attach events', '#mnu-hamburger');
	$('.ui.dropdown.item').dropdown({});

	$(".button").click(function() {
		$(".button").transition('jiggle');
	});

	$("#mnu-sidebar > a").click(function() {
		$('.ui.sidebar').sidebar('toggle');
	});

	$("#btn-menu-booking").click(function() {
		window.location="#book";
	});

	$("#btn-booking").click(function() {
		window.location="#book";
	});

	$("#btn-call").click(function() {
		window.location="tel:0322-303050";
	});

	$("#btn-mommy-academy").click(function() {
		window.open("https://alingsasidrottsklinik.wufoo.com/forms/anmalan-mommy-academy/");
	});

	$("#btn-mommy-academy-more").click(function() {
		window.location="/mommy.php";
	});

	$("#btn-mommy-academy-back").click(function() {
		window.location="/#mommy";
	});

	$("#btn-mommy-academy-next").click(function() {
		window.open("https://alingsasidrottsklinik.wufoo.com/forms/anmalan-mommy-academy-next-level/");
	});

	$("#btn-mommy-academy-next-more").click(function() {
		window.location="/mommynext.php";
	});

	$("#btn-mommy-academy-next-back").click(function() {
		window.location="/#mommynext";
	});

	$("#btn-yoga").click(function() {
		window.open("https://alingsasidrottsklinik.wufoo.com/forms/anmalan-yoga/");
	});

	$(function() {
		$('a[href*=\\#]:not([href=\\#])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
				var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top -50
					}, 1000);
					return false;
				}
			}
		});
	});
});
