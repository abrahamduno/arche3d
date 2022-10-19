import * as THREE from "three";
function newtorus() {
  let theTorus = {
    pos: [750, 80, 55],
    torus: [50, 15, 8, 32],
  };

  const torusgeometry = new THREE.TorusGeometry(...theTorus.torus);
  const torusmaterial = new THREE.MeshBasicMaterial({
    color: 0x1b0f3f,
    wireframe: true,
  });

  let torus = new THREE.Mesh(torusgeometry, torusmaterial);
  torus.position.set(...theTorus.pos);
  //Esto no deberia ir aca
  // this.torus = new THREE.Mesh(torusgeometry, torusmaterial);
  // this.torus.position.set(...theTorus.pos);

  return torus;
}

// pos: [-200, 120, -300],
// rot: [0, 0, 0],
// SphereGeometry: [32, 48, 48],

function newring(refObject) {
  let theRing = {
    pos: refObject.pos,
    rot: [2.4, 0, -2],
    torus: [45, 8, 12, 64],
    scale: [1, 1, 0.02],
  };
  const geometry = new THREE.TorusGeometry(...theRing.torus);
  const ringTexture = new THREE.TextureLoader().load("res/img/DEGRADE--ANILLOS-PLANETA.jpg");
  let myRing = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ map: ringTexture })
  );

  myRing.position.set(...theRing.pos);
  myRing.rotation.set(...theRing.rot);
  myRing.scale.set(...theRing.scale);

  return myRing;
}

export { newtorus, newring };
