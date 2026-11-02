// 3D character "Jazi" (جازي): a friendly floating robot head — green body, dark
// screen face with glowing eyes and an orange smile, yellow antenna and ears.
// This module only draws and animates the character; conversation, voice and the
// interface live in app.js / voice.js and talk to it through the exported API.
// (The previous character is kept in robot-mohammed.js.)
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// lighter rendering on weak devices / when asked via ?lite
const LITE = /lite/.test(location.search) || Math.min(screen.width, screen.height) < 560;
const TAU = Math.PI * 2, PI = Math.PI;
const rnd = (a, b) => a + Math.random() * (b - a);
const ease = (x) => x * x * (3 - 2 * x);
const clamp = THREE.MathUtils.clamp;

/* =====================================================================
 * Renderer / scene
 * ===================================================================== */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setClearColor(0x000000, 0); // the animated identity background is drawn by CSS behind the canvas
renderer.setPixelRatio(Math.min(window.devicePixelRatio, LITE ? 1.5 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const maxAniso = renderer.capabilities.getMaxAnisotropy();

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x041c39, 4.5, 12);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
camera.position.set(0, 1.35, 4.4);
const camTarget = new THREE.Vector3(0, 1.3, 0);

// studio lighting: soft key, cool fill, blue + green rims (identity colours)
scene.add(new THREE.HemisphereLight(0xb9d4ff, 0x0a1a30, 0.7));
const key = new THREE.DirectionalLight(0xfff6ea, 2.0);
key.position.set(1.6, 3.4, 3.2);
key.castShadow = true;
key.shadow.mapSize.set(LITE ? 1024 : 2048, LITE ? 1024 : 2048);
Object.assign(key.shadow.camera, { left: -1.2, right: 1.2, top: 2.6, bottom: 0, near: 0.5, far: 10 });
key.shadow.bias = -0.0004;
key.shadow.normalBias = 0.02;
key.shadow.radius = 5;
scene.add(key);
const fill = new THREE.DirectionalLight(0xa9c6ff, 0.7);
fill.position.set(-3, 1.8, 2.4);
scene.add(fill);
const rimBlue = new THREE.DirectionalLight(0x4fa3ff, 2.2);
rimBlue.position.set(-2.4, 2.8, -2.6);
scene.add(rimBlue);
const rimGreen = new THREE.DirectionalLight(0x2bb673, 1.4);
rimGreen.position.set(2.6, 2.2, -2.4);
scene.add(rimGreen);

function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  return t;
}

// floor with a glowing hover pad under the character
const GROUND = 0.42;
const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x061f3d, roughness: 1 }));
floor.rotation.x = -PI / 2;
floor.position.y = GROUND;
floor.receiveShadow = true;
scene.add(floor);
const pad = new THREE.Mesh(
  new THREE.CylinderGeometry(0.62, 0.66, 0.035, 96),
  new THREE.MeshPhysicalMaterial({ color: 0x0b3866, roughness: 0.3, metalness: 0.35, clearcoat: 0.6 }),
);
pad.position.y = GROUND + 0.0175;
pad.receiveShadow = true;
scene.add(pad);
const glowMat = (c, i) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: i, roughness: 0.4 });
const ringG = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.007, 8, 160), glowMat(0x2bb673, 2.2));
ringG.rotation.x = PI / 2;
ringG.position.y = GROUND + 0.036;
scene.add(ringG);
const ringY = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.004, 6, 140), glowMat(0xffbd59, 1.6));
ringY.rotation.x = PI / 2;
ringY.position.y = GROUND + 0.037;
scene.add(ringY);
// soft shadow that shrinks when the character floats higher
const contact = new THREE.Mesh(
  new THREE.CircleGeometry(0.45, 48),
  new THREE.MeshBasicMaterial({
    transparent: true, depthWrite: false,
    map: canvasTex(128, 128, (g, w) => {
      const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
      r.addColorStop(0, 'rgba(0,0,0,0.6)');
      r.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = r;
      g.fillRect(0, 0, w, w);
    }),
  }),
);
contact.rotation.x = -PI / 2;
contact.position.y = GROUND + 0.037;
scene.add(contact);

/* =====================================================================
 * Character model
 * ===================================================================== */
const C = {
  greenTop: new THREE.Color('#25b85a'),
  tealBottom: new THREE.Color('#0e94ad'),
  yellow: 0xeea21b,
  screen: '#18263a',
  eye: '#dff3d6',
  smile: '#f5a623',
};

