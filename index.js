// canvas object
const canvas = document.querySelector('canvas')

// set up context
const c = canvas.getContext('2d')

// resize
canvas.width = 1024 
canvas.height = 576 

// log
console.log(canvas)

// canvas for the game
c.fillStyle = 'pink'
c.fillRect(0, 0, canvas.width, canvas.height)

// html image objects and src
const image = new Image() 
image.src = './img/PokeTown.png' //draw town map

const playerImage = new Image()
playerImage.src = './img/playerDown.png' //draw player

// images are drawn when they're loaded 
image.onload = () => {
    c.drawImage(image,-740, -600) //map starting point

    // player starting point
    c.drawImage(
        playerImage, 
        (canvas.width / 2) - (playerImage.width / 2), 
        (canvas.height / 2) - (playerImage.height / 2)
    )
}