const dataY = document.getElementById("y");
const xCoo = document.getElementById("xCoo");
const r = document.getElementById("r");

function check(input) {
  const x = parseFloat(input.value);
  if (isNaN(x) || x <= -5 || x >= 3) {
    input.value = "";
    input.placeholder = "Введите корректное значение для Y (-5, 3)";
  } else {
    xCoo.value = x;
  }
}

function setY(y) {
  dataY.value = y;
}

function toggleButtonsX(clickedButton) {
  const buttons = document.querySelectorAll(".FormX button");
  buttons.forEach((button) => {
    if (button === clickedButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

function toggleButtonsR(clickedButton) {
  const buttons = document.querySelectorAll(".FormR button");
  buttons.forEach((button) => {
    if (button === clickedButton) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
