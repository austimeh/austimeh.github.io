// script.js
function updateUTCTime() {
  const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  const currentTime = new Date().toUTCString().split(' ')[4]; // Extract time part
  utcTimeElement.textContent = currentTime;
}

updateUTCTime();

// Update UTC time every 1 second
setInterval(updateUTCTime, 1000);
