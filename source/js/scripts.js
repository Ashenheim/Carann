$(document).ready(function() {

	var timer;
	$(window).bind('resize', function() {
		if(timer)
			clearTimeout(timer);
			timer = setTimeout(function(){ 

				

			}, 1000);
	});

});