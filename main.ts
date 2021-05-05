input.onButtonPressed(Button.A, function () {
    F = F / 2
    A = A / 2
    C = C / 2
    E = E / 2
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(A, music.beat(BeatFraction.Half))
    music.playTone(C, music.beat(BeatFraction.Half))
    music.playTone(E, music.beat(BeatFraction.Half))
})
input.onButtonPressed(Button.B, function () {
    F = F * 2
    A = A * 2
    C = C * 2
    E = E * 2
})
input.onPinPressed(TouchPin.P1, function () {
    music.playTone(F, music.beat(BeatFraction.Half))
    music.playTone(A, music.beat(BeatFraction.Half))
    music.playTone(C, music.beat(BeatFraction.Half))
})
let E = 0
let C = 0
let A = 0
let F = 0
F = 349
A = 440
C = 523
E = 659
