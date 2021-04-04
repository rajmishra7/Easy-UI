let modal = document.querySelector(".modal");
let show = document.querySelector(".modal-btn");
let closeButton = document.querySelector(".close-button");

const toggleModal=()=> {
    modal.classList.toggle("show-modal");
}
const windowClickHandler=(event)=> {
    if (event.target === modal)
        toggleModal();
}

show.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowClickHandler);