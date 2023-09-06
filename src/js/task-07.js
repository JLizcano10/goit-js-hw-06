const inputElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
console.log(inputElement);
console.log(textElement);

const inputHandler = () => {
  console.log(inputElement.value);
  textElement.style.fontSize = `${inputElement.value}px`;
};

inputElement.addEventListener("input", inputHandler);
