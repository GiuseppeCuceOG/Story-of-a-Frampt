alert("Tuppy Game");

$(document).ready(function() {
	$(document).keydown(function(key) {
		switch(key.which) {
			case 8:
				$('img').effect('bounce',{times:3}, 2000);
			case 37:
				$('img').animate({left: "-=15px"}, 10);
				break;
			case 38:
				$('img').animate({top: "-=15px"},10);
				break;
			case 39:
				$('img').animate({left: "+=15px"}, 10);
				break;
			case 40:
				$('img').animate({top: "+=15px"},10);
		}
	});
	$("h1").text("VAI TIGRE!!!");
	$(".ball").animate({left: "+=950px"}, 5000, function() {
		$(this).fadeOut(2000);
	});
});