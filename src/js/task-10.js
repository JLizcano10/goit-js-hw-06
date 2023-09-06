const inputNumber = document.querySelector("input");
// Diferencia con tarea 4. 'button[data-action ="increment"]. Atributos data diferentes!!
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createHandle = () => {
  let increment = 0;
  for (let i = 1; i <= inputNumber.value; i++) {
    const sortColor = getRandomHexColor();
    const boxItem = document.createElement("div");
    boxItem.classList.add("box");
    boxItem.style.width = `${30 + increment}px`;
    boxItem.style.height = `${30 + increment}px`;
    boxItem.style.backgroundColor = sortColor;
    boxesDiv.append(boxItem);
    increment += 10;
  }
  // console.log(increment);
};

const destroyHandle = () => {
  const boxesDivChildren = document.querySelectorAll(".box");
  boxesDivChildren.forEach(box => {
    box.remove();
  });
};

createBtn.addEventListener("click", createHandle);
destroyBtn.addEventListener("click", destroyHandle);
