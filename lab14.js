const canvas = document.querySelector('.gameCanvas');
let pointEl = document.querySelector('.point');
let pointEl1 = document.querySelector('.point1');
let point = 0;
let point1 = 0;
console.log(canvas);
const ctx = canvas.getContext("2d");
console.log(ctx);

let snake = [{x:10,y:10}];
let snake2 = [{x:5,y:10}];
let food = {x:3,y:7};
let gridSize = 20;
let snakeColor = "green";
let foodColor = "red";
let dx=1, fx=-1;
let dy=0, fy=0;
let random1;
let random2;
drawSnake(snake,snakeColor);
function drawSnake(snakeEl,color){
    snakeEl.forEach(segment =>{
        ctx.fillStyle = color;
        ctx.fillRect(segment.x*gridSize,segment.y*gridSize,gridSize,gridSize);
    })
}
function drawFood(){
    ctx.fillStyle = foodColor;
    ctx.fillRect(food.x*gridSize,food.y*gridSize,gridSize,gridSize);
} 
function update(){
    const head = {x:snake[0].x+dx,y:snake[0].y-dy}
    const head2 = {x:snake2[0].x+fx,y:snake2[0].y-fy}
    // unshift()-> nemeh , pop()-> hasah
    snake.unshift(head);
    snake2.unshift(head2);
    if((head.x==food.x && head.y==food.y)){
        random1 = Math.floor(Math.random()*20);
        random2 = Math.floor(Math.random()*20);
        food = {x:random1,y:random2};
        point++;
    }else{
        snake.pop();
    }
    if((head.y<0)){
        snake = [{x:8,y:6}];
        point=0;
    }else if((head.x<0)){
        snake = [{x:8,y:6}];
        point=0;
    }else if((head.x>20)){
        snake = [{x:8,y:6}];
        point=0;
    }else if((head.y>20)){
        snake = [{x:8,y:6}];
        point=0;
    }
    if((head2.x==food.x && head2.y==food.y)){
        random1 = Math.floor(Math.random()*20);
        random2 = Math.floor(Math.random()*20);
        food = {x:random1,y:random2};
        point1++;
    }else{
        snake2.pop();
    }
    if((head2.y<0)){
        snake2 = [{x:5,y:6}];
        point1=0;
    }else if((head2.x<0)){
        snake2 = [{x:5,y:6}];
        point1=0;
    }else if((head2.x>20)){
        snake2 = [{x:5,y:6}];
        point1=0;
    }else if((head2.y>20)){
        snake2 = [{x:5,y:6}];
        point1=0;
    }

    pointEl.innerText = "Point-green:"+point;
    pointEl1.innerText = "Point-yellow:"+point1;
    // snake.pop();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawSnake(snake,snakeColor);
    drawFood();
    drawSnake(snake2,"yellow");
}
const gameLoop = setInterval(update,300);
document.addEventListener('keydown',(event)=>{
    console.log(event.key);
    switch(event.key){
        case "ArrowUp":
            if(dy!==-1){
                dx=0;
                dy=1;
            }
            break;
        case "ArrowDown":
            if(dy!==1){
                dx=0;
                dy=-1;
            }
            break;
        case "ArrowLeft":
            if(dx!==1){
                dx=-1;
                dy=0;
            }
            break;
        case "ArrowRight":
            if(dx!==-1){
                dx=1;
                dy=0;
            }
            break;
    }
});
document.addEventListener('keydown',(event)=>{
    console.log(event.key);
    switch(event.key){
        case "w":
            if(fy!==-1){
                fx=0;
                fy=1;
            }
            break;
        case "s":
            if(fy!==1){
                fx=0;
                fy=-1;
            }
            break;
        case "a":
            if(fx!==1){
                fx=-1;
                fy=0;
            }
            break;
        case "d":
            if(fx!==-1){
                fx=1;
                fy=0;
            }
            break;
    }
});
