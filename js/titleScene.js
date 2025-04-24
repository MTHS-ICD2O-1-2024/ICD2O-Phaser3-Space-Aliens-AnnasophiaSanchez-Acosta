/*global Phaser*/
//Copyright (c) 2020 Mr. Coxall All rights reserved
//
//Created by Mr. Coxall updated by Anna S.
//Created on April 2025
//This is the Title Scene

/**
 * This is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "titleScene" })
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  preload() {
    console.log("Title Scene")
  }

  create(data) {
    // pass
  }

  update(time, delta) {
    // pass
  }
}

export default TitleScene
