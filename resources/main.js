const start = document.getElementById("start");
const center = document.querySelector("center");
const ffullscreen = document.getElementById("fullscreen");

var showtime = document.getElementById("time");
var div1 = document.getElementById("div1");
var time = 300;
ffullscreen.addEventListener("click", () => {
    if (center.fullscreenEnabled) {
        document.exitFullscreen();
    }
    else {
        center.requestFullscreen();
    }

    start.addEventListener("click", () => {


    });
    setInterval(() => {
        showtime.innerHTML = time + " Second left";
        if (time < 0)
            div1.innerHTML = "Time out";
        else
            time--;
    }, 1000);
});
