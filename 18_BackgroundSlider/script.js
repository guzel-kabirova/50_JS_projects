const body = document.body;
const sliders = document.querySelectorAll('.slider');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSliderIdx = 0;

const setBg = () => {
    body.style.backgroundImage = sliders[activeSliderIdx].style.backgroundImage;
}

const setSlider = () => {
    sliders.forEach(slider => slider.classList.remove('active'));
    sliders[activeSliderIdx].classList.add('active');
}
setBg();
setSlider();

rightBtn.addEventListener('click', () => {
    activeSliderIdx++;
    if (activeSliderIdx > sliders.length - 1) {
        activeSliderIdx = 0;
    }
    setBg();
    setSlider();
});

leftBtn.addEventListener('click', () => {
    activeSliderIdx--;
    if (activeSliderIdx < 0 ) {
        activeSliderIdx = sliders.length - 1;
    }
    setBg();
    setSlider();
})
