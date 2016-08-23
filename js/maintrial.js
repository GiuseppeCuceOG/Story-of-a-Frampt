

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
			$('#sceltaCibo').css('display','inline');
		});
			
$(document).ready(main);