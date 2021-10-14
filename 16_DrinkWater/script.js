const cups = document.querySelectorAll('.small-cup');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percent = document.querySelector('.percent');

const updateLiters = () => {
    const fullCups = document.querySelectorAll('.small-cup.full').length;
    const allCups = cups.length;
    if (fullCups === 0) {
        percent.style.visibility = 'hidden';
        percent.style.height = '0';
    } else {
        percent.style.visibility = 'visible';
        percent.style.height = `${400 * (fullCups / allCups)}px`;
        percent.innerText = `${100 * (fullCups / allCups)}%`;
    }
    if (fullCups === allCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = '0';
    } else {
        remained.style.visibility = 'visible';
        remained.style.height = `${400 * (1 - fullCups / allCups)}px`;
        liters.innerText = `${2 - (250 * fullCups / 1000)}л`;
    }
};

const highlightCups = (idxClick) => {
    if (cups[idxClick].classList.contains('full')
        && !cups[idxClick].nextElementSibling.classList.contains('full')) {
        idxClick--;
    }
    cups.forEach((cup, idx) => {
        if (idx <= idxClick) {
            cup.classList.add('full');
        } else cup.classList.remove('full');
    });
    updateLiters();
};

updateLiters();

cups.forEach((cup, idxClick) => {
    cup.addEventListener('click', () => {
        highlightCups(idxClick);
    });
});

