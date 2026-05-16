const showBtn = document.getElementById("showEducation");
const hideBtn = document.getElementById("hideEducation");

const hiddenEdu = document.querySelector(".hidden-edu");

showBtn.addEventListener("click", () => {
  hiddenEdu.classList.add("show");

  showBtn.style.display = "none";
  hideBtn.style.display = "inline-flex";
});

hideBtn.addEventListener("click", () => {
  hiddenEdu.classList.remove("show");

  hideBtn.style.display = "none";
  showBtn.style.display = "inline-flex";
});
