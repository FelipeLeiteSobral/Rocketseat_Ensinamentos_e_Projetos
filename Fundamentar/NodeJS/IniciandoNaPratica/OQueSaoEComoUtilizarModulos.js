// Require para criar um módulo

const path = require("path")
console.log(path.basename(__filename))

const my_module = require("./CriandoModulos")
console.log(my_module)

