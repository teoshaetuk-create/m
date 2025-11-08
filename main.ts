let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f . . . . 
    . . f e e e e e e e e f . . . . 
    . . f e 1 9 e 1 9 e e f . . . . 
    . . f e 1 9 e 1 9 e e f . . . . 
    . . f e 1 9 e 1 9 e e f . . . . 
    . . f e 1 9 e 1 9 e e f . . . . 
    . . f e e e e e e e e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . . f f f f f f . . . . . . 
    . . f f f 8 8 8 8 f f f . . . . 
    . . f e f 8 8 8 8 f e f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . . f c c f c f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setLife(3)
scene.setBackgroundColor(7)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(img`
        ................
        ................
        ................
        ..ffffffffffff..
        ..f7766666667f..
        ..f6666677767f..
        ..f7777777777f..
        ffffffffffffffff
        f77666666666677f
        f66776666666667f
        ffffffffffffffff
        ..ffffffffffff..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..feeeeeeeeeef..
        ..ffffffffffff..
        ................
        `, SpriteKind.Player)
    mySprite2.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenWidth()))
})
game.onUpdateInterval(5000, function () {
    mySprite3 = sprites.create(img`
        ........4444444444444444444...
        ........4dd4dd4d4ddd4dd4dd4...
        ........4dd4dd4d4ddd4dd4dd4...
        ........4444444444444444444...
        ....4444bbbbbbbbbbbbbbb4b4444.
        ....4dd4bbbbbbbbbbbbbbb4b4dd4.
        ....4dd4bbbbbbbbbbbbbbb444444.
        ....4444bbbbbbbbbbbbbbbb4b4dd4
        .444bbbbbbbbbbbbbbbbbbbb4b4444
        .4d4bbbbbbbbbbbbbbbbbbbbb4b444
        .4d4bbbbbbbbbbbbbbbbbbbbb4b4d4
        .4d4bbbbbbbbbbbbbbbbbbbbb44444
        .444bbbbbbbbbbbbbbbbbbbbbbb4..
        ....cccccccccccccccccccccccc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cbbbbbbbbbbbbbbbbbccbbbc..
        ....cccccccccccccccccccccccc..
        ..............................
        ..............................
        `, SpriteKind.Player)
    mySprite3.setPosition(190, 8)
})
