$(function () {
	'use strict';
	
	/* Loading screen */
	$(window).load(function () {
		$(".loading-overlay .spinner").fadeOut(500, function () {
			$("body, html").css("overflow","auto");
			$(this).parent().fadeOut(1000, function () {
				$(this).remove;
			});
		});
	});
});