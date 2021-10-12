const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
    counter.innerText = '0';
    const increaseCounter = () => {
        const counterEnd = +counter.getAttribute('data-target');
        const distance = Math.ceil(counterEnd / 400);
        const counterCurrent = +counter.innerText;

        if (counterCurrent < counterEnd) {
            counter.innerText = `${counterCurrent + distance}`;
            setTimeout(increaseCounter, 1);
        } else {
            counter.innerText = counterEnd;
        }
    };

    increaseCounter();
});