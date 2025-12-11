let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-regular fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix your error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
  //Adding a class for the error and invalid icons
  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("Invalid")) {
    toast.classList.add("invalid");
  }
  setTimeout(()=>{
    toast.remove();
  },6000)
}
