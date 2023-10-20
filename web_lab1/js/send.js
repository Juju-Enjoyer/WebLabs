const x = document.getElementById('xCoo');
const y = document.getElementById('y');
const r = document.getElementById('r');
const result = document.getElementsByClassName('ResultTable');


function send (){
    const xX = document.getElementById("xCoo").value;
    const yY = document.getElementById("y").value;
    const rR = document.getElementById("r").value;

    if (!xX || !yY || !rR) {
        alert("Пожалуйста, заполните все поля.");
        return;
    }
    const data = { x: x.value, y: y.value, r: r.value };
    const params = new URLSearchParams(data);
    const url = `http://localhost:63342/web_lab1/php/isHit.php?${params}`;


    fetch(url, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(data =>{
            console.log(data);

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${data.x}</td>
                <td>${data.y}</td>
                <td>${data.r}</td>
                <td>${data.time}</td>
                <td>${data.execution_time}</td>
                <td>${data.hit_result}</td>
            `;

            const tableBody = document.getElementById('tableBody');
            tableBody.appendChild(newRow);
        })

}




function pack(x, y, r) {
    const formData = new FormData();
    formData.append('x', x.value);
    formData.append('y', y.value);
    formData.append('r', r.value);

    return formData;
}
