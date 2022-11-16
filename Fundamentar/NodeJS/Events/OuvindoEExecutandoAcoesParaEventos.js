const { EventEmitter } = require("events")

const ev = new EventEmitter()

ev.on("say something"/* ouvir evento */ , (message) => {console.log("Eu ouvi você", message)} /* Executando ação no evento */) 

ev.emit("say something", "Mayk") 
ev.emit("say something", "Felipe")
ev.emit("say something", "João")