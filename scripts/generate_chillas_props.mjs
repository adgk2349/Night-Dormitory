import * as THREE from 'three';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import fs from 'fs';
import path from 'path';

const objExporter = new OBJExporter();
const PROPS_DIR = path.resolve(process.cwd(), 'assets/models/props');
const MODULAR_DIR = path.resolve(process.cwd(), 'assets/models/modular');

[PROPS_DIR, MODULAR_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

function exportOBJ(obj, baseName, targetDir) {
  const result = objExporter.parse(obj);
  const filePath = path.join(targetDir, `${baseName}.obj`);
  fs.writeFileSync(filePath, result);
  console.log(`✓ Exported 3D Model: ${baseName}.obj`);
}

// 1. Trash Bag (쓰레기봉투 - 불투명 흰색 비닐, 상단 묶음 매듭)
function createTrashBag() {
  const group = new THREE.Group();
  group.name = 'TrashBag';

  const bagMat = new THREE.MeshStandardMaterial({ color: 0xdedede, roughness: 0.7 });

  // Main Bag body (Lumpy sphere/ellipsoid)
  const bodyGeo = new THREE.SphereGeometry(0.24, 12, 10);
  bodyGeo.scale(1.0, 1.1, 0.9);
  const body = new THREE.Mesh(bodyGeo, bagMat);
  body.position.y = 0.22;
  group.add(body);

  // Secondary bulge
  const bulgeGeo = new THREE.SphereGeometry(0.16, 8, 8);
  bulgeGeo.scale(1.1, 0.8, 1.0);
  const bulge = new THREE.Mesh(bulgeGeo, bagMat);
  bulge.position.set(0.08, 0.26, 0.08);
  group.add(bulge);

  // Tied Neck
  const neckGeo = new THREE.CylinderGeometry(0.04, 0.07, 0.08, 8);
  const neck = new THREE.Mesh(neckGeo, bagMat);
  neck.position.set(0, 0.44, 0);
  group.add(neck);

  // Knot / Tied ears
  const knotGeo = new THREE.ConeGeometry(0.09, 0.12, 6);
  const knot1 = new THREE.Mesh(knotGeo, bagMat);
  knot1.position.set(-0.04, 0.52, 0.02);
  knot1.rotation.z = 0.4;
  group.add(knot1);

  const knot2 = new THREE.Mesh(knotGeo, bagMat);
  knot2.position.set(0.04, 0.51, -0.02);
  knot2.rotation.z = -0.35;
  group.add(knot2);

  return group;
}

// 2. Power Strip (멀티탭 - 콘센트 구멍, 빨간 스위치, 꼬인 케이블)
function createPowerStrip() {
  const group = new THREE.Group();
  group.name = 'PowerStrip';

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.6 });
  const socketMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });
  const switchMat = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.3, emissive: 0x440000 });
  const cableMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 });

  // Body bar
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.035, 0.32), bodyMat);
  body.position.set(0, 0.0175, 0);
  group.add(body);

  // Red Power switch
  const powerSwitch = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.015, 0.03), switchMat);
  powerSwitch.position.set(0, 0.04, -0.12);
  group.add(powerSwitch);

  // 4 Socket Holes
  for (let z of [-0.06, -0.01, 0.04, 0.09]) {
    const socket = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.005, 10), socketMat);
    socket.position.set(0, 0.036, z);
    group.add(socket);

    // Pin holes
    for (let x of [-0.008, 0.008]) {
      const hole = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.008, 0.004), new THREE.MeshBasicMaterial({ color: 0x000000 }));
      hole.position.set(x, 0.039, z);
      group.add(hole);
    }
  }

  // Cable wire
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0.018, -0.16),
    new THREE.Vector3(-0.06, 0.01, -0.25),
    new THREE.Vector3(-0.14, 0.01, -0.28),
    new THREE.Vector3(-0.25, 0.01, -0.22),
    new THREE.Vector3(-0.35, 0.01, -0.3)
  ]);
  const cableGeo = new THREE.TubeGeometry(curve, 16, 0.007, 6, false);
  const cable = new THREE.Mesh(cableGeo, cableMat);
  group.add(cable);

  return group;
}

