function bouwKolenMijn(){
	if (coal >= kolenmijnKosten){
		coal = coal - kolenmijnKosten;
		kolenmijn = kolenmijn + 1;
		checkUpgrades();
		show();
	}
}