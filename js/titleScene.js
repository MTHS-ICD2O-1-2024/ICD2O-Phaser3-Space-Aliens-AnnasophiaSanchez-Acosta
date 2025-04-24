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

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }
  preload() {
    console.log("Title Scene")
  }

  /**Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data- Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    // pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {} time - The current time
   * @param {} delta The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default TitleScene
