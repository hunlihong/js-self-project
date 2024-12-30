const bar = document.querySelector(".bar");
const navigation = document.querySelector(".nav-container");
const nav_list = document.querySelectorAll(".item");

bar.addEventListener("click", () => {
  bar.classList.toggle("active");
  navigation.classList.toggle("active");
  //   navigation.addEventListener("click", (click) => {
  //     const check = click.currentTarget;
  //     if (check) {
  //       return null;
  //     } else {
  //       navigation.classList.remove("active");
  //     }
  //   });
});
