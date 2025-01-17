export function createWeatherCheckboxes(onToggle) {
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '50px';
    container.style.right = '10px';
    container.style.color = '#ffffff';
    container.style.background = 'rgba(0, 0, 0, 0.5)';
    container.style.padding = '10px';
    container.style.borderRadius = '5px';
  
    const weatherTypes = ['Rain', 'Snow', 'Wind'];
    weatherTypes.forEach((type) => {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = type.toLowerCase();
      checkbox.addEventListener('change', (e) => {
        onToggle(type.toLowerCase(), e.target.checked);
      });
  
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(type));
      container.appendChild(label);
      container.appendChild(document.createElement('br'));
    });
  
    document.body.appendChild(container);
    return container;
  }
  