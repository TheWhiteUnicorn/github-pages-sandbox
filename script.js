const countButton = document.querySelector("#count-button");
const clickCount = document.querySelector("#click-count");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");

let count = 0;

countButton.addEventListener("click", () => {
  count += 1;
  clickCount.value = String(count);
  clickCount.textContent = String(count);
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeLabel.textContent = isDark ? "Светлая тема" : "Тёмная тема";
});
