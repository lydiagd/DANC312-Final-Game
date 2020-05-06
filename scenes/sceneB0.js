import Character from '../mainCode.js'

class sceneB0 extends Phaser.Scene {
    constructor()
    {
        super({ key: 'sceneB0' });
        this.player
        this.knowledge
        this.cursors
        this.saph
        this.text
        this.foundSaph = false
    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
    }

    preload(){
        this.load.image('up', '../assets/up.png')
        this.load.image('sapphire', '../assets/sapphire.png')
        this.load.audio('interview', '../assets/Jacob_Pillow_Katherine.mp3')

    }

    create()
    {
        this.player = this.physics.add.sprite(400, 150, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()

        var up = this.add.image(350, 30, 'up').setScale(0.02)

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        this.text = this.add.text(618, 516, 'knowledge: '+ this.knowledge, { font: '20px Arial', fill: '#000' })


        this.saph = this.physics.add.image(500,190, 'sapphire').setScale(0.03)
        this.saph.alpha = 0.06;
        this.physics.add.overlap(this.player, this.saph, this.foundBox, null, this)


        
    }

    foundBox() {
        if(this.foundSaph) return;

        this.foundSaph = true;

        this.saph.alpha = 1
            this.tweens.add({
                targets: this.saph,
                alpha: 0,
                duration: 2000,
                repeat: 0
            });
        this.knowledge++;
        this.text.setText('knowledge: '+ this.knowledge);

        this.sound.play('interview')
        this.sound.pauseOnBlur = false;

        var t = this.add.text(100, 230, 'Katherin Dunham, Age 93', { font: '18px Arial'})
        var t1 = this.add.text(50, 250, '“This is one thing I have to say you have to be very very careful about racism. There is conscious, active,', { font: '15px Arial'})
        var t2 = this.add.text(50, 270, 'violent racism. There’s a kind of racism that is simply pure ignorance, people just don’t know; and they ', { font: '15px Arial'})
        var t3 = this.add.text(50, 290, 'don’t know and they don’t think and they follow and all of the sudden they face something which is against ', { font: '15px Arial'})
        var t4 = this.add.text(50, 310, 'their Christian principles, social values, everything. But they did now know that until it was put before them.”', { font: '15px Arial'})
        var t5 = this.add.text(50, 330, '(Jacob\'s Pillow, 1:36-2:12)', { font: '15px Arial'})



    }


    update ()
    {

        this.player.setVelocity(0)
        let speed = 160
        // Horizontal movement
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-speed)
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(speed)
        }

        // Vertical movement
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-speed)
        } else if (this.cursors.down.isDown) {
            this.player.setVelocityY(speed)
        }

        if(this.player.y < 50)
        {
            this.scene.start('sceneB1', {player: this.player, knowledge: this.knowledge})            
        }

    }

}
export default sceneB0