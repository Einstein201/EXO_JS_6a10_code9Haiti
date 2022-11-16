alert("Pwogram sa la pou l ranvèse tout karaktè  nan yon  san pa gen okenn espas,");

let chenKarakte = prompt("Antre chenn karakte ou an")

nouvoChenKarakte =chenKarakte.replaceAll(" ", "").split("").reverse().join("");
 
console.log(nouvoChenKarakte);
