import * as THREE from 'three';

class RaycastHandler {
  constructor() {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-100, -100)
    
    this.bindMouseEvents()
  }

  bindMouseEvents () {
    window.addEventListener('mousemove', () => {
      // calculate mouse position in normalized device coordinates ((0,0) is at the center!)
      // (-1 to +1) for both components
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }, false);
  }

  getIntersections (objects) {
    return this.raycaster.intersectObjects(objects);
  }

  updatePosition (camera) {
    this.raycaster.setFromCamera(this.mouse, camera)
  }
}

export default RaycastHandler;