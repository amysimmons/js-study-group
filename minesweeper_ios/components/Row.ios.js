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
    var gridHeight = this.props.gridHeight;
    for (var x = 0; x < this.props.squares.length; x++) {
      var cell = <Cell type={this.props.squares[x]} key={x} yPos={this.props.yPos} xPos={x} cellHeight={gridHeight / 10}/>;
      gridRow.push(cell);
    };

    return (
      <View style={styles.row}>
      	{gridRow}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  }
});

export default Row;