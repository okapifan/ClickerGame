function show(){
	totaalVoedselVerbruik = (farm * 1)-(bewoners * voedselVerbruik);
	totaalWaterVerbruik = (waterpomp * 1)-(bewoners * waterVerbruik);
	totaalSteenVerbruik = (steengroeve * 1);
	totaalHoutVerbruik = (houthakkersHut * 1);
	document.getElementById("txt").innerHTML = "<strong>Kolonie Informatie</strong>"
										      +"<table><tr><td>Leefgebied: </td><td>"		+leefgebiedNaam
											  +"</td></tr><tr><td>Bewoners: </td><td>"		+bewoners+" / "+maxBewoners
											  +"</td></tr></table><br><br><strong>Grondstoffen</strong>"
											  +"<br><table><tr><td>Eten: </td><td>"	+voedsel+" ( "+totaalVoedselVerbruik+" ) </td</tr>"
											  +"<tr><td>Water: </td><td>"	+water+" ( "+totaalWaterVerbruik+" ) </td></tr>"
											  +"<tr><td>Steen: </td><td>"	+steen+" ( "+totaalSteenVerbruik+" ) </td></tr>"
											  +"<tr><td>Hout: </td><td>"    +hout+" ( "+totaalHoutVerbruik+" ) </td></tr></table>"
											  +"<br><br><strong>Gebouwen voor Grondstoffen</strong>"
											  +"<br><table><tr><td>Waterpomp:</td><td>     "+waterpomp
											  +"<br></tr><tr><td>Boerderij:     </td><td>"+farm
											  +"<br></tr><tr><td>Steengroeve:   </td><td>"+steengroeve
											  +"<br></tr><tr><td>Houthakkershut: </td><td>"+houthakkersHut+"</td></tr></table>"
											  +"<br><br><strong>Huizen</strong>"
											  +"<table><tr><td>Houten Huizen: </td><td>"+houtenHuis+"</td></tr>"
											  +"<br><tr><td>Kasteel:</td><td>       "+kasteel+"</td></tr></table>"
											  ;
}