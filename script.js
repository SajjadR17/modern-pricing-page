const button = document.querySelectorAll(".toggle-btn");
const basicPrice = document.querySelector(".basic-price");
const proPrice = document.querySelector(".pro-price");
const premiumPrice = document.querySelector(".premium-price");
const selectBtns = document.querySelectorAll(".Select-plan");
const planTime = document.querySelectorAll(".mo-yr");

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    button.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    planTime.forEach((pTime) => {
      if (btn.textContent === "Yearly") {
        pTime.textContent = " /yr";
      } else {
        pTime.textContent = " /mo";
      }
    });
    if (btn.textContent === "Yearly") {
      basicPrice.textContent = "$99";
      proPrice.textContent = "$199";
      premiumPrice.textContent = "$255";
    } else {
      basicPrice.textContent = "$19";
      proPrice.textContent = "$49";
      premiumPrice.textContent = "$99";
    }
  });
});

selectBtns.forEach((selectedbtn) => {
  selectedbtn.addEventListener("click", () => {
    selectedbtn.textContent = "Plan selected !!";
    selectedbtn.style.backgroundColor = "rgba(0, 153, 255, 1)";
  });
});
