// ############
function sum(a: number, b: number){
    return a + b
}

console.log(sum(2,3))



// ############
function showTicket(user:string|null , ticket:number):void {
    console.log(`Olá ${user ?? "Usuário Padrão"}. Seu número de bilhete é ${ticket}`)
}

showTicket(null, 123)



// ############ Tipagem para vetores
let user: string [];
user = ["João", "Felipe"];
