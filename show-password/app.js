const eye = document.getElementById("eye");
const password = document.getElementById("password");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye.src = "images/eye-slash-solid-full.svg";
  } else {
    password.type = "password";
    eye.src = "images/eye-solid-full.svg";
  }
});

/* For eye uimg switch only
const eye = document.getElementById("eye");

eye.addEventListener("click", () => {
  if (eye.src.includes("eye-solid-full.svg")) {
    eye.src = "images/eye-solid-slash.svg"; // new image
  } else {
    eye.src = "images/eye-solid-full.svg"; // back to original
  }
});

*/