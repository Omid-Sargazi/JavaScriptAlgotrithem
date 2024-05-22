let body = document.querySelector("body");
let gameBoard;
let gridWidth;
let grideHeight;
let snake;
let direction;
let startStopHandler = null;
let headX, headY;
let food, foodX, foodY;
let scoreSpan,
  scoreAmount = 0;
function initialize() {
  body.innerHTML = "";
  createImageBoard();
  createSnake(5);
  drawSnake();
  insertFood();
  direction = "R";
  if (startStopHandler != null) clearInterval(startStopHandler);
  startStopHandler = setInterval(move, 100);
}

function createImageBoard() {
  gameBoard = document.createElement("div");
  gameBoard.style.display = "grid";
  gameBoard.style.border = "5px groove brown";
  let info = document.createElement("div");
  info.style.display = "absolute";
  info.style.background = "gray  ";
  scoreSpan = document.createElement("span");
  scoreSpan.style.position = "absolute";
  scoreSpan.style.right = "5px";
  scoreSpan.style.top = "5px";
  scoreSpan.style.background = "yellow";
  // scoreSpan.style.innerHTML = "0";
  scoreSpan.innerHTML = "Score :" + scoreAmount;
  info.appendChild(scoreSpan);

  if (window.innerWidth > window.innerHeight) {
    let w, h;

    w = parseInt((window.innerWidth * 0.75) / 10) * 10;
    h = parseInt((window.innerHeight - 10) / 10) * 10;
    gridWidth = w / 10;
    grideHeight = h / 10;

    gameBoard.style.width = w + "px";
    gameBoard.style.height = h + "px";
    gameBoard.style.background = "#0000";
    gameBoard.style.gridTemplateColumns = "repeat(" + gridWidth + ",10px)";
    gameBoard.style.gridTemplateRows = "repeat(" + grideHeight + ",10px)";
    info.style.width = "23%";
    info.style.height = "98%";
    info.style.right = "0";
    info.style.top = "0";
  } else {
    let w, h;

    w = (parseInt(window.innerWidth - 10) / 10) * 10;
    h = (parseInt(window.innerHeight * 0.75) / 10) * 10;
    grideHeight = h / 10;
    gridWidth = w / 10;

    gameBoard.style.width = w + "px";
    gameBoard.style.height = h + "px";
    gameBoard.style.gridTemplateColumns = "repeat(" + gridWidth + ",10px)";
    gameBoard.style.gridTemplateRows = "repeat(" + grideHeight + ",10px)";
    info.style.height = "23%";
    info.style.width = "98%";
    info.style.bottom = "0";
  }
  body.appendChild(gameBoard);
  body.appendChild(info);
}

function createSnake(num) {
  snake = [];
  let x = 20;
  let y = 20;
  for (let i = 0; i < num; i++) {
    snake.push([x++, y]);
  }
  headX = --x;
  headY = y;
}
function drawSnake() {
  gameBoard.innerHTML = "";
  for (let i = 0; i < snake.length; i++) {
    let p = document.createElement("span");

    p.style.display = "block";
    p.style.width = "10px";
    p.style.height = "10px";
    p.style.borderRadius = "5px";
    p.style.background = "red";
    p.style.boxShadow = "0 0 2px 0 black";
    p.style.gridColumn = snake[i][0];
    p.style.gridRow = snake[i][1];
    gameBoard.appendChild(p);
  }

  let p = document.createElement("span");
  p.style.display = "block";
  p.style.width = "10px";
  p.style.height = "10px";
  p.style.background = "green";
  p.style.boxShadow = "0 0 2px 0 black";
  p.style.gridColumn = foodX;
  p.style.gridRow = foodY;
  gameBoard.appendChild(p);
  food = p;
}

function move() {
  switch (direction) {
    case "R":
      headX++;
      if (headX > gridWidth) headX = 1;
      break;
    case "L":
      headX--;
      if (headX < 1) headX = gridWidth;
      break;
    case "U":
      headY--;
      if (headY < 1) headY = grideHeight;
      break;
    case "D":
      headY++;
      if (headY > grideHeight) headY = 1;
      break;
  }
  if (check() == 0) {
    for (let i = 0; i < snake.length - 1; i++) {
      snake[i][0] = snake[i + 1][0];
      snake[i][1] = snake[i + 1][1];
    }
  }
  snake[snake.length - 1][0] = headX;
  snake[snake.length - 1][1] = headY;
  drawSnake();
}

window.addEventListener("keydown", function (e) {
  //   this.alert(e.keyCode);
  switch (e.keyCode) {
    case 37:
      direction = "L";
      break;
    case 38:
      direction = "U";
      break;
    case 39:
      direction = "R";
      break;
    case 40:
      direction = "D";
      break;
  }
});
function check() {
  if (headX == foodX && headY == foodY) {
    snake.push([foodX, foodY]);
    gameBoard.removeChild(food);
    insertFood();
    scoreAmount++;
    scoreSpan.innerHTML = "Score :" + scoreAmount;
    return "foodAte";
  } else if (checkCollision()) {
    alert("game over");
    initialize();
  } else return 0;
}

function checkCollision() {
  let flag = false;
  for (let i = 0; i < snake.length; i++) {
    if (headX == snake[i][0] && headY == snake[i][1]) {
      flag = true;
    }
  }
  return flag;
}

function insertFood() {
  let fx = false;
  let x = 0,
    y = 0;
  while (!fx) {
    fx = true;
    x = parseInt(Math.random() * (gridWidth - 1) + 1);
    y = parseInt(Math.random() * (grideHeight - 1) + 1);

    console.log("inserting food");
    for (let i = 0; i < snake.length; i++) {
      if (snake[i][0] == x && snake[i][1] == y) {
        fx = false;
      }
    }
  }
  foodX = x;
  foodY = y;
}

initialize();
