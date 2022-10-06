const sizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeControl.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.target.value}px`;
});
