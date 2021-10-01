const circleOutline = document.querySelector(".circle-outline");
const circleProgress = document.querySelector(".circle-progress");
const numberOfBreaths = document.querySelector(".breath-input");
const start = document.querySelector(".start");
const instructions = document.querySelector(".instructions");
const breathsText = document.querySelector(".breaths-text");
const displayText = document.querySelector(".display");
const audio = document.querySelector(".audio");
let breathsRemaining = 5;

numberOfBreaths.addEventListener("change", () => {
    breathsRemaining = numberOfBreaths.value;
    breathsText.innerHTML = breathsRemaining;
});

const growCircle = () => {
    circleProgress.classList.add("circle-grow");
    setTimeout(() => {
        circleProgress.classList.remove("circle-grow");
    }, 8000);
};

const updateBreathText = () => {
    breathsRemaining -= 1;
    breathsText.innerHTML = `Remaining Breaths: ${breathsRemaining}`;
    displayText.innerHTML = "In";
    setTimeout(() => {
        displayText.innerHTML = "HOLD";
        setTimeout(() => {
            displayText.innerHTML = "Out";
            setTimeout(() => {
                displayText.innerHTML = "HOLD";
            }, 4000);
        }, 4000);
    }, 4000);
};

const relaxationApp = () => {
    const breathInterval = setInterval(() => {
        if (breathsRemaining === 0) {
            clearInterval(breathInterval);
            displayText.innerHTML = "";
            instructions.innerHTML = "Great Job!!";
            circleProgress.style.opacity = 0;
            start.classList.remove("button-inactive");
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0;
                location.reload();
            }, 10000);
            return;
        } else {
            growCircle();
            updateBreathText();
        }
    }, 16000);
};

start.addEventListener("click", () => {
    start.classList.add("button-inactive");
    circleProgress.style.opacity = 1;
    audio.play();
    setTimeout(() => {
        instructions.innerHTML = "Now Relax ...";
        growCircle();
        updateBreathText();
        relaxationApp();
    }, 2000);
});
