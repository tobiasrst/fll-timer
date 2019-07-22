const totalTime = 150;
let time = 150;
let isActive = false;
let intervalHandle;

const timerFunc = () => {
    if(time > 0) {
        isActive = true;
        time = time - 1;

        draw(time);
    } else clearInterval(intervalHandle);
    
}

module.exports.reset = () => {
    clearInterval(intervalHandle);
    time = totalTime;
    isActive = false;

    draw(totalTime);
}

const draw = (time) => {
    let seconds = time % 60;
    let minutes = (time - seconds) / 60;

    let timeString = `${minutes}:${new String(seconds).padStart(2, '0')}`;

    document.getElementById('timer').innerHTML = `<p class="centered-content timer">${timeString}</p>`;
}

module.exports.drawInitial = () => draw(totalTime);

module.exports.start = () => {
    if(!isActive) intervalHandle = setInterval(timerFunc, 1000);
};