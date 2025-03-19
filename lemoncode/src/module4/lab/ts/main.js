"use strict";
var turnElement = document.getElementById("turn");
var backButton = document.getElementById("backButton");
var forwardButton = document.getElementById("forwardButton");
var resetButton = document.getElementById("resetButton");
var inputTurn = document.getElementById("inputTurn");
var goButton = document.getElementById("goButton");
// set initial value to the counter
var initialValue = function () {
    var initialValue = "0";
    if (turnElement) {
        turnElement.innerHTML = initialValue.padStart(2, "0");
    }
};
// trigger function
initialValue();
var handleOnInput = function () {
    var maxLength = 2;
    if (inputTurn.value.length > maxLength) {
        inputTurn.value = inputTurn.value.slice(0, maxLength);
    }
};
if (inputTurn) {
    inputTurn.addEventListener("input", handleOnInput);
}
var handleButtonClick = function (action) {
    if (!turnElement || !inputTurn)
        return;
    var currentValue = parseInt(turnElement.innerHTML);
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
if (backButton)
    backButton.onclick = function () { return handleButtonClick("back"); };
if (forwardButton)
    forwardButton.onclick = function () { return handleButtonClick("forward"); };
if (resetButton)
    resetButton.onclick = function () { return handleButtonClick("reset"); };
if (goButton)
    goButton.onclick = function () { return handleButtonClick("go"); };
// clear input when click on a button different than go
document.addEventListener("click", function (event) {
    if ((event.target === backButton ||
        event.target === forwardButton ||
        event.target === resetButton) &&
        parseInt(inputTurn.value) >= 0) {
        inputTurn.value = "";
    }
});
