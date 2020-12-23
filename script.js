const bar = document.querySelector(".nav-bar");
const x = document.querySelector(".nav-x");
const container = document.querySelector(".full-container");

bar.addEventListener("click", () => {
	container.classList.add("active");
});

x.addEventListener("click", () => {
	container.classList.remove("active");
});
