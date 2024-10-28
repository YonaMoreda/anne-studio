import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {Group} from "three/src/Three.js";
import '../stylesheets/HouseModel.css'
import MilkyWay from '../../public/milky-way.jpg';

let houseModelGroup: Group;
let mixer: THREE.AnimationMixer;

//Scene
const scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader().setPath('textures/cubeMaps/').load([MilkyWay]);

//Camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
scene.add(camera)
camera.position.z = 30
camera.lookAt(0, 0, 0)

//Light
const pointLight = new THREE.PointLight(0xffffff, 300)
pointLight.position.set(0, 10, 10)
scene.add(pointLight)
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientLight)

//Renderer
const canvas = document.querySelector('#webgl')!
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)
renderer.setAnimationLoop(animation);
window.addEventListener('resize', onWindowResize);

// Clocks
const clockForControls = new THREE.Clock();
const clockForHouseMesh = new THREE.Clock();

//Controls
const controls = new OrbitControls(camera, renderer.domElement);

const gltfLoader = new GLTFLoader();
gltfLoader.load('/anne-studio/public/assets/house/scene.gltf', (gltfScene) => {
    houseModelGroup = gltfScene.scene;
    houseModelGroup.position.set(3, -5, 0);
    houseModelGroup.scale.set(1, 1, 1);
    houseModelGroup.rotation.x = 0;
    houseModelGroup.rotation.y = Math.PI / 5;
    mixer = new THREE.AnimationMixer(houseModelGroup);
    scene.add(houseModelGroup);
})

function animation(time: DOMHighResTimeStamp) {
    pointLight.position.x = Math.sin(time / 5000) * 3;
    if (mixer) {
        houseModelGroup.rotation.y -= 0.001
        mixer.update(clockForHouseMesh.getDelta());
    }
    controls.update(clockForControls.getDelta());
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // controls.handleResize();
}


function HomeModel() {
    return (
        <>
        </>
    )
}

export default HomeModel;