window.onload = function() {
    if (localStorage.getItem("modalClosed") !== "true") {
        document.getElementById("modal").style.display = "block";
    } else {
        document.getElementById("modal").style.display = "none";
    }
};

function updateCountdown() {
    const endDate = new Date("December 31, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "Час вийшов!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days} дн. ${hours} год. ${minutes} хв. ${seconds} сек.`;
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();

const modal = document.getElementById("modal");
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        localStorage.setItem("modalClosed", "true");
    }
});

const form = document.getElementById("modal-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    localStorage.setItem("modalClosed", "true");
    modal.style.display = "none";
});