import Row from './Row.ios.js';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Grid = React.createClass({

  render: function() {
  	var grid = [];

     for (var i = 0; i < this.props.boardSize.rows; i++) {
      var row = (<Row squares={this.props.grid[i]} key={i} yPos={i}/>);
      grid.push(row);
    };

    return (
      <View>
      	{grid}
      </View>
    );
  }
});

export default Grid;

//grid flex direction column
//row flex direction row
//cell 


