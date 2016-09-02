
var Panther = {
	name: "Panther",
	health: 10,
	energy: 5,
	attack: 0,
};

var Bear = {
	name: "Bear",
	health: 10,
	energy: 5,
	attack: 0
};

var main = function() {

		$('#pantera').click(function() {
			document.getElementById("name").innerHTML = Panther.name= prompt("What is the name?");
			$('#orso').fadeOut(1000);
			$('#intro').fadeIn(900);
			$('#sceltaciboP').fadeIn(1000, function() {
				$('#deer').click(function() {
					Panther.health = Panther.health + 10;
					Panther.energy = Panther.energy + 5;
					Panther.attack = Panther.attack + 3;
					document.getElementById("health").innerHTML = Panther.health;
					document.getElementById("energy").innerHTML = Panther.energy;
					document.getElementById("attack").innerHTML = Panther.attack;
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
								document.getElementById("health").innerHTML = Panther.health;
								document.getElementById("energy").innerHTML = Panther.energy;
								document.getElementById("attack").innerHTML = Panther.attack;
								$('#risposte').append("<p>Prey Caught! Panther is getting stronger! Well made!</p>");
								$('#risposte').fadeIn(1000);
								$('form').fadeOut(800);
								$('#Cervovivo').css("height","400px");
								$('#animalupdated').fadeIn(800);
								$('#animalupdated').append("<img src='strongpa.jpg'/>");
							}
							else { //missed the prey
								Panther.health = Panther.health - 4;
								Panther.energy = Panther.energy - 3;
								Panther.attack = Panther.attack - 1;
								document.getElementById("health").innerHTML = Panther.health;
								document.getElementById("energy").innerHTML = Panther.energy;
								document.getElementById("attack").innerHTML = Panther.attack;
								$('#risposte').append("<p>Panther missed the prey and lost energy, Panther is weak!</p>");
								$('#risposte').fadeIn(1000);
								$('form').fadeOut(800);
								$('#Cervovivo').css("height","480px");
								$('#animalupdated').fadeIn(800);
								$('#animalupdated').append("<img src='weakpanther.jpg'/>");
							}
						}
						else if(choice === 'SNEAKY') {//prey got by sneaking
							Panther.health = Panther.health + 15;
							Panther.energy = Panther.energy + 5;
							Panther.attack = Panther.attack + 1;
							document.getElementById("health").innerHTML = Panther.health;
							document.getElementById("energy").innerHTML = Panther.energy;
							document.getElementById("attack").innerHTML = Panther.attack;
							$('#risposte').append("<p>Yes! clever choice, Panther is still the best in this, prey got! nice job</p>");
							$('#risposte').fadeIn(1000);
							$('form').fadeOut(800);
							$('#Cervovivo').css("height","480px");
							$('#animalupdated').fadeIn(800);
							$('#animalupdated').append("<img src='cleverpanther.jpg'/>");
						}
						return false;
					});
					return false;
				});
				$('#mushrooms').click(function() {
					Panther.health = Panther.health + 10;
					Panther.energy = Panther.energy + 10;
					document.getElementById("health").innerHTML = Panther.health;
					document.getElementById("energy").innerHTML = Panther.energy;
					$('#deer').fadeOut(1000);
					$('#VeganWay').fadeIn(1000);
					$('.roma').fadeIn(1500, function() {
						$('#deerAlive').click(function() {
							Panther.health = Panther.health - 4;
							Panther.energy = Panther.energy - 3;
							document.getElementById("health").innerHTML = Panther.health;
							document.getElementById("energy").innerHTML = Panther.energy;
							$('#goat, #vegetables').fadeOut(1000);
							$('#risposte').append('<p>That was not a nice choice since mushrooms did not give you attack skills, Panther is terribly weak</p>');
							$('#risposte').fadeIn(1000);
							$('#animalupdated').fadeIn(800);
							$('#animalupdated').append("<img src='weakpanther.jpg'/>");
							return false;
						});
						$('#goat').click(function() {
							Panther.health = Panther.health + 8;
							Panther.energy = Panther.energy + 7;
							Panther.attack = Panther.attack + 2;
							document.getElementById("health").innerHTML = Panther.health;
							document.getElementById("energy").innerHTML = Panther.energy;
							document.getElementById("attack").innerHTML = Panther.attack;
							$('#deerAlive, #vegetables').fadeOut(1000);
							$('#risposte').append('<p>Wise choice! Why risking to catch an alive prey when you can get a ready one? Panther is getting better</p>');
							$('#risposte').fadeIn(1000);
							$('#animalupdated').fadeIn(800);
							$('#animalupdated').append("<img src='cleverpanther.jpg'/>");
							console.log(Panther);
							return false;
						});
						$('#vegetables').click(function() {
							Panther.health = Panther.health + 14;
							Panther.energy = Panther.energy + 11;
							document.getElementById("health").innerHTML = Panther.health;
							document.getElementById("energy").innerHTML = Panther.energy;
							$('#deerAlive, #goat').fadeOut(1000);
							$('#risposte').append('<p>Seems Panther forgot its instinct a bit, Panther is also getting fatter but it looks like quite happy</p>');
							$('#risposte').fadeIn(1000);
							$('#animalupdated').fadeIn(800);
							$('#animalupdated').append("<img src='fatpanther.jpg'/>");
							console.log(Panther);
							return false;
						});
					});
					return false;
				});
			});
		});
}

$(document).ready(main);