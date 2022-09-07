export default class ScrollWatcher {
  constructor(_scene)
  {
    console.log("constructor scene",_scene)
    this.scene = _scene
    console.log("constructor scene",this.scene)
  }
  updateAndSetScene(_scene) {
    this.scene = _scene
    this.update()
  }
  update(scene) {
    const _scene = this.scene
    // console.log("update scene args",scene)
    console.log("update scene",this.scene)
    // const _scene = this.scene == undefined ? scene : this.scene
    // console.log("update scene",_scene)
    // if (!this.scene) this.scene = _scene
    const t = document.body.getBoundingClientRect().top;
    if (_scene.DEBUG) { console.log("scroll distance from top:",t) }

    if (t < -_scene.sceneBreakpoints.default[4]) {
      _scene.camera.rotation.set(..._scene.sceneVariables.camera.rot)

      _scene.camera.position.z = -_scene.sceneVariables.camera.pos[2] + 45;
      _scene.camera.position.y = _scene.sceneVariables.camera.pos[1] + 1;
    } else {
      _scene.camera.position.z = _scene.sceneVariables.camera.pos[2] + t * -0.01;

      // ROTATE UP | SCREEN 1
      if (t < -_scene.sceneBreakpoints.default[0]) {
        _scene.camera.rotation.x = _scene.sceneVariables.camera.rot[0];
      } else {
        _scene.camera.rotation.x =
          _scene.sceneVariables.camera.rot[0] -
          (t + _scene.sceneBreakpoints.default[0]) * 0.00005;
      }

      // ELEVATE UP | SCREEN 2
      if (t < -_scene.sceneBreakpoints.default[0]) {
        if (t > -_scene.sceneBreakpoints.default[2]) {
          _scene.camera.position.y =
            _scene.sceneVariables.camera.pos[1] -
            (t + _scene.sceneBreakpoints.default[0]) * 0.0065;
        } else {
          _scene.camera.position.y =
            _scene.sceneVariables.camera.pos[1] -
            (-_scene.sceneBreakpoints.default[2] +
              _scene.sceneBreakpoints.default[0]) *
              0.0065;
        }
      } else {
        _scene.camera.position.y = _scene.sceneVariables.camera.pos[1];
      }

      if (t < -_scene.sceneBreakpoints.default[1]) {
        _scene.camera.position.x =
          -_scene.sceneVariables.camera.pos[0] -
          (t + _scene.sceneBreakpoints.default[1]) * 0.03;
      } else {
        _scene.camera.position.x = -_scene.sceneVariables.camera.pos[0];
      }

      if (t < -_scene.sceneBreakpoints.default[2]) {
        _scene.camera.position.x =
          -_scene.sceneVariables.camera.pos[0] -
          (t + _scene.sceneBreakpoints.default[2]) * 0.25 -
          (t + _scene.sceneBreakpoints.default[1]) * 0.03;
        if (t > -_scene.sceneBreakpoints.default[3]) {
          _scene.camera.rotation.y =
            _scene.sceneVariables.camera.rot[1] +
            (t + _scene.sceneBreakpoints.default[2]) * 0.0002;
        } else {
          _scene.camera.rotation.y =
            _scene.sceneVariables.camera.rot[1] +
            (-_scene.sceneBreakpoints.default[3] +
              _scene.sceneBreakpoints.default[2]) *
              0.0002;
        }
      } else {
        // _scene.camera.position.x = -_scene.sceneVariables.camera.pos[0]
        _scene.camera.rotation.y = _scene.sceneVariables.camera.rot[1];
      }
    }
  }
}