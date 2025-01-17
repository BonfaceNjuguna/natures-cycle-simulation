import * as THREE from 'three';
import { Howl } from 'howler';

// Import sound files
import windSoundFile from '/src/assets/sounds/wind.mp3';
import rainSoundFile from '/src/assets/sounds/rain.mp3';
import snowSoundFile from '/src/assets/sounds/snow.mp3';
import cricketSoundFile from '/src/assets/sounds/crickets.mp3';
import birdSoundFile from '/src/assets/sounds/birds.mp3';

let rainParticles = null;
let snowParticles = null;
let windSound = null;
let rainSound = null;
let snowSound = null;
let cricketSound = null;
let birdSound = null;
let trees = [];

export function initWeather(scene) {
  // Rain particles
  const rainGeometry = new THREE.BufferGeometry();
  const rainVertices = [];
  for (let i = 0; i < 1000; i++) {
    rainVertices.push(
      Math.random() * 200 - 100, // x
      Math.random() * 200,       // y
      Math.random() * 200 - 100  // z
    );
  }
  rainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(rainVertices, 3));
  const rainMaterial = new THREE.PointsMaterial({ color: 0xaaaaaa, size: 0.1 });
  rainParticles = new THREE.Points(rainGeometry, rainMaterial);

  // Snow particles
  const snowGeometry = rainGeometry.clone(); // Use similar geometry
  const snowMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3 });
  snowParticles = new THREE.Points(snowGeometry, snowMaterial);

  // Add sound effects
  windSound = new Howl({
    src: [windSoundFile],
    loop: true,
    volume: 0.5,
  });

  rainSound = new Howl({
    src: [rainSoundFile],
    loop: true,
    volume: 0.5,
  });

  snowSound = new Howl({
    src: [snowSoundFile],
    loop: true,
    volume: 0.5,
  });

  cricketSound = new Howl({
    src: [cricketSoundFile],
    loop: true,
    volume: 0.5,
  });

  birdSound = new Howl({
    src: [birdSoundFile],
    loop: true,
    volume: 0.5,
  });

  // Add to scene initially (hidden)
  scene.add(rainParticles);
  scene.add(snowParticles);
  rainParticles.visible = false;
  snowParticles.visible = false;

  // Collect tree objects for wind effect
  scene.traverse((object) => {
    if (object.name === 'leaves') {
      trees.push(object);
    }
  });
}

export function updateWeather(scene, type, isActive) {
  switch (type) {
    case 'rain':
      if (isActive) {
        rainParticles.visible = true;
        rainSound.play();
      } else {
        rainParticles.visible = false;
        rainSound.stop();
      }
      break;
    case 'snow':
      if (isActive) {
        snowParticles.visible = true;
        snowSound.play();
      } else {
        snowParticles.visible = false;
        snowSound.stop();
      }
      break;
    case 'wind':
      if (isActive) {
        windSound.play();
      } else {
        windSound.stop();
      }
      break;
    default:
      console.warn(`Unknown weather type: ${type}`);
  }
}

export function animateWeather() {
  if (rainParticles) {
    const positions = rainParticles.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] -= 0.5; // Move rain particles down
      if (positions[i] < 0) positions[i] = 150; // Reset position
    }
    rainParticles.geometry.attributes.position.needsUpdate = true;
  }

  if (snowParticles) {
    const positions = snowParticles.geometry.attributes.position.array;
    for (let i = 1; i < positions.length; i += 3) {
      positions[i] -= 0.2; // Move snow particles down slower
      if (positions[i] < 0) positions[i] = 200; // Reset position
    }
    snowParticles.geometry.attributes.position.needsUpdate = true;
  }

  // Wind effect on trees
  if (windSound.playing()) {
    const windStrength = 1; // Adjust the strength of the wind effect
    trees.forEach((tree) => {
      tree.rotation.z = Math.sin(Date.now() * 0.001) * windStrength;
    });
  }
}

export function updateAmbientSounds(time) {
  const normalizedTime = (time % 24) / 24;

  // Determine if it's night or morning
  const isNight = normalizedTime < 0.25 || normalizedTime > 0.75;
  const isMorning = normalizedTime >= 0.25 && normalizedTime < 0.5;

  // Play or stop cricket sounds based on time of day
  if (isNight) {
    if (!cricketSound.playing()) {
      cricketSound.play();
    }
  } else {
    cricketSound.stop();
  }

  // Play or stop bird sounds based on time of day
  if (isMorning) {
    if (!birdSound.playing()) {
      birdSound.play();
    }
  } else {
    birdSound.stop();
  }
}