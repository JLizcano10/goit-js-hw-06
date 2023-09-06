const listOfCategories = document.querySelectorAll(".item");
const numberOfCategories = listOfCategories.length;
console.log(`Number of categories: ${numberOfCategories}`);

for (let i = 0; i < numberOfCategories; i++) {
  const categoryTitle = listOfCategories[i].firstElementChild.textContent;

  const categoryElementCount =
    listOfCategories[i].lastElementChild.childElementCount;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElementCount}`);
}
