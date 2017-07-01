function maakCoal(){
	if (steengroeve >= 1){
		randomCoal = Math.floor(Math.random() * 100);
		if (randomCoal < 5){
			coal = coal + 1;
		}
		document.getElementById("testDing").innerHTML = "getal: "+randomCoal;
	}
}