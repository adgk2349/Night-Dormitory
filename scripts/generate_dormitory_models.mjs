import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import fs from 'fs';
import path from 'path';
import { Blob } from 'buffer';

class MockFileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then(buf => {
      this.result = buf;
      if (this.onload) this.onload({ target: this });
    });
  }
  readAsDataURL(blob) {
    blob.arrayBuffer().then(buf => {
      const base64 = Buffer.from(buf).toString('base64');
      this.result = `data:${blob.type || 'application/octet-stream'};base64,${base64}`;
      if (this.onload) this.onload({ target: this });
    });
  }
}

global.FileReader = MockFileReader;
global.Blob = Blob;

const gltfExporter = new GLTFExporter();
const objExporter = new OBJExporter();

const PROPS_DIR = path.resolve(process.cwd(), 'assets/models/props');
const MODULAR_DIR = path.resolve(process.cwd(), 'assets/models/modular');
const FURNITURE_DIR = path.resolve(process.cwd(), 'assets/models/furniture');

[PROPS_DIR, MODULAR_DIR, FURNITURE_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

function exportModel(obj, baseName, targetDir) {
  return new Promise((resolve) => {
    // 1. Export OBJ
    const objResult = objExporter.parse(obj);
    fs.writeFileSync(path.join(targetDir, `${baseName}.obj`), objResult);

    // 2. Export GLTF
    gltfExporter.parse(
      obj,
      gltf => {
        if (gltf instanceof ArrayBuffer) {
          fs.writeFileSync(path.join(targetDir, `${baseName}.glb`), Buffer.from(gltf));
          console.log(`✓ Exported: ${baseName}.glb & ${baseName}.obj`);
        } else {
          const json = typeof gltf === 'string' ? gltf : JSON.stringify(gltf, null, 2);
          fs.writeFileSync(path.join(targetDir, `${baseName}.gltf`), json);
          console.log(`✓ Exported: ${baseName}.gltf & ${baseName}.obj`);
        }
        resolve();
      },
      err => {
        console.error(`Export err on ${baseName}:`, err);
        resolve();
      },
      { binary: true }
    );
  });
}

// 1. Low-poly Rice Cooker
function createRiceCooker() {
  const group = new THREE.Group();
  group.name = 'RiceCooker';

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xe8e6e1, roughness: 0.4 });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.18, 0.28, 12), bodyMat);
  body.position.y = 0.14;
  group.add(body);

  const lidMat = new THREE.MeshStandardMaterial({ color: 0xd04832, roughness: 0.3 });
  const lid = new THREE.Mesh(new THREE.SphereGeometry(0.205, 12, 6, 0, Math.PI * 2, 0, Math.PI * 0.35), lidMat);
  lid.position.y = 0.28;
  group.add(lid);

  const handleMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.6 });
  const handle = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.16), handleMat);
  handle.position.set(0, 0.36, 0);
  group.add(handle);

  const panelMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5 });
  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.02), panelMat);
  panel.position.set(0, 0.14, 0.19);
  group.add(panel);

  const btnMat = new THREE.MeshStandardMaterial({ color: 0xe74c3c, roughness: 0.2 });
  const btnGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.01, 8);
  btnGeo.rotateX(Math.PI / 2);
  const btn = new THREE.Mesh(btnGeo, btnMat);
  btn.position.set(0, 0.13, 0.202);
  group.add(btn);

  return group;
}

