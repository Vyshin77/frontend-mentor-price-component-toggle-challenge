const checkbox = document.getElementById("check");
const monthlyPrice = document.querySelectorAll(".month");
const annualPrice = document.querySelectorAll(".year");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    monthlyPrice.forEach((month) => {
      month.style.display = "flex";
    });
    annualPrice.forEach((year) => {
      year.style.display = "none";
    });
  } else {
    monthlyPrice.forEach((month) => {
      month.style.display = "none";
    });
    annualPrice.forEach((year) => {
      year.style.display = "flex";
    });
  }
});
