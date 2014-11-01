$(document).ready(function() {

	var element  = $( '.casestudy' ),
	    savePosition;

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
		$("html, body").animate( { scrollTop: documentPos + -40 } ); 


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

		$( '.overlay' )
			// .removeAttr( 'style' )
			// .css('background-color', getColor)
			.fadeIn();

			console.log( savePosition );

	});

	// Reposition Windows/Positions
	var timer;
	$(window).bind('resize', function() {
		if(timer)
			clearTimeout(timer);
			timer = setTimeout(function(){ 
				
				// Variables
				var $this       = $( '.block.active' ),
					 documentPos = $this.position().top,
					 blockHeight = $this.height(),
					 position    = $( documentPos + blockHeight );

				// Animate scroll to div
				$("html, body").animate( { scrollTop: documentPos + -20 } ); 

				// Implant casestudy
				// ToDo: Add text
				element
					.css( { 'top' : documentPos + blockHeight } );

			}, 500);
	});

	// Close button
	$( '.close, .overlay' ).click(function(e) {

		$( element )
			.fadeOut(310)
			.removeClass('active');
		$( '.block' ).removeClass('active');
		$( '.overlay' ).fadeOut();

		$("html,body").animate( { scrollTop: element.position().top } );

		e.preventDefault();

		console.log( savePosition );
	});

});