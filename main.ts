namespace SpriteKind {
    export const Key = SpriteKind.create()
    export const Key2 = SpriteKind.create()
    export const Key3 = SpriteKind.create()
    export const lever = SpriteKind.create()
    export const leaver2 = SpriteKind.create()
    export const leaver3 = SpriteKind.create()
    export const leaver4 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(14, 14), assets.tile`myTile2`)
    tiles.setTileAt(tiles.getTileLocation(8, 7), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 10), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 14), sprites.dungeon.buttonPinkDepressed)
    tiles.setTileAt(tiles.getTileLocation(8, 3), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 4), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    sprite.sayText("Do I need a key?", 2000, true)
    top_key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 5 5 5 d d f . . . . . 
        . . f 5 5 4 4 4 4 5 d f . . . . 
        . . f 5 5 . . . . 5 4 f . . . . 
        . . . f 4 4 4 5 5 4 f . . . . . 
        . . . . f f 5 5 f f . . . . . . 
        . . . . . f 5 d f . . . . . . . 
        . . . . . f 5 d f f . . . . . . 
        . . . . . f 5 5 d d f . . . . . 
        . . . . . f 5 5 4 f . . . . . . 
        . . . . . f 5 5 5 d f . . . . . 
        . . . . . f 5 4 f f . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Key)
    tiles.placeOnTile(top_key, tiles.getTileLocation(1, 1))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setTilemap(tilemap`level10`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(2, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.leaver2, function (sprite, otherSprite) {
    tiles.setTileAt(tiles.getTileLocation(9, 6), assets.tile`myTile8`)
    tiles.setTileAt(tiles.getTileLocation(4, 2), sprites.dungeon.floorLight0)
    tiles.setWallAt(tiles.getTileLocation(4, 2), false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(playerRed, tiles.getTileLocation(30, 30))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(playerRed, tiles.getTileLocation(4, 30))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    playerRed.setVelocity(0, 0)
    playerRed.y += 1
    playerRed.sayText("AHHHH! HOT!", 1000, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(8, 4), assets.tile`myTile5`)
    game.splash("Gate Map Collected!")
    room2compleate = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    if (room2compleate == 0) {
        tiles.setTilemap(tilemap`level6`)
    } else {
        tiles.setTilemap(tilemap`level7`)
    }
    tiles.placeOnTile(sprite, tiles.getTileLocation(1, 4))
    yes = sprites.create(img`
        d 1 1 1 1 1 1 b d 1 1 1 1 1 1 d 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.lever)
    tiles.placeOnTile(yes, tiles.getTileLocation(2, 1))
    yes2 = sprites.create(img`
        . . . . . . . . . . . . . . . d 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . b 
        . . . . . . . . . . . . . . . d 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . 1 
        . . . . . . . . . . . . . . . d 
        `, SpriteKind.leaver2)
    tiles.placeOnTile(yes2, tiles.getTileLocation(8, 6))
    yes3 = sprites.create(img`
        d 1 1 1 1 1 1 b d 1 1 1 1 1 1 d 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.leaver3)
    tiles.placeOnTile(yes3, tiles.getTileLocation(4, 1))
    yes4 = sprites.create(img`
        d . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        d . . . . . . . . . . . . . . . 
        b . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        1 . . . . . . . . . . . . . . . 
        d . . . . . . . . . . . . . . . 
        `, SpriteKind.leaver4)
    tiles.placeOnTile(yes4, tiles.getTileLocation(5, 5))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.leaver3, function (sprite, otherSprite) {
    tiles.setTileAt(tiles.getTileLocation(4, 0), sprites.dungeon.purpleSwitchDown)
    tiles.setTileAt(tiles.getTileLocation(6, 3), sprites.dungeon.floorLight0)
    tiles.setWallAt(tiles.getTileLocation(6, 3), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key3, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    tiles.setTileAt(tiles.getTileLocation(4, 31), sprites.dungeon.doorOpenSouth)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    side_door += 1
    map_number += 1
    tiles.placeOnTile(sprite, tiles.getTileLocation(17, 1))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    tiles.setTileAt(tiles.getTileLocation(17, 0), sprites.dungeon.doorOpenNorth)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.lever, function (sprite, otherSprite) {
    tiles.setTileAt(tiles.getTileLocation(2, 0), sprites.dungeon.purpleSwitchDown)
    tiles.setTileAt(tiles.getTileLocation(2, 7), sprites.dungeon.floorLight0)
    tiles.setWallAt(tiles.getTileLocation(2, 7), false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(8, 1), sprites.dungeon.chestOpen)
    game.splash("The Gate Key Revived!")
    gate_key += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    sprite.sayText("Do I need a key?", 2000, true)
    bottom_key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 5 5 5 d d f . . . . . 
        . . f 5 5 4 4 4 4 5 d f . . . . 
        . . f 5 5 . . . . 5 4 f . . . . 
        . . . f 4 4 4 5 5 4 f . . . . . 
        . . . . f f 5 5 f f . . . . . . 
        . . . . . f 5 d f . . . . . . . 
        . . . . . f 5 d f f . . . . . . 
        . . . . . f 5 5 d d f . . . . . 
        . . . . . f 5 5 4 f . . . . . . 
        . . . . . f 5 5 5 d f . . . . . 
        . . . . . f 5 4 f f . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Key3)
    tiles.placeOnTile(bottom_key, tiles.getTileLocation(30, 30))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    playerRed.setVelocity(0, 0)
    playerRed.y += 1
    playerRed.sayText("AHHHH! HOT!", 1000, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.leaver4, function (sprite, otherSprite) {
    tiles.setTileAt(tiles.getTileLocation(4, 5), assets.tile`myTile9`)
    tiles.setTileAt(tiles.getTileLocation(7, 4), sprites.dungeon.floorLight0)
    tiles.setWallAt(tiles.getTileLocation(7, 4), false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key2, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    tiles.setTileAt(tiles.getTileLocation(31, 9), sprites.dungeon.doorOpenEast)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedEast, function (sprite, location) {
    sprite.sayText("Do I need a key?", 2000, true)
    right_key = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 5 5 5 d d f . . . . . 
        . . f 5 5 4 4 4 4 5 d f . . . . 
        . . f 5 5 . . . . 5 4 f . . . . 
        . . . f 4 4 4 5 5 4 f . . . . . 
        . . . . f f 5 5 f f . . . . . . 
        . . . . . f 5 d f . . . . . . . 
        . . . . . f 5 d f f . . . . . . 
        . . . . . f 5 5 d d f . . . . . 
        . . . . . f 5 5 4 f . . . . . . 
        . . . . . f 5 5 5 d f . . . . . 
        . . . . . f 5 4 f f . . . . . . 
        . . . . . . f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Key2)
    tiles.placeOnTile(right_key, tiles.getTileLocation(26, 18))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(1, 1), sprites.dungeon.buttonOrangeDepressed)
    tiles.setTileAt(tiles.getTileLocation(8, 9), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 5), sprites.dungeon.floorLight2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnTile(sprite, tiles.getTileLocation(30, 9))
    map_number += 1
    right_door += 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (gate_key < 1) {
        tiles.setTilemap(tilemap`level2`)
    } else {
        tiles.setTilemap(tilemap`level4`)
    }
    tiles.placeOnTile(sprite, tiles.getTileLocation(8, 14))
    scene.setBackgroundColor(0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTeal, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(14, 1), sprites.dungeon.buttonTealDepressed)
    tiles.setTileAt(tiles.getTileLocation(8, 8), sprites.dungeon.floorLight2)
    tiles.setTileAt(tiles.getTileLocation(8, 6), sprites.dungeon.floorLight2)
})
let right_key: Sprite = null
let bottom_key: Sprite = null
let side_door = 0
let yes4: Sprite = null
let yes3: Sprite = null
let yes2: Sprite = null
let yes: Sprite = null
let top_key: Sprite = null
let room2compleate = 0
let gate_key = 0
let playerRed: Sprite = null
playerRed = sprites.create(img`
    . . f f f f f f f f . . 
    . f f f 2 2 2 2 f f f . 
    f f f e e e e e e f f f 
    f f e 2 2 2 2 2 2 e e f 
    f e 2 f f f f f f 2 e f 
    f f f f e e e e f f f f 
    f e f b f 4 4 f b f e f 
    f e 4 1 f d d f 1 4 e f 
    f e e d d d d d d e e f 
    . f e e 4 4 4 4 e e f . 
    e 4 f 2 2 2 2 2 2 f 4 e 
    4 d f 4 4 5 5 4 4 f d 4 
    4 4 f f f f f f f f 4 4 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(playerRed)
scene.setBackgroundColor(0)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(playerRed)
tiles.placeOnRandomTile(playerRed, sprites.dungeon.stairEast)
gate_key = 0
let right_door = 0
let map_number = 0
room2compleate = 0
forever(function () {
    if (side_door >= 1 && map_number >= 1) {
        tiles.setTileAt(tiles.getTileLocation(17, 0), sprites.dungeon.doorOpenNorth)
    }
    if (right_door >= 1 && map_number >= 1) {
        tiles.setTileAt(tiles.getTileLocation(31, 9), sprites.dungeon.doorOpenEast)
        yes.destroy()
        yes2.destroy()
        yes3.destroy()
        yes4.destroy()
    }
})
