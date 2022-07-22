let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const onButtonDecr = (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const onButtonIncr = (event) => {
  counterValue += 1;
  value.textContent = counterValue;
};
buttonDecrement.addEventListener("click", onButtonDecr);
buttonIncrement.addEventListener("click", onButtonIncr);
