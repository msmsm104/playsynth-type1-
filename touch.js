
document.querySelector('#a').addEventListener('touchstart', color);

function color() {
    document.querySelector('#a').classList.add('pressed');
}