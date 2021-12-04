// At the start of the program the channel that the Microbit broadcasts
// to is set to channel 13.
// The servo motor was set to an original position of 0 degrees.
radio.setGroup(13)
servos.P0.setAngle(0)

// When the partner MicroBit sends a broadcast, the code checks whether
// the broadcast message is "Mask Disconnect" or "Mask Connect".
radio.onReceivedString(function (receivedString) {
    // If the message is "Mask Disconnect" then the code returns to the
    // servo's original position of 0 degrees.
    if (receivedString == "Mask Disconnect") {
        servos.P0.setAngle(0)
    // If the message is "Mask Connect" then the code makes the servo move
    // to 180 degrees, making the Mask flip around to show a grave stone.
    } else if (receivedString == "Mask Connect") {
        servos.P0.setAngle(180)
    }
})

// The code constantly checks whether the switch has been activated.
// If the switch is not being pressed down, then the code broadcasts 
// the message "No Press". If the switch is activated, the code
// broadcasts the message "Press Down".
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        radio.sendString("No Press")
    } else {
        radio.sendString("Press Down")
    }
})
