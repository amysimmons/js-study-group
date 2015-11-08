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
     console.log('cellheight in cell ', cellHeight)
    return (
      <View style={[styles.cell, {height: cellHeight}]}>
      	<Text>Cell</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  cell: {
    width: Dimensions.get('window').width / 10,
  }
});

export default Cell;