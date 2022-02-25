//To Do
//Select elements on the page  Canvas, buttons
//Set up event listener/draw function 

//setup canvas for drawing
//write handler for keys
//write clear/shake function
//listen for arrow keys

const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector(".shake");
const MOVE_AMOUNT = 10;

const width = canvas.width;
const height = canvas.height;

//create random X and Y for starting point on Canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0 //Change color of snakkkkeeee
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
ctx.beginPath();  //start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

//Destructure Yay nay?
function draw(options) {
    hue = hue + 5;  //increment the hue
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    console.log(options.key);
    ctx.beginPath();
    ctx.moveTo(x, y);
    // Move X and Y value depending on what the user does
    switch (options.key) {
        case  'ArrowUp':
            y = y - MOVE_AMOUNT;
            break;
        case  'ArrowRight':
            x = x + MOVE_AMOUNT;
            break;
        case  'ArrowLeft':
            x = x - MOVE_AMOUNT;
            break;
        case  'ArrowDown':
            y = y + MOVE_AMOUNT;
            break;
        default:
            break;    
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

//If screen scrolls while listening to keys, us 
//function(event) {event.preventDefault();}
function handleKey(e) {
    if(e.key.includes('Arrow')) {
        draw({ key: e.key });
    }
    
}

//clear/shake buttttoonnn function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height)
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake')
    }, {once: true}
    );
        
}

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);