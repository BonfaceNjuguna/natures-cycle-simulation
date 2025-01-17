import * as THREE from 'three';
import seedrandom from 'seedrandom';

export function createTrees() {
    const trees = [];
    const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 }); // Default: Brown
    const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228b22 }); // Default: Green

    const rng = seedrandom('fixed-seed');
    for (let i = 0; i < 10; i++) {
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 5), trunkMaterial);
        trunk.position.set(rng() * 80 - 26, 2.5, rng() * 55 - 25);

        const leaves = new THREE.Mesh(new THREE.SphereGeometry(2), leavesMaterial);
        leaves.position.set(trunk.position.x, trunk.position.y + 4, trunk.position.z);
        leaves.name = 'leaves';

        trees.push(trunk, leaves);
    }

    return trees;
}