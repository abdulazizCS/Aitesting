import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const ROBOT_NAME = 'رافد';

/* =====================================================================
 * Renderer / scene
 * ===================================================================== */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.background = makeBackgroundTexture();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
camera.position.set(0, 1.15, 4.4);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.98, 0);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1.3;
controls.maxDistance = 7;
controls.minPolarAngle = 0.9;
controls.maxPolarAngle = 1.75;
controls.minAzimuthAngle = -1.3;
controls.maxAzimuthAngle = 1.3;
controls.rotateSpeed = 0.6;

// Lights
scene.add(new THREE.HemisphereLight(0xeef4ff, 0x8d7b6b, 0.55));
const key = new THREE.DirectionalLight(0xffffff, 2.3);
key.position.set(1.6, 3.6, 3.2);
key.castShadow = true;
key.shadow.mapSize.set(2048, 2048);
key.shadow.camera.left = -1.2;
key.shadow.camera.right = 1.2;
key.shadow.camera.top = 2.2;
key.shadow.camera.bottom = -0.3;
key.shadow.bias = -0.0004;
key.shadow.normalBias = 0.02;
scene.add(key);
const fill = new THREE.DirectionalLight(0xc4d8ff, 0.8);
fill.position.set(-3, 2, 2);
scene.add(fill);
const rim = new THREE.DirectionalLight(0xa9c8ff, 1.6);
rim.position.set(0.5, 3, -3);
scene.add(rim);

const ground = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.ShadowMaterial({ opacity: 0.22 }));
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);

/* =====================================================================
 * Procedural textures
 * ===================================================================== */
function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return t;
}

function makeBackgroundTexture() {
  return canvasTex(64, 512, (g, w, h) => {
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, '#dbe7fb');
    grd.addColorStop(0.55, '#bcd1f2');
    grd.addColorStop(1, '#a4bde6');
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
  });
}

// Red & white shemagh pattern
const shemaghTex = canvasTex(256, 256, (g, w, h) => {
  g.fillStyle = '#f6f2ee';
  g.fillRect(0, 0, w, h);
  const n = 16, s = w / n;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if ((x + y) % 2 === 0) {
        g.fillStyle = '#c4202c';
        g.fillRect(x * s + 1, y * s + 1, s - 2, s - 2);
      } else if (x % 2 === 0) {
        g.fillStyle = 'rgba(196,32,44,0.35)';
        g.fillRect(x * s + s * 0.35, y * s + s * 0.35, s * 0.3, s * 0.3);
      }
    }
  }
});
shemaghTex.wrapS = shemaghTex.wrapT = THREE.RepeatWrapping;
shemaghTex.repeat.set(7, 3);

// Fine wool noise for the bisht
const woolTex = canvasTex(256, 256, (g, w, h) => {
  const img = g.createImageData(w, h);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = 200 + Math.random() * 55;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  g.globalAlpha = 0.08;
  g.strokeStyle = '#000';
  for (let i = 0; i < 90; i++) {
    g.beginPath();
    const x = Math.random() * w;
    g.moveTo(x, 0);
    g.lineTo(x + (Math.random() - 0.5) * 20, h);
    g.stroke();
  }
});
woolTex.wrapS = woolTex.wrapT = THREE.RepeatWrapping;
woolTex.repeat.set(6, 6);

// Embroidered gold trim (stripes along the band)
const goldTex = canvasTex(64, 64, (g, w, h) => {
  g.fillStyle = '#e7b452';
  g.fillRect(0, 0, w, h);
  const stripes = ['#b07a22', '#f7d78a', '#9c6a1a', '#f2c96b', '#b07a22'];
  stripes.forEach((c, i) => {
    g.fillStyle = c;
    g.fillRect((i + 0.5) * (w / 5.5), 0, 3, h);
  });
});
goldTex.wrapT = THREE.RepeatWrapping;
goldTex.repeat.set(1, 30);

/* =====================================================================
 * Materials
 * ===================================================================== */
const M = {
  plastic: new THREE.MeshPhysicalMaterial({ color: 0xf5f7fa, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12 }),
  joint: new THREE.MeshStandardMaterial({ color: 0x20242c, roughness: 0.45, metalness: 0.4 }),
  bisht: new THREE.MeshPhysicalMaterial({
    color: 0x4a2c18, map: woolTex, roughness: 0.92, sheen: 0.6, sheenColor: new THREE.Color(0x8a5a32),
    sheenRoughness: 0.45, side: THREE.DoubleSide,
  }),
  gold: new THREE.MeshPhysicalMaterial({ color: 0xffffff, map: goldTex, metalness: 0.85, roughness: 0.32, side: THREE.DoubleSide }),
  thobe: new THREE.MeshPhysicalMaterial({ color: 0xf4f3ef, roughness: 0.8, sheen: 0.6, sheenColor: new THREE.Color(0xffffff), side: THREE.DoubleSide }),
  shemagh: new THREE.MeshStandardMaterial({ map: shemaghTex, roughness: 0.9, side: THREE.DoubleSide }),
  agal: new THREE.MeshStandardMaterial({ color: 0x15121a, roughness: 0.55 }),
};

/* =====================================================================
 * Geometry helpers
 * ===================================================================== */
