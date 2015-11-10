var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
} = React;

var Cell = React.createClass({
  render: function() {

    var cellHeight = this.props.cellHeight;
    var xPos = this.props.xPos;
    var yPos = this.props.yPos;
    var handleCellPress = this.props.handleCellPress(xPos, yPos);

    return (
      <TouchableHighlight style={} onPress={handleCellPress} underlayColor="#00A6A6">
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