let hours = 0, minutes = 0, seconds = 0, milliseconds = 0;
let interval = null;
let isRunning = false;

// Actualiza la pantalla con el tiempo formateado
function updateDisplay() {
    const displayHours = hours < 10 ? `0${hours}` : hours;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMilliseconds = milliseconds < 100 ? (milliseconds < 10 ? `00${milliseconds}` : `0${milliseconds}`) : milliseconds;
    
    document.getElementById('time').innerHTML = `${displayHours}:${displayMinutes}:${displaySeconds}<span class="milliseconds">${displayMilliseconds}</span>`;
}

// Inicia el cronómetro
function startTimer() {
    if (!isRunning) {
        interval = setInterval(() => {
            milliseconds += 10; // Incrementamos en múltiplos de 10 para que cuente hasta 999
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10); // Se actualiza cada 10 milisegundos
        isRunning = true;
    }
}

// Pausa el cronómetro
function pauseTimer() {
    clearInterval(interval);
    isRunning = false;
}

// Reinicia el cronómetro
function resetTimer() {
    pauseTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);

// Inicializar el display
updateDisplay();
