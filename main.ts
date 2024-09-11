function showDirection (Direction2: string) {
    if (Direction2 == "Left") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . #
            . . # . #
            `)
    } else if (Direction2 == "Right") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            # . . # .
            # . # . .
            `)
    } else if (Direction2 == "Forward") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.No)
    }
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(200)
}
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
let Directions: number[] = []
music.setVolume(127)
radio.setGroup(33)
basic.forever(function () {
	
})
