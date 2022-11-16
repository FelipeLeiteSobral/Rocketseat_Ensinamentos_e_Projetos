/*
    # Criando e Adicionando elementos na página

    * insertBefore

    Adicionar em um elemento específico
*/
const body2 = document.querySelector('body');
const div3 = document.createElement('div');
const header = body2.querySelector('header');
div3.innerText = "Adicionando elementos"
body2.insertBefore(div3, header.nextElementSibling);