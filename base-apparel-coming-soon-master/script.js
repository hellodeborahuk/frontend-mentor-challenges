
const formBtn = document.getElementById("form-btn")
const input = document.getElementById("input")

function handleClick(e) {
    e.preventDefault()
    formBtn.classList.remove("active")
    formBtn.classList.add("error")
    input.classList.remove("input-active")
    input.classList.add("input-error")
}


formBtn.addEventListener("click", handleClick)