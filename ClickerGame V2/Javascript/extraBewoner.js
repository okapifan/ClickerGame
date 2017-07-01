function extraBewoner(){
	if (bewoners < maxBewoners){
		bewoners = bewoners + 1;
	}
	checkKasteel();
	show();
}