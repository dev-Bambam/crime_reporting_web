const submit = document.querySelector("#btn");
const lastName = document.querySelector("#last-name");
const firstName = document.querySelector("#first-name");
const email = document.querySelector("input[type = 'email'] ");
const message = document.querySelector("#message");
const checkbox = document.querySelector("#checkbox");
const consMessage = document.querySelector("#cnst-msg");
const radioButton1 = document.querySelector("#radio1");
const radioButton2 = document.querySelector("#radio2");
const radioButtonContainer = document.querySelector("#radioButton-container");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let valid = true;

  valid &= validate(firstName);
  valid &= validate(lastName);
  valid &= validate(email);
  valid &= validate(message);
  valid &= validate(checkbox);
  valid &= radioCheck(radioButton1, radioButton2);

  if (valid) {
    localStorage.setItem("formSubmitted", "true");
    window.location.href = "./index.html";
    window.scrollTo(0, 0); // Scroll to the top after the page loads
  }
});

// function to validate when form is submitted
function validate(input) {
  switch (input) {
    case checkbox:
      if (!input.checked) {
        errorMessage(consMessage);
      } else return true;
      break;

    default:
      if (input.value == "") {
        errorMessage(input);
      } else return true;
      break;
  }
}
// error message function
function errorMessage(input) {
  removeErrorMessage(input);

  input.style.border = "1px solid hsl(0, 66%, 54%)";
  let p = document.createElement("p"); // for the error message
  p.style.color = "hsl(0, 66%, 54%)";
  p.style.marginTop = "5px";
  p.textContent = "this field is required";
  p.className = "error-message";
  input.after(p);

  switch (input) {
    case email:
      input.placeholder = "abc@example.com";
      p.textContent = "please enter a valid email";
      break;

    case firstName:
      input.placeholder = "John";
      break;

    case lastName:
      input.placeholder = "Doe";
      break;

    case message:
      input.placeholder = " What is on your mind?";
      break;

    case consMessage:
      p.textContent = "please consent to being contacted by the team";
      input.style.border = "";
      input.parentNode.after(p);
      break;

    default:
      input.placeholder = "Myname";
      p.textContent = "this field is required";
      break;

    case radioButtonContainer:
      p.textContent = "please select a query type";
      input.style.border = "";
      input.after(p);
      break;
  }
}
// function to remove existing error messages
function removeErrorMessage(input) {
  let existingError =
    input.nextElementSibling || input.parentNode.nextElementSibling;
  if (existingError && existingError.className === "error-message") {
    existingError.remove();
  }
}
// function to check if one of the radio button is selected
function radioCheck(radio1, radio2) {
  if (!radio1.checked && !radio2.checked) {
    errorMessage(radioButtonContainer);
    return false;
  } else return true;
}
