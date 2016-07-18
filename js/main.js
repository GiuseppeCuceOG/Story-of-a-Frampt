alert("Tuppy Game");
var x = prompt("Who you are?").toUpperCase();
if (x === "FRAMPT"){
	console.log("Welcome, Guiltier's Seeker..., We knew you would been back again");
	confirm("you were the real chosen one, the only one who could link the fire to the darkness, that was the only way to maintain the flame eternally");
	$(document).ready(function() {
		$("h1").text("Welcome, Guiltier's Seeker");
	});
}
else {
	console.log("Aha! another visitor we have, welcome" + " " + x);
	confirm("Eheh welcome young traveler, I am Irishilla");
	$(document).ready( function() {
		$("h1").text("Welcome home young undead this is Looren Valley");
	});
};
