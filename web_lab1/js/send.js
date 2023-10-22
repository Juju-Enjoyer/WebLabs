const x = document.getElementById("xCoo");
const y = document.getElementById("y");
const r = document.getElementById("r");
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
  const data = { x: x.value, y: y.value, r: r.value };
  const params = new URLSearchParams(data);
  const url = `https://se.ifmo.ru/~s368938/php/isHit.php?${params}`;
  fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${data.x}</td>
                <td>${data.y}</td>
                <td>${data.r}</td>
                <td>${data.time}</td>
                <td>${data.execution_time}</td>
                <td>${data.hit_result}</td>
            `;
      const tableBody = document.getElementById("tableBody");
      tableBody.appendChild(newRow);
    });
}
