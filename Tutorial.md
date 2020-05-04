# Information zum Zufallszahl-Genertor
Das ist die Überschrift
## Step 1 @fullscreen
Legen die Ausgabe einer Zahl an!

## Step 2
Probiere das System

## Step 3
```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(19)
})
```
## Step 4
Get a ``||input:temperature|| block and place it in the value slot of ``||basic:show number||``. You can also make a temperature message if you want.

```blocks
forever(function() {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
```

```ghost
basic.showString("Hello!")
```


