import * as THREE from 'three';
import { createCamera } from '../components/camera';
import { createLights } from '../components/lights';
import { createGround } from '../components/ground';
import { createHouse } from '../components/transformations/house';
import { createTrees } from '../components/transformations/trees';
import { createCharacter } from '../components/transformations/character';
import { createSkybox } from '../components/skybox';
import { createSunMoon, updateSunMoonPosition, createStars } from '../components/transformations/sunMoon';

export function createMainScene(season = 'summer', time = 12) {
  const scene = new THREE.Scene();

  // Camera setup
  const camera = createCamera();
  scene.add(camera);

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Lighting setup
  const lights = createLights();
  const ambientLight = lights[0];
  lights.forEach(light => scene.add(light));

  // Skybox setup
  const skybox = createSkybox(season);
  scene.add(skybox);

  // Sun and Moon setup
  const { sun, moon, sunLight } = createSunMoon();
  scene.add(sun);
  scene.add(moon);
  scene.add(sunLight);

  // Stars setup
  const stars = createStars();
  scene.add(stars);

  // Update sun and moon positions
  updateSunMoonPosition(sun, moon, time, ambientLight, stars, skybox);

  // Add other objects
  const ground = createGround();
  scene.add(ground);

  const house = createHouse();
  scene.add(house);

  const trees = createTrees();
  trees.forEach(tree => scene.add(tree));

  const character = createCharacter();
  scene.add(character);

  return { scene, camera, renderer, sun, moon, sunLight, skybox, ambientLight, stars };
}