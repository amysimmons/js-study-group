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
    return (
      <View style={[styles.cell, {height: cellHeight}]}>
      	<Text></Text>
      </View>
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