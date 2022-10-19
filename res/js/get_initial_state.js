const BASE_URL = "http://localhost:3000/";
// const BASE_ASSET_URL = "./dist/res"
const BASE_ASSET_URL = "./res";

export function getInitialState() {
  return {
    DOM: {},
    Objects: {
      sat: {
        file: "sat.obj",
        path: BASE_ASSET_URL + "/models/",
        wireframe: true,
        pos: [50, 35, 45],
        rot: [0, 0.7, 1],
        scale: [3, 3, 3],
      },
      rocket: {
        file: "rocket.obj",
        path: BASE_ASSET_URL + "/models/",
        wiremat: true,
        pos: [1300, 122, 5],
        rot: [0.5, 1.5, 0],
        scale: [18, 18, 18],
      },
      thePlanet: {
        path: false,
        pos: [-200, 120, -300],
        rot: [0, 0, 0],
        SphereGeometry: [32, 12, 12],
      },
      secondPlanet: {
        path: false,
        pos: [0, 120, -300],
        rot: [0, 0, 0],
        SphereGeometry: [186, 12, 12],
      },
      somosText: {
        path: false,
        pos: [-4, 1.5, 10],
      },
      universoText: {
        path: false,
        pos: [-16, -0.7, 9],
      },
    },
    sceneBreakpoints: {
      default: [],
      mobile: [
        1900, // lift up
        4500, // move right
        8500, // rotate right
        9000, // stop movement
        16500, // last scene
      ],
      desktop: [
        2400, // lift up
        3500, // move right
        8000, // rotate right
        8600, // stop movement
        14400, // last scene
      ],
    },
    sceneVariables: {
      camera: {
        pos: [0, 0, 9],
        rot: [0.5, 0, 0],
        fov: 75,
        fovSettings: {
          mobile: 120,
          desktop: 75,
        },
        minReach: 0.1,
        maxReach: 1000,
      },
    },
  };
}