// 2. Low-poly Elevator Door & Button Panel
function createElevatorDoorAndPanel() {
  const group = new THREE.Group();
  group.name = 'ElevatorDoorSet';

  const metalFrameMat = new THREE.MeshStandardMaterial({ color: 0x5a5f66, roughness: 0.4, metalness: 0.6 });
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x7b828a, roughness: 0.3, metalness: 0.8 });

  const frameTop = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.15, 0.1), metalFrameMat);
  frameTop.position.set(0, 2.375, 0);
  group.add(frameTop);

  const frameLeft = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.4, 0.1), metalFrameMat);
  frameLeft.position.set(-0.725, 1.2, 0);
  group.add(frameLeft);

  const frameRight = frameLeft.clone();
  frameRight.position.x = 0.725;
  group.add(frameRight);

  const doorGeo = new THREE.BoxGeometry(0.63, 2.3, 0.04);
  const leftDoor = new THREE.Mesh(doorGeo, doorMat);
  leftDoor.position.set(-0.32, 1.15, -0.01);
  group.add(leftDoor);

  const rightDoor = leftDoor.clone();
  rightDoor.position.x = 0.32;
  group.add(rightDoor);

  const slit = new THREE.Mesh(new THREE.BoxGeometry(0.01, 2.3, 0.045), new THREE.MeshStandardMaterial({ color: 0x111111 }));
  slit.position.set(0, 1.15, -0.01);
  group.add(slit);

  const panel = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.35, 0.03), new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.7 }));
  panel.position.set(0.95, 1.2, 0.015);
  group.add(panel);

  const screen = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.01), new THREE.MeshStandardMaterial({ color: 0x111111 }));
  screen.position.set(0.95, 1.3, 0.032);
  group.add(screen);

  const btnGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.01, 8);
  btnGeo.rotateX(Math.PI / 2);
  const btnMat = new THREE.MeshStandardMaterial({ color: 0xf39c12 });
  const btnUp = new THREE.Mesh(btnGeo, btnMat);
  btnUp.position.set(0.95, 1.18, 0.032);
  group.add(btnUp);

  const btnDown = new THREE.Mesh(btnGeo, btnMat);
  btnDown.position.set(0.95, 1.12, 0.032);
  group.add(btnDown);

  return group;
}

// 3. Old Korean Dormitory Door with Room Number Plate
function createDormitoryDoor() {
  const group = new THREE.Group();
  group.name = 'DormitoryDoor';

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x7c543e, roughness: 0.8 });
  const frameMat = new THREE.MeshStandardMaterial({ color: 0x4a3728, roughness: 0.9 });
  const metalMat = new THREE.MeshStandardMaterial({ color: 0xb5b5b5, metalness: 0.8, roughness: 0.3 });
  const plateMat = new THREE.MeshStandardMaterial({ color: 0x1a252f, roughness: 0.5 });

  const frameTop = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.08, 0.12), frameMat);
  frameTop.position.set(0, 2.14, 0);
  group.add(frameTop);

  const frameL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 2.15, 0.12), frameMat);
  frameL.position.set(-0.485, 1.075, 0);
  group.add(frameL);

  const frameR = frameL.clone();
  frameR.position.x = 0.485;
  group.add(frameR);

  const doorLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.89, 2.1, 0.05), woodMat);
  doorLeaf.position.set(0, 1.05, 0);
  group.add(doorLeaf);

  const knobBase = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 12), metalMat);
  knobBase.rotateX(Math.PI / 2);
  knobBase.position.set(0.35, 1.0, 0.03);
  group.add(knobBase);

  const knobHandle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.02), metalMat);
  knobHandle.position.set(0.39, 1.0, 0.05);
  group.add(knobHandle);

  const lockBox = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.18, 0.025), plateMat);
  lockBox.position.set(0.35, 1.15, 0.032);
  group.add(lockBox);

  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.015), plateMat);
  plate.position.set(0, 1.85, 0.03);
  group.add(plate);

  return group;
}

// 4. Thin Mattress / Single Bed
function createThinMattressBed() {
  const group = new THREE.Group();
  group.name = 'DormitoryBed';

  const woodFrameMat = new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.8 });
  const mattressMat = new THREE.MeshStandardMaterial({ color: 0xd9d3c7, roughness: 0.9 });
  const pillowMat = new THREE.MeshStandardMaterial({ color: 0x3d5a80, roughness: 0.7 });

  const base = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.15, 2.05), woodFrameMat);
  base.position.set(0, 0.075, 0);
  group.add(base);

  const headboard = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.55, 0.06), woodFrameMat);
  headboard.position.set(0, 0.35, -0.995);
  group.add(headboard);

  const mattress = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 1.95), mattressMat);
  mattress.position.set(0, 0.21, 0.02);
  group.add(mattress);

  const pillow = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.08, 0.35), pillowMat);
  pillow.position.set(0, 0.31, -0.7);
  pillow.rotation.x = 0.08;
  group.add(pillow);

  return group;
}

