function bouwHoutHakkersHut(){
	if (hout >= houthakkersHutKosten){
		hout = hout - houthakkersHutKosten;
		houthakkersHut = houthakkersHut + 1;
		show();
	}
}