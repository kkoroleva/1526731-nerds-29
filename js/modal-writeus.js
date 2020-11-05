const writeusLink = document.querySelector(".writeus-link");
const writeusPopup = document.querySelector(".modal-writeus");
const writeusClose = writeusPopup.querySelector(".modal-close");
const writeusForm = writeusPopup.querySelector(".modal-writeus-form");
const enterName = writeusPopup.querySelector(".enter-name");
const enterMail = writeusPopup.querySelector(".enter-mail");
const enterText = writeusPopup.querySelector(".enter-text");

//local storage checker
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

//main part
writeusLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.add("modal-show");
});

writeusClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeusPopup.classList.remove("modal-show");
  writeusPopup.classList.remove("modal-error");
});

writeusForm.addEventListener("submit", function (evt) {
  if (!enterName.value || !enterMail.value || !enterText.value) {
    evt.preventDefault();
    writeusPopup.classList.remove("modal-error");
    writeusPopup.offsetWidth = writeusPopup.offsetWidth;
    writeusPopup.classList.add("modal-error");
    if (!enterName.value) {
      enterName.classList.remove("enter-error");
      enterName.offsetWidth = enterName.offsetWidth;
      enterName.classList.add("enter-error");
    }
    if (!enterMail.value) {
      enterMail.classList.remove("enter-error");
      enterMail.offsetWidth = enterMail.offsetWidth;
      enterMail.classList.add("enter-error");
    }
    if (!enterText.value) {
      enterText.classList.remove("enter-error");
      enterText.offsetWidth = enterText.offsetWidth;
      enterText.classList.add("enter-error");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("Name", enterName.value);
      localStorage.setItem("Mail", enterMail.value);
      localStorage.setItem("Text", enterText.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeusPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeusPopup.classList.remove("modal-show");
      writeusPopup.classList.remove("modal-error");
    }
  }
});
