function bouwKasteel(){
	if (steen >= kasteelKosten){
		steen = steen - kasteelKosten;
		kasteel = kasteel + 1;
		checkKasteel();
		veranderMaxBewoners();
		show();
	}
}