/*
    # Eventos via JavaScript

    argumentEvent
*/
const input2 = document.querySelector('input');
input2.onclick = function (event){
    console.log(event)
}
input2.addEventListener("keydown", function (event){
    console.log(event.key);
    console.log(event.currentTarget.value);
})