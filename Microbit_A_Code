// At the start of the program the channel that the Microbit broadcasts
// to is set to channel 13.
// The servo motor was set to an original position of 180 degrees.
radio.setGroup(13)
servos.P0.setAngle(180)

// When the partner MicroBit sends a broadcast, the code checks whether
// the broadcast message is "Reset Kick" or "Do Kick".
radio.onReceivedString(function (receivedString) {
    // If the message is "Reset Kick" then the code returns to the
    // servo's original position of 180 degrees.
    if (receivedString == "Reset Kick") {
        servos.P0.setAngle(180)
    // If the message is "Do Kick" then the code makes the servo move to
    // 0 degrees, making the arm swing down.
    } else if (receivedString == "Do Kick") {
        servos.P0.setAngle(0)
    }
})

// The code constantly checks whether the switch has been activated.
// If the switch is not being used, then the code broadcasts the message
// "Mask Disconnect". If the switch is activated, the code broadcasts
// the message "Mask Connect".
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        radio.sendString("Mask Disconnect")
    } else {
        radio.sendString("Mask Connect")
    }
})
