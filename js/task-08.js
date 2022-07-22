
const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  if (formElements.email.value === "" || formElements.password.value === "") {
    alert("Bсе поля должны быть заполнены!");
  } else {
    const obj = {
      email: formElements.email.value,
      password: formElements.password.value,
    };
    console.log(obj);
  }
  form.reset();
};

form.addEventListener("submit", onFormSubmit);