const robot = new THREE.Group();          // whole character (floats)
scene.add(robot);
const HEAD_Y = 1.36;
const head = new THREE.Group();           // tilts, turns, squashes
head.position.y = HEAD_Y;
robot.add(head);

const mesh = (geo, mat, parent, shadow = true) => {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = shadow;
  m.receiveShadow = true;
  parent.add(m);
  return m;
};

// head: soft rounded box with a green → teal gradient (vertex colours)
const HW = 1.0, HH = 0.86, HD = 0.72;
const headGeo = new RoundedBoxGeometry(HW, HH, HD, 8, 0.27);
{
  const pos = headGeo.attributes.position, col = [];
  const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const t = clamp((pos.getY(i) / HH + 0.5) * 0.85 + (-pos.getX(i) / HW) * 0.15 + 0.05, 0, 1);
    c.copy(C.tealBottom).lerp(C.greenTop, t);
    col.push(c.r, c.g, c.b);
  }
  headGeo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
}
const shellMat = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.5, clearcoat: 0.35, clearcoatRoughness: 0.35, envMapIntensity: 0.45 });
const headMesh = mesh(headGeo, shellMat, head);

// screen face (animated canvas)
const FACE_W = 0.76, FACE_H = 0.5;
const faceCanvas = document.createElement('canvas');
faceCanvas.width = 512;
faceCanvas.height = Math.round(512 * FACE_H / FACE_W);
const fctx = faceCanvas.getContext('2d');
const faceTex = new THREE.CanvasTexture(faceCanvas);
faceTex.colorSpace = THREE.SRGBColorSpace;
faceTex.anisotropy = maxAniso;
// slightly curved screen so reflections look like glass
const faceGeo = new THREE.PlaneGeometry(FACE_W, FACE_H, 24, 8);
{
  const p = faceGeo.attributes.position;
  // follows the rounded front of the head so the edges stay just above its surface
  for (let i = 0; i < p.count; i++) p.setZ(i, -0.012 * (p.getX(i) / (FACE_W / 2)) ** 2 - 0.004 * (p.getY(i) / (FACE_H / 2)) ** 2);
}
const faceMat = new THREE.MeshPhysicalMaterial({
  map: faceTex, emissiveMap: faceTex, emissive: 0xffffff, emissiveIntensity: 1.25,
  roughness: 0.35, clearcoat: 0.4, clearcoatRoughness: 0.2, envMapIntensity: 0.12, transparent: true,
  polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
});
const face = mesh(faceGeo, faceMat, head, false);
face.position.set(0, 0.02, HD / 2 + 0.022);

// ears (yellow, glow while speaking)
const earMat = new THREE.MeshPhysicalMaterial({ color: C.yellow, roughness: 0.45, clearcoat: 0.6, emissive: C.yellow, emissiveIntensity: 0.05 });
for (const s of [-1, 1]) {
  const ear = mesh(new THREE.SphereGeometry(0.13, 32, 20), earMat, head);
  ear.scale.set(0.55, 1, 1);
  ear.position.set(s * (HW / 2 + 0.01), -0.03, 0);
}

// antenna on a springy pivot
const antenna = new THREE.Group();
antenna.position.y = HH / 2 - 0.02;
head.add(antenna);
const yellowMat = new THREE.MeshPhysicalMaterial({ color: C.yellow, roughness: 0.35, clearcoat: 0.6 });
mesh(new THREE.CylinderGeometry(0.022, 0.03, 0.2, 16), yellowMat, antenna).position.y = 0.1;
const bulbMat = new THREE.MeshPhysicalMaterial({ color: C.yellow, roughness: 0.25, clearcoat: 1, emissive: C.yellow, emissiveIntensity: 0.15 });
const bulb = mesh(new THREE.SphereGeometry(0.075, 32, 20), bulbMat, antenna);
bulb.position.y = 0.24;
const bulbLight = new THREE.PointLight(0xffbd59, 0, 0.8, 2);
bulb.add(bulbLight);

