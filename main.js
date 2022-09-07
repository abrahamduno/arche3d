import "./style/core.css";
import "./style/css.css";
import MyScene from "./myScene.js";
// import * as THREE from "three";

import { MTLLoader } from "./res/loaders/MTLLoader.js";
// import { OBJLoader } from "./res/loaders/OBJLoader.js";

//#########################
//##### SEGUNDA PARTE #####
function lerp(min, max, value) {
  return (max - min) * value + min;
}
const TheScene = new MyScene({DEBUG:true});
function watchScroll() {
  const t = document.body.getBoundingClientRect().top;
  if (TheScene.DEBUG) { console.log("scroll distance from top:",t) }

  if (t < -TheScene.sceneBreakpoints.default[4]) {
    TheScene.camera.rotation.set(...TheScene.sceneVariables.camera.rot)

    TheScene.camera.position.z = -TheScene.sceneVariables.camera.pos[2] + 45;
    TheScene.camera.position.y = TheScene.sceneVariables.camera.pos[1] + 1;
  } else {
    TheScene.camera.position.z = TheScene.sceneVariables.camera.pos[2] + t * -0.01;

    // ROTATE UP | SCREEN 1
    if (t < -TheScene.sceneBreakpoints.default[0]) {
      TheScene.camera.rotation.x = TheScene.sceneVariables.camera.rot[0];
    } else {
      TheScene.camera.rotation.x =
        TheScene.sceneVariables.camera.rot[0] -
        (t + TheScene.sceneBreakpoints.default[0]) * 0.00005;
    }

    // ELEVATE UP | SCREEN 2
    if (t < -TheScene.sceneBreakpoints.default[0]) {
      if (t > -TheScene.sceneBreakpoints.default[2]) {
        TheScene.camera.position.y =
          TheScene.sceneVariables.camera.pos[1] -
          (t + TheScene.sceneBreakpoints.default[0]) * 0.0065;
      } else {
        TheScene.camera.position.y =
          TheScene.sceneVariables.camera.pos[1] -
          (-TheScene.sceneBreakpoints.default[2] +
            TheScene.sceneBreakpoints.default[0]) *
            0.0065;
      }
    } else {
      TheScene.camera.position.y = TheScene.sceneVariables.camera.pos[1];
    }

    if (t < -TheScene.sceneBreakpoints.default[1]) {
      TheScene.camera.position.x =
        -TheScene.sceneVariables.camera.pos[0] -
        (t + TheScene.sceneBreakpoints.default[1]) * 0.03;
    } else {
      TheScene.camera.position.x = -TheScene.sceneVariables.camera.pos[0];
    }

    if (t < -TheScene.sceneBreakpoints.default[2]) {
      TheScene.camera.position.x =
        -TheScene.sceneVariables.camera.pos[0] -
        (t + TheScene.sceneBreakpoints.default[2]) * 0.25 -
        (t + TheScene.sceneBreakpoints.default[1]) * 0.03;
      if (t > -TheScene.sceneBreakpoints.default[3]) {
        TheScene.camera.rotation.y =
          TheScene.sceneVariables.camera.rot[1] +
          (t + TheScene.sceneBreakpoints.default[2]) * 0.0002;
      } else {
        TheScene.camera.rotation.y =
          TheScene.sceneVariables.camera.rot[1] +
          (-TheScene.sceneBreakpoints.default[3] +
            TheScene.sceneBreakpoints.default[2]) *
            0.0002;
      }
    } else {
      // TheScene.camera.position.x = -TheScene.sceneVariables.camera.pos[0]
      TheScene.camera.rotation.y = TheScene.sceneVariables.camera.rot[1];
    }
  }
}
document.body.onscroll = watchScroll;
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
watchScroll();
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
