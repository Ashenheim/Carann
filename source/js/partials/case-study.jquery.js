/* Places the casestudy window on the right position and scrolls
 * to it's top. Also resizes when screen resizes.
 * */

$(document).ready(function() {

	var element  = $( '.casestudy' );

	$( '.block-link' ).click(function(e) {

		var savePosition = $(window).top;

		var $this        = $( this ).parents('.block'),
		    documentPosX = $this.position().left,
		    documentPosY = $this.position().top,
		    blockHeight  = $this.height(),
		    blockWidth   = $this.width(),
		    position     = $( documentPosY + blockHeight );


		// Add .active class to current Block
		$( '.block' ).removeClass('active');
		$this.addClass('active');


		// Animate scroll to div
		$("html, body").animate( { scrollTop: documentPosY + blockHeight + -50 } );
		console.log( documentPosY + blockHeight );


		var getTitle   = $('.block_data .title', this).text(),
		    getContent = $('.block_data .content', this).html(),
		    getColor   = $('.block_data .color', this).text();

		// Implant casestudy
		element
			.css( { 'top' : documentPosY + blockHeight } )
			.fadeIn(310)
			.addClass('active');
		element.find('.title')
			.text( getTitle );
		element.find('.content')
			.empty()
			.html( getContent );

		// Positions arrow
		var arrowPos = (documentPosX + (blockWidth / 2) + -17.5);
		element.find('.arrow')
			.css( { 'left' : arrowPos } );

		console.log( arrowPos );

		return false;

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
					    documentPosX = $this.position().left,
					    documentPosY = $this.position().top,
					    blockHeight  = $this.height(),
					    blockWidth   = $this.width(),
					    position     = $( documentPosY + blockHeight );

					// Animate scroll to div
					$("html, body").animate( { scrollTop: documentPosY + blockHeight + -50 } );

					// Implant casestudy
					element
						.css( { 'top' : documentPosY + blockHeight } );

					// Repositions arrow
					var arrowPos = (documentPosX + (blockWidth / 2) + -17.5);
					element.find('.arrow')
						.css( { 'left' : arrowPos } );

					console.log('Done..');
				} else { console.log('No active casestudy, aborting..'); }

			}, 700);
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