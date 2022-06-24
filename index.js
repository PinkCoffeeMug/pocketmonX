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

//create a html image object within js by referencing the source
const image = new Image()
image.src = './img/PokeTown.png'

//draw image when image is loaded 
image.onload = () => {
    c.drawImage(image,-700, -500) //map starting point
}