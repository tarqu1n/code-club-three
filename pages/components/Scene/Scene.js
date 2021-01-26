import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { makeCube, makeCubeManual } from './geometry';
import RaycastHandler from './RaycastHandler';

function Scene() {

  const canvas = useRef(null);

  useEffect(() => {
    // init scene
    const scene = new THREE.Scene(); // holds the 3d objects
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // gives us a veiw
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current }); // does magic and draws to screen
    renderer.setSize(window.innerWidth, window.innerHeight)

    // add objects to scene
    // const cube = makeCubeManual();
    const cube = makeCube();
    scene.add(cube);

    // setup raycasting
    const raycastHandler = new RaycastHandler()

    // main loop 
    let highlightedObject = null;
    const animate = (deltaTime) => {

      deltaTime *= 0.001; // ms to seconds
      cube.rotation.x = deltaTime;
      cube.rotation.y = deltaTime;
      
      // update the raycaster position 
      raycastHandler.updatePosition(camera);
      
      // detect collisions
      const intersects = raycastHandler.getIntersections(scene.children);
      if (intersects.length) {
        intersects[0].object.material.color.set(0x0000ff);
      }

      // next frame
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  })

  
  return (
    <canvas ref={canvas} id="canvas" />
  )
}

export default Scene