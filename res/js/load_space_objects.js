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

function newring() {
  let theRing = {
    pos: [-200, 120, -300],
    rot: [2.4, 0, 3],
    torus: [45, 8, 12, 64],
    scale: [1, 1, 0.02],
  };
  const geometry = new THREE.TorusGeometry(...theRing.torus);
  const ringTexture = new THREE.TextureLoader().load("res/img/998.jpg");
  let myRing = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ map: ringTexture })
  );

  myRing.position.set(...theRing.pos);
  myRing.rotation.set(...theRing.rot);
  myRing.scale.set(...theRing.scale);

  return myRing;
}

function newplanet() {
  let thePlanet = {
    pos: [-200, 120, -300],
    rot: [0, 0.5, 1],
    sphere: [32, 48, 48],
  };
  const planetTexture = new THREE.TextureLoader().load("res/img/444.jpg");
  let myPlanet = new THREE.Mesh(
    new THREE.SphereGeometry(...thePlanet.sphere),
    new THREE.MeshBasicMaterial({ map: planetTexture })
  );
  myPlanet.position.set(...thePlanet.pos);
  myPlanet.rotation.set(...thePlanet.rot);

  return myPlanet;
}
export { newtorus, newring, newplanet };
