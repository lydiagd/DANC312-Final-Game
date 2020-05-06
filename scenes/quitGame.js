import Character from '../mainCode.js'

class quitGame extends Phaser.Scene {
    constructor()
    {
        super({ key: 'quitGame' });
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
   
        this.load.image('globe', '../assets/globe.png')
        this.load.image('stars', '../assets/spaceStars.png')

    }

    create()
    {
        var stars = this.add.image(300,300, 'stars')
        var globe = this.add.image(100, 500, 'globe').setScale(0.08)

        var W1 = this.add.text(75, 90, 'Congratulations! Your journey has given you enlightened knowledge that will',{font: '16px Courier'})
        var W2 = this.add.text(75, 110, 'greatly shape the knowledge of racism and dance in your own society! The', {font: '16px Courier'})
        var W3 = this.add.text(75, 130, 'University of Supernatural Creatures is very lucky to have you.',{font: '16px Courier'})
      

        var cloud = this.add.image(700, 550, 'bubble').setScale(0.4)
        var txt = this.add.text(618, 516, 'knowledge: INF', { font: '18px Arial', fill: '#000' })
        
    }

}
export default quitGame