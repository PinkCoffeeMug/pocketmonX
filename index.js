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
}

``` 
player movements on the map
```
// listen for keyboard event with object e
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            console.log('pressed w key')
            break
        case 'a':
            console.log('pressed a key')
            break
        case 's':
            console.log('pressed s key')
            break
        case 'd':
            console.log('pressed d key')
            break    
    }

})