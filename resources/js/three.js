import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';
import gsap from 'gsap';

const sizes = { width: window.innerWidth, height: window.innerHeight };

const scene = new THREE.Scene();

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.01, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;
scene.add(camera);

// const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);
let text = document.createElement('h1');
text.innerText = "Sample text";
document.body.appendChild(text);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );

const material = new THREE.MeshStandardMaterial();
material.metalness = 0.7;
material.roughness = 0.2;
material.color = new THREE.Color(0x666666);

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const light1 = new THREE.PointLight(0xbb2244, 1);
light1.position.x = 2;
light1.position.y = 3;
light1.position.z = 4;
scene.add(light1);

const light2 = new THREE.PointLight(0x0066aa, 1);
light2.position.x = -2;
light2.position.y = -3;
light2.position.z = 4;
scene.add(light2);

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();