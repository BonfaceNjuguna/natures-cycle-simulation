import * as THREE from 'three';

export function getSeasonColor(season) {
    const seasonColors = {
        summer: '#87ceeb', // Light blue
        autumn: '#ffb347', // Orange
        winter: '#cce6ff', // Pale blue
        spring: '#77dd77', // Green
    };

    return seasonColors[season] || seasonColors.summer; // Default to summer if season is invalid
}

export function getSeasonMaterials(season) {
    const materials = {};

    switch (season) {
        case 'winter':
            materials.ground = new THREE.MeshLambertMaterial({ color: 0xffffff }); // Snow
            materials.leaves = new THREE.MeshLambertMaterial({ color: 0xffffff }); // Snow-covered leaves
            materials.houseBase = new THREE.MeshLambertMaterial({ color: 0xcccccc }); // Snow-dusted house
            materials.houseRoof = new THREE.MeshLambertMaterial({ color: 0xffffff }); // Snow-covered roof
            break;
        case 'autumn':
            materials.ground = new THREE.MeshLambertMaterial({ color: 0x8b4513 }); // Brownish ground
            materials.leaves = new THREE.MeshLambertMaterial({ color: 0xffa07a }); // Orange leaves
            materials.houseBase = new THREE.MeshLambertMaterial({ color: 0x8b0000 }); // Red
            materials.houseRoof = new THREE.MeshLambertMaterial({ color: 0x8b4513 }); // Brown
            break;
        case 'spring':
            materials.ground = new THREE.MeshLambertMaterial({ color: 0x228b22 }); // Green
            materials.leaves = new THREE.MeshLambertMaterial({ color: 0x32cd32 }); // Bright green leaves
            materials.houseBase = new THREE.MeshLambertMaterial({ color: 0x8b0000 }); // Red
            materials.houseRoof = new THREE.MeshLambertMaterial({ color: 0xffd700 }); // Yellow
            break;
        default: // Summer
            materials.ground = new THREE.MeshLambertMaterial({ color: 0x228b22 }); // Green
            materials.leaves = new THREE.MeshLambertMaterial({ color: 0x228b22 }); // Dark green leaves
            materials.houseBase = new THREE.MeshLambertMaterial({ color: 0x8b0000 }); // Red
            materials.houseRoof = new THREE.MeshLambertMaterial({ color: 0xffd700 }); // Yellow
    }

    return materials;
}