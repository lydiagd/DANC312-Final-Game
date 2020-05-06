import Character from '../mainCode.js'

class sceneB2 extends Phaser.Scene {
    constructor()
    {
        super({ key: 'sceneB2' });
        this.player
        this.knowledge
        this.cursors
        this.door
        this.getBulb1 = false;
        this.getBulb2 = false;
        this.getBulb3 = false;
        this.getKnowledge = false;
        this.txt
    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
    }

    preload(){
   
        this.load.image('down', '../assets/down.png')
        this.load.image('right', '../assets/right.png')
        this.load.image('bulb', '../assets/lightbulb.png')
        this.load.image('light', '../assets/lightRays.png')

    }

    create()
    {
        this.player = this.physics.add.sprite(465, 450, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()

        var down = this.add.image(350, 550, 'down').setScale(0.02)
        var right = this.add.image(760, 350, 'right').setScale(0.02)

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        this.txt = this.add.text(618, 516, 'knowledge: '+ this.knowledge, { font: '20px Arial', fill: '#000' })

        this.bulb1 = this.physics.add.image(100, 400, 'bulb').setScale(0.02)
        this.bulb2 = this.physics.add.image(250, 400, 'bulb').setScale(0.02)
        this.bulb3 = this.physics.add.image(400, 400, 'bulb').setScale(0.02)

        this.physics.add.overlap(this.player, this.bulb1, this.b1, null, this)
        this.physics.add.overlap(this.player, this.bulb2, this.b2, null, this)
        this.physics.add.overlap(this.player, this.bulb3, this.b3, null, this)

    }
    
    b1() {
        if(this.getBulb1) return;

        this.getBulb1 = true;
        var l1 = this.add.image(70, 280, 'light').setAngle(225).setScale(0.5)
        var popup1 = this.add.text(100, 100, '    EMBO')

        if(this.getBulb1 == true && this.getBulb2 == true && this.getBulb3 == true && this.getKnowledge == false)
        {
            this.knowledge++;
            this.getKnowledge = true;
            this.txt.setText('knowledge: '+ this.knowledge);
            var def = this.add.text(410, 100, '- "learn from observation, witnessing,')
            var def2 = this.add.text(410, 120, 'modeling and active participation.” ')
            var def3 = this.add.text(440, 140, '(Osamure, 6)')
            
        }

    }

    b2() {
        if(this.getBulb2) return;

        this.getBulb2 = true;
        var l2 = this.add.image(220, 280, 'light').setAngle(225).setScale(0.5)
        var popup2 = this.add.text(190, 100, 'DIED      KNOW')

        if(this.getBulb1 == true && this.getBulb2 == true && this.getBulb3 == true && this.getKnowledge == false)
        {
            this.knowledge++;
            this.getKnowledge = true;
            this.txt.setText('knowledge: '+ this.knowledge);
            var def = this.add.text(410, 100, '- "learn from observation, witnessing,')
            var def2 = this.add.text(410, 120, 'modeling and active participation.” ')
            var def3 = this.add.text(440, 140, '(Osamure, 6)')
           
        }
        
    }

    b3() {
        if(this.getBulb3) return;

        this.getBulb3 = true;
        var l3 = this.add.image(370, 280, 'light').setAngle(225).setScale(0.5)
        var popup3 = this.add.text(330, 100, 'LEDGE')

        if(this.getBulb1 == true && this.getBulb2 == true && this.getBulb3 == true && this.getKnowledge == false)
        {
            this.knowledge++;
            this.getKnowledge = true;
            this.txt.setText('knowledge: '+ this.knowledge);
            var def = this.add.text(410, 100, '- "learn from observation, witnessing,')
            var def2 = this.add.text(410, 120, 'modeling and active participation.” ')
            var def3 = this.add.text(440, 140, '(Osamure, 6)')
            
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

        if(this.player.y > 550)
        {
            this.scene.start('sceneAR', {player: this.player, knowledge: this.knowledge})            
        }

        if(this.player.x > 760)
        {
            this.scene.start('sceneB3', {player: this.player, knowledge: this.knowledge})  
        }

        

    }

}
export default sceneB2