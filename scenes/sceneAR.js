import Character from '../mainCode.js'

class sceneAR extends Phaser.Scene {
    constructor()
    {
        super({ key: 'sceneAR' });
        this.player
        this.knowledge
        this.cursors
        this.bookRead = false

    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
    }

    preload(){
       
        this.load.image('left', '../assets/left.png')
        this.load.image('right', '../assets/right.png')
        this.load.image('up', '../assets/up.png')
        this.load.image('bookSmallStack', '../assets/bookSmallStack.png')
        this.load.image('bookLargeStack', '../assets/bookLargeStack.png')
        this.load.image('openBook', '../assets/openBook.png')
        this.load.image('bookAnotherStack', '../assets/bookAnotherStack.png')

    }

    create()
    {
        this.player = this.physics.add.sprite(200, 250, this.player.texture.key, 1).setScale(0.03)
        this.player.setCollideWorldBounds(true).setBounce(.2)
        this.cursors = this.input.keyboard.createCursorKeys()


        var left = this.add.image(30, 350, 'left').setScale(0.02)
        var up = this.add.image(350, 30, 'up').setScale(0.02)

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        var txt = this.add.text(618, 516, 'knowledge: '+ this.knowledge, { font: '20px Arial', fill: '#000' })

        this.bookSmallStack = this.physics.add.image(190,400, 'bookSmallStack').setScale(0.3).setImmovable();
        this.bookSmallStack2 = this.physics.add.image(260,400, 'bookSmallStack').setScale(0.3).setImmovable();

        //this.bookLargeStack = this.physics.add.image(455, 400, 'booksmallStack').setScale(0.3).setImmovable();
        this.bookSmallStack3 = this.physics.add.image(320,400, 'bookSmallStack').setScale(0.3).setImmovable();
        this.bookSmallStack4 = this.physics.add.image(100,560, 'bookSmallStack').setScale(0.3).setImmovable();
        this.bookSmallStack5 = this.physics.add.image(415,500, 'bookSmallStack').setScale(0.3).setImmovable();


        this.bookOpen = this.physics.add.image(320, 500, 'openBook').setScale(0.1)

        this.bookAnotherStack = this.physics.add.image(120, 480, 'bookSmallStack').setScale(0.2).setImmovable()

        this.physics.add.collider(this.player, this.bookSmallStack4)
        //this.physics.add.collider(this.player, this.bookLargeStack)
        this.physics.add.collider(this.player, this.bookSmallStack)
        this.physics.add.collider(this.player, this.bookSmallStack2)
        this.physics.add.collider(this.player, this.bookSmallStack3)
        this.physics.add.collider(this.player, this.bookSmallStack5)
     
        this.physics.add.overlap(this.player, this.bookOpen, this.readBook, null, this)


    }

    readBook() {
        if(this.bookRead) return;

        this.knowledge++;
        this.bookRead = true;

        this.scene.start('readOpenBook', {player: this.player, knowledge: this.knowledge})
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

        if(this.player.x < 30)
        {
            this.scene.start('sceneA', {player: this.player, knowledge: this.knowledge})            
        }

        if(this.player.y < 50)
        {
            this.scene.start('sceneB2', {player: this.player, knowledge: this.knowledge})            
        }

    }

}
export default sceneAR