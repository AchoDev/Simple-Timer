let time = 0;
let pause = true;

const timer = document.getElementById("timer");

function play()
{
    pause = false;
    setInterval(() => {
        if(!pause) {
            time++;
            timer.innerHTML = time;
        };
    }, 1000);
}

function pause()
{
    pause = true;
}

function reset()
{
    pause = true;
    time = 0;
}
