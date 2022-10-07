export default class ScrollWatcher {
  constructor(_scene, _vuelike)
  {
    // console.log("constructor scene",_scene)
    this.scene = _scene
    this.vuelike = _vuelike
    // console.log("constructor scene",this.scene)
  }
  update() {
    // console.log("update scene args",scene)
    // console.log("update scene",this.scene)
    // const this.scene = this.scene == undefined ? scene : this.scene
    // console.log("update scene",this.scene)
    // if (!this.scene) this.scene = this.scene
    const t = document.body.getBoundingClientRect().top;

    // ceoimg
    if (this.vuelike.refs)
    {
      console.log(this.vuelike.refs)
        if (this.vuelike.refs.ceoimg)
      {
        console.log(this.vuelike.refs.ceoimg.style.transform)
      }
    }

    if (this.scene.DEBUG) { console.log(t) }

    if (t < -this.scene.sceneBreakpoints.default[4]) {
      this.scene.camera.rotation.set(...this.scene.sceneVariables.camera.rot)

      this.scene.camera.position.z = -this.scene.sceneVariables.camera.pos[2] + 45;
      this.scene.camera.position.y = this.scene.sceneVariables.camera.pos[1] + 1;
    } else {
      this.scene.camera.position.z = this.scene.sceneVariables.camera.pos[2] + t * -0.01;

      // ROTATE UP | SCREEN 1
      if (t < -this.scene.sceneBreakpoints.default[0]) {
        this.scene.camera.rotation.x = this.scene.sceneVariables.camera.rot[0];
      } else {
        this.scene.camera.rotation.x =
          this.scene.sceneVariables.camera.rot[0] -
          (t + this.scene.sceneBreakpoints.default[0]) * 0.00005;
      }

      // ELEVATE UP | SCREEN 2
      if (t < -this.scene.sceneBreakpoints.default[0]) {
        if (t > -this.scene.sceneBreakpoints.default[2]) {
          this.scene.camera.position.y =
            this.scene.sceneVariables.camera.pos[1] -
            (t + this.scene.sceneBreakpoints.default[0]) * 0.0065;
        } else {
          this.scene.camera.position.y =
            this.scene.sceneVariables.camera.pos[1] -
            (-this.scene.sceneBreakpoints.default[2] +
              this.scene.sceneBreakpoints.default[0]) *
              0.0065;
        }
      } else {
        this.scene.camera.position.y = this.scene.sceneVariables.camera.pos[1];
      }

      if (t < -this.scene.sceneBreakpoints.default[1]) {
        this.scene.camera.position.x =
          -this.scene.sceneVariables.camera.pos[0] -
          (t + this.scene.sceneBreakpoints.default[1]) * 0.03;
      } else {
        this.scene.camera.position.x = -this.scene.sceneVariables.camera.pos[0];
      }

      if (t < -this.scene.sceneBreakpoints.default[2]) {
        this.scene.camera.position.x =
          -this.scene.sceneVariables.camera.pos[0] -
          (t + this.scene.sceneBreakpoints.default[2]) * 0.25 -
          (t + this.scene.sceneBreakpoints.default[1]) * 0.03;
        if (t > -this.scene.sceneBreakpoints.default[3]) {
          this.scene.camera.rotation.y =
            this.scene.sceneVariables.camera.rot[1] +
            (t + this.scene.sceneBreakpoints.default[2]) * 0.0002;
        } else {
          this.scene.camera.rotation.y =
            this.scene.sceneVariables.camera.rot[1] +
            (-this.scene.sceneBreakpoints.default[3] +
              this.scene.sceneBreakpoints.default[2]) *
              0.0002;
        }
      } else {
        // this.scene.camera.position.x = -this.scene.sceneVariables.camera.pos[0]
        this.scene.camera.rotation.y = this.scene.sceneVariables.camera.rot[1];
      }
    }
  }
}