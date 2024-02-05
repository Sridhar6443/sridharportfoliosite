// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

// Create a Three.JS Scene
const scene = new THREE.Scene();
// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Keep the 3D object on a global variable so we can access it later
let object;

// OrbitControls allow the camera to move around the scene
let controls;

// Set which object to render
let objToRender = 'kvr';

// Instantiate a loader for the .gltf file
const loader = new GLTFLoader();

// Load the robot model
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    // If the file is loaded, add it to the scene
    object = gltf.scene;
      // Set initial position to the center for all mobile screens
       object.position.x = -10; // Adjust the initial X position as needed
     
  
      // Set initial scale for mobile view
      if (window.innerWidth <= 767) {
        object.scale.set(7, 7, 7); // Adjust the scale for mobile
        object.position.x = -20;
      } else {
        object.scale.set(7, 7, 7); // Use the original scale for larger screens
        object.position.x = 100;
      }
  
      scene.add(object);
    },
  );

// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Set how far the camera will be from the 3D model
camera.position.z = 150;

// Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) // top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);

// Set a static position for the camera
camera.position.set(0, 0, 200); // Adjust the coordinates as needed
camera.lookAt(0, 0, 0); // Point the camera at the center of the scene

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // Rotate the model only in the 3D view
  if (object && objToRender === "kvr") {
    const rotationSpeed = 0.010; // Adjust the rotation speed as needed
    object.rotation.y += rotationSpeed;
  }

  renderer.render(scene, camera);
}

// Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the 3D rendering
animate();
