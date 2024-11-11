// Tempo inicial (3 minutos = 180 segundos)
let time = 180;

// Função para formatar o tempo no formato mm:ss
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secondsRemaining = seconds % 60;
    if (secondsRemaining < 10) {
        secondsRemaining = '0' + secondsRemaining;
    }
    return `${minutes}:${secondsRemaining}`;
}

// Função para atualizar o contador a cada segundo
function startTimer() {
    const timerElement = document.getElementById("contador");

    const interval = setInterval(function() {
        time--;
        timerElement.textContent = formatTime(time);

        // Quando o tempo acabar, redireciona para outra página
        if (time <= 0) {
            clearInterval(interval);
            window.location.href = "/"; 
        }
    }, 1000);
}

// Inicia o contador ao carregar a página
window.onload = startTimer;