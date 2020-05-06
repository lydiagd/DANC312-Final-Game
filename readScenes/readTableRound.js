import Character from '../mainCode.js'

class readTableRound extends Phaser.Scene {
    constructor()
    {
        super({ key: 'readTableRound' });
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

        this.load.image('table', '../assets/roundTable.png')

    }

    create()
    {
        
        this.sign = this.physics.add.image(400,300, 'table').setImmovable().setScale(5)

        var n1 = this.add.text(125, 250, '', { font: '15px Courier', fill: '#0f0' })
        var n2 = this.add.text(125, 268, 'the foundations of modern dance and interpret its significance.', { font: '15px Courier' })
        var n3 = this.add.text(125, 286, 'As far as you know, the concept for racism and blackness does not exist...', { font: '15px Courier' })



        var text = this.add.text(500, 500, 'click to return', { font: '16px Courier', fill: '#000' })
        text.setInteractive({ useHandCursor: true })
        text.on('pointerup', this.clickButton, this)
        
    }
    clickButton() {
        this.scene.start('sceneB1', {player: this.player, knowledge: this.knowledge}) 
    }

}
export default readTableRound