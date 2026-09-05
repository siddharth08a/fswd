// Temperature Converter JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const convertBtn = document.getElementById("convertBtn");
  const clearBtn = document.getElementById("clearBtn");
  const inputEl = document.getElementById("celsiusInput");
  const errorBox = document.getElementById("errorBox");
  const resultBox = document.getElementById("resultBox");
  const fahrenheitValue = document.getElementById("fahrenheitValue");
  const conditionBadge = document.getElementById("conditionBadge");

  function convertTemperature() {
    const inputVal = inputEl.value.trim();

    // Reset UI state
    errorBox.style.display = "none";
    resultBox.style.display = "none";

    // 1. Check for empty input
    if (inputVal === "") {
      showError("Please enter a temperature value.");
      return;
    }

    // 2. Reject alphabets, symbols, spaces, multiple decimals/minuses
    const strictNumberRegex = /^-?\d+(\.\d+)?$/;
    if (!strictNumberRegex.test(inputVal)) {
      showError("Invalid input! Alphabets, symbols, and special characters are not allowed.");
      return;
    }

    // 3. Strict Range Check: [-50 to 150]
    const celsius = parseFloat(inputVal);
    if (celsius < -50 || celsius > 150) {
      showError(`Value out of range! Enter a value between -50°C and 150°C (You entered: ${celsius}°C).`);
      return;
    }

    // 4. Formula: F = (C * 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;

    // 5. Display result on same page
    fahrenheitValue.innerHTML = `${fahrenheit.toFixed(2)} &deg;F`;

    // Weather condition badge
    if (celsius <= 0) {
      conditionBadge.textContent = "❄️ Freezing Condition";
      conditionBadge.style.background = "#e0f2fe";
      conditionBadge.style.color = "#0369a1";
    } else if (celsius <= 20) {
      conditionBadge.textContent = "🧣 Cold Weather";
      conditionBadge.style.background = "#dbeafe";
      conditionBadge.style.color = "#1e40af";
    } else if (celsius <= 35) {
      conditionBadge.textContent = "☀️ Moderate / Room Temperature";
      conditionBadge.style.background = "#dcfce7";
      conditionBadge.style.color = "#15803d";
    } else if (celsius <= 60) {
      conditionBadge.textContent = "🔥 Hot Weather";
      conditionBadge.style.background = "#ffedd5";
      conditionBadge.style.color = "#c2410c";
    } else {
      conditionBadge.textContent = "⚠️ Extremely High Heat";
      conditionBadge.style.background = "#fee2e2";
      conditionBadge.style.color = "#b91c1c";
    }

    resultBox.style.display = "block";
  }

  function showError(msg) {
    errorBox.textContent = msg;
    errorBox.style.display = "block";
    inputEl.focus();
  }

  function clearAll() {
    inputEl.value = "";
    errorBox.style.display = "none";
    resultBox.style.display = "none";
    inputEl.focus();
  }

  convertBtn.addEventListener("click", convertTemperature);
  clearBtn.addEventListener("click", clearAll);

  inputEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      convertTemperature();
    }
  });
});
