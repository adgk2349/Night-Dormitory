import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import './styles.css';

const ROOM_STATE_MAX = 3;

const game = {
  state: 0,
  fragments: 0,
  observation: 0,
  started: false,
  ended: false,
  lightsOn: true,
  bathroomLight: false,
  bedroomDoorOpen: false,
  bathroomDoorOpen: false,
  exitUnlocked: false,
  area: 'room',
  eventFlags: new Set(),
  interactables: [],
  colliders: [],
  keys: new Set(),
  velocity: new THREE.Vector3(),
  footstepClock: 0,
  nextFootstepAt: 0.42,
  introActive: false,
  lightMultiplier: 1,
  flicker: {
    active: false,
    nextAt: 7,
    step: 0,
    stepTime: 0,
    pattern: [],
  },
  distantElevatorAt: 45,
  yawTarget: 0,
  pitchTarget: 0,
  bobX: 0,
  riceEndingPulse: 0,
  showcase: {
    active: false,
    timers: [],
  },
};

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;

const assets = {
  audio: {
    fluorescent: publicAsset('audio/fluorescent_hum.m4a'),
    corridor: publicAsset('audio/corridor_ambience.m4a'),
    doorClose: publicAsset('audio/door_close.wav'),
    elevatorButton: publicAsset('audio/elevator_button.m4a'),
    elevatorDoor: publicAsset('audio/elevator_door.m4a'),
    elevatorDing: publicAsset('audio/elevator_ding.mp3'),
    footstep: publicAsset('audio/footstep_wood.m4a'),
    lightSwitch: publicAsset('audio/light_switch.m4a'),
  },
  models: {
    bed: new URL('../assets/models/furniture/dormitory_bed_single.obj', import.meta.url).href,
    desk: new URL('../assets/models/furniture/dormitory_desk_drawer.obj', import.meta.url).href,
    chair: new URL('../assets/models/furniture/plastic_chair.obj', import.meta.url).href,
    roomDoor: new URL('../assets/models/modular/dormitory_door_room204.obj', import.meta.url).href,
    elevatorDoor: new URL('../assets/models/modular/elevator_door_set.obj', import.meta.url).href,
    fluorescentFixture: new URL('../assets/models/props/fluorescent_fixture.obj', import.meta.url).href,
    riceCooker: new URL('../assets/models/props/rice_cooker.obj', import.meta.url).href,
    trashBag: new URL('../assets/models/props/chillas_trash_bag.obj', import.meta.url).href,
    cardboardBoxes: new URL('../assets/models/props/chillas_cardboard_boxes.obj', import.meta.url).href,
    slippers: new URL('../assets/models/props/chillas_slippers_pair.obj', import.meta.url).href,
    powerStrip: new URL('../assets/models/props/chillas_power_strip.obj', import.meta.url).href,
    cupRamen: new URL('../assets/models/props/chillas_cup_ramen.obj', import.meta.url).href,
    towel: new URL('../assets/models/props/chillas_hanging_towel.obj', import.meta.url).href,
  },
  textures: {
    concrete: new URL('../assets/textures/psx/concrete_psx.jpg', import.meta.url).href,
    floor: new URL('../assets/textures/psx/floor_psx.jpg', import.meta.url).href,
    metal: new URL('../assets/textures/psx/metal_psx.jpg', import.meta.url).href,
    wallpaper: new URL('../assets/textures/psx/wallpaper_psx.jpg', import.meta.url).href,
    photoRoomWall: new URL('../assets/textures/photo_psx/room_wall_photo_psx.jpg', import.meta.url).href,
    photoCurtain: new URL('../assets/textures/photo_psx/curtain_photo_psx.jpg', import.meta.url).href,
    photoWindow: new URL('../assets/textures/photo_psx/window_room_photo_psx.jpg', import.meta.url).href,
    photoDesk: new URL('../assets/textures/photo_psx/desk_laminate_photo_psx.jpg', import.meta.url).href,
    photoExterior: new URL('../assets/textures/photo_psx/exterior_wall_photo_psx.jpg', import.meta.url).href,
    photoBuildingWindows: new URL('../assets/textures/photo_psx/building_windows_photo_psx.jpg', import.meta.url).href,
    photoEntranceGlass: new URL('../assets/textures/photo_psx/entrance_glass_photo_psx.jpg', import.meta.url).href,
    photoAsphalt: new URL('../assets/textures/photo_psx/asphalt_photo_psx.jpg', import.meta.url).href,
  },
};

const app = document.querySelector('#app');
app.innerHTML = `
  <canvas id="game"></canvas>
  <div class="hud">
    <div id="reticle"></div>
    <div id="prompt"></div>
    <div id="objective">클릭해서 시작</div>
    <div id="storyPreview" class="story-preview hidden">
      <p>늦은 밤, 고시텔 방으로 돌아왔다.</p>
      <p>바로 옆 엘리베이터는 멈춘 층도 없이 계속 울리고, 1층 밥솥의 보온등은 꺼지지 않는다.</p>
      <p>나는 그날 문을 열지 않았다.</p>
    </div>
    <div id="subtitles"></div>
  </div>
  <div id="start" class="screen">
    <h1>Night Dormitory</h1>
    <p>WASD 이동 · 마우스 시점 · E 상호작용 · Shift 천천히 걷기</p>
    <button>시작</button>
  </div>
  <div id="ending" class="screen hidden">
    <h1>다시 방이다</h1>
    <p>1층 밥솥의 보온등이 꺼진 뒤에도, 방 옆 엘리베이터는 계속 올라온다.</p>
    <button>다시 시작</button>
  </div>
`;

const canvas = document.querySelector('#game');
const promptEl = document.querySelector('#prompt');
const objectiveEl = document.querySelector('#objective');
const storyPreviewEl = document.querySelector('#storyPreview');
const subtitlesEl = document.querySelector('#subtitles');
const startEl = document.querySelector('#start');
const endingEl = document.querySelector('#ending');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050506);
scene.fog = new THREE.Fog(0x060607, 5.5, 30);

const camera = new THREE.PerspectiveCamera(63, window.innerWidth / window.innerHeight, 0.05, 70);
camera.position.set(-2.78, 1.62, 0.18);
camera.rotation.order = 'YXZ';
window.__nightDormitoryDebug = {
  getPosition: () => ({
    x: Number(camera.position.x.toFixed(3)),
    y: Number(camera.position.y.toFixed(3)),
    z: Number(camera.position.z.toFixed(3)),
  }),
  getArea: () => game.area,
};

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0.92));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const raycaster = new THREE.Raycaster();
const mouseCenter = new THREE.Vector2(0, 0);
const clock = new THREE.Clock();
const tmpBox = new THREE.Box3();
const tmpVec = new THREE.Vector3();
const objLoader = new OBJLoader();
const textureLoader = new THREE.TextureLoader();

function loadTexture(url, repeatX, repeatY) {
  const texture = textureLoader.load(url);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapNearestFilter;
  return texture;
}

function makeMushedTexture(name, colors, repeatX = 1, repeatY = 1, size = 64) {
  const canvasTexture = document.createElement('canvas');
  canvasTexture.width = size;
  canvasTexture.height = size;
  const ctx = canvasTexture.getContext('2d');
  let seed = 2166136261;
  for (let i = 0; i < name.length; i += 1) seed = Math.imul(seed ^ name.charCodeAt(i), 16777619);
  const random = () => {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    return ((seed >>> 0) % 1000) / 1000;
  };
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const base = colors[Math.floor(random() * colors.length)];
      const c = new THREE.Color(base);
      const grain = 0.78 + random() * 0.32;
      const smear = 0.86 + Math.sin((x + y * 0.35) * 0.28) * 0.08;
      c.multiplyScalar(grain * smear);
      ctx.fillStyle = `#${c.getHexString()}`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  const texture = new THREE.CanvasTexture(canvasTexture);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapNearestFilter;
  return texture;
}

function makeTileTexture(name, baseColor, stainColor, groutColor, repeatX = 3, repeatY = 3, size = 96) {
  const canvasTexture = document.createElement('canvas');
  canvasTexture.width = size;
  canvasTexture.height = size;
  const ctx = canvasTexture.getContext('2d');
  let seed = 2166136261;
  for (let i = 0; i < name.length; i += 1) seed = Math.imul(seed ^ name.charCodeAt(i), 16777619);
  const random = () => {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    return ((seed >>> 0) % 1000) / 1000;
  };
  const tile = 16;
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const onGrout = x % tile < 1 || y % tile < 1;
      const c = new THREE.Color(onGrout ? groutColor : baseColor);
      const verticalStain = Math.max(0, Math.sin((x + seed) * 0.15) * 0.08);
      const dirt = random() * 0.08 + verticalStain;
      if (!onGrout && random() > 0.88) c.lerp(new THREE.Color(stainColor), 0.28 + dirt);
      c.multiplyScalar(0.9 + random() * 0.18 - dirt);
      ctx.fillStyle = `#${c.getHexString()}`;
      ctx.fillRect(x, y, 1, 1);
    }
  }
  const texture = new THREE.CanvasTexture(canvasTexture);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestMipmapNearestFilter;
  return texture;
}

