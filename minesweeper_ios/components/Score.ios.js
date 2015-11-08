var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
} = React;

var Score = React.createClass({
  render: function() {
    return (
      <View style={styles.scoreContainer}>
      	<Text>Score</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  scoreContainer: {
    flex: 0.5,
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  }
});

export default Score;