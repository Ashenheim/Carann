/* Places the casestudy window on the right position and scrolls
 * to it's top. Also resizes when screen resizes.
 * */

$(document).ready(function() {

	var element  = $( '.casestudy' );

	$( '.block' ).click(function() {

		var savePosition = $(window).top;

		var $this       = $( this ),
		    documentPos = $this.position().top,
		    blockHeight = $this.height(),
		    position    = $( documentPos + blockHeight );


		// Add .active class to current Block
		$( '.block' ).removeClass('active');
		$this.addClass('active');


		// Animate scroll to div
		$("html, body").animate( { scrollTop: documentPos + blockHeight + -50 } );
		console.log( documentPos + blockHeight );


		var getTitle   = $('.block_data .title', this).text(),
		    getContent = $('.block_data .content', this).html(),
		    getColor   = $('.block_data .color', this).text();

		// Implant casestudy
		// ToDo: Add text
		element
			.css( { 'top' : documentPos + blockHeight } )
			.fadeIn(310)
			.addClass('active');
		element.find('.title')
			.text( getTitle );
		element.find('.content')
			.empty()
			.html( getContent );

	});

	// Reposition Windows/Positions
	var timer;
	$(window).bind('resize', function() {
		if(timer)
			clearTimeout(timer);
			timer = setTimeout(function(){

				console.log('Resizing..');

				if( $('.casestudy').hasClass('active') ) {
				
					// Variables
					var $this       = $( '.block.active' ),
						 documentPos = $this.position().top,
						 blockHeight = $this.height(),
						 position    = $( documentPos + blockHeight );

					// Animate scroll to div
					$("html, body").animate( { scrollTop: documentPos + blockHeight + -50 } );

					// Implant casestudy
					// ToDo: Add text
					element
						.css( { 'top' : documentPos + blockHeight } );

					console.log('Done..');
				} else { console.log('No active casestudy, aborting..'); }

			}, 500);
	});

	// Close button
	$( '.close' ).click(function(e) {

		$( element )
			.fadeOut(310)
			.removeClass('active');
		$( '.block' ).removeClass('active');

		$("html,body").animate( { scrollTop: element.position().top + -50 } );

		e.preventDefault();

	});

});