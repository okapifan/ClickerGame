function checkKasteel(){
	if((bewoners >= 10 && kasteel == 0) || 
	   (bewoners >= 25 && kasteel == 1) || 
	   (bewoners >= 50 && kasteel == 2) || 
	   (bewoners >= 100 && kasteel == 3) || 
	   (bewoners >= 250 && kasteel == 4)){
			kasteelObj.style.display = "inline-block";
	} else {
		kasteelObj.style.display = "none";
	}
}