function betterStart(){
	dorp.style.display = "block";
	start.style.display = "none";
	eten = setTimeout(betterStart, tijd);
	voedsel = voedsel - (bewoners * voedselVerbruik)+(farm * farmProductie);
	water = water - (bewoners * waterVerbruik)+(waterpomp * waterpompProductie);
	steen = steen + (steengroeve * steenProductie);
	coal = coal + (kolenmijn * 1);
	maakCoal();
	hout = hout + (houthakkersHut * houthakkershutProductie);
	veranderMaxBewoners();
	show();
	if (voedsel <= 0 || water <= 0){
		if (voedsel < 0){
			voedsel = 0;
		}
		if (water < 0){
			water = 0;
		}
		veranderMaxBewoners();
		show();
		alert("Je kolonie is dood!!!");
		document.getElementById("dorp").innerHTML = "Je kolonie is dood!!!<br><br>";
	}
}