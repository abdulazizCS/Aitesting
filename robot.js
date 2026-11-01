import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { answer, ROBOT_NAME } from './brain.js';

// lighter rendering on phones / when asked via ?lite
const LITE = /lite/.test(location.search) || Math.min(innerWidth, innerHeight) < 560;

/* ---------------- page rotation (0 / 90 / 180 / 270) ---------------- */
// from ?rotate=90 in the link, otherwise the last choice on this screen
const appEl = document.getElementById('app');
let rotation = (() => {
  const q = +new URLSearchParams(location.search).get('rotate');
  if ([0, 90, 180, 270].includes(q) && location.search.includes('rotate')) return q;
  try { return +localStorage.getItem('robot-rotation') || 0; } catch { return 0; }
})();
function applyRotation() {
  document.documentElement.classList.remove('rotation-90', 'rotation-180', 'rotation-270');
  if (rotation) document.documentElement.classList.add(`rotation-${rotation}`);
  try { localStorage.setItem('robot-rotation', rotation); } catch { /* storage unavailable */ }
}
applyRotation();
// size of the (possibly rotated) app, and screen point -> app point
const appSize = () => [appEl.clientWidth, appEl.clientHeight];
function toApp(cx, cy) {
  const [w, h] = appSize();
  if (rotation === 90) return [cy, innerWidth - cx];
  if (rotation === 270) return [innerHeight - cy, cx];
  if (rotation === 180) return [w - cx, h - cy];
  return [cx, cy];
}

/* =====================================================================
 * Renderer / scene
 * ===================================================================== */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, LITE ? 1.5 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const maxAniso = renderer.capabilities.getMaxAnisotropy();

const scene = new THREE.Scene();
scene.background = makeBackgroundTexture();
scene.fog = new THREE.Fog(0x041c39, 4.5, 12);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(renderer), 0.04).texture;

const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
camera.position.set(0, 1.2, 4.4);

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 1.0, 0);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1.2;
controls.maxDistance = 7;
controls.minPolarAngle = 0.9;
controls.maxPolarAngle = 1.68;
controls.minAzimuthAngle = -1.3;
controls.maxAzimuthAngle = 1.3;
controls.rotateSpeed = 0.6;

// Studio lighting: warm key, cool fill, blue + green rims (identity colours)
scene.add(new THREE.HemisphereLight(0xa9c8ff, 0x0a1a30, 0.55));
const key = new THREE.DirectionalLight(0xfff3e4, 2.7);
key.position.set(1.7, 3.6, 3.0);
key.castShadow = true;
key.shadow.mapSize.set(LITE ? 1024 : 2048, LITE ? 1024 : 2048);
Object.assign(key.shadow.camera, { left: -1.4, right: 1.4, top: 2.3, bottom: -0.4, near: 0.5, far: 10 });
key.shadow.bias = -0.0004;
key.shadow.normalBias = 0.02;
key.shadow.radius = 4;
scene.add(key);
const fill = new THREE.DirectionalLight(0x9dbcff, 0.6);
fill.position.set(-3, 1.6, 2.2);
scene.add(fill);
const rimBlue = new THREE.DirectionalLight(0x4fa3ff, 2.4);
rimBlue.position.set(-2.4, 2.6, -2.6);
scene.add(rimBlue);
const rimGreen = new THREE.DirectionalLight(0x2bb673, 1.5);
rimGreen.position.set(2.6, 2.0, -2.4);
scene.add(rimGreen);

// Floor + stage
const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: 0x061f3d, roughness: 1 }));
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);
const stage = new THREE.Mesh(
  new THREE.CylinderGeometry(1.0, 1.04, 0.045, 96),
  new THREE.MeshPhysicalMaterial({ color: 0x0b3866, roughness: 0.32, metalness: 0.35, clearcoat: 0.6 }),
);
stage.position.y = 0.0225;
stage.receiveShadow = true;
scene.add(stage);
const glowMat = (c, i) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: i, roughness: 0.4 });
const ringG = new THREE.Mesh(new THREE.TorusGeometry(1.025, 0.007, 8, 180), glowMat(0x2bb673, 2.2));
ringG.rotation.x = Math.PI / 2;
ringG.position.y = 0.045;
scene.add(ringG);
const ringY = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.003, 6, 160), glowMat(0xffbd59, 1.6));
ringY.rotation.x = Math.PI / 2;
ringY.position.y = 0.0465;
scene.add(ringY);
const STAGE_Y = 0.045;

// soft contact shadow under the cloak (fake ambient occlusion on the stage)
const contact = new THREE.Mesh(
  new THREE.CircleGeometry(0.62, 48),
  new THREE.MeshBasicMaterial({
    transparent: true, depthWrite: false,
    map: canvasTex(128, 128, (g, w) => {
      const r = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
      r.addColorStop(0, 'rgba(0,0,0,0.75)');
      r.addColorStop(0.55, 'rgba(0,0,0,0.45)');
      r.addColorStop(1, 'rgba(0,0,0,0)');
      g.fillStyle = r;
      g.fillRect(0, 0, w, w);
    }),
  }),
);
contact.rotation.x = -Math.PI / 2;
contact.position.y = STAGE_Y + 0.001;
scene.add(contact);

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
  t.anisotropy = maxAniso;
  return t;
}

