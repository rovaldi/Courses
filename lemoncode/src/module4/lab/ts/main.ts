const turnElement = document.getElementById("turn");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");
const resetButton = document.getElementById("resetButton");
const inputTurn = document.getElementById("inputTurn") as HTMLInputElement;
const goButton = document.getElementById("goButton");

// set initial value to the counter
const initialValue = () => {
  const initialValue = "0";
  if (turnElement) {
    turnElement.innerHTML = initialValue.padStart(2, "0");
  }
};

// trigger function
initialValue();

const handleOnInput = (): void => {
  const maxLength = 2;
  if (inputTurn.value.length > maxLength) {
    inputTurn.value = inputTurn.value.slice(0, maxLength);
  }
};

if (inputTurn) {
  inputTurn.addEventListener("input", handleOnInput);
}

const handleButtonClick = (action: string) => {
  if (!turnElement || !inputTurn) return;

  const currentValue = parseInt(turnElement.innerHTML);

  switch (action) {
    case "back":
      if (currentValue > 0) {
        turnElement.innerHTML = (currentValue - 1).toString().padStart(2, "0");
      }
      break;
    case "forward":
      if (currentValue < 99) {
        turnElement.innerHTML = (currentValue + 1).toString().padStart(2, "0");
      }
      break;
    case "reset":
      initialValue();
      break;
    case "go":
      turnElement.innerHTML = inputTurn.value.toString().padStart(2, "0");
      break;
  }
};

if (backButton) backButton.onclick = () => handleButtonClick("back");
if (forwardButton) forwardButton.onclick = () => handleButtonClick("forward");
if (resetButton) resetButton.onclick = () => handleButtonClick("reset");
if (goButton) goButton.onclick = () => handleButtonClick("go");

// clear input when click on a button different than go
document.addEventListener("click", (event) => {
  if (
    (event.target === backButton ||
      event.target === forwardButton ||
      event.target === resetButton) &&
    parseInt(inputTurn.value) >= 0
  ) {
    inputTurn.value = "";
  }
});
