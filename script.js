// script.js
function updateUTCTime() {
  const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
  const currentTime = new Date().toUTCString();
  utcTimeElement.textContent = currentTime;
}

// Update UTC time on page load
updateUTCTime();

// Update UTC time every 1 minute
setInterval(updateUTCTime, 60000);