function makeBackgroundTexture() {
  return canvasTex(1024, 1024, (g, w, h) => {
    const grd = g.createRadialGradient(w * 0.5, h * 0.42, 40, w * 0.5, h * 0.5, w * 0.75);
    grd.addColorStop(0, '#0f4c86');
    grd.addColorStop(0.45, '#073363');
    grd.addColorStop(1, '#03152d');
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
    // faint grid, as in the identity
    g.strokeStyle = 'rgba(255,255,255,0.035)';
    g.lineWidth = 1;
    for (let x = 0; x <= w; x += 32) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
    for (let y = 0; y <= h; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    const gl = g.createRadialGradient(w * 0.15, h * 0.15, 0, w * 0.15, h * 0.15, w * 0.35);
    gl.addColorStop(0, 'rgba(43,182,115,0.14)');
    gl.addColorStop(1, 'rgba(43,182,115,0)');
    g.fillStyle = gl;
    g.fillRect(0, 0, w, h);
  });
}

// tileable normal map from a height function h(u, v) in [0,1]
function normalTex(size, height, strength, repeat) {
  const hgt = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) hgt[y * size + x] = height(x / size, y / size);
  const t = canvasTex(size, size, (g) => {
    const img = g.createImageData(size, size);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const at = (xx, yy) => hgt[((yy + size) % size) * size + ((xx + size) % size)];
        const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
        const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
        const l = Math.hypot(dx, dy, 1);
        const i = (y * size + x) * 4;
        img.data[i] = (-dx / l * 0.5 + 0.5) * 255;
        img.data[i + 1] = (dy / l * 0.5 + 0.5) * 255;
        img.data[i + 2] = (1 / l * 0.5 + 0.5) * 255;
        img.data[i + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
  }, false);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  return t;
}
const TAU = Math.PI * 2;
const rand = (() => { let s = 7; return () => ((s = (s * 16807) % 2147483647) / 2147483647); })();
const grain = new Float32Array(256 * 256).map(() => rand());
const twillN = normalTex(256, (u, v) => 0.5 + 0.35 * Math.sin((u + v) * TAU * 40) + 0.25 * grain[Math.floor(v * 256) * 256 + Math.floor(u * 256)], 2.2, [10, 10]);
const weaveN = normalTex(256, (u, v) => Math.sin(u * TAU * 48) * Math.sin(v * TAU * 48) * 0.5 + 0.1 * grain[Math.floor(v * 256) * 256 + Math.floor(u * 256)], 1.6, [14, 14]);

// Red & white shemagh pattern
const shemaghTex = canvasTex(256, 256, (g, w) => {
  g.fillStyle = '#f4efe9';
  g.fillRect(0, 0, w, w);
  const n = 16, s = w / n;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if ((x + y) % 2 === 0) {
        g.fillStyle = '#b8172a';
        g.fillRect(x * s + 1.5, y * s + 1.5, s - 3, s - 3);
      } else if (x % 2 === 0) {
        g.fillStyle = 'rgba(184,23,42,0.4)';
        g.fillRect(x * s + s * 0.35, y * s + s * 0.35, s * 0.3, s * 0.3);
      }
    }
  }
});
shemaghTex.wrapS = shemaghTex.wrapT = THREE.RepeatWrapping;
shemaghTex.repeat.set(7, 3);

// Embroidered gold trim (stripes along the band)
const goldTex = canvasTex(64, 64, (g, w, h) => {
  g.fillStyle = '#e2ac48';
  g.fillRect(0, 0, w, h);
  ['#a87220', '#f7d78a', '#946417', '#f2c96b', '#a87220'].forEach((c, i) => {
    g.fillStyle = c;
    g.fillRect((i + 0.5) * (w / 5.5), 0, 3, h);
  });
  for (let y = 0; y < h; y += 4) {
    g.fillStyle = 'rgba(0,0,0,0.12)';
    g.fillRect(0, y, w, 1);
  }
});
goldTex.wrapT = THREE.RepeatWrapping;
goldTex.repeat.set(1, 30);

/* =====================================================================
 * Cloth sway: the cloak hem lags behind the body and settles with a spring
 * ===================================================================== */
