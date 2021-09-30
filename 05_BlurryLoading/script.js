const percent = document.querySelector('.percent');
const bg = document.querySelector('.bg');

let load = 0;

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const loading = () => {
    load++;
    if (load > 99) {
        clearInterval(timerId);
    }
    percent.innerText = `${load}%`;
    percent.style.opacity = `${scale(load,0, 100, 1, 0)}`;
    bg.style.filter = `blur(${scale(load,0, 100, 30, 0)}px)`;
};

const timerId = setInterval(loading, 30);