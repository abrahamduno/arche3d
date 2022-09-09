import * as THREE from "three";
function loadStar() {
  let geometry;

  // vertice count randomization to generate random "sphere-like" shapes
  let longitudeCount = parseInt(Math.random() * 5);
  let latitudeCount = parseInt(Math.random() * 5);
  let radiusCount = 0.5 + parseFloat(Math.random());
  if (latitudeCount > 2) {
    radiusCount *= radiusCount;
  }
  if (latitudeCount > 3) {
    radiusCount *= radiusCount;
  }
  geometry = new THREE.SphereGeometry(
    radiusCount,
    longitudeCount,
    latitudeCount
  );

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true,
  });

  const star = new THREE.Mesh(geometry, material);
  star.rotation.x = THREE.MathUtils.randFloatSpread(10);
  star.rotation.y = THREE.MathUtils.randFloatSpread(10);
  star.rotation.z = THREE.MathUtils.randFloatSpread(10);

  // array of random positions in x,y,z of range (500)
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(500));
  // .map(() => THREE.MathUtils.randFloatSpread(50));

  star.position.set(x * 2, y + 200, z);

  return star;
}

export { loadStar };