// neck base under the head, with a green light strip
const base = new THREE.Group();
base.position.y = HEAD_Y - HH / 2 - 0.12;
robot.add(base);
mesh(new RoundedBoxGeometry(0.46, 0.15, 0.34, 4, 0.06), new THREE.MeshPhysicalMaterial({ color: 0x2a93a0, roughness: 0.4, clearcoat: 0.5 }), base);
const stripMat = new THREE.MeshStandardMaterial({ color: 0x7ee08f, emissive: 0x2bb673, emissiveIntensity: 1.2 });
mesh(new RoundedBoxGeometry(0.24, 0.026, 0.02, 2, 0.01), stripMat, base, false).position.set(0, 0, 0.17);

// the screen lights the surroundings a little
const faceLight = new THREE.PointLight(0xbff5c9, 0.25, 0.8, 2);
faceLight.position.set(0, 0, 0.5);
head.add(faceLight);

/* =====================================================================
 * Face drawing
 * ===================================================================== */
const faceState = {
  blink: 0, gx: 0, gy: 0, open: 0, round: 0,
  moodK: { happy: 1, surprised: 0, think: 0, sad: 0, listen: 0 },
};

function drawFace() {
  const g = fctx, W = faceCanvas.width, H = faceCanvas.height;
  const k = faceState.moodK, f = faceState;
  g.clearRect(0, 0, W, H);
  g.save();
  g.beginPath();
  g.roundRect(4, 4, W - 8, H - 8, 92);
  g.clip();
  const bg = g.createRadialGradient(W * 0.5, H * 0.42, 10, W * 0.5, H * 0.5, W * 0.6);
  bg.addColorStop(0, '#22344b');
  bg.addColorStop(1, C.screen);
  g.fillStyle = bg;
  g.fillRect(0, 0, W, H);

  // eyes: soft glowing ovals that follow the gaze, blink and change with mood
  const ey = H * 0.42 + f.gy * 10 - k.surprised * 6 + k.sad * 6;
  const R = 46 + k.surprised * 8 + k.listen * 4 - k.think * 4;
  for (const side of [-1, 1]) {
    const ex = W / 2 + side * 82 + f.gx * 16;
    g.save();
    g.translate(ex, ey);
    const lid = Math.max(0.08, 1 - f.blink) * (1 - k.happy * 0.06);
    g.scale(1, lid * (1.08 - k.think * (side > 0 ? 0.35 : 0.05)));
    g.shadowColor = 'rgba(190,245,200,0.9)';
    g.shadowBlur = 26;
    g.fillStyle = C.eye;
    g.beginPath();
    g.ellipse(0, 0, R * 0.92, R, 0, 0, TAU);
    g.fill();
    g.shadowBlur = 0;
    g.fillStyle = 'rgba(255,255,255,0.85)';
    g.beginPath();
    g.ellipse(-R * 0.3 + f.gx * 5, -R * 0.35 + f.gy * 4, R * 0.2, R * 0.16, -0.4, 0, TAU);
    g.fill();
    g.restore();
    // sad / thinking eyelids
    const tilt = k.sad * 0.4 * -side + k.think * (side > 0 ? 0.25 : 0);
    if (k.sad + k.think > 0.05) {
      g.save();
      g.translate(ex, ey - R * (1.25 - k.sad * 0.35));
      g.rotate(tilt);
      g.fillStyle = C.screen;
      g.fillRect(-R * 1.5, -R, R * 3, R * (0.9 + k.sad * 0.3));
      g.restore();
    }
    // rosy cheeks when happy
    if (k.happy > 0.3) {
      g.fillStyle = `rgba(255,140,120,${0.18 * k.happy})`;
      g.beginPath();
      g.ellipse(ex + side * 30, ey + R + 18, 26, 12, 0, 0, TAU);
      g.fill();
    }
  }

  // mouth: orange smile that opens with the voice
  const open = f.open, round = f.round;
  const mx = W / 2 + f.gx * 8, my = H * 0.72 + f.gy * 5;
  const smile = 0.7 + k.happy * 0.4 - k.sad * 1.3 - k.think * 0.6;
  const MW = (62 + k.happy * 8 - k.surprised * 24) * (1 - 0.4 * round);
  g.save();
  g.shadowColor = 'rgba(245,166,35,0.8)';
  g.shadowBlur = 16;
  if (open < 0.08 && k.surprised < 0.5) {
    g.strokeStyle = C.smile;
    g.lineWidth = 15;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(mx - MW, my - smile * 8);
    g.quadraticCurveTo(mx, my + smile * 40, mx + MW, my - smile * 8);
    g.stroke();
  } else {
    const h = 12 + open * 46 + k.surprised * 30;
    g.fillStyle = C.smile;
    g.beginPath();
    g.moveTo(mx - MW, my - smile * 6);
    g.quadraticCurveTo(mx, my + smile * 18 - h * 0.15, mx + MW, my - smile * 6);
    g.quadraticCurveTo(mx + MW * 0.7, my + h * 1.4, mx, my + h * 1.15);
    g.quadraticCurveTo(mx - MW * 0.7, my + h * 1.4, mx - MW, my - smile * 6);
    g.fill();
    g.shadowBlur = 0;
    g.fillStyle = '#5a2a12';
    g.beginPath();
    g.ellipse(mx, my + h * 0.55, MW * 0.6, h * 0.45, 0, 0, TAU);
    g.fill();
    g.fillStyle = 'rgba(255,120,110,0.8)';
    g.beginPath();
    g.ellipse(mx, my + h * 0.82, MW * 0.32, h * 0.18, 0, 0, TAU);
    g.fill();
  }
  g.restore();

  // glass reflection
  const refl = g.createLinearGradient(0, 0, 0, H * 0.5);
  refl.addColorStop(0, 'rgba(255,255,255,0.10)');
  refl.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = refl;
  g.beginPath();
  g.ellipse(W * 0.4, H * 0.12, W * 0.38, H * 0.16, -0.12, 0, TAU);
  g.fill();
  g.restore();
  faceTex.needsUpdate = true;
}

