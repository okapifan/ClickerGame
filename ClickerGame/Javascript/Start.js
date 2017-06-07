function Start(){
	dorp.style.display = "block";
	if (voedsel > 0 && water > 0){
		eten = setTimeout(Start, tijd);
		voedsel = voedsel - (bewoners * voedselVerbruik)+(farm * 1);
		water = water - (bewoners * waterVerbruik)+(waterpomp * 1);
		steen = steen + (steengroeve * 1);
		hout = hout + (houthakkersHut * 1);
		veranderMaxBewoners();
		if (voedsel < 0){
			voedsel = 0;
		}
		if (water < 0){
			water = 0;
		}
		show();
	} else {
		alert("Je kolonie is dood!!!");
		bewoners = 0;
		document.getElementById("but").innerHTML = "Je kolonie is dood!!!<br><br>";
	}
	document.getElementById("starten").innerHTML = "";
}