/*
    # Eventos via JavaScript

*/
const p = document.querySelector("p")
const oi = function () {
    console.log("oi")
}
p.addEventListener("click", oi);
p.addEventListener("click", function () {
        console.log("olá devs")
});
