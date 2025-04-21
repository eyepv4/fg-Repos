function updateTimer() {
    const startDate = new Date("March 12, 2025 00:00:00");
    const now = new Date();
    const diff = now - startDate;
  
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    const timerDisplay = document.getElementById("love-timer");
    timerDisplay.textContent = `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec`;
  }
  
  // Update every second
  setInterval(updateTimer, 1000);
  updateTimer(); // initial call
  