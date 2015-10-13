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
  updateQuery (value, type){
    var query = this.state.query;

    if (value == 'AC') {
      this.replaceState(this.getInitialState());
    } 
    else {
      query.push({value: value, type: type});
      this.setState({query: query});
      this.updateDisplay();
    }
  },
  calculateQuery (query){

    var getParenthesisIndexes = function(query, _this){
      var query = query;
      var parenthesesIndexes = [];
      var getSubQuery = function(query, parenthesesIndexes){

        //for each pair of parenthesis, starting from the inner most, 
        //calculate whats inside them 
        //and replace that part of the query with the result
        for (var i = parenthesesIndexes.length - 1; i >= 0; i--) {
          var parenthesesIndex = parenthesesIndexes[i][0];
          var chunk = query.slice(parenthesesIndex[0]+1, parenthesesIndex[1]);
          var values = [];

          chunk.forEach(function(e){
            values.push(e.value);
          });

          var chunkResult = {
            type: "number",
            value: _this.calculateChunk(values)[0].toString()
          }
       
          query.splice(parenthesesIndex[0], parenthesesIndex[1] + 1 - parenthesesIndex[0], chunkResult);
          getParenthesisIndexes(query, _this);
        };
      };

      //find indexes for all parenthesis pairs
      var openParentheses = [];
      var closingParentheses = [];

      for (var i = 0; i < query.length; i++) {
        var value = query[i].value;
        if (value == '('){
          openParentheses.push(i);
        }
        if (value == ')') {
          closingParentheses.unshift(i);
        }
      };

      //zips the two arrays
      if (openParentheses.length > 0 && closingParentheses.length > 0){
        
        var parenthesesIndexes = openParentheses.map(function (e, i) {
          return [[openParentheses[i], closingParentheses[i]]];
        });
        ;
        var result = getSubQuery(query, parenthesesIndexes);

      //when no parenthesis are left, calculate the final result
      }else {
      
        var queryValues = [];

        query.forEach(function(e){
          queryValues.push(e.value);
        });

        var result = _this.calculateChunk(queryValues);
      }

      console.log('hi res',result);
      return result;
    };

    var calculations = this.state.calculations;
    var query = this.state.query;
    var tempQuery = this.state.query;
    var result = this.state.result;
    var _this = this;
    var queryResult = getParenthesisIndexes(query, _this);

    this.setState({
      query: tempQuery, 
      result: queryResult
    });

  console.log('tempquery', tempQuery);  
  console.log('endresult', queryResult);

    debugger

    //push the original query and result into calculations array
    //log out result 
    //set state 

    //You need to support multiple levels of nested parentheses, 
    //ex. (2 / (2 + 3.33) * 4) - -6
  },
  calculateChunk (values){

    //finds the indexes of the operators 
    //adds them to an array and sorts them based on importance
    //start at the first index, get the left and right values
    var getOperatorIndexes = function(values){

      var values = values;
      var operatorIndexes=[];

      var getResult = function(values, operatorIndexes) {
        for (var x = 0; x < operatorIndexes.length; x++) {
          var values = values;
          var index = operatorIndexes[x];
          var leftVal = "";
          var leftValStartIndex;
          var rightVal = "";
          var rightValEndIndex;
          var result;

          //for values going backwards from the first index until operator type != number
          //push into left val
          for (var i = index - 1; i >= 0; i--) {
            var value = values[i];
            if (value == "+" || value == "-" || value=="x" || value=='/') {
              leftValStartIndex = i + 1;
              break;
            }
            leftVal = value + leftVal;
            leftValStartIndex = 0;
          };

          //for values going forwards from the first index, until operator type != number
          //push into second val;
          for (var i = index + 1; i < values.length; i++) {
            var value = values[i];
            if (value == "+" || value == "-" || value=="x" || value=='/') {
              rightValEndIndex = i - 1;
              break; 
            }
            rightVal += value;
            rightValEndIndex = values.length - 1;
          };

          //calculate result
          var currentOperation = values[index];
          var result;
          switch(currentOperation) {
          case "+":
              result = parseFloat(leftVal) + parseFloat(rightVal);
              break;
          case "-":
              result = parseFloat(leftVal) - parseFloat(rightVal);
              break;
          case "/":
              result = parseFloat(leftVal) / parseFloat(rightVal);
              break;
          case "x":
              result = parseFloat(leftVal) * parseFloat(rightVal);
              break;
          }

          //get the left val start index
          //get the right val end index
          //so you can replace the in between values with the result 
          //perform the operation
          //replace that part of the chunk with the result
          //if necessary, move onto the next index 
          values.splice(leftValStartIndex, rightValEndIndex + 1 - leftValStartIndex, result);

          if (values.indexOf("+") > -1 || values.indexOf("-") > -1 || values.indexOf("x") > -1 || values.indexOf('/') > -1){
            getOperatorIndexes(values);
          }
   
          console.log('result here',result);
          return result;
        };
      };    
  
      for (var i = 0; i < values.length; i++) {
        var value = values[i];
        if (value == "x" || value == '/') {
          operatorIndexes.unshift(i);
        }
        if (value == "+" || value == "-") {
          operatorIndexes.push(i);
        }
      
      };

      if (operatorIndexes.length > 0) {
        var result = getResult(values, operatorIndexes);
      }else {
         return result;
      };
    };

    var values = values;
    var result = getOperatorIndexes(values);
    return values;
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


