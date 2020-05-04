input.onButtonPressed(Button.A, function () {
    demo.coolStuff()
    basic.showNumber(0)
})
namespace demo {
    //% block
    export function coolStuff() {
        basic.showString("x")
    }
}
