const { EventEmitter } = require("events")

const ev = new EventEmitter()


ev.emit("say something") // emitindo evento
ev.emit("say something")