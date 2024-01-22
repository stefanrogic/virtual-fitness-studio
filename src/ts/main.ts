let navToggle: boolean = false;
let modalToggle: boolean = false;

// BUTTONS
const signInBtn = document.getElementById("signin-btn") as HTMLButtonElement | null;

// MODALS
const signInModal = document.getElementById("signin-modal") as HTMLDivElement | null;

// NAVBAR
const navbar = document.getElementById("navbar") as HTMLDivElement | null;

// EVENT LISTENERS
signInBtn?.addEventListener("click", () => {
  signInModal?.classList.remove("hidden");
  navbar?.classList.remove("sticky");
  modalToggle = true;
});
signInModal?.firstElementChild?.addEventListener("click", () => {
  signInModal?.classList.add("hidden");
  modalToggle = false;
});
signInModal?.lastElementChild?.firstElementChild?.addEventListener("click", () => {
  signInModal?.classList.add("hidden");
  modalToggle = false;
});

window.addEventListener("mousemove", (e: MouseEvent) => {
  if (e.clientY <= 89 && !navToggle && !modalToggle) {
    navbar?.classList.add("sticky");
    navToggle = true;
  }

  if (e.clientY > 89 && navToggle) {
    navbar?.classList.remove("sticky");
    navToggle = false;
  }
});
