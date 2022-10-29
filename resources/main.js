const start = document.getElementById("start");
const center = document.querySelector("center");
const ffullscreen = document.getElementById("fullscreen");

var showtime = document.getElementById("time");
var div1 = document.getElementById("div1");
div1.style.display = "none";
var time = 300;
ffullscreen.addEventListener("click", () => {
    if (center.fullscreenEnabled) {
        document.exitFullscreen();
    }
    else {
        center.requestFullscreen();
    }
});
var interval = "";
start.addEventListener("click", () => {
    if (start.innerText == "Click to stop") {
        clearInterval(interval);
        div1.style.display = "none";
        start.innerText = "Click to start";
    } else {
        div1.style.display = "block";
        start.innerText = "Click to stop";
        interval = setInterval(() => {
            showtime.innerHTML = time + " Second left";
            if (time < 0)
                div1.innerHTML = "Time out";
            else
                time--;
        }, 1000);
    }

});
