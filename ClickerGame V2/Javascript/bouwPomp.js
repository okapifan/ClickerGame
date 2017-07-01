function bouwPomp(){
	if (steen >= waterpompKosten){
		steen = steen - waterpompKosten;
		waterpomp = waterpomp + 1;
		checkUpgrades();
		show();
	}
}