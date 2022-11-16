//if...else
let temperature = 37.5

let high_temperature = temperature> 37.5
let medium_temperature = temperature <= 37.5 && temperature >= 37
let good_temperature = temperature < 37

if(temperature>37.5){
    console.log("Febre alta")
}
else if(temperature>=37 && temperature<=37.5){
        console.log("Febre moderada")
}
else{
        console.log("Saudável")
}


    if(high_temperature){
        console.log("Febre alta")
    }
    else if(medium_temperature){
        console.log("Febre moderada")
    }
    else{
        console.log("Saudável")
    }