function gridGeometry(nu, nv, fn) {
  const pos = [], uv = [], idx = [];
  const p = new THREE.Vector3();
  for (let j = 0; j <= nv; j++) {
    for (let i = 0; i <= nu; i++) {
      const u = i / nu, v = j / nv;
      fn(u, v, p);
      pos.push(p.x, p.y, p.z);
      uv.push(u, 1 - v);
    }
  }
  for (let j = 0; j < nv; j++) {
    for (let i = 0; i < nu; i++) {
      const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// piecewise-linear profile: [[y, r], ...] sorted by y ascending
function profile(points) {
  return (y) => {
    if (y <= points[0][0]) return points[0][1];
    for (let i = 1; i < points.length; i++) {
      if (y <= points[i][0]) {
        const [y0, r0] = points[i - 1], [y1, r1] = points[i];
        const t = (y - y0) / (y1 - y0);
        const s = t * t * (3 - 2 * t);
        return r0 + (r1 - r0) * s;
      }
    }
    return points[points.length - 1][1];
  };
}

function mesh(geo, mat, parent, shadow = true) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = shadow;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

/* =====================================================================
 * Robot model
 * ===================================================================== */
const robot = new THREE.Group();
scene.add(robot);
const body = new THREE.Group();
robot.add(body);

// --- body cross-section: wider at the shoulders, rounder at the hem
const sx = (y) => 1.0 + 0.16 * THREE.MathUtils.smoothstep(y, 0.6, 1.25);
const sz = (y) => 1.0 - 0.22 * THREE.MathUtils.smoothstep(y, 0.6, 1.25);

const bishtR = profile([[0.02, 0.35], [0.4, 0.315], [0.8, 0.27], [1.05, 0.245], [1.24, 0.232], [1.33, 0.205], [1.4, 0.13], [1.44, 0.075]]);
const thobeR = profile([[0.02, 0.215], [0.5, 0.21], [0.9, 0.195], [1.2, 0.18], [1.34, 0.13], [1.43, 0.06]]);
const Y_TOP = 1.44, Y_BOT = 0.02;
const GAP = 0.78; // front opening of the bisht (radians)

const fold = (phi, y) => {
  const amp = 0.055 * Math.pow(THREE.MathUtils.clamp(1 - y / 1.3, 0, 1), 1.4);
  return amp * (0.6 * Math.sin(phi * 7 + 1.3) + 0.4 * Math.sin(phi * 13 + 0.4));
};
function clothPoint(p, phi, y, r) {
  p.set(Math.sin(phi) * r * sx(y), y, Math.cos(phi) * r * sz(y));
}

// thobe (white robe underneath)
mesh(gridGeometry(48, 30, (u, v, p) => {
  const y = Y_TOP - v * (Y_TOP - Y_BOT);
  const phi = u * Math.PI * 2;
  clothPoint(p, phi, y, thobeR(y) * (1 + 0.012 * Math.sin(phi * 9)));
}), M.thobe, body);
// thobe placket line
mesh(new THREE.BoxGeometry(0.006, 0.3, 0.004), M.joint, body).position.set(0, 1.27, thobeR(1.27) * sz(1.27) + 0.002);
// collar
const collar = mesh(new THREE.CylinderGeometry(0.058, 0.064, 0.05, 24, 1, true), M.thobe, body);
collar.position.y = 1.44;

// bisht (open cloak)
const bishtPhi0 = GAP / 2, bishtPhiLen = Math.PI * 2 - GAP;
mesh(gridGeometry(90, 40, (u, v, p) => {
  const y = Y_TOP - v * (Y_TOP - Y_BOT);
  const phi = bishtPhi0 + u * bishtPhiLen;
  clothPoint(p, phi, y, bishtR(y) * (1 + fold(phi, y)));
}), M.bisht, body);

// gold trim along both front edges
for (const side of [1, -1]) {
  mesh(gridGeometry(3, 60, (u, v, p) => {
    const y = Y_TOP - v * (Y_TOP - Y_BOT);
    const r = bishtR(y);
    const phi = side * (bishtPhi0 + 0.002 + u * (0.042 / r));
    clothPoint(p, phi, y, r * (1 + fold(phi, y)) + 0.004);
  }), M.gold, body);
}
// gold hem
mesh(gridGeometry(90, 1, (u, v, p) => {
  const y = Y_BOT + 0.035 - v * 0.03;
  const phi = bishtPhi0 + u * bishtPhiLen;
  clothPoint(p, phi, y, bishtR(y) * (1 + fold(phi, y)) + 0.004);
}), M.gold, body);

/* ---------------- head ---------------- */
const neck = new THREE.Group();
neck.position.set(0, 1.45, 0);
body.add(neck);
mesh(new THREE.CylinderGeometry(0.042, 0.05, 0.09, 20), M.plastic, neck).position.y = 0.03;

const head = new THREE.Group();
head.position.set(0, 0.155, 0); // head center relative to neck pivot
neck.add(head);
const HEAD_R = 0.158;
const skull = mesh(new THREE.SphereGeometry(HEAD_R, 64, 48), M.plastic, head);
skull.scale.set(1, 0.97, 0.98);

// --- animated face (canvas texture on the visor)
const FACE = 512;
const VISOR_W = 1.95, VISOR_H = 1.42;
const faceCanvas = document.createElement('canvas');
faceCanvas.width = FACE;
faceCanvas.height = Math.round(FACE * VISOR_H / VISOR_W); // keep circles round on the sphere
const fctx = faceCanvas.getContext('2d');
const faceTex = new THREE.CanvasTexture(faceCanvas);
faceTex.colorSpace = THREE.SRGBColorSpace;
faceTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
const visor = mesh(
  new THREE.SphereGeometry(HEAD_R * 1.006, 64, 48, Math.PI / 2 - VISOR_W / 2, VISOR_W, Math.PI / 2 - VISOR_H / 2 + 0.06, VISOR_H),
  new THREE.MeshPhysicalMaterial({
    map: faceTex, emissiveMap: faceTex, emissive: 0xffffff, emissiveIntensity: 1.3,
    roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 0.35, alphaTest: 0.5,
  }),
  head, false,
);
visor.scale.copy(skull.scale);

// --- shemagh: cap over the head + drape down to the shoulders
const capEnd = (phi) => 0.86 + 0.75 * (1 - Math.cos(phi)) / 2;
mesh(gridGeometry(64, 16, (u, v, p) => {
  const phi = u * Math.PI * 2;
  const th = v * capEnd(phi);
  const r = HEAD_R * 1.06 * (1 + 0.04 * Math.sin(v * Math.PI));
  p.set(Math.sin(phi) * Math.sin(th) * r, Math.cos(th) * r, Math.cos(phi) * Math.sin(th) * r);
}), M.shemagh, head);

const DRAPE_GAP = 1.75;
mesh(gridGeometry(64, 24, (u, v, p) => {
  const phi = DRAPE_GAP / 2 + u * (Math.PI * 2 - DRAPE_GAP);
  const len = 0.36 + 0.16 * Math.abs(Math.cos(phi));
  const y = 0.02 - v * len;
  const r = HEAD_R * 1.08 + Math.pow(v, 1.5) * 0.085 + 0.01 * Math.sin(phi * 10) * v;
  p.set(Math.sin(phi) * r * (1 + 0.1 * v), y, Math.cos(phi) * r * (1 - 0.12 * v));
}), M.shemagh, head);

// agal (double black cord)
for (const [y, rad] of [[0.078, 0.15], [0.104, 0.137]]) {
  const ring = mesh(new THREE.TorusGeometry(rad, 0.012, 12, 64), M.agal, head);
  ring.position.set(0, y, -0.008);
  ring.rotation.x = Math.PI / 2 + 0.12;
}

/* ---------------- arms ---------------- */
const L1 = 0.3, L2 = 0.27;
const DOWN = new THREE.Vector3(0, -1, 0);

function buildHand(side) {
  // side: -1 = right hand (at -x), +1 = left hand. Palm faces the body at rest.
  const palmN = -side;
  const hand = new THREE.Group();
  mesh(new THREE.SphereGeometry(0.02, 16, 12), M.joint, hand);
  const palm = mesh(new RoundedBoxGeometry(0.026, 0.07, 0.058, 3, 0.01), M.plastic, hand);
  palm.position.y = -0.045;
  // dark panel on the back of the hand
  mesh(new RoundedBoxGeometry(0.004, 0.04, 0.034, 2, 0.002), M.joint, hand).position.set(-palmN * 0.013, -0.045, 0);

  const fingers = [];
  const seg = (len, rad, parent) => {
    const g = new THREE.CapsuleGeometry(rad, len, 4, 10);
    g.translate(0, -len / 2 - rad, 0);
    mesh(g, M.plastic, parent);
  };
  const zs = [0.02, 0.0068, -0.0068, -0.02];
  const lens = [0.026, 0.029, 0.027, 0.021];
  zs.forEach((z, i) => {
    const base = new THREE.Group();
    base.position.set(0, -0.082, z);
    hand.add(base);
    mesh(new THREE.SphereGeometry(0.0078, 10, 8), M.joint, base);
    seg(lens[i], 0.0062, base);
    const mid = new THREE.Group();
    mid.position.y = -(lens[i] + 0.012);
    base.add(mid);
    mesh(new THREE.SphereGeometry(0.0068, 10, 8), M.joint, mid);
    seg(lens[i] * 0.8, 0.0058, mid);
    fingers.push({ base, mid });
  });
  // thumb
  const tBase = new THREE.Group();
  tBase.position.set(palmN * 0.006, -0.03, 0.03);
  tBase.rotation.x = -0.75;
  hand.add(tBase);
  mesh(new THREE.SphereGeometry(0.008, 10, 8), M.joint, tBase);
  seg(0.022, 0.0068, tBase);
  const tMid = new THREE.Group();
  tMid.position.y = -0.034;
  tBase.add(tMid);
  mesh(new THREE.SphereGeometry(0.007, 10, 8), M.joint, tMid);
  seg(0.018, 0.006, tMid);

  hand.userData = { fingers, tBase, tMid, palmN };
  return hand;
}

function setCurl(hand, c) {
  const { fingers, tBase, tMid, palmN } = hand.userData;
  fingers.forEach((f, i) => {
    const k = c * (1 + i * 0.12);
    f.base.rotation.z = palmN * k;
    f.mid.rotation.z = palmN * k * 1.2;
  });
  tBase.rotation.z = palmN * c * 0.5;
  tMid.rotation.z = palmN * c * 0.6;
}

function buildArm(side) {
  const shoulder = new THREE.Group();
  shoulder.position.set(side * 0.215, 1.3, -0.005);
  body.add(shoulder);
  mesh(new THREE.SphereGeometry(0.078, 24, 16), M.bisht, shoulder);
  const upper = mesh(new THREE.CylinderGeometry(0.074, 0.08, L1, 24, 1, true), M.bisht, shoulder);
  upper.position.y = -L1 / 2;
  const elbow = new THREE.Group();
  elbow.position.y = -L1;
  shoulder.add(elbow);
  mesh(new THREE.SphereGeometry(0.079, 24, 16), M.bisht, elbow);
  const sleeveLen = L2 * 0.92;
  mesh(new THREE.CylinderGeometry(0.078, 0.088, sleeveLen, 28, 1, true), M.bisht, elbow).position.y = -sleeveLen / 2;
  const cuff = mesh(new THREE.TorusGeometry(0.087, 0.008, 8, 40), M.gold, elbow);
  cuff.position.y = -sleeveLen;
  cuff.rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(0.034, 0.038, 0.07, 18), M.thobe, elbow).position.y = -L2 + 0.03;
  const wrist = new THREE.Group();
  wrist.position.y = -L2;
  elbow.add(wrist);
  const hand = buildHand(side);
  wrist.add(hand);
  return { side, shoulder, elbow, wrist, hand };
}
const armR = buildArm(-1);
const armL = buildArm(1);

const _d = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Vector3(), _t = new THREE.Vector3();
const _q = new THREE.Quaternion(), _pole = new THREE.Vector3();
function solveArm(arm, target, pole, wrist, curl) {
  const S = arm.shoulder.position;
  _d.fromArray(target).sub(S);
  const d = THREE.MathUtils.clamp(_d.length(), 0.08, (L1 + L2) * 0.995);
  _d.normalize();
  const a = (L1 * L1 - L2 * L2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, L1 * L1 - a * a));
  _pole.fromArray(pole).normalize();
  _p.copy(_pole).addScaledVector(_d, -_pole.dot(_d)).normalize();
  _e.copy(S).addScaledVector(_d, a).addScaledVector(_p, h);
  _t.copy(S).addScaledVector(_d, d);
  arm.shoulder.quaternion.setFromUnitVectors(DOWN, _p.copy(_e).sub(S).normalize());
  _q.copy(arm.shoulder.quaternion).invert();
  arm.elbow.quaternion.setFromUnitVectors(DOWN, _t.sub(_e).normalize().applyQuaternion(_q));
  arm.wrist.rotation.set(wrist[0], wrist[1], wrist[2]);
  setCurl(arm.hand, curl);
}

/* =====================================================================
 * Face drawing
 * ===================================================================== */
const face = { blink: 0, gx: 0, gy: 0, mouth: 0, mood: 'happy', moodK: { happy: 1, surprised: 0, think: 0, sad: 0 } };
const CYAN = '#5fe3ff';

function drawFace() {
  const g = fctx, S = FACE;
  const k = face.moodK;
  g.setTransform(1, 0, 0, faceCanvas.height / S, 0, 0);
  g.clearRect(0, 0, S, S);
  // visor shape
  g.save();
  g.beginPath();
  g.roundRect(14, 22, S - 28, S - 50, [200, 200, 230, 230]);
  const bg = g.createRadialGradient(S * 0.5, S * 0.4, 20, S * 0.5, S * 0.5, S * 0.6);
  bg.addColorStop(0, '#0d1420');
  bg.addColorStop(1, '#020306');
  g.fillStyle = bg;
  g.fill();
  g.restore();

  // eyes
  const eyeY = 228 - k.surprised * 6 + k.sad * 6;
  const R = 52 + k.surprised * 8 - k.think * 4;
  for (const ex of [168, 344]) {
    g.save();
    g.translate(ex + face.gx * 8, eyeY + face.gy * 6);
    const open = Math.max(0.06, 1 - face.blink);
    g.scale(1, open);
    // outer ring
    g.shadowColor = CYAN;
    g.shadowBlur = 28;
    g.beginPath();
    g.arc(0, 0, R, 0, Math.PI * 2);
    g.fillStyle = CYAN;
    g.fill();
    g.shadowBlur = 0;
    // iris
    const ix = face.gx * 12, iy = face.gy * 10;
    const ig = g.createRadialGradient(ix, iy, 4, ix, iy, R * 0.75);
    ig.addColorStop(0, '#163f66');
    ig.addColorStop(1, '#07142a');
    g.beginPath();
    g.arc(ix, iy, R * 0.74, 0, Math.PI * 2);
    g.fillStyle = ig;
    g.fill();
    // highlights
    g.fillStyle = '#ffffff';
    g.beginPath();
    g.arc(ix - R * 0.26, iy - R * 0.28, R * 0.17, 0, Math.PI * 2);
    g.fill();
    g.globalAlpha = 0.7;
    g.beginPath();
    g.arc(ix + R * 0.28, iy + R * 0.26, R * 0.07, 0, Math.PI * 2);
    g.fill();
    g.globalAlpha = 1;
    g.restore();

    // think / sad: upper lid slant
    const lid = k.think * 0.35 + k.sad * 0.45;
    if (lid > 0.01) {
      g.save();
      g.fillStyle = '#04070c';
      g.translate(ex, eyeY - R);
      g.rotate((ex < 256 ? -1 : 1) * (k.sad * 0.35 - k.think * 0.15));
      g.fillRect(-R * 1.4, -R, R * 2.8, R * (1 + lid));
      g.restore();
    }
  }

  // mouth
  const open = face.mouth;
  const smile = 0.6 + k.happy * 0.5 - k.sad * 1.1 - k.think * 0.5;
  const W = 54 + k.happy * 10 - k.surprised * 18 + open * 6;
  const my = 352 + k.sad * 6;
  const top = smile * 14 - open * 4;
  const bot = Math.max(top + 4, smile * 20 + 10 + open * 52 + k.surprised * 30);
  g.save();
  g.translate(256 + face.gx * 4, my);
  g.shadowColor = CYAN;
  g.shadowBlur = 20;
  g.beginPath();
  g.moveTo(-W, 0);
  g.quadraticCurveTo(0, top * 2, W, 0);
  g.quadraticCurveTo(0, bot * 2 - top, -W, 0);
  g.closePath();
  g.fillStyle = CYAN;
  g.fill();
  if (open > 0.12 || k.surprised > 0.5) {
    g.shadowBlur = 0;
    const shrink = 0.72;
    g.beginPath();
    g.moveTo(-W * shrink, 4);
    g.quadraticCurveTo(0, top * 2 + 8, W * shrink, 4);
    g.quadraticCurveTo(0, (bot * 2 - top) * 0.82, -W * shrink, 4);
    g.closePath();
    g.fillStyle = '#082238';
    g.fill();
  }
  g.restore();

  // glass reflection
  const refl = g.createLinearGradient(0, 30, 0, 200);
  refl.addColorStop(0, 'rgba(255,255,255,0.10)');
  refl.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = refl;
  g.beginPath();
  g.ellipse(230, 110, 170, 70, -0.15, 0, Math.PI * 2);
  g.fill();

  faceTex.needsUpdate = true;
}

/* =====================================================================
 * Poses & gestures
 * ===================================================================== */
const PI = Math.PI;
const mirrorArm = (a) => a && ({ t: [-a.t[0], a.t[1], a.t[2]], w: [a.w[0], -a.w[1], -a.w[2]], c: a.c, pole: [-a.pole[0], a.pole[1], a.pole[2]] });
const restR = (t) => ({ t: [-0.29, 0.745 + 0.004 * Math.sin(t * 1.6), 0.045], w: [0, 0, 0], c: 0.32, pole: [-0.4, -0.3, -1] });

function idlePose(t) {
  return {
    r: restR(t),
    l: mirrorArm(restR(t + 0.7)),
    head: [0.03 + 0.015 * Math.sin(t * 0.7), 0.06 * Math.sin(t * 0.29), 0.025 * Math.sin(t * 0.53)],
    body: [0, 0.03 * Math.sin(t * 0.21), 0.006 * Math.sin(t * 0.41)],
  };
}

const presentR = (t) => ({ t: [-0.33, 0.93, 0.27], w: [0.25, -1.45, 0.15 + 0.05 * Math.sin(t * 2)], c: 0.15, pole: [-0.6, -0.4, -0.6] });
const chestR = { t: [-0.04, 1.17, 0.215], w: [0.2, 1.2, 0.35], c: 0.08, pole: [-1, -0.6, -0.2] };

const GESTURES = {
  wave: { dur: 2.8, mood: 'happy', pose: (t) => ({
    r: { t: [-0.42, 1.5, 0.16], w: [0.15, -1.45, 0.35 * Math.sin(t * 11)], c: 0.05, pole: [-0.5, -1, -0.3] },
    head: [0.02, 0.08, 0.1], body: [0, 0.05, 0.01] }) },
  waveL: { dur: 2.8, mood: 'happy', pose: (t) => ({
    l: mirrorArm({ t: [-0.42, 1.5, 0.16], w: [0.15, -1.45, 0.35 * Math.sin(t * 11)], c: 0.05, pole: [-0.5, -1, -0.3] }),
    head: [0.02, -0.08, -0.1], body: [0, -0.05, -0.01] }) },
  chest: { dur: 3.0, mood: 'happy', pose: (t, p) => ({
    r: chestR,
    head: [0.28 * Math.sin(Math.min(1, p * 1.6) * PI), 0, 0.03], body: [0.1 * Math.sin(Math.min(1, p * 1.6) * PI), 0, 0] }) },
  presentR: { dur: 2.6, mood: 'happy', pose: (t) => ({ r: presentR(t), head: [0.05, -0.22, -0.05] }) },
  presentL: { dur: 2.6, mood: 'happy', pose: (t) => ({ l: mirrorArm(presentR(t)), head: [0.05, 0.22, 0.05] }) },
  both: { dur: 2.2, pose: (t) => ({ r: presentR(t), l: mirrorArm(presentR(t + 1)), head: [-0.04, 0, 0] }) },
  think: { dur: 3.2, mood: 'think', pose: (t) => ({
    r: { t: [-0.035, 1.43, 0.2], w: [0.3, 0.6, 1.2], c: 0.75, pole: [-0.6, -1, 0.1] },
    l: { t: [0.06, 1.03, 0.22], w: [0.3, -0.5, -1.4], c: 0.5, pole: [0.8, -0.6, -0.3] },
    head: [-0.12, 0.18, 0.14], gaze: [0.6, -0.8] }) },
  nod: { dur: 1.6, mood: 'happy', pose: (t, p) => ({ head: [0.22 * Math.abs(Math.sin(p * PI * 2)), 0, 0] }) },
  shake: { dur: 1.6, pose: (t, p) => ({ head: [0.05, 0.3 * Math.sin(p * PI * 3), 0] }) },
  listen: { dur: 999, pose: (t) => ({
    r: { t: [-0.3, 0.8, 0.1], w: [0, 0, 0], c: 0.35, pole: [-0.4, -0.3, -1] },
    head: [0.08, 0.12, 0.18 + 0.02 * Math.sin(t * 2)], body: [0.03, 0, 0] }) },
  dance: { dur: 5.5, mood: 'happy', pose: (t) => {
    const s = Math.sin(t * 7), c = Math.cos(t * 3.5);
    return {
      r: { t: [-0.36 - 0.05 * c, 1.08 + 0.18 * s, 0.24], w: [0, -1.3, 0.3 * s], c: 0.2, pole: [-0.6, -1, -0.3] },
      l: { t: [0.36 - 0.05 * c, 1.08 - 0.18 * s, 0.24], w: [0, 1.3, 0.3 * s], c: 0.2, pole: [0.6, -1, -0.3] },
      head: [0.06 * s, 0.15 * c, 0.14 * s], body: [0, 0.22 * c, 0.035 * s], bounce: 0.015 * Math.abs(s),
    };
  } },
  laugh: { dur: 2.2, mood: 'happy', pose: (t) => ({
    r: { t: [-0.2, 0.95, 0.24], w: [0.2, 1.0, 0.3], c: 0.3, pole: [-1, -0.5, -0.4] },
    head: [-0.18 + 0.04 * Math.sin(t * 22), 0, 0.05], body: [-0.06, 0, 0.01 * Math.sin(t * 22)] }) },
  surprised: { dur: 1.8, mood: 'surprised', pose: () => ({
    r: { t: [-0.33, 0.98, 0.2], w: [0.3, -1.5, 0], c: 0, pole: [-0.6, -0.5, -0.6] },
    l: { t: [0.33, 0.98, 0.2], w: [0.3, 1.5, 0], c: 0, pole: [0.6, -0.5, -0.6] },
    head: [-0.1, 0, 0], body: [-0.05, 0, 0] }) },
  shrug: { dur: 2.0, mood: 'sad', pose: () => ({
    r: { t: [-0.36, 0.95, 0.2], w: [0.2, -1.6, 0.2], c: 0.1, pole: [-0.9, -0.5, -0.2] },
    l: { t: [0.36, 0.95, 0.2], w: [0.2, 1.6, -0.2], c: 0.1, pole: [0.9, -0.5, -0.2] },
    head: [0.05, 0, 0.14] }) },
};
const TALK_GESTURES = ['presentR', 'presentL', 'both', 'nod', 'presentR', 'presentL'];

let activeGesture = null;
function playGesture(name, dur) {
  const g = GESTURES[name];
  if (!g) return;
  activeGesture = { name, g, start: clock.elapsedTime, dur: dur ?? g.dur };
}
function stopGesture(name) {
  if (activeGesture && (!name || activeGesture.name === name)) {
    const elapsed = clock.elapsedTime - activeGesture.start;
    activeGesture.dur = Math.min(activeGesture.dur, elapsed + 0.45);
  }
}

function blend(a, b, w) {
  if (b === undefined) return a;
  if (typeof a === 'number') return a + (b - a) * w;
  if (Array.isArray(a)) return a.map((v, i) => blend(v, b[i], w));
  const out = {};
  for (const k in a) out[k] = blend(a[k], b[k], w);
  return out;
}

// smoothed pose state
let cur = null;
function damp(a, b, k) {
  if (typeof a === 'number') return a + (b - a) * k;
  if (Array.isArray(a)) return a.map((v, i) => damp(v, b[i], k));
  const out = {};
  for (const key in a) out[key] = damp(a[key], b[key], k);
  return out;
}

/* =====================================================================
 * Interaction state
 * ===================================================================== */
const clock = new THREE.Clock();
const pointer = new THREE.Vector2(0, 0);
const look = new THREE.Vector2(0, 0);
let lastPointerMove = 0;
let speaking = false;
let wordPulse = 0;
let nextBlink = 2, blinkT = -1;
let nextTalkGesture = 0;
let nextIdleAction = 8;
let listening = false;

window.addEventListener('pointermove', (e) => {
  pointer.set((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  lastPointerMove = clock.elapsedTime;
});

/* =====================================================================
 * Animation loop
 * ===================================================================== */
const headWorld = new THREE.Vector3();
const bubbleEl = document.getElementById('bubble');

function update(dt, t) {
  // --- gestures
  let pose = idlePose(t);
  let mood = speaking ? 'happy' : 'happy';
  let gaze = null;
  if (activeGesture) {
    const el = t - activeGesture.start;
    const p = el / activeGesture.dur;
    if (p >= 1) activeGesture = null;
    else {
      const w = THREE.MathUtils.smoothstep(el, 0, 0.4) * (1 - THREE.MathUtils.smoothstep(el, activeGesture.dur - 0.45, activeGesture.dur));
      const gp = activeGesture.g.pose(t, p);
      pose = blend(pose, gp, w);
      if (w > 0.4 && activeGesture.g.mood) mood = activeGesture.g.mood;
      if (gp.gaze) gaze = gp.gaze;
    }
  }

  // talk gestures while speaking
  if (speaking && !activeGesture && t > nextTalkGesture) {
    playGesture(TALK_GESTURES[Math.floor(Math.random() * TALK_GESTURES.length)], 1.6 + Math.random() * 0.8);
    nextTalkGesture = t + 2.2 + Math.random() * 1.8;
  }
  // idle micro-actions
  if (!speaking && !activeGesture && !listening && t > nextIdleAction) {
    const opts = ['nod', 'presentL', 'waveL', 'think', 'shake'];
    if (Math.random() < 0.55) playGesture(opts[Math.floor(Math.random() * opts.length)]);
    nextIdleAction = t + 7 + Math.random() * 7;
  }

  // --- look at pointer (or wander when idle)
  const idleLook = t - lastPointerMove > 4;
  const lx = idleLook ? 0.5 * Math.sin(t * 0.37) : pointer.x;
  const ly = idleLook ? 0.25 * Math.sin(t * 0.23) : pointer.y;
  const k = 1 - Math.exp(-dt * 4);
  look.x += (lx - look.x) * k;
  look.y += (ly - look.y) * k;
  pose.head = [pose.head[0] - look.y * 0.18 + face.mouth * 0.03, pose.head[1] + look.x * 0.42, pose.head[2]];

  // --- smoothing
  pose.bounce = pose.bounce ?? 0;
  cur = cur ? damp(cur, pose, 1 - Math.exp(-dt * 9)) : pose;

  solveArm(armR, cur.r.t, cur.r.pole, cur.r.w, cur.r.c);
  solveArm(armL, cur.l.t, cur.l.pole, cur.l.w, cur.l.c);
  neck.rotation.set(cur.head[0] * 0.35, cur.head[1] * 0.3, cur.head[2] * 0.3);
  head.rotation.set(cur.head[0] * 0.65, cur.head[1] * 0.7, cur.head[2] * 0.7);
  body.rotation.set(cur.body[0], cur.body[1], cur.body[2]);
  body.position.y = cur.bounce;
  const breath = 1 + 0.006 * Math.sin(t * 1.6);
  body.scale.set(breath, 1, breath);

  // --- face
  for (const m in face.moodK) {
    face.moodK[m] += ((m === mood ? 1 : 0) - face.moodK[m]) * (1 - Math.exp(-dt * 6));
  }
  const gx = gaze ? gaze[0] : look.x * 1.2;
  const gy = gaze ? gaze[1] : -look.y * 1.2;
  face.gx += (THREE.MathUtils.clamp(gx, -1, 1) - face.gx) * (1 - Math.exp(-dt * 12));
  face.gy += (THREE.MathUtils.clamp(gy, -1, 1) - face.gy) * (1 - Math.exp(-dt * 12));

  // blinking
  if (t > nextBlink && blinkT < 0) blinkT = 0;
  if (blinkT >= 0) {
    blinkT += dt;
    face.blink = Math.sin(Math.min(1, blinkT / 0.16) * PI);
    if (blinkT > 0.16) {
      blinkT = -1;
      face.blink = 0;
      nextBlink = t + (Math.random() < 0.2 ? 0.25 : 2 + Math.random() * 3.5);
    }
  }

  // lip-sync: syllable rhythm + word boundary pulses
  wordPulse = Math.max(0, wordPulse - dt * 5);
  let mouthTarget = 0;
  if (speaking) {
    const syl = Math.abs(Math.sin(t * 10.5)) * (0.55 + 0.45 * Math.sin(t * 3.3 + 1));
    mouthTarget = THREE.MathUtils.clamp(0.12 + syl * 0.7 + wordPulse * 0.35, 0, 1);
  }
  face.mouth += (mouthTarget - face.mouth) * (1 - Math.exp(-dt * 22));
  drawFace();

  // --- speech bubble follows the head
  if (bubbleEl.classList.contains('show')) {
    head.getWorldPosition(headWorld);
    headWorld.y += 0.3;
    headWorld.project(camera);
    bubbleEl.style.left = `${(headWorld.x * 0.5 + 0.5) * innerWidth}px`;
    bubbleEl.style.top = `${Math.max(90, (-headWorld.y * 0.5 + 0.5) * innerHeight)}px`;
  }
}

/* =====================================================================
 * Layout: keep the robot framed beside / above the chat panel
 * ===================================================================== */
const panelEl = document.querySelector('.panel');
function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  const mobile = w <= 760;
  const pr = panelEl.getBoundingClientRect();
  let ox = 0, oy = 0, visW = w, visH = h - 70;
  if (mobile) {
    visH = h - pr.height - 80;
    oy = (pr.height + 10) / 2 - 30;
  } else {
    visW = w - pr.width - 32;
    ox = (pr.width + 16) / 2; // panel sits on the left in RTL
    ox = -ox;
  }
  camera.setViewOffset(w, h, ox, oy, w, h);
  camera.updateProjectionMatrix();
  // fit the full body in the visible area
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const dH = (2.0 / 0.92) / (2 * tanHalf * (visH / h));
  const dW = (1.0 / 0.9) / (2 * tanHalf * camera.aspect * (visW / w));
  const dist = Math.max(dH, dW);
  const dir = camera.position.clone().sub(controls.target).normalize();
  camera.position.copy(controls.target).addScaledVector(dir, dist);
  controls.maxDistance = Math.max(dist * 1.4, 4);
}
window.addEventListener('resize', resize);
resize();

let firstFrame = true;
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  const t = clock.elapsedTime;
  update(dt, t);
  controls.update();
  renderer.render(scene, camera);
  if (firstFrame) {
    firstFrame = false;
    onReady();
  }
});

