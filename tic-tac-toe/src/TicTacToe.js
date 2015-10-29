import React from 'react';
import Grid from './Grid';
import GridSquare from './GridSquare';
import GameStatus from './GameStatus';

var TicTacToe = React.createClass({
  getInitialState (){
    var grid,
        winningCombinations,
        emptyPositions,
        player = 'naught',
        computer = 'cross',
        turn = 0,
        winner = false;

    return{
      grid: this.createGridData(),
      winningCombinations: winningCombinations,
      player: player,
      computer: computer,
      turn: turn,
      emptyPositions: emptyPositions,
      winner: winner
    };
  },
  componentDidMount() {
    this.setWinningCombinations(this.state.grid);
  },
  createGridData() {
    var grid = [];
    for(var i = 0; i < 3; i++){
      grid.push([]);
      for(var j = 0; j < 3; j++){
        grid[i].push('empty');
      }
    }
    return grid;
  },
  setWinningCombinations(grid) {
    var winningCombinations = [
      grid[0],
      grid[1],
      grid[2],
      [grid[0][0], grid[1][0], grid[2][0]],
      [grid[0][1], grid[1][1], grid[2][1]],
      [grid[0][2], grid[1][2], grid[2][2]],
      [grid[0][0], grid[1][1], grid[2][2]],
      [grid[2][0], grid[1][1], grid[0][2]]
    ]
    this.setState({winningCombinations: winningCombinations});
    return winningCombinations;
  },
  playerTurn(position) {
    console.log('player went at position ', position);

    var grid = this.state.grid;
    var player = this.state.player;
    grid[position[0]][position[1]] = player;

    var winningCombinations = this.setWinningCombinations(grid);
    var win = this.checkForWin(winningCombinations);
    var turn = this.state.turn;
    turn++;

    if (win == false && turn <= 9) {
      this.computerTurn();
    }else {
      this.gameOver(win);
    }

    this.setState({grid: grid, winningCombinations: winningCombinations, turn: turn})
  },
  computerTurn(){

    var _this = this;
    setTimeout(function(){
      console.log('computer turn');

      var grid = _this.state.grid;
      var computer = _this.state.computer;
      var turn = _this.state.turn;
      var player = _this.state.player;
      var emptyPositions = _this.findEmptyPositions();
      var winningCombinations = _this.setWinningCombinations(_this.state.grid);

      var randomPos = emptyPositions[Math.floor(Math.random()*emptyPositions.length)];
      grid[randomPos[0]][randomPos[1]] = computer;
      console.log(emptyPositions);

/*  logic commented out because square variable is inaccurate

      if(_this.state.turn <= 1){
        //pick random position
        var randomPos = emptyPositions[Math.floor(Math.random()*emptyPositions.length)];
        grid[randomPos[0]][randomPos[1]] = computer;
        console.log(emptyPositions);
      }else {
        //if there are two of either naught or cross
        //in any of the winning combinations
        //go in the empty space of that row

        var computerWent = false;

        for (var i = 0; i < winningCombinations.length; i++) {
          var winningCombination = winningCombinations[i];
          var computerCount = 0;
          var playerCount = 0;
          var emptyCount = 0;
          var row;
          var square;

          //gets the row in super hacky way!
          if (i >= 0 & i <= 2){
            row = i;
          }else {
            row = winningCombination.indexOf("empty");
          }

          for (var x = 0; x < winningCombination.length; x++) {
            var val = winningCombination[x];
            if (val == player){
              playerCount++;
            }
            if (val == computer){
              computerCount++;
            }
            if (val == "empty"){
              emptyCount++;
            }
          };


          //square is wrong - it's not always the right index
          if(computerCount == 2 && emptyCount == 1){
            var square = winningCombination.indexOf("empty");
            debugger
            grid[row][square] = computer;
            console.log('row, square', row, square);
            console.log(emptyPositions);
            computerWent = true;
            break;
          }else if(playerCount == 2 && emptyCount == 1){
            var square = winningCombination.indexOf("empty");
            debugger
            grid[row][square] = computer;
            console.log('row, square', row, square);
            console.log(emptyPositions);
            computerWent = true;
            break;
          }

        };
        //check if computer made a strategic move,
        //if it didn't, go in a random empty place
        if (!computerWent){
          debugger
          var randomPos = emptyPositions[Math.floor(Math.random()*emptyPositions.length)];
          grid[randomPos[0]][randomPos[1]] = computer;
          console.log(emptyPositions);
        }

      }
      */

      winningCombinations = _this.setWinningCombinations(grid);
      var win = _this.checkForWin(winningCombinations);
      turn++;

      if ((win == player || win == computer) || turn > 9) {
        _this.gameOver(win);
      }

      _this.setState({grid: grid, winningCombinations: winningCombinations, turn: turn, emptyPositions: emptyPositions})

    }, 1000);

  },
  findEmptyPositions() {
    var grid = this.state.grid;
    var emptyPositions = [];
    for (var i = 0; i < grid.length; i++) {
      var row = grid[i];
      for (var x = 0; x < row.length; x++) {
        var square = row[x];
        if (square == "empty"){
          emptyPositions.push([i,x])
        }
      };
    };
    return emptyPositions;
  },
  checkForWin(winningCombinations) {
    var player = this.state.player;
    var computer = this.state.computer;
    var win = false;

    for (var i = 0; i < winningCombinations.length; i++) {

      var computerCount = 0;
      var playerCount = 0;
      var winningCombination = winningCombinations[i];

      for (var x = 0; x < winningCombination.length; x++) {
        var val = winningCombination[x];
        if (val == player){
          playerCount++;
        }
        if (val == computer){
          computerCount++;
        }
      };

      if (playerCount == 3) {
        win = player;
        break;
      }
      if (computerCount == 3) {
        win = computer;
        break;
      }
    };

    return win;
  },
  gameOver(win) {
    this.setState({winner: win});
    console.log('game over');
  },
  newGame(){
    console.log('new game')
    //this.replaceState(this.getInitialState());
  },
  render (){
    var grid = this.state.grid;
    var winner = this.state.winner;
    var playerTurn = this.playerTurn;
    var newGame = this.newGame;

    return (
      <div className="game">
          <Grid
          grid={grid}
          rowCount="3"
          squareCount="3"
          playerTurn={playerTurn}/>
          <GameStatus
          winner={winner}
          newGame={newGame}/>
      </div>
    )
  }
});

module.exports = TicTacToe;