const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientList = document.querySelector("#ingredients");
// console.log(ingredientList);

for (let i = 0; i < ingredients.length; i++) {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredients[i];
  ingredientList.append(listItem);
}
