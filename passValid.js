const password = document.querySelector("form [name=password]");
const passwordField = document.querySelector("#passwordField");
const passwordFieldContainer = document.querySelector("#passwordFieldContainer");
const passwordMessage = document.querySelector("#passwordMessage");
const slashEye = document.querySelector(".slash-eye");
const regularEye = document.querySelector(".regular-eye");
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,32}/;

const passwordIsValid = () => {
  slashEye.addEventListener("click", (e) => {
    slashEye.classList.add("eye-none");
    regularEye.classList.remove("eye-none");
    password.type = "text";
  });
  
  regularEye.addEventListener("click", (e) => {
    regularEye.classList.add("eye-none");
    slashEye.classList.remove("eye-none");
    password.type = "password";
  });
  
  password.addEventListener("change", (e) => {
    const passwordValue = password.value;
    if (!passwordValue.match(passwordRegex)) {
      passwordMessage.classList.remove("password-message-none");
      passwordMessage.classList.add("password-message");
      return false;
    } else {
      passwordMessage.classList.remove("password-message");
      passwordMessage.classList.add("password-message-none");
    }
  });
  
  password.addEventListener("keyup", (e) => {
    const passwordValue = password.value;
    if (passwordValue.match(passwordRegex)) {
      passwordField.classList.add("password-valid");
      passwordMessage.classList.remove("password-message");
      passwordMessage.classList.add("password-message-none");
      passwordFieldContainer.classList.add("form-password");
      regularEye.classList.add("regular-eye-valid");
      slashEye.classList.add("slash-eye-valid");
      return true;
    } else {
      passwordField.classList.remove("password-valid");
      passwordFieldContainer.classList.remove("form-password");
      regularEye.classList.remove("regular-eye-valid");
      slashEye.classList.remove("slash-eye-valid");
    }
  });
}

passwordIsValid();

