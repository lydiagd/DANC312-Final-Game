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

        var n1 = this.add.text(90, 120, 'During the 1930s, while an         undergrad, Dunham traveled alone', { font: '15px Courier', fill: '#000' })
        var n2 = this.add.text(90, 150, 'to the Caribbean to research dance traditions that slaves had brought', { font: '15px Courier', fill: '#000' })
        var n3 = this.add.text(90, 180, 'from Africa. She adapted what she  learned into choreography for her', { font: '15px Courier', fill: '#000' })
        var n4 = this.add.text(90, 210, 'company—the nation’s first self-   supporting black dance troupe,', { font: '15px Courier', fill: '#000' })
        var n5 = this.add.text(90, 240, 'which performed in the United      States and 57 other  countries.', { font: '15px Courier', fill: '#000' })
        var n6 = this.add.text(90, 270, 'At a time when black culture was   widely devalued, Dunham pointed ', { font: '15px Courier', fill: '#000' })
        var n7 = this.add.text(90, 300, 'to a rich cultural tradition that  had not been crushed out by slavery.', { font: '15px Courier', fill: '#000' })
        var n8 = this.add.text(500, 320, '(Golus, UChicago)', { font: '15px Courier', fill: '#000' })
     

        var text = this.add.text(500, 500, 'click to return', { font: '16px Courier', fill: '#000' })
        text.setInteractive({ useHandCursor: true })
        text.on('pointerup', this.clickButton, this)
        
    }
    clickButton() {
        this.scene.start('sceneAR', {player: this.player, knowledge: this.knowledge}) 
    }

}
export default readOpenBook