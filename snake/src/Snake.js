import React from 'react/addons';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';
import GameStatus from './GameStatus';

var Snake = React.createClass({
  getInitialState (){
    var grid,
    	startPosition,
    	direction,
    	currentSnake 

    return{
		grid:[],
		snake: {
			startPosition: [20, 20],
			direction: 'r',
			currentSnake: [[20,20]]			
		}

    };
  },
  startGame () {

  },
  endGame() {

  },
  moveSnake () {

  },
  placeFood () {

  },
  eatFood () {

  },
  render (){
    var grid = this.state.grid;

    return (
      <div className="game">
          <Score/>
          <Grid rowCount="40"
          squareCount="40"/>
          <GameStatus/>
      </div>
    )
  }
});

module.exports = Snake;