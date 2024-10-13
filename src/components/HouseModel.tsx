import * as THREE from 'three';
import {FirstPersonControls} from "three/examples/jsm/controls/FirstPersonControls.js";
import earthTexture from "../../public/2k_earth_daymap.jpg"


//Scene
const scene = new THREE.Scene({
    background: new THREE.Color("rgb(255, 0, 0)")
});

//Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.z = 6
camera.lookAt(0, 0, 0)

//Controls
const clockForControls = new THREE.Clock();


//Geometry
const geometry = new THREE.SphereGeometry(3, 64, 64)

//Material
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshPhongMaterial({
    map: new THREE.TextureLoader().load(earthTexture)
});

//Mesh
const earthMesh = new THREE.Mesh(geometry, material)
scene.add(earthMesh)

//Light
const pointLight = new THREE.PointLight(0xffffff, 300)
pointLight.position.set(0, 10, 10)
scene.add(pointLight)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)



//Renderer
let canvas = document.querySelector('#webgl')!
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(window.innerWidth/2, window.innerHeight/2)
renderer.render(scene, camera)
renderer.setAnimationLoop(animation);
window.addEventListener('resize', onWindowResize);

//Controls
const controls = new FirstPersonControls(camera, renderer.domElement);
controls.lookSpeed = 0.01;
controls.movementSpeed = 0;


function animation(time: DOMHighResTimeStamp) {
    pointLight.position.x = Math.sin(time / 5000) * 3;
    controls.update(clockForControls.getDelta());
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    controls.handleResize();
}


function HomeModel() {
    return (
    <>
    </>
    )
}

export default HomeModel;