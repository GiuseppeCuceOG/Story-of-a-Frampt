

var Panther = {
	name: "Panther",
	health: 10,
	energy: 5,
	attack: 0
};

var Bear = {
	name: "Bear",
	health: 10,
	energy: 5,
	attack: 0
};

var main = function() {
		
		$('#left').click(function() {
			$('#sceltaCibo').fadeIn(5000, function() {
				$(this).after('<p>Deer or Mushrooms?</p>');
			});
		});

		$('#right').click(function() {
			$('#bear').fadeIn(5000, function() {
				$(this).after('<p>Bacche?</p>')
			})
		});
}

$(document).ready(main);