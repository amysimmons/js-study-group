import React from 'react';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';

var TicTacToe = React.createClass({
  getInitialState (){
    var grid,
        winningCombinations,
        playerChoice;

    return{
      grid: this.createGridData(),
      winningCombinations: winningCombinations,
      playerChoice: playerChoice
    };

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
  render (){
    var grid = this.state.grid;

    return (
      <div className="game">
          <Grid
          grid={grid}
          rowCount="3"
          squareCount="3"/>
      </div>
    )
  }
});

module.exports = TicTacToe;