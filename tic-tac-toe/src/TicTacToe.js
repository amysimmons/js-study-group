import React from 'react';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';

var TicTacToe = React.createClass({
  getInitialState (){
    var grid,
        winningCombinations,
        player = 'naught',
        computer = 'cross',
        turn = 0;

    return{
      grid: this.createGridData(),
      winningCombinations: winningCombinations,
      player: player,
      computer: computer,
      turn: turn
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
    grid[position[0]][position[1]] = player;
    
    var win = this.checkForWin();
    this.state.turn++;

    if (win == false && this.state.turn < 9) {
      this.computerTurn();
    }else {
      this.gameOver();
    }

    this.setState({grid: grid})
  },
  computerTurn(){
    console.log('computer turn');

    var grid = this.state.grid;
    var computer = this.state.computer;
    //computer logic goes here

    if(this.state.turn <= 1){
      //pick random position
      var row = Math.floor(Math.random() * 2) + 1;
      var square = Math.floor(Math.random() * 2) + 1;
      
      grid[row][square] = computer;
      //debugger
    }else {
      //if there are two of either naught or cross
      //in any of the winning combinations
      //go in the empty space of that row
    }

    var win = this.checkForWin();
    this.state.turn++;

    if (win == false && this.state.turn < 9) {
      //this.playerTurn();
    }else {
      this.gameOver();
    }

    this.setState({grid: grid})
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