const cups = document.querySelectorAll('.small-cup');

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
};

cups.forEach((cup, idxClick) => {
    cup.addEventListener('click', () => highlightCups(idxClick));
});