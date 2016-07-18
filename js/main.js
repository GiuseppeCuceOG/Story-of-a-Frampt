alert("Tuppy Game");

$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(key.which) {
			case 37:
				$('img').animate({left: "-=15px"}, 10);
				break;
			case 39:
				$('img').animate({left: "+=15px"}, 10);
				break;
		}
	});
	$("h1").text("VAI TIGRE!!!");
});