/* =====================================================================
 * Speech (text-to-speech) & lip sync
 * ===================================================================== */
const synth = window.speechSynthesis;
let arVoice = null;
let muted = false;
function pickVoice() {
  if (!synth) return;
  const vs = synth.getVoices();
  arVoice = vs.find((v) => /^ar[-_]SA/i.test(v.lang) && /natural|online|neural/i.test(v.name))
    || vs.find((v) => /^ar[-_]SA/i.test(v.lang))
    || vs.find((v) => /^ar/i.test(v.lang))
    || null;
}
if (synth) {
  pickVoice();
  synth.addEventListener?.('voiceschanged', pickVoice);
}

let speakToken = 0;
let bubbleTimer = 0;
function speak(text) {
  const token = ++speakToken;
  synth?.cancel();
  bubbleEl.textContent = text;
  bubbleEl.classList.add('show');
  clearTimeout(bubbleTimer);
  speaking = true;
  nextTalkGesture = clock.elapsedTime + 0.6;

  return new Promise((resolve) => {
    const finish = () => {
      if (token !== speakToken) return resolve();
      speaking = false;
      bubbleTimer = setTimeout(() => bubbleEl.classList.remove('show'), 1800);
      resolve();
    };
    // fallback duration if speech synthesis is missing, muted or silent
    const est = 1200 + text.length * 75;
    if (!synth || muted) {
      setTimeout(finish, est);
      return;
    }
    const parts = text.split(/(?<=[.!؟?،,])\s+/).filter(Boolean);
    let remaining = parts.length;
    let safety = setTimeout(finish, est * 2.5);
    parts.forEach((part) => {
      const u = new SpeechSynthesisUtterance(part);
      u.lang = arVoice?.lang || 'ar-SA';
      if (arVoice) u.voice = arVoice;
      u.rate = 1;
      u.pitch = 1.15;
      u.onboundary = () => { wordPulse = 1; };
      u.onend = u.onerror = () => {
        if (--remaining <= 0) {
          clearTimeout(safety);
          finish();
        }
      };
      synth.speak(u);
    });
  });
}

