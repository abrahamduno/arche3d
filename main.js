import "./res/style/core.css";
import "./res/style/css.css";
import MyScene from "./res/js/myScene.js";
import ScrollWatcher from "./res/js/scroll.js";
import VueLike from "./vuelike.js";
import * as THREE from "three";

// import footerhtml from "./include/footer.html";
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

const loadElement = (_file, _element) => {
  // document.querySelector('footer').append(footerhtml);

  let xhttp;
  let element = document.getElementById(_element)

  if (_file)
  {
    xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4)
      {
          if (this.status == 200) {
            element.innerHTML = this.responseText
          }
          if (this.status == 404) { element.innerHTML = `<div>404 ${_element} 404</div>` }
      }
    }
    xhttp.open("GET", _file, true)
    xhttp.send()
    return
  }

    // fetch('./include/footer.inc')
    // .then ( (r) => { return r.text();  } )
    // .then ( (s) => {
    //         p= new DOMParser();
    //         d = p.parseFromString(s,'text/html') ;
    // });
};

$(document).ready(() => {
  loadElement('./include/ourwork-1.html', "ourwork-1")
  loadElement('./include/ourwork-2.html', "ourwork-2")
  loadElement('./include/contact-form.html', "contact-form")
  loadElement('./include/where-we.html', "where-we")
  loadElement('./include/who-we.html', "who-we")
  // loadElement('./include/ceo-box.html', "ceo-box")

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