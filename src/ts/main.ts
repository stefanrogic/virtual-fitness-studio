// BUTTONS
const signInBtn = document.getElementById("signin-btn") as HTMLButtonElement | null;

// MODALS
const signInModal = document.getElementById("signin-modal") as HTMLDivElement | null;

// EVENT LISTENERS
signInBtn?.addEventListener("click", () => signInModal?.classList.toggle("hidden"));
signInModal?.firstElementChild?.addEventListener("click", () => signInModal?.classList.add("hidden"));
signInModal?.lastElementChild?.firstElementChild?.addEventListener("click", () => signInModal?.classList.add("hidden"));
