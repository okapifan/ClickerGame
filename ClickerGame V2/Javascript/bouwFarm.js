function bouwFarm(){
	if (steen >= farmKosten){
		steen = steen - farmKosten;
		farm = farm + 1;
		checkUpgrades();
		show();
	}
}