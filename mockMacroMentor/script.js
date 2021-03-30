const randInt = Math.random();

function reviewWindow () {
    var x = document.getElementById("review-log-window");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}

function updateMission(mission, degree) {
    if (degree == "main") {
        document.getElementById("selected-main").innerHTML = "" + mission;
    } else {
        document.getElementById("selected-side").innerHTML = "" + mission;
    }
} 

function newGameWindow () {
    var x = document.getElementById("new-game-window");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    } 
}

document.getElementById("review-game").onclick = reviewWindow;

document.getElementById("test-new-game").onclick = newGameWindow;
