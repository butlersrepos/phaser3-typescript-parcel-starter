import * as Phaser from 'phaser';
import './index.css'

function preload(this: Phaser.Scene) {
  this.load.image('logo', 'http://phaser.io/images/img.png');
}

function create(this: Phaser.Scene) {
  const {
    cameras: { main: mainCamera },
  } = this;

  const logo = this.add.sprite(mainCamera.centerX, mainCamera.centerY, 'logo');
}

window.onload = () => {
  new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'content',
    scene: {
      preload: preload,
      create: create,
    },
  });
};
