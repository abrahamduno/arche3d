import "./style/core.css";
import "./style/css.css";
import MyScene from "./myScene.js";
import ScrollWatcher from "./scroll.js";
// import * as THREE from "three";

import { MTLLoader } from "./res/loaders/MTLLoader.js";
// import { OBJLoader } from "./res/loaders/OBJLoader.js";

//#########################
//##### SEGUNDA PARTE #####
function lerp(min, max, value) {
  return (max - min) * value + min;
}
const TheScene = new MyScene({DEBUG:true});
const TheScrollWatcher = new ScrollWatcher(TheScene);

function scrollUpdater(event)
{
  TheScrollWatcher.update()
}
document.body.onscroll = scrollUpdater
function _animate() {
  requestAnimationFrame(_animate);

  // TheScene.myPlanet.rotation.y += 0.001
  // TheScene.myPlanet.rotation.z += 0.001
  // TheScene.myRing.rotation.z -= 0.0002

  TheScene.torus.rotation.y += 0.003;
  TheScene.torus.rotation.x += 0.001;

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
TheScrollWatcher.update()
_animate();

window.addEventListener("load", function (event)
{
  document .getElementById("mainMenuModal").addEventListener("click", function (event) {
    document.body.classList.toggle("noScroll");
    console.log("asd");
    document.getElementById("mainModal").classList.toggle("modalState");
    document
      .getElementById("mainMenuContent")
      .classList.toggle("displayNone");
  });

  document.querySelectorAll(".modalLinkButton").forEach((adom) => {
    adom.addEventListener("click", function (event) {
      // alert()
      document.getElementById("mainModal").classList.toggle("modalState");
      document
        .getElementById("mainMenuContent")
        .classList.toggle("displayNone");
    });
  });
}
);
