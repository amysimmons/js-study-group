import React from 'react/addons';
import ButtonsContainer from './ButtonsContainer';
import OutputView from './OutputView';
import QueryAnswerView from './QueryAnswerView';

var Calculator = React.createClass({
  getInitialState (){
    return{
      calculations: [],
      query: [],
      result: null
    };
  },
  add (value, nextValue){
    var result = this.state.result;
    return result = value + nextValue;
  },
  subtract (value, nextValue){
    var result = this.state.result;
    return result = value - nextValue;
  },
  divide (value, nextValue){
    var result = this.state.result;
    return result = value / nextValue;
  },
  multiply (value, nextValue){
    var result = this.state.result;
    return result = value * nextValue;
  },
  updateQuery (value, type){
    var query = this.state.query;
    query.push({value: value, type: type});
    this.setState({query: query});
    
    this.updateDisplay();
  },
  calculateQuery (query){

  },
  updateDisplay (){
    var query = this.state.query;

    if(this.state.display == null){
      var display = '';
      display += query[query.length-1].value.toString(); 
    }else {
      var display = this.state.display;
      display += query[query.length-1].value.toString(); 
    }

    this.setState({display: display});
  },
  render (){
    var query = this.state.query;
    var result = this.state.result;
    var display = this.state.display;

    return (
      <div className="calculator">
          <QueryAnswerView
            query={query}
            result={result}/>

          <OutputView
            query={query}
            result={result}
            display={display}/>

          <ButtonsContainer
            updateQuery={this.updateQuery}
            calculateQuery={this.calculateQuery}/>
      </div>
    )
  }
});

module.exports = Calculator;

//array of objects
//each object has a value and an operation
//array of operands and operators all in the one list
// sso u can check wherther it is an operaotr or operand
// array of objects, store a value and a type
// if the last thing in the array is a number... u can append that to the display....

//if the last thing is an operator... u can do something else...
//if u press the operator twice u can remove the previous operaotr
//modifyng the stack and calculating the stack as a completely differnt funciton
// so u could have 10 diffferent sets, run them through the functions, and see if they
//reduce to the single output
//reduce

//if last thing is operand u know to display the result
//if last thing is numeric, u knwo to display the numeric input

//operations array

/*

calculations = [{
  query: [{value: 0, type: operation}],
  result: integer 
}]


a.forEach(function(entry) {
    console.log(entry);
});

*/


