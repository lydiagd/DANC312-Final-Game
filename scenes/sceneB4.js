import Character from '../mainCode.js'

class sceneB4 extends Phaser.Scene {
    constructor()
    {
        super({ key: 'sceneB4' });
        this.player
        this.knowledge
        this.cursors
        this.gotBox = false
        this.ruby
        this.text
    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
    }

    preload(){
   
        this.load.image('up', '../assets/up.png')
        this.load.image('left', '../assets/left.png')
        this.load.image('down', '../assets/down.png')     
        
        this.load.image('ruby', '../assets/ruby.png')

        this.load.audio('interview', '../assets/KETC_katherine.mp3')

    }

    create()
    {
        this.player = this.physics.add.sprite(300, 475, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()

        var down = this.add.image(350, 550, 'down').setScale(0.02)

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        this.text = this.add.text(618, 516, 'knowledge: '+ this.knowledge, { font: '20px Arial', fill: '#000' })


        this.ruby = this.physics.add.image(150,190, 'ruby').setScale(0.03)

        this.ruby.alpha = 0.04;
        this.physics.add.overlap(this.player, this.ruby, this.foundBox, null, this)
        
    }

    foundBox() {
        if(this.gotBox) {
            // already found box
            return
        } else {
            // do something when box is found
            this.knowledge++;
            
            this.ruby.alpha = 1
            this.tweens.add({
                targets: this.ruby,
                alpha: 0,
                duration: 2000,
                repeat: 0
            });
            this.gotBox = true
            this.text.setText('knowledge: '+ this.knowledge);

            this.sound.play('interview')
            this.sound.pauseOnBlur = false;

            var t = this.add.text(330, 115, 'Katherin Dunham, Age 96', { font: '18px Arial'})
            var t1 = this.add.text(200, 150, '“I think that people have lost something; they’ve lost the idea of what dance is.', { font: '15px Arial'})
            var t2 = this.add.text(200, 170, 'Everybody seems to be in it just for matter of personal pleasure, but there’s more to', { font: '15px Arial'})
            var t3 = this.add.text(200, 190, 'it than that (…) Such as expressing your culture, expressing the meaning of your life. ', { font: '15px Arial'})
            var t4 = this.add.text(200, 210, 'The meaning of the people you came from, the meaning of your family and your roots', { font: '15px Arial'})
            var t5 = this.add.text(200, 230, '(…) It’s in there we just have to take it out and use it” (KETC - 5:10-5:43)', { font: '15px Arial'})

        }
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

        if(this.player.y > 560)
        {
            this.scene.start('sceneB3', {player: this.player, knowledge: this.knowledge})  
        }

    }

}
export default sceneB4