const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

const inputHandler = () => {
  if (inputText.value === "") {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = inputText.value;
  }
};

inputText.addEventListener("input", inputHandler);
