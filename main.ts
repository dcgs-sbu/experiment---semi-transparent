namespace SpriteKind {
    export const Scenery = SpriteKind.create()
}
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
let cloud = sprites.create(img`
    ...................ddddddd......
    ................ddd.1.1.1.ddd...
    ...............d.1.1.1.1.1.1.d..
    .....ddddddd..d.1.1.1.1.1.1.1.d.
    ....d1.1.1.1d.d1.1.1.1.1.1.1.1d.
    ...d1.1.1.1.1d1.1.1.1.1.1.1.1.d.
    ..d1.1.1.1.1.1.1.1.1.1.1.1.1.1d.
    ..d.1.1.1.1.1.1.1.1.1.1.1.1.1.d.
    ..d1.1.1.1.1.1.1.1.1.1.1.1.1.1d.
    ..d.1.1.1.1.1.1.1.1.1.1.1.1.1.b.
    ..d1.1.1.1.1.1.1.1.1.1.1.1.1.1b.
    ..b.1.1.1.1.1.1.1.1.1.1.1.1.1.b.
    ..b1.1.1.1.1.1bb.1.1.1.1.1.1.b..
    ...b1.1.1.1.1b..b.1.1.1.1.1.b...
    ....b1.1.1.1b....b.1.1.1.1.b....
    .....bbbbbbb......bbbbbbbbb.....
    `, SpriteKind.Scenery)
