export default function initModal() {
    const openButton = document.querySelector("[data-modal='open']")
    const closeButton = document.querySelector("[data-modal='close']")
    const containerModal = document.querySelector("[data-modal='container']")

    if (openButton && closeButton && containerModal) {
        //abrir modal
        openButton.addEventListener("click", (e) => {
            e.preventDefault();
            containerModal.classList.add("active")
        })
        
        //fechar modal
        closeButton.addEventListener("click", (e) => {
            e.preventDefault();
            containerModal.classList.remove("active")
        })

        //fechar quando clica fora
        containerModal.addEventListener("click", function(e) {
            if (e.target === this) {
                containerModal.classList.remove("active")
            }        
        })
    }
}