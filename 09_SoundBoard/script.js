const buttons = [
    {
        text: 'Кошка',
        id: 'cat'
    },
    {
        text: 'Собака',
        id: 'dog'
    }, {
        text: 'Мышь',
        id: 'mouse'
    },
    {
        text: 'Корова',
        id: 'cow'
    },
    {
        text: 'Кукушка',
        id: 'cuckoo'
    },
    {
        text: 'Коза',
        id: 'goat'
    },
];

const stopSong = () => {
    buttons.forEach(button => {
        const song = document.getElementById(button.id);
        song.pause();
        song.currentTime = 0;
    })
};

buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.innerText = button.text;
        btn.classList.add('btn');
        document
            .querySelector('.buttons')
            .appendChild(btn);
        btn.addEventListener('click', () => {
            stopSong();
            document.getElementById(button.id).play();
        });
    }
);