/* =====================================================================
 * Conversation
 * ===================================================================== */
const normalize = (s) => s
  .replace(/[ً-ْـ]/g, '')
  .replace(/[إأآ]/g, 'ا')
  .replace(/ى/g, 'ي')
  .replace(/ة/g, 'ه')
  .toLowerCase();

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const JOKES = [
  'مرة روبوت راح للدكتور، قال له: أحس إن عندي فيروس! قال له الدكتور: لا تشيل هم، نسوي لك تحديث.',
  'ليش الروبوت ما يخاف؟ لأن أعصابه من حديد!',
  'سألوا الروبوت: وش أكلتك المفضلة؟ قال: شيبس... بس شيبس إلكتروني.',
];

const RULES = [
  { re: /(السلام عليكم|سلام عليكم|السلام)/, reply: () => 'وعليكم السلام ورحمة الله وبركاته، حياك الله ونورت!', gesture: 'chest' },
  { re: /(مرحبا|هلا|اهلا|هاي|صباح|مساء)/, reply: () => pick(['هلا والله ومرحبا! وش أقدر أخدمك فيه؟', 'أهلاً وسهلاً! يا هلا ومسهلا.']), gesture: 'wave' },
  { re: /(اسمك|من انت|مين انت|عرف بنفسك|وش انت|ايش انت)/, reply: () => `أنا ${ROBOT_NAME}، مساعد ذكي ثلاثي الأبعاد. أقدر أسولف معك، وأتحرك، وأساعدك في منصة الاستئذان.`, gesture: 'presentR' },
  { re: /(كيف حالك|كيفك|شلونك|وش اخبارك|عساك|كيف الحال)/, reply: () => 'الحمد لله بخير وعافية، الله يسلمك. وأنت كيف حالك؟', gesture: 'chest' },
  { re: /(بخير|تمام|الحمد لله|زين)/, reply: () => 'الحمد لله، دايم إن شاء الله!', gesture: 'nod' },
  { re: /(استئذان|استيذان|اذن|خروج|طلب|المدرسه|ولي الامر|طالب)/, reply: () => 'لتقديم طلب استئذان: افتح صفحة طلب جديد، واكتب بيانات الطالب وسبب الخروج ووقته، ثم أرسل الطلب. بيوصل للإدارة مباشرة وتقدر تتابع حالته.', gesture: 'presentL' },
  { re: /(ارقص|رقص|عرضه|ورني حركاتك|تحرك)/, reply: () => 'يالله! خلني أوريك حركاتي.', gesture: 'dance' },
  { re: /(نكته|ضحكني|نكت)/, reply: () => pick(JOKES), gesture: 'laugh' },
  { re: /(الساعه|الوقت|كم الساعه)/, reply: () => `الساعة الآن ${new Date().toLocaleTimeString('ar-SA', { hour: 'numeric', minute: '2-digit' })}.`, gesture: 'presentR' },
  { re: /(التاريخ|اليوم وش|كم التاريخ|اي يوم)/, reply: () => `اليوم ${new Date().toLocaleDateString('ar-SA', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}.`, gesture: 'presentL' },
  { re: /(شكرا|يعطيك العافيه|مشكور|تسلم|جزاك)/, reply: () => 'العفو، الله يعافيك! هذا واجبي.', gesture: 'chest' },
  { re: /(مع السلامه|باي|وداعا|في امان الله)/, reply: () => 'في أمان الله، تشرفت فيك! لا تطول علينا.', gesture: 'wave' },
  { re: /(فكر|محتار)/, reply: () => 'خلني أفكر شوي... أعتقد إن كل مشكلة لها حل، المهم نبدأ.', gesture: 'think' },
  { re: /(تحبني|حبيبي|احبك)/, reply: () => 'وأنا أحب أساعدك دايماً!', gesture: 'chest' },
  { re: /(من صنعك|من سواك|من برمجك)/, reply: () => 'صنعني فريق منصة الاستئذان، وأنا مبني بتقنية ثلاثية الأبعاد تشتغل مباشرة في المتصفح.', gesture: 'presentR' },
];