const tex = {
  concrete: loadTexture(assets.textures.concrete, 1.6, 1.6),
  floor: loadTexture(assets.textures.floor, 2.2, 2.2),
  metal: loadTexture(assets.textures.metal, 1.2, 1.2),
  wallpaper: loadTexture(assets.textures.wallpaper, 1.8, 1.5),
  photoRoomWall: loadTexture(assets.textures.photoRoomWall, 2.2, 1.8),
  photoCurtain: loadTexture(assets.textures.photoCurtain, 1.2, 1.4),
  photoWindow: loadTexture(assets.textures.photoWindow, 1, 1),
  photoDesk: loadTexture(assets.textures.photoDesk, 1.4, 1.2),
  photoExterior: loadTexture(assets.textures.photoExterior, 1.5, 1.1),
  photoBuildingWindows: loadTexture(assets.textures.photoBuildingWindows, 1.2, 1.2),
  photoEntranceGlass: loadTexture(assets.textures.photoEntranceGlass, 1, 1),
  photoAsphalt: loadTexture(assets.textures.photoAsphalt, 2.2, 1.4),
  bathroomTile: makeTileTexture('bathroom tile', 0xa9ada3, 0x666d67, 0x555b58, 3.4, 3.2, 96),
  dirtyCeramic: makeMushedTexture('dirty ceramic', [0xd7d2c0, 0xb8b3a5, 0xe7dfca, 0x8b877c], 1.5, 1.5, 48),
  fabric: makeMushedTexture('thin old fabric', [0x9b8d78, 0x655f50, 0xb9af9b, 0x3f3b33], 2.5, 2.5, 48),
  curtain: makeMushedTexture('pink curtain photo smear', [0xa98779, 0xc0a091, 0x745b56, 0xd3b8a6], 1.5, 2.6, 48),
  deskLaminate: makeMushedTexture('brown laminated desk', [0x6e4a32, 0x9a6d49, 0x3d2a1d, 0xb38a61], 2, 2, 48),
  roadAsphalt: makeMushedTexture('wet asphalt', [0x080808, 0x171716, 0x282623, 0x0f1113], 2, 2, 48),
};

const mat = {
  wall: new THREE.MeshLambertMaterial({ color: 0xcfc3a3, map: tex.photoRoomWall }),
  concrete: new THREE.MeshLambertMaterial({ color: 0xc0bcb0, map: tex.concrete }),
  floor: new THREE.MeshLambertMaterial({ color: 0xaa7850, map: tex.floor }),
  ceiling: new THREE.MeshLambertMaterial({ color: 0x6d6a60 }),
  trim: new THREE.MeshLambertMaterial({ color: 0x24211e }),
  door: new THREE.MeshLambertMaterial({ color: 0x443225 }),
  doorDark: new THREE.MeshLambertMaterial({ color: 0x1d1713 }),
  wood: new THREE.MeshLambertMaterial({ color: 0x8a6a50, map: tex.photoDesk }),
  paleWall: new THREE.MeshLambertMaterial({ color: 0xc4bea9 }),
  paleCurtain: new THREE.MeshLambertMaterial({ color: 0xb9998c, map: tex.photoCurtain }),
  mattress: new THREE.MeshLambertMaterial({ color: 0xb5b0a4, map: tex.fabric }),
  darkChair: new THREE.MeshLambertMaterial({ color: 0x111315 }),
  paper: new THREE.MeshLambertMaterial({ color: 0xd1c7aa }),
  plastic: new THREE.MeshLambertMaterial({ color: 0xa2a7a0 }),
  bedding: new THREE.MeshLambertMaterial({ color: 0x635a47, map: tex.fabric }),
  pillow: new THREE.MeshLambertMaterial({ color: 0xd0c7b9 }),
  bathroomTile: new THREE.MeshLambertMaterial({ color: 0xb4b5aa, map: tex.bathroomTile }),
  dirtyCeramic: new THREE.MeshLambertMaterial({ color: 0xcac5b4 }),
  screenGlow: new THREE.MeshBasicMaterial({ color: 0x0c1b27 }),
  roadLine: new THREE.MeshBasicMaterial({ color: 0xd5c46c }),
  tailLight: new THREE.MeshBasicMaterial({ color: 0xb43124 }),
  streetLamp: new THREE.MeshBasicMaterial({ color: 0xe3c177 }),
  red: new THREE.MeshLambertMaterial({ color: 0x612121 }),
  black: new THREE.MeshLambertMaterial({ color: 0x080808 }),
  asphalt: new THREE.MeshLambertMaterial({ color: 0x141414, map: tex.photoAsphalt }),
  exteriorPhoto: new THREE.MeshLambertMaterial({ color: 0xb8b8ad, map: tex.photoExterior }),
  buildingWindowPhoto: new THREE.MeshBasicMaterial({ color: 0x8797a0, map: tex.photoBuildingWindows }),
  entranceGlassPhoto: new THREE.MeshBasicMaterial({ color: 0x667a79, map: tex.photoEntranceGlass }),
  invisible: new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 }),
  metal: new THREE.MeshLambertMaterial({ color: 0xc2c0b8, map: tex.metal }),
  stain: new THREE.MeshBasicMaterial({ color: 0x15110d, transparent: true, opacity: 0.36 }),
  glow: new THREE.MeshBasicMaterial({ color: 0xdad2aa }),
  mirror: new THREE.MeshBasicMaterial({ color: 0x14202a }),
  windowGlass: new THREE.MeshBasicMaterial({ color: 0x1b3344, map: tex.photoWindow, transparent: true, opacity: 0.58 }),
  elevator: new THREE.MeshLambertMaterial({ color: 0x586267 }),
  riceLight: new THREE.MeshBasicMaterial({ color: 0xd54a2f }),
};

const root = new THREE.Group();
scene.add(root);

const audio = {
  enabled: false,
  clips: {},
};

const ambient = new THREE.AmbientLight(0x2f2a21, 0.52);
scene.add(ambient);

const hallLight = new THREE.PointLight(0xffe6a8, 1.75, 14, 2);
hallLight.position.set(-2.05, 2.35, -1.45);
scene.add(hallLight);

const bedroomLight = new THREE.PointLight(0xffd19b, 1.2, 9, 2);
bedroomLight.position.set(-2.8, 2.35, -4.25);
scene.add(bedroomLight);

const bathroomLight = new THREE.PointLight(0xb8d6ff, 0.0, 7, 2);
bathroomLight.position.set(1.42, 2.16, -3.48);
scene.add(bathroomLight);

const exitColdLight = new THREE.PointLight(0x94b6ff, 0.0, 10, 2);
exitColdLight.position.set(0, 1.2, 6.4);
scene.add(exitColdLight);

const corridorLight = new THREE.PointLight(0xb5c4ff, 0.0, 12, 2);
corridorLight.position.set(0, 2.35, 10.5);
scene.add(corridorLight);

const elevatorLight = new THREE.PointLight(0xc8d3ff, 0.0, 5.5, 2);
elevatorLight.position.set(0.9, 2.12, 7.55);
scene.add(elevatorLight);

const commonLight = new THREE.PointLight(0xffd69a, 0.0, 12, 2);
commonLight.position.set(0, 2.35, 21.5);
scene.add(commonLight);

const endingRedLight = new THREE.PointLight(0xff3322, 0.0, 5, 2);
endingRedLight.position.set(-0.6, 1.4, 24.35);
scene.add(endingRedLight);

function box(name, size, pos, material, parent = root, collider = true) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(size.x, size.y, size.z), material);
  mesh.name = name;
  mesh.position.copy(pos);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  parent.add(mesh);
  if (collider) {
    mesh.userData.collider = true;
    game.colliders.push(mesh);
  }
  return mesh;
}

function planeLike(name, size, pos, material, parent = root) {
  return box(name, size, pos, material, parent, false);
}

function cylinder(name, radiusTop, radiusBottom, height, segments, pos, material, parent = root, collider = false) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material);
  mesh.name = name;
  mesh.position.copy(pos);
  parent.add(mesh);
  if (collider) {
    mesh.userData.collider = true;
    game.colliders.push(mesh);
  }
  return mesh;
}

function loadObj(name, url, { position, rotation = new THREE.Euler(), scale = 1, material }) {
  const holder = new THREE.Group();
  holder.name = `${name} holder`;
  holder.position.copy(position);
  holder.rotation.copy(rotation);
  holder.scale.setScalar(scale);
  root.add(holder);
  objLoader.load(
    url,
    (object) => {
      object.name = name;
      object.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
          child.castShadow = false;
          child.receiveShadow = false;
        }
      });
      holder.add(object);
    },
    undefined,
    () => {
      console.warn(`Failed to load model: ${name}`);
    },
  );
  return holder;
}

function addRoomShell() {
  box('floor', new THREE.Vector3(4.35, 0.12, 7.15), new THREE.Vector3(-2.05, -0.06, -2.05), mat.floor, root, true);
  box('ceiling', new THREE.Vector3(4.35, 0.12, 7.15), new THREE.Vector3(-2.05, 2.62, -2.05), mat.ceiling);
  box('photo back wall', new THREE.Vector3(4.35, 2.65, 0.18), new THREE.Vector3(-2.05, 1.32, -5.65), mat.wall);
  box('photo entry wall', new THREE.Vector3(4.35, 2.65, 0.18), new THREE.Vector3(-2.05, 1.32, 1.55), mat.wall);
  box('photo bed wall', new THREE.Vector3(0.18, 2.65, 7.15), new THREE.Vector3(-4.3, 1.32, -2.05), mat.wall);
  box('photo desk wall back segment', new THREE.Vector3(0.18, 2.65, 1.35), new THREE.Vector3(0.22, 1.32, -4.98), mat.wall);
  box('photo desk wall front segment', new THREE.Vector3(0.18, 2.65, 4.15), new THREE.Vector3(0.22, 1.32, -0.42), mat.wall);
  box('bathroom doorway header', new THREE.Vector3(0.18, 0.45, 1.0), new THREE.Vector3(0.22, 2.42, -3.55), mat.wall);
  box('entry alcove dark wall', new THREE.Vector3(1.35, 2.45, 0.16), new THREE.Vector3(-0.55, 1.22, 1.2), mat.doorDark);
  box('narrow entry trim', new THREE.Vector3(1.24, 0.12, 0.1), new THREE.Vector3(-0.55, 2.08, 1.05), mat.trim, root, false);
  addGrimeAndSigns();
  addBathroom();
}

