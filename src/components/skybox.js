import * as THREE from 'three';
import { getSeasonColor } from '../utils/seasonUtils';

export function createSkybox(season = 'summer') {
  const color = getSeasonColor(season);
  const material = new THREE.MeshBasicMaterial({
    color,
    side: THREE.BackSide,
  });

  const geometry = new THREE.SphereGeometry(500, 32, 32);
  const skybox = new THREE.Mesh(geometry, material);
  return skybox;
}

export function updateSkyboxMaterial(skybox, season) {
  const newColor = getSeasonColor(season);
  if (skybox && skybox.material) {
    skybox.material.color.set(newColor); // Update the material color
    skybox.material.needsUpdate = true;
  }
}

export function updateSkyboxTexture(skybox, time, season) {
  if (!skybox || !skybox.material) {
    console.warn('Skybox or skybox material is not defined');
    return;
  }

  // Normalize time to a range of 0 to 1 (0 = midnight, 1 = next midnight)
  const normalizedTime = (time % 24) / 24;

  // Day and night colors
  const dayColor = new THREE.Color(0x000033);
  const nightColor = new THREE.Color(getSeasonColor(season)); // Dark night color

  // Blend day and night colors
  const skyColor = dayColor.clone().lerp(nightColor, Math.sin(normalizedTime * Math.PI));
  skybox.material.color.set(skyColor);
  skybox.material.needsUpdate = true;
}