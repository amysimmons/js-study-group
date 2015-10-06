import React from 'react/addons';
import InputButtons from './InputButtons';
import OutputView from './OutputView';

var Calculator = React.createClass({
  getInitialState: function(){
    var value,
        nextValue,
        operation,
        result

    return{
      value: 0,
      nextValue: 0,
      operation: null,
      result: 0
    };
  },
  add: function(value, nextValue){
    var result = this.state.result;
    result = value + nextValue;
    return result;
  },
  subtract: function(value, nextValue){
    var result = this.state.result;
    result = value - nextValue;
    return result;
  },
  divide: function(value, nextValue){
    var result = this.state.result;
    result = value / nextValue;
    return result;
  },
  multiply: function(value, nextValue){
    var result = this.state.result;
    result = value * nextValue;
    return result;
  },
  setValue: function(){
    debugger
  },
  setNextValue: function(){

  },
  setOperation: function(){
    //debugger
  },
  getResult: function(value, nextValue, operation){
    var value = this.state.value,
        nextValue = this.state.nextValue,
        operation = this.state.operation;
        result = this.state.result;

    switch(operation) {
        case "+":
            result = this.add();
            break;
        case "-":
            result = this.subtract();
            break;
        case "/":
            result = this.divide();
            break;
        case "x":
            result = this.multiply();
            break;
    }
    console.log(result);
    this.setState({result: result});
  },
  render: function(){
    var value = this.state.value,
        nextValue = this.state.nextValue,
        result = this.state.result;

    return (
      <div className="calculator">
          <OutputView
            value={value}
            nextValue={nextValue}
            result={result}
            showResult={this.showResult}
            setValue={this.setValue}
            setNextValue={this.setNextValue}
            setOperation={this.setOperation}/>

          <InputButtons
            value={value}
            nextValue={nextValue}
            result={result}
            showResult={this.showResult}
            setValue={this.setValue}
            setNextValue={this.setNextValue}
            setOperation={this.setOperation}/>
      </div>
    )
  }
});

module.exports = Calculator;


