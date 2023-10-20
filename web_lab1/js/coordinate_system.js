const graph = document.getElementById("graph");
const point = document.getElementById('point');
const ctx = graph.getContext('2d');
const pointCtx = point.getContext('2d');
const rRes = document.getElementById('r');
const xButton = document.getElementById('xCoo');
const yButton= document.getElementById('y');

const graphWidth = graph.clientWidth;
const graphHeight = graph.clientHeight;

const scaleX = 40;
const scaleY = 40;

const xAxis = (Math.round(graphWidth / scaleX / 2) - 1) * scaleX;
const yAxis = Math.round(graphHeight / scaleY / 2) * scaleY;

ctx.font = '20px fantasy';

// Функция для отрисовки координатной сетки
function drawGrid() {
    ctx.beginPath();
    ctx.strokeStyle = '#ff0000';
    for (let i = 0; i <= graphWidth; i = i + scaleX) {
        ctx.moveTo(i, 1);
        ctx.lineTo(i, graphHeight);
        ctx.fillText((i - xAxis) / scaleX, i, yAxis);
    }
    for (let i = 0; i <= graphHeight; i = i + scaleY) {
        ctx.moveTo(0, i);
        ctx.lineTo(graphWidth, i);
        ctx.fillText((yAxis - i) / scaleY, xAxis, i);
    }
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.moveTo(xAxis, 0);
    ctx.lineTo(xAxis - 1, graphHeight);
    ctx.stroke();
    ctx.moveTo(0, yAxis);
    ctx.lineTo(graphWidth, yAxis - 1);
    ctx.stroke();
    ctx.closePath();
}

// Функция для отрисовки графика
function drawGraph(r) {
    ctx.fillStyle ='#000000'
    ctx.strokeStyle = '#000000';
    ctx.clearRect(0, 0, graphWidth, graphHeight); // Очистка канваса
    drawGrid(); // Отрисовка координатной сетки

    const R = r * 40;
    const centerX = (Math.round(graphWidth / scaleX / 2) - 1) * scaleX;
    const centerY = Math.round(graphHeight / scaleY / 2) * scaleY;

    // Рисуем левый треугольник
    ctx.beginPath();
    ctx.moveTo(centerX - R, centerY);
    ctx.lineTo(centerX, centerY - R / 2);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    ctx.strokeStyle = '#c0392b';
    ctx.stroke();
    ctx.closePath();

    // Рисуем прямоугольник
    ctx.beginPath();
    ctx.rect(centerX, centerY - R, R / 2, R);
    ctx.fillStyle = '#3498db';
    ctx.fill();
    ctx.strokeStyle = '#2980b9';
    ctx.stroke();
    ctx.closePath();


    // Рисуем круг
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + R / 2, centerY);
    ctx.arc(centerX, centerY, R / 2, 0, 1 / 2 * Math.PI);
    ctx.fillStyle = '#f39c12';
    ctx.fill();
    ctx.strokeStyle = '#d35400';
    ctx.stroke();
    ctx.closePath();



    ctx.fillStyle ='#000000'
    ctx.strokeStyle = '#000000';
    rRes.value = r;
}

function com(){
    const xRes = xButton.value;
    const yRes = yButton.value;
    const x = (xAxis + xRes * scaleX);
    const y = (yAxis - yRes * scaleY);


    // Очищаем область вокруг точки
pointCtx.clearRect(0,0,graphWidth,graphHeight);
    // Рисуем точку
    pointCtx.beginPath();
    pointCtx.arc(x, y, 3, 0, 2 * Math.PI);
    pointCtx.fillStyle = '#1900ff';
    pointCtx.fill();
    pointCtx.closePath();
}



drawGrid(); // Отрисовка координатной сетки
/*
drawGraph(3); // Начальная отрисовка графика с R=3*/
