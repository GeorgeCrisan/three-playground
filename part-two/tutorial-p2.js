import * as THREE from '../node_modules/three/build/three.module.js';

// Creaza scene
const scene = new THREE.Scene();

const aspectRation = window.innerWidth / window.innerHeight;

// Creaza camera
const camera = new THREE.PerspectiveCamera(75, aspectRation, 0.1, 750);

// Creaza renderer
const renderer = new THREE.WebGLRenderer();

