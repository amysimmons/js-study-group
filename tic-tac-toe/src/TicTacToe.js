import React from 'react';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';

var TicTacToe = React.createClass({
  getInitialState (){
    var grid,
        winningCombinations,
        emptyPositions,
        player = 'naught',
        computer = 'cross',
        turn = 0;

    return{
      grid: this.createGridData(),
      winningCombinations: winningCombinations,
      player: player,
      computer: computer,
      turn: turn,
      emptyPositions: emptyPositions
    };
  },
  componentDidMount() {
    this.setWinningCombinations(this.state.grid);
    //window.addEventListener('keydown', this.handleKeyDown);
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
      [grid[0][0], grid[0][1], grid[0][2]],
      [grid[1][0], grid[1][1], grid[1][2]],
      [grid[2][0], grid[2][1], grid[2][2]],
      [grid[0][0], grid[1][1], grid[2][2]],
      [grid[0][2], grid[1][1], grid[2][0]]
    ]
    this.setState({winningCombinations: winningCombinations});
  },
  playerTurn(position) {
    console.log('player went at position ', position);

    var grid = this.state.grid;
    var player = this.state.player;
    var winningCombinations = this.state.winningCombinations;
    grid[position[0]][position[1]] = player;

    var win = this.checkForWin();
    var emptyPositions = this.findEmptyPositions();
    this.state.turn++;

    if (win == false && this.state.turn < 9) {
      this.computerTurn();
    }else {
      this.gameOver();
    }

    this.setState({grid: grid, winningCombinations: winningCombinations, emptyPositions: emptyPositions})
  },
  computerTurn(){

    var _this = this;
    setTimeout(function(){
      console.log('computer turn');

      var grid = _this.state.grid;
      var computer = _this.state.computer;
      var player = _this.state.player;
      var emptyPositions = _this.state.emptyPositions;
      var winningCombinations = _this.state.winningCombinations;
      var originalNumTurns = _this.state.turn;

      if(_this.state.turn <= 1){
        //pick random position
        var randomPos = emptyPositions[Math.floor(Math.random()*emptyPositions.length)];
        grid[randomPos[0]][randomPos[1]] = computer;
      }else {
        //if there are two of either naught or cross
        //in any of the winning combinations
        //go in the empty space of that row

        var computerWent = false;

        for (var i = 0; i < winningCombinations.length; i++) {
          var winningCombination = winningCombinations[i];
          //debugger

          var computerCount = 0;
          var playerCount = 0;
          var emptyCount = 0;

          for (var i = 0; i < winningCombination.length; i++) {
            var val = winningCombination[i];
            if (val == "empty"){
              emptyCount++;
            }
            if (val == player){
              playerCount++;
            }
            if (val == computer){
              computerCount++;
            }
          };

          if(computerCount == 2){
            var square = winningCombination.indexOf("empty");
            debugger
            winningCombination[square] = computer;
            computerWent = true;
            break;
          }else if(playerCount == 2){
            var square = winningCombination.indexOf("empty");
            debugger
            winningCombination[square] = computer;
            computerWent = true;
            break;
          }

        };
        //debugger
        //check if computer made a move, if it didn't go
        // in a random empty place for now

        if (!computerWent){
          debugger
          var randomPos = emptyPositions[Math.floor(Math.random()*emptyPositions.length)];
          grid[randomPos[0]][randomPos[1]] = computer;
        }

      }

      var win = _this.checkForWin();
      _this.state.turn++;

      if (win == true && _this.state.turn == 9) {
        _this.gameOver();
      }

      _this.setState({grid: grid, winningCombinations: winningCombinations, emptyPositions: emptyPositions})

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
  checkForWin() {
    var winningCombinations = this.state.winningCombinations;
    for (var i = 0; i < winningCombinations.length; i++) {
      var winningCombination = winningCombinations[i];

      if((winningCombination[i] !== 'empty') && (winningCombination[i] !== winningCombination[0])) {
        return true;
      }
      return false;
    };
  },
  gameOver() {
    console.log('game over');
    this.setState({gameOver: true})
  },
  render (){
    var grid = this.state.grid;
    var playerTurn = this.playerTurn;

    return (
      <div className="game">
          <Grid
          grid={grid}
          rowCount="3"
          squareCount="3"
          playerTurn={playerTurn}/>
      </div>
    )
  }
});

module.exports = TicTacToe;