function addFurniture() {
  box('photo bed mattress', new THREE.Vector3(1.15, 0.32, 2.5), new THREE.Vector3(-3.65, 0.34, -4.25), mat.mattress);
  box('green bed base', new THREE.Vector3(1.28, 0.18, 2.65), new THREE.Vector3(-3.65, 0.16, -4.25), new THREE.MeshLambertMaterial({ color: 0x455241 }));
  box('bed headboard', new THREE.Vector3(1.18, 0.74, 0.12), new THREE.Vector3(-3.65, 0.72, -5.46), mat.doorDark);
  box('thin blanket folded on bed', new THREE.Vector3(1.06, 0.06, 1.2), new THREE.Vector3(-3.65, 0.54, -3.72), mat.bedding, root, false);
  box('flat pillow near window', new THREE.Vector3(0.86, 0.12, 0.42), new THREE.Vector3(-3.65, 0.62, -5.08), mat.pillow, root, false);
  box('desk opposite bed', new THREE.Vector3(0.62, 0.18, 1.36), new THREE.Vector3(-0.18, 0.82, -4.32), mat.wood);
  box('desk leg front', new THREE.Vector3(0.1, 0.72, 0.1), new THREE.Vector3(-0.18, 0.4, -3.78), mat.wood);
  box('desk leg back', new THREE.Vector3(0.1, 0.72, 0.1), new THREE.Vector3(-0.18, 0.4, -4.86), mat.wood);
  game.chair = box('black plastic chair collider', new THREE.Vector3(0.6, 0.78, 0.6), new THREE.Vector3(-0.92, 0.38, -4.32), mat.invisible, root, true);
  game.chairVisual = addProceduralChair(new THREE.Vector3(-0.92, 0, -4.32), -Math.PI / 2 + 0.15);
  box('wardrobe', new THREE.Vector3(0.72, 2.1, 0.62), new THREE.Vector3(-0.18, 1.05, -0.7), mat.doorDark);
  box('mini fridge', new THREE.Vector3(0.72, 0.82, 0.62), new THREE.Vector3(-0.2, 0.42, -1.62), mat.black);
  game.tv = box('blank black monitor', new THREE.Vector3(0.78, 0.44, 0.07), new THREE.Vector3(-0.68, 1.08, -4.75), mat.black, root, false);
  box('shoe rack', new THREE.Vector3(1.1, 0.32, 0.38), new THREE.Vector3(-1.7, 0.18, 0.9), mat.wood);
  game.mirror = planeLike('mirror', new THREE.Vector3(0.7, 0.72, 0.04), new THREE.Vector3(0.11, 1.48, -3.7), mat.mirror);
  addPhotoRoomDetails();
  addDeskClutter();
}

function addPhotoRoomDetails() {
  box('tall window frame', new THREE.Vector3(0.66, 1.46, 0.08), new THREE.Vector3(-1.58, 1.56, -5.52), mat.trim, root, false);
  box('tall dark window glass', new THREE.Vector3(0.46, 1.22, 0.04), new THREE.Vector3(-1.58, 1.56, -5.46), mat.windowGlass, root, false);
  addWindowViewLayer();
  box('left curtain panel', new THREE.Vector3(0.34, 1.34, 0.07), new THREE.Vector3(-2.18, 1.38, -5.4), mat.paleCurtain, root, false);
  box('right curtain panel', new THREE.Vector3(0.34, 1.34, 0.07), new THREE.Vector3(-0.92, 1.38, -5.4), mat.paleCurtain, root, false);
  box('drawer unit', new THREE.Vector3(0.56, 0.84, 0.55), new THREE.Vector3(-0.1, 0.42, -4.25), mat.plastic);
  for (let i = 0; i < 3; i += 1) {
    box(`drawer line ${i}`, new THREE.Vector3(0.42, 0.035, 0.04), new THREE.Vector3(-0.1, 0.24 + i * 0.22, -3.95), mat.metal, root, false);
  }
  box('wall ac unit', new THREE.Vector3(1.05, 0.32, 0.3), new THREE.Vector3(-3.72, 2.24, -5.34), mat.plastic, root, false);
  box('ac vent shadow', new THREE.Vector3(0.84, 0.04, 0.04), new THREE.Vector3(-3.72, 2.11, -5.13), mat.black, root, false);

  const fanBase = cylinder('fan base', 0.28, 0.35, 0.08, 16, new THREE.Vector3(-0.35, 0.08, -1.95), mat.plastic, root, false);
  fanBase.rotation.x = Math.PI / 2;
  const fanPole = cylinder('fan pole', 0.035, 0.035, 0.78, 8, new THREE.Vector3(-0.35, 0.45, -1.95), mat.metal, root, false);
  const fanHead = cylinder('fan head', 0.32, 0.32, 0.12, 18, new THREE.Vector3(-0.35, 0.92, -1.95), mat.plastic, root, false);
  fanHead.rotation.x = Math.PI / 2;
  box('fan blade a', new THREE.Vector3(0.48, 0.03, 0.05), new THREE.Vector3(-0.35, 0.92, -1.87), mat.metal, root, false);
  const bladeB = box('fan blade b', new THREE.Vector3(0.03, 0.48, 0.05), new THREE.Vector3(-0.35, 0.92, -1.87), mat.metal, root, false);
  bladeB.rotation.z = 0.25;
  addWindowExterior();
}

function addDeskClutter() {
  box('desk monitor silhouette', new THREE.Vector3(0.08, 0.54, 0.7), new THREE.Vector3(-0.49, 1.15, -4.32), mat.black, root, false);
  box('desk monitor blue noise', new THREE.Vector3(0.04, 0.42, 0.56), new THREE.Vector3(-0.53, 1.15, -4.32), mat.screenGlow, root, false);
  box('desk keyboard', new THREE.Vector3(0.34, 0.035, 0.48), new THREE.Vector3(-0.45, 0.93, -4.0), mat.black, root, false);
  box('desk book stack lower', new THREE.Vector3(0.36, 0.055, 0.28), new THREE.Vector3(-0.48, 0.91, -4.83), mat.paper, root, false);
  box('desk book stack upper', new THREE.Vector3(0.3, 0.055, 0.24), new THREE.Vector3(-0.48, 0.98, -4.84), mat.red, root, false);
  box('wall socket near desk', new THREE.Vector3(0.035, 0.18, 0.2), new THREE.Vector3(0.13, 0.44, -3.62), mat.paper, root, false);
  const cableGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0.11, 0.39, -3.62),
    new THREE.Vector3(-0.16, 0.17, -3.8),
    new THREE.Vector3(-0.58, 0.1, -4.05),
  ]);
  const cable = new THREE.Line(cableGeometry, new THREE.LineBasicMaterial({ color: 0x050505 }));
  cable.name = 'desk black cable';
  root.add(cable);
  const cup = cylinder('desk paper cup', 0.11, 0.09, 0.18, 10, new THREE.Vector3(-0.48, 1.02, -3.72), mat.paper, root, false);
  cup.rotation.x = 0.08;
  box('desk phone dark slab', new THREE.Vector3(0.18, 0.025, 0.34), new THREE.Vector3(-0.46, 0.94, -4.56), mat.black, root, false);
}

function addProceduralChair(position, rotationY) {
  const chair = new THREE.Group();
  chair.name = 'procedural black plastic chair';
  chair.position.copy(position);
  chair.rotation.y = rotationY;
  root.add(chair);
  box('chair seat shell', new THREE.Vector3(0.58, 0.12, 0.56), new THREE.Vector3(0, 0.5, 0), mat.darkChair, chair, false);
  box('chair curved back panel', new THREE.Vector3(0.58, 0.76, 0.1), new THREE.Vector3(0, 0.9, -0.24), mat.darkChair, chair, false);
  box('chair back cutout', new THREE.Vector3(0.3, 0.16, 0.105), new THREE.Vector3(0, 1.02, -0.3), mat.black, chair, false);
  for (const [x, z] of [
    [-0.22, -0.18],
    [0.22, -0.18],
    [-0.22, 0.2],
    [0.22, 0.2],
  ]) {
    box('thin chrome chair leg', new THREE.Vector3(0.055, 0.52, 0.055), new THREE.Vector3(x, 0.25, z), mat.metal, chair, false);
  }
  return chair;
}

