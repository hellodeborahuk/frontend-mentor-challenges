const formBtn = document.getElementById("form-btn");
const input = document.getElementById("input");
const label = document.getElementById("label");
const errorMessage = document.getElementById("error-message");
function handleClick(e) {
  e.preventDefault();
  formBtn.classList.remove("active");
  formBtn.classList.add("error");
  input.classList.remove("input-active");
  input.classList.add("input-error");
  label.classList.add("label-error");
  errorMessage.style.display = "block";
}

formBtn.addEventListener("click", handleClick);

// change class to change the design of the field/button
// if the input isn't a valid email address or is empty then change classes