/* =====================================================================
 * Poses & gestures
 * A pose: head rotation [x, y, z], body offset [x, y, z], squash (stretch > 0),
 * optional gaze [x, y] and mood. Gestures blend in/out over the idle pose.
 * ===================================================================== */
const idlePose = (t) => ({
  rot: [0.03 * Math.sin(t * 0.7), 0.08 * Math.sin(t * 0.29), 0.04 * Math.sin(t * 0.53)],
  pos: [0.015 * Math.sin(t * 0.4), 0.045 * Math.sin(t * 1.3), 0],
  squash: 0.012 * Math.sin(t * 2.6),
});
const hop = (p, n = 1, h = 0.18) => Math.abs(Math.sin(p * PI * n)) * h;

const GESTURES = {
  // spins in toward the visitor, hops, smiles and rocks side to side
  welcome: { dur: 3.4, mood: 'happy', pose: (t, p) => {
    const turn = 1 - ease(Math.min(1, p * 2.5));
    return { rot: [-0.05, 0.9 * turn, 0.18 * Math.sin(p * PI * 4) * (p > 0.35 ? 1 : 0)], pos: [0, hop(p, 2, 0.14), 0], squash: 0.06 * Math.sin(p * PI * 4), gaze: [0, 0] };
  } },
  wave: { dur: 2.4, mood: 'happy', pose: (t, p) => ({ rot: [0, 0, 0.2 * Math.sin(p * PI * 4)], pos: [0, hop(p, 2, 0.06), 0] }) },
  waveL: { dur: 2.4, mood: 'happy', pose: (t, p) => ({ rot: [0, 0, -0.2 * Math.sin(p * PI * 4)], pos: [0, hop(p, 2, 0.06), 0] }) },
  // leans toward the information card and looks at it (q.dir: 'down' | 'left' | 'right')
  point: { dur: 3.0, mood: 'happy', pose: (t, p, q) => q.dir === 'down'
    ? { rot: [0.32, 0, 0.08], pos: [0, -0.04, 0.08], gaze: [0, 0.85] }
    : { rot: [0.08, q.dir === 'left' ? -0.5 : 0.5, q.dir === 'left' ? 0.1 : -0.1], pos: [q.dir === 'left' ? -0.06 : 0.06, 0, 0], gaze: [q.dir === 'left' ? -0.9 : 0.9, 0.2] },
  params: () => ({ dir: 'down' }) },
  // explaining while talking: a new small lean / tilt every time
  talk: { dur: 2, pose: (t, p, q) => ({ rot: [q.nod * Math.sin(p * PI * 2), q.turn, q.tilt * Math.sin(p * PI)], pos: [0, hop(p, 1, q.lift), 0], squash: q.lift * 0.4 * Math.sin(p * PI * 2) }),
    params: () => ({ nod: rnd(0.03, 0.09), turn: rnd(-0.25, 0.25), tilt: rnd(-0.14, 0.14), lift: rnd(0, 0.05) }) },
  presentR: { dur: 2.4, mood: 'happy', pose: (t, p) => ({ rot: [0.05, -0.3, -0.12], pos: [-0.05, 0.03 * Math.sin(p * PI), 0] }) },
  presentL: { dur: 2.4, mood: 'happy', pose: (t, p) => ({ rot: [0.05, 0.3, 0.12], pos: [0.05, 0.03 * Math.sin(p * PI), 0] }) },
  both: { dur: 2.0, mood: 'happy', pose: (t, p) => ({ rot: [-0.06, 0, 0], pos: [0, hop(p, 1, 0.08), 0], squash: 0.05 * Math.sin(p * TAU) }) },
  chest: { dur: 2.4, mood: 'happy', pose: (t, p) => ({ rot: [0.25 * Math.sin(Math.min(1, p * 1.6) * PI), 0, 0.05], pos: [0, -0.03 * Math.sin(p * PI), 0] }) },
  think: { dur: 3.0, mood: 'think', pose: (t) => ({ rot: [-0.18, 0.2, 0.16 + 0.03 * Math.sin(t * 2)], pos: [0, 0.03, 0], gaze: [0.6, -0.8] }) },
  nod: { dur: 1.5, mood: 'happy', pose: (t, p) => ({ rot: [0.22 * Math.abs(Math.sin(p * PI * 2)), 0, 0] }) },
  smallNod: { dur: 1.2, pose: (t, p) => ({ rot: [0.1 * Math.sin(p * PI), 0, 0] }) },
  shake: { dur: 1.5, pose: (t, p) => ({ rot: [0.04, 0.32 * Math.sin(p * PI * 3), 0] }) },
  lookAround: { dur: 3.4, pose: (t, p) => ({ rot: [0.03, 0.5 * Math.sin(p * TAU), 0.05 * Math.sin(p * TAU)], gaze: [0.9 * Math.sin(p * TAU), 0] }) },
  adjust: { dur: 1.6, pose: (t, p) => ({ rot: [0, 0, 0.1 * Math.sin(p * PI * 6)], squash: 0.04 * Math.sin(p * PI * 6) }) },
  // happy hop with a full spin
  celebrate: { dur: 2.4, mood: 'happy', pose: (t, p) => ({ rot: [-0.1, 0, 0], spin: ease(clamp((p - 0.15) / 0.6, 0, 1)), pos: [0, hop(p, 2, 0.24), 0], squash: 0.1 * Math.sin(p * PI * 4) }) },
  dance: { dur: 5.0, mood: 'happy', pose: (t, p) => ({ rot: [0.06 * Math.sin(t * 7), 0.3 * Math.sin(t * 3.5), 0.2 * Math.sin(t * 7)], pos: [0.08 * Math.sin(t * 3.5), hop(t, 2.2, 0.08), 0], squash: 0.06 * Math.sin(t * 14) }) },
  laugh: { dur: 2.0, mood: 'happy', pose: (t, p) => ({ rot: [-0.15 + 0.04 * Math.sin(t * 22), 0, 0.05], pos: [0, hop(t, 3.5, 0.04), 0], squash: 0.05 * Math.sin(t * 22) }) },
  surprised: { dur: 1.6, mood: 'surprised', pose: (t, p) => ({ rot: [-0.12, 0, 0], pos: [0, 0.08 * Math.sin(Math.min(1, p * 2) * PI), -0.1], squash: 0.1 * Math.sin(Math.min(1, p * 3) * PI) }) },
  shrug: { dur: 2.0, mood: 'sad', pose: (t, p) => ({ rot: [0.12, 0, 0.22], pos: [0, -0.04, 0], squash: -0.04 }) },
};