function getReply(text) {
  const n = normalize(text);
  for (const r of RULES) {
    if (r.re.test(n)) return { text: r.reply(), gesture: r.gesture };
  }
  return {
    text: pick([
      'سؤال حلو! للأسف ما عندي إجابة دقيقة عليه الحين، بس أقدر أساعدك في منصة الاستئذان أو نسولف شوي.',
      'ما فهمت عليك تماماً، ممكن توضح أكثر؟',
      'والله ما أعرف، بس أوعدك أتعلم! جرب تسألني عن طلب الاستئذان.',
    ]),
    gesture: 'shrug',
  };
}

const chatLog = document.getElementById('chatLog');
function addMsg(text, who) {
  const el = document.createElement('div');
  el.className = `msg ${who}`;
  el.textContent = text;
  chatLog.appendChild(el);
  chatLog.scrollTop = chatLog.scrollHeight;
  return el;
}

let busy = false;
async function handleUser(text) {
  text = text.trim();
  if (!text || busy) return;
  busy = true;
  addMsg(text, 'user');
  const typing = addMsg('...', 'bot typing');
  playGesture('think', 1.1);
  await new Promise((r) => setTimeout(r, 700));
  const reply = getReply(text);
  typing.remove();
  addMsg(reply.text, 'bot');
  if (reply.gesture) playGesture(reply.gesture);
  nextTalkGesture = clock.elapsedTime + (GESTURES[reply.gesture]?.dur ?? 1) + 0.5;
  busy = false;
  await speak(reply.text);
}