function addBathroom() {
  box('bathroom wet floor', new THREE.Vector3(2.35, 0.1, 2.18), new THREE.Vector3(1.48, -0.05, -3.56), mat.bathroomTile);
  box('bathroom low ceiling', new THREE.Vector3(2.35, 0.1, 2.18), new THREE.Vector3(1.48, 2.42, -3.56), mat.ceiling);
  box('bathroom right tile wall', new THREE.Vector3(0.12, 2.5, 2.18), new THREE.Vector3(2.68, 1.25, -3.56), mat.bathroomTile);
  box('bathroom back tile wall', new THREE.Vector3(2.35, 2.5, 0.12), new THREE.Vector3(1.48, 1.25, -4.68), mat.bathroomTile);
  box('bathroom front tile wall', new THREE.Vector3(2.35, 2.5, 0.12), new THREE.Vector3(1.48, 1.25, -2.44), mat.bathroomTile);
  box('bathroom door frame top', new THREE.Vector3(0.16, 0.22, 1.04), new THREE.Vector3(0.28, 2.2, -3.55), mat.trim, root, false);
  box('bathroom threshold dirty sill', new THREE.Vector3(0.24, 0.08, 0.92), new THREE.Vector3(0.36, 0.04, -3.55), mat.metal, root, false);
  box('bathroom fluorescent cover', new THREE.Vector3(0.72, 0.045, 0.22), new THREE.Vector3(1.42, 2.31, -3.48), mat.glow, root, false);
  for (const z of [-4.34, -3.86, -3.38, -2.9]) {
    box('bathroom floor grout horizontal', new THREE.Vector3(2.08, 0.012, 0.018), new THREE.Vector3(1.48, 0.012, z), mat.stain, root, false);
  }
  for (const x of [0.78, 1.26, 1.74, 2.22]) {
    box('bathroom floor grout vertical', new THREE.Vector3(0.018, 0.012, 1.72), new THREE.Vector3(x, 0.014, -3.56), mat.stain, root, false);
  }

  const toiletBase = cylinder('bathroom toilet base', 0.26, 0.32, 0.38, 12, new THREE.Vector3(2.0, 0.25, -4.08), mat.dirtyCeramic, root, true);
  toiletBase.scale.z = 0.82;
  const toiletSeat = cylinder('bathroom toilet seat', 0.36, 0.34, 0.12, 16, new THREE.Vector3(2.0, 0.5, -4.08), mat.dirtyCeramic, root, true);
  toiletSeat.scale.z = 0.72;
  box('bathroom toilet tank', new THREE.Vector3(0.7, 0.44, 0.22), new THREE.Vector3(2.0, 0.75, -4.55), mat.dirtyCeramic);

  box('bathroom sink bowl block', new THREE.Vector3(0.72, 0.22, 0.42), new THREE.Vector3(0.86, 0.86, -4.38), mat.dirtyCeramic, root, true);
  box('bathroom sink cabinet shadow', new THREE.Vector3(0.52, 0.58, 0.32), new THREE.Vector3(0.86, 0.45, -4.38), mat.plastic, root, true);
  box('bathroom faucet', new THREE.Vector3(0.08, 0.16, 0.08), new THREE.Vector3(0.86, 1.02, -4.56), mat.metal, root, false);
  box('bathroom mirror smeared', new THREE.Vector3(0.62, 0.64, 0.035), new THREE.Vector3(0.86, 1.48, -4.61), mat.mirror, root, false);
  box('bathroom mirror water streak one', new THREE.Vector3(0.025, 0.5, 0.02), new THREE.Vector3(0.72, 1.44, -4.58), mat.stain, root, false);
  box('bathroom mirror water streak two', new THREE.Vector3(0.02, 0.38, 0.02), new THREE.Vector3(0.98, 1.52, -4.58), mat.stain, root, false);

  const showerLine = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(2.52, 1.9, -3.2),
    new THREE.Vector3(2.3, 1.58, -3.25),
    new THREE.Vector3(2.42, 1.18, -3.34),
  ]);
  const showerHose = new THREE.Line(showerLine, new THREE.LineBasicMaterial({ color: 0x2d3030 }));
  showerHose.name = 'bathroom shower hose';
  root.add(showerHose);
  box('bathroom shower head', new THREE.Vector3(0.18, 0.08, 0.12), new THREE.Vector3(2.46, 1.86, -3.18), mat.metal, root, false);
  box('bathroom drain grate', new THREE.Vector3(0.34, 0.025, 0.28), new THREE.Vector3(1.45, 0.02, -3.05), mat.metal, root, false);
  box('bathroom wet stain floor', new THREE.Vector3(1.1, 0.025, 0.72), new THREE.Vector3(1.42, 0.025, -3.24), mat.stain, root, false);
  box('bathroom towel rail', new THREE.Vector3(0.08, 0.08, 0.76), new THREE.Vector3(2.6, 1.42, -2.98), mat.metal, root, false);
  box('bathroom hanging towel smear', new THREE.Vector3(0.06, 0.64, 0.5), new THREE.Vector3(2.56, 1.05, -2.98), mat.paleCurtain, root, false);
}

function addWindowViewLayer() {
  box('window open road strip', new THREE.Vector3(0.44, 0.28, 0.02), new THREE.Vector3(-1.58, 1.02, -5.4), mat.black, root, false);
  box('window road center line', new THREE.Vector3(0.06, 0.02, 0.018), new THREE.Vector3(-1.58, 1.02, -5.37), mat.roadLine, root, false);
  box('window passing car red one', new THREE.Vector3(0.08, 0.035, 0.018), new THREE.Vector3(-1.72, 0.92, -5.35), mat.tailLight, root, false);
  box('window passing car red two', new THREE.Vector3(0.08, 0.035, 0.018), new THREE.Vector3(-1.48, 0.93, -5.35), mat.tailLight, root, false);
  box('window street lamp smear', new THREE.Vector3(0.07, 0.22, 0.018), new THREE.Vector3(-1.35, 1.22, -5.35), mat.streetLamp, root, false);
  box('window opposite building slice', new THREE.Vector3(0.44, 0.7, 0.02), new THREE.Vector3(-1.58, 1.63, -5.39), mat.exteriorPhoto, root, false);
  for (const [x, y] of [
    [-1.68, 1.78],
    [-1.48, 1.78],
    [-1.68, 1.5],
    [-1.48, 1.5],
  ]) {
    box('window opposite room light', new THREE.Vector3(0.1, 0.1, 0.018), new THREE.Vector3(x, y, -5.36), mat.windowGlass, root, false);
  }
  box('window railing vertical left', new THREE.Vector3(0.025, 1.18, 0.018), new THREE.Vector3(-1.75, 1.55, -5.34), mat.metal, root, false);
  box('window railing vertical right', new THREE.Vector3(0.025, 1.18, 0.018), new THREE.Vector3(-1.41, 1.55, -5.34), mat.metal, root, false);
}

function addWindowExterior() {
  const outside = new THREE.Group();
  outside.name = 'window exterior facade';
  root.add(outside);
  box('outside second floor road', new THREE.Vector3(4.6, 0.08, 3.2), new THREE.Vector3(-1.58, -0.08, -7.35), mat.asphalt, outside, false);
  box('outside road lane mark left', new THREE.Vector3(0.08, 0.025, 1.2), new THREE.Vector3(-2.4, -0.02, -7.25), mat.roadLine, outside, false);
  box('outside road lane mark right', new THREE.Vector3(0.08, 0.025, 1.2), new THREE.Vector3(-0.6, -0.02, -7.25), mat.roadLine, outside, false);
  box('outside street lamp pole', new THREE.Vector3(0.05, 1.6, 0.05), new THREE.Vector3(0.66, 0.73, -6.85), mat.metal, outside, false);
  box('outside sodium street lamp', new THREE.Vector3(0.28, 0.12, 0.08), new THREE.Vector3(0.52, 1.45, -6.72), mat.streetLamp, outside, false);
  box('outside opposite building wall', new THREE.Vector3(4.2, 2.8, 0.12), new THREE.Vector3(-1.55, 1.45, -8.55), mat.exteriorPhoto, outside, false);
  for (const [x, y] of [
    [-2.7, 1.9],
    [-1.55, 1.9],
    [-0.4, 1.9],
    [-2.1, 1.08],
    [-0.95, 1.08],
  ]) {
    box('outside small window frame', new THREE.Vector3(0.5, 0.38, 0.05), new THREE.Vector3(x, y, -8.45), mat.trim, outside, false);
    box('outside blue glass', new THREE.Vector3(0.38, 0.26, 0.04), new THREE.Vector3(x, y, -8.41), mat.buildingWindowPhoto, outside, false);
    box('outside ac unit', new THREE.Vector3(0.46, 0.22, 0.22), new THREE.Vector3(x + 0.42, y - 0.34, -8.37), mat.metal, outside, false);
  }
  box('outside vertical pipe', new THREE.Vector3(0.06, 2.7, 0.08), new THREE.Vector3(0.18, 1.35, -8.33), mat.metal, outside, false);
}

function addGrimeAndSigns() {
  box('water stain over bed', new THREE.Vector3(0.78, 0.5, 0.025), new THREE.Vector3(-3.7, 1.95, -5.48), mat.stain, root, false);
  box('old outlet stain', new THREE.Vector3(0.24, 0.16, 0.025), new THREE.Vector3(-0.1, 0.55, -5.48), mat.stain, root, false);
  box('entry shoe mark a', new THREE.Vector3(0.42, 0.025, 0.18), new THREE.Vector3(-1.2, 0.04, 0.9), mat.stain, root, false);
  box('entry shoe mark b', new THREE.Vector3(0.34, 0.025, 0.16), new THREE.Vector3(-0.75, 0.04, 0.6), mat.stain, root, false);
  box('room warning sticker', new THREE.Vector3(0.32, 0.16, 0.03), new THREE.Vector3(-0.55, 1.55, 1.08), mat.paper, root, false);
  box('room sticker slash', new THREE.Vector3(0.24, 0.025, 0.035), new THREE.Vector3(-0.55, 1.55, 1.03), mat.red, root, false);
  box('peeling wallpaper bed wall one', new THREE.Vector3(0.04, 0.38, 0.28), new THREE.Vector3(-4.2, 1.52, -3.7), mat.stain, root, false);
  box('peeling wallpaper bed wall two', new THREE.Vector3(0.04, 0.24, 0.18), new THREE.Vector3(-4.2, 1.16, -2.2), mat.stain, root, false);
}

