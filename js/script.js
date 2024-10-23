// menangkap class hovered di console
const list = document.querySelectorAll(".navigation li");
function activelink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activelink));

// menu toggle //
const toggleNavigation = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".content");
// ketika meu di klik aktifkan class active
toggleNavigation.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

const dayNight = document.querySelector(".day-night");
const sun = document.querySelector(".sun");
sun.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("dark");
  document.body.classList.toggle("dark");
});
