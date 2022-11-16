/*
    ## Navegando pelos elementos

    * nextSibling        * nextElementSibling

    * previousSibling    * previousElementSibling
    Informa os elements irmãos
*/
const title = document.querySelector('title');
console.log(title.nextElementSibling);
console.log(title.nextSibling);
console.log(title.previousElementSibling);
console.log(title.previousSibling);