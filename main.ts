let distance = 0
led.enable(false)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.pause(50)
    serial.writeValue("distance(cm)", distance)
})
