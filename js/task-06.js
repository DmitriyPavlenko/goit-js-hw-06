const input = document.getElementById("validation-input");

input.onblur = function () {
  console.log(input.value.length);

  if (input.getAttribute("data-length") != input.value.length) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
};
