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
  const url = path + `main?` + params.toString();
  window.location = url;
}


