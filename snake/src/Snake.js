import React from 'react/addons';
import Grid from './Grid';
import Score from './Score';
import GameStatus from './GameStatus';

var Snake = React.createClass({
  getInitialState (){
    var grid,
    	startPosition,
    	direction,
    	currentSnake 

    return{
		grid: {},
		startPosition: [20, 20],
		direction: 'r',
		currentSnake: [[20,20]]
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
    var nextValue = this.state.nextValue;
    var numbersEntered = this.state.numbersEntered;
    var result = this.state.result;
    var value = this.state.value;
    var valueToDisplay = this.state.valueToDisplay;

    return (
      <div className="game">
          <Grid
            value={value}
            nextValue={nextValue}
            result={result}
            getResult={this.getResult}
            setValue={this.setValue}
            setNextValue={this.setNextValue}
            setOperation={this.setOperation}
            valueToDisplay={valueToDisplay}/>

          <Score
            value={value}
            nextValue={nextValue}
            result={result}
            valueToDisplay={valueToDisplay}
            numbersEntered={numbersEntered}
            getResult={this.getResult}
            setValue={this.setValue}
            setNextValue={this.setNextValue}
            setOperation={this.setOperation}
            setNumbersEntered={this.setNumbersEntered}/>

          <GameStatus
            value={value}
            nextValue={nextValue}
            result={result}
            valueToDisplay={valueToDisplay}
            numbersEntered={numbersEntered}
            getResult={this.getResult}
            setValue={this.setValue}
            setNextValue={this.setNextValue}
            setOperation={this.setOperation}
            setNumbersEntered={this.setNumbersEntered}/>
      </div>
    )
  }
});

module.exports = Snake;