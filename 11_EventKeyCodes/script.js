const container = document.querySelector('.container')
window.addEventListener('keydown', (event) => {
    container.innerHTML = `
    <div class="key">
        <h2>${event.key === ' ' ? 'Space' : event.key}</h2>
        <span>event.key</span>
    </div>
    <div class="key">
        <h2>${event.keyCode}</h2>
        <span>event.keyCode</span>
    </div>
    <div class="key">
        <h2>${event.code}</h2>
        <span>event.code</span>
    </div>
    `
})