alert("Tuppy Game");

var main = function () {
	$("h1").text("GOOO!!!!");
	$(document).keydown( function(key) {
		switch(parseInt(key.which,10)) {
			case 37:
				$('img').animate({left: "-=15px"}, 20);
				break;
		
		}
	});
}

$(document).ready(main);