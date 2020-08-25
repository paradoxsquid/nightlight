let brightness = 0
let state = ""
let strip = neopixel.create(DigitalPin.P8, 12, NeoPixelMode.RGB)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) >= 1) {
        state = "ru"
    } else {
        state = "rd"
    }
    if ("ru" == state) {
        brightness += 5
        if (brightness >= 255) {
            brightness = 255
            state = "wait"
        }
    } else if ("rd" == state) {
        brightness += -1
        if (brightness <= 0) {
            brightness = 0
            state = "wait"
        }
    }
    strip.setBrightness(brightness)
    for (let index = 0; index <= 6; index++) {
        strip.setPixelColor(index * 2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(index * 2 + 1, neopixel.colors(NeoPixelColors.Purple))
        strip.show()
    }
    serial.writeNumber(brightness)
    serial.writeString("   ")
    serial.writeLine(state)
})
