function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const body = document.querySelector("body");

const onChangeColor = (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = `${color}`;
  colorText.textContent = color;
};
changeColorButton.addEventListener("click", onChangeColor);
