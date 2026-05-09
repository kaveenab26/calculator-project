const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function calculate() {
  try {
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}