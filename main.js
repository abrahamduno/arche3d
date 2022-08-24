import './style/core.css';
import * as THREE from 'three';

import { MTLLoader } from './res/loaders/MTLLoader.js';
import { OBJLoader } from './res/loaders/OBJLoader.js';

const BASE_URL = "http://localhost:3000/"
// const BASE_ASSET_URL = "./dist/res"
const BASE_ASSET_URL = "./res"

class MyScene {
  getInitialState()
  {
    return {
      DOM: {
      },
      Objects: {
        sat: {
          file: 'sat.obj',
          path: BASE_ASSET_URL+'/models/',
          wireframe: true,
          pos: [85, 35, 45],
          rot: [0, 0.7, 1],
          scale: [3, 3, 3],
        },
        rocket: {
          file: 'rocket.obj',
          path: BASE_ASSET_URL+'/models/',
          wiremat: true,
          pos: [1280, 92, 35],
          rot: [0.5, 1.5, 0],
          scale: [18, 18, 18],
        },


        // sat2: {
        //   file: 'sat.obj',
        //   path: BASE_ASSET_URL+'/models/',
        //   wireframe: true,
        //   pos: [390, 275, 250],
        //   rot: [0, 1, 0],
        //   scale: [3, 3, 3],
        // },
        // satFill: {
        //   file: 'sat.obj',
        //   path: BASE_ASSET_URL+'/models/',
        //   wireframe: false,
        //   pos: [40, 25, 45],
        //   rot: [0, 1, 0],
        //   scale: [3,3,3],
        // },
      },
      sceneBreakpoints: {
        default: [],
        mobile: [1600, 2400, 4200, 5500, 8500],
        desktop: [2400, 3500, 8500, 11000, 15450],
      },
      sceneVariables: {
        cameraFov: 75,
        cameraMinReach: 0.1,
        cameraMaxReach: 1000,
        // cameraPosX: -3,
        cameraPosX: 0,
        cameraPosY: 0,
        // cameraPosY: 5,
        cameraPosZ: 9,
        cameraRotX: 0.5,
        // cameraRotX: -0.5,
        cameraRotY: 0,
        cameraRotZ: 0,
      },
    }
  }

  constructor(_initialState =
    {
      DEBUG: false,
      DOM: {},
      Objects: {},
      sceneBreakpoints: {},
      sceneVariables: {},
    }
  )
  {
    const initialState = this.getInitialState()

    this.DEBUG = _initialState.DEBUG
    this.DOM = {
      ...initialState.DOM,
      ..._initialState.DOM,
    }
    this.Objects = {
      ...initialState.Objects,
      ..._initialState.Objects,
    }
    this.sceneBreakpoints = {
      ...initialState.sceneBreakpoints,
      ..._initialState.sceneBreakpoints,
    }
    this.sceneVariables = {
      ...initialState.sceneVariables,
      ..._initialState.sceneVariables,
    }

    this.init()
  }

  init()
  {
    this.setWindowSettings()
    this.setScene()

    this.loadSkeletonObjects()
    this.loadWireframeObjects()
    this.loadObjects()

    Array(200).fill().forEach(() => { this.loadStars() });
    this.loadTexts()
    this.loadPlanet()

    this.setRenderer()
    this.renderer.render(this.scene, this.camera)
  }

