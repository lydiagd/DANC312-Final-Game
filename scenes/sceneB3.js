import Character from '../mainCode.js'

class sceneB3 extends Phaser.Scene {
    constructor()
    {
        super({ key: 'sceneB3' });
        this.player
        this.knowledge
        this.cursors
        this.txt
        this.well
        this.gotFlood = false

    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
    }

    preload(){
   
        this.load.image('up', '../assets/up.png')
        this.load.image('left', '../assets/left.png')
        this.load.image('well', './assets/well.png')

    }

    create()
    {
        this.player = this.physics.add.sprite(100, 400, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()

        var up = this.add.image(350, 30, 'up').setScale(0.02)
        var left = this.add.image(30, 350, 'left').setScale(0.02)

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        this.txt = this.add.text(618, 516, 'knowledge: '+ this.knowledge, { font: '20px Arial', fill: '#000' })


        this.well = this.physics.add.image(475,225, 'well').setScale(0.2)

        this.physics.add.overlap(this.player, this.well, this.flood, null, this)
        
    }

    flood() {

       // this.cameras.main.backgroundColor.setTo('rgba(255, 0, 0, 0.5)')
       this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor("#224BA4");

       if(this.gotFlood) return;

       this.gotFlood = true;
       this.knowledge++;
       this.txt.setText('knowledge: '+ this.knowledge);

       var p1 = this.add.text(70, 390, 'Summarily, Dunham created performance ethnographies of the Caribbean on the world’s greatest',{ font: '16px Arial', fill: '#000' })
       var p2 = this.add.text(70, 410, 'stages, privileged the voices of her informants in her ethnographies, and created staged',{ font: '16px Arial', fill: '#000' })
       var p3 = this.add.text(70, 430, 'visions of cross-cultural communication. In the process, she clearly envisioned the African',{ font: '16px Arial', fill: '#000' })
       var p4 = this.add.text(70, 450, 'African diaspora–the Black Atlantic–long before that nomenclature was ever used. (Osamure, 1)',{ font: '16px Arial', fill: '#000' })
 
    
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
            this.scene.start('sceneB4', {player: this.player, knowledge: this.knowledge})            
        }

        if(this.player.x < 30)
        {
            this.scene.start('sceneB2', {player: this.player, knowledge: this.knowledge})
        }

    }

}
export default sceneB3