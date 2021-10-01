const boxes = document.querySelectorAll('.box');

const showBoxes = () => {
    const triggerBottom = document.defaultView.innerHeight / 5 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else box.classList.remove('show')
    })

}
document.defaultView.addEventListener('scroll', showBoxes)
