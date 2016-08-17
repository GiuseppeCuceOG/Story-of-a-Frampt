alert("The Panther and The Bear");

var Panther = {
	name: "Panther",
	health: 10,
	energy: 5,
	attack: 0
};

var Bear = {

};

var main = function() {

	confirm("This is the first step of this game, make a choice now");
	$("h3").append('<p>What Animal you want to be? PANTHER or BEAR?</p>');

	$("form").submit( function() {

		var choice = $("#userchoice").val().toUpperCase();
		if(choice === "PANTHER") {
			Panther.name = prompt("What is the name of the Panther?");
			$("p").prepend('<p>'+ " " + Panther.name + " " + 'is there, starving like hell, he does not know why he is so weak, at least he does not remember, the only thing he knows now it is that, he needs food. Here some food, on his right there is a dead body deer, a bit smelling but enough to get better, on his left not really far a lot of colorful mushrooms, What do you choose to eat? The DEER or MUSHROOMS?</p>');
			
			var choicee = $("#userchoice").val().toUpperCase();

			if(choicee === "DEER") {
				Panther.health = Panther.health + 10;
				Panther.energy = Panther.energy + 5;
				Panther.attack = Panther.attack + 3;
				$("p").prepend('<p>Panther really liked what he has eaten, and he wants some more, the panther joins the hunt...</p>');
				$("p").prepend('<p>Here it is! a prey... another delicious alive Deer</p>');
				var action = prompt("How do you want to get the prey? You have two options, you can jump and directly attack the prey, or you can be patience and sneaking until the moment is the perfect one. DIRECT attack or SNEAKY attack? the choice is yours").toUpperCase();
				var deer = Math.random() * 9;
				if(action === "DIRECT") {
					if(Panther.attack > deer) {
						Panther.health = Panther.health + 20;
						Panther.energy = Panther.energy + 10;
						Panther.attack = Panther.attack + 2;
						console.log("Caught! Great Job" + " " + Panther.name + " " + "is strong");
					}
					else {
						Panther.health = Panther.health - 4;
						Panther.energy = Panther.energy - 3;
						Panther.attack = Panther.attack - 1;
						console.log("Missed!" + " " + Panther.name + " " + "is terribly weak");
					}
				}
				else {
					Panther.health = Panther.health + 15;
					Panther.energy = Panther.energy + 5;
					Panther.attack = Panther.attack + 1;
					console.log("Great job and nice choice!" + " " + Panther.name + " " + "is getting better");
				}

			} 
			else {
				/*
				Panther.health = Panther.health + 10;
				Panther.energy = Panther.energy + 10;
				
				$("p").prepend('<p>Panther feels like he needs more food, mushrooms were not so tasty but they have given good energy</p>');
				$("p").prepend('<p>Walking for a while, he found a good place with various choice, lucky day!. a Deer Alive that is feeding, other vegetables food a bit far in the right, and another dead body, this time is a goat, maybe a wolf was here before</p>');
				
				var veganWay = prompt("What is your choice? alive DEER, dead GOAT or VEGETABLES?").toUpperCase();
				
				if(veganWay === "DEER") {
					Panther.health = Panther.health - 4;
					Panther.energy = Panther.energy - 3;
					$("p").prepend('<p>Prey Missed!! What a fool we have, How did you come up with that idea with having no attack value?' + " " + Panther.name + " " + 'is terribly weak</p>');
				}
				else if(veganWay === "GOAT") {
					Panther.health = Panther.health + 8;
					Panther.energy = Panther.energy + 7;
					Panther.attack = Panther.attack + 3;
					$("p").prepend('<p>Very nice! Panther feels great and healthy!</p>');
				}
				else {
					Panther.health = Panther.health + 14;
					Panther.energy = Panther.energy + 10;
					$("p").prepend('<p>Panther is getting fat and happier</p>');
				}*/
			}
		}
		else {
			console.log("Bear in progress")
		}
		return false;
	});

	console.log(Panther);
};

$(document).ready(main);