/*
    # Array no código    
*/
const pilotos = ["Senna", "Prost", "Schumacher", "Hamilton"]
console.log(pilotos[0]) // Senna (A indexação começa pelo número 0)

// Acessar o tamanho do Array
console.log(pilotos.length)

// iterável
for (let piloto of pilotos){
    console.log(piloto)
}

// Adicionar elemento
pilotos.push("Alonso");
console.log(pilotos) 

// Encontrar um elemento
const senna = pilotos.find(piloto => piloto === "Senna");
console.log(senna)

// Deletar elemento
pilotos.splice(1,1) // Retirar  a partir da (1) posição (1) elemento
console.log(pilotos)   