let activeGesture = null;
function playGesture(name, opts = {}) {
  const g = GESTURES[name];
  if (!g) return;
  const params = { ...(g.params ? g.params() : {}), ...opts };
  activeGesture = { name, g, params, start: clock.elapsedTime, dur: opts.dur ?? g.dur };
}
function stopGesture(name) {
  if (activeGesture && (!name || activeGesture.name === name)) {
    activeGesture.dur = Math.min(activeGesture.dur, clock.elapsedTime - activeGesture.start + 0.45);
  }
}
function blend(a, b, w) {
  if (b === undefined) return a;
  if (typeof a === 'number') return a + (b - a) * w;
  if (Array.isArray(a)) return a.map((v, i) => blend(v, b[i] ?? v, w));
  const out = {};
  for (const k in a) out[k] = blend(a[k], b[k], w);
  return out;
}
function damp(a, b, k) {
  if (typeof a === 'number') return a + (b - a) * k;
  if (Array.isArray(a)) return a.map((v, i) => damp(v, b[i], k));
  const out = {};
  for (const key in a) out[key] = damp(a[key], b[key], k);
  return out;
}

/* =====================================================================
 * Lip sync: live source (ElevenLabs loudness) or letters of the spoken text
 * ===================================================================== */
const VISEME = (() => {
  const m = new Map();
  const set = (chars, open, round) => { for (const c of chars) m.set(c, [open, round]); };
  set('اآأإىعحهءةa', 0.9, 0.05);
  set('وؤضظoqu', 0.45, 0.9);
  set('يئeiy', 0.38, 0);
  set('مبفpbmfv', 0.02, 0.15);
  set('سصزشثذتدطنلركقجخغ', 0.32, 0.05);
  return m;
})();
const lip = { text: '', cursor: 0, rate: 13, source: null };
function visemeAt(i) {
  const ch = lip.text[Math.floor(i)];
  if (!ch) return [0, 0];
  if (/[\s.,،؟!:؛]/.test(ch)) return [0.05, 0];
  return VISEME.get(ch.toLowerCase()) || [0.3, 0.05];
}

