import * as THREE from 'three';

export function createHouse() {
    const house = new THREE.Group();

    const roof = new THREE.Mesh(
        new THREE.ConeGeometry(3.5, 4, 4),
        new THREE.MeshLambertMaterial({ color: 0xffd700 }) // Default: Yellow
    );
    roof.position.y = 7;
    roof.name = 'houseRoof';

    const base = new THREE.Mesh(
        new THREE.BoxGeometry(5, 5, 5),
        new THREE.MeshLambertMaterial({ color: 0x8b0000 }) // Default: Red
    );
    base.position.y = 2.5;
    base.name = 'houseBase';

    house.add(roof, base);
    return house;
}