$(function() {

  // Mehdi's part2




  // End Mehdi's part2

  // Manouel's part




  // End Manouel's part

  // Karl's part
 $('.parallax').parallax(); //activation du parallax

// création d'un background animé
 var starcountsmall = 100;
	var starglowsmallc = 0;

	var starcountmedium = 50;
	var starglowmediumc = 0;

	var starcountlarge = 20;
	var starglowlargec = 0;

	var rheight;
	var rwidth;
	for(var i = 0; i < starcountsmall; i++) {
		starglowsmallc++;
		rheight = Math.floor(Math.random() * 5998) + 1;
		rwidth = Math.floor(Math.random() * 99) + 1;
		if(starglowsmallc == 10)
		{
			$(".stars__control--small").append('<span class="star__small star__glow" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
			starglowsmallc = 0;
		}
		else
		{
			$(".stars__control--small").append('<span class="star__small" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
		}
	}

	for(var i = 0; i < starcountmedium; i++) {
		starglowmediumc++;
		rheight = Math.floor(Math.random() * 5998) + 1;
		rwidth = Math.floor(Math.random() * 99) + 1;
		if(starglowmediumc == 7)
		{
			$(".stars__control--medium").append('<span class="star__medium star__glow" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
			starglowmediumc = 0;
		}
		else
		{
			$(".stars__control--medium").append('<span class="star__medium" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
		}
	}

	for(var i = 0; i < starcountlarge; i++) {
		starglowlargec++;
		rheight = Math.floor(Math.random() * 5998) + 1;
		rwidth = Math.floor(Math.random() * 99) + 1;
		if(starglowlargec == 3)
		{
			$(".stars__control--large").append('<span class="star__large star__glow" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
			starglowlargec = 0;
		}
		else
		{
			$(".stars__control--large").append('<span class="star__large" style="top:'+ rheight +'px;left:' + rwidth +'vw;"></span>');
		}
	} //fin de la fonction pour le background



  // End Karl's part

  // Mehdi's part




  // End Mehdi's part

  // Magalie's part




  // End Magalie's part
});
