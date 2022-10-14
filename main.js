import "./res/style/core.css";
import "./res/style/css.css";
import MyScene from "./res/js/myScene.js";
import ScrollWatcher from "./res/js/scroll.js";
import VueLike from "./vuelike.js";
import * as THREE from "three";

import { MTLLoader } from "./res/loaders/MTLLoader.js";
// import { OBJLoader } from "./res/loaders/OBJLoader.js";

function lerp(min, max, value) {
  return (max - min) * value + min;
}

function _animate() {
  requestAnimationFrame(_animate);

  // TheScene.myPlanet.rotation.y += 0.001
  // TheScene.myPlanet.rotation.z += 0.001
  // TheScene.myRing.rotation.z -= 0.0002

  TheScene.torus.rotation.y += 0.003;
  TheScene.torus.rotation.x += 0.001;

  // TheScene.rocketpivot.rotation.add(new THREE.Vector3(0.001,0.002,-0.002))
  TheScene.rocketpivot.rotation.x += 0.001;
  TheScene.rocketpivot.rotation.y += 0.002;
  TheScene.rocketpivot.rotation.z -= 0.002;

  const t = document.body.getBoundingClientRect().top;
  if (t < -TheScene.sceneBreakpoints.default[4]) {
    TheScene.camera.position.x = lerp(
      TheScene.camera.position.x,
      -TheScene.sceneVariables.camera.pos[0],
      0.2
    );
  }

  TheScene.renderer.render(TheScene.scene, TheScene.camera);
}

const TheScene = new MyScene({DEBUG:false});

$(document).ready(() => {
	const newjQueryTemplateView = new VueLike('#templateViewId', {}, TheScene);
  const TheScrollWatcher = new ScrollWatcher(TheScene, newjQueryTemplateView);
  function scrollUpdater(event) { TheScrollWatcher.update() }
  
  TheScrollWatcher.update()
  _animate();
  


  document.body.onscroll = scrollUpdater
  window.addEventListener('resize', () => {
    TheScene.OnWindowResize();
  }, false);

  document .getElementById("mainMenuModal").addEventListener("click", function (event) {
    // console.log("asd");
    document.body.classList.toggle("noScroll");
    document.getElementById("mainModal").classList.toggle("modalState");
    document
      .getElementById("mainMenuContent")
      .classList.toggle("displayNone");
  });

  document.querySelectorAll(".modalLinkButton").forEach((adom) => {
    // alert()
    adom.addEventListener("click", function (event) {
    document.body.classList.toggle("noScroll");
    document.getElementById("mainModal").classList.toggle("modalState");
      document
        .getElementById("mainMenuContent")
        .classList.toggle("displayNone");
    });
  });
});