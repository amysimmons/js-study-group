var React = require('react-native');
var { Icon, } = require('react-native-icons');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} = React;

var Options = React.createClass({

  _onPressButton(){
   return style={underlayColor:'#fff'};
  },

  render() {
    return (
     <View style={styles.optionsContainer}>
        <TouchableHighlight style={styles.column}  onPress={this._onPressButton} underlayColor="white">
          <View style={styles.center}>
            <Icon
              name='fontawesome|flag-o'
              size={30}
              color='#7F888D'
              style={styles.flag}/>
            <Text style={styles.info}>Place Flag</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.column} onPress={this._onPressButton} underlayColor="white">
          <View style={styles.center}>
            <Icon
              name='fontawesome|refresh'
              size={30}
              color='#7F888D'
              style={styles.reset}/>
            <Text style={styles.info}>New Game</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  optionsContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    width: Dimensions.get('window').width / 2,
  },
  center: {
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    color: '#7F888D',
    fontSize: 18,
  },
  flag: {
    width: 50,
    height: 50,
    flexDirection: 'row'
  },
  reset: {
    width: 50,
    height: 50,
    flexDirection: 'row'
  }
});

export default Options;