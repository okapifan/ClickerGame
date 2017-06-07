//leefgebied
var leefgebied = Math.floor(Math.random() * 2) + 1;
var leefgebiedNaam;

//Timer en tijd
var eten; //Timer
var tijd = 30000;
	
//Bewoners
var bewoners = 2;
var maxBewoners;
	
//grondstoffen
var water;
var voedsel;
var steen = 0;
var hout = 0;
		
//Gebouwen
var houtenHuis = 1;
var kasteel = 0;
var waterpomp = 0;
var farm = 0;
var steengroeve = 0;
var houthakkersHut = 0;
			
//Verbruik
var waterVerbruik;
var voedselVerbruik;
var totaalVoedselVerbruik;
var totaalWaterVerbruik;
var totaalSteenVerbruik;
var totaalHoutVerbruik;
		
//Gebouw Kosten
var waterpompKosten;
var farmKosten;
var steenKosten;
var houthakkersHutKosten;
var houtenHuisKosten;
var kasteelKosten = 1000;
			
//objecten (divs)
var dorp = document.getElementById("dorp");
var kasteelObj = document.getElementById("kasteel");
			
//Bepaal leefgebied
switch (leefgebied){
	case 2: 
		leefgebiedNaam = "Woestijn";
		waterVerbruik = 3;
		voedselVerbruik = 2;
		voedsel = 7;
		waterpompKosten = 25;
		farmKosten = 50;
		steenKosten = 100;
		houtenHuisKosten = 250;
		houthakkersHutKosten = 100;
		water = Math.floor(Math.random() * 50) + 1;
	break;
	default:
		leefgebiedNaam = "Het Bos";
		waterVerbruik = 2;
		voedselVerbruik = 3;
		voedsel = 9;
		farmKosten = 25;
		waterpompKosten = 50;
		steenKosten = 100;
		houtenHuisKosten = 100;
		houthakkersHutKosten = 250;
		water = Math.floor(Math.random() * 35) + 26;
}