const successMessage = document.querySelector("#success-message");

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("formSubmitted")) {
    successMessage.classList.remove("hidden");
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 3000);
    localStorage.removeItem("formSubmitted");
  }
});