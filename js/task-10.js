function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
};

const createBoxes = (amount) => {
  let boxesArr = [];
  amount = refs.input.value;

  for (let i = 0; i < amount; i++) {
    const divSize = 30;
    const color = getRandomHexColor();
    boxesArr.push(
      `<div style="width:${divSize + i * 10}px;height:${
        divSize + i * 10
      }px;background-color:${color}"></div>`
    );
  }

  refs.boxes.insertAdjacentHTML("beforeend", boxesArr.join(""));
};

const destroyBoxes = () => {
  refs.boxes.textContent = "";
};
refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);