function addLoadedModels() {
  loadObj('asset elevator door set', assets.models.elevatorDoor, {
    position: new THREE.Vector3(1.46, 1.12, 7.55),
    rotation: new THREE.Euler(0, Math.PI / 2, 0),
    scale: 1.58,
    material: mat.elevator,
  });
  loadObj('asset fluorescent fixture main', assets.models.fluorescentFixture, {
    position: new THREE.Vector3(-2.05, 2.48, -1.5),
    scale: 1.05,
    material: mat.glow,
  });
  loadObj('asset fluorescent fixture room', assets.models.fluorescentFixture, {
    position: new THREE.Vector3(-2.75, 2.48, -4.25),
    scale: 0.9,
    material: mat.glow,
  });
  loadObj('asset rice cooker', assets.models.riceCooker, {
    position: new THREE.Vector3(-0.78, 1.23, 24.42),
    scale: 0.95,
    material: mat.plastic,
  });
  addClutterModels();
}

function addClutterModels() {
  const clutter = [
    ['trash bag left 1', assets.models.trashBag, [-1.26, 0.28, 8.7], [0, 0.15, 0], 1.2, mat.black],
    ['trash bag left 2', assets.models.trashBag, [-1.24, 0.28, 10.05], [0, -0.45, 0], 1.0, mat.black],
    ['trash bag right 1', assets.models.trashBag, [1.22, 0.28, 12.25], [0, 0.8, 0], 1.05, mat.black],
    ['cardboard stack 1', assets.models.cardboardBoxes, [-1.16, 0.32, 9.1], [0, -0.24, 0], 1.1, mat.wood],
    ['cardboard stack 2', assets.models.cardboardBoxes, [1.08, 0.32, 10.95], [0, 0.5, 0], 1.0, mat.wood],
    ['cardboard stack 3', assets.models.cardboardBoxes, [-1.15, 0.32, 13.6], [0, 0.1, 0], 1.0, mat.wood],
    ['power strip room 204', assets.models.powerStrip, [-1.08, 0.08, 6.5], [0, -0.05, 0], 1.05, mat.plastic],
    ['hanging towel bath', assets.models.towel, [0.28, 1.28, -3.55], [0, -Math.PI / 2, 0], 1.15, mat.paleCurtain],
    ['common cup ramen 1', assets.models.cupRamen, [0.8, 1.02, 24.55], [0, -0.1, 0], 0.9, mat.paper],
    ['common cup ramen 2', assets.models.cupRamen, [1.15, 1.02, 24.65], [0, 0.35, 0], 0.9, mat.paper],
  ];
  for (const [name, url, pos, rot, scale, material] of clutter) {
    loadObj(name, url, {
      position: new THREE.Vector3(...pos),
      rotation: new THREE.Euler(...rot),
      scale,
      material,
    });
  }

  game.slippersModel = loadObj('room 204 slippers', assets.models.slippers, {
    position: new THREE.Vector3(-0.72, 0.08, 6.72),
    rotation: new THREE.Euler(0, -0.42, 0),
    scale: 1.55,
    material: mat.darkChair,
  });
  addPowerCord();
}

function addPowerCord() {
  const points = [
    new THREE.Vector3(-1.08, 0.1, 6.52),
    new THREE.Vector3(-0.96, 0.07, 6.34),
    new THREE.Vector3(-0.88, 0.13, 6.12),
    new THREE.Vector3(-0.78, 0.2, 6.01),
  ];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const cord = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0x080706 }));
  cord.name = 'power strip cord entering door crack';
  root.add(cord);
}

function addGoshiwonExterior() {
  box('corridor floor', new THREE.Vector3(3.15, 0.1, 9.8), new THREE.Vector3(0, -0.05, 10.9), mat.floor);
  box('corridor ceiling', new THREE.Vector3(3.15, 0.1, 9.8), new THREE.Vector3(0, 2.42, 10.9), mat.ceiling);
  box('corridor west wall', new THREE.Vector3(0.14, 2.5, 9.8), new THREE.Vector3(-1.55, 1.25, 10.9), mat.concrete);
  box('corridor east wall', new THREE.Vector3(0.14, 2.5, 9.8), new THREE.Vector3(1.55, 1.25, 10.9), mat.concrete);
  box('corridor end wall', new THREE.Vector3(3.15, 2.5, 0.14), new THREE.Vector3(0, 1.25, 15.85), mat.exteriorPhoto);
  box('corridor room door', new THREE.Vector3(1.16, 2.15, 0.12), new THREE.Vector3(-0.72, 1.08, 6.08), mat.doorDark, root, false);
  box('room number plate', new THREE.Vector3(0.36, 0.16, 0.04), new THREE.Vector3(0.02, 1.72, 6.15), mat.paper, root, false);
  box('room number 204 mark a', new THREE.Vector3(0.05, 0.09, 0.045), new THREE.Vector3(-0.08, 1.72, 6.18), mat.black, root, false);
  box('room number 204 mark b', new THREE.Vector3(0.05, 0.09, 0.045), new THREE.Vector3(0.02, 1.72, 6.18), mat.black, root, false);
  box('room number 204 mark c', new THREE.Vector3(0.05, 0.09, 0.045), new THREE.Vector3(0.12, 1.72, 6.18), mat.black, root, false);
  box('corridor ceiling stain', new THREE.Vector3(0.9, 0.03, 0.45), new THREE.Vector3(-0.55, 2.36, 12.2), mat.stain, root, false);
  box('corridor wall stain', new THREE.Vector3(0.03, 0.9, 0.42), new THREE.Vector3(-1.47, 1.28, 13.4), mat.stain, root, false);
  addCorridorDetails();
  game.elevatorDoor = box('elevator door', new THREE.Vector3(0.12, 2.18, 1.28), new THREE.Vector3(1.5, 1.09, 7.55), mat.elevator, root, false);
  planeLike('elevator seam', new THREE.Vector3(0.04, 2.0, 0.02), new THREE.Vector3(1.43, 1.04, 7.55), mat.metal);
  const elevatorButton = planeLike('elevator button', new THREE.Vector3(0.08, 0.22, 0.16), new THREE.Vector3(1.39, 1.22, 8.22), mat.glow);
  addInteractable('엘리베이터 버튼', elevatorButton, () => useElevator());

  box('common floor', new THREE.Vector3(4.6, 0.1, 4.65), new THREE.Vector3(0, -0.05, 22.7), mat.floor);
  box('common ceiling', new THREE.Vector3(4.6, 0.1, 4.65), new THREE.Vector3(0, 2.42, 22.7), mat.ceiling);
  box('common back wall', new THREE.Vector3(4.6, 2.5, 0.14), new THREE.Vector3(0, 1.25, 25.08), mat.concrete);
  box('common left wall', new THREE.Vector3(0.14, 2.5, 4.65), new THREE.Vector3(-2.3, 1.25, 22.7), mat.concrete);
  box('common right wall', new THREE.Vector3(0.14, 2.5, 4.65), new THREE.Vector3(2.3, 1.25, 22.7), mat.concrete);
  box('common entry wall', new THREE.Vector3(4.6, 2.5, 0.14), new THREE.Vector3(0, 1.25, 20.32), mat.concrete);
  box('common counter', new THREE.Vector3(2.7, 0.88, 0.62), new THREE.Vector3(-0.15, 0.44, 24.45), mat.wood);
  box('rice shelf upper', new THREE.Vector3(2.6, 0.08, 0.48), new THREE.Vector3(-0.15, 1.45, 24.48), mat.wood);
  box('rice shelf left post', new THREE.Vector3(0.08, 1.05, 0.08), new THREE.Vector3(-1.4, 0.94, 24.5), mat.metal);
  box('rice shelf right post', new THREE.Vector3(0.08, 1.05, 0.08), new THREE.Vector3(1.1, 0.94, 24.5), mat.metal);
  game.riceCooker = box('rice cooker', new THREE.Vector3(0.72, 0.48, 0.58), new THREE.Vector3(-0.78, 1.04, 24.42), mat.plastic, root, false);
  box('rice cooker light', new THREE.Vector3(0.08, 0.08, 0.04), new THREE.Vector3(-0.53, 1.1, 24.11), mat.riceLight, root, false);
  box('second rice cooker', new THREE.Vector3(0.72, 0.48, 0.58), new THREE.Vector3(0.26, 1.04, 24.42), mat.plastic, root, false);
  addCommonSpaceDetails();
  addInteractable('밥솥', game.riceCooker, () => useRiceCooker());
}

function addCorridorDetails() {
  for (const z of [7.2, 10.2, 13.2]) {
    box('corridor fluorescent cover', new THREE.Vector3(0.92, 0.045, 0.28), new THREE.Vector3(0, 2.32, z), mat.glow, root, false);
    box('corridor light stain', new THREE.Vector3(1.2, 0.02, 0.48), new THREE.Vector3(0, 2.29, z + 0.08), mat.stain, root, false);
  }
  for (const [z, room] of [
    [8.95, '203'],
    [11.55, '205'],
    [14.1, '206'],
  ]) {
    box(`room ${room} flat door`, new THREE.Vector3(1.0, 1.92, 0.08), new THREE.Vector3(-1.47, 1.02, z), mat.doorDark, root, false);
    box(`room ${room} plate`, new THREE.Vector3(0.34, 0.13, 0.04), new THREE.Vector3(-1.42, 1.63, z - 0.34), mat.paper, root, false);
    box(`room ${room} handle`, new THREE.Vector3(0.06, 0.12, 0.08), new THREE.Vector3(-1.36, 1.0, z + 0.32), mat.metal, root, false);
  }
  box('elevator floor sign plate', new THREE.Vector3(0.48, 0.18, 0.04), new THREE.Vector3(1.38, 1.78, 7.0), mat.paper, root, false);
  box('elevator red arrow', new THREE.Vector3(0.18, 0.04, 0.045), new THREE.Vector3(1.36, 1.78, 7.0), mat.red, root, false);
  box('corridor cable tray', new THREE.Vector3(0.08, 0.08, 8.5), new THREE.Vector3(-1.42, 2.08, 10.8), mat.metal, root, false);
  box('corridor end narrow window frame', new THREE.Vector3(1.05, 0.82, 0.04), new THREE.Vector3(0, 1.58, 15.77), mat.trim, root, false);
  box('corridor end night window', new THREE.Vector3(0.82, 0.58, 0.035), new THREE.Vector3(0, 1.58, 15.72), mat.entranceGlassPhoto, root, false);
  box('corridor end outside road glow', new THREE.Vector3(0.7, 0.08, 0.03), new THREE.Vector3(0, 1.36, 15.69), mat.streetLamp, root, false);
  box('emergency exit sign', new THREE.Vector3(0.58, 0.18, 0.04), new THREE.Vector3(-0.94, 2.02, 7.45), new THREE.MeshBasicMaterial({ color: 0x245f42 }), root, false);
  addFlatFlyers();
}

