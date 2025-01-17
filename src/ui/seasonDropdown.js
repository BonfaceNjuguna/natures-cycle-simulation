export function createSeasonDropdown(onSeasonChange) {
    const dropdown = document.createElement('select');
    dropdown.style.position = 'absolute';
    dropdown.style.top = '10px';
    dropdown.style.right = '10px';
    
    const seasons = ['Summer', 'Spring', 'Autumn', 'Winter'];
    seasons.forEach((season) => {
      const option = document.createElement('option');
      option.value = season.toLowerCase();
      option.textContent = season;
      dropdown.appendChild(option);
    });
  
    dropdown.addEventListener('change', (e) => {
      onSeasonChange(e.target.value);
    });
  
    document.body.appendChild(dropdown);
    return dropdown;
  }
  