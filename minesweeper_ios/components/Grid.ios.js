import Row from './Row.ios.js';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Grid = React.createClass({
  getInitialState () {
      return {
          gridHeight: this.getDimensions
      }
  },
  getDimensions (event) {
      var {x, y, width, height} = event.nativeEvent.layout;
      this.setState({
          gridHeight: height
      })
  },
  render: function() {
  	var grid = [];
     for (var i = 0; i < this.props.boardSize.rows; i++) {
      var row = (<Row squares={this.props.grid[i]} key={i} yPos={i} gridHeight={this.state.gridHeight} handleCellPress={this.props.handleCellPress}/>);
      grid.push(row);
    };

    return (
      <View style={styles.column} onLayout={this.getDimensions}>
      	{grid}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    flex: 2.5,
  }
});

export default Grid;