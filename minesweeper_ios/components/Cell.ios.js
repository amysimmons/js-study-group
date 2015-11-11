var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} = React;

var Cell = React.createClass({

  handleCellPress(xPos, yPos) {
    console.log('pressing me')
    var grid = this.props.grid;
    var xPos = this.props.xPos;
    var yPos = this.props.yPos;
    var clicked = grid[xPos][yPos];
    console.log('cell: ', xPos, yPos);

    if (this.props.placeFlag) {
      console.log('placing flag')
       clicked.flagged = true;
      //this.props.placeFlag(clicked);
    }else{
       console.log('revealing cell')
      //this.props.revealCell(clicked);
    }
  },

  render() {
    var cellHeight = this.props.cellHeight;
    var handleCellPress = this.handleCellPress;

    return (
      <TouchableHighlight onPress={handleCellPress} underlayColor="#00A6A6">
        <View style={[styles.cell, {height: cellHeight}]}>
        </View>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  cell: {
    width: Dimensions.get('window').width / 10,
    backgroundColor: '#00A6A6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff'
  }
});

export default Cell;