const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
  let errors = getLoginFormErrors();

  if (errors.length > 0) {
    e.preventDefault();
    console.log(errors);
  }
});

function getLoginFormErrors() {
  let errors = [];

  // NAME
  if (nameInput.value.trim() === "") {
    errors.push("Name is required");
    nameInput.parentElement.classList.add("incorrect");
  } else {
    nameInput.parentElement.classList.remove("incorrect");
  }

  // PHONE
  if (phoneInput.value.trim() === "") {
    errors.push("Phone is required");
    phoneInput.parentElement.classList.add("incorrect");
  } else {
    phoneInput.parentElement.classList.remove("incorrect");
  }

  // EMAIL
  if (emailInput.value.trim() === "") {
    errors.push("Email is required");
    emailInput.parentElement.classList.add("incorrect");
  } else {
    emailInput.parentElement.classList.remove("incorrect");
  }

  return errors;
}
