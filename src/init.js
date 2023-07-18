const watch = document.querySelector('#watch');

document.querySelector('#buttons').addEventListener('click', (element) => {
    if (element.target.id === 'start') {
        start();
    } else if (element.target.id === 'pause') {
        pause();
    } else if (element.target.id === 'reset') {
        reset();
    }
});

const date = new Date();
let timerInterval;

const showTime = () => {
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    const milliseconds = date.getMilliseconds() < 10 ? `00${date.getMilliseconds()}` : date.getMilliseconds();
    watch.innerHTML = `${minutes}:${seconds}:${milliseconds}`;

}

const start = () => {
    timerInterval = setInterval(() => {
        date.setMilliseconds(date.getMilliseconds() + 1);
        showTime();
    }, 1);
}


const pause = () => {
    clearInterval(timerInterval);
}

const reset = () => {
    date.setMilliseconds(0);
    date.setSeconds(0);
    date.setMinutes(0);
    showTime();
}

showTime();
reset();
