const form = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Bсе поля должны быть заполнены!");
  } else {
    const obj = {
      email: email.value,
      password: password.value,
    };
    console.log(obj);
  }
  form.reset();
};

form.addEventListener("submit", onFormSubmit);
