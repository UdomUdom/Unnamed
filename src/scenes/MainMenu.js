import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(512, 384, 'background');

        this.add.image(512, 300, 'logo');

        const startText = this.add.text(512, 460, 'press [ENTER ↵] to start...', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setName('startText');
        this.time.addEvent({
            delay: 500,
            callback: () => {
                startText.setVisible(!startText.visible);
            },
            loop: true
        });

        this.input.keyboard.on('keydown-ENTER', () => {

            this.scene.start('Game');

        });

        const helpText = this.add.text(512, 560, 'press [H] for Tutorial', {
            fontFamily: 'Arial Black', fontSize: 28, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setName('helpText');

        this.input.keyboard.on('keydown-H', () => {
            this.scene.start('Tutorial');
        });

        this.add.text(512, 700, 'UMA - 2024', {
            fontFamily: 'Arial', fontSize: 24, color: '#ffffff',
            stroke: '#000000', strokeThickness: 6,
            align: 'center'
        }).setOrigin(0.5);
    }
}
