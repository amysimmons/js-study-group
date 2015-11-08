var React = require('react-native');

var {
  StyleSheet,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    width: 38,
    height: 38,
    color: 'blue',
  },
  background: {
    backgroundColor: '#222222',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  },
  grid: {
    flex: 1,
  },
  row: {
    flexDirection: 'row' ,
  },
  column: {
    flexDirection: 'column',
  }
});

export default StyleSheet;
