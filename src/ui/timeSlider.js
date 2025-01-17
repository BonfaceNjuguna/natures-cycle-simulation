export function createTimeSlider(onChange) {
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = 0;
    slider.max = 24;
    slider.value = 12; // Default to noon
    slider.style.position = 'absolute';
    slider.style.top = '10px';
    slider.style.left = '10px';
    
    slider.addEventListener('input', (e) => {
      onChange(Number(e.target.value));
    });
    
    document.body.appendChild(slider);
  }