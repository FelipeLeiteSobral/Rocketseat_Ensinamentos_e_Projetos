const getFlagsValue = require("./flagsDesafio")

console.log(`Oi ${getFlagsValue("--name")}, ${getFlagsValue("--greeting")}`)