import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';
import gsap from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const head = document.querySelector("section#head");

const sizes = { width: window.innerWidth, height: window.innerHeight };

const gui = new dat.GUI();

const scene = new THREE.Scene();

// var bgTexture = new THREE.TextureLoader().load("assets/images/background.jpg");
// bgTexture.minFilter = THREE.LinearFilter;
// scene.background = bgTexture;
// scene.background = new THREE.Color(0xffffff);

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width * 0.98, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

const camera = new THREE.PerspectiveCamera(50, sizes.width/sizes.height, 0.01, 1000);
camera.position.x = 0;
camera.position.y = 0.5;
camera.position.z = 5;
scene.add(camera);
// const camFolder = gui.addFolder('cam');
// camFolder.add(camera.position, 'x').min(-10).max(10);
// camFolder.add(camera.position, 'y').min(-10).max(10);
// camFolder.add(camera.position, 'z').min(-10).max(10);

// const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({ alpha: true, canvas: document.querySelector("canvas.webgl") });
renderer.setClearColor(0xaaaaaa, 0);
renderer.setSize(sizes.width * 0.99, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.gammaOutput = true;
head.appendChild(renderer.domElement);

let timeline = gsap.timeline()

const loader = new GLTFLoader();
loader.load( 'assets/models/basketball.gltf', function (gltf) {

    const model = gltf.scene;
	scene.add( model );
	console.log(gltf);

	// gui.add(model.rotation, 'x').min(0).max(9);
	// gui.add(model.rotation, 'y').min(0).max(9);
	// gui.add(model.rotation, 'z').min(0).max(9);

    CustomEase.create("myBounce", "M0,0 C0.18,0.432 0.264,0.589 0.348,0.72 0.408,0.814 0.452,0.888 0.544,1 0.604,0.956 0.616,0.926 0.758,0.878 0.874,0.838 0.962,0.836 1,0.836 ");
    // timeline.addPause(5);
    timeline.fromTo(model.position, {x: -7}, {x: 3.2, duration: 5, ease: "myBounce"}, 2)
            .fromTo(model.rotation, {z: 1.2}, {z: -9, duration: 5, ease: "myBounce"}, 2)
    timeline.fromTo(model.position, {z: -0.5}, {z: 0.5, duration: 5}, '<')
            .fromTo(model.rotation, {x: 0}, {x: 1, duration: 5}, '<')

    function animate() {
        requestAnimationFrame( animate );
        // model.rotation.x += 0.01;
        // model.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    animate();
}, undefined, function ( error ) {

	console.error( error );

} );

const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.x = -8;
light1.position.y = 2;
light1.position.z = 4;
scene.add(light1);

const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);

// let div_title = document.createElement('div');
// div_title.className = 'title';
// let title = document.createElement('h1');
// title.innerText = "TeamBasket";
// div_title.appendChild(title);
// let text = document.createElement('p');
// text.innerText = "Ищите людей рядом и играйте в баскетбол вместе.";
// div_title.appendChild(text);
// head.appendChild(div_title);

let title = document.querySelector("h1#teambasket");
let text = document.querySelector("p#description");
let login = document.querySelector("#login-button");
let register = document.querySelector("#register-button");

timeline.from(title, {opacity: 0, y:100, duration: 1.5}, 3)
        .from(text, {opacity: 0, y:100, duration: 1.5}, '-=0.5')
        .from(login, {opacity: 0, y:30, duration: 1}, '+=1.5')
        .from(register, {opacity: 0, y:30, duration: 1}, '-=0.5');

let div_login = document.createElement('div');
div_login.className = 'login-section';
// let login = document.createElement('');


// const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// const material = new THREE.MeshStandardMaterial();
// material.metalness = 0.7;
// material.roughness = 0.2;
// material.color = new THREE.Color(0x666666);

// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );



// renderer.render( scene, camera );

