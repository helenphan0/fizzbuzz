$(document).ready(function() {
	$('form').submit(function(event) {
		var userinput = $('#input-value').val();
	 	if (userinput == '') {
	    	return false;
	    }; 

		var x = parseInt(userinput);
		fizzBuzz(x);

		$('#input-value').val('');
		event.preventDefault();})

		.on('click', '.clear', function() {
	  	$('div').remove();
	  	});

	  	function fizzBuzz(x) {
	    	var y = 1;
	    	var html = '';
			do {
	          		if (y%15 == 0) {
	             		html += '<div>' + "Fizz Buzz" + '</div>';
	             	}
	          		else if (y%3 == 0) {
	            		html += '<div>' + 'Fizz' + '</div>';
	            	}
	          		else if (y%5 == 0) {
	            		html += '<div>' + "Buzz" + '</div>';
	            	}
	          		else {
	            		html += '<div>' + y + '</div>';
					}
					y++;
				}
	        	while (y <= x );
	        	$('body').append(html);
		}
})