  setWindowSettings()
  {
    this.DOM.ratio = window.innerWidth / window.innerHeight

    if (this.DOM.ratio > 1)
    {
      this.sceneBreakpoints.default = this.sceneBreakpoints.desktop
    } else {
      this.sceneBreakpoints.default = this.sceneBreakpoints.mobile
    }
    
    this.DOM.height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight, 
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )

  }
  setScene()
  {
    this.scene = new THREE.Scene()

    const spaceTexture = new THREE.TextureLoader().load('res/img/bg.jpg');
    this.scene.background = spaceTexture;
    
    let camera = new THREE.PerspectiveCamera(
      this.sceneVariables.cameraFov,
      this.DOM.ratio,
      this.sceneVariables.cameraMinReach,
      this.sceneVariables.cameraMaxReach,
    );
    camera.position.set(
      this.sceneVariables.cameraPosX,
      this.sceneVariables.cameraPosY,
      this.sceneVariables.cameraPosZ,
    );
    camera.rotation.set(
      this.sceneVariables.cameraRotX,
      this.sceneVariables.cameraRotY,
      this.sceneVariables.cameraRotZ,
    );
    this.camera = camera
  }
  setRenderer()
  {
    this.renderer = new THREE.WebGLRenderer({
      // antialias: true,
      canvas: document.querySelector('#bg'),
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // console.log(window.innerWidth, window.innerHeight)
  }
  onLoadProgress( xhr )
  {
    if ( xhr.lengthComputable )
    {
      const percentComplete = xhr.loaded / xhr.total * 100;
      
      if (this.DEBUG)
      {
        let loadTarget = xhr.currentTarget.responseURL.replace(BASE_URL, "")
        console.log( loadTarget, Math.round( percentComplete, 2 ) + '% downloaded' );
      }
    }
  }
  loadSkeletonObjects()
  {
    for (const property in this.Objects) {
      // console.log(`${property}: ${object[property]}`);
      new OBJLoader()
        .setPath( this.Objects[property].path )
        .load( this.Objects[property].file, ( object ) => {
          if (this.Objects[property].wireframe || this.Objects[property].wiremat)
          {
            object.traverse( function ( child ) {
              if ( child.isMesh ) {
                child.material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
              }
            } );
          }
          object.position.set(
            this.Objects[property].pos[0],
            this.Objects[property].pos[1],
            this.Objects[property].pos[2],
          )
          object.rotation.set(
            this.Objects[property].rot[0],
            this.Objects[property].rot[1],
            this.Objects[property].rot[2],
          )
          object.scale.set(
            this.Objects[property].scale[0],
            this.Objects[property].scale[1],
            this.Objects[property].scale[2],
          )
          
          this.scene.add( object );



          if (this.Objects[property].wiremat)
          {
            new OBJLoader()
            .setPath( this.Objects[property].path )
            .load( this.Objects[property].file, ( object ) => {
              object.position.set(
                this.Objects[property].pos[0],
                this.Objects[property].pos[1],
                this.Objects[property].pos[2],
              )
              object.rotation.set(
                this.Objects[property].rot[0],
                this.Objects[property].rot[1],
                this.Objects[property].rot[2],
              )
              object.scale.set(
                this.Objects[property].scale[0],
                this.Objects[property].scale[1],
                this.Objects[property].scale[2],
              )
              
              this.scene.add( object );

            }, this.onLoadProgress );
          }


        }, this.onLoadProgress );
    }
  }

  loadWireframeObjects()
  {
    new OBJLoader()
    .setPath( BASE_ASSET_URL+'/models/' )
    .load( 'ready land.obj', ( object ) => {
        object.traverse( function ( child ) {
          if ( child.isMesh ) {
            child.material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true, linewidth: 3})
          }
        } );

      object.position.y = -0.85;
      object.position.z = - 35;
      object.scale.x = 15;
      object.scale.y = 15;
      object.scale.z = 15;
      this.scene.add( object );

    }, this.onLoadProgress );

    new OBJLoader()
      // .setMaterials( materials )
      .setPath( BASE_ASSET_URL+'/models/' )
      .load( 'ready land.obj', ( object ) => {
          object.traverse( function ( child ) {
            if ( child.isMesh ) {
              child.material = new THREE.MeshBasicMaterial({color: 0x000000})
            }
          } );

        // object.castshadow = - 1;
        object.position.y = -0.85 - 0.025;
        object.position.z = - 35;
        // object.position.x = - 3;
        object.scale.x = 15;
        object.scale.y = 15;
        object.scale.z = 15;
        this.scene.add( object );

      }, this.onLoadProgress );
  }
  loadObjects()
  {
  }
  loadPlanet()
  {
    const normalTexture = new THREE.TextureLoader().load('res/img/normal.jpg');

    // const jeffTexture = new THREE.TextureLoader().load('res/img/gradient.png');

    // const jeff = new THREE.Mesh(new THREE.BoxGeometry(4, 18, 4), new THREE.MeshBasicMaterial({ map: jeffTexture }));

    // this.scene.add(jeff);

    // Planet
    let planetPosition = [-150, 120, -200]
    let planetRotation = [0, 0.5, 1]

    const spaceTexture = new THREE.TextureLoader().load('res/img/bg.jpg');
    const planetTexture = new THREE.TextureLoader().load('res/img/444.jpg');
    // const planetnormalTexture = new THREE.TextureLoader().load('res/img/normal.jpg');

    this.myPlanet = new THREE.Mesh(
      new THREE.SphereGeometry(72, 48, 48),
      new THREE.MeshBasicMaterial({
        map: planetTexture,
        // normalMap: normalTexture,
      })
    );

    this.scene.add(this.myPlanet);

    this.myPlanet.position.set(planetPosition[0],planetPosition[1],planetPosition[2]);
    this.myPlanet.rotation.set(planetRotation[0],planetRotation[1],planetRotation[2]);


    // Torus

    const geometry = new THREE.TorusGeometry(100, 15, 12, 64);
    const material = new THREE.MeshStandardMaterial({ color: 0x180C3B, wireframe: true });
    // const material = new THREE.MeshStandardMaterial({ color: 0x200B3D, wireframe: true });
    const ringTexture = new THREE.TextureLoader().load('res/img/998.jpg');
    this.myRing = new THREE.Mesh(geometry, 
      new THREE.MeshBasicMaterial({
        map: ringTexture,
        // normalMap: planetnormalTexture,
      })
    );
    // this.myRing.position.y = 35
    // this.myRing.position.z = 30
    this.myRing.position.set(planetPosition[0],planetPosition[1],planetPosition[2]);
    this.myRing.rotation.set(2.4, 0, 3);
    this.myRing.scale.z = 0.05
    this.scene.add(this.myRing);


    let theRocketSettings = this.Objects.rocket
    this.rocketpivot = new THREE.Group();
    // rocket center
    {
      const rocketgeometry = new THREE.BoxGeometry(35, 35, 35);
      let rocketMesh = new THREE.Mesh(rocketgeometry,new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true}))
      let rocketSolid = new THREE.Mesh(rocketgeometry,new THREE.MeshBasicMaterial({color: 0x000000}))
      // this.myRing.position.set(planetPosition[0],planetPosition[1],planetPosition[2]);
      // this.myRing.rotation.set(2.4, 0, 3);
      // this.myRing.scale.z = 0.05
      // this.scene.add(this.myRing);

      this.rocketpivot.add( rocketMesh );
      this.rocketpivot.add( rocketSolid );
      this.rocketpivot.position.set(theRocketSettings.pos[0]-20, theRocketSettings.pos[1], theRocketSettings.pos[2])
      // this.rocketpivot.position.set(theRocketSettings.pos[0], theRocketSettings.pos[1], theRocketSettings.pos[2])
      // this.rocketpivot.add( sq3 );
      // this.rocketpivot.add( sq4 );
      this.scene.add(this.rocketpivot);
    }


    const sq2 = new THREE.Mesh(
      new THREE.BoxGeometry(16,16,16),
      new THREE.MeshBasicMaterial({color: 0x777777, wireframe: true})
    );
    sq2.rotation.y = 0.5
    sq2.rotation.z = 1
    const sq3 = new THREE.Mesh(
      new THREE.SphereGeometry(6, 4, 4),
      new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
    );
    const sq4 = new THREE.Mesh(
      new THREE.SphereGeometry(4, 4, 4),
      new THREE.MeshBasicMaterial({color: 0x000000})
    );
    const pivot = new THREE.Group();
    pivot.position.x = 42
    pivot.position.y = 0
    pivot.position.z = -22
    pivot.add( sq2 );
    pivot.add( sq3 );
    pivot.add( sq4 );
    this.scene.add(pivot);




    const moonTexture = new THREE.TextureLoader().load('res/img/Moon_texture.jpg');

    this.myMoon = new THREE.Mesh(
      new THREE.SphereGeometry(18, 48, 48),
      new THREE.MeshBasicMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );
    this.myMoon.position.set(390, 175, 250)

    this.scene.add(this.myMoon);



    // const moonTexture = new THREE.TextureLoader().load('res/img/Moon_texture.jpg');
    // const normalTexture = new THREE.TextureLoader().load('res/img/normal.jpg');

    // const moon = new THREE.Mesh(
    //   new THREE.SphereGeometry(9, 48, 48),
    //   new THREE.MeshStandardMaterial({
    //     map: moonTexture,
    //     normalMap: normalTexture,
    //   })
    // );

    // this.scene.add(moon);
  }
  loadTexts()
  {
    {
      const textloader = new THREE.FontLoader();
      textloader.load('./style/fonts/Teko_Medium_Regular.json', (font) => {
        const geometry = new THREE.TextGeometry('UNIVERSO CREATIVO', {
            font: font,
            size: 5,
            height: 1,
            curveSegments: 10,
            bevelEnabled: false,
            bevelOffset: 0,
            bevelSegments: 1,
            bevelSize: 0.3,
            bevelThickness: 1
        });
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0x9633FF }), // front
            new THREE.MeshBasicMaterial({ color: 0x090D35 }) // side
        ];
        const textMesh1 = new THREE.Mesh(geometry, materials);
        textMesh1.position.y = -0.7
        // textMesh1.position.y = 2
        textMesh1.position.x = -13.5 - 4
        textMesh1.position.z = 9
        this.scene.add(textMesh1)
      });
    }

    {
      const textloader = new THREE.FontLoader();
      textloader.load('./style/fonts/Teko_Medium_Regular.json', (font) => {
        const geometry = new THREE.TextGeometry('SOMOS UN ', {
            font: font,
            size: 2,
            height: 1,
            curveSegments: 10,
            bevelEnabled: false,
            bevelOffset: 0,
            bevelSegments: 1,
            bevelSize: 0.3,
            bevelThickness: 1
        });
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0x9633FF }), // front
            new THREE.MeshBasicMaterial({ color: 0x090D35 }) // side
        ];
        const textMesh1 = new THREE.Mesh(geometry, materials);
        // textMesh1.rotation.y = 0.4
        textMesh1.position.y = -0.7
        // textMesh1.position.y = 2
        textMesh1.position.x = -22 - 4
        textMesh1.position.z = 11
        this.scene.add(textMesh1)
      });
    }

    {
      const textloader = new THREE.FontLoader();
      textloader.load('./style/fonts/Teko_Medium_Regular.json', (font) => {
        const geometry = new THREE.TextGeometry('¿Qué hacemos por ti?', {
            font: font,
            size: 20,
            height: 1,
            curveSegments: 10,
            bevelEnabled: false,
            bevelOffset: 0,
            bevelSegments: 1,
            bevelSize: 0.3,
            bevelThickness: 1
        });
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xffffff }), // front
            new THREE.MeshBasicMaterial({ color: 0x090D35 }) // side
        ];
        const textMesh1 = new THREE.Mesh(geometry, materials);
        // textMesh1.rotation.y = 0.4
        // 190, 75, 100
        textMesh1.rotation.x = 0.6
        textMesh1.position.x = 230
        textMesh1.position.y = 80
        textMesh1.position.z = 30
        this.scene.add(textMesh1)
      });
    }

    {
      const torusgeometry = new THREE.TorusGeometry(50, 15, 8, 32);
      const torusmaterial = new THREE.MeshBasicMaterial({color: 0x1B0F3F, wireframe: true})
      this.torus = new THREE.Mesh(torusgeometry, torusmaterial);
      // this.torus.position.y = 35
      // this.torus.position.z = 30
      this.torus.position.x = 790
      this.torus.position.y = 80
      this.torus.position.z = 55
      this.scene.add(this.torus);
    }

    {
      const textloader = new THREE.FontLoader();
      textloader.load('./style/fonts/Teko_Medium_Regular.json', (font) => {
        const geometry = new THREE.TextGeometry('Archenautas', {
            font: font,
            size: 22,
            height: 5,
            curveSegments: 10,
            bevelEnabled: false,
            bevelOffset: 0,
            bevelSegments: 1,
            bevelSize: 0.3,
            bevelThickness: 1
        });
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xffffff }), // front
            new THREE.MeshBasicMaterial({ color: 0x090D35 }) // side
        ];
        const textMesh1 = new THREE.Mesh(geometry, materials);
        // textMesh1.rotation.y = 0.4
        // 190, 75, 100
        // textMesh1.rotation.y = -1.4
        textMesh1.rotation.x = 0.5
        textMesh1.position.x = 1200
        textMesh1.position.y = 70
        textMesh1.position.z = 55
        this.scene.add(textMesh1)
      });
    }
  }
  loadStars()
  {
    let geometry
    if (false)
    // if (Math.random() > 0.5)
    {
      geometry = new THREE.BoxGeometry(2, 2, 2)
    } else {
    }
  
    let longitudeCount = parseInt(Math.random()*5)
    let latitudeCount = parseInt(Math.random()*5)
    let radiusCount = 0.5 + parseFloat(Math.random())
    if (latitudeCount > 2)
    {
      radiusCount *= radiusCount
    }
    if (latitudeCount > 3)
    {
      radiusCount *= radiusCount
    }
    geometry = new THREE.SphereGeometry(radiusCount, longitudeCount, latitudeCount);
  
  
    const material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
    
    const star = new THREE.Mesh(geometry, material);
    star.rotation.x = THREE.MathUtils.randFloatSpread(10)
    star.rotation.y = THREE.MathUtils.randFloatSpread(10)
    star.rotation.z = THREE.MathUtils.randFloatSpread(10)
  
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(500));
      // .map(() => THREE.MathUtils.randFloatSpread(50));
  
    star.position.set(x * 2, y + 200, z);
    // star.position.set((x * 3) -50, y + 250, z);
    this.scene.add(star);

  }
  
}
function lerp(min, max, value)
{
  return (max - min) * value + min
}
const TheScene = new MyScene()
function watchScroll()
{
  const t = document.body.getBoundingClientRect().top;
  // console.log(t, TheScene.camera)
  console.log(t)

  if (t < -TheScene.sceneBreakpoints.default[4])
  {

    TheScene.camera.rotation.z = TheScene.sceneVariables.cameraRotZ
    TheScene.camera.rotation.x = TheScene.sceneVariables.cameraRotX
    TheScene.camera.rotation.y = TheScene.sceneVariables.cameraRotY

    TheScene.camera.position.z = -TheScene.sceneVariables.cameraPosZ + 45
    // TheScene.camera.position.x = lerp(TheScene.camera.position.x,-TheScene.sceneVariables.cameraPosX,0.2)
    // TheScene.camera.position.x = -TheScene.sceneVariables.cameraPosX
    TheScene.camera.position.y = TheScene.sceneVariables.cameraPosY + 1

    // TheScene.camera.position.z = -TheScene.sceneVariables.cameraPosZ + 45 + (t+TheScene.sceneBreakpoints.default[4]) * -0.001
  } else {
    TheScene.camera.position.z = TheScene.sceneVariables.cameraPosZ + t * -0.01;

    // ROTATE UP | SCREEN 1
    if (t < -TheScene.sceneBreakpoints.default[0])
    {
      TheScene.camera.rotation.x = TheScene.sceneVariables.cameraRotX
    } else {
      TheScene.camera.rotation.x = TheScene.sceneVariables.cameraRotX - ((t + TheScene.sceneBreakpoints.default[0]) * 0.00005)
    }

    // ELEVATE UP | SCREEN 2
    if (t < -TheScene.sceneBreakpoints.default[0])
    {
      if (t > -TheScene.sceneBreakpoints.default[2])
      {
        TheScene.camera.position.y = TheScene.sceneVariables.cameraPosY - ((t + TheScene.sceneBreakpoints.default[0]) * 0.0065)
      } else {
        TheScene.camera.position.y = TheScene.sceneVariables.cameraPosY - ((-TheScene.sceneBreakpoints.default[2] + TheScene.sceneBreakpoints.default[0]) * 0.0065)
      }
    } else {
      TheScene.camera.position.y = TheScene.sceneVariables.cameraPosY
    }

    if (t < -TheScene.sceneBreakpoints.default[1])
    {
      TheScene.camera.position.x = -TheScene.sceneVariables.cameraPosX - ((t + TheScene.sceneBreakpoints.default[1]) * 0.03)
    } else {
      TheScene.camera.position.x = -TheScene.sceneVariables.cameraPosX
    }

    if (t < -TheScene.sceneBreakpoints.default[2])
    {
      TheScene.camera.position.x = -TheScene.sceneVariables.cameraPosX - ((t + TheScene.sceneBreakpoints.default[2]) * 0.25) - ((t + TheScene.sceneBreakpoints.default[1]) * 0.03)
      if (t > -TheScene.sceneBreakpoints.default[3])
      {
        TheScene.camera.rotation.y = TheScene.sceneVariables.cameraRotY + ((t + TheScene.sceneBreakpoints.default[2]) * 0.0002)
      } else {
        TheScene.camera.rotation.y = TheScene.sceneVariables.cameraRotY + ((-TheScene.sceneBreakpoints.default[3] + TheScene.sceneBreakpoints.default[2]) * 0.0002)
      }
    } else {
      // TheScene.camera.position.x = -TheScene.sceneVariables.cameraPosX
      TheScene.camera.rotation.y = TheScene.sceneVariables.cameraRotY
    }
  }

}
document.body.onscroll = watchScroll
function _animate()
{
  requestAnimationFrame(_animate);

  // TheScene.myPlanet.rotation.y += 0.001
  TheScene.myPlanet.rotation.z += 0.001
  TheScene.myRing.rotation.z -= 0.0002

  TheScene.torus.rotation.y += 0.003
  TheScene.torus.rotation.x += 0.001

  TheScene.rocketpivot.rotation.x += 0.001
  TheScene.rocketpivot.rotation.y += 0.002
  TheScene.rocketpivot.rotation.z -= 0.002

  const t = document.body.getBoundingClientRect().top;
  if (t < -TheScene.sceneBreakpoints.default[4])
  {
    TheScene.camera.position.x = lerp(TheScene.camera.position.x,-TheScene.sceneVariables.cameraPosX,0.2)
  }


  // TheScene.torus.position.x = 1270
  // TheScene.torus.position.y = 80
  // TheScene.torus.position.z = 55

  TheScene.renderer.render(TheScene.scene, TheScene.camera);
}
watchScroll()
_animate()

