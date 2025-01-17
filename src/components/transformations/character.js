import * as THREE from 'three';

export function createCharacter() {
  const character = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(1, 1, 3),
    new THREE.MeshLambertMaterial({ color: 0x0000ff }) // Blue
  );
  body.position.y = 1.5;

  const head = new THREE.Mesh(
    new THREE.SphereGeometry(1),
    new THREE.MeshLambertMaterial({ color: 0xffcc99 }) // Skin tone
  );
  head.position.y = 4;

  character.add(body, head);
  return character;
}