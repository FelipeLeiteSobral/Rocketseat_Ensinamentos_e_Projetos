const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.get("/", (req, res) => {
    const items = [
        {
    title: "D",
    message: "esenvolver aplicações/serviços de forma fácil",
    },
        {
    title: "E",
    message: "JS usa JavaScript para renderizar HTML",
    },
        {
    title: "A",
    message: "morzinho",
    },
        {
    title: "I",
    message: "nstall EJS",
    },
        {
    title: "S",
    message: "intaxe simples",
    },
];
    const subtitle = "Uma linguagem de modelagem para criação de página HTML utilizando JavaScript"
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})
app.get("/sobre", (req, res) => {
    res.render('pages/about')
})

app.listen(8080);
console.log("servidor Funcionando...");

// o express espera que o index esteja dentro de uma pasta chamada "views"