let timer = 30;
let username = "";

function authUser() {
    username = document.getElementById("username").value || "Joueur";
    document.getElementById("userInfo").innerText = username + " - Pi Virtuels: 10";
}

function startGame() {
    document.getElementById("startButton").style.display = "none";
    let interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timer").innerText = timer;
        } else {
            clearInterval(interval);
            document.getElementById("payButton").style.display = "block";
        }
    }, 1000);
}

function payPi() {
    document.getElementById("paymentStatus").innerText = "Paiement réussi !";
}