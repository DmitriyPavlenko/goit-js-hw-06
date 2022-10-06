const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail !== "" || password !== "") {
    const formData = { mail, password };
    console.log(formData);
  }
  if (mail === "" || password === "") {
    alert("Все поля должны быть заполнены");
  }
  event.currentTarget.reset();
}