function addFlatFlyers() {
  for (const [x, y, z, side] of [
    [-1.47, 1.45, 8.55, 'west'],
    [-1.47, 1.62, 11.7, 'west'],
    [1.47, 1.34, 9.55, 'east'],
    [1.47, 1.58, 13.3, 'east'],
  ]) {
    const sx = side === 'west' ? 0.02 : 0.02;
    const sz = 0.26;
    box('small corridor flyer paper', new THREE.Vector3(sx, 0.34, sz), new THREE.Vector3(x, y, z), mat.paper, root, false);
    box('small corridor flyer tear', new THREE.Vector3(sx + 0.004, 0.06, 0.18), new THREE.Vector3(x, y - 0.08, z + 0.02), mat.stain, root, false);
  }
}

function addCommonSpaceDetails() {
  box('common bulletin board', new THREE.Vector3(1.42, 0.84, 0.05), new THREE.Vector3(-1.34, 1.55, 25.0), mat.doorDark, root, false);
  for (let i = 0; i < 5; i += 1) {
    box(`common notice ${i}`, new THREE.Vector3(0.34, 0.22, 0.04), new THREE.Vector3(-1.78 + (i % 3) * 0.4, 1.72 - Math.floor(i / 3) * 0.28, 24.95), mat.paper, root, false);
  }
  box('common plastic table', new THREE.Vector3(1.24, 0.08, 0.8), new THREE.Vector3(1.25, 0.72, 22.1), mat.plastic);
  box('common table leg a', new THREE.Vector3(0.06, 0.7, 0.06), new THREE.Vector3(0.75, 0.36, 21.78), mat.metal);
  box('common table leg b', new THREE.Vector3(0.06, 0.7, 0.06), new THREE.Vector3(1.75, 0.36, 21.78), mat.metal);
  box('common table leg c', new THREE.Vector3(0.06, 0.7, 0.06), new THREE.Vector3(0.75, 0.36, 22.42), mat.metal);
  box('common table leg d', new THREE.Vector3(0.06, 0.7, 0.06), new THREE.Vector3(1.75, 0.36, 22.42), mat.metal);
  box('common sink block', new THREE.Vector3(0.8, 0.78, 0.54), new THREE.Vector3(1.75, 0.39, 24.3), mat.metal);
  box('common trash bin', new THREE.Vector3(0.42, 0.68, 0.42), new THREE.Vector3(-1.85, 0.34, 22.0), mat.black);
  box('common fluorescent cover', new THREE.Vector3(1.1, 0.045, 0.28), new THREE.Vector3(0, 2.32, 22.5), mat.glow, root, false);
  box('common rice scoop handle', new THREE.Vector3(0.08, 0.06, 0.5), new THREE.Vector3(0.72, 1.04, 24.1), mat.plastic, root, false);
  box('common taped label one', new THREE.Vector3(0.32, 0.12, 0.04), new THREE.Vector3(-0.8, 1.32, 24.1), mat.paper, root, false);
  box('common taped label two', new THREE.Vector3(0.32, 0.12, 0.04), new THREE.Vector3(0.24, 1.32, 24.1), mat.paper, root, false);
}

function addDoorsAndItems() {
  game.bedroomDoor = box('closet door', new THREE.Vector3(0.68, 1.7, 0.08), new THREE.Vector3(-0.18, 0.95, -0.36), mat.doorDark, root, true);
  game.bathroomDoor = box('bathroom door', new THREE.Vector3(0.12, 2.1, 0.78), new THREE.Vector3(0.12, 1.05, -3.7), mat.door, root, true);
  game.exitDoor = box('exit door', new THREE.Vector3(1.1, 2.25, 0.16), new THREE.Vector3(-0.55, 1.12, 1.53), mat.doorDark, root, true);

  addInteractable('옷장 문', game.bedroomDoor, () => toggleBedroomDoor());
  addInteractable('화장실 문', game.bathroomDoor, () => toggleBathroomDoor());
  addInteractable('현관문', game.exitDoor, () => useExit());

  const livingSwitch = planeLike('거실 스위치', new THREE.Vector3(0.18, 0.24, 0.08), new THREE.Vector3(-1.25, 1.35, 1.36), mat.glow);
  addInteractable('거실 조명 스위치', livingSwitch, () => toggleLivingLight());

  const bathSwitch = planeLike('화장실 스위치', new THREE.Vector3(0.08, 0.24, 0.16), new THREE.Vector3(0.08, 1.35, -2.95), mat.glow);
  addInteractable('화장실 조명 스위치', bathSwitch, () => toggleBathroomLight());

  const note = planeLike('침대 옆 메모', new THREE.Vector3(0.36, 0.03, 0.28), new THREE.Vector3(-3.18, 0.54, -4.0), mat.paper);
  addFragment('메모', note, '문을 두드리는 소리를 들었지만, 그날은 피곤했다.');

  const photo = planeLike('옷장 안 사진', new THREE.Vector3(0.3, 0.03, 0.38), new THREE.Vector3(-0.18, 1.25, -0.35), mat.paper);
  addFragment('사진', photo, '사진 뒷면에 작은 글씨가 있다. "열어 줬어야 했어."');

  const recorder = box('녹음기', new THREE.Vector3(0.3, 0.14, 0.2), new THREE.Vector3(-0.95, 0.98, -4.3), mat.black, root, false);
  addFragment('녹음기', recorder, '잡음 사이로 네 이름과 현관 비밀번호가 반복된다.');
}

function addInteractable(label, mesh, onUse) {
  mesh.userData.interactable = { label, onUse };
  game.interactables.push(mesh);
}

function addFragment(label, mesh, message) {
  mesh.userData.fragment = true;
  addInteractable(label, mesh, () => {
    if (mesh.visible === false) return;
    mesh.visible = false;
    game.fragments += 1;
    say(message);
    if (game.fragments === 1) {
      setObjective('방을 다시 확인하자.');
      setTimeout(triggerChairEvent, 900);
    }
    if (game.fragments === 2) setObjective('주방 쪽에서 소리가 난다.');
    if (game.fragments >= 3) {
      game.exitUnlocked = true;
      setRoomState(3);
      setObjective('현관문이 열릴 것 같다.');
      say('현관 쪽에서 잠금이 풀리는 소리가 났다.');
    } else {
      setRoomState(Math.min(ROOM_STATE_MAX, game.state + 1));
    }
  });
}

function openDoor(mesh, open) {
  mesh.visible = !open;
  mesh.userData.open = open;
  if (mesh === game.bedroomDoor && game.bedroomDoorModel) game.bedroomDoorModel.visible = !open;
  rebuildColliders();
}

function toggleBedroomDoor() {
  game.bedroomDoorOpen = !game.bedroomDoorOpen;
  openDoor(game.bedroomDoor, game.bedroomDoorOpen);
  playSound('doorClose', 0.42);
  observe('bedroom-door');
}

function toggleBathroomDoor() {
  game.bathroomDoorOpen = !game.bathroomDoorOpen;
  openDoor(game.bathroomDoor, game.bathroomDoorOpen);
  playSound('doorClose', 0.38);
  observe('bathroom-door');
}

function toggleLivingLight() {
  game.lightsOn = !game.lightsOn;
  playSound('lightSwitch', 0.65);
  applyLightState();
  if (game.state >= 1 && !game.eventFlags.has('wrong-light')) {
    game.eventFlags.add('wrong-light');
    game.bathroomLight = false;
    bathroomLight.intensity = 0;
    setTimeout(() => say('스위치를 눌렀는데 화장실 안에서 딸깍 소리가 났다.'), 200);
  }
  observe('living-light');
}

function toggleBathroomLight() {
  game.bathroomLight = !game.bathroomLight;
  playSound('lightSwitch', 0.6);
  applyLightState();
  if (game.state >= 2 && !game.eventFlags.has('mirror-text')) {
    game.eventFlags.add('mirror-text');
    mat.mirror.color.set(0x251516);
    say('거울 표면에 물기가 서리며 글자가 번진다.');
  }
  observe('bath-light');
}

function useExit() {
  if (!game.exitUnlocked) {
    say('문고리가 차갑다. 아무리 돌려도 열리지 않는다.');
    observe('exit-locked');
    if (game.observation >= 3 && game.state === 0) setRoomState(1);
    return;
  }
  enterCorridor();
}

function enterCorridor() {
  game.area = 'corridor';
  camera.position.set(-0.45, 1.62, 6.68);
  camera.rotation.set(0, -2.0, 0);
  game.yawTarget = -2.0;
  game.pitchTarget = 0;
  corridorLight.intensity = 1.35;
  elevatorLight.intensity = 1.45;
  exitColdLight.intensity = 0.45;
  playSound('doorClose', 0.6);
  playSound('elevatorDing', 0.45);
  startLoop('corridor', 0.22);
  setObjective('방 옆 엘리베이터를 확인하자.');
  say('문을 열자마자 엘리베이터 도착음이 바로 옆에서 울렸다.');
  setTimeout(triggerSlippersEvent, 1200);
}

