const btns = document.querySelectorAll('.ripple');

btns.forEach(btn => btn.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const top = e.target.offsetTop;
    const left = e.target.offsetLeft;

    const xCurrent = x - left;
    const yCurrent = y - top;
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yCurrent + 'px';
    circle.style.left = xCurrent + 'px';
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 500)
}));