// Function to update the current day of the week
function updateDayOfTheWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const dayIndex = currentDate.getUTCDay();
  const currentDay = daysOfWeek[dayIndex];
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
}

// Function to update the date and time in the format "Tuesday, September 12, 2023, 14:30:45 UTC"
function updateFormattedDateTime() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleDateString('en-US', options);
  document.querySelector('[data-testid="currentUTCTime"]').textContent = formattedDateTime;
}

updateDayOfTheWeek();
updateFormattedDateTime();
