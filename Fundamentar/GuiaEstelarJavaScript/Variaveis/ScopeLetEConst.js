/*
    ## let e const

    const e let são locais e só funcionam no escopo onde foi criada
    o let não eleva a variável
    const não permite mudança de variável
*/
console.log("> existe x antes do bloco? ", y)
{
    let y=0
}
console.log("> existe x depois do bloco? ", y)