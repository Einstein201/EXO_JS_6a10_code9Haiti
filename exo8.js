alert("Pwogram sa la pou l retire tout espas blan ki nan yon blok tèks.")

let teks = prompt("Antre blok  tèks ou an")
let nouvoTeks=teks.replaceAll(" ", "")

console.log(nouvoTeks)