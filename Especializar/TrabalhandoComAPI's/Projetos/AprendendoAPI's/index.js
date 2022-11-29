const { response } = require('express')
const express = require('express')

const app = express()  

app.listen("3000")

//GET
app.route('/').get((req,res)=>res.send(author))

app.route('/sobre').get((req,res)=>res.send("Hello sobre"))

//POST
//middleware
app.use(express.json())

app.route('/').post((req,res)=> res.send(req.body))

//PUT
//middleware
app.use(express.json())

let author = "Felipy"

app.route("/").put((req,res)=> {
    author = req.body.author //coloca-se author após o ponto para ele receber apenas o conteúdo dentro da chave e não a estrutura de JSON inteira
    res.send(author)
})

app.route("/:identificador").delete((req,res) => {
    res.send(req.params.identificador)
})

