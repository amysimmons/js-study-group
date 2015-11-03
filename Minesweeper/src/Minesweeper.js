import React from 'react';
import Grid from './Grid';
import GridSquare from './GridSquare';
import GameStatus from './GameStatus';

var Minesweeper = React.createClass({
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
    this.replaceState(this.getInitialState());
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

module.exports = Minesweeper;