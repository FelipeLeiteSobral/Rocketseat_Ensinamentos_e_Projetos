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


// ############ Funções
function showMessages(message:string):void {
    console.log (message);
}
showMessages("Olá batxxola!")


//############ Union
function printUserId(id:number | string){
    console.log (`O ID do usuário é ${id}`);
}
printUserId(21+"a")


// ############ Generics
function useState<T extends number | string = number>(){
    let state: T 

    function get(){
        return state;
    }
    function set(newValue: T){
        state = newValue;
    }
    return {get, set};
}

let newState = useState(); // deve declarar como string caso queira armazenar uma string na variável
newState.get();
newState.set("felipe")
newState.set(123)


// ############ Type (reaproveitar tipos)
type IdType = string | number | undefined
let userId: IdType
let adminId: IdType
adminId = 10;


// ############ Type assertions
type userResponse = {
    ui: number;
    name: string;
    avatar: string;
}
let userResponse = {} as userResponse;


// ############ Objetos
type Point = {
    x: number;
    y: number;
}
function printCoord(points: Point){
    console.log(`O eixo x é ${points.x}`);
    console.log(`O eixo y é ${points.y}`);
}
printCoord({x: 23, y: 25})


// ############ Optional
type User = {
    name: string;
    email: string;
    age: number;
    isAdmin?: boolean;
}

let newUser: User = {
    name: 'felipe',
    email: 'felipeleitesobral@hotmail.com';
    age: 18,
}


// ############ Intersecção de tipos
type Gamer = {
    id: number;
    name: string;
}

type Char = {
    nickname: string;
    level: number;
}

type PlayerInfo = Gamer & Char & {
    beauty: boolean;
}
let info: PlayerInfo = {
    id: 1,
    name:"Felipe",
    nickname: "00tt00",
    level:10,
    beauty: true,
}


// ############ Interface
interface Usuario {
    id: number;
    name: string;
}
function registerNewUser (newUsuario: Usuario){
    newUsuario.
}


// ############
type Celular = {
    marca:string;
    numero:number;
}
interface Sapato{
    marca:string;
    numero:number;
}