export function createTimeDisplay() {
    const timeDisplay = document.createElement('div');
    timeDisplay.id = 'time-display';
    timeDisplay.style.position = 'absolute';
    timeDisplay.style.top = '40px';
    timeDisplay.style.left = '10px';
    timeDisplay.style.fontSize = '18px';
    timeDisplay.style.color = '#ffffff';
    timeDisplay.style.background = 'rgba(0, 0, 0, 0.5)';
    timeDisplay.style.padding = '5px';
    timeDisplay.style.borderRadius = '5px';
  
    document.body.appendChild(timeDisplay);
    return timeDisplay;
  }
  
  export function updateTimeDisplay(timeDisplay, time) {
    const hours = Math.floor(time);
    const minutes = Math.floor((time % 1) * 60);
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    let timeOfDay = '';
    if (time >= 6 && time < 8) {
      timeOfDay = 'Sunrise';
    } else if (time >= 8 && time < 18) {
      timeOfDay = 'Daytime';
    } else if (time >= 18 && time < 20) {
      timeOfDay = 'Sunset';
    } else {
      timeOfDay = 'Night';
    }
  
    timeDisplay.innerText = `Time: ${formattedTime} (${timeOfDay})`;
  }