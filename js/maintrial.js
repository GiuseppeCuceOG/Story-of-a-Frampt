
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

var Abilita = 0;

var Main = function() {
		// Panther is clicked and user is asked the name of it
		$('#pantera').click(function() {
			document.getElementById("name").innerHTML = Panther.name= prompt("What is the name?");
			$('#orso').toggle("disable");
			$('#intro').fadeIn(900);

			//toggling health energy attack
			$('#deer').mouseenter(function() {
				$('.ifDeer ol').toggle();
			}).mouseleave(function() {
				$('.ifDeer ol').toggle();
			});

			$('#mushrooms').mouseenter(function() {
				$('.ifMush ol').toggle();
			}).mouseleave(function() {
				$('.ifMush ol').toggle();
			});

			$('#deerAlive').mouseenter(function() {
				$('.ifDeeer ol').toggle();
			}).mouseleave(function() {
				$('.ifDeeer ol').toggle();
			});

			$('#goat').mouseenter(function() {
				$('.ifGoat ol').toggle();
			}).mouseleave(function() {
				$('.ifGoat ol').toggle();
			});

			$('#vegetables').mouseenter(function() {
				$('.ifVege ol').toggle();
			}).mouseleave(function() {
				$('.ifVege ol').toggle();
			});

			//food's choice deer or mushrooms
			$('#sceltaciboP').fadeIn(1000, function() {
				$('#deer').click(function() {
					Panther.health = Panther.health + 10;
					Panther.energy = Panther.energy + 5;
					Panther.attack = Panther.attack + 3;
					document.getElementById("health").innerHTML = Panther.health;
					document.getElementById("energy").innerHTML = Panther.energy;
					document.getElementById("attack").innerHTML = Panther.attack;
					console.log(Panther);
					$('.ifMush').fadeOut(1000);
					$('#Cervovivo').fadeIn(1000);
					$('#richiestegioco').submit(function() {
						
						var choice = $('#userchoice').val().toUpperCase();
						
						if(choice === 'DIRECT') {
							var escapeDeer = Math.random()*9; //capability for deer to escape
							if(Panther.attack > escapeDeer) { //if it gets the prey
								Panther.health = Panther.health + 20;
								Panther.energy = Panther.energy + 10;
								Panther.attack = Panther.attack + 2;
								document.getElementById("health").innerHTML = Panther.health;
								document.getElementById("energy").innerHTML = Panther.energy;
								document.getElementById("attack").innerHTML = Panther.attack;
								$('#risposte').append("<p>Prey Caught! Panther is getting stronger! Well made!</p>");
								$('#risposte').fadeIn(1000);
								$('#richiestegioco').fadeOut(800);
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
								$('#richiestegioco').fadeOut(800);
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
							$('#risposte').append("<p>Yes! clever choice, Panther is still the best in this, prey got! nice job </p>");
							$('#risposte').fadeIn(1000);
							$('#richiestegioco').fadeOut(800);
							$('#Cervovivo').css("height","480px");
							$('#animalupdated').fadeIn(800);
							$('#animalupdated').append("<img src='cleverpanther.jpg'/>");
							$('#parte2').fadeIn('slow');

							$('#parte2').prepend("<img src='byground.jpg'/>");
							$('#parte2').prepend("<p>What do you choose, going through BRANCHES trees or going by GROUND?</p>");
							$('#parte2').prepend("<p>While walking," + " " + Panther.name + " " + "encountered several obstacles, or choices maybe, the path seems to split in two, by ground looks like an affordable ravine but it will take very longer time, in the other hand we have a shortcut through branches trees</p>");
							$('#parte2').prepend("<p>By regaining strengths," + " " + Panther.name + " " + "reestablished his senses and he smelled something that reminded him a deep and not clear thing, maybe related to his passed weak condition, he decided to follow it</p>");
							
							$('#cleverpath').toggle(function() { //seconda parte
								$(this).submit(function() {

									$('.cibo1').toggle();
									$(this).toggle(1200);
									var choiceTwo = $('#userchoice2').val().toUpperCase();

									if(choiceTwo === "BRANCHES") {
										Abilita = Abilita + 1; //abilita di arrampicamento sui rami degli alberi
										Panther.energy = Panther.energy - 5;
										document.getElementById("energy").innerHTML = Panther.energy;
										console.log(Abilita);
										$('#parte2').append("<p>Then he climbed branches and got an ability, he can now climb on trees, and he discovered a plenty various of new food, let's eat some</p>");
										return false;

									}
									else if(choiceTwo === "GROUND") {
										Panther.energy = Panther.energy - 2;
										document.getElementById("energy").innerHTML = Panther.energy;
										$('#parte2').append("<p>No matter those branches were not that steady after all and he did not spend useful energy for a risky thing, the journey goes on, but first let's eat some food in the nearby</p>");
										return false;
									}
								});

								var randomFood = Math.floor(Math.random()*4);
								var randomFoodTwo = Math.floor(Math.random()*4);
								switch(randomFood) {
									case 0:
										$('.cibo1').append("<a><img id='rf' src='ananas.jpg'/></a>");
										$('#rf').click(function() {
											$('#rf2').fadeOut(1200);
											Panther.health = Panther.health + 8;
											Panther.energy = Panther.energy + 10;
											Panther.attack = Panther.attack + 1;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 1:
										$('.cibo1').append("<a><img id='rf' src='arancia.png'/></a>");
										$('#rf').click(function() {
											$('#rf2').fadeOut(1200);
											Panther.health = Panther.health + 7;
											Panther.energy = Panther.energy + 12;
											Panther.attack = Panther.attack + 0;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 2:
										$('.cibo1').append("<a><img id='rf' src='pesca.jpg'/></a>");
										$('#rf').click(function() {
											$('#rf2').fadeOut(1200);
											Panther.health = Panther.health + 6;
											Panther.energy = Panther.energy + 9;
											Panther.attack = Panther.attack + 2;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 3:
										$('.cibo1').append("<a><img id='rf' src='lemon.png'/></a>");
										$('#rf').click(function() {
											$('#rf2').fadeOut(1200);
											Panther.health = Panther.health + 8;
											Panther.energy = Panther.energy + 11;
											Panther.attack = Panther.attack + 1;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 4:
										$('.cibo1').append("<a><img id='rf' src='fragole.jpg'/></a>");
										$('#rf').click(function() {
											$('#rf2').fadeOut(1200);
											Panther.health = Panther.health + 15;
											Panther.energy = Panther.energy + 20;
											Panther.attack = Panther.attack + 3;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
									default:
										console.log("I am not supposed to appear in game");
								}

								switch(randomFoodTwo) {
									case 0:
										$('.cibo1').append("<a><img id='rf2' src='ananas.jpg'/></a>");
										$('#rf2').click(function() {
											$('#rf').fadeOut(1200);
											Panther.health = Panther.health + 8;
											Panther.energy = Panther.energy + 10;
											Panther.attack = Panther.attack + 1;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 1:
										$('.cibo1').append("<a><img id='rf2' src='arancia.png'/></a>");
										$('#rf2').click(function() {
											$('#rf').fadeOut(1200);
											Panther.health = Panther.health + 7;
											Panther.energy = Panther.energy + 12;
											Panther.attack = Panther.attack + 0;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 2:
										$('.cibo1').append("<a><img id='rf2' src='pesca.jpg'/></a>");
										$('#rf2').click(function() {
											$('#rf').fadeOut(1200);
											Panther.health = Panther.health + 6;
											Panther.energy = Panther.energy + 9;
											Panther.attack = Panther.attack + 2;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 3:
										$('.cibo1').append("<a><img id='rf2' src='lemon.png'/></a>");
										$('#rf2').click(function() {
											$('#rf').fadeOut(1200);
											Panther.health = Panther.health + 8;
											Panther.energy = Panther.energy + 11;
											Panther.attack = Panther.attack + 1;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
										break;
									case 4:
										$('.cibo1').append("<a><img id='rf2' src='fragole.jpg'/></a>");
										$('#rf').click(function() {
											$('#rf2').fadeOut(1200);
											Panther.health = Panther.health + 15;
											Panther.energy = Panther.energy + 20;
											Panther.attack = Panther.attack + 3;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
										});
									default:
										console.log("I am not supposed to appear in game");
								}
							});
							//continua qui la terza parte

							$('.cibo1').click(function() {
								$('#parte3').fadeIn('slow');
								$('#climb').click(function() {

									$('#run').fadeOut('slow');

									if(Abilita === 1) {
										
										var carica = 58 * Math.random();
										var albero = (Math.random() * 90) + (Math.random() * 18) + (Math.random() * 5);
										console.log(carica,albero)
										if(carica < albero) {
											// rhino impacting animation
											$('#parte4').append("<img id='tronco' src='albero.jpg'/>").fadeIn('fast');
											$('.rhinoCarica').fadeIn(2000).animate({right:'+=300px'},4000, function() {
												$('#tronco').effect('bounce',{times:3},1500);
											}); 
											
											$('#parte5').prepend("<p>WOOOW! Rhino impacted with the tree, that was strong! \
												thankfully the tree was tough enough and" + " " + Panther.name + " " + " could stay safe on branches and carry on with no dangerous for a while</p>").fadeIn('fast');
											$('#parte6').toggle();
										}
										else if(carica > albero) {

											$('#parte4').append("<img id='tronco' src='albero.jpg'/>").fadeIn('fast');
											$('#tronco').css("float","left");
											$('.rhinoCarica').fadeIn(2000).animate({right:'+=300px'},4000, function() {
												$('#tronco').effect('bounce',{times:3},1500);
											});

											$('#parte5').prepend("<img src='weakpanther.jpg'/>","<p>WOW!! the impact has been terribly strong, the Panther has fallen from a deadly height, panther passed away..</p>").css("text-align","center").fadeIn('fast');
											$('#parte5 img').css("margin-top","20px","margin-bottom","20px");
											$('#parte5 #introPart5').css("display","none");
											Panther.health = Panther.health - Panther.health;
											Panther.energy = Panther.energy - Panther.energy;
											Panther.attack = Panther.attack - Panther.attack;
											document.getElementById("health").innerHTML = Panther.health;
											document.getElementById("energy").innerHTML = Panther.energy;
											document.getElementById("attack").innerHTML = Panther.attack;
											return false;
										}
									
										Panther.energy = Panther.energy - 5;
										document.getElementById("energy").innerHTML = Panther.energy;
										return false;
									}
									else {
										
										$('#parte4').append("<img id='pp' src='weakpanther.jpg'/>").fadeIn('fast');
											$('#tronco').css("float","left");
											$('.rhinoCarica').fadeIn(2000).animate({right:'+=300px'},4000, function() {
												$('#pp').effect('bounce',{times:3},1500);
											});
										$('#parte4').append("<p>You have no skills about that, the Mum Rhino got you!! panther is dead</p>");
										Panther.health = Panther.health - Panther.health;
										Panther.energy = Panther.energy - Panther.energy;
										Panther.attack = Panther.attack - Panther.attack;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
										return false;
									}
								});
								$('#run').click(function() {
									Panther.energy = Panther.energy - 15;
									document.getElementById("energy").innerHTML = Panther.energy;
									$('#climb').fadeOut('slow');

									$('#parte5, #parte6').toggle(1000);
									$('#parte5').prepend("<p>An incredible feline sprint" + " " + Panther.name + " " + "taken! successfully escaping from the Rhino</p>");
					
									Abilita = Abilita + 1; //abilita della corsa super veloce
									console.log(Abilita);
									return false;
								});
							});

							//quarta parte
							var randomFoodThree = Math.floor(Math.random()*4);
							var randomFoodFour = Math.floor(Math.random()*4);
							switch(randomFoodThree) {
								case 0:
									$('.cibo2').append("<a><img id='rf3' src='ananas.jpg'/></a>");
									$('#rf3').click(function() {
										$('#rf4').fadeOut(1200);
										Panther.health = Panther.health + 8;
										Panther.energy = Panther.energy + 10;
										Panther.attack = Panther.attack + 1;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 1:
									$('.cibo2').append("<a><img id='rf3' src='arancia.png'/></a>");
									$('#rf3').click(function() {
										$('#rf4').fadeOut(1200);
										Panther.health = Panther.health + 7;
										Panther.energy = Panther.energy + 12;
										Panther.attack = Panther.attack + 0;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 2:
									$('.cibo2').append("<a><img id='rf3' src='pesca.jpg'/></a>");
									$('#rf3').click(function() {
										$('#rf4').fadeOut(1200);
										Panther.health = Panther.health + 6;
										Panther.energy = Panther.energy + 9;
										Panther.attack = Panther.attack + 2;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 3:
									$('.cibo2').append("<a><img id='rf3' src='lemon.png'/></a>");
									$('#rf3').click(function() {
										$('#rf4').fadeOut(1200);
										Panther.health = Panther.health + 8;
										Panther.energy = Panther.energy + 11;
										Panther.attack = Panther.attack + 1;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 4:
									$('.cibo2').append("<a><img id='rf3' src='fragole.jpg'/></a>");
									$('#rf3').click(function() {
										$('#rf4').fadeOut(1200);
										Panther.health = Panther.health + 15;
										Panther.energy = Panther.energy + 20;
										Panther.attack = Panther.attack + 3;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
								default:
									console.log("I am not supposed to appear in game");
							}

							switch(randomFoodFour) {
								case 0:
									$('.cibo2').append("<a><img id='rf4' src='ananas.jpg'/></a>");
									$('#rf4').click(function() {
										$('#rf3').fadeOut(1200);
										Panther.health = Panther.health + 8;
										Panther.energy = Panther.energy + 10;
										Panther.attack = Panther.attack + 1;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 1:
									$('.cibo2').append("<a><img id='rf4' src='arancia.png'/></a>");
									$('#rf4').click(function() {
										$('#rf3').fadeOut(1200);
										Panther.health = Panther.health + 7;
										Panther.energy = Panther.energy + 12;
										Panther.attack = Panther.attack + 0;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 2:
									$('.cibo2').append("<a><img id='rf4' src='pesca.jpg'/></a>");
									$('#rf4').click(function() {
										$('#rf3').fadeOut(1200);
										Panther.health = Panther.health + 6;
										Panther.energy = Panther.energy + 9;
										Panther.attack = Panther.attack + 2;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 3:
									$('.cibo2').append("<a><img id='rf4' src='lemon.png'/></a>");
									$('#rf4').click(function() {
										$('#rf3').fadeOut(1200);
										Panther.health = Panther.health + 8;
										Panther.energy = Panther.energy + 11;
										Panther.attack = Panther.attack + 1;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
									break;
								case 4:
									$('.cibo2').append("<a><img id='rf4' src='fragole.jpg'/></a>");
									$('#rf4').click(function() {
										$('#rf3').fadeOut(1200);
										Panther.health = Panther.health + 15;
										Panther.energy = Panther.energy + 20;
										Panther.attack = Panther.attack + 3;
										document.getElementById("health").innerHTML = Panther.health;
										document.getElementById("energy").innerHTML = Panther.energy;
										document.getElementById("attack").innerHTML = Panther.attack;
									});
								default:
									console.log("I am not supposed to appear in game");
							}//continua qui la quarta parte

							$('.cibo2').click(function() {
								$('#parte7').fadeIn(4000);
							});

							$('#ostile').submit(function() {
								$(this).toggle('slow');
								var choiceThree = $('#userchoice3').val().toUpperCase();
								if(choiceThree === "RUN") {
									//do something
									$('#parte8').toggle();
									Panther.energy = Panther.energy - 15;
									document.getElementById("energy").innerHTML = Panther.energy;
									return false;
								}
								else if(choiceThree === "STAY") {
									//do something
									$('#parte8').toggle();
									$('body').toggleClass("STAY",4000);
									$('#health').toggleClass("RED");
									Abilita = Abilita + 1; //portatore di virus
									var decrease = setInterval(function() {
										document.getElementById("health").innerHTML = (Panther.health = Panther.health - 1);
									},300);
									
									return false;
								}

							//ultima parte prima dell incontro con l'Orso
							});	
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
					$('.ifDeer').fadeOut(1000);
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
							$('#parte2').prepend("<img src='Mogiogoro.jpg'/>");
							$('#parte2').prepend("<h3>Its name is Mogiogoro</h3>");
							$('#parte2').prepend("<p>So he went, and he met this individual and singular animal, it was a very ancient frog</p>");
							$('#parte2').prepend("<p>One day the species in the forest suggested him to meet a very singular one, respected by other and wise and old as much as the nature is</p>");
							$('#parte2').prepend("<p>The panther has eaten very much, meanwhile the time runs (and while he eats) he starts to be friendly with the other animal in the area, he is not a predator anymore, he could also understand the languages of the other species and he is now able a bit to sense the nature's whisperings</p>");
							$('#parte2 h6').fadeIn(12000);
							return false;
						});
					});
					return false;
				});
			});
		});
}

$(document).ready(Main);