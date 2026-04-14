basic.forever(function () {
    if (20 > sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )) {
        music.play(music.stringPlayable("G - G - G - G - ", 140), music.PlaybackMode.UntilDone)
    } else if (10 > sonar.ping(
    DigitalPin.P1,
    DigitalPin.P0,
    PingUnit.Centimeters
    )) {
        music.play(music.stringPlayable("B C B C B C B C ", 170), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
})
