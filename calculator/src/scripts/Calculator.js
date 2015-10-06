import React from 'react/addons';
import InputButtons from './InputButtons';
import OutputView from './OutputView';

var Calculator = React.createClass({
  getInitialState: function(){
    var firstNumber,
        secondNumber,
        result

    return{
      firstNumber: null,
      secondNumber: null,
      result: 0
    };
  },
  add: function(){
    var images = this.state.images;
    var leftPosition = this.state.leftPosition;
    var trackStyles = this.state.trackStyles;

  },
  subtract: function(){
    var images = this.state.images;
    var leftPosition = this.state.leftPosition;
    var trackStyles = this.state.trackStyles;

  },
  divide: function(){

  },
  multiply: function(){

  },
  setFirstNumber: function(){

  },
  setSecondNumber: function(){

  },
  getResult: function(){

  },
  render: function(){
    var firstNumber = this.state.firstNumber,
        secondNumber = this.state.secondNumber,
        result = this.state.result;

    return (
      <div className="calculator">
          <OutputView
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            result={result}
            showResult={this.showResult}/>

          <InputButtons
            firstNumber={firstNumber}
            secondNumber={secondNumber}
            result={result}/>
      </div>
    )
  }
});

module.exports = Calculator;


