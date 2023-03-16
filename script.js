const menuOpen = document.querySelector(".icon-menu");
const mainMenu = document.querySelector(".main-menu");
const menuClose = document.querySelector(".menu-close");
const featureArrowUp = document.querySelector(".f-arrow-up");
const featureArrowDown = document.querySelector(".f-arrow-down");
const f_dropDown = document.querySelector(".f-dropdown");
const featuresOpen = document.querySelector(".features");
const companyOpen = document.querySelector(".company");
const c_dropDown = document.querySelector(".c-dropdown");
const companyArrowUp = document.querySelector(".c-arrow-up");
const companyArrowDown = document.querySelector(".c-arrow-down");

const dropDownControl = (input) => {
  input.style.display === "block"
    ? (input.style.display = "none")
    : (input.style.display = "block");
};

const arrowControl = (input1, input2) => {
  input1.classList.toggle("hidden");
  input2.classList.toggle("hidden");
};

menuOpen.addEventListener("click", () => {
  mainMenu.style.display = "block";
  menuClose.style.display = "block";
  menuOpen.style.display = "none";
});

menuClose.addEventListener("click", () => {
  mainMenu.style.display = "none";
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
  location.reload();
});

featuresOpen.addEventListener("click", () => {
  arrowControl(featureArrowUp, featureArrowDown);
  dropDownControl(f_dropDown);
});

companyOpen.addEventListener("click", () => {
  arrowControl(companyArrowUp, companyArrowDown);
  dropDownControl(c_dropDown);
});
