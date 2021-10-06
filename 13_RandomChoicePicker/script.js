const textarea = document.querySelector('.textarea');
const tagsBox = document.querySelector('.tags');


const giveTags = (text) => {
    const result = text.split(',').filter(el => el.trim() !== '').map(el => el.trim());
    tagsBox.innerHTML = result.map(el => `<span class="tag">${el}</span>`).join('');
};

const pickRandomTag = () => {
    const allTags = document.querySelectorAll('.tag');
    return allTags[Math.floor(Math.random() * allTags.length)];

};

const highlightTag = (tag) => {
    tag.classList.add('highlight');
};

const unHighlightTag = (tag) => {
    tag.classList.remove('highlight');
};

const randomSelect = () => {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 200);
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        }, 200)
    }, times * 200);
};

textarea.focus();
textarea.addEventListener('keyup', (e) => {
    const inputText = e.target.value;
    giveTags(inputText);
    if (inputText.trim() && e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});



