'use strict';
(function() {

  let invisBoard = Array(7);
  let Yturn = true;

  window.addEventListener('load', init);
  window.addEventListener('load', createBoard);

  function init() {
    document.getElementById('back').addEventListener('click', backHome)
    let board = document.getElementById('board');
    for(let i = 0; i < 7; i++){
      let column = document.createElement('div');
      column.classList.add('column');
      column.id = i;
      column.addEventListener('click', columnClick);
      for(let j = 0; j < 6; j++) {
        let spot = document.createElement('div');
        spot.classList.add('spot')
        let circle = document.createElement('div');
        circle.classList.add('circle');
        circle.id = i.toString() + j.toString();
        spot.appendChild(circle);
        column.appendChild(spot);
      }
      //column.id = i.toString();
      board.appendChild(column);
    }
  }

  function backHome() {
    location.href = "/index.html"
  }

  function createBoard() {
    for(let i = 0; i < 7; i++) {
      invisBoard[i] = Array(6);
    }
  }

  function columnClick() {
    play(this.id);
  }

  function play(col) {
    let found = false;
    let index = -1;
    if (typeof invisBoard[col][5] == 'undefined') {
      index = 5;
    } else {
      for(let i = 0; i < 6; i++) {
        if (typeof invisBoard[col][i] !== 'undefined') {
          if (!found) {
            index = i - 1;
          }
          found = true;
        }
      }
    }
    if (index >= 0 && index < invisBoard[col].length) {
      if (Yturn) {
        invisBoard[col][index] = 'Y';
        document.getElementById(col + index.toString()).style.backgroundColor = 'yellow';
        Yturn = false;
      } else {
        invisBoard[col][index] = 'R';
        document.getElementById(col + index.toString()).style.backgroundColor = 'red';
        Yturn = true;
      }
      changeTurn();
    }
    checkWinner();
  }

  function changeTurn() {
    turn = document.getElementById('turn');
    if (Yturn) {
      turn.textContent = "Yellow's Turn";
    } else {
      turn.textContent = "Red's Turn";
    }
  }

  function checkWinner() {
    let winner = false;
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 6; j++) {
        if (j < 3) {
          if (checkSide()) {
            winner = true;
            console.log(1);
          }
        } else {
          if (i < 3) {
            if (checkUp(i, j)) {
              winner = true;
              console.log(2);
            }
            if (checkSide(i, j)) {
              winner = true;
              console.log(3);
            }
            if (checkUpRight(i, j)) {
              winner = true;
              console.log(4);
            }
          } else if (i > 3) {
            if (checkUp(i, j)) {
              winner = true;
              console.log(5);
            }
            if (checkUpLeft(i, j)) {
              winner = true;
              console.log(7);
            }
          } else {
            if (checkUp(i, j)) {
              winner = true;
              console.log(8);
            }
            if (checkSide(i, j)) {
              winner = true;
              console.log(9);
            }
            if (checkUpRight(i, j)) {
              winner = true;
              console.log(10);
            }
            if (checkUpLeft(i, j)) {
              winner = true;
              console.log(11);
            }
          }
        }
      }
    }
    if (winner) {
      console.log('You win');
      endGame();
    }
  }

  function endGame() {
    document.getElementById('board').childNodes.forEach(function(element) {
      element.removeEventListener('click', columnClick);
    })
    let win = document.createElement('strong');
    let winner = "";
    if (Yturn) {
      winner = "Red";
    } else {
      winner = "Yellow";
    }
    win.textContent = winner + " Won!";
    win.id = 'winBox';
    document.getElementById('board').appendChild(win);
  }

  function checkUp(col, row) {
    let same = true
    if (typeof invisBoard[col] !== 'undefined' && typeof invisBoard[col][row] !== 'undefined') {
      let origin = invisBoard[col][row];
      for (let i = 1; i < 4; i++) {
        if (invisBoard[col][row - i] !== origin) {
          same = false;
        }
      }
    } else {
      same = false;
    }
    return same;
  }

  function checkSide(col, row) {
    let same = true;
    if (typeof invisBoard[col] !== 'undefined' && typeof invisBoard[col][row] !== 'undefined') {
      let origin = invisBoard[col][row];
      for (let i = 1; i < 4; i++) {
        if (invisBoard[col + i][row] !== origin) {
          same = false;
        }
      }
    } else {
      same = false;
    }
    return same;
  }

  function checkUpRight(col, row) {
    let same = true;
    if (typeof invisBoard[col] !== 'undefined' && typeof invisBoard[col][row] !== 'undefined') {
      let origin = invisBoard[col][row];
      for (let i = 1; i < 4; i++) {
        if (invisBoard[col + i][row - i] !== origin) {
          same = false;
        }
      }
    } else {
      same = false;
    }
    return same;
  }

  function checkUpLeft(col, row) {
    let same = true;
    if (typeof invisBoard[col] !== 'undefined' && typeof invisBoard[col][row] !== 'undefined') {
      let origin = invisBoard[col][row];
      for (let i = 1; i < 4; i++) {
        if (invisBoard[col - i][row - i] !== origin) {
          same = false;
        }
      }
    } else {
      same = false;
    }
    return same;
  }


})();