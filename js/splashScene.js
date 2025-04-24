/*global Phaser*/

//copyright (c) 2020 Mr Coxall All rights reserved
//
//created by: Mr Coxall updated by Annasophia S.
//Created on: April 2025
//This is the Splash Scene

/**
 * This class is the Splash Scene.
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "splashScene"})
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload()  {
    console.log("Splash Scene")
  }

  create(data) {
      //pass
  }

  update(time,delta) {
    this.scene.switch("titleScene")
  }
}
export default SplashScene