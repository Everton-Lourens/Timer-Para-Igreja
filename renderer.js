const timerElement = document.getElementById('timer');




const logElement = document.createElement('div');
logElement.style.color = 'white';
logElement.style.position = 'absolute';
logElement.style.top = '0';
logElement.style.left = '0';
document.body.appendChild(logElement);

function logToDOM(message) {
    logElement.innerText += `${message}\n`;
}
// Use em vez de console.log:
//logToDOM("Meu log no DOM!");


let interval;
let countdownSeconds = 0;

// Deixa o timer apagado inicialmente
timerElement.style.display = 'none';

function newStartTimer() {

    clearInterval(interval);
    timerElement.style.display = 'block';
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const dayOfWeek = now.getDay();

        const time = {
            timeString: `${hours}:${minutes}:${seconds}`,
            stopwatch: `${String(59 - Number(minutes)).padStart(2, '0')}:${String(59 - Number(seconds)).padStart(2, '0')}`,
            dayOfWeek,
            hours,
            minutes,
            seconds
        };

        timerElement.innerText = time.timeString;

        if (dayOfWeek === 0) {
            if (hours === '19' && Number(minutes) >= 30) {
                timerElement.innerText = time.stopwatch;
                timerElement.className = ''; // Branco
            }
            if (hours === '19' && Number(minutes) >= 53) {
                timerElement.className = 'yellow';
            }
            if (hours === '19' && Number(minutes) >= 58) {
                timerElement.className = 'red';
            } else if (hours === '20' && Number(minutes) >= 0) {
                timerElement.innerText = `–${time.minutes + ':' + time.seconds}`;
                timerElement.className = 'red blink'; // Pisca vermelho
            }
        }

        if (dayOfWeek === 2 || dayOfWeek === 4) {
            if (hours === '20' && Number(minutes) >= 30) {
                timerElement.innerText = time.stopwatch;
                timerElement.className = ''; // Branco
            }
            if (hours === '20' && Number(minutes) >= 53) {
                timerElement.className = 'yellow';
            }
            if (hours === '20' && Number(minutes) >= 58) {
                timerElement.className = 'red';
            } else if (hours === '21' && Number(minutes) >= 0) {
                timerElement.innerText = `–${time.minutes + ':' + time.seconds}`;
                timerElement.className = 'red blink'; // Pisca vermelho
            }
        }

        return time;
    }, 1000);
}


newStartTimer();






