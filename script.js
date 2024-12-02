function updateClock() {
  const now = new Date();

  // Fetch hours, minutes, and seconds in German timezone
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Update the digits
  document.querySelector("#hours .top").textContent = hours < 10 ? "0" + hours : hours;
  document.querySelector("#minutes .top").textContent = minutes < 10 ? "0" + minutes : minutes;
  document.querySelector("#seconds .top").textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