function useElevator() {
  if (game.area !== 'corridor') return;
  playSound('elevatorButton', 0.75);
  playSound('elevatorDoor', 0.58);
  game.area = 'common';
  camera.position.set(0, 1.62, 21.15);
  camera.rotation.set(0, Math.PI, 0);
  game.yawTarget = Math.PI;
  game.pitchTarget = 0;
  corridorLight.intensity = 0.0;
  elevatorLight.intensity = 0.0;
  commonLight.intensity = 1.35;
  setObjective('1층 공용공간의 밥솥을 확인하자.');
  say('문이 닫히는 소리는 없었다. 그래도 1층 냄새가 났다.');
}

function useRiceCooker() {
  if (game.area !== 'common') return;
  if (game.eventFlags.has('rice-ending')) return;
  game.eventFlags.add('rice-ending');
  game.riceEndingPulse = 1;
  game.lightMultiplier = 0.08;
  endingRedLight.intensity = 1.4;
  commonLight.intensity = 0.12;
  playSound('elevatorDoor', 0.4);
  playSound('doorClose', 0.55);
  say('밥솥 안은 비어 있다. 안쪽 스테인리스에 네 방 문이 비친다.');
  setTimeout(() => {
    setObjective('뒤돌아보지 마라.');
    say('보온등이 꺼졌다. 그런데 방 안 형광등 소리가 난다.');
  }, 850);
  setTimeout(endGame, 3300);
}

function observe(key) {
  game.observation += 1;
  if (game.observation >= 4 && game.state < 2) setRoomState(game.state + 1);
  if (key === 'bedroom-door' && game.state >= 1 && !game.eventFlags.has('chair-moved')) {
    setTimeout(triggerChairEvent, 650);
  }
}

function triggerChairEvent() {
  if (game.eventFlags.has('chair-moved')) return;
  game.eventFlags.add('chair-moved');
  game.chair.position.set(-1.05, 0.38, -2.55);
  game.chair.rotation.y = -0.55;
  if (game.chairVisual) {
    game.chairVisual.position.set(-1.05, 0, -2.55);
    game.chairVisual.rotation.y = -0.55;
  }
  triggerFluorescentFlicker();
  playSound('doorClose', 0.3);
  say('뒤쪽에서 의자가 장판을 긁는 소리가 났다.');
}

function triggerSlippersEvent() {
  if (game.eventFlags.has('slippers-moved') || game.area !== 'corridor') return;
  game.eventFlags.add('slippers-moved');
  if (game.slippersModel) {
    game.slippersModel.position.set(0.5, 0.08, 7.18);
    game.slippersModel.rotation.y = 1.15;
  }
  playSound('footstep', 0.18);
  setTimeout(() => playSound('footstep', 0.14), 180);
  say('204호 앞 슬리퍼가 엘리베이터 쪽을 향해 놓여 있다.');
}

function setRoomState(next) {
  const old = game.state;
  game.state = Math.max(0, Math.min(ROOM_STATE_MAX, next));
  if (game.state === old) return;
  ambient.intensity = 0.52 - game.state * 0.06;
  scene.fog.near = Math.max(3.0, 5.5 - game.state * 0.7);
  scene.fog.far = 30 - game.state * 4.0;
  if (game.state >= 1) {
    game.tv.material = new THREE.MeshBasicMaterial({ color: 0x111621 });
  }
  if (game.state >= 2) {
    game.bedroomDoorOpen = false;
    openDoor(game.bedroomDoor, false);
    hallLight.color.set(0xffc18a);
    bedroomLight.color.set(0xc99f7f);
    setObjective('기억 파편을 찾아라.');
  }
  if (game.state >= 3) {
    exitColdLight.intensity = 1.15;
    game.exitDoor.material = mat.door;
  }
  applyLightState();
}

function rebuildColliders() {
  game.colliders = [];
  root.traverse((mesh) => {
    if (mesh.userData?.collider && !mesh.userData.open) game.colliders.push(mesh);
  });
}

function applyLightState(flicker = 0) {
  const late = game.state >= 3;
  const hallBase = late ? 0.48 : game.lightsOn ? 1.75 : 0.25;
  const bedroomBase = late ? 0.3 : game.lightsOn ? 1.2 : 0.18;
  const multiplier = game.lightMultiplier;
  hallLight.intensity = Math.max(0.02, (hallBase + flicker) * multiplier);
  bedroomLight.intensity = Math.max(0.02, bedroomBase * multiplier);
  bathroomLight.intensity = !late && game.bathroomLight ? 1.25 * multiplier : 0;
  corridorLight.intensity = game.area === 'corridor' ? 1.35 * multiplier : corridorLight.intensity;
  elevatorLight.intensity = game.area === 'corridor' ? 1.45 * multiplier : elevatorLight.intensity;
  commonLight.intensity = game.area === 'common' ? 1.35 * multiplier : commonLight.intensity;
}

function say(text) {
  subtitlesEl.textContent = text;
  subtitlesEl.classList.add('show');
  clearTimeout(say.timer);
  say.timer = setTimeout(() => subtitlesEl.classList.remove('show'), 4200);
}

function setObjective(text) {
  objectiveEl.textContent = text;
}

function endGame() {
  game.ended = true;
  stopLoop('fluorescent');
  stopLoop('corridor');
  document.exitPointerLock?.();
  endingEl.classList.remove('hidden');
}

function resetGame() {
  window.location.reload();
}

function startGame() {
  game.started = true;
  startEl.classList.add('hidden');
  enableAudio();
  startLoop('fluorescent', 0.2);
  startLoop('corridor', 0.08);
  showStoryPreview();
  requestPointerLockSafe();
  setObjective('집 안을 확인하자.');
  applyDebugStartHash();
}

function setCameraView(position, yaw, pitch = 0) {
  camera.position.copy(position);
  camera.rotation.set(pitch, yaw, 0);
  game.yawTarget = yaw;
  game.pitchTarget = pitch;
}

function applyDebugStartHash() {
  if (location.hash === '#showcase') {
    startShowcase();
    return;
  }
  if (location.hash === '#bathroom') {
    storyPreviewEl.classList.add('hidden');
    game.introActive = false;
    game.bathroomDoorOpen = true;
    openDoor(game.bathroomDoor, true);
    game.bathroomLight = true;
    bathroomLight.intensity = 1.25;
    camera.position.set(1.12, 1.54, -2.76);
    camera.rotation.set(0, -0.28, 0);
    game.yawTarget = -0.28;
    game.pitchTarget = 0;
    setObjective('화장실을 확인하자.');
  }
  if (location.hash === '#corridor') {
    storyPreviewEl.classList.add('hidden');
    game.introActive = false;
    game.exitUnlocked = true;
    setRoomState(3);
    enterCorridor();
  }
  if (location.hash === '#common') {
    storyPreviewEl.classList.add('hidden');
    game.introActive = false;
    game.exitUnlocked = true;
    setRoomState(3);
    enterCorridor();
    useElevator();
  }
}

function queueShowcase(ms, action) {
  const timer = setTimeout(action, ms);
  game.showcase.timers.push(timer);
}

function startShowcase() {
  game.showcase.active = true;
  game.keys.clear();
  showStoryPreview();
  setObjective('데모 캡처: 고시텔 방을 확인하자.');
  queueShowcase(700, () => setCameraView(new THREE.Vector3(-2.78, 1.62, 0.18), 0));
  queueShowcase(2900, () => setCameraView(new THREE.Vector3(-2.35, 1.6, -1.4), -0.18));
  queueShowcase(5200, () => {
    say('세로로 긴 창문 아래로 2층 도로의 빛이 번진다.');
    setCameraView(new THREE.Vector3(-2.2, 1.56, -2.75), -0.08);
  });
  queueShowcase(8100, () => {
    setCameraView(new THREE.Vector3(-0.58, 1.56, -3.9), -1.55);
    setObjective('화장실 문을 열어 안쪽을 확인하자.');
    game.bathroomDoorOpen = true;
    openDoor(game.bathroomDoor, true);
    game.bathroomLight = true;
    applyLightState();
    say('문 뒤에는 젖은 타일 냄새가 남아 있다.');
  });
  queueShowcase(11200, () => setCameraView(new THREE.Vector3(1.08, 1.54, -2.85), -0.25));
  queueShowcase(14500, () => {
    setCameraView(new THREE.Vector3(-2.8, 1.58, -3.35), -0.2);
    say('책상 위 컵과 어두운 모니터가 그대로 놓여 있다.');
  });
  queueShowcase(17200, () => {
    setRoomState(1);
    triggerChairEvent();
    setCameraView(new THREE.Vector3(-2.45, 1.58, -2.35), -0.62);
    setObjective('방 안의 배치가 조금 어긋났다.');
  });
  queueShowcase(21500, () => {
    setRoomState(3);
    game.exitUnlocked = true;
    setObjective('현관문이 열릴 것 같다.');
    say('현관 쪽에서 잠금이 풀리는 소리가 났다.');
    setCameraView(new THREE.Vector3(-1.05, 1.62, 0.42), 2.98);
  });
  queueShowcase(25500, () => {
    enterCorridor();
    setCameraView(new THREE.Vector3(-0.38, 1.62, 6.72), -1.58);
  });
  queueShowcase(29200, () => {
    triggerSlippersEvent();
    setCameraView(new THREE.Vector3(-0.72, 1.56, 7.35), -1.22);
  });
  queueShowcase(33500, () => {
    setCameraView(new THREE.Vector3(-0.45, 1.58, 8.7), 0.05);
    setObjective('복도 끝과 204호 앞 생활감을 확인하자.');
  });
  queueShowcase(38000, () => {
    setCameraView(new THREE.Vector3(0.65, 1.58, 7.75), -1.58);
    say('엘리베이터 버튼 불빛만 바로 옆에서 켜져 있다.');
  });
  queueShowcase(42000, () => {
    useElevator();
    setCameraView(new THREE.Vector3(0.2, 1.62, 21.35), 3.08);
  });
  queueShowcase(46200, () => setCameraView(new THREE.Vector3(-0.35, 1.58, 23.25), 3.04));
  queueShowcase(50500, () => {
    setCameraView(new THREE.Vector3(-0.72, 1.52, 23.88), 3.08);
    setObjective('1층 밥솥의 보온등을 확인하자.');
  });
  queueShowcase(54800, () => useRiceCooker());
}

