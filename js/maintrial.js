

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

		$('#pantera').click(function() {
			$('#orso').fadeOut(1000);
			$('#sceltaciboP').fadeIn(1000, function() {
				$('#deer').click(function() {
					Panther.health = Panther.health + 10;
					Panther.energy = Panther.energy + 5;
					Panther.attack = Panther.attack + 3;
					console.log(Panther);
					$('#mushrooms').fadeOut(1000);
					$('#Cervovivo').fadeIn(1000);
					$('form').submit(function() {
						var choice = $('#userchoice').val().toUpperCase();
						
						if(choice === 'DIRECT') {
							var escapeDeer = Math.random()*9; //capability for deer to escape
							if(Panther.attack > escapeDeer) { //got the prey
								Panther.health = Panther.health + 20;
								Panther.energy = Panther.energy + 10;
								Panther.attack = Panther.attack + 2;
								console.log("Prey Caught! Panther is getting stronger! Well made!");
								console.log(Panther);
								console.log(escapeDeer);
								$('#qui').append(Panther);
							}
							else { //missed the prey
								Panther.health = Panther.health - 4;
								Panther.energy = Panther.energy - 3;
								Panther.attack = Panther.attack - 1;
								console.log("Panther missed the prey and lost energy, Panther is weak!");
								console.log(Panther);
								console.log(escapeDeer);
							}
						}
						else if(choice === 'SNEAKY') {
							Panther.health = Panther.health + 15;
							Panther.energy = Panther.energy + 5;
							Panther.attack = Panther.attack + 1;
							console.log(Panther);
							console.log("Uhh that's clever!")
						}
						return false;
					});
				});
				$('#mushrooms').click(function() {
					Panther.health = Panther.health + 10;
					Panther.energy = Panther.energy + 10;
					console.log(Panther);
					$('#deer').fadeOut(1000);
					$('#VeganWay').fadeIn(1500);

					return false;
				});
			});
			
		});

}

$(document).ready(main);