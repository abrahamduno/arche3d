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
    },
    sceneBreakpoints: {
      default: [],
      mobile: [1900, 4500, 8500, 9000, 16500],
      desktop: [2400, 4500, 7300, 8600, 14000],
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
