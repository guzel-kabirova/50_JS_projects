const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const clear = document.getElementById('clear');
const sizeBox = document.querySelector('.size');
const colorInput = document.querySelector('.color-input');

let color = 'black';
let size = 20;

let isPressed = false;
let x = null;
let y = null;

increase.addEventListener('click', () => {
    if (size < 100) {
        increase.disabled = false;
        decrease.disabled = false;
        size += 5;
        sizeBox.innerText = size;
    } else {
        size = 100;
        increase.disabled = true;
        decrease.disabled = false;
    }
});

decrease.addEventListener('click', () => {
    if (size > 5) {
        decrease.disabled = false;
        increase.disabled = false;
        size -= 5;
        sizeBox.innerText = size;
    } else {
        size = 5;
        decrease.disabled = true;
        increase.disabled = false;
    }
});

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorInput.addEventListener('change', e => {
    color = e.target.value;
});

const drawCircle = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
};
const drawLine = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
};

canvas.addEventListener('mousedown', e => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mouseleave', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', e => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});