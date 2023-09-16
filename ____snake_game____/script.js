var timed = gsap.timeline();
var intervalId; // Define a variable to hold the interval ID

function time() {
    var a = 0;
    intervalId = setInterval(() => {
        if (a < 100) {
            a += Math.floor(Math.random() * 15);
            document.querySelector('#counter').innerHTML = a + '% Loading';
        } else {
            a = 100;
            document.querySelector('#counter').innerHTML = a + '% Loading';
            clearInterval(intervalId); // Stop the interval when a reaches 100%
        }
    }, 100);
}

timed.to('.main.loader.display', { // remember where nesting don't leave spaces
    scale: 1.5,
    delay: 0.5,
    duration: 1,
    onStart: time,
});

timed.to('.main', {
    y: -1100,
    delay: 1,
    duration: 2,
});


/*============ Game Constants & variables ========== */
let inputDir = { x: 0, y: 0 };
let score = 0;
const movesound = new Audio('movement.mp3')
const food_sound = new Audio('eatenup.mp3');
const game_over = new Audio('gameee bg.mp3');
const music_sound = new Audio('kallu.mp3');

let speed = 5;
let lastPaintTime = 0;

let snake_arr = [
    { x: 13, y: 15 }
];
food = { x: 6, y: 7 };
/*================== Game Functions ================= */

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < (1 / speed))
        return;

    lastPaintTime = ctime;
    GameEngine();
}

function isCollide(snake) {


    /* If you bump into yourself */

    for (let i = 1; i < snake_arr.length; ++i) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y)
            return true;
    }

    // snake collision with the walls
    if (snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0)
        return true;
    return false;
}

function GameEngine() {
    /* Part 1: Updating the snake variable */
    if (isCollide(snake_arr)) {
        game_over.play();
        music_sound.pause();
        inputDir = { x: 0, y: 0 };
        alert("Game Over. Press any Key to Play again !");
        const scoreValue = document.getElementById('scoreValue');
        // Update the score text without affecting font properties
        scoreValue.textContent = 0;
        game_over.pause();
        snake_arr = [{ x: 13, y: 15 }];
        music_sound.play();
        score = 0;
    }

    /* since the food is eaten generate new food & increase score */
    if (snake_arr[0].y === food.y && snake_arr[0].x === food.x) {
        score += 1;
        food_sound.play();

        const scoreValue = document.getElementById('scoreValue');
        // Update the score text without affecting font properties
        scoreValue.textContent = score;
        snake_arr.unshift({ x: snake_arr[0].x + inputDir.x, y: snake_arr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    /* Moving the snake part */
    for (let i = snake_arr.length - 2; i >= 0; --i) {
        snake_arr[i + 1] = { ...snake_arr[i] };
    }
    snake_arr[0].x += inputDir.x;
    snake_arr[0].y += inputDir.y;

    /* Part 2: Display the Snake && Food */

    /* ** Display the Snake** */
    board.innerHTML = "";
    snake_arr.forEach((e, idx) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (idx === 0)
            snakeElement.classList.add('head');
        else
            snakeElement.classList.add('snake');
        board.appendChild(snakeElement);
    });

    /* ** Display the Food ** */
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}
/*================= Game Main Logic ================= */
window.requestAnimationFrame(main);

window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 }; /* Start The Game */
    //movesound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log('Arrow Up');
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log('Arrow Down');
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log('Arrow Left');
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log('Arrow Right');
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
})

/*=================================================== */