/* =====================================================================
 * UI wiring
 * ===================================================================== */
const form = document.getElementById('chatForm');
const input = document.getElementById('chatInput');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const v = input.value;
  input.value = '';
  handleUser(v);
});
document.querySelectorAll('[data-say]').forEach((b) => b.addEventListener('click', () => handleUser(b.dataset.say)));
document.querySelectorAll('[data-gesture]').forEach((b) => b.addEventListener('click', () => {
  const g = b.dataset.gesture;
  playGesture(g);
  const lines = {
    wave: 'هلا والله!', chest: 'حياك الله، أهلاً وسهلاً.', presentL: 'تفضل!', think: 'أمممم... خلني أفكر.',
    nod: 'أكيد!', dance: 'يا سلام عليك!',
  };
  if (lines[g]) speak(lines[g]).then(() => {});
  nextTalkGesture = clock.elapsedTime + GESTURES[g].dur;
}));

const muteBtn = document.getElementById('muteBtn');
muteBtn.addEventListener('click', () => {
  muted = !muted;
  muteBtn.textContent = muted ? '🔇' : '🔊';
  if (muted) synth?.cancel();
});

// click on the robot
const raycaster = new THREE.Raycaster();
let downPos = null;
canvas.addEventListener('pointerdown', (e) => { downPos = [e.clientX, e.clientY]; });
canvas.addEventListener('pointerup', (e) => {
  if (!downPos || Math.hypot(e.clientX - downPos[0], e.clientY - downPos[1]) > 6) return;
  const ndc = new THREE.Vector2((e.clientX / innerWidth) * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObject(robot, true)[0];
  if (!hit) return;
  let o = hit.object, onHead = false, onHand = false;
  while (o) {
    if (o === head) onHead = true;
    if (o === armR.hand || o === armL.hand) onHand = true;
    o = o.parent;
  }
  if (onHead) {
    playGesture('laugh');
    speak(pick(['ههههه! هذا يدغدغ!', 'انتبه على راسي، فيه كل أفكاري!']));
  } else if (onHand) {
    playGesture('wave');
    speak('هلا! تشرفت بالمصافحة.');
  } else {
    playGesture('surprised');
    speak(pick(['أوه! وش فيه؟', 'نعم؟ أنا هنا أسمعك.']));
  }
});

// speech recognition
const micBtn = document.getElementById('micBtn');
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SR) {
  micBtn.disabled = true;
  micBtn.title = 'التعرف على الصوت غير مدعوم في هذا المتصفح (جرب Chrome)';
} else {
  const rec = new SR();
  rec.lang = 'ar-SA';
  rec.interimResults = true;
  rec.maxAlternatives = 1;
  let finalText = '';
  rec.onresult = (e) => {
    let interim = '';
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) finalText += e.results[i][0].transcript;
      else interim += e.results[i][0].transcript;
    }
    input.value = finalText + interim;
  };
  rec.onend = () => {
    listening = false;
    micBtn.classList.remove('active');
    stopGesture('listen');
    if (finalText.trim()) {
      input.value = '';
      handleUser(finalText);
    }
  };
  rec.onerror = () => { input.placeholder = 'لم أسمعك جيداً، حاول مرة أخرى'; };
  micBtn.addEventListener('click', () => {
    if (listening) return rec.stop();
    synth?.cancel();
    finalText = '';
    listening = true;
    micBtn.classList.add('active');
    playGesture('listen');
    try { rec.start(); } catch { listening = false; micBtn.classList.remove('active'); }
  });
}

// start overlay (browsers require a user gesture before audio)
const overlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');
function onReady() {
  document.getElementById('spinner').classList.add('done');
  startBtn.disabled = false;
  startBtn.textContent = 'ابدأ المحادثة';
}
startBtn.addEventListener('click', () => {
  overlay.classList.add('hide');
  pickVoice();
  const greet = `السلام عليكم! أنا ${ROBOT_NAME}، مساعدك الذكي. حياك الله، كيف أقدر أساعدك اليوم؟`;
  addMsg(greet, 'bot');
  playGesture('wave');
  nextTalkGesture = clock.elapsedTime + 3;
  speak(greet);
});

// expose for debugging / integration
window.robot = { speak, playGesture, handleUser, GESTURES, camera, controls };
