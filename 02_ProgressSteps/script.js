const line = document.getElementById('line');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeCircle = 1;

const update = () => {
    circles.forEach((circle, index) => {
            if (index < activeCircle) {
                circle.classList.add('circle-active');
            } else {
                circle.classList.remove('circle-active');
            }
        }
    );

    if (activeCircle === 1) {
        prev.disabled = true;
    } else if (activeCircle === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
    line.style.width = ((activeCircle - 1)/(circles.length - 1)) * 100 + '%';
};

next.addEventListener('click', () => {
    activeCircle++;
    if (activeCircle > circles.length) {
        activeCircle = circles.length;
    }
    update();
});

prev.addEventListener('click', () => {
    activeCircle--;
    if (activeCircle === 1) {
        activeCircle = 1;
    }
    update();
});




