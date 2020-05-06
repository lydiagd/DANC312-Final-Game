import Character from '../mainCode.js'

class sceneB1 extends Phaser.Scene {
    constructor()
    {
        super({ key: 'sceneB1' });
        this.player
        this.knowledge
        this.cursors
        this.text
        this.tableFound = false;
        this.l1 = false;
        this.l2 = false;
        this.log1
        this.log2
        this.furnace

    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
    }

    preload(){
   
        this.load.image('down', '../assets/down.png')
        this.load.image('right', '../assets/right.png')

        this.load.image('furnace', '../assets/stove.png')
        this.load.image('log', '../assets/wood.png')
        this.load.image('fire', '../assets/fire.png')
        this.load.image('light', '../assets/lightRays.png')

    }

    create()
    {
        this.player = this.physics.add.sprite(500, 400, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()

        var down = this.add.image(350, 550, 'down').setScale(0.02)
        var right = this.add.image(760, 350, 'right').setScale(0.02)

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        this.text = this.add.text(618, 516, 'knowledge: '+ this.knowledge, { font: '20px Arial', fill: '#000' })

        this.furnace = this.physics.add.image(400,80, 'furnace').setScale(0.2)

        this.physics.add.overlap(this.player, this.furnace, this.foundAll, null, this)

        if(this.l1 == false)
        {
            this.log1 = this.physics.add.image(100,450, 'log').setScale(0.005)
            this.physics.add.overlap(this.player, this.log1, this.foundl1, null, this)
        }

        if(this.l2 == false)
        {
            this.log2 = this.physics.add.image(520,200, 'log').setScale(0.005)
            this.physics.add.overlap(this.player, this.log2, this.foundl2, null, this)
        }
        
    }

    foundl1() {
        if(this.l1) return;

        this.l1 = true;
        this.log1.destroy()


    }

    foundl2() {
        if(this.l2) return;

        this.l2 = true;
        this.log2.destroy()


    }

    foundAll() {

        if(this.tableFound) return;

        if(this.l1 && this.l2)
        {

            this.knowledge++;
            this.tableFound = true;

            var fire = this.add.image(400,90, 'fire').setScale(0.02)
            var light = this.add.image(380, 110, 'light').setScale(0.5).setAngle(0)
            this.text.setText('knowledge: '+ this.knowledge);


            this.addPara()

        }
            
    }

    addPara() {

        var a = this.add.text(25, 300, 'A disconnection from African use of specific rhythms and rituals, in a traditional sense, limited African American dancers', { font: '14px Arial'})
        var b = this.add.text(25, 320, 'and choreographers in the United States. As anthropologist Joyce Aschenbrenner notes, a few black American dance artists,', { font: '14px Arial'})
        var c = this.add.text(25, 340, 'such as Dunham, were “determined to bring before the world evidence of the richness and strength of their Afro-American', { font: '14px Arial'})
        var d = this.add.text(25, 360, 'cultural heritage. These efforts attacked the ‘inept’ comic stereotype as well as the exotic, primitive savage image;', { font: '14px Arial'})
        var e = this.add.text(25, 380, 'they also aimed at the abolishment of the ‘natural endowment’ view that was a modification of the other two stereotypes', { font: '14px Arial'})
        var f = this.add.text(25, 400, 'that developed in the 1930s and 1940s.” (Osumare, 2)', { font: '14px Arial'})
    
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
            this.scene.start('sceneA', {player: this.player, knowledge: this.knowledge})            
        }

        if(this.player.y > 560)
        {
            this.scene.start('sceneB0', {player: this.player, knowledge: this.knowledge}) 
        }

    }

}
export default sceneB1