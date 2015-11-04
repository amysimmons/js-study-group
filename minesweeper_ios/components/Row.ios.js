import Cell from './Cell.ios.js';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Row = React.createClass({
  render: function() {

    var gridRow = [];

    for (var x = 0; x < this.props.squares.length; x++) {
      var cell = <Cell type={this.props.squares[x]} key={x} yPos={this.props.yPos} xPos={x}/>;
      gridRow.push(cell);
    };

    return (
      <View>
      	{gridRow}
      </View>
    );
  }
});

export default Row;