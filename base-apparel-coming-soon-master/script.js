const formBtn = document.getElementById("form-btn");
const input = document.getElementById("input");
const label = document.getElementById("label");
const message = document.getElementById("message");
const email = document.querySelector("input[type=email]");
const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function handleClick(e) {
  e.preventDefault();
    if (re.test(email.value)) {
    message.style.display = "block";
    message.style.color = "var(--desaturated-red)";
      message.textContent = "You're subscribed"
    } else {
      formBtn.classList.remove("active");
      formBtn.classList.add("error");
      input.classList.remove("input-active");
      input.classList.add("input-error");
      label.classList.add("label-error");
      message.style.display = "block";
      message.textContent = "Please provide a valid email"
    }
}

formBtn.addEventListener("click", handleClick);

// change class to change the design of the field/button
// if the input isn't a valid email address or is empty then change classes
