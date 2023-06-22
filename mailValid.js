const email = document.querySelector("form [name=email]");
const emailField = document.querySelector("#emailField");
const emailFieldContainer = document.querySelector("#emailFieldContainer");
const emailMessage = document.querySelector("#emailMessage");
const emailChecked = document.querySelector("#emailChecked");
const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}\s*?$/;

const emailIsValid = () => {
  email.addEventListener("change", e => {
    const emailValue = email.value;
    if (!emailValue.match(emailRegex)) {
      emailMessage.classList.remove("email-message-none");
      emailMessage.classList.add("email-message");
      return false;
    } 
    else {
      emailMessage.classList.remove("email-message");
      emailMessage.classList.add("email-message-none");
    }
  });
  email.addEventListener("keyup", e => {
    const emailValue = email.value;
    if (emailValue.match(emailRegex)) {
      emailField.classList.add("email-valid");
      emailMessage.classList.remove("email-message");
      emailMessage.classList.add("email-message-none");
      emailFieldContainer.classList.add("form-email")
      return true;
    } else {
      emailField.classList.remove("email-valid");
      emailFieldContainer.classList.remove("form-email");
    }
  });
};

emailIsValid();
console.log(emailIsValid());










