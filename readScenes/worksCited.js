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
        var WC1 = this.add.text(50,70, 'The Editors of Encyclopaedia Britannica. “Modern Dance.” Encyclopædia Britannica,',{font: '14px Courier'})
        var WC12 = this.add.text(80, 85, 'Encyclopædia Britannica, Inc., 10 Mar. 2015, www.britannica.com/art/modern-dance.', {font: '14px Courier'})

        var WC2 = this.add.text(50, 150, 'Osumare, Halifu. "Dancing the Black Atlantic: Katherine Dunham’s',{font: '14px Courier'})
        var WC22 = this.add.text(80, 165, 'Research-to-Performance Method"',{font: '14px Courier'})

        var WC3 = this.add.text(50,230, 'Griffin, Chanté. “Three African-American Women Who Revolutionized Modern Dance.” KCET,',{font: '14px Courier'})
        var WC32 = this.add.text(80, 245, '28 June 2018, www.kcet.org/shows/artbound/three-african-american-women-who',{font: '14px Courier'})
        var WC33 = this.add.text(80, 260, '-revolutionized-modern-dance.',{font: '14px Courier'})

        var WC4 = this.add.text(50, 320, 'Golus, Carrie. “Dunham Turned Anthropology into Artistry.” The University of Chicago,', {font: '14px Courier'})
        var WC42 = this.add.text(80, 335, '2016, www.uchicago.edu/features/dunham_turned_anthropology_into_artistry/.',{font: '14px Courier'})

        var WC5 = this.add.text(50,400, 'Berger, Anne-Marie. "Living in St Louis | Katherine Dunham". KETC Nine Network',{font: '14px Courier'})

        var WC6 = this.add.text(50,460, 'Jacob\'s Pillow Dance. "Katherine Dunham on Overcoming 1940s Racism"',{font: '14px Courier'})


        var text = this.add.text(500, 500, 'click to return', { font: '16px Courier', fill: '#0f0' })
        text.setInteractive({ useHandCursor: true })
        text.on('pointerup', this.clickButton, this)
        
    }
    clickButton() {
        this.scene.start('endGame', {player: this.player, knowledge: this.knowledge}) 
    }

}
export default worksCited