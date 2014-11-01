$(document).ready(function() {

	var element  = $( '.casestudy' );

	$( '.block' ).click(function() {

		var $this       = $( this ),
		    documentPos = $this.position().top,
		    blockHeight = $this.height(),
		    position    = $( documentPos + blockHeight );


		// Add .active class to current Block
		$( '.block' ).removeClass('active');
		$this.addClass('active');


		// Animate scroll to div
		$("html, body").animate( { scrollTop: documentPos + -50 } ); 


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

	});

	// Close button
	$( '.close, .overlay' ).click(function(e) {
		$( element )
			.fadeOut(310)
			.removeClass('active');
		$( '.block' ).removeClass('active');
		$( '.overlay' ).fadeOut();
		e.preventDefault();

		console.log( 'Closed' );
	});

});