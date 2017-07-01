function upgradeSteen(){
	if (steen >= steenUpgradeKosten){
		steen = steen - steenUpgradeKosten;
		steenProductie = 2;
		steenUpgrade = true;
		checkUpgrades();
		show();
	}
}