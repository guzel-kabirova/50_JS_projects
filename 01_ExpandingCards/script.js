const cards = document.querySelectorAll('.card');

const removeAllClassActive = () => {
    cards.forEach(card => card.classList.remove('active'))
}
cards.forEach(card => {
    card.addEventListener('click', () => {
        removeAllClassActive();
        card.classList.add('active');
    })
})