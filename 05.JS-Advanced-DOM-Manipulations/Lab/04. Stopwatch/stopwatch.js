function stopwatch() {
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    const timeResult = document.getElementById("time");
    let timer = null;

    startBtn.addEventListener('click', function () {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        let seconds = 0;
        timer = setInterval(tick, 1000);
        timeResult.textContent = '00:00';
        function tick() {
            seconds++;
            let currentMinute = ('0' + Math.floor(seconds / 60)).slice(-2);
            let currentSecond = ('0' + seconds % 60).slice(-2);
            timeResult.textContent = `${currentMinute}:${currentSecond}`;
        }
    });

    stopBtn.addEventListener('click', function () {
        stopBtn.disabled = true;
        startBtn.disabled = false;
        clearInterval(timer);
    });


}