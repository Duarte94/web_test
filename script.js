const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");

let sliders = [slider1,slider2,slider3];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    if (document.title === "TechWave Solutions") {
        let servBtn = document.getElementsByClassName("servImg");
        let applyBtn = document.getElementById("applyBtn");

        function ServRedir() {
            window.location.href = "services.html";
        }

        function ApplyRedir() {
            window.location.href = "contact.html";
        }

        for (let i = 0; i < servBtn.length; i++) {
            servBtn[i].addEventListener("click", ServRedir);
        }

        if (applyBtn) {
            applyBtn.addEventListener("click", ApplyRedir);
        }
    }
});

document.addEventListener("DOMContentLoaded", sliderActive());

function sliderActive() {
    sliders.forEach(slider => slider.hidden = true);
    sliders[currentIndex].hidden = false;
    currentIndex = (currentIndex + 1) % sliders.length;
}

setInterval(sliderActive, 5000);