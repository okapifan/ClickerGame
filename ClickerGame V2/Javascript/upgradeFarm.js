function upgradeFarm(){
	if (steen >= farmUpgradeKosten){
		steen = steen - farmUpgradeKosten;
		farmProductie = 2;
		farmUpgrade = true;
		checkUpgrades();
		show();
	}
}