function showStoryPreview() {
  game.introActive = true;
  storyPreviewEl.classList.remove('hidden');
  clearTimeout(showStoryPreview.timer);
  showStoryPreview.timer = setTimeout(() => {
    storyPreviewEl.classList.add('hidden');
    game.introActive = false;
  }, 7200);
}

function enableAudio() {
  if (audio.enabled) return;
  audio.enabled = true;
  for (const [name, src] of Object.entries(assets.audio)) {
    const clip = new Audio(src);
    clip.preload = 'auto';
    clip.volume = 0.5;
    audio.clips[name] = clip;
  }
  audio.clips.fluorescent.loop = true;
  audio.clips.corridor.loop = true;
}

function playSound(name, volume = 0.5) {
  if (!audio.enabled || !audio.clips[name]) return;
  const clip = audio.clips[name].cloneNode();
  clip.volume = volume;
  clip.play().catch(() => {});
}

function startLoop(name, volume = 0.25) {
  if (!audio.enabled || !audio.clips[name]) return;
  const clip = audio.clips[name];
  clip.volume = volume;
  clip.play().catch(() => {});
}

function stopLoop(name) {
  const clip = audio.clips[name];
  if (!clip) return;
  clip.pause();
  clip.currentTime = 0;
}

function updateAudioMix() {
  if (!audio.enabled || !audio.clips.fluorescent) return;
  const fixtures = [
    new THREE.Vector3(0.1, 2.4, 1.8),
    new THREE.Vector3(-3.25, 2.4, -3.5),
    new THREE.Vector3(0, 2.2, 10.5),
  ];
  let nearest = Infinity;
  for (const fixture of fixtures) nearest = Math.min(nearest, camera.position.distanceTo(fixture));
  const proximity = Math.max(0, 1 - nearest / 7);
  audio.clips.fluorescent.volume = 0.12 + proximity * 0.24;
  if (audio.clips.corridor) {
    audio.clips.corridor.volume = game.area === 'room' ? 0.08 : 0.3;
  }
}

function triggerFluorescentFlicker() {
  game.flicker.active = true;
  game.flicker.step = 0;
  game.flicker.stepTime = 0;
  game.flicker.pattern = [
    { duration: 0.05, multiplier: 0.1 },
    { duration: 0.05, multiplier: 1.05 },
    { duration: 0.05, multiplier: 0.05 },
    { duration: 0.06, multiplier: 0.95 },
    { duration: 0.2, multiplier: 0.03 },
    { duration: 0.08, multiplier: 1.0 },
  ];
  playSound('lightSwitch', 0.22);
}

function updateFlicker(delta) {
  if (!game.started || game.ended) return;
  game.flicker.nextAt -= delta;
  if (!game.flicker.active && game.flicker.nextAt <= 0) {
    triggerFluorescentFlicker();
  }
  if (!game.flicker.active) return;

  const step = game.flicker.pattern[game.flicker.step];
  game.lightMultiplier = step.multiplier;
  game.flicker.stepTime += delta;
  if (game.flicker.stepTime >= step.duration) {
    game.flicker.step += 1;
    game.flicker.stepTime = 0;
    if (game.flicker.step >= game.flicker.pattern.length) {
      game.flicker.active = false;
      game.lightMultiplier = 1;
      game.flicker.nextAt = 10 + Math.random() * 16;
    }
  }
}

function updateDistantElevator(delta) {
  if (!game.started || game.ended) return;
  game.distantElevatorAt -= delta;
  if (game.distantElevatorAt > 0) return;
  playSound(Math.random() > 0.45 ? 'elevatorDing' : 'elevatorDoor', 0.14);
  game.distantElevatorAt = 40 + Math.random() * 20;
}

function requestPointerLockSafe() {
  try {
    const result = canvas.requestPointerLock?.();
    if (result?.catch) result.catch(() => {});
  } catch {
    // Pointer lock can be blocked in automated or embedded browsers.
  }
}

function updatePrompt() {
  raycaster.setFromCamera(mouseCenter, camera);
  const hits = raycaster.intersectObjects(game.interactables.filter((mesh) => mesh.visible !== false), false);
  const hit = hits.find((item) => item.distance < 2.15);
  game.currentHit = hit?.object ?? null;
  promptEl.textContent = game.currentHit ? `E  ${game.currentHit.userData.interactable.label}` : '';
}

function interact() {
  if (!game.currentHit) return;
  game.currentHit.userData.interactable.onUse();
}

function canMoveTo(position) {
  const radius = 0.23;
  const playerBox = new THREE.Box3(
    new THREE.Vector3(position.x - radius, 0.45, position.z - radius),
    new THREE.Vector3(position.x + radius, 1.78, position.z + radius),
  );
  for (const mesh of game.colliders) {
    if (mesh.visible === false) continue;
    tmpBox.setFromObject(mesh);
    if (playerBox.intersectsBox(tmpBox)) return false;
  }
  return true;
}

function updateMovement(delta) {
  const speed = game.keys.has('ShiftLeft') || game.keys.has('ShiftRight') ? 1.15 : 2.15;
  const forward = Number(game.keys.has('KeyW')) - Number(game.keys.has('KeyS'));
  const right = Number(game.keys.has('KeyD')) - Number(game.keys.has('KeyA'));
  const yaw = camera.rotation.y;
  const move = tmpVec.set(0, 0, 0);
  move.x = -Math.sin(yaw) * forward + Math.cos(yaw) * right;
  move.z = -Math.cos(yaw) * forward - Math.sin(yaw) * right;
  if (move.lengthSq() > 0) move.normalize().multiplyScalar(speed * delta);
  const nextX = camera.position.clone();
  nextX.x += move.x;
  if (canMoveTo(nextX)) camera.position.x = nextX.x;
  const nextZ = camera.position.clone();
  nextZ.z += move.z;
  if (canMoveTo(nextZ)) camera.position.z = nextZ.z;

  if (move.lengthSq() > 0 && !game.ended) {
    game.footstepClock += delta * speed;
    camera.position.y = 1.62 + Math.sin(game.footstepClock * 7.2) * 0.03;
    game.bobX = Math.sin(game.footstepClock * 3.6) * 0.015;
    if (game.footstepClock >= game.nextFootstepAt) {
      game.nextFootstepAt = game.footstepClock + (speed > 1.5 ? 0.42 : 0.62);
      playSound('footstep', speed > 1.5 ? 0.26 : 0.16);
    }
  } else {
    camera.position.y += (1.62 - camera.position.y) * Math.min(1, delta * 8);
    game.bobX += (0 - game.bobX) * Math.min(1, delta * 8);
  }
}

function animate() {
  const delta = Math.min(clock.getDelta(), 0.05);
  if (game.started && !game.ended) {
    updateFlicker(delta);
    updateDistantElevator(delta);
    updateAudioMix();
    camera.rotation.y += (game.yawTarget - camera.rotation.y) * Math.min(1, delta * 11);
    camera.rotation.x += (game.pitchTarget - camera.rotation.x) * Math.min(1, delta * 11);
    camera.rotation.z = game.bobX * 0.55;
    updateMovement(delta);
    applyLightState();
    updatePrompt();
    updateRiceEnding(delta);
  }
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function updateRiceEnding(delta) {
  if (game.riceEndingPulse <= 0) return;
  game.riceEndingPulse = Math.max(0, game.riceEndingPulse - delta * 0.32);
  const pulse = 0.65 + Math.sin(performance.now() * 0.025) * 0.35;
  endingRedLight.intensity = 0.5 + game.riceEndingPulse * pulse * 1.6;
  commonLight.intensity = 0.08 + Math.sin(performance.now() * 0.018) * 0.04;
}

function bindEvents() {
  startEl.querySelector('button').addEventListener('click', startGame);
  endingEl.querySelector('button').addEventListener('click', resetGame);
  window.addEventListener('keydown', (event) => {
    if (event.code === 'KeyE') interact();
    game.keys.add(event.code);
  });
  window.addEventListener('keyup', (event) => game.keys.delete(event.code));
  window.addEventListener('mousemove', (event) => {
    if (document.pointerLockElement !== canvas || game.ended) return;
    game.yawTarget -= event.movementX * 0.00165;
    game.pitchTarget -= event.movementY * 0.00165;
    game.pitchTarget = Math.max(-1.25, Math.min(1.25, game.pitchTarget));
  });
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  canvas.addEventListener('click', () => {
    if (game.started && !game.ended) requestPointerLockSafe();
  });
}

addRoomShell();
addFurniture();
addGoshiwonExterior();
addDoorsAndItems();
addLoadedModels();
openDoor(game.bedroomDoor, false);
openDoor(game.bathroomDoor, false);
bindEvents();
animate();
