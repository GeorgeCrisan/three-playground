import * as THREE from '../node_modules/three/build/three.module.js';

// Creaza scene
const scene = new THREE.Scene();

const aspectRation = window.innerWidth / window.innerHeight;

// Creaza camera
const camera = new THREE.PerspectiveCamera(45, aspectRation, 1, 500);
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

// Creaza renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.getElementById("container").appendChild( renderer.domElement );

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0xfaa500 } );

const points = [];
points.push( new THREE.Vector3( - 20, 0, 0 ));
points.push( new THREE.Vector3( 0, 20, 0 ));
points.push( new THREE.Vector3( 20, 0, 0 ));
points.push( new THREE.Vector3( 0, -20, 0 ));
points.push( new THREE.Vector3( -20, 0, 0 ));

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );
renderer.render( scene, camera );