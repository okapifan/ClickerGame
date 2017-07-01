function checkUpgrades(){
	//Waterpomp Upgrade
	if(waterpomp >= 25 && waterpompUpgrade == false){
		waterpompUpgradeObj.style.display = "inline-block";
	} else {
		waterpompUpgradeObj.style.display = "none";
	}
	
	//Boerderij Upgrade
	if(farm >= 25 && farmUpgrade == false){
		farmUpgradeObj.style.display = "inline-block";
	} else {
		farmUpgradeObj.style.display = "none";
	}
	
	//Houthakkershut Upgrade
	if(houthakkersHut >= 25 && houthakkershutUpgrade == false){
		houthakkersHutUpgradeObj.style.display = "inline-block";
	} else {
		houthakkersHutUpgradeObj.style.display = "none";
	}
	
	//Steengroeve Upgrade
	if(steengroeve >= 25 && steenUpgrade == false){
		steengroeveUpgradeObj.style.display = "inline-block";
	} else {
		steengroeveUpgradeObj.style.display = "none";
	}
	
	//Upgrades
	if((waterpompUpgradeObj.style.display == "inline-block") || steengroeveUpgradeObj.style.display == "inline-block" || houthakkersHutUpgradeObj.style.display == "inline-block" || (farmUpgradeObj.style.display == "inline-block")){
		upgradesObj.style.display = "block";
	} else {
		upgradesObj.style.display = "none";
	}
}