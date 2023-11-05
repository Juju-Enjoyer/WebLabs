const x = document.getElementById("xCoo");
const y = document.getElementById("y");
const result = document.getElementsByClassName("ResultTable");
const messageElement = document.createElement("div");
messageElement.classList.add("message");
document.body.appendChild(messageElement);

function send() {
    if (!x.value || !y.value || !r.value) {
        messageElement.innerText = "Пожалуйста, заполните все поля.";
        messageElement.style.display = "block";
        setTimeout(() => {
            messageElement.style.display = "none";
        }, 2000);
        return;
    }
    const data = {x: x.value, y: y.value, r: r.value};
    const params = new URLSearchParams(data);
    window.location = path + `main?` + params.toString();
}

function getPoint() {
    fetch('/points')
        .then(response => response.text())
        .then(data => {
            // Используйте полученные данные для отображения точек на графике
            data.forEach(point => {
                console.log(point)
                dotForList(point.x, point.y, point.result);
            });
        });
}
window.addEventListener("DOMContentLoaded",getPoint)



