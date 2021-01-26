import * as THREE from 'three';
import { makeCube, makeCubeManual } from './geometry';

class CubeHandler {
  constructor(scene) {
    this.cubes = [];
    this.scene = scene;
  }

  randomiseCubeSize (cube) {
    cube.scale.x = Math.random() + 0.5;
    cube.scale.y = Math.random() + 0.5;
    cube.scale.z = Math.random() + 0.5;
  }

  randomiseCubeRotation (cube) {
    cube.rotation.x = Math.random() * 2 * Math.PI;
    cube.rotation.y = Math.random() * 2 * Math.PI;
    cube.rotation.z = Math.random() * 2 * Math.PI;
  }

  randomiseCubePosition (cube) {
    cube.position.x = Math.random() * 20 - 10;
    cube.position.y = Math.random() * 20 - 10;
    cube.position.z = Math.random() * 20 - 10;
  }
  
  makeRandomCube () {
    const cube = makeCube();
    this.randomiseCubeSize(cube);
    this.randomiseCubeRotation(cube);
    this.randomiseCubePosition(cube);

    this.cubes.push(cube);
    this.scene.add(cube);
  }

  makeRandomCubes (count) {
    for (let i = 0; i < count; i++) {
      this.makeRandomCube();
    }
  }
}

export default CubeHandler;