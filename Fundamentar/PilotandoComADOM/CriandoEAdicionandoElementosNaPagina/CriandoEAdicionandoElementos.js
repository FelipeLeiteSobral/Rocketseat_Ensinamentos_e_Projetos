/*
    # Criando e Adicionando elementos na página

    * createElement         * append prepend
*/
const div = document.createElement('div'); 
const div2 = document.createElement('div'); 
div.innerText = "Olá devs com append"
div2.innerText = "Olá devs com prepend"
const body = document.querySelector('body');
body.append(div);
body.prepend(div2);