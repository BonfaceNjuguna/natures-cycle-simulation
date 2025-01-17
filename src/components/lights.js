import * as THREE from 'three';

export function createLights() {
  const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft ambient light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Sunlight
  directionalLight.position.set(10, 10, 10);

  // Return as an array
  return [ambientLight, directionalLight];
}