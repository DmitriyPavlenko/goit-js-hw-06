const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
let valueEL = document.querySelector("#value");

decrementBtn.addEventListener("click", () => (valueEL.textContent -= 1));

incrementBtn.addEventListener(
  "click",
  () => (valueEL.textContent = Number(valueEL.textContent) + 1)
);
