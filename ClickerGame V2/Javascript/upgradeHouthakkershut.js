function upgradeHouthakkershut(){
	if (hout >= houthakkershutUpgradeKosten){
		hout = hout - houthakkershutUpgradeKosten;
		houthakkershutProductie = 2;
		houthakkershutUpgrade = true;
		checkUpgrades();
		show();
	}
}