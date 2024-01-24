// STATES
let navToggle: boolean = false;
let modalToggle: boolean = false;
let pricingToggle: number = 1;

const pricingOnStyles: string[] = ["text-white", "bg-red-400"];
const pricingOffStyles: string[] = ["text-red-400", "bg-white"];

const pricingMonthly: string[] = ["$14.99", "$24.99", "$34.99"];
const pricingYearly: string[] = ["$9.99", "$19.99", "$29.99"];

// BUTTONS
const signInBtn = document.getElementById("signin-btn") as HTMLButtonElement | null;
const pricingButtons = document.getElementById("pricing-plan") as HTMLDivElement | null;

// MODALS
const signInModal = document.getElementById("signin-modal") as HTMLDivElement | null;

// NAVBAR
const navbar = document.getElementById("navbar") as HTMLDivElement | null;

// TEXT ELEMENTS

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

pricingButtons?.addEventListener("click", (e: Event) => {
  if ((e?.target as HTMLButtonElement)?.id === "plan-btn-0" && pricingToggle === 1) {
    pricingToggle = 0;

    pricingOnStyles.map((style: string, i: number) => {
      (e?.target as HTMLButtonElement).classList.replace(pricingOffStyles[i], style);
    });
    pricingOffStyles.map((style: string, i: number) => {
      (e?.target as HTMLButtonElement).nextElementSibling?.classList.replace(pricingOnStyles[i], style);
    });

    pricingMonthly.map((price, i) => {
      (document.getElementById(`pricing-price-${i}`) as HTMLHeadingElement).textContent = price + "/month";
      (document.getElementById(`pricing-disclaimer-${i}`) as HTMLParagraphElement).textContent = "*When billed monthly";
    });

    console.log("When billed monthly" as string, ["$14.99", "$24.99", "$34.99"] as string[]);
  }

  if ((e?.target as HTMLButtonElement)?.id === "plan-btn-1" && pricingToggle === 0) {
    pricingToggle = 1;

    pricingOnStyles.map((style: string, i: number) => {
      (e?.target as HTMLButtonElement).classList.replace(pricingOffStyles[i], style);
    });
    pricingOffStyles.map((style: string, i: number) => {
      (e?.target as HTMLButtonElement).previousElementSibling?.classList.replace(pricingOnStyles[i], style);
    });

    pricingYearly.map((price, i) => {
      (document.getElementById(`pricing-price-${i}`) as HTMLHeadingElement).textContent = price + "/month";
      (document.getElementById(`pricing-disclaimer-${i}`) as HTMLParagraphElement).textContent = "*When billed yearly";
    });
  }
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
