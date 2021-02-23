input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    led.plot(1, 1)
    led.plot(3, 1)
    led.plot(0, 3)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 3)
    basic.pause(2000)
    led.unplot(1, 1)
    led.unplot(3, 1)
    basic.pause(200)
})
