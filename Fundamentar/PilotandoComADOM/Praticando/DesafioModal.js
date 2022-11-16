const buttonOpenModal= document.getElementById('openModal');
const modalWrapper = document.querySelector("modal-wrapper");

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove("invisible");
}

document.addEventListener("keydown", function(event){
    const isEsckey = event.ket ==="Escape"

    if (isEsckey){
        modalWrapper.classList.add("invisible");
    }
})