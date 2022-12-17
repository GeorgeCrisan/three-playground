import * as THREE from './node_modules/three/build/three.module.js';

// Creaza scene
const scene = new THREE.Scene();

const aspectRation = window.innerWidth / window.innerHeight;

// Creaza camera
const camera = new THREE.PerspectiveCamera(75, aspectRation, 0.1, 750);

// Creaza renderer
const renderer = new THREE.WebGLRenderer();



// Seteaza marimiea pentru renderer, total lungime si inaltime de fereastra
renderer.setSize(window.innerWidth, window.innerHeight);

// Adauga renderer in document (copil pentru elementul container)
const container = document.getElementById("container");

container.appendChild(renderer.domElement);

// Geomotry aici este o cutie (BoxGeometry)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const geometryTwo = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: '#00FF00', reflectivity: 1 });

const cubeOne = new THREE.Mesh(geometry, material);
const cubeTwo = new THREE.Mesh(geometryTwo, material);

var radius = 0.9;
var segments = 25;
var rings = 15;

var geometrysph = new THREE.SphereGeometry(radius, segments, rings);
var materialsph = new THREE.MeshBasicMaterial({
  color: 0xF3A2B0,
  wireframe: true
});

var sph = new THREE.Mesh(geometrysph, materialsph);

scene.add(sph);
scene.add(cubeTwo);
scene.add(cubeOne);
camera.position.z = 5;

cubeOne.position.x = 0;
cubeTwo.position.x = - 2;

// Render the cube and animate it recursively
let pozitionZ = 0;
let pozitionX = 0;
let positive = true;

function animate() {
  requestAnimationFrame(animate);

  cubeOne.rotation.x += 0.01;
  cubeOne.rotation.y += 0.01;
  cubeTwo.rotation.x += 0.05;
  cubeTwo.rotation.y += 0.05;
  sph.rotation.x += 0.01;
  sph.rotation.y += 0.01;

  if (positive) {
    pozitionX += 0.01;
  } else {
    pozitionX -= 0.01;
  }

  if (pozitionX > 1) {
    positive = false;
  } else if (pozitionX < -1) {
    positive = true;
  }

  cubeTwo.position.y = pozitionX;

  renderer.render(scene, camera);
}
animate();