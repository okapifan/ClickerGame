function upgradePomp(){
	if (steen >= waterpompUpgradeKosten){
		steen = steen - waterpompUpgradeKosten;
		waterpompProductie = 2;
		waterpompUpgrade = true;
		checkUpgrades();
		show();
	}
}