// 5. Small Desk with Drawer
function createSmallDeskWithDrawer() {
  const group = new THREE.Group();
  group.name = 'SmallDesk';

  const woodMat = new THREE.MeshStandardMaterial({ color: 0x6e5038, roughness: 0.7 });
  const metalMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.6, roughness: 0.4 });

  const top = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.04, 0.6), woodMat);
  top.position.set(0, 0.73, 0);
  group.add(top);

  const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.71, 0.56), woodMat);
  leftLeg.position.set(-0.46, 0.355, 0);
  group.add(leftLeg);

  const back = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.35, 0.02), woodMat);
  back.position.set(0, 0.52, -0.27);
  group.add(back);

  const drawerUnit = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.69, 0.56), woodMat);
  drawerUnit.position.set(0.31, 0.355, 0);
  group.add(drawerUnit);

  for (let y of [0.55, 0.35, 0.15]) {
    const handle = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.02), metalMat);
    handle.position.set(0.31, y, 0.29);
    group.add(handle);
  }

  return group;
}

// 6. Plastic Chair
function createPlasticChair() {
  const group = new THREE.Group();
  group.name = 'PlasticChair';

  const plasticMat = new THREE.MeshStandardMaterial({ color: 0x2b580c, roughness: 0.5 });
  const legMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.3 });

  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.04, 0.42), plasticMat);
  seat.position.set(0, 0.45, 0);
  group.add(seat);

  const back = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.38, 0.03), plasticMat);
  back.position.set(0, 0.66, -0.19);
  back.rotation.x = -0.1;
  group.add(back);

  const legGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.45, 8);
  const offsets = [
    [-0.18, -0.16],
    [0.18, -0.16],
    [-0.18, 0.16],
    [0.18, 0.16]
  ];

  offsets.forEach(([x, z]) => {
    const leg = new THREE.Mesh(legGeo, legMat);
    leg.position.set(x, 0.225, z);
    leg.rotation.z = x > 0 ? -0.06 : 0.06;
    leg.rotation.x = z > 0 ? -0.06 : 0.06;
    group.add(leg);
  });

  return group;
}

// 7. Old Fluorescent Tube Fixture
function createFluorescentFixture() {
  const group = new THREE.Group();
  group.name = 'FluorescentFixture';

  const frameMat = new THREE.MeshStandardMaterial({ color: 0xd8d8d8, metalness: 0.3, roughness: 0.6 });
  const socketMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.7 });
  const tubeMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xf4f9ff,
    emissiveIntensity: 0.9,
    roughness: 0.2
  });

  const base = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.05, 1.25), frameMat);
  base.position.set(0, 0, 0);
  group.add(base);

  for (let x of [-0.06, 0.06]) {
    const socketA = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.05), socketMat);
    socketA.position.set(x, -0.04, -0.58);
    group.add(socketA);

    const socketB = socketA.clone();
    socketB.position.z = 0.58;
    group.add(socketB);

    const tubeGeo = new THREE.CylinderGeometry(0.015, 0.015, 1.12, 10);
    tubeGeo.rotateX(Math.PI / 2);
    const tube = new THREE.Mesh(tubeGeo, tubeMat);
    tube.position.set(x, -0.04, 0);
    group.add(tube);
  }

  return group;
}

async function generateAll() {
  console.log('🔨 Generating custom Korean Dormitory low-poly 3D models (.glb & .obj)...');

  await exportModel(createRiceCooker(), 'rice_cooker', PROPS_DIR);
  await exportModel(createElevatorDoorAndPanel(), 'elevator_door_set', MODULAR_DIR);
  await exportModel(createDormitoryDoor(), 'dormitory_door_room204', MODULAR_DIR);
  await exportModel(createThinMattressBed(), 'dormitory_bed_single', FURNITURE_DIR);
  await exportModel(createSmallDeskWithDrawer(), 'dormitory_desk_drawer', FURNITURE_DIR);
  await exportModel(createPlasticChair(), 'plastic_chair', FURNITURE_DIR);
  await exportModel(createFluorescentFixture(), 'fluorescent_fixture', PROPS_DIR);

  console.log('\n✨ All custom low-poly models exported successfully into assets/models!');
}

generateAll().catch(console.error);
