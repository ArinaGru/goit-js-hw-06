
const rangeInp = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

const onTextToChange = (event) => {
  textToChange.style.fontSize = `${event.currentTarget.value}px`;
};

rangeInp.addEventListener("input", onTextToChange);
