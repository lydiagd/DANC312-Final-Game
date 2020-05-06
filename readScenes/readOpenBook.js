import Character from '../mainCode.js'

class readOpenBook extends Phaser.Scene {
    constructor()
    {
        super({ key: 'readOpenBook' });
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

        this.load.image('book', '../assets/openBook.png')

    }

    create()
    {
        
        this.sign = this.physics.add.image(400,300, 'book').setImmovable()

        var n1 = this.add.text(90, 120, 'During the 1930s, while an undergr ad, Dunham traveled alone to the', { font: '15px Courier', fill: '#000' })
        var n2 = this.add.text(90, 150, 'Caribbean to research dance tradit ions that slaves had brought from ', { font: '15px Courier', fill: '#000' })
        var n3 = this.add.text(90, 180, 'Africa. She adapted what she learn ed into choreography for her company—', { font: '15px Courier', fill: '#000' })
        var n4 = this.add.text(90, 210, 'the nation’s first self-supporting black dance troupe, which performed', { font: '15px Courier', fill: '#000' })
        var n5 = this.add.text(90, 240, 'in the United States and 57 other  countries. At a time when black', { font: '15px Courier', fill: '#000' })
        var n6 = this.add.text(90, 270, 'culture was widely devalued,       Dunham pointed to a rich cultural tradition that', { font: '15px Courier', fill: '#000' })
        var n7 = this.add.text(90, 300, 'had not been crushed out by        slavery. (Golus, UChicago)', { font: '15px Courier', fill: '#000' })
     

        var text = this.add.text(500, 500, 'click to return', { font: '16px Courier', fill: '#000' })
        text.setInteractive({ useHandCursor: true })
        text.on('pointerup', this.clickButton, this)
        
    }
    clickButton() {
        this.scene.start('sceneAR', {player: this.player, knowledge: this.knowledge}) 
    }

}
export default readOpenBook