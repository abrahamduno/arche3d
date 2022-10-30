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
    // console.log(t, this.vuelike.refs)

    if (this.vuelike.refs.ceoimg)
    {
      // console.log("t")
      let asd = parseInt(-t*.086)
      // console.log(asd, this.vuelike.refs.ceoimg.style.transform)
      if (window.matchMedia('(max-width: 992px)').matches)
      {
          this.vuelike.refs.ceoimg.style.transform = `translateX(0px)`
        // this.vuelike.refs.ceoimg.style.transform = `translateX(${asd-1400}px)`
        // console.log("*************************")
      } else {
        if (window.matchMedia('(max-width: 1280px)').matches)
        {
          this.vuelike.refs.ceoimg.style.transform = `translateX(${asd-1300}px)`
        } else {
          this.vuelike.refs.ceoimg.style.transform = `translateX(${asd-1300}px)`
        }
        // console.log("---------------------")

        // if (asd-1200 > 222)
        // {
          // this.vuelike.refs.ceoimg.style.transform = `translateX(${222}px)`
        // } else {
        // }
        // this.vuelike.refs.ceoimg.style.transform = `translateX(${asd-1600}px)`
      }
    }

    if (this.scene.DEBUG) { console.log(t) }

    if (t < -this.scene.sceneBreakpoints.default[4]) {
      this.scene.myPlanet.position.set(...this.scene.Objects.thePlanet.pos)
      this.scene.myRing.position.set(...this.scene.Objects.thePlanet.pos)
      if (this.scene.somosText) this.scene.somosText.position.set(...this.scene.Objects.somosText.pos)
      if (this.scene.universoText) this.scene.universoText.position.set(...this.scene.Objects.universoText.pos)

      this.scene.myPlanet.position.setY(5000)
      this.scene.myRing.position.setY(5000)
      if (this.scene.somosText) this.scene.somosText.position.setY(5000)
      if (this.scene.universoText) this.scene.universoText.position.setY(5000)
      // this.scene.camera.rotation.set(...this.scene.Objects.thePlanet.rot)

      // this.scene.camera.position.z = -this.scene.Objects.thePlanet.pos[2] + 45;
      // this.scene.camera.position.y = this.scene.Objects.thePlanet.pos[1] + 1;



      if (this.scene.secondPlanet) this.scene.secondPlanet.position.set(...this.scene.Objects.secondPlanet.pos)
    } else {
      this.scene.myPlanet.position.set(...this.scene.Objects.thePlanet.pos)
      this.scene.myRing.position.set(...this.scene.Objects.thePlanet.pos)
      if (this.scene.somosText) this.scene.somosText.position.set(...this.scene.Objects.somosText.pos)
      if (this.scene.universoText) this.scene.universoText.position.set(...this.scene.Objects.universoText.pos)
      // this.scene.camera.position.z = this.scene.Objects.thePlanet.pos[2] + t * -0.01;



      this.scene.secondPlanet.position.set(...this.scene.Objects.secondPlanet.pos)
      this.scene.secondPlanet.position.setY(5000)
    }

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