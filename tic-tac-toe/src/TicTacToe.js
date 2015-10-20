import React from 'react';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';

var TicTacToe = React.createClass({
  getInitialState (){
    var grid,
        winningCombinations,
        player,
        computer;

    return{
      grid: this.createGridData(),
      winningCombinations: winningCombinations,
      player: player,
      computer: computer
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