// 3. Slippers / Shoes (슬리퍼 1쌍 - 문 앞 배치용)
function createSlippersPair() {
  const group = new THREE.Group();
  group.name = 'SlippersPair';

  const soleMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
  const topMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.7 });

  function createSingleSlipper(isRight) {
    const slip = new THREE.Group();
    // Sole
    const sole = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.02, 0.26), soleMat);
    sole.position.set(0, 0.01, 0);
    slip.add(sole);

    // Arch cover (Top strap)
    const coverGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.12, 8, 1, false, 0, Math.PI);
    coverGeo.rotateZ(Math.PI / 2);
    const cover = new THREE.Mesh(coverGeo, topMat);
    cover.position.set(0, 0.02, -0.03);
    cover.scale.set(0.9, 0.7, 1.0);
    slip.add(cover);

    return slip;
  }

  const left = createSingleSlipper(false);
  left.position.set(-0.08, 0, 0);
  left.rotation.y = 0.05;
  group.add(left);

  const right = createSingleSlipper(true);
  right.position.set(0.08, 0, 0);
  right.rotation.y = -0.08;
  group.add(right);

  return group;
}

// 4. Instant Cup Ramen (컵라면 & 나무젓가락)
function createCupRamen() {
  const group = new THREE.Group();
  group.name = 'CupRamen';

  const cupMat = new THREE.MeshStandardMaterial({ color: 0xcc3322, roughness: 0.5 });
  const lidMat = new THREE.MeshStandardMaterial({ color: 0xf1c40f, roughness: 0.4 });
  const chopMat = new THREE.MeshStandardMaterial({ color: 0xc8a165, roughness: 0.7 });

  // Cup body (Tapered cone/cylinder)
  const cupGeo = new THREE.CylinderGeometry(0.065, 0.045, 0.11, 12);
  const cup = new THREE.Mesh(cupGeo, cupMat);
  cup.position.y = 0.055;
  group.add(cup);

  // Half-peeled Lid
  const lidGeo = new THREE.CircleGeometry(0.065, 12);
  lidGeo.rotateX(-Math.PI / 2);
  const lid = new THREE.Mesh(lidGeo, lidMat);
  lid.position.set(0, 0.111, 0);
  lid.rotation.x = 0.2; // Slightly peeled
  group.add(lid);

  // Chopsticks resting on top
  for (let z of [-0.01, 0.01]) {
    const stick = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.005, 0.18), chopMat);
    stick.position.set(0, 0.125, z);
    stick.rotation.y = 0.35;
    stick.rotation.z = -0.05;
    group.add(stick);
  }

  return group;
}

// 5. Hanging Towel (걸린 수건 - 주름진 형태)
function createHangingTowel() {
  const group = new THREE.Group();
  group.name = 'HangingTowel';

  const towelMat = new THREE.MeshStandardMaterial({ color: 0x85929e, roughness: 0.95 });

  // Front drop
  const front = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.45, 0.012), towelMat);
  front.position.set(0, -0.225, 0.02);
  front.rotation.x = 0.04;
  group.add(front);

  // Back drop
  const back = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.35, 0.012), towelMat);
  back.position.set(0, -0.175, -0.02);
  group.add(back);

  // Folded top loop
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.26, 8), towelMat);
  top.rotateZ(Math.PI / 2);
  top.position.set(0, 0, 0);
  group.add(top);

  return group;
}

// 6. Cardboard Delivery Boxes (종이박스 세트 - 테이핑 디테일)
function createCardboardBoxes() {
  const group = new THREE.Group();
  group.name = 'CardboardBoxes';

  const boxMat = new THREE.MeshStandardMaterial({ color: 0xa97c50, roughness: 0.85 });
  const tapeMat = new THREE.MeshStandardMaterial({ color: 0xcfb285, roughness: 0.4 });

  // Large Box (Bottom)
  const bigBox = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.32, 0.38), boxMat);
  bigBox.position.set(0, 0.16, 0);
  group.add(bigBox);

  // Tape on big box
  const tape1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.005, 0.385), tapeMat);
  tape1.position.set(0, 0.321, 0);
  group.add(tape1);

  // Medium Box (Stacked angled on top)
  const medBox = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.24, 0.3), boxMat);
  medBox.position.set(0.04, 0.44, 0.02);
  medBox.rotation.y = 0.18;
  group.add(medBox);

  const tape2 = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.005, 0.305), tapeMat);
  tape2.position.set(0.04, 0.561, 0.02);
  tape2.rotation.y = 0.18;
  group.add(tape2);

  // Shipping label
  const labelMat = new THREE.MeshStandardMaterial({ color: 0xefefef, roughness: 0.6 });
  const label = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.002), labelMat);
  label.position.set(0.12, 0.2, 0.192);
  group.add(label);

  return group;
}