const clothU = { uTwist: { value: 0 }, uSway: { value: new THREE.Vector2() }, uTime: { value: 0 } };
function swayable(mat) {
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, clothU);
    sh.vertexShader = 'uniform float uTwist; uniform vec2 uSway; uniform float uTime;\n' + sh.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      float sw = pow(clamp(1.0 - position.y / 1.3, 0.0, 1.0), 2.0);
      float ang = uTwist * sw;
      float cs = cos(ang), sn = sin(ang);
      transformed.xz = mat2(cs, sn, -sn, cs) * transformed.xz;
      transformed.xz += uSway * sw;
      float ph = atan(position.x, position.z);
      transformed.xz *= 1.0 + sin(uTime * 1.9 + ph * 5.0 + position.y * 5.0) * 0.006 * sw;`,
    );
  };
  mat.customProgramCacheKey = () => 'sway';
  return mat;
}

/* =====================================================================
 * Materials
 * ===================================================================== */
const bishtProps = {
  color: 0x4a2b17, roughness: 0.88, sheen: 1, sheenColor: new THREE.Color(0x9a6a3e), sheenRoughness: 0.5,
  normalMap: twillN, normalScale: new THREE.Vector2(0.45, 0.45), side: THREE.DoubleSide,
};
const goldProps = { color: 0xffffff, map: goldTex, metalness: 0.85, roughness: 0.35, side: THREE.DoubleSide };
const shemaghProps = {
  map: shemaghTex, roughness: 0.9, sheen: 0.4, sheenColor: new THREE.Color(0xffffff),
  normalMap: weaveN, normalScale: new THREE.Vector2(0.25, 0.25), side: THREE.DoubleSide,
};
const M = {
  plastic: new THREE.MeshPhysicalMaterial({ color: 0xf3f5f8, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 }),
  joint: new THREE.MeshStandardMaterial({ color: 0x1d2129, roughness: 0.4, metalness: 0.6 }),
  bisht: new THREE.MeshPhysicalMaterial(bishtProps),
  bishtCloth: swayable(new THREE.MeshPhysicalMaterial({ ...bishtProps, vertexColors: true })),
  gold: new THREE.MeshPhysicalMaterial(goldProps),
  goldCloth: swayable(new THREE.MeshPhysicalMaterial(goldProps)),
  thobe: swayable(new THREE.MeshPhysicalMaterial({
    color: 0xe6e4de, roughness: 0.82, sheen: 0.5, sheenColor: new THREE.Color(0xffffff),
    normalMap: weaveN, normalScale: new THREE.Vector2(0.18, 0.18), side: THREE.DoubleSide, vertexColors: true,
  })),
  cuff: new THREE.MeshPhysicalMaterial({ color: 0xf2f1ec, roughness: 0.8, normalMap: weaveN, normalScale: new THREE.Vector2(0.18, 0.18) }),
  shemagh: new THREE.MeshPhysicalMaterial(shemaghProps),
  shemaghDrape: new THREE.MeshPhysicalMaterial({ ...shemaghProps, vertexColors: true }),
  agal: new THREE.MeshPhysicalMaterial({ color: 0x121016, roughness: 0.6, sheen: 0.5, sheenColor: new THREE.Color(0x333344) }),
};

/* =====================================================================
 * Geometry helpers
 * ===================================================================== */
function gridGeometry(nu, nv, fn, ao) {
  const pos = [], uv = [], idx = [], col = [];
  const p = new THREE.Vector3();
  for (let j = 0; j <= nv; j++) {
    for (let i = 0; i <= nu; i++) {
      const u = i / nu, v = j / nv;
      fn(u, v, p);
      pos.push(p.x, p.y, p.z);
      uv.push(u, 1 - v);
      if (ao) { const c = ao(u, v, p); col.push(c, c, c); }
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
  if (ao) g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// piecewise profile [[y, r], ...] sorted by y, smoothstep between points
function profile(points) {
  return (y) => {
    if (y <= points[0][0]) return points[0][1];
    for (let i = 1; i < points.length; i++) {
      if (y <= points[i][0]) {
        const [y0, r0] = points[i - 1], [y1, r1] = points[i];
        const t = (y - y0) / (y1 - y0);
        return r0 + (r1 - r0) * t * t * (3 - 2 * t);
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
robot.position.y = STAGE_Y;
scene.add(robot);
const body = new THREE.Group();
robot.add(body);

// body cross-section: wider at the shoulders, rounder at the hem
const sx = (y) => 1.0 + 0.16 * THREE.MathUtils.smoothstep(y, 0.6, 1.25);
const sz = (y) => 1.0 - 0.22 * THREE.MathUtils.smoothstep(y, 0.6, 1.25);

const bishtR = profile([[0.02, 0.35], [0.4, 0.315], [0.8, 0.27], [1.05, 0.245], [1.24, 0.232], [1.33, 0.205], [1.4, 0.13], [1.44, 0.075]]);
const thobeR = profile([[0.0, 0.215], [0.5, 0.21], [0.9, 0.195], [1.2, 0.18], [1.34, 0.13], [1.43, 0.06]]);
const Y_TOP = 1.44, Y_BOT = 0.012;
const GAP = 0.78; // front opening of the bisht (radians)

// layered folds: deep vertical folds near the hem, fading toward the shoulders
const fold = (phi, y) => {
  const k = Math.pow(THREE.MathUtils.clamp(1 - y / 1.3, 0, 1), 1.3);
  return k * (0.034 * Math.sin(phi * 7 + 1.3) + 0.02 * Math.sin(phi * 13 + 0.4 + y * 2) + 0.01 * Math.sin(phi * 23 + y * 5))
    + 0.004 * Math.sin(phi * 31 + y * 13);
};
const hemWave = (phi) => 0.012 * Math.sin(phi * 5 + 0.7) + 0.006 * Math.sin(phi * 11);
function clothPoint(p, phi, y, r) {
  p.set(Math.sin(phi) * r * sx(y), y, Math.cos(phi) * r * sz(y));
}

// thobe (white robe underneath)
mesh(gridGeometry(64, 40, (u, v, p) => {
  const y = Y_TOP - v * (Y_TOP - Y_BOT);
  const phi = u * TAU;
  const f = 0.012 * Math.sin(phi * 9) * (1 - y / 1.4) + 0.004 * Math.sin(phi * 19 + y * 6);
  clothPoint(p, phi, y, thobeR(y) * (1 + f));
}, (u, v) => {
  const y = Y_TOP - v * (Y_TOP - Y_BOT), phi = u * TAU;
  // shadowed where the open bisht overlaps, lit in the middle
  const edge = THREE.MathUtils.smoothstep(Math.abs(Math.sin(phi / 2 + Math.PI / 2)), 0.1, 0.45);
  return (0.68 + 0.32 * (1 - edge)) * (0.8 + 0.2 * THREE.MathUtils.smoothstep(y, 0, 0.4)) * (1 - 0.25 * THREE.MathUtils.smoothstep(y, 1.3, 1.44));
}), M.thobe, body);
// placket + buttons
mesh(new THREE.BoxGeometry(0.014, 0.28, 0.003), M.cuff, body).position.set(0, 1.28, thobeR(1.28) * sz(1.28) + 0.002);
for (let i = 0; i < 3; i++) {
  const b = mesh(new THREE.SphereGeometry(0.0045, 10, 8), M.joint, body, false);
  const y = 1.39 - i * 0.05;
  b.position.set(0, y, thobeR(y) * sz(y) + 0.005);
}
const collar = mesh(new THREE.CylinderGeometry(0.058, 0.064, 0.05, 32, 1, true), M.cuff, body);
collar.position.y = 1.44;

// bisht (open cloak)
const bishtPhi0 = GAP / 2, bishtPhiLen = TAU - GAP;
const bishtY = (v, phi) => Y_TOP - v * (Y_TOP - Y_BOT - hemWave(phi) * v);
mesh(gridGeometry(140, 60, (u, v, p) => {
  const phi = bishtPhi0 + u * bishtPhiLen;
  const y = bishtY(v, phi);
  clothPoint(p, phi, y, bishtR(y) * (1 + fold(phi, y)));
}, (u, v) => {
  // darker in fold valleys, under the arms and toward the hem
  const phi = bishtPhi0 + u * bishtPhiLen, y = bishtY(v, phi);
  const valley = THREE.MathUtils.smoothstep(fold(phi, y), -0.04, 0.03);
  const armpit = Math.exp(-((y - 1.05) ** 2) / 0.02) * Math.abs(Math.sin(phi)) ** 4;
  return (0.55 + 0.45 * valley) * (1 - 0.35 * armpit) * (0.85 + 0.15 * THREE.MathUtils.smoothstep(y, 0, 0.5));
}), M.bishtCloth, body);

// gold trim along both front edges (outside and folded inside)
for (const side of [1, -1]) {
  for (const [off, w] of [[0.004, 0.042], [-0.003, 0.03]]) {
    mesh(gridGeometry(3, 80, (u, v, p) => {
      const phi0 = side * (bishtPhi0 + 0.002 + u * (w / bishtR(1)));
      const y = bishtY(v, phi0);
      const r = bishtR(y);
      const phi = side * (bishtPhi0 + 0.002 + u * (w / r));
      clothPoint(p, phi, y, r * (1 + fold(phi, y)) + off);
    }), M.goldCloth, body);
  }
}
// gold hem
mesh(gridGeometry(140, 1, (u, v, p) => {
  const phi = bishtPhi0 + u * bishtPhiLen;
  const y = bishtY(1, phi) + 0.03 - v * 0.028;
  clothPoint(p, phi, y, bishtR(y) * (1 + fold(phi, y)) + 0.004);
}), M.goldCloth, body);

/* ---------------- head ---------------- */
const neck = new THREE.Group();
neck.position.set(0, 1.45, 0);
body.add(neck);
mesh(new THREE.CylinderGeometry(0.042, 0.05, 0.09, 24), M.plastic, neck).position.y = 0.03;

const head = new THREE.Group();
head.position.set(0, 0.155, 0);
neck.add(head);
const HEAD_R = 0.158;
const skull = mesh(new THREE.SphereGeometry(HEAD_R, 64, 48), M.plastic, head);
skull.scale.set(1, 0.97, 0.98);

// animated face: a canvas texture on the glass visor
const FACE = 512;
const VISOR_W = 1.95, VISOR_H = 1.42;
const faceCanvas = document.createElement('canvas');
faceCanvas.width = FACE;
faceCanvas.height = Math.round(FACE * VISOR_H / VISOR_W); // keeps circles round on the sphere
const fctx = faceCanvas.getContext('2d');
const faceTex = new THREE.CanvasTexture(faceCanvas);
faceTex.colorSpace = THREE.SRGBColorSpace;
faceTex.anisotropy = maxAniso;
const visor = mesh(
  new THREE.SphereGeometry(HEAD_R * 1.006, 64, 48, Math.PI / 2 - VISOR_W / 2, VISOR_W, Math.PI / 2 - VISOR_H / 2 + 0.06, VISOR_H),
  new THREE.MeshPhysicalMaterial({
    map: faceTex, emissiveMap: faceTex, emissive: 0xffffff, emissiveIntensity: 2.2,
    roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.03, envMapIntensity: 0.5, alphaTest: 0.5,
  }),
  head, false,
);
visor.scale.copy(skull.scale);
// the face screen lights its surroundings a little
const faceLight = new THREE.PointLight(0x5fe3ff, 0.35, 0.7, 2);
faceLight.position.set(0, -0.01, 0.24);
head.add(faceLight);

// shemagh: cap over the head + drape over the shoulders
const capEnd = (phi) => 0.86 + 0.75 * (1 - Math.cos(phi)) / 2;
mesh(gridGeometry(72, 18, (u, v, p) => {
  const phi = u * TAU;
  const th = v * capEnd(phi);
  const r = HEAD_R * 1.06 * (1 + 0.04 * Math.sin(v * Math.PI) + 0.008 * Math.sin(phi * 12) * v);
  p.set(Math.sin(phi) * Math.sin(th) * r, Math.cos(th) * r, Math.cos(phi) * Math.sin(th) * r);
}), M.shemagh, head);

const DRAPE_GAP = 1.75;
mesh(gridGeometry(80, 30, (u, v, p) => {
  const phi = DRAPE_GAP / 2 + u * (TAU - DRAPE_GAP);
  const len = 0.36 + 0.16 * Math.abs(Math.cos(phi));
  const y = 0.02 - v * len;
  const folds = (0.012 * Math.sin(phi * 10) + 0.007 * Math.sin(phi * 17 + 1)) * Math.pow(v, 1.2);
  const r = HEAD_R * 1.08 + Math.pow(v, 1.5) * 0.085 + folds;
  p.set(Math.sin(phi) * r * (1 + 0.1 * v), y, Math.cos(phi) * r * (1 - 0.12 * v));
}, (u, v) => {
  const phi = DRAPE_GAP / 2 + u * (TAU - DRAPE_GAP);
  const f = Math.sin(phi * 10) + 0.6 * Math.sin(phi * 17 + 1);
  return 1 - Math.min(0.35, v * 0.5) * (0.5 - 0.5 * f / 1.6);
}), M.shemaghDrape, head);

// agal (double black cord)
for (const [y, rad] of [[0.078, 0.15], [0.104, 0.137]]) {
  const ring = mesh(new THREE.TorusGeometry(rad, 0.012, 14, 72), M.agal, head);
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
    fingers.push({ base, mid, phase: rand() * TAU });
  });
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

function setCurl(hand, c, t) {
  const { fingers, tBase, tMid, palmN } = hand.userData;
  fingers.forEach((f, i) => {
    // each finger curls a bit more than the previous one, with a tiny idle flutter
    const k = c * (1 + i * 0.12) + 0.03 * Math.sin(t * 0.9 + f.phase);
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
  mesh(new THREE.SphereGeometry(0.078, 28, 18), M.bisht, shoulder);
  const sleeveFolds = (L, r0, r1) => gridGeometry(32, 10, (u, v, p) => {
    const phi = u * TAU, y = -v * L;
    const r = r0 + (r1 - r0) * v + 0.004 * Math.sin(phi * 6 + v * 3) * v;
    p.set(Math.sin(phi) * r, y, Math.cos(phi) * r);
  });
  mesh(sleeveFolds(L1, 0.074, 0.08), M.bisht, shoulder);
  const elbow = new THREE.Group();
  elbow.position.y = -L1;
  shoulder.add(elbow);
  mesh(new THREE.SphereGeometry(0.079, 28, 18), M.bisht, elbow);
  const sleeveLen = L2 * 0.92;
  mesh(sleeveFolds(sleeveLen, 0.078, 0.088), M.bisht, elbow);
  const cuff = mesh(new THREE.TorusGeometry(0.087, 0.008, 8, 48), M.gold, elbow);
  cuff.position.y = -sleeveLen;
  cuff.rotation.x = Math.PI / 2;
  mesh(new THREE.CylinderGeometry(0.034, 0.038, 0.07, 20), M.cuff, elbow).position.y = -L2 + 0.03;
  const wrist = new THREE.Group();
  wrist.position.y = -L2;
  elbow.add(wrist);
  const hand = buildHand(side);
  wrist.add(hand);
  return { side, shoulder, elbow, wrist, hand };
}
const armR = buildArm(-1);
const armL = buildArm(1);

// two-bone IK: shoulder -> elbow -> wrist, elbow bent toward the pole vector
const _d = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Vector3(), _t = new THREE.Vector3();
const _q = new THREE.Quaternion(), _pole = new THREE.Vector3();
function solveArm(arm, target, pole, wrist, curl, t) {
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
  setCurl(arm.hand, curl, t);
}

/* =====================================================================
 * Face drawing
 * ===================================================================== */
const face = {
  blink: 0, gx: 0, gy: 0, open: 0, round: 0,
  moodK: { happy: 1, surprised: 0, think: 0, sad: 0 },
};
const CYAN = '#5fe3ff';
const scanlines = (() => {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 4;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(0,0,0,0.22)';
  g.fillRect(0, 0, 4, 1);
  return fctx.createPattern(c, 'repeat');
})();

function drawFace() {
  const g = fctx, S = FACE;
  const k = face.moodK;
  g.setTransform(1, 0, 0, faceCanvas.height / S, 0, 0);
  g.clearRect(0, 0, S, S);
  g.save();
  g.beginPath();
  g.roundRect(14, 22, S - 28, S - 50, [200, 200, 230, 230]);
  g.clip();
  const bg = g.createRadialGradient(S * 0.5, S * 0.42, 20, S * 0.5, S * 0.5, S * 0.62);
  bg.addColorStop(0, '#0c1522');
  bg.addColorStop(1, '#020306');
  g.fillStyle = bg;
  g.fillRect(0, 0, S, S);

  // eyes
  const eyeY = 226 - k.surprised * 6 + k.sad * 6;
  const R = 52 + k.surprised * 8 - k.think * 4;
  for (const ex of [168, 344]) {
    g.save();
    g.translate(ex + face.gx * 8, eyeY + face.gy * 6);
    const lidOpen = Math.max(0.06, 1 - face.blink) * (1 - k.happy * 0.08);
    g.scale(1, lidOpen);
    g.shadowColor = CYAN;
    g.shadowBlur = 30;
    g.beginPath();
    g.arc(0, 0, R, 0, TAU);
    g.fillStyle = CYAN;
    g.fill();
    g.shadowBlur = 0;
    const ix = face.gx * 12, iy = face.gy * 10;
    const ig = g.createRadialGradient(ix, iy, 4, ix, iy, R * 0.76);
    ig.addColorStop(0, '#1b4f80');
    ig.addColorStop(0.7, '#0c2748');
    ig.addColorStop(1, '#06132a');
    g.beginPath();
    g.arc(ix, iy, R * 0.74, 0, TAU);
    g.fillStyle = ig;
    g.fill();
    // iris ring detail
    g.strokeStyle = 'rgba(95,227,255,0.25)';
    g.lineWidth = 2;
    g.beginPath();
    g.arc(ix, iy, R * 0.5, 0, TAU);
    g.stroke();
    g.fillStyle = '#ffffff';
    g.beginPath();
    g.arc(ix - R * 0.26, iy - R * 0.28, R * 0.17, 0, TAU);
    g.fill();
    g.globalAlpha = 0.7;
    g.beginPath();
    g.arc(ix + R * 0.28, iy + R * 0.26, R * 0.07, 0, TAU);
    g.fill();
    g.globalAlpha = 1;
    g.restore();

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

  // mouth: open = jaw opening, round = lip rounding (و / ض)
  const open = face.open, round = face.round;
  const smile = 0.6 + k.happy * 0.5 - k.sad * 1.1 - k.think * 0.5;
  const W = (54 + k.happy * 10 - k.surprised * 18) * (1 - 0.42 * round) * (1 + open * 0.06);
  const top = smile * 12 * (1 - round) - open * 10 * (0.4 + round * 0.6);
  const bot = top + 6 + open * 58 + smile * 14 * (1 - round) + k.surprised * 26;
  g.save();
  g.translate(256 + face.gx * 4, 350 + k.sad * 6);
  g.shadowColor = CYAN;
  g.shadowBlur = 22;
  g.beginPath();
  g.moveTo(-W, 0);
  g.bezierCurveTo(-W * 0.5, top * 1.5, W * 0.5, top * 1.5, W, 0);
  g.bezierCurveTo(W * 0.55, bot * 1.35, -W * 0.55, bot * 1.35, -W, 0);
  g.closePath();
  g.fillStyle = CYAN;
  g.fill();
  if (open > 0.1 || k.surprised > 0.5) {
    g.shadowBlur = 0;
    const s = 0.74;
    g.beginPath();
    g.moveTo(-W * s, 3);
    g.bezierCurveTo(-W * s * 0.5, top * 1.5 + 9, W * s * 0.5, top * 1.5 + 9, W * s, 3);
    g.bezierCurveTo(W * s * 0.55, bot * 1.15, -W * s * 0.55, bot * 1.15, -W * s, 3);
    g.closePath();
    g.fillStyle = '#072035';
    g.fill();
    // tongue glow at the bottom of the open mouth
    if (open > 0.35) {
      g.fillStyle = 'rgba(95,227,255,0.45)';
      g.beginPath();
      g.ellipse(0, bot * 0.92, W * 0.32, 5 + open * 6, 0, Math.PI, 0);
      g.fill();
    }
  }
  g.restore();

  // screen texture + glass reflection
  g.fillStyle = scanlines;
  g.fillRect(0, 0, S, S);
  const refl = g.createLinearGradient(0, 30, 0, 200);
  refl.addColorStop(0, 'rgba(255,255,255,0.10)');
  refl.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = refl;
  g.beginPath();
  g.ellipse(230, 110, 170, 70, -0.15, 0, TAU);
  g.fill();
  g.restore();

  faceTex.needsUpdate = true;
}

/* =====================================================================
 * Poses & gestures
 * ===================================================================== */
const PI = Math.PI;
const mirrorArm = (a) => a && ({ t: [-a.t[0], a.t[1], a.t[2]], w: [a.w[0], -a.w[1], -a.w[2]], c: a.c, pole: [-a.pole[0], a.pole[1], a.pole[2]] });
const restR = (t) => ({ t: [-0.29, 0.745 + 0.004 * Math.sin(t * 1.6), 0.045 + 0.006 * Math.sin(t * 0.4)], w: [0, 0, 0], c: 0.32, pole: [-0.4, -0.3, -1] });

function idlePose(t) {
  // slow weight shift from one leg to the other
  const shift = Math.sin(t * 0.33);
  return {
    r: restR(t),
    l: mirrorArm(restR(t + 0.7)),
    head: [0.03 + 0.015 * Math.sin(t * 0.7), 0.06 * Math.sin(t * 0.29), 0.025 * Math.sin(t * 0.53) - shift * 0.02],
    body: [0.005 * Math.sin(t * 1.6), 0.03 * Math.sin(t * 0.21), 0.012 * shift],
    bounce: 0,
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
function damp(a, b, k) {
  if (typeof a === 'number') return a + (b - a) * k;
  if (Array.isArray(a)) return a.map((v, i) => damp(v, b[i], k));
  const out = {};
  for (const key in a) out[key] = damp(a[key], b[key], k);
  return out;
}

/* =====================================================================
 * Lip sync: letters of the spoken text are mapped to mouth shapes
 * ===================================================================== */
const VISEME = (() => {
  const m = new Map();
  const set = (chars, open, round) => { for (const c of chars) m.set(c, [open, round]); };
  set('اآأإىعحهءةa', 0.9, 0.05);           // open vowels / throat letters
  set('وؤضظoqu', 0.45, 0.9);                // rounded lips
  set('يئeiy', 0.38, 0);                   // spread lips
  set('مبفpbmfv', 0.02, 0.15);             // lips closed
  set('سصزشثذتدطنلركقجخغ', 0.32, 0.05);  // other consonants
  return m;
})();
const lip = { text: '', cursor: 0, rate: 13 };
function visemeAt(i) {
  const ch = lip.text[Math.floor(i)];
  if (!ch) return [0, 0];
  if (/[\s.,،؟!:؛]/.test(ch)) return [0.05, 0];
  return VISEME.get(ch.toLowerCase()) || [0.3, 0.05];
}

/* =====================================================================
 * Interaction state
 * ===================================================================== */
const clock = new THREE.Clock();
const pointer = new THREE.Vector2(0, 0);
const look = new THREE.Vector2(0, 0);
const saccade = { x: 0, y: 0, next: 1 };
let lastPointerMove = 0;
let speaking = false;
let nextBlink = 2, blinkT = -1;
let nextTalkGesture = 0;
let nextIdleAction = 8;
let listening = false;
const cloth = { twist: 0, tv: 0, sway: new THREE.Vector2(), sv: new THREE.Vector2(), prevY: 0, prevZ: 0, prevX: 0 };

window.addEventListener('pointermove', (e) => {
  const [x, y] = toApp(e.clientX, e.clientY), [w, h] = appSize();
  pointer.set((x / w) * 2 - 1, -(y / h) * 2 + 1);
  lastPointerMove = clock.elapsedTime;
});

/* =====================================================================
 * Animation loop
 * ===================================================================== */
const headWorld = new THREE.Vector3();
const bubbleEl = document.getElementById('bubble');
let cur = null;

function update(dt, t) {
  let pose = idlePose(t);
  let mood = 'happy';
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

  if (speaking && !activeGesture && t > nextTalkGesture) {
    playGesture(TALK_GESTURES[Math.floor(Math.random() * TALK_GESTURES.length)], 1.6 + Math.random() * 0.8);
    nextTalkGesture = t + 2.2 + Math.random() * 1.8;
  }
  if (!speaking && !activeGesture && !listening && t > nextIdleAction) {
    const opts = ['nod', 'presentL', 'waveL', 'think', 'shake'];
    if (Math.random() < 0.5) playGesture(opts[Math.floor(Math.random() * opts.length)]);
    nextIdleAction = t + 8 + Math.random() * 8;
  }

  // look at the pointer, or wander when idle
  const idleLook = t - lastPointerMove > 4;
  const lx = idleLook ? 0.5 * Math.sin(t * 0.37) : pointer.x;
  const ly = idleLook ? 0.25 * Math.sin(t * 0.23) : pointer.y;
  const k = 1 - Math.exp(-dt * 4);
  look.x += (lx - look.x) * k;
  look.y += (ly - look.y) * k;
  pose.head = [pose.head[0] - look.y * 0.18 + face.open * 0.025, pose.head[1] + look.x * 0.42, pose.head[2]];

  cur = cur ? damp(cur, pose, 1 - Math.exp(-dt * 8)) : pose;

  solveArm(armR, cur.r.t, cur.r.pole, cur.r.w, cur.r.c, t);
  solveArm(armL, cur.l.t, cur.l.pole, cur.l.w, cur.l.c, t + 2);
  neck.rotation.set(cur.head[0] * 0.35, cur.head[1] * 0.3, cur.head[2] * 0.3);
  head.rotation.set(cur.head[0] * 0.65, cur.head[1] * 0.7, cur.head[2] * 0.7);
  body.rotation.set(cur.body[0], cur.body[1], cur.body[2]);
  body.position.y = cur.bounce;
  const breath = 1 + 0.007 * Math.sin(t * 1.6);
  body.scale.set(breath, 1, breath);

  // cloth: the hem lags behind body turns and tilts, then springs back
  cloth.twist -= (body.rotation.y - cloth.prevY) * 0.9;
  cloth.sway.x -= (body.rotation.z - cloth.prevZ) * 0.5;
  cloth.sway.y += (body.rotation.x - cloth.prevX) * 0.5;
  cloth.prevY = body.rotation.y;
  cloth.prevZ = body.rotation.z;
  cloth.prevX = body.rotation.x;
  cloth.tv += (-55 * cloth.twist - 5 * cloth.tv) * dt;
  cloth.twist += cloth.tv * dt;
  cloth.sv.x += (-45 * cloth.sway.x - 4.5 * cloth.sv.x) * dt;
  cloth.sv.y += (-45 * cloth.sway.y - 4.5 * cloth.sv.y) * dt;
  cloth.sway.addScaledVector(cloth.sv, dt);
  clothU.uTwist.value = cloth.twist;
  clothU.uSway.value.copy(cloth.sway);
  clothU.uTime.value = t;

  // face mood
  for (const m in face.moodK) face.moodK[m] += ((m === mood ? 1 : 0) - face.moodK[m]) * (1 - Math.exp(-dt * 6));

  // eyes: follow the pointer plus small quick saccades
  if (t > saccade.next) {
    saccade.x = (Math.random() - 0.5) * 0.35;
    saccade.y = (Math.random() - 0.5) * 0.25;
    saccade.next = t + 0.6 + Math.random() * 2.2;
  }
  const gx = gaze ? gaze[0] : look.x * 1.2 + saccade.x;
  const gy = gaze ? gaze[1] : -look.y * 1.2 + saccade.y;
  const ek = 1 - Math.exp(-dt * 25);
  face.gx += (THREE.MathUtils.clamp(gx, -1, 1) - face.gx) * ek;
  face.gy += (THREE.MathUtils.clamp(gy, -1, 1) - face.gy) * ek;

  if (t > nextBlink && blinkT < 0) blinkT = 0;
  if (blinkT >= 0) {
    blinkT += dt;
    face.blink = Math.sin(Math.min(1, blinkT / 0.15) * PI);
    if (blinkT > 0.15) {
      blinkT = -1;
      face.blink = 0;
      nextBlink = t + (Math.random() < 0.2 ? 0.25 : 2 + Math.random() * 3.5);
    }
  }

  // lip sync: walk through the text, blending the current and next letter shapes
  let to = 0, tr = 0;
  if (voice.conv && voice.mode === 'speaking') {
    // ElevenLabs voice: drive the jaw from the real output loudness,
    // and lip rounding from how much energy sits in the low frequencies
    to = Math.min(1, voice.conv.getOutputVolume() * 3.2);
    const fq = voice.conv.getOutputByteFrequencyData();
    if (fq) {
      let lo = 0, hi = 0;
      for (let i = 2; i < 12; i++) lo += fq[i];
      for (let i = 24; i < 64; i++) hi += fq[i];
      tr = THREE.MathUtils.clamp((lo / 10 - hi / 40) / 160, 0, 0.8) * to;
    }
  } else if (speaking && lip.text) {
    lip.cursor = Math.min(lip.cursor + dt * lip.rate, lip.text.length);
    const i = lip.cursor, f = i - Math.floor(i);
    const [o1, r1] = visemeAt(i), [o2, r2] = visemeAt(i + 1);
    to = (o1 + (o2 - o1) * f) * (0.85 + 0.15 * Math.sin(t * 17));
    tr = r1 + (r2 - r1) * f;
  }
  const mk = 1 - Math.exp(-dt * 28);
  face.open += (to - face.open) * mk;
  face.round += (tr - face.round) * mk;
  drawFace();

  if (bubbleEl.classList.contains('show')) {
    head.getWorldPosition(headWorld);
    headWorld.y += 0.3;
    headWorld.project(camera);
    const [aw, ah] = appSize();
    bubbleEl.style.left = `${(headWorld.x * 0.5 + 0.5) * aw}px`;
    bubbleEl.style.top = `${Math.max(150, (-headWorld.y * 0.5 + 0.5) * ah)}px`;
  }
}

/* =====================================================================
 * Layout: keep the robot framed beside / above the chat panel
 * ===================================================================== */
const panelEl = document.querySelector('.panel');
const topbarEl = document.querySelector('.topbar');
function resize() {
  const [w, h] = appSize();
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  // narrow or portrait app: chat panel goes to the bottom (see #app.stacked in style.css)
  const mobile = w <= 760 || h > w * 1.15;
  appEl.classList.toggle('stacked', mobile);
  // offset sizes ignore the CSS rotation
  const pr = { width: panelEl.offsetWidth, height: panelEl.offsetHeight };
  const top = topbarEl.offsetHeight;
  let ox = 0, oy, visW = w, visH;
  if (mobile) {
    visH = h - pr.height - top - 20;
    oy = (pr.height + 10 - top) / 2;
  } else {
    visW = w - pr.width - 36;
    visH = h - top;
    ox = -(pr.width + 18) / 2; // panel sits on the left in RTL
    oy = -top / 2;
  }
  camera.setViewOffset(w, h, ox, oy, w, h);
  camera.updateProjectionMatrix();
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const dH = (2.0 / 0.9) / (2 * tanHalf * (visH / h));
  const dW = (1.1 / 0.9) / (2 * tanHalf * camera.aspect * (visW / w));
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
  update(dt, clock.elapsedTime);
  controls.update();
  renderer.render(scene, camera);
  if (firstFrame) {
    firstFrame = false;
    onReady();
  }
});

/* =====================================================================
 * Speech (text-to-speech)
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

const statusEl = document.getElementById('status');
const statusText = document.getElementById('statusText');
function setStatus(text, busy) {
  statusText.textContent = text;
  statusEl.classList.toggle('busy', !!busy);
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
  setStatus('يتحدث', true);
  nextTalkGesture = Math.max(nextTalkGesture, clock.elapsedTime + 0.6);

  return new Promise((resolve) => {
    const finish = () => {
      if (token !== speakToken) return resolve();
      speaking = false;
      lip.text = '';
      setStatus('جاهز');
      bubbleTimer = setTimeout(() => bubbleEl.classList.remove('show'), 1800);
      resolve();
    };
    const est = 900 + text.length * 72;
    if (!synth || muted) {
      // no audio: still animate the mouth over the estimated duration
      lip.text = text;
      lip.cursor = 0;
      lip.rate = text.length / (est / 1000);
      setTimeout(finish, est);
      return;
    }
    const parts = text.split(/(?<=[.!؟?،,])\s+/).filter(Boolean);
    let remaining = parts.length;
    const safety = setTimeout(finish, est * 2.5);
    parts.forEach((part) => {
      const u = new SpeechSynthesisUtterance(part);
      u.lang = arVoice?.lang || 'ar-SA';
      if (arVoice) u.voice = arVoice;
      u.rate = 1;
      u.pitch = 1.1;
      u.onstart = () => {
        lip.text = part;
        lip.cursor = 0;
        lip.rate = 13;
      };
      // re-sync the mouth with the voice at each word
      u.onboundary = (e) => { if (e.charIndex >= 0) lip.cursor = e.charIndex; };
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
 * Human voice: ElevenLabs conversational agent
 * The agent (voice, knowledge base, prompt) lives on ElevenLabs; the page
 * only needs its public id. Set ELEVEN_AGENT_ID to '' to use the browser
 * voice and the local answers in brain.js instead.
 * ===================================================================== */
const ELEVEN_AGENT_ID = 'agent_6001m674rt3gf7dbchmh7r82f8qa';
const ELEVEN_CLIENT = 'https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.28.0/+esm';
const VOICE_ENABLED = !!ELEVEN_AGENT_ID && !/localvoice/.test(location.search);
const IDLE_END_MS = 75000; // end the session when nobody talks, to save credits
const voice = { conv: null, mode: 'listening', connecting: false, failed: false, idle: 0, echo: '', nextGesture: null };

function resetIdle() {
  clearTimeout(voice.idle);
  voice.idle = setTimeout(() => {
    if (!voice.conv) return;
    stopVoice();
    addMsg('انتهت المحادثة لعدم النشاط. اضغط زر الميكروفون لنبدأ من جديد.', 'bot');
  }, IDLE_END_MS);
}

async function startVoice() {
  if (voice.conv || voice.connecting) return !!voice.conv;
  voice.connecting = true;
  synth?.cancel();
  setStatus('يتصل...', true);
  try {
    const { Conversation } = await import(ELEVEN_CLIENT);
    voice.conv = await Conversation.startSession({
      agentId: ELEVEN_AGENT_ID,
      connectionType: 'webrtc',
      onConnect: () => {
        micBtn.classList.add('active');
        setStatus('يستمع', true);
      },
      onDisconnect: () => {
        voice.conv = null;
        voice.mode = 'listening';
        speaking = false;
        clearTimeout(voice.idle);
        micBtn.classList.remove('active');
        bubbleEl.classList.remove('show');
        setStatus('جاهز');
      },
      onError: (message) => console.warn('ElevenLabs:', message),
      onModeChange: ({ mode }) => {
        voice.mode = mode;
        speaking = mode === 'speaking';
        setStatus(speaking ? 'يتحدث' : 'يستمع', true);
        clearTimeout(bubbleTimer);
        if (speaking) {
          // open the answer with a gesture that fits the question
          playGesture(voice.nextGesture || (chatLog.children.length < 2 ? 'wave' : 'presentR'));
          voice.nextGesture = null;
          nextTalkGesture = clock.elapsedTime + 2.5;
        } else {
          bubbleTimer = setTimeout(() => bubbleEl.classList.remove('show'), 2500);
        }
        resetIdle();
      },
      onMessage: ({ message, role, source }) => {
        if (!message) return;
        const fromUser = (role || source) === 'user';
        if (fromUser) {
          if (message.trim() === voice.echo.trim()) return; // typed message already shown
          addMsg(message, 'user');
          voice.nextGesture = answer(message).gesture;
          playGesture('think', 1.2);
        } else {
          addMsg(message, 'bot');
          bubbleEl.textContent = message;
          bubbleEl.classList.add('show');
        }
        voice.echo = '';
        resetIdle();
      },
    });
    if (muted) voice.conv.setVolume({ volume: 0 });
    resetIdle();
    return true;
  } catch (err) {
    console.warn('ElevenLabs voice unavailable:', err);
    voice.conv = null;
    voice.failed = true;
    setStatus('جاهز');
    const why = /permission|notallowed/i.test(String(err?.name || err))
      ? 'لم يُسمح باستخدام الميكروفون، لذلك سأكمل بالكتابة وصوت المتصفح.'
      : 'تعذّر الاتصال بالصوت البشري، لذلك سأكمل بصوت المتصفح.';
    addMsg(why, 'bot');
    return false;
  } finally {
    voice.connecting = false;
  }
}

async function stopVoice() {
  clearTimeout(voice.idle);
  const c = voice.conv;
  voice.conv = null;
  await c?.endSession();
}

/* =====================================================================
 * Conversation
 * ===================================================================== */
const chatLog = document.getElementById('chatLog');
function addMsg(text, who, src) {
  const el = document.createElement('div');
  el.className = `msg ${who}`;
  el.textContent = text;
  if (src) {
    const a = document.createElement('a');
    a.className = 'src';
    a.href = src;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = 'المصدر: موقع جامعة جازان ↗';
    el.appendChild(a);
  }
  chatLog.appendChild(el);
  chatLog.scrollTop = chatLog.scrollHeight;
  return el;
}

let busy = false;
async function handleUser(text) {
  text = text.trim();
  if (!text || busy) return;
  if (voice.conv) {
    addMsg(text, 'user');
    voice.echo = text;
    voice.nextGesture = answer(text).gesture;
    playGesture('think', 1.2);
    voice.conv.sendUserMessage(text);
    resetIdle();
    return;
  }
  busy = true;
  synth?.cancel();
  addMsg(text, 'user');
  const typing = addMsg('...', 'bot typing');
  setStatus('يفكر', true);
  playGesture('think', 1.2);
  await new Promise((r) => setTimeout(r, 650));
  const reply = answer(text);
  typing.remove();
  addMsg(reply.text, 'bot', reply.src);
  if (reply.gesture) playGesture(reply.gesture);
  nextTalkGesture = clock.elapsedTime + (GESTURES[reply.gesture]?.dur ?? 1) + 0.5;
  busy = false;
  await speak(reply.speak);
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
const GESTURE_LINES = {
  wave: 'هلا والله!', chest: 'حياك الله في جامعة جازان.', presentL: 'تفضل!', think: 'أمممم... خلني أفكر.',
  nod: 'أكيد!', dance: 'يا سلام! فرحتنا بطلاب جامعة جازان.',
};
document.querySelectorAll('[data-gesture]').forEach((b) => b.addEventListener('click', () => {
  const g = b.dataset.gesture;
  playGesture(g);
  if (GESTURE_LINES[g] && !voice.conv) speak(GESTURE_LINES[g]);
  nextTalkGesture = clock.elapsedTime + GESTURES[g].dur;
}));

document.getElementById('rotateBtn').addEventListener('click', () => {
  rotation = (rotation + 90) % 360;
  applyRotation();
  resize();
});

const muteBtn = document.getElementById('muteBtn');
muteBtn.addEventListener('click', () => {
  muted = !muted;
  document.getElementById('muteIcon').textContent = muted ? '🔇' : '🔊';
  if (muted) synth?.cancel();
  voice.conv?.setVolume({ volume: muted ? 0 : 1 });
});

// clicking on the robot
const raycaster = new THREE.Raycaster();
let downPos = null;
canvas.addEventListener('pointerdown', (e) => { downPos = [e.clientX, e.clientY]; });
canvas.addEventListener('pointerup', (e) => {
  if (!downPos || Math.hypot(e.clientX - downPos[0], e.clientY - downPos[1]) > 6) return;
  const [x, y] = toApp(e.clientX, e.clientY), [w, h] = appSize();
  const ndc = new THREE.Vector2((x / w) * 2 - 1, -(y / h) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  const hit = raycaster.intersectObject(robot, true)[0];
  if (!hit) return;
  let o = hit.object, onHead = false, onHand = false;
  while (o) {
    if (o === head) onHead = true;
    if (o === armR.hand || o === armL.hand) onHand = true;
    o = o.parent;
  }
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  if (voice.conv) {
    // in a live voice conversation, react with motion only
    playGesture(onHead ? 'laugh' : onHand ? 'wave' : 'surprised');
  } else if (onHead) {
    playGesture('laugh');
    speak(pick(['ههههه! هذا يدغدغ!', 'انتبه على راسي، فيه كل معلومات الجامعة!']));
  } else if (onHand) {
    playGesture('wave');
    speak('هلا! تشرفت بالمصافحة.');
  } else {
    playGesture('surprised');
    speak(pick(['أوه! وش تبي تعرف عن الجامعة؟', 'نعم؟ أنا هنا أسمعك.']));
  }
});

// speech recognition
const micBtn = document.getElementById('micBtn');
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let srToggle = null;
if (!SR) {
  if (!VOICE_ENABLED) micBtn.disabled = true;
  micBtn.title = 'التعرف على الصوت غير مدعوم في هذا المتصفح (جرّب Chrome أو Edge)';
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
    setStatus('جاهز');
    if (finalText.trim()) {
      input.value = '';
      handleUser(finalText);
    }
  };
  rec.onerror = (e) => {
    input.placeholder = e.error === 'not-allowed' ? 'اسمح للمتصفح باستخدام الميكروفون' : 'لم أسمعك جيداً، حاول مرة أخرى';
  };
  srToggle = () => {
    if (listening) return rec.stop();
    synth?.cancel();
    finalText = '';
    listening = true;
    micBtn.classList.add('active');
    setStatus('يستمع', true);
    playGesture('listen');
    try { rec.start(); } catch { listening = false; micBtn.classList.remove('active'); setStatus('جاهز'); }
  };
}
micBtn.addEventListener('click', () => {
  if (VOICE_ENABLED && !voice.failed) {
    if (voice.conv) stopVoice();
    else startVoice();
  } else srToggle?.();
});

// start overlay (browsers require a user gesture before audio)
const overlay = document.getElementById('startOverlay');
const startBtn = document.getElementById('startBtn');
function onReady() {
  document.getElementById('spinner').classList.add('done');
  startBtn.disabled = false;
  startBtn.classList.add('big-start');
  startBtn.textContent = 'ابدأ المحادثة';
}
startBtn.addEventListener('click', async () => {
  overlay.classList.add('hide');
  pickVoice();
  // human voice via ElevenLabs; the agent greets the visitor itself
  if (VOICE_ENABLED && await startVoice()) return;
  const greet = `السلام عليكم! أنا ${ROBOT_NAME}، المساعد الذكي لجامعة جازان. اسألني عن الكليات، أو القبول، أو خدمات الجامعة.`;
  addMsg(greet, 'bot');
  playGesture('wave');
  nextTalkGesture = clock.elapsedTime + 3;
  speak(greet);
});

// exposed for debugging / integration
window.robot = { speak, playGesture, handleUser, GESTURES, camera, controls, face, voice, startVoice, stopVoice };
