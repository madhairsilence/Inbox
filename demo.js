var currentDiv = '#welcome';

$(currentDiv).show( 'slow' )
$(document).on('mousewheel', function(e){	


	if(e.originalEvent.wheelDelta < 120 ){		
		if($(currentDiv).next().length > 0 ){
			$('.slide-item').hide();
			currentDiv =  $(currentDiv).next();	
			$(currentDiv).show( 'slow' )
		}
		
	}
	else{
		if($(currentDiv).prev().length > 0 ){
			$('.slide-item').hide();
			currentDiv =  $(currentDiv).prev();
			$(currentDiv).show( 'slow' )
		}		
	}


});

