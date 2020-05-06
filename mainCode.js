import LoadScreen from './scenes/LoadScreen.js';
import endGame from './scenes/sceneEndGame.js'
import sceneA from './scenes/sceneA.js';
import readSign1 from './readScenes/readSign1.js';
import sceneAR from './scenes/sceneAR.js';
import readOpenBook from './readScenes/readOpenBook.js';
import sceneB0 from './scenes/sceneB0.js';
import sceneB1 from './scenes/sceneB1.js';
import readTableRound from './readScenes/readTableRound.js';
import sceneB2 from './scenes/sceneB2.js';
import sceneB3 from './scenes/sceneB3.js';
import sceneB4 from './scenes/sceneB4.js';
import worksCited from './readScenes/worksCited.js';
import quitGame from './scenes/quitGame.js';



class OpeningScreen extends Phaser.Scene { /******** OPENING SCREEN ********/
    constructor() {
        super({ key: 'OpeningScreen' })
    }

    preload() {

    }

    create() {
        var text = this.add.text(5, 120, 'LOST IN TRANSLATION - AN EXPLORATION OF MODERN DANCE AND KATHERINE DUNHAM', { font: '18px Courier'})

        var n1 = this.add.text(20, 250, 'You are an alien who has come to visit an abandoned museum on Earth in an attempt ', { font: '15px Courier', fill: '#0f0' })
        var n2 = this.add.text(20, 270, 'to conduct research for the "University of Supernatural Creatures" (USC). The topic', { font: '15px Courier', fill: '#0f0' })
        var n3 = this.add.text(20, 290, 'of the exploration is to discover the foundations of modern dance and interpret its', { font: '15px Courier', fill: '#0f0' })
        var n4 = this.add.text(20, 310, 'reasons for creation. As an alien, the concept of racism and blackness does not exist.', { font: '15px Courier', fill: '#0f0' })

        var text = this.add.text(150, 400, 'click to begin game', { font: '16px Courier', fill: '#0f0' })
        text.setInteractive({ useHandCursor: true })
        text.on('pointerup', this.clickButton, this)
    }
    clickButton() {
        this.scene.start('LoadScreen', {scoreLeft: this.scoreLeft, scoreRight: this.scoreRight})
    }
}

class TitleScene extends Phaser.Scene { /******** TITLE SCREEN ********/

    constructor() {
        super({ key: 'TitleScene' })
        this.player
        //this.data
        this.knowledge = 0
        this.arr = new Set('readSign1')
    }


    init(data)
    {
        this.player = data.player
        // this.scoreLeft = data.scoreLeft
        // this.scoreRight = data.scoreRight
    }


    preload() {
        this.load.image('face', './assets/globe.png')
        this.load.image('right', './assets/right.png')
    }

    create() {
        var text = this.add.text(250, 300, 'click to begin exploration', { font: '16px Courier', fill: '#0f0' })
        var face = this.add.image(210, 300, 'face').setScale(0.2)
        text.setInteractive({ useHandCursor: true })
        face.setInteractive({ useHandCursor: true })
        face.setScale(0.03)
        if (this.player == null) {
            text.alpha = CHARACTER_OPAQUE
            face.alpha = CHARACTER_OPAQUE
            face.on('pointerup', this.enterButtonHoverState, this)
            text.on('pointerup', this.enterButtonHoverState, this)
        }
        else {
            face.on('pointerup', this.clickButton, this)
            text.on('pointerup', this.clickButton, this)
        }

        var createFig = this.add.text(250, 400, 'click to create your character', { font: '16px Courier', fill: '#0f0' })
        createFig.setInteractive({ useHandCursor: true })
        createFig.on('pointerdown', this.clickButton2, this)

        var icon = this.add.image(210, 400, 'right').setScale(0.02)
        icon.setInteractive({ useHandCursor: true })
        icon.on('pointerup', this.clickButton2, this)


        //this.arr.push(true)

    }