// 7. Wall Flyers / Delivery Notices (벽면 전단지 / 공지문 세트)
function createWallFlyers() {
  const group = new THREE.Group();
  group.name = 'WallFlyers';

  const paperMat1 = new THREE.MeshStandardMaterial({ color: 0xf4eedb, roughness: 0.8 }); // Old yellowish notice
  const paperMat2 = new THREE.MeshStandardMaterial({ color: 0xd63031, roughness: 0.6 }); // Red delivery flyer
  const paperMat3 = new THREE.MeshStandardMaterial({ color: 0x0984e3, roughness: 0.6 }); // Blue cleaner notice
  const tapeMat = new THREE.MeshStandardMaterial({ color: 0xe0d6b5, roughness: 0.4, transparent: true, opacity: 0.8 });

  // Notice 1 (A4 size vertical)
  const notice1 = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.297, 0.002), paperMat1);
  notice1.position.set(0, 0, 0);
  notice1.rotation.z = -0.03;
  group.add(notice1);

  // Tape for notice 1
  const t1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.015, 0.005), tapeMat);
  t1.position.set(0, 0.145, 0.003);
  group.add(t1);

  // Small Flyer 2 (Chinese food / Delivery)
  const flyer = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.19, 0.002), paperMat2);
  flyer.position.set(0.22, -0.08, 0.004);
  flyer.rotation.z = 0.08;
  group.add(flyer);

  // Small Flyer 3
  const flyer3 = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.002), paperMat3);
  flyer3.position.set(-0.2, -0.1, 0.003);
  flyer3.rotation.z = -0.12;
  group.add(flyer3);

  return group;
}

// 8. UV-Mapped Modular Corridor Unit (복도 벽 + 바닥 + 걸레받이 + 천장 일체형 모듈)
function createModularCorridorSection() {
  const group = new THREE.Group();
  group.name = 'CorridorModularSection';

  const wallMat = new THREE.MeshStandardMaterial({ color: 0xb5aa96, roughness: 0.9 });
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x5a4231, roughness: 0.6 });
  const ceilingMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.95 });
  const baseboardMat = new THREE.MeshStandardMaterial({ color: 0x2e1d11, roughness: 0.8 });

  const length = 2.4; // 2.4m length per section
  const width = 1.6;  // 1.6m corridor width
  const height = 2.6; // 2.6m ceiling height

  // Floor (UV mapped)
  const floor = new THREE.Mesh(new THREE.BoxGeometry(width, 0.05, length), floorMat);
  floor.position.set(0, -0.025, 0);
  group.add(floor);

  // Ceiling
  const ceiling = new THREE.Mesh(new THREE.BoxGeometry(width, 0.05, length), ceilingMat);
  ceiling.position.set(0, height + 0.025, 0);
  group.add(ceiling);

  // Left Wall
  const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.08, height, length), wallMat);
  leftWall.position.set(-width / 2 - 0.04, height / 2, 0);
  group.add(leftWall);

  // Right Wall
  const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.08, height, length), wallMat);
  rightWall.position.set(width / 2 + 0.04, height / 2, 0);
  group.add(rightWall);

  // Baseboards (걸레받이 - 하단 어두운 우드 몰딩)
  const bbLeft = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, length), baseboardMat);
  bbLeft.position.set(-width / 2 + 0.01, 0.05, 0);
  group.add(bbLeft);

  const bbRight = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, length), baseboardMat);
  bbRight.position.set(width / 2 - 0.01, 0.05, 0);
  group.add(bbRight);

  return group;
}

async function run() {
  console.log('🎮 Generating Chilla\'s Art style dense life props & modular corridor...');

  exportOBJ(createTrashBag(), 'chillas_trash_bag', PROPS_DIR);
  exportOBJ(createPowerStrip(), 'chillas_power_strip', PROPS_DIR);
  exportOBJ(createSlippersPair(), 'chillas_slippers_pair', PROPS_DIR);
  exportOBJ(createCupRamen(), 'chillas_cup_ramen', PROPS_DIR);
  exportOBJ(createHangingTowel(), 'chillas_hanging_towel', PROPS_DIR);
  exportOBJ(createCardboardBoxes(), 'chillas_cardboard_boxes', PROPS_DIR);
  exportOBJ(createWallFlyers(), 'chillas_wall_flyers', PROPS_DIR);
  exportOBJ(createModularCorridorSection(), 'chillas_corridor_section', MODULAR_DIR);

  console.log('\n✨ All Chilla\'s Art props & modular corridor exported successfully!');
}

run().catch(console.error);
