let time = 0;
let isPaused = true;

const timer = document.getElementById("timer");

let interval;
let tm;

const curTime = () => {
    tm = String(time);
    const arr = (""+tm).split("");
    
    const addZero = (num) => {
        if(num < 10){
            return "0" + num;
        } else {
            return num;
        }
    }

    const min = parseFloat(tm) / 100 / 60;
    let floorMin = Math.floor(min);
    const decMin = min - floorMin;
    
    const sec = decMin * 60;
    let floorSec = Math.floor(sec);
    const decSec = sec - floorSec;

    let milSec = Math.floor(decSec * 100);

    console.log(milSec);
    return addZero(floorMin) + ":" + addZero(floorSec) + ":" + addZero(milSec)// milSec[0] + milSec[1];
}



function play()
{
    tm = String(time);
    isPaused = false;
    interval = setInterval(() => {
        if(!isPaused) {
            const getTime = () => curTime();
            time++;
            timer.innerHTML = "time: " + getTime();
        };
    }, 10);
}

function pause()
{
    isPaused = true;
    clearInterval(interval);
}

function reset()
{
    clearInterval(interval);
    isPaused = true;
    time = 0;
    timer.innerHTML = "time: 00:00:00";
}
