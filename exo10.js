// Gen yon kle nan stokaj lokal navigatè a, 
// ki rele "blast" ki anrejistre token yon itilizatè; 
// rekipere valè sa. Token nan sou fòm: "web-insecure;34829sjdfnsj32984madsdkj"
// Fè yon fason pou w retire tout karaktè ki avan pwen-vigil la ansanm ak pwen-vigil la


monTableau = "web-insecure;34829sjdfnsj32984madsdkj ";
let  arString = monTableau.split('');

	for(let i=0;i<monTableau.length;i++){
	if((monTableau[i])==";"){
		let  elementsSupprimes = arString.splice(0, i+1);

		}
	}

console.log("Token: " + arString.join(''));
