// Function to update the time every second
function updateTime() {
  // Get the current time
  const now = new Date();
  
  // Format hours and minutes with leading zeros
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  
  // Find the elements in the HTML to update with the new time
  document.querySelector('.clock__piece:nth-child(1) .seg__top').textContent = hours[0];
  document.querySelector('.clock__piece:nth-child(1) .seg__bottom').textContent = hours[1];
  
  document.querySelector('.clock__piece:nth-child(2) .seg__top').textContent = minutes[0];
  document.querySelector('.clock__piece:nth-child(2) .seg__bottom').textContent = minutes[1];
}

// Call the updateTime function immediately to display the time when the page loads
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
