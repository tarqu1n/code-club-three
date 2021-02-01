import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';
function Scene() {

  const canvas = useRef(null);

  useEffect(() => {
    // init scene
    const scene = new THREE.Scene(); // holds the 3d objects
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / - 2, window.innerWidth / 2,
      window.innerHeight / 2, window.innerHeight / - 2,
      1, 50000
    ); // Orthographic camers keep everything at an even scale regardless of distance from camera
    camera.zoom = 5
    camera.position.y = 500;
    camera.lookAt(scene.position);

    // add ambient light 
    const ambientLightIntensity = 1;
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, ambientLightIntensity);
    scene.add(ambientLight)
    
    // setup renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current }); // does magic and draws to screen
    renderer.setSize(window.innerWidth, window.innerHeight)

    // adds basic mouse controls that rotate around center of scene
    const controls = new OrbitControls(camera, renderer.domElement);

    // add the sun
    const sunGeom = new THREE.SphereGeometry(6.96340, 64, 64)
    const sunMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00, emissive: 0xcc9b1f });
    const sun = new THREE.Mesh(sunGeom, sunMaterial);
    scene.add(sun)

    // add light inside sun
    const sunLight = new THREE.PointLight(0xffffff, 5, 0, 0);
    scene.add(sunLight)

    // add earth
    const sphereGeom = new THREE.SphereGeometry(0.6371, 64, 64) // 10x bigger than it should be
    const diffuseColor = new THREE.Color().setHSL(0.7, 0.5, 0.25)
    const sphereMaterial = new THREE.MeshPhysicalMaterial({color: diffuseColor, roughness: 1, metalness: 0});
    const sphere = new THREE.Mesh(sphereGeom, sphereMaterial);
    sphere.position.x = 147
    scene.add(sphere)

    // main
    const animate = (deltaTime) => {
      deltaTime *= 0.001; // ms to seconds

      // next frame
      camera.updateProjectionMatrix();
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