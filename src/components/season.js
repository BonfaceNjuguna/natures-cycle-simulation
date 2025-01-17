import { getSeasonMaterials } from '../utils/seasonUtils';

export function updateSeason(scene, season) {
    const materials = getSeasonMaterials(season);

    scene.traverse((object) => {
        if (object.name === 'ground') {
            object.material = materials.ground;
        } else if (object.name === 'leaves') {
            object.material = materials.leaves;
        } else if (object.name === 'houseBase') {
            object.material = materials.houseBase;
        } else if (object.name === 'houseRoof') {
            object.material = materials.houseRoof;
        }
    });
}