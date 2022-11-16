/*
    ### Celsius em Fahrenheit

    Crie uma função que receba uma string em Celsius ou fahrenheit e faça a transformação de uma unidade para outra

    C= (F - 32) * 5/9

    F= C * 9/5 + 32
*/
let entrada = "50F"




function convert_temperature(temperature){
    let celsius = temperature.includes("C") || temperature.includes("c")
    let fahrenheit = temperature.includes("F") || temperature.includes("f")
    entrada = parseFloat(temperature)
    let valor_convertido

    if (celsius){
        valor_convertido = entrada * 9/5 +32
        return console.log ("O valor em Fahrenheit é de", valor_convertido.toFixed(2), "F")
    }
    if(fahrenheit){
        valor_convertido = (entrada-32) * 5/9
        return console.log("O valor em Celsius é de", valor_convertido.toFixed(2), "ºC")
    }
    return console.log("Tente novamente")
}
convert_temperature(entrada)
