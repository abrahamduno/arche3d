import * as THREE from "three";
import { OBJLoader } from "../loaders/OBJLoader.js";
import { getInitialState } from "./get_initial_state.js";
import { loadStar } from "./load_stars.js";
import { newtorus, newring } from "./load_space_objects.js";

//No se si es necesario
import { MTLLoader } from "../loaders/MTLLoader.js";

const BASE_URL = "http://localhost:3000/";
// const BASE_ASSET_URL = "./dist/res"
const BASE_ASSET_URL = "./res";

export default class MyScene {
  constructor(
    _initialState = {
      DEBUG: false,
      DOM: {},
      Objects: {},
      sceneBreakpoints: {},
      sceneVariables: {},
    }
  ) {
    const initialState = getInitialState();

    this.DEBUG = _initialState.DEBUG;
    this.DOM = {
      ...initialState.DOM,
      ..._initialState.DOM,
    };
    this.Objects = {
      ...initialState.Objects,
      ..._initialState.Objects,
    };
    this.sceneBreakpoints = {
      ...initialState.sceneBreakpoints,
      ..._initialState.sceneBreakpoints,
    };
    this.sceneVariables = {
      ...initialState.sceneVariables,
      ..._initialState.sceneVariables,
    };

    this.init();
  }

  init() {
    this.setWindowRatio();
    this.setWindowSettings();
    this.setScene();

    this.loadSkeletonObjects();
    this.loadWireframeObjects();

    Array(200)
      .fill()
      .forEach(() => {
        this.loadAStar();
      });
    this.loadTexts();
    this.loadSpaceObjects();

    this.setRenderer();
    this.renderer.render(this.scene, this.camera);
  }

  setWindowRatio() {
    this.DOM.ratio = window.innerWidth / window.innerHeight;
    let platformKey = this.DOM.ratio > 1 ? "desktop" : "mobile";
    this.sceneBreakpoints.default = this.sceneBreakpoints[platformKey];
    this.sceneVariables.camera.fov =
      this.sceneVariables.camera.fovSettings[platformKey];
  }

