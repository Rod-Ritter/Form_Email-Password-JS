const loginForm = document.querySelector("#loginForm");
const submitButton = document.querySelector("#loginSubmit");


loginForm.addEventListener("submit", e => {
  e.preventDefault();
});

const loginFormIsValid = () => {
  if (emailIsValid()) {
    submitButton.classList.remove("btn-primary-locked");
    submitButton.classList.add("btn-primary");
  } 
}

loginFormIsValid();

