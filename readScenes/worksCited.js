import Character from '../mainCode.js'

class worksCited extends Phaser.Scene {
    constructor()
    {
        super({ key: 'worksCited' });
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
        var WC1 = this.add.text(50,75, 'The Editors of Encyclopaedia Britannica. “Modern Dance.” Encyclopædia Britannica,',{font: '14px Courier'})
        var WC12 = this.add.text(80, 90, 'Encyclopædia Britannica, Inc., 10 Mar. 2015, www.britannica.com/art/modern-dance.', {font: '14px Courier'})

        var WC2 = this.add.text(50, 115, 'Osumare, Halifu. "Dancing the Black Atlantic: Katherine Dunham’s Research-to-Performance Method"',{font: '14px Courier'})


        var text = this.add.text(500, 500, 'click to return', { font: '16px Courier', fill: '#0f0' })
        text.setInteractive({ useHandCursor: true })
        text.on('pointerup', this.clickButton, this)
        
    }
    clickButton() {
        this.scene.start('endGame', {player: this.player, knowledge: this.knowledge}) 
    }

}
export default worksCited