  setWindowSettings() {
    this.DOM.height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
  }
  OnWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
  setScene() {
    this.scene = new THREE.Scene();

    const spaceTexture = new THREE.TextureLoader().load("res/img/bg.jpg");
    this.scene.background = spaceTexture;

    let camera = new THREE.PerspectiveCamera(
      this.sceneVariables.camera.fov,
      this.DOM.ratio,
      this.sceneVariables.camera.minReach,
      this.sceneVariables.camera.maxReach
    );
    camera.position.set(...this.sceneVariables.camera.pos);
    camera.rotation.set(...this.sceneVariables.camera.rot);
    this.camera = camera;
  }
  setRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      // antialias: true,
      canvas: document.querySelector("#bg"),
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(window.innerWidth, window.innerHeight)
  }
  onLoadProgress(xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;

      if (this.DEBUG) {
        console.log("loading objects...");
        let loadTarget = xhr.currentTarget.responseURL.replace(BASE_URL, "");
        console.log(
          loadTarget,
          Math.round(percentComplete, 2) + "% downloaded"
        );
      }
    }
  }
  loadSkeletonObjects() {
    for (const property in this.Objects) {
      // console.log(`${property}: ${object[property]}`);
      new OBJLoader().setPath(this.Objects[property].path).load(
        this.Objects[property].file,
        (object) => {
          if (
            this.Objects[property].wireframe ||
            this.Objects[property].wiremat
          ) {
            object.traverse(function (child) {
              if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial({
                  color: 0xffffff,
                  wireframe: true,
                });
              }
            });
          }
          object.position.set(
            this.Objects[property].pos[0],
            this.Objects[property].pos[1],
            this.Objects[property].pos[2]
          );
          object.rotation.set(
            this.Objects[property].rot[0],
            this.Objects[property].rot[1],
            this.Objects[property].rot[2]
          );
          object.scale.set(
            this.Objects[property].scale[0],
            this.Objects[property].scale[1],
            this.Objects[property].scale[2]
          );

          this.scene.add(object);

          if (this.Objects[property].wiremat) {
            new OBJLoader().setPath(this.Objects[property].path).load(
              this.Objects[property].file,
              (object) => {
                object.position.set(...this.Objects[property].pos);
                object.rotation.set(...this.Objects[property].rot);
                object.scale.set(...this.Objects[property].scale);
                this.scene.add(object);
              },
              this.onLoadProgress
            );
          }
        },
        this.onLoadProgress
      );
    }
  }

  loadWireframeObjects() {
    new OBJLoader().setPath(BASE_ASSET_URL + "/models/").load(
      "ready land.obj",
      (object) => {
        object.traverse(function (child) {
          if (child.isMesh) {
            child.material = new THREE.MeshBasicMaterial({
              color: 0xffffff,
              wireframe: true,
              linewidth: 3,
            });
          }
        });
        object.position.set(0, -0.85, -35);
        object.scale.set(15, 15, 15);
        this.scene.add(object);
      },
      this.onLoadProgress
    );

    new OBJLoader()
      // .setMaterials( materials )
      .setPath(BASE_ASSET_URL + "/models/")
      .load(
        "ready land.obj",
        (object) => {
          object.traverse(function (child) {
            if (child.isMesh) {
              child.material = new THREE.MeshBasicMaterial({ color: 0x000000 });
            }
          });

          // object.castshadow = - 1;
          object.position.set(0, -0.85 - 0.025, -35);
          // object.position.x = - 3;
          object.scale.set(15, 15, 15);
          this.scene.add(object);
        },
        this.onLoadProgress
      );
  }
  loadSpaceObjects() {
    // ## planet ##
    let thePlanet = {
      pos: [-200, 120, -300],
      rot: [0, 0.5, 1],
      sphere: [32, 48, 48],
    };
    const planetTexture = new THREE.TextureLoader().load("res/img/444.jpg");
    this.myPlanet = new THREE.Mesh(
      new THREE.SphereGeometry(...thePlanet.sphere),
      new THREE.MeshBasicMaterial({ map: planetTexture })
    );
    this.myPlanet.position.set(...thePlanet.pos);
    this.myPlanet.rotation.set(...thePlanet.rot);
    this.scene.add(this.myPlanet);
    // ## end planet ##

    // ## ring ##
    // let theRing = {
    //   pos: [...thePlanet.pos],
    //   // pos: [-200, 120, -300],
    //   rot: [2.4, 0, 3],
    //   torus: [45, 8, 12, 64],
    //   scale: [1, 1, 0.02],
    // };
    // const geometry = new THREE.TorusGeometry(...theRing.torus);
    // const ringTexture = new THREE.TextureLoader().load("res/img/998.jpg");
    // this.myRing = new THREE.Mesh(
    //   geometry,
    //   new THREE.MeshBasicMaterial({ map: ringTexture })
    // );

    let addring = newring();
    this.myRing = addring;

    // this.myRing.position.set(...theRing.pos);
    // this.myRing.rotation.set(...theRing.rot);
    // this.myRing.scale.set(...theRing.scale);
    this.scene.add(this.myRing);
    // ## end ring ##

    // ## rocket ##
    let theRocketRef = { ...this.Objects.rocket };
    let theRocketCenter = {
      pos: [theRocketRef.pos[0] - 20, theRocketRef.pos[1], theRocketRef.pos[2]],
      rot: [0, 0.5, 1],
      box: [35, 35, 35],
    };

    this.rocketpivot = new THREE.Group();
    const rocketgeometry = new THREE.BoxGeometry(...theRocketCenter.box);
    let rocketMesh = new THREE.Mesh(
      rocketgeometry,
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    );
    let rocketSolid = new THREE.Mesh(
      rocketgeometry,
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    this.rocketpivot.add(rocketMesh);
    this.rocketpivot.add(rocketSolid);
    this.rocketpivot.position.set(...theRocketCenter.pos);
    this.scene.add(this.rocketpivot);
    // ## end rocket ##

    //Torus
    let addtorus = newtorus();
    this.torus = addtorus;
    this.scene.add(this.torus);
  }
  loadTexts() {
    const textloader = new THREE.FontLoader();
    const textmaterials = [
      new THREE.MeshBasicMaterial({ color: 0xffffff }), // front
      new THREE.MeshBasicMaterial({ color: 0x020226 }), // side
    ];
    textloader.load(
      "./res/style/fonts/Montserrat ExtraBold_Regular.json",
      (font) => {
        {
          const geometry = new THREE.TextGeometry("SOMOS UN ", {
            font: font,
            size: 1,
            height: 1,
          });
          const textMesh1 = new THREE.Mesh(geometry, textmaterials);
          textMesh1.position.set(-4, 1.25, 10);
          this.scene.add(textMesh1);
        }
        {
          const geometry = new THREE.TextGeometry("UNIVERSO CREATIVO", {
            font: font,
            size: 2,
            height: 1,
          });
          const textMesh1 = new THREE.Mesh(geometry, textmaterials);
          textMesh1.position.set(-16, -0.7, 9);
          this.scene.add(textMesh1);
        }
        {
          const geometry = new THREE.TextGeometry("¿Qué hacemos por ti?", {
            font: font,
            size: 12,
            height: 1,
          });
          const textMesh1 = new THREE.Mesh(geometry, textmaterials);
          textMesh1.rotation.x = 0.6;
          textMesh1.position.set(180, 80, 30);
          this.scene.add(textMesh1);
        }
        {
          const geometry = new THREE.TextGeometry("Archenautas", {
            font: font,
            size: 22,
            height: 5,
          });
          const textMesh1 = new THREE.Mesh(geometry, textmaterials);
          textMesh1.rotation.x = 0.5;
          textMesh1.position.set(1200, 67, 55);
          this.scene.add(textMesh1);
        }
      }
    );
  }
  loadAStar() {
    let newStars = loadStar();
    // let stars = this.scene.add(newStars);
    this.scene.add(newStars);
  }
}
