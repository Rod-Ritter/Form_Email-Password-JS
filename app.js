const email = document.querySelector("form [name=email]");
const emailField = document.querySelector("#emailField");
const emailFieldContainer = document.querySelector("#emailFieldContainer");
const emailMessage = document.querySelector("#emailMessage");
const emailChecked = document.querySelector("#emailChecked");
const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}\s*?$/;
const password = document.querySelector("form [name=password]");
const passwordField = document.querySelector("#passwordField");
const passwordFieldContainer = document.querySelector(
  "#passwordFieldContainer"
);
const passwordMessage = document.querySelector("#passwordMessage");
const slashEye = document.querySelector(".slash-eye");
const regularEye = document.querySelector(".regular-eye");
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,32}/;
const loginForm = document.querySelector("#loginForm");
const submitButton = document.querySelector("#loginSubmit");
let mailCheck;
let passCheck;


function emailError() {
  const emailValue = email.value;
  if (!emailValue.match(emailRegex)) {
    emailMessage.classList.remove("email-message-none");
    emailMessage.classList.add("email-message");
  } else {
    emailMessage.classList.remove("email-message");
    emailMessage.classList.add("email-message-none");
  }
}

function emailIsValid() {
  const emailValue = email.value;
  if (emailValue.match(emailRegex)) {
    emailField.classList.add("email-valid");
    emailMessage.classList.remove("email-message");
    emailMessage.classList.add("email-message-none");
    emailFieldContainer.classList.add("form-email");
    return mailCheck = true;
  } else {
    emailField.classList.remove("email-valid");
    emailFieldContainer.classList.remove("form-email");
    return mailCheck = false;
  }
}

function passwordIsValid() {
  const passwordValue = password.value;
  if (passwordValue.match(passwordRegex)) {
    passwordField.classList.add("password-valid");
    passwordMessage.classList.remove("password-message");
    passwordMessage.classList.add("password-message-none");
    passwordFieldContainer.classList.add("form-password");
    regularEye.classList.add("regular-eye-valid");
    slashEye.classList.add("slash-eye-valid");
    return passCheck = true;
  } else {
    passwordField.classList.remove("password-valid");
    passwordFieldContainer.classList.remove("form-password");
    regularEye.classList.remove("regular-eye-valid");
    slashEye.classList.remove("slash-eye-valid");
    return passCheck = false;
  }
}

function passwordError() {
  const passwordValue = password.value;
  if (!passwordValue.match(passwordRegex)) {
    passwordMessage.classList.remove("password-message-none");
    passwordMessage.classList.add("password-message");
    return false;
  } else {
    passwordMessage.classList.remove("password-message");
    passwordMessage.classList.add("password-message-none");
    return true;
  }
}

email.addEventListener("keyup", (e) => {
    if (emailIsValid()) {
      return mailCheck = true
    } else {
      email.addEventListener("change", (e) => {
        emailError();
      return mailCheck = false
    });
    }
  });

password.addEventListener("keyup", (e) => {
  if (passwordIsValid()) {
  } else {
    password.addEventListener("change", (e) => {
      passwordError();
    });
  }
});

const passwordEyes = () => {
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
};

passwordEyes();

function loginFormIsValid() {
  const inputs = document.querySelectorAll("input");
  for(let i = 0; i < inputs.length; i++){
  inputs[i].addEventListener("keyup", e => {
    if (emailIsValid() && passwordIsValid()) {
      submitButton.classList.remove("btn-primary-locked");
      submitButton.classList.add("btn-primary");
      loginForm.removeEventListener("submit", (e))
    } else {
      submitButton.classList.add("btn-primary-locked");
      submitButton.classList.remove("btn-primary");
      loginForm.addEventListener("submit", e => {
        e.preventDefault()
        e.stopPropagation()
      })
    }
  });
}   
}

loginFormIsValid()









































// function loginFormIsValid() {
//   const emailValue = email.value;
//   const passwordValue = password.value;
//   const emailPasswordValues = [emailValue, passwordValue];
//   console.log(emailPasswordValues);
//   for (let i = 0 ; emailPasswordValues.length; i++) {
//     emailPasswordValues[i].addEventListener("keyup", e => {
//       console.log(i);
//     })
//   }
// }

// function loginFormIsValid() {
//   const inputs = document.querySelectorAll("input");
//   for(let i = 0; i < inputs.length; i++){
//   inputs[i].addEventListener("keyup", e => {
//     if (inputs[i].value.match(emailRegex) && inputs[i].value.match(passwordRegex)) {
//       submitButton.classList.remove("btn-primary-locked");
//       submitButton.classList.add("btn-primary");
//     }
//   });
// }
// }

