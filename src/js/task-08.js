const formElement = document.querySelector(".login-form");
let dataObject = {};

function handleSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  console.log(form);
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" && password === "") {
    alert("All fields on the form must be completed");
  } else {
    dataObject.email = email;
    dataObject.password = password;
    console.log(dataObject);
  }

  form.reset();
}

formElement.addEventListener("submit", handleSubmit);
