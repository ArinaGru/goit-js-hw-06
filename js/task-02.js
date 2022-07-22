const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");

const itemsEl = ingredients.map((name) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = name;
  itemEl.classList = "item";
  return itemEl;
});

listEl.append(...itemsEl)