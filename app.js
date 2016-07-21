$(document).ready(function() {
	$('form').submit(function(event) {
	 	if ($('#input-value').val() == '') {
	    	return false;}; 
			  var x = $('#input-value').val();
			  	var x = parseInt(x);
	      		var y = 1;
				do {
	          		if (y%15 == 0) {
	             	 	y++;
	             		$(this).parent().children().append('<div>' + "Fizz Buzz" + '</div>');}
	          		else if (y%3 == 0) {
	            		y++;
	            		$(this).parent().children().append('<div>' + 'Fizz' + '</div>');}
	          		else if (y%5 == 0) {
	            		y++;
	            		$(this).parent().children().append('<div>' + "Buzz" + '</div>');}
	          		else {
	            		$(this).parent().children().append('<div>' + y + '</div>');
	            		y++;};}
	        	while (y <= x );
	 
		$('#input-value').val('');
			event.preventDefault();});})
		.on('click', '.clear', function() {
	  	$('div').remove();
});
