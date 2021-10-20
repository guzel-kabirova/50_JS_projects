const btn = document.querySelector('.btn');
const html = document.querySelector('html');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

btn.addEventListener('click', () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        btn.innerText = 'Ночь'
    } else {
        html.classList.add('dark');
        btn.innerText = 'День'
    }
});

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

const sayWhatTimeIsIt = () => {
    const today = new Date();
    const hours = today.getHours();
    const clockHours = hours % 12;
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    const day = today.getDay();
    const month = today.getMonth();
    const date = today.getDate();
    timeEl.innerHTML = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="day">${date}</span></div>`;
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(clockHours, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;
};
sayWhatTimeIsIt();
setInterval(sayWhatTimeIsIt, 1000)