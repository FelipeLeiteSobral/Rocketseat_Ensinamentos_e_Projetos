// throw

function say_my_name (name = " "){
    if (name === " "){
        throw "Nome é necessário"
    }
    console.log("depois do erro")
}


// try...catch

try{
    say_my_name()
}
catch(e){
    console.log(e)
}
