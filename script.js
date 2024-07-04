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
