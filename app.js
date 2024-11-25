
setInterval(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const dayOfWeek = now.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
    const time = {
        timerString: `${hours}:${minutes}:${seconds}`,
        dayOfWeek,
        hours,
        minutes,
        seconds
    };
    return time;
}, 1000);


