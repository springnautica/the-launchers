let mySprite = sprites.create(assets.image`myImage4`, SpriteKind.Player)
game.splash("Locker Cheese Studios presents・・・")
scene.setBackgroundColor(8)
mySprite.setPosition(84, 35)
game.splash("THE LAUNCH")
animation.runImageAnimation(
mySprite,
assets.animation`myAnim1`,
200,
false
)
game.showLongText("The rocket ship has exploded!", DialogLayout.Bottom)
game.showLongText(" Please bring the parts so we can fix it!!! ", DialogLayout.Bottom)
sprites.destroy(mySprite)
tiles.setCurrentTilemap(tilemap`level0`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`myImage`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`myImage0`, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
