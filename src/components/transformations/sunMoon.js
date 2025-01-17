import * as THREE from 'three';
import { updateSkyboxTexture } from '../skybox';

export function createSunMoon() {
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(5),
    new THREE.MeshStandardMaterial({ color: 0xffff00 }) // Sun color
  );
  sun.position.set(0, 100, 0);
  sun.castShadow = true;

  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(5),
    new THREE.MeshStandardMaterial({ color: 0xaaaaaa }) // Moon color
  );
  moon.position.set(0, -100, 0);
  moon.castShadow = true;

  const sunLight = new THREE.DirectionalLight(0xffffaa, 1.0);
  sunLight.position.set(0, 100, 0);
  sunLight.castShadow = true;

  return { sun, moon, sunLight };
}

export function createStars() {
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff });

  const starVertices = [];
  for (let i = 0; i < 10000; i++) {
    const x = THREE.MathUtils.randFloatSpread(2000);
    const y = THREE.MathUtils.randFloatSpread(1000) + 100; // Ensure stars are above the ground
    const z = THREE.MathUtils.randFloatSpread(2000);
    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));

  const stars = new THREE.Points(starGeometry, starMaterial);
  return stars;
}

export function updateSunMoonPosition(sun, moon, time, ambientLight, stars, skybox, currentSeason) {
  // Normalize time to a range of 0 to 1 (0 = midnight, 1 = next midnight)
  const normalizedTime = (time % 24) / 24;

  // Calculate angles for sun and moon based on normalized time
  const sunAngle = (normalizedTime - 0.25) * Math.PI * 2; // Adjusted to center sun at noon
  const moonAngle = sunAngle + Math.PI; // Opposite of the sun (180 degrees apart)

  // Update sun position
  const sunRadius = 60; // Distance from the origin
  sun.position.set(
    sunRadius * Math.cos(sunAngle),
    sunRadius * Math.sin(sunAngle),
    0
  );

  // Update moon position
  const moonRadius = 60;
  moon.position.set(
    moonRadius * Math.cos(moonAngle),
    moonRadius * Math.sin(moonAngle),
    0
  );

  // Adjust ambient light intensity and color based on time of day
  const dayIntensity = 1.0;
  const nightIntensity = 0.1;
  ambientLight.intensity = THREE.MathUtils.lerp(nightIntensity, dayIntensity, Math.sin(normalizedTime * Math.PI));

  // Interpolate ambient light color from light blue to dark blue
  const dayColor = new THREE.Color(0x87CEEB); // Light sky blue
  const nightColor = new THREE.Color(0x1f2d56); // Darker blue
  const ambientColor = dayColor.clone().lerp(nightColor, Math.sin(normalizedTime * Math.PI));
  ambientLight.color.set(ambientColor);

  // Toggle star visibility based on time of day
  stars.visible = normalizedTime < 0.25 || normalizedTime > 0.75;

  // Adjust sun light intensity based on time of day
  const isDaytime = normalizedTime >= 0.25 && normalizedTime <= 0.75;
  sun.intensity = isDaytime ? 1.0 : 0.0;
  sun.visible = isDaytime; // Hide sun at night

  // Adjust shadows based on whether it's daytime or nighttime
  sun.castShadow = isDaytime;

  // Ensure moon doesn't cast shadows
  moon.castShadow = false;

  // Disable shadows for objects during nighttime
  if (!isDaytime) {
    sun.castShadow = false; // Sun stops casting shadows
    ambientLight.castShadow = false; // Disable ambient shadow effects
  }

  // Update skybox color based on time of day
  updateSkyboxTexture(skybox, time, currentSeason);
}