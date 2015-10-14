import React from 'react/addons';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';
import GameStatus from './GameStatus';

var Snake = React.createClass({
  getInitialState (){
    var grid,
    	snake = {
			startPosition: [20, 20],
			direction: 'd',
			currentSnake: [[20, 20], [20, 21], [20, 22], [20, 23], [20, 24]]			
		};

    return{
		grid: this.createGridData(snake.currentSnake),
		snake: snake

    };
  },
  componentDidMount() {
  	this.startGame();
  },
  startGame () {
  	this.setState(this.state);
  	setInterval(() => {
  		var nextSnakePositions = this.state.snake.currentSnake.slice();
  		var nextHead = nextSnakePositions[0].slice();
  		switch(this.state.snake.direction){
  			case 'r':
  				nextHead[0]++;
  			break;
  			case 'l':
  				nextHead[0]--;
  			break;
  			case 'd':
  				nextHead[1]++;
  			break;
  			case 'u':
  				nextHead[1]--;
  			break;
  		}
  		nextSnakePositions.unshift(nextHead);
  		nextSnakePositions.pop();
  		this.setState({
  			grid : this.createGridData(nextSnakePositions),
  			snake : {
  				direction: this.state.snake.direction,
  				currentSnake: nextSnakePositions
  			}
  		});
  	}, 1000);
  },
  endGame() {

  },
  moveSnake () {

  },
  placeFood () {

  },
  eatFood () {

  },
  createGridData(currentSnakePositions = []) {
  	var grid = [];
    for(var i = 0; i < 40; i++){
    	grid.push([]);
    	for(var j = 0; j < 40; j++){
    		grid[i].push('empty');
    	}
    }

    currentSnakePositions.forEach(([x, y]) => {
    	grid[y][x] = 'snake';
    });

    return grid;
  },
  render (){
    var grid = this.state.grid;
    var snake = this.state.snake;

    return (
      <div className="game">
          <Score/>
          <Grid 
          grid={grid}
          snake={snake}
          rowCount="40"
          squareCount="40"/>
          <GameStatus/>
      </div>
    )
  }
});

module.exports = Snake;