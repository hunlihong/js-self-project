const bar = document.querySelector(".bar-icon");
const cancel = document.querySelector(".cancel");
const navigation = document.querySelector(".nav-container");

bar.addEventListener("click", () => {
  navigation.classList.add("active");
});
cancel.addEventListener("click", () => {
  navigation.classList.remove("active");
});
