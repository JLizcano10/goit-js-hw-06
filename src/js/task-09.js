const changeColorBtn = document.querySelector(".change-color");
const bodyBackground = document.querySelector("body");
const textResult = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleColor = () => {
  const sortColor = getRandomHexColor();
  // console.log(sortColor);
  bodyBackground.style.backgroundColor = sortColor;
  textResult.textContent = sortColor;
};

changeColorBtn.addEventListener("click", handleColor);
