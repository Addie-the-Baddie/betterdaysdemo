  // Set the initial starting time
let timeLeft = 5;

// Grab the HTML span element
const countdownElement = document.getElementById('countdown');

// Run the updateTimer function every 1000ms (1 second)
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
    // Decrease the time by 1
    timeLeft--;

    // Update the text in the browser
    countdownElement.textContent = timeLeft;

    // Check if the countdown has reached zero
    if (timeLeft <= 0) {
        // Stop the interval to prevent negative numbers
        clearInterval(timerInterval);
        
        // Trigger any action you want at the end
        countdownElement.textContent = "redirecting";
    }
}