const dataY = document.getElementById('y');
const xCoo = document.getElementById('xCoo');



function check(input) {
    var y = parseFloat(input.value);
    if (isNaN(y) || y <= -3 || y >= 3) {
        input.value = "";
        input.placeholder = "Введите корректное значение для Y (-3, 3)";
    }
    else{
        dataY.value = y;
    }
}
function setX(x){
    xCoo.value = x;
}
function toggleButtonsX(clickedButton) {
    const buttons = document.querySelectorAll('.FormX button');
    buttons.forEach((button) => {
        if (button === clickedButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
function toggleButtonsR(clickedButton) {
    const buttons = document.querySelectorAll('.FormR button');
    buttons.forEach((button) => {
        if (button === clickedButton) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}