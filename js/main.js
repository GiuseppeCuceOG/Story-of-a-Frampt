alert("Tuppy Game");

$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(key.which) {
			case 37:
				$('img').animate({left: "-=15px"}, 20);
				break;
			case 39:
				$('img').animate({left: "+=15px"}, 20);
				break;
		}
	});
	$("h1").text("GOOO!!!!");
});