import Character from '../mainCode.js'

class sceneA extends Phaser.Scene {
    constructor()
    {
        super({ key: 'sceneA' });
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

    preload(){
       
        this.load.image('door', '../assets/door.png')
        this.load.image('left', '../assets/left.png')
        this.load.image('right', '../assets/right.png')
        this.load.image('bubble', '../assets/cloud.png')
        this.load.image('sign', '../assets/sign.png')

    }

    create() {

        this.player = this.physics.add.sprite(300, 700, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()

        var left = this.add.image(30, 350, 'left').setScale(0.02)
        var right = this.add.image(760, 350, 'right').setScale(0.02)

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        var txt = this.add.text(618, 516, 'knowledge: '+ this.knowledge, { font: '20px Arial', fill: '#000' })

        this.door = this.physics.add.image(300, 30, 'door').setScale(0.2).setImmovable();
        this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this)
        this.physics.add.collider(this.player, this.door)

        this.sign = this.physics.add.image(400,300, 'sign').setImmovable().setScale(0.05)
        this.physics.add.overlap(this.player, this.sign, this.readSign, null, this)
    }

    readSign()
    {
        //var signBool = this.group.getByName('readSign1')
        //if(this.group.getByName('readSign1') != NULL)
        if(this.scored == false)
        {
            this.knowledge++;
            this.scored = true;
            
        }
        this.scene.start('readSign1', {player: this.player, knowledge: this.knowledge}) 
        
    }

    enterDoor()
    {
        if(this.knowledge < 0)
        {
            var popup = this.add.text(400,50, 'your research isn\'t finished yet! Earn')
            var popup2 = this.add.text(400,75, 'at least 5 knowledge points to continue')
 
        }
        else
        {
            //do something - maybe end game
            this.scene.start('endGame', {player: this.player, knowledge: this.knowledge}) 
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

        if(this.player.x > 760)
        {
            this.scene.start('sceneAR', {player: this.player, knowledge: this.knowledge})
        }

        if(this.player.x < 30)
        {
            this.scene.start('sceneB1', {player: this.player, knowledge: this.knowledge})
        }

    }

}
export default sceneA;