function bouwSteen(){
	if (steen >= steenKosten){
		steen = steen - steenKosten;
		steengroeve = steengroeve + 1;
		show();
	}
}