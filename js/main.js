alert("Tuppy Game");

var main = function () {
	$("h1").text("GOOO!!!!");
	$("img").keydown( function(key) {
		switch(parseInt(key.which,10)) {
			case 37:
				$('img').animate({left: "-=15px"}, 20);
				break;
			case 39:
				$('img').animate({left: "+=15px"}, 20);

		};
	});
}

$(document).ready(main);