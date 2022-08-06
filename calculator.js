let currentNumber = 0;
let input = {};

document.addEventListener("keydown", function (event) {
  if (event.key == "0") {
    event.preventDefault();
    zero();
  } else if (event.key == "1") {
    event.preventDefault();
    one();
  } else if (event.key == "2") {
    event.preventDefault();
    two();
  } else if (event.key == "3") {
    event.preventDefault();
    three();
  } else if (event.key == "4") {
    event.preventDefault();
    four();
  } else if (event.key == "5") {
    event.preventDefault();
    five();
  } else if (event.key == "6") {
    event.preventDefault();
    six();
  } else if (event.key == "7") {
    event.preventDefault();
    seven();
  } else if (event.key == "8") {
    event.preventDefault();
    eight();
  } else if (event.key == "9") {
    event.preventDefault();
    nine();
  } else if (event.key == "Escape") {
    event.preventDefault();
    reset();
  } else if (event.key == "Enter") {
    event.preventDefault();
    equals();
  }
});

function zero() {
  console.log(`adding 0 to ${currentNumber}`);
  currentNumber += "0";
  document.getElementById("textField").textContent = currentNumber;
}

function one() {
  console.log(`adding 1 to ${currentNumber}`);
  currentNumber += "1";
  document.getElementById("textField").textContent = currentNumber;
}

function two() {
  console.log(`adding 2 to ${currentNumber}`);
  currentNumber += "2";
  document.getElementById("textField").textContent = currentNumber;
}

function three() {
  console.log(`adding 3 to ${currentNumber}`);
  currentNumber += "3";
  document.getElementById("textField").textContent = currentNumber;
}

function four() {
  console.log(`adding 4 to ${currentNumber}`);
  currentNumber += "4";
  document.getElementById("textField").textContent = currentNumber;
}

function five() {
  console.log(`adding 5 to ${currentNumber}`);
  currentNumber += "5";
  document.getElementById("textField").textContent = currentNumber;
}

function six() {
  console.log(`adding 6 to ${currentNumber}`);
  currentNumber += "6";
  document.getElementById("textField").textContent = currentNumber;
}

function seven() {
  console.log(`adding 7 to ${currentNumber}`);
  currentNumber += "7";
  document.getElementById("textField").textContent = currentNumber;
}

function eight() {
  console.log(`adding 8 to ${currentNumber}`);
  currentNumber += "8";
  document.getElementById("textField").textContent = currentNumber;
}

function nine() {
  console.log(`adding 9 to ${currentNumber}`);
  currentNumber += "9";
  document.getElementById("textField").textContent = currentNumber;
}

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function reset() {
  console.log("Clearing input");
  currentNumber = 0;
  document.getElementById("textField").textContent = currentNumber;
}

function equals() {
  console.log("Calculating formula.");
}
