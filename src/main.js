import { createMainScene } from './scenes/mainScene';
import { updateSunMoonPosition } from './components/transformations/sunMoon';
import { createTimeSlider } from './ui/timeSlider';
import { createTimeDisplay, updateTimeDisplay } from './ui/timeDisplay';
import { createSeasonDropdown } from './ui/seasonDropdown';
import { createWeatherCheckboxes } from './ui/weatherCheckboxes';
import { updateSkyboxMaterial } from './components/skybox';
import { initWeather, updateWeather, animateWeather, updateAmbientSounds } from './components/weather';
import { updateSeason } from './components/season';

let { scene, camera, renderer, sun, moon, sunLight, skybox, ambientLight, stars } = createMainScene('summer', 12);

document.body.appendChild(renderer.domElement);

let currentTime = 12;
let currentSeason = 'summer';

const timeDisplay = createTimeDisplay();

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  // Update sun and moon positions
  updateSunMoonPosition(sun, moon, currentTime, ambientLight, stars, skybox, currentSeason);
  sunLight.position.copy(sun.position);

  // Update time display
  updateTimeDisplay(timeDisplay, currentTime);
  animateWeather();
  updateAmbientSounds(currentTime);

  renderer.render(scene, camera);
};

// Handle Window Resizing
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add time slider
createTimeSlider((time) => {
  currentTime = time;
});

// Add season dropdown
createSeasonDropdown((season) => {
  currentSeason = season;
  updateSkyboxMaterial(skybox, currentSeason);
  updateSeason(scene, currentSeason);
});

initWeather(scene);
// Add weather checkboxes
createWeatherCheckboxes((type, isChecked) => {
  console.log(`Weather type: ${type}, isChecked: ${isChecked}`);
  // Implement weather effects based on the type and isChecked status
  updateWeather(scene, type, isChecked);
});

// Start animation loop
animate();