const display = document.getElementById("display");

// Add value to screen (ONLY display symbols)
function appendValue(value) {
  display.value += value;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Convert and calculate
function calculate() {
  try {
    let expression = display.value;

    // IMPORTANT: Convert ALL UI symbols to JS operators
    expression = expression
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-")
      .replace(/%/g, "/100");

    let result = eval(expression);

    if (!isFinite(result)) {
      display.value = "Error";
      return;
    }

    display.value = result;

  } catch (error) {
    display.value = "Error";
  }
}