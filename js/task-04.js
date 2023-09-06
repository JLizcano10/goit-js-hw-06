const decrementBtn = document.querySelector(
  'button[data-action = "decrement"]'
);
const incrementBtn = document.querySelector(
  'button[data-action = "increment"]'
);
const valueBtn = document.querySelector("#value");

let counterValue = 0;
console.log(counterValue);

const handleDecrement = () => {
  counterValue -= 1;
  console.log(counterValue);
};

const handleIncrement = () => {
  counterValue += 1;
  console.log(counterValue);
};

const handleValue = () => {
  valueBtn.textContent = counterValue;
};

decrementBtn.addEventListener("click", handleDecrement);
incrementBtn.addEventListener("click", handleIncrement);

decrementBtn.addEventListener("click", handleValue);
incrementBtn.addEventListener("click", handleValue);
