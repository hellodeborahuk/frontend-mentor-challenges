const formBtn = document.getElementById("form-btn");
const input = document.getElementById("input");
const label = document.getElementById("label");
const labelError = document.getElementsByClassName(".label-error");
const message = document.getElementById("message");
const email = document.querySelector("input[type=email]");
const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function handleClick(e) {
  e.preventDefault();
  if (re.test(email.value)) {
    input.classList.add("input-active");
    input.classList.remove("input-error");
    label.classList.remove("label-error");
    formBtn.classList.add("active");
    formBtn.classList.remove("error");

    message.style.display = "block";
    message.style.color = "var(--desaturated-red)";
    message.textContent = "You're subscribed";
    labelError.classList.remove("input-error");
  } else {
    formBtn.classList.remove("active");
    formBtn.classList.add("error");
    input.classList.remove("input-active");
    input.classList.add("input-error");
    label.classList.add("label-error");
    message.style.display = "block";
    message.textContent = "Please provide a valid email";
    message.style.color = "var(--soft-red)";
  }
}

formBtn.addEventListener("click", handleClick);

// change class to change the design of the field/button
// if the input isn't a valid email address or is empty then change classes
