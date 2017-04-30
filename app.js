const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const VIEW_ANGLE = 70
const ASPECT = WIDTH / HEIGHT
const NEAR = 0.1
const FAR = 1000;
const RADIUS = 30;

const container = document.querySelector('#container')
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
scene.add(camera);

renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;
scene.add(pointLight);

let particleSystem = particles.createSystem()
scene.add(particleSystem)

let zDir = -1

function render() {
  particleSystem.rotation.y += 0.01
  particleSystem.rotation.z += 0.01
  particleSystem.position.z += zDir
  let zPos = particleSystem.position.z
  if(zPos <= -200 || zPos >= 0) {
    zDir *= -1
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
