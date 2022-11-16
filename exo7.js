// Yo ba w yon chenn karaktè, ranplase tout karaktè 
// ki plase devan yon vwayèl pa asteriks(*). 
// Epi afiche nouvo chenn karaktè a.

let chenKarakte= prompt("Antre chenn karakte ou an");

let  arrayOfStrings = chenKarakte.split('');

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];


for(let i=0;i<arrayOfStrings.length;i++){
    for(let j=0;j<vowels.length;j++){
	   
		if(vowels[j]===(arrayOfStrings[i])){
			arrayOfStrings[i-1]= "*";
			
		}
	}
}

console.log(" Ansyenn chen karakte: " + chenKarakte);
console.log(" Nouvo chenn karakte:  " + arrayOfStrings.join(''));