    clickButton() {
        this.scene.start('sceneA', {player: this.player, knowledge: this.knowledge, group: this.arr})
    }

    clickButton2() {
        this.scene.start('character')
    }

    enterButtonHoverState() {
        // this.clickButton.setStyle({ fill: '#ff0' })
        if (this.player == null) {
            var popup = this.add.text(140, 200, 'Sorry, please create a character before playing the game')
        }
    }

    enterButtonRestState() {
        this.clickButton.setStyle({ fill: '#0f0' })
    }
}

var CHARACTER_SCALE = 0.05;
var CHARACTER_OPAQUE = 0.6;
class Character extends Phaser.Scene /******** CHARACTER SCREEN ********/ {

    constructor() {
        super({ key: 'character' })
        this.player
        this.dataL
        this.dataR
        this.arr = [] // push all characters into array and manually set player 
        this.timeText
        this.initialTime
    }
    init(data)
    {
        //this.player = data.player
        // this.dataL = data.scoreLeft
        // this.dataR = data.scoreRight
    }

    preload() {
        this.load.image('ghost', './assets/ghost.png')
        this.load.image('green-fairy', './assets/green-fairy.png')
        //this.load.image('background', './assets/whiteRectangle.png')
        this.load.image('red-angel', './assets/red-angel.png')
        this.load.image('indigo-fairy', './assets/indigo-fairy.png')
        this.load.image('ghost-angel', './assets/ghost-angel.png')
    }

    create() {
        // CHARACTER OPTION 1
        this.addNewPlayer(70, 90, 'ghost')

        // CHARACTER OPTION 2
        this.addNewPlayer(200, 90, 'indigo-fairy')
        this.addNewPlayer(330, 90, 'red-angel')
        this.addNewPlayer(460, 90, 'green-fairy')

        // RETURN TO MAIN SCREEN
        var text = this.add.text(250, 500, 'click to return back to menu screen', { font: '16px Courier', fill: '#ffffff' })
        text.setInteractive({ useHandCursor: true })
        text.setInteractive()
        text.on('pointerup', this.clickButton, this)

        this.input.manager.enabled = true

    }

    clickButton() {
  
        this.scene.start('TitleScene', { player: this.player})
    }

    addNewPlayer(x, y, key) {
        //  background
        // var bg = this.add.image(x, y, 'background')
        // bg.setInteractive({ useHandCursor: true })
        // bg.setScale(0.8)
        //  sprite
        var player = this.add.sprite(x, y, key)
        console.log("debug player: ", player, player.x, player.y)
        player.setInteractive({ useHandCursor: true })
        player.setScale(CHARACTER_SCALE)
        player.inputEnabled = true
        player.alpha = CHARACTER_OPAQUE
        player.on('pointerover', function () { 
            this.alpha = 1
        })
        player.on('pointerout', function () { this.alpha = CHARACTER_OPAQUE })
        // save 'this' to a variable for callbacks
        var self = this
        player.on('pointerup', function(){
            self.setPlayer(this) // 'this' represents the clicked element
            player.alpha = 1
        })
        // SAVE TO CHARACTER ARRAY
        this.arr.push(player)
    }

    setPlayer(player) {
        this.player = player
        console.log("Selected character! set player", player)
        this.update()
    }

    // update alpha depending on selected status
    update() {      
        for(var i = 0; i < this.arr.length; i++) {
            if (this.player != this.arr[i]) {
                this.arr[i].alpha = CHARACTER_OPAQUE
            } else {
                this.arr[i].alpha = 1
            }
        }
    }
}

export default Character

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // will affect our player sprite
            debug: false // change if you need
        }
    },
    scene: [OpeningScreen, LoadScreen, endGame, TitleScene, Character, sceneA, readSign1, sceneAR, readOpenBook, 
        sceneB0, sceneB1, readTableRound, sceneB2, sceneB3, sceneB4, worksCited, quitGame]
}



var game = new Phaser.Game(config)

game.scene.start(OpeningScreen)