/* =====================================================================
 * Behaviour state + animation loop
 * ===================================================================== */
const STATE_MOOD = { idle: 'happy', attract: 'happy', listening: 'listen', thinking: 'think', speaking: 'happy' };
const IDLE_ACTIONS = ['smallNod', 'lookAround', 'adjust', 'presentL', 'presentR', 'wave'];
const clock = new THREE.Clock();
const pointer = new THREE.Vector2();
const look = new THREE.Vector2();
const saccade = { x: 0, y: 0, next: 1 };
const lookHold = { x: 0, y: 0, until: 0 };
const spring = { x: 0, z: 0, vx: 0, vz: 0, prevRx: 0, prevRz: 0, prevY: 0 };
let state = 'idle';
let lastPointerMove = -10;
let nextBlink = 2, blinkT = -1;
let nextTalkGesture = 0;
let nextIdleAction = 5;
let lastIdleAction = '';
let cur = null, faceT = 0;

function update(dt, t) {
  let pose = idlePose(t);
  let mood = STATE_MOOD[state] || 'happy';
  let gaze = null;
  let spin = 0; // full turns are applied directly (not blended) so they never unwind
  if (state === 'listening') { pose.rot = [0.06, 0, 0.14 + 0.02 * Math.sin(t * 1.8)]; gaze = [0, 0.05]; }
  else if (state === 'thinking') { pose.rot = [-0.12, 0.15, 0.08]; gaze = [0.55 + 0.1 * Math.sin(t * 3), -0.75]; }

  if (activeGesture) {
    const el = t - activeGesture.start, p = el / activeGesture.dur;
    if (p >= 1) activeGesture = null;
    else {
      const w = THREE.MathUtils.smoothstep(el, 0, 0.35) * (1 - THREE.MathUtils.smoothstep(el, activeGesture.dur - 0.45, activeGesture.dur));
      const gp = activeGesture.g.pose(t, p, activeGesture.params);
      pose = blend(pose, { ...gp, rot: gp.rot && pose.rot.map((v, i) => (gp.rot[i] ?? 0) + (i === 1 ? 0 : v * 0.3)) }, w);
      if (w > 0.4 && activeGesture.g.mood) mood = activeGesture.g.mood;
      if (gp.gaze && w > 0.3) gaze = gp.gaze;
      if (gp.spin) spin = gp.spin;
    }
  }
  if (state === 'speaking' && !activeGesture && t > nextTalkGesture) {
    if (Math.random() < 0.8) playGesture('talk', { dur: rnd(1.4, 2.4) });
    nextTalkGesture = t + rnd(2, 3.8);
  }
  if ((state === 'idle' || state === 'attract') && !activeGesture && t > nextIdleAction) {
    if (state === 'attract') playGesture(Math.random() < 0.6 ? 'welcome' : 'wave');
    else {
      const opts = IDLE_ACTIONS.filter((a) => a !== lastIdleAction);
      lastIdleAction = opts[Math.floor(Math.random() * opts.length)];
      playGesture(lastIdleAction);
    }
    nextIdleAction = t + (state === 'attract' ? rnd(8, 12) : rnd(8, 14));
  }

  // where to look: a held target (a card), the visitor's touch, or wander
  let lx, ly;
  if (t < lookHold.until) { lx = lookHold.x; ly = lookHold.y; }
  else if (t - lastPointerMove < 4) { lx = pointer.x; ly = pointer.y; }
  else { lx = 0.3 * Math.sin(t * 0.37); ly = 0.1 * Math.sin(t * 0.23); }
  const lk = 1 - Math.exp(-dt * 4);
  look.x += (lx - look.x) * lk;
  look.y += (ly - look.y) * lk;
  pose.rot = [pose.rot[0] - look.y * 0.22, pose.rot[1] + look.x * 0.45, pose.rot[2]];

  cur = cur ? damp(cur, pose, 1 - Math.exp(-dt * 8)) : pose;
  const speakBob = faceState.open * 0.02;
  head.rotation.set(cur.rot[0] + speakBob, cur.rot[1] + spin * TAU, cur.rot[2]);
  robot.position.set(cur.pos[0], cur.pos[1], cur.pos[2]);
  const sq = cur.squash + faceState.open * 0.015;
  head.scale.set(1 - sq * 0.5, 1 + sq, 1 - sq * 0.5);
  base.rotation.set(cur.rot[0] * 0.3, cur.rot[1] * 0.5, cur.rot[2] * 0.4);
  // shadow reacts to the float height
  const s = 1 - cur.pos[1] * 1.2;
  contact.scale.set(s, s, s);
  contact.material.opacity = clamp(s, 0.3, 1);

  // antenna: lags behind head motion and springs back
  spring.vx += (-(head.rotation.x - spring.prevRx) * 30 - (robot.position.y - spring.prevY) * 18) * 1;
  spring.vz += -(head.rotation.z - spring.prevRz) * 30;
  spring.prevRx = head.rotation.x;
  spring.prevRz = head.rotation.z;
  spring.prevY = robot.position.y;
  spring.vx += (-70 * spring.x - 6 * spring.vx) * dt;
  spring.vz += (-70 * spring.z - 6 * spring.vz) * dt;
  spring.x += spring.vx * dt;
  spring.z += spring.vz * dt;
  antenna.rotation.set(clamp(spring.x, -0.6, 0.6), 0, clamp(spring.z, -0.6, 0.6));

  // lights: ears glow while talking, the antenna bulb blinks while thinking
  for (const m in faceState.moodK) faceState.moodK[m] += ((m === mood ? 1 : 0) - faceState.moodK[m]) * (1 - Math.exp(-dt * 6));
  earMat.emissiveIntensity = 0.05 + faceState.open * 0.9;
  const bulbOn = state === 'thinking' ? (Math.sin(t * 9) > 0 ? 1 : 0.2) : state === 'listening' ? 0.5 + 0.3 * Math.sin(t * 4) : 0.15 + faceState.open * 0.6;
  bulbMat.emissiveIntensity += (bulbOn * 1.6 - bulbMat.emissiveIntensity) * (1 - Math.exp(-dt * 12));
  bulbLight.intensity = bulbMat.emissiveIntensity * 0.4;
  stripMat.emissiveIntensity = 0.8 + 0.4 * Math.sin(t * 2) + faceState.open;

  // eyes: follow the look target plus small saccades
  if (t > saccade.next) { saccade.x = rnd(-0.15, 0.15); saccade.y = rnd(-0.1, 0.1); saccade.next = t + rnd(0.6, 2.8); }
  const gx = gaze ? gaze[0] : look.x * 1.2 + saccade.x;
  const gy = gaze ? gaze[1] : -look.y * 1.2 + saccade.y;
  const ek = 1 - Math.exp(-dt * 25);
  faceState.gx += (clamp(gx, -1, 1) - faceState.gx) * ek;
  faceState.gy += (clamp(gy, -1, 1) - faceState.gy) * ek;

  if (t > nextBlink && blinkT < 0) blinkT = 0;
  if (blinkT >= 0) {
    blinkT += dt;
    faceState.blink = Math.sin(Math.min(1, blinkT / 0.14) * PI);
    if (blinkT > 0.14) { blinkT = -1; faceState.blink = 0; nextBlink = t + (Math.random() < 0.2 ? 0.25 : rnd(2, 5)); }
  }

  let to = 0, tr = 0;
  const live = lip.source?.();
  if (live) [to, tr] = live;
  else if (state === 'speaking' && lip.text) {
    lip.cursor = Math.min(lip.cursor + dt * lip.rate, lip.text.length);
    const i = lip.cursor, f = i - Math.floor(i);
    const [o1, r1] = visemeAt(i), [o2, r2] = visemeAt(i + 1);
    to = (o1 + (o2 - o1) * f) * (0.85 + 0.15 * Math.sin(t * 17));
    tr = r1 + (r2 - r1) * f;
  }
  const mk = 1 - Math.exp(-dt * 28);
  faceState.open += (to - faceState.open) * mk;
  faceState.round += (tr - faceState.round) * mk;

  faceT += dt;
  if (faceT > 0.024) { faceT = 0; drawFace(); }

  camera.position.x = camBase.x + 0.04 * Math.sin(t * 0.13);
  camera.position.y = camBase.y + 0.02 * Math.sin(t * 0.17);
  camera.position.z = camBase.z;
  camera.lookAt(camTarget.x + camera.position.x * 0.5, camTarget.y, camTarget.z);
}

