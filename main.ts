namespace SpriteKind {
    export const Leftpaddle = SpriteKind.create()
    export const RightPaddle = SpriteKind.create()
}
function Create_left_paddle () {
    Left_paddle = sprites.create(img`
. . . . . f c c c c f . . . . . 
. . c c f b b 3 3 b b f c c . . 
. c b 3 3 b b c c b b 3 3 b c . 
. f 3 c c c b c c b c c c 3 f . 
f c b b c c b c c b c c b b c f 
c 3 c c b c c c c c c b c c 3 c 
c 3 c c c c c c c c c c c c 3 c 
. f b b c c c c c c c c b b f . 
. . f b b c c c c c c b b f . . 
. . c c c f f f f f f c c c . . 
. c 3 f f f f f f f f f f 3 c . 
c 3 f f f f f f f f f f f f 3 c 
f 3 c c f f f f f f f f c c 3 f 
f b 3 c b b f b b f b b c 3 b f 
. c b b 3 3 b 3 3 b 3 3 b b c . 
. . f f f f f f f f f f f f . . 
`, SpriteKind.Leftpaddle)
    controller.moveSprite(Left_paddle, 0, 150)
    Left_paddle.x = 0
    Left_paddle.setFlag(SpriteFlag.StayInScreen, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
function createball () {
    ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . 8 9 9 9 9 9 9 9 8 . . . . 
. . . 8 9 3 3 3 1 1 9 8 . . . . 
. . . 8 9 3 3 3 1 1 9 8 . . . . 
. . . 8 9 3 3 3 3 3 9 8 . . . . 
. . . 8 9 3 3 3 3 3 9 8 . . . . 
. . . 8 9 3 3 3 3 3 9 8 . . . . 
. . . 8 9 9 9 9 9 9 9 8 . . . . 
. . . . 8 9 9 9 9 9 8 . . . . . 
. . . . . 8 8 8 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setFlag(SpriteFlag.BounceOnWall, true)
    ball.y = Math.randomRange(0, 120)
}
function Create_right_paddle () {
    Right_paddle = sprites.create(img`
. . . . . f c c c c f . . . . . 
. . c c f b b 3 3 b b f c c . . 
. c b 3 3 b b c c b b 3 3 b c . 
. f 3 c c c b c c b c c c 3 f . 
f c b b c c b c c b c c b b c f 
c 3 c c b c c c c c c b c c 3 c 
c 3 c c c c c c c c c c c c 3 c 
. f b b c c c c c c c c b b f . 
. . f b b c c c c c c b b f . . 
. . c c c f f f f f f c c c . . 
. c 3 f f f f f f f f f f 3 c . 
c 3 f f f f f f f f f f f f 3 c 
f 3 c c f f f f f f f f c c 3 f 
f b 3 c b b f b b f b b c 3 b f 
. c b b 3 3 b 3 3 b 3 3 b b c . 
. . f f f f f f f f f f f f . . 
`, SpriteKind.RightPaddle)
    controller.player2.moveSprite(Right_paddle, 0, 150)
    Right_paddle.x = 150
    Right_paddle.setFlag(SpriteFlag.StayInScreen, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Leftpaddle, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
    info.player1.changeScoreBy(1)
})
let Right_paddle: Sprite = null
let ball: Sprite = null
let Left_paddle: Sprite = null
createball()
Create_left_paddle()
Create_right_paddle()
