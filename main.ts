radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("TE HAS MOVIDO")
})
radio.setGroup(23)
