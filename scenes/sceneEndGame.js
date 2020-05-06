import Character from '../mainCode.js'

class endGame extends Phaser.Scene {
    constructor()
    {
        super({ key: 'endGame' });
        this.player
        this.knowledge
        this.group
        this.cursors
        this.door
        this.sign
        this.scored = false
    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
        this.group = data.group
    }

    preload() {

        this.load.image('door', '../assets/door.png')
        this.load.image('left', '../assets/left.png')
        this.load.image('right', '../assets/right.png')
        this.load.image('bg', '../assets/whiteBG.png')

        this.load.image('sapphire', '../assets/sapphire.png')
        this.load.image('ruby', '../assets/ruby.png')
        this.load.image('emerald', '../assets/emerald.png')
    }

    create() {

        this.player = this.physics.add.sprite(300, 700, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()

        var right = this.add.image(760, 350, 'right').setScale(0.02)
        var workTxt = this.add.text(680, 310, 'Works Cited')

        var left = this.add.image(30, 350, 'left').setScale(0.02)
        var endGame = this.add.text(30,300, 'END')

        var e1 = this.add.image(250,500, 'emerald').setScale(0.03)
        var e2 = this.add.image(550,500, 'emerald').setScale(0.03)

        var s1 = this.add.image (250, 400, 'sapphire').setScale(0.03)
        var s2 = this.add.image (550, 400, 'sapphire').setScale(0.03)

        var r1 = this.add.image(250, 300, 'ruby').setScale(0.03)
        var r2 = this.add.image(550, 300, 'ruby').setScale(0.03)

        var q1 = this.add.text(50, 75, '“We weren\'t pushing Black is beautiful.', {font: '18px Arial'})
        var wb = this.add.image(465, 80, 'bg').setScale(0.08)
        //var wb2 = this.add.image(510, 75, 'bg').setScale(0.07)
        var q2 = this.add.text(385, 75, 'We just showed it."', {font: 'bold 18px Arial', fill: '#000'})
        var q3 = this.add.text(500, 130, '- Katherine Dunham', {font: '18px Arial'})

        
    }

    update() {
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

        if(this.player.x > 760)
        {
            this.scene.start('worksCited', {player: this.player, knowledge: this.knowledge})
        }

        if(this.player.x < 60)
        {
            this.scene.start('quitGame', {player: this.player, knowledge: this.knowledge})
        }

    }


}
export default endGame