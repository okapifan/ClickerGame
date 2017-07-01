//leefgebied
var leefgebied = Math.floor(Math.random() * 3) + 1;
var leefgebiedNaam;

//Soort
var soort = Math.floor(Math.random() * 3) + 1;
var soortNaam;

//technologie
var tech = 0;
var techProductie = 0;

//Timer en tijd
var eten; //Timer
var tijd = 30000;

//Randoms
var randomCoal = 0;

//Bewoners
var bewoners = 2;
var maxBewoners;

//grondstoffenproductie
var waterpompProductie = 1;
var farmProductie = 1;
var houthakkershutProductie = 1;
var steenProductie = 1;
var coalProductie = 0;

//Upgrades
var waterpompUpgrade = false;
var farmUpgrade = false;
var houthakkershutUpgrade = false;
var steenUpgrade = false;

//Upgrade Kosten
var waterpompUpgradeKosten = 250;
var farmUpgradeKosten = 250;
var houthakkershutUpgradeKosten = 500;
var steenUpgradeKosten = 500;

//grondstoffen
var water;
var voedsel;
var steen = 0;
var hout = 0;
var coal = 0;
		
//Gebouwen
var houtenHuis = 1;
var kasteel = 0;
var waterpomp = 0;
var farm = 0;
var kolenmijn = 0;
var steengroeve = 0;
var houthakkersHut = 0;
			
//Verbruik
var waterVerbruik;
var voedselVerbruik;
var totaalVoedselVerbruik;
var totaalWaterVerbruik;
var totaalSteenVerbruik;
var totaalHoutVerbruik;
var totaalCoalVerbruik;
		
//Gebouw Kosten
var waterpompKosten;
var farmKosten;
var steenKosten;
var houthakkersHutKosten;
var kolenmijnKosten;
var houtenHuisKosten;
var kasteelKosten;
			
//objecten (divs)
var dorp = document.getElementById("dorp");
var kasteelObj = document.getElementById("kasteel");
var waterpompUpgradeObj = document.getElementById("waterpompUpgrade");
var farmUpgradeObj = document.getElementById("farmUpgrade");
var houthakkersHutUpgradeObj = document.getElementById("houtUpgrade");
var steengroeveUpgradeObj = document.getElementById("steenUpgrade");
var upgradesObj = document.getElementById("upgrades");
var start = document.getElementById("starten");
//var testObj = document.getElementById("test");

//bepaal soort
switch (soort){
	case 2:
		soortNaam = "Goblin";
	break;
	case 3:
		soortNaam = "Elf";
	break;
	default:
		soortNaam = "Mens";
}
		
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
		kasteelKosten = 1000;
		kolenmijnKosten = 15;
		water = Math.floor(Math.random() * 50) + 7;
	break;
	case 3: 
		leefgebiedNaam = "De Bergen";
		waterVerbruik = 1;
		voedselVerbruik = 4;
		voedsel = 11;
		waterpompKosten = 25;
		farmKosten = 75;
		steenKosten = 75;
		houtenHuisKosten = 250;
		houthakkersHutKosten = 200;
		kasteelKosten = 500;
		kolenmijnKosten = 5;
		water = Math.floor(Math.random() * 35) + 26;
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
		kasteelKosten = 1000;
		kolenmijnKosten = 10;
		water = Math.floor(Math.random() * 35) + 26;
}