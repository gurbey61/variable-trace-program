let X = 0
let Y = 0
input.onButtonPressed(Button.A, function () {
    X = 0
    basic.showNumber(X)
    Y = 15
    basic.showNumber(Y)
    X = X + 4
    basic.showNumber(X)
    basic.showNumber(Y)
    Y = Y + X
    basic.showNumber(X)
    basic.showNumber(Y)
})
