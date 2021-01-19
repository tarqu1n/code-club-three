import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { makeCube, makeCubeManual } from './geometry';

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
    const manualCube = makeCubeManual();
    const autoCube = makeCube();

    scene.add( manualCube );
    // scene.add( autoCube );

    // main loop 
    const animate = () => {
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