import Character from '../mainCode.js'

class readSign1 extends Phaser.Scene {
    constructor()
    {
        super({ key: 'readSign1' });
        this.player
        this.knowledge
        this.cursors

    }
    init(data)
    {
        this.player = data.player
        this.knowledge = data.knowledge
    }

    preload(){
   
        this.load.image('down', '../assets/down.png')
        this.load.image('left', '../assets/left.png')
        this.load.image('sign', '../assets/sign.png')

    }

    create()
    {
        
        this.sign = this.physics.add.image(400,300, 'sign').setImmovable()

        var n1 = this.add.text(160, 100, 'Katherine Dunham was a dancer, choreographer, and ', { font: '16.5px Courier' })
        var n2 = this.add.text(125, 122, 'anthropologist who examined and interpreted the dances,', { font: '16.5px Courier' })
        var n3 = this.add.text(125, 144, 'rituals, and folklore of the black diaspora in the', { font: '16.5px Courier' })
        var n4 = this.add.text(125, 166, 'tropical Americas and the Caribbean. By incorporating', { font: '16.5px Courier' })
        var n5 = this.add.text(125, 188, 'authentic regional dance movements and developing a ', { font: '16.5px Courier' })
        var n6 = this.add.text(125, 210, 'technical system, she expanded the boundaries of ', { font: '16.5px Courier' })
        var n7 = this.add.text(160, 232, 'modern dance. (Brittanica)', { font: '16.5px Courier' })



        var text = this.add.text(500, 500, 'click to return', { font: '16px Courier', fill: '#0f0' })
        text.setInteractive({ useHandCursor: true })
        text.on('pointerup', this.clickButton, this)
        
    }
    clickButton() {
        this.scene.start('sceneA', {player: this.player, knowledge: this.knowledge}) 
    }

}
export default readSign1