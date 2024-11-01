import { Scene } from "phaser";

export class Tutorial extends Scene {
    constructor() {
        super('Tutorial');
    }
    create() {
        this.add.image(512, 384, 'background');
        this.add.image(512, 200, 'logo');

        this.add.text(512, 384, 'Use WASD or Arrow keys to move!', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(512, 435, 'Use J to Action', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.add.text(512, 486, 'Use k to interact', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const exitText = this.add.text(512, 600, 'press [ESC] to exit...', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setName('exitText');

        const escKey = this.input.keyboard.addKey('ESC');
        escKey.on('down', () => {
            this.scene.start('MainMenu');
        });
    }
}