window.addEventListener('load', function(event) {
  document.getElementById("mainMenuModal").addEventListener('click', function(event) {
    document.body.classList.toggle("noScroll")
    console.log("asd")
    document.getElementById("mainModal").classList.toggle("modalState")
    document.getElementById("mainMenuContent").classList.toggle("displayNone")
  });
});










  // if (t < -TheScene.sceneBreakpoints.default[0])
  // {
  //   TheScene.camera.position.x = -3 - ( (t + TheScene.sceneBreakpoints.default[0]) * -0.05 );
  //   TheScene.camera.position.y = -0.5 + ( (t + TheScene.sceneBreakpoints.default[0]) * -0.006 );

  //   // TheScene.camera.rotation.y = (t + TheScene.sceneBreakpoints.default[0]) * -0.0002;
  //   // TheScene.camera.rotation.z = (t + TheScene.sceneBreakpoints.default[0]) * -0.00002;
  // } else {
  //   TheScene.camera.position.y = -0.5
  //   TheScene.camera.position.x = -3
  // }

  // if (t < -TheScene.sceneBreakpoints.default[1])
  // {
  //   // TheScene.camera.position.x = -3 - ( (t + TheScene.sceneBreakpoints.default[1]) * -0.05 );
  //   // TheScene.camera.position.y = -0.5 + ( (t + TheScene.sceneBreakpoints.default[1]) * -0.001 );

  //   TheScene.camera.rotation.y = (t + TheScene.sceneBreakpoints.default[1]) * -0.0002;
  //   TheScene.camera.rotation.z = (t + TheScene.sceneBreakpoints.default[1]) * -0.00002;
  // } else {
  //   // TheScene.camera.position.y = -0.5
  //   // TheScene.camera.position.x = -3
  // }









// Torus


// Lights


// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// const pointLight = new THREE.PointLight(0xffffff);
// pointLight.position.set(0, 15, 0);
// pointLight.rotation.set(0, 0, 1);
// scene.add(pointLight);
// const sphereSize = 10;
// const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
