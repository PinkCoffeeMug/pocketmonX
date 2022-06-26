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
image.src = './img/PokeTown.png' //town source map

const playerImage = new Image()
playerImage.src = './img/playerDown.png' //player image

/*
create sprite class 
for easy bg manipulations later 
*/

class Sprite {
    constructor({
        position,
        velocity,
        image
    }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, -740, -600) //map
    }
}

//background sprite
const background = new Sprite({ 
    position: {
        x: -740,
        y: -600
    },
    image: image
})

// keys: reference for listeners
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

// request animation
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    console.log('animate')
    
    // player starting point
    c.drawImage(
        playerImage,

        //cropping player image
        0, // x 
        0, // y 
        playerImage.width / 4, // crop width
        playerImage.height, // crop height
        
        // where player should render at
        (canvas.width / 2) - (playerImage.width / 4) / 2, // player's x-pos 
        (canvas.height / 2) - (playerImage.height / 2), // player's y-pos
        playerImage.width / 4, 
        playerImage.height 
    )

    // if pressed keys, then move
    if (keys.w.pressed) {
        background.position.y = background.position.y - 3 // current pos on y-axis
    }
}
animate()

/*
player movements on keyboard
*/

// listen for keyboard event with object e
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break    
    }
})

// listen for keyup
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break    
    }
})