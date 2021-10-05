const btns = document.querySelectorAll('button');
console.log(btns);

btns.forEach(btn => {
    btn.addEventListener('click', () => btn.parentNode.classList.toggle('active'))
})