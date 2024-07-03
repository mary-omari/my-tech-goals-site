function updateTimeUTC() {
    const now = new Date();
    const currentTimeUTC = now.toUTCString();
    const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    if (timeElement) {
        timeElement.textContent = currentTimeUTC;
    }
}

function updateCurrentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const currentDayOfWeek = daysOfWeek[now.getDay()];
    const dayElement = document.querySelector('[data-testid="currentDay"]');
    if (dayElement) {
        dayElement.textContent = currentDayOfWeek;
    }
}

updateTimeUTC();
updateCurrentDay();
setInterval(updateTimeUTC, 1000);