var React = require('react-native');
var { Icon, } = require('react-native-icons');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
} = React;

var Score = React.createClass({
  render: function() {
    return (
      <View style={styles.scoreContainer}>
      	<View style={styles.column}>
          <Text style={styles.info}>10</Text>
          <Icon
            name='fontawesome|bomb'
            size={30}
            color='#7F888D'
            style={styles.bomb}/>
        </View>
        <View style={styles.column}>
          <Text style={styles.info}>56</Text>
          <Icon
            name='fontawesome|clock-o'
            size={30}
            color='#7F888D'
            style={styles.timer}/>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  scoreContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    paddingTop: 10,
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    width: Dimensions.get('window').width / 2,
    alignItems: 'center'
  },
  info: {
    flexDirection: 'row',
    color: '#7F888D',
    fontSize: 18
  },
  bomb: {
    width: 50,
    height: 50,
    flexDirection: 'row'
  },
  timer: {
    width: 50,
    height: 50,
    flexDirection: 'row'
  }
});

export default Score;