/* =====================================================================
 * Framing: fit the whole character (antenna to pad) inside a rectangle
 * ===================================================================== */
const camBase = new THREE.Vector3(0, 1.4, 5);
const ROBOT_H = 1.75, ROBOT_W = 1.55;
function setFrame(rect, appW, appH) {
  renderer.setSize(appW, appH, false);
  camera.aspect = appW / appH;
  const cx = rect.x + rect.w / 2, cy = rect.y + rect.h / 2;
  camera.setViewOffset(appW, appH, appW / 2 - cx, appH / 2 - cy, appW, appH);
  camera.updateProjectionMatrix();
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const dH = ROBOT_H / (2 * tanHalf * (rect.h / appH));
  const dW = ROBOT_W / (2 * tanHalf * camera.aspect * (rect.w / appW));
  camBase.z = Math.max(dH, dW);
}

const raycaster = new THREE.Raycaster();
// nx, ny in -1..1 over the canvas; returns 'head' | 'antenna' | 'body' | null
function hitTest(nx, ny) {
  raycaster.setFromCamera(new THREE.Vector2(nx, ny), camera);
  const hit = raycaster.intersectObject(robot, true)[0];
  if (!hit) return null;
  for (let o = hit.object; o; o = o.parent) {
    if (o === antenna) return 'antenna';
    if (o === head) return 'head';
  }
  return 'body';
}

let readyCb = null, firstFrame = true;
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  update(dt, clock.elapsedTime);
  renderer.render(scene, camera);
  if (firstFrame) { firstFrame = false; readyCb?.(); }
});

/* =====================================================================
 * Public API (same as before, so the rest of the app is unchanged)
 * ===================================================================== */
export const Robot = {
  onReady(cb) { if (firstFrame) readyCb = cb; else cb(); },
  setFrame,
  hitTest,
  get state() { return state; },
  /** 'idle' | 'attract' | 'listening' | 'thinking' | 'speaking' */
  setState(s) {
    if (s === state) return;
    state = s;
    if (s === 'speaking') nextTalkGesture = clock.elapsedTime + 1.2;
    if (s === 'thinking' && !activeGesture && Math.random() < 0.6) playGesture('think', { dur: 2.4 });
    if (s === 'idle' || s === 'attract') nextIdleAction = clock.elapsedTime + 4;
    if (s !== 'speaking') lip.text = '';
  },
  play: playGesture,
  stop: stopGesture,
  gestures: Object.keys(GESTURES),
  setPointer(nx, ny) { pointer.set(nx, ny); lastPointerMove = clock.elapsedTime; },
  lookAt(nx, ny, seconds = 3) { Object.assign(lookHold, { x: nx, y: ny, until: clock.elapsedTime + seconds }); },
  setLipSource(fn) { lip.source = fn; },
  speakText(text, charsPerSecond = 13) { Object.assign(lip, { text, cursor: 0, rate: charsPerSecond }); },
  syncText(charIndex) { if (charIndex >= 0) lip.cursor = charIndex; },
  canvas,
};

canvas.addEventListener('webglcontextlost', (e) => {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent('robot-context-lost'));
});
