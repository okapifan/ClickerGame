function show(){
	totaalVoedselVerbruik = (farm * farmProductie)-(bewoners * voedselVerbruik);
	totaalWaterVerbruik = (waterpomp * waterpompProductie)-(bewoners * waterVerbruik);
	totaalSteenVerbruik = (steengroeve * steenProductie);
	totaalHoutVerbruik = (houthakkersHut * houthakkershutProductie);
	totaalCoalVerbruik = (kolenmijn * 1);
	document.getElementById("txt").innerHTML = "<strong>Kolonie Informatie</strong>"
										      +"<table><tr><td>Leefgebied: </td><td>"		+leefgebiedNaam
											  +"</td></tr><tr><td>Soort: </td><td>"		+soortNaam
											  +"</td></tr><tr><td>Bewoners: </td><td>"		+bewoners+" / "+maxBewoners
											  +"</td></tr><tr><td>Technolgie punten: </td><td>"	+tech+" ( "+techProductie+" )"
											  +"</td></tr></table><br><br><strong>Grondstoffen</strong>"
											  +"<br><table><tr><td>Eten: </td><td>"	+voedsel+" ( "+totaalVoedselVerbruik+" ) </td</tr>"
											  +"<tr><td>Water: </td><td>"	+water+" ( "+totaalWaterVerbruik+" ) </td></tr>"
											  +"<tr><td>Steen: </td><td>"	+steen+" ( "+totaalSteenVerbruik+" ) </td></tr>"
											  +"<tr><td>Hout: </td><td>"    +hout+" ( "+totaalHoutVerbruik+" ) </td></tr>"
											  +"<tr><td>Steenkool: </td><td>"    +coal+" ( "+totaalCoalVerbruik+" ) </td></tr></table>"
											  
											  +"<br><br><table><td colspan='3' class='titelHeader'><strong>Gebouwen voor Grondstoffen</strong></td>"
											  +"<tr class='titelHeader'><td><strong>Gebouw</td></strong><td><strong>"+"In Bezit"+"</strong></td><td><strong>"+"Kosten"+"</strong></td>"
											  +"</tr><tr><td>Boerderij:     	</td><td>"+farm+"</td><td>"+farmKosten+" steen</td>"
											  +"</tr><tr><td>Waterpomp:			</td><td>"+waterpomp+"</td><td>"+waterpompKosten+" steen</td>"
											  +"</tr><tr><td>Steengroeve:   	</td><td>"+steengroeve+"</td><td>"+steenKosten+" steen</td>"
											  +"</tr><tr><td>Houthakkershut: 	</td><td>"+houthakkersHut+"</td><td>"+houthakkersHutKosten+" hout</td>"
											  +"</tr><tr><td>Kolenmijn:		 	</td><td>"+kolenmijn+"</td><td>"+kolenmijnKosten+" steenkool</td></tr></table>"
											  
											  +"<br><br><table><td colspan='3' class='titelHeader'><strong>Huizen</strong></td>"
											  +"<tr class='titelHeader'><td><strong>Gebouw</td></strong><td><strong>"+"In Bezit"+"</strong></td><td><strong>"+"Kosten"+"</strong></td>"
											  +"</tr><tr><td>Houten Huizen: </td><td>"+houtenHuis+"</td><td>"+houtenHuisKosten+" hout</td>"
											  +"</tr><tr><td>Kasteel:</td><td>       "+kasteel+"</td><td>"+kasteelKosten+" steen</td></tr></table>"
											  ;
}