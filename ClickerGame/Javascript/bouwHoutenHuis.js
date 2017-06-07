function bouwHoutenHuis(){
	if (hout >= houtenHuisKosten){
		hout = hout - houtenHuisKosten;
		houtenHuis = houtenHuis + 1;
		veranderMaxBewoners();
		show();
	}
}