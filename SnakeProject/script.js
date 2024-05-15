let body = document.querySelector("body");
let gameBoard;
function initialize() {
  createImageBoard();
}

function createImageBoard() {
  gameBoard = document.createElement("div");
  gameBoard.style.display = "grid";
  gameBoard.style.border = "5px groove brown";
  if (window.innerWidth > window.innerHeight) {
    let w, h;
    w = parseInt((window.innerWidth * 0.75) / 10) * 10;
    h = parseInt((window.innerHeight - 10) / 10) * 10;
    gameBoard.style.width = w + "px";
    gameBoard.style.height = h + "px";
    gameBoard.style.background = "#0000";
    gameBoard.style.gridTemplateColumns = "repeat(" + w / 10 + ",10px)";
    gameBoard.style.gridTemplateRows = "repeat(" + h / 10 + ",10px)";
  } else {
    let w, h;
    w = (parseInt(window.innerWidth - 10) / 10) * 10;
    h = (parseInt(window.innerHeight * 0.75) / 10) * 10;
    gameBoard.style.width = w + "px";
    gameBoard.style.height = h + "px";
    gameBoard.style.gridTemplateColumns = "repeat(" + h / 10 + ",10px)";
    gameBoard.style.gridTemplateRows = "repeat(" + w / 10 + ",10px)";
  }
  body.appendChild(gameBoard);
}
initialize();
