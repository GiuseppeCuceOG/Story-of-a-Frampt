alert("Tuppy Game");

var main = function () {
	$("h1").text("GOOO!!!!");
	$(this).keydown( function(key) {
		switch(key.which) {
			case 37:
				$('img').animate({left: "-=15px"}, 20);
				break;
			case 39:
				$('img').animate({left: "+=15px"}, 20);
				break;

		}
	});
};

$(document).ready(main);