import * as THREE from 'three';

export function createGround() {
  const geometry = new THREE.PlaneGeometry(100, 100);
  const material = new THREE.MeshLambertMaterial({ color: 0x228b22 }); // Default: Grass green
  const ground = new THREE.Mesh(geometry, material);
  ground.rotation.x = -Math.PI / 2;
  ground.name = 'ground'; // Assign name for updates
  return ground;
}