let brightness = 0
let state = ""
let strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) >= 1) {
        state = "ru"
    } else {
        state = "rd"
    }
    if ("ru" == state) {
        brightness += 20
        if (brightness >= 255) {
            brightness = 255
            state = "wait"
        }
    } else if ("rd" == state) {
        brightness += -10
        if (brightness <= 0) {
            brightness = 0
            state = "wait"
        }
    }
    serial.writeNumber(brightness)
    serial